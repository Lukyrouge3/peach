/* feed 域控制器：本域状态与动作，启动由 Application 的生命周期统一安装。 */
import { coverImage, remoteCoverUrl } from './../card-art/markup';
import { feedIdentity } from './../card-art/feed-identity';
import { $, api, esc, foldName, icon, isCatalogPath } from '../core';
import { javTitleHtml } from '../core/jav-title';
import { COVER_FRONT_RATIO } from './../appearance/layout';
import { catalogState } from './catalog.js';
import { managedTaken, openManagedRoute, releaseManagedRoute, updateManagedRoute } from './../history/managed';
import { loadingDotsHtml, noteHtml, stopAutoScroll, wireAutoScroll } from '../ui-kit';
import { preferencesState, wireDrag } from './preferences.js';
import { pushEntityPage } from './entity.js';
import { applicationEffects } from './effects';
export const feedState = { FEED_SKELETON_CARDS: undefined, feedNewSkeletonHtml: undefined, entityShapes: undefined, entityShapesComplete: false, hasEntityShape: undefined, hasEntityPart: undefined, feedNewSkeletonSection: undefined, COSTAR_SKELETON_PEOPLE: undefined, costarSkeletonFoot: undefined, factsSkeleton: undefined, feedRevision: undefined, feedNewHelpers: undefined, feedNewActions: undefined, HERO_WIDE_PX: undefined };

export function feedNewCoverHtml(item){
  if(item.has_cover)return coverImage(item,'big');
  if(!item.cover_url||!item.code)return item.cover_fetching
    ?`<span class="nopic" data-feed-cover-state="fetching">${loadingDotsHtml('Fetching')}</span>`
    :'<span class="nopic" data-feed-cover-state="missing">No cover</span>';
  // 官方图经 Peach 代理取，断网或上游失败时换成「封面未取得」占位。
  return coverImage(item,'big').replace(/ src="[^"]*"/,
    ` src="${esc(remoteCoverUrl(item))}" data-panel-prior="1"`)
    .replace('data-drop="self"', 'data-drop="initial" data-initial="Cover not obtained" data-drop-class="nopic"');
}

export function feedNewCardHtml(item){
  // 署名与日期各占一行，长出演名单可从悬停说明查看。
  const label=[item.performers&&`<span class="feednewperformers" title="${esc(item.performers)}">${esc(item.performers)}</span>`,
    item.release_date&&`<span>${esc(item.release_date)}</span>`].filter(Boolean)
    .join('');
  const cover=feedNewCoverHtml(item);
  // 番号与标题排在同一个两行的标题块里，和资产卡一样：番号加粗打头，标题接在后面截断。
  const name=item.code||String(item.title||'').trim()||'Untitled release';
  const heading=item.code
    ?javTitleHtml({is_jav:true,code:item.code,name:item.code,display_title:item.title||''})
    :esc(name);
  const open=item.code
    ?`<a class="feednewopen" href="/works/${encodeURIComponent(item.code)}" aria-label="Open details for ${esc(name)}"></a>`:'';
  return `<article class="card feednewcard${item.read?' isread':''}" data-feed-id="${item.id}">
    ${open}<div class="pic" style="--card-ratio:${COVER_FRONT_RATIO}">${cover}
      <div class="hovertools feednewtools">
        <button type="button" data-feed-action="${item.wanted?'unwant':'want'}" aria-pressed="${!!item.wanted}" title="${item.wanted?'Remove from wants':'Want'}" aria-label="Want ${esc(name)}">${icon('star')}</button>
        <button type="button" data-feed-action="ignore" title="Not interested" aria-label="Not interested ${esc(name)}">${icon('x')}</button>
        <button type="button" data-feed-action="read" title="Mark as watched" aria-label="Mark as watched ${esc(name)}">${icon('check')}</button></div></div>
    <div class="meta">${feedIdentity(item)}<div class="mtext"><span class="t">${heading}</span>
      <div class="s mono">${label||(item.title?'':'Metadata not fetched yet')}</div></div></div></article>`;
}

