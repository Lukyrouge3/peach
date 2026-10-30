/* playlists 域控制器：本域状态与动作，启动由 Application 的生命周期统一安装。 */
import { pageOpens, playlistsRevision, state, writeShell } from './../shell/index';
import { buildBars, catalogState, homePath } from './catalog.js';
import { navigationState, openRoutedPage } from './navigation.js';
import { enterManagementSurface, showHomeSurfaces, showManagementBody } from './layout.js';
import { openEntity } from './entity.js';
import { $, api, esc } from '../core';
import { checkboxHtml, formModal, noteHtml } from '../ui-kit';
import { disposeStage, openPlaylist } from './media.js';
import { receiptsState } from './receipts.js';
import { applicationEffects } from './effects';
import { releaseHoverPreviews } from './../card-art/hover';
import { managedEntry } from './../history/managed';
import { settingsPath } from '../history';
export const playlistsState = { playlistWrite: undefined };

export function openTasteSignal(kind,name){
  if(kind==='tag'){
    writeShell({state:{...state,tag:name,tag_match:'all',creator:'',studio:'',q:'',state:'',orient:''}});
    catalogState.clearSearchField();navigationState.route(homePath());showHomeSurfaces();buildBars();return
  }
  openEntity(kind,name);
}

export function playlistNameField(value=''){
  return `<label class="modalfield"><span>Name</span><input class="geist-input" name="name"
    maxlength="80" placeholder="Enter a name" value="${esc(value)}"></label>`;
}

export async function saveMixAsPlaylist({title,count,save}){
  const modal=formModal({
    title:'Save as playlist',
    description:`The ${count} videos in this Mix will be saved as a list you can keep playing.`,
    body:playlistNameField(title),
    confirmLabel:'Save as playlist',
    onConfirm:()=>{
      const name=modal.dialog.querySelector('[name="name"]').value.trim();
      if(!name)throw new Error('Playlist name can\'t be empty');
      return save(name);
    }});
  modal.dialog.querySelector('[name="name"]').select();
  const {confirmed,result}=await modal.done;
  if(!confirmed)return;
  await openPlaylist(result.id,result.current_asset_id,true);
  receiptsState.actionReceipt('Saved as playlist',{undo:async()=>{
    await playlistsState.playlistWrite({action:'delete',id:result.id});openRoutedPage('/playlists');
  }});
}

export async function openAddToPlaylist(item){
  const lists=(await api('/api/playlists')).items||[];
  const rows=lists.map(list=>`<label class="pickrow">${checkboxHtml(`data-pick-playlist="${list.id}"`)}
    <span class="pickrowtext"><b>${esc(list.name)}</b><small>${list.item_count} videos</small></span></label>`).join('');
  const modal=formModal({
    title:'Add to playlist',
    description:'Check the lists to add to, or enter a name to create a new one.',
    body:playlistNameField()+(rows
      ?`<div class="picklist" role="group" aria-label="Existing playlists">${rows}</div>`
      :noteHtml('No playlists yet; enter a name to create one.',{size:'small'})),
    confirmLabel:'Save',
    confirmDisabled:true,
    onConfirm:async()=>{
      const name=modal.dialog.querySelector('[name="name"]').value.trim();
      const chosen=[...modal.dialog.querySelectorAll('[data-pick-playlist]:checked')]
        .map(box=>+box.dataset.pickPlaylist);
      const created=name
        ?(await playlistsState.playlistWrite({action:'create',name,asset_ids:[item.id]})).playlist:null;
      for(const id of chosen)await playlistsState.playlistWrite({action:'add',id,asset_ids:[item.id]});
      return {created,added:chosen};
    }});
  const sync=()=>{
    const name=modal.dialog.querySelector('[name="name"]').value.trim();
    modal.confirmButton.disabled=!name&&!modal.dialog.querySelector('[data-pick-playlist]:checked');
  };
  applicationEffects.listen(modal.dialog, 'input', sync);
  applicationEffects.listen(modal.dialog, 'change', sync);
  const {confirmed,result}=await modal.done;
  if(!confirmed)return;
  const total=(result.created?1:0)+result.added.length;
  receiptsState.actionReceipt(`Added to ${total} playlists`,{undo:async()=>{
    for(const id of result.added)await playlistsState.playlistWrite({action:'remove',id,asset_id:item.id});
    if(result.created)await playlistsState.playlistWrite({action:'delete',id:result.created.id});
  }});
}

export function rereadPlaylists(){
  releaseHoverPreviews();disposeStage(false);enterManagementSurface();
  const entry=managedEntry($('#stats'));
  if(entry?.path!=='/playlists'||!entry.host.isConnected){writeShell({pageOpens:pageOpens+1});return}
  showManagementBody({manage:false});
  writeShell({playlistsRevision:playlistsRevision+1});
}

export function routeReview(params){
  const query = new URLSearchParams(location.search);
  for(const key of ['category','queue']){
    if(params[key])query.set(key,params[key]);else query.delete(key);
  }
  navigationState.route('/review'+(query.size?'?'+query:''));
}

export function openConfigurationSection(section){
  writeShell({configurationRequestedSection:section});
  navigationState.navigatePath(settingsPath(section));
}

export function installPlaylists14() {
playlistsState.playlistWrite = body=>api('/api/playlist',{method:'POST',body:JSON.stringify(body)});
}