export function installEntityShapeBootstrap(){
  const script=document.getElementById('peach-entity-shape');
  if(!script)return;
  try{
    const shape=JSON.parse(script.textContent||'null');
    if(!shape?.id||typeof shape.kind!=='string'||!Array.isArray(shape.names)||!Array.isArray(shape.parts))return;
    feedState.entityShapes=new Map([String(shape.id),...shape.names]
      .map(name=>[`${shape.kind}/${foldName(name)}`,shape.parts]));
  }catch{/* 无效的首屏形状由异步名单处理。 */}
}

export async function loadEntityShapes(){
  const effects=applicationEffects;
  const data=await api('/api/entity/shapes',{signal:effects.signal}).catch(()=>null);
  if(!effects.isActive)return feedState.entityShapes;
  if(data&&!data.error){
    feedState.entityShapesComplete=true;
    feedState.entityShapes=new Map((data.entities||[])
      .flatMap(entity=>[String(entity.id),...entity.names].map(name=>[`${entity.kind}/${foldName(name)}`,entity.parts])));
    if(typeof data.home?.feed==='boolean')rememberHomeFeed(data.home.feed);
    if(isFeedNewPath(location.pathname))prepareHomeFeed($('#feedNew'));
  }
  return feedState.entityShapes;
}

/* 首页有没有「未入库的新作」记在本机：首屏骨架就按上次的结论铺这一行，不等形状接口回来再插进来，
   把下面的目录往下推一跳。接口或那一行画完后改记新的结论。 */
const HOME_FEED_KEY='peach.home-feed.v1';
export function rememberHomeFeed(has){
  catalogState.homeHasFeed=has;
  try{localStorage.setItem(HOME_FEED_KEY,has?'1':'0')}catch{/* 下次照旧等接口。 */}
}
export function recalledHomeFeed(){
  try{const value=localStorage.getItem(HOME_FEED_KEY);return value==='1'?true:value==='0'?false:null}catch{return null}
}

export function prepareHomeFeed(host){
  // 一打开，宿主就归路由树：骨架只在打开之前铺，之后由画出来的那一行或空着说话。
  if(!host||managedTaken(host)||host.querySelector('[data-feed-id]'))return;
  host.hidden=catalogState.homeHasFeed!==true;
  if(catalogState.homeHasFeed!==true)return;
  host.setAttribute('aria-busy','true');
  if(!host.querySelector('.feednewskeleton'))host.innerHTML=feedState.feedNewSkeletonHtml();
}

export function feedNetworkNote(unreachable,items){
  if(!(unreachable>0)||!items.some(item=>!item.has_cover))return '';
  return noteHtml(`Covers for ${unreachable} new releases can't reach the DMM image host, which is common on China Mobile broadband. Set the DMM / FANZA connection method to Peach proxy and the next round will refetch them automatically.`,
    {variant:'warning',className:'feednetwork',actionLabel:'Set connection method',actionHref:'/sources'});
}

export function feedRowHtml(data){
  const items=data&&!data.error?(data.items||[]):[];
  return feedNetworkNote(data?.cover_network,items)
    +`<div class="feednewrow srow">${items.map(feedNewCardHtml).join('')}</div>`;
}

export function wireFeedNewRow(row){
  if(!row)return;
  wireDrag(row);
  if(preferencesState.appSettings.feedAutoScroll)wireAutoScroll(row);
}

export function isFeedNewPath(path){return isCatalogPath(path)&&path!=='/junk-files'}


export function renderHomeFeed(){
  const host=$('#feedNew');
  if(managedTaken(host)){updateManagedRoute(host,{revision:++feedState.feedRevision});return}
  prepareHomeFeed(host);
  /* 这一行不随筛选变，判在不在场只看路径：换筛选换掉的是目录的代次，不该把它这一趟作废。 */
  void openManagedRoute('feed-new',{host,revision:feedState.feedRevision,helpers:feedState.feedNewHelpers,actions:feedState.feedNewActions},
    {container:host,isCurrent:()=>isFeedNewPath(location.pathname)});
}

export function clearHomeFeed(){
  const host=$('#feedNew');
  host.querySelectorAll('.feednewrow').forEach(stopAutoScroll);
  releaseManagedRoute(host);
  host.hidden=true;host.innerHTML='';host.removeAttribute('aria-busy');
}

export function refreshFeedRows(){
  feedState.feedRevision+=1;
  // 首页那一行只在目录页画着，人不在那儿时 `updateManagedRoute` 是空操作，不会在别的页面上冒出来。
  updateManagedRoute($('#feedNew'),{revision:feedState.feedRevision});
  pushEntityPage({feedRevision: feedState.feedRevision});
}

export function syncFeedAutoScroll(){
  document.querySelectorAll('.feednewrow').forEach(row=>
    preferencesState.appSettings.feedAutoScroll?wireAutoScroll(row):stopAutoScroll(row));
}

/* 开关挪到下一帧写：它一翻，资料卡换栏、页面变高，而整页那条覆盖滚动条正观察着 `<body>`。在尺寸观察
   回调里当场写，`<body>` 这一层浅的变化本轮送不出去，浏览器就报一次 ResizeObserver 循环错误，
   每开一次资料页都进错误上报。 */
let heroWideFrame=0;
export function syncHeroWide([entry]){
  const wide=entry.contentRect.width>=feedState.HERO_WIDE_PX;
  cancelAnimationFrame(heroWideFrame);
  heroWideFrame=requestAnimationFrame(()=>{heroWideFrame=0;$('#index')?.toggleAttribute('data-hero-wide',wide)});
}

export function installFeed13() {
feedState.FEED_SKELETON_CARDS = 8;
feedState.feedNewSkeletonHtml = ()=>`<div class="feednewrow srow" data-skeleton="feed/new" aria-hidden="true">${
  `<article class="card feednewcard feednewskeleton"><div class="pic imgwait" style="--card-ratio:${COVER_FRONT_RATIO}"></div>
    <div class="meta"><div class="mtext"><span class="t"><span class="skeleton"></span></span>
      <div class="s mono"><span class="skeleton">&#8203;</span></div></div></div></article>`
    .repeat(feedState.FEED_SKELETON_CARDS)}</div>`;
feedState.entityShapes = null;
feedState.entityShapesComplete = false;
feedState.hasEntityShape = (kind,name)=>feedState.entityShapesComplete||!!feedState.entityShapes?.has(`${kind}/${foldName(name)}`);
feedState.hasEntityPart = (kind,name,part)=>!!name&&!!feedState.entityShapes?.get(`${kind}/${foldName(name)}`)?.includes(part);
feedState.feedNewSkeletonSection = ()=>`<section class="feednew">${feedState.feedNewSkeletonHtml()}</section>`;
feedState.COSTAR_SKELETON_PEOPLE = 12;
feedState.costarSkeletonFoot = ()=>`<div class="entityfoot" data-entity-foot><div class="relatedpeople" data-related-people>${
  '<button type="button" disabled tabindex="-1"><span class="skeleton" data-hero-ring></span><span class="skeleton" data-hero-costar-name>&#8203;</span></button>'
    .repeat(feedState.COSTAR_SKELETON_PEOPLE)}</div></div>`;
feedState.factsSkeleton = ()=>`<dl class="entityfacts" data-entity-facts>${
  '<dt><span class="skeleton"></span></dt><dd><span class="skeleton"></span></dd>'.repeat(5)}</dl>`;
feedState.feedRevision = 0;
feedState.feedNewHelpers = {feedRowHtml,wireFeedRow:row=>wireFeedNewRow(row)};
feedState.feedNewActions = {settled:hasItems=>rememberHomeFeed(hasItems)};
feedState.HERO_WIDE_PX = 900;
applicationEffects.resize(syncHeroWide).observe($('#index'));
}
