/* 本地与在线详情共用标签外观、选择器和标签名称编辑。 */
import { useCallback, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { spinnerHtml, wireAnchoredMenu } from '@peach/legacy/ui';
import { Button } from '@/components/base/buttons/button';
import { foldName, icon } from '@peach/legacy/core';
import { apiGet } from '../../api';
import { pickerSections, recentTags, type DetailTag, type TagCount } from '../item-detail/item-detail';
import { TagEditor, type ManagedTag, type TagScope } from '../index/tag-operations';
import { Note } from './note';
import { useOverlayScrollbar } from './overlay-scrollbar';
import { useAction, busyProps } from '../settings/use-action';
import { queryClient } from '../query';

const Glyph = ({ name }: { name: string }) => <span className="contents" dangerouslySetInnerHTML={{ __html: icon(name) }} />;
interface DetailTagsProps {
  tags: DetailTag[]; candidates: readonly TagCount[]; scope?: TagScope; id?: string; adding?: boolean;
  label(tag: string): string; onOpen(tag: string): void; onAdd(tag: string): void; onRemove(tag: DetailTag): void;
  busyAttrs(tag: string): { 'aria-busy'?: boolean; 'aria-disabled'?: boolean };
}

export function DetailTags({ tags, candidates, scope = 'local', id, adding, label, onOpen, onAdd, onRemove, busyAttrs }: DetailTagsProps) {
  const [editing, setEditing] = useState<ManagedTag | null>(null);
  const [asked, setAsked] = useState(false);
  const inventory = useQuery({ queryKey:['tag-management', scope],
    queryFn:({ signal }) => apiGet<{ items:ManagedTag[] }>(`/api/tag-management${scope === 'online' ? '?scope=online' : ''}`, signal),
    enabled:asked && (scope === 'online' || !candidates.length) });
  const options = inventory.data?.items?.filter(tag => !tag.hidden && !tag.blocked && (scope === 'online' || tag.cat !== 'meta')) || candidates;
  const action = useAction();
  const rename = (tag: DetailTag) => { void action.run('rename', async signal => {
    const result = await queryClient.fetchQuery({ queryKey: ['tag-management', scope],
      queryFn: () => apiGet<{ items: ManagedTag[] }>(`/api/tag-management${scope === 'online' ? '?scope=online' : ''}`, signal) });
    const row = result.items.find(value => value.k === tag.k || value.aliases.includes(tag.k));
    if (!row) throw new Error('Tags changed; reopen the details');
    return row;
  }, row => setEditing(row)) };
  return <>
    <div data-stage-tags="" data-detail-tags="" id={id}>
      {tags.map(tag => <span key={tag.k} data-detail-tag="" data-tag-cat={tag.cat}>
        <button type="button" data-tag={tag.k} data-follow-tag={scope === 'online' ? tag.k : undefined}
          title={label(tag.k)} onClick={() => onOpen(tag.k)}>{label(tag.k)}</button>
        <button type="button" data-edit-tag={tag.k} title="Rename tag" aria-label={`Edit tag ${label(tag.k)}`}
          {...busyProps(!!action.busy)} onClick={() => rename(tag)}><Glyph name="pencil" /></button>
        <button type="button" data-remove-tag={tag.k} title="Hide this tag from this content" aria-label={`Delete tag ${label(tag.k)}`}
          {...busyAttrs(tag.k)} onClick={() => onRemove(tag)}><Glyph name="x" /></button>
      </span>)}
      <TagPicker tags={tags} candidates={options} label={label} onAdd={onAdd} adding={adding} scope={scope}
        onOpen={() => setAsked(true)} loading={inventory.isFetching} />
    </div>
    {action.error ? <Note tone="error">{action.error}</Note> : null}
    {inventory.isError ? <Note tone="error" action={<Button variant="secondary" onClick={() => void inventory.refetch()}>Retry now</Button>}>Can't load tag suggestions</Note> : null}
    {editing ? <TagEditor operation="rename" selected={[editing]} scope={scope}
      close={() => setEditing(null)} done={() => setEditing(null)} /> : null}
  </>;
}

/* 标签选择器：最近使用 + 全部（或搜索结果），上下键挑、回车加，输入的词没有完全命中就多一格
   「新建」。开合走全站菜单那一对口（`presentMenu`／`dismissMenu`），`hidden` 由它们管。
   选字过程中框里是半截拼音，筛选按 `term` 走、组完字才跟上，不拿「zhon」去筛。 */
function TagPicker({ tags, candidates, label, onAdd, adding, scope, onOpen, loading }: Pick<DetailTagsProps, 'tags' | 'candidates' | 'label' | 'onAdd' | 'adding' | 'scope'> & { onOpen():void; loading:boolean }) {
  const plus = useRef<HTMLButtonElement>(null);
  const picker = useRef<HTMLDivElement>(null);
  const body = useOverlayScrollbar<HTMLDivElement>();
  const search = useRef<HTMLInputElement>(null);
  const composing = useRef(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [term, setTerm] = useState('');
  const [active, setActive] = useState(-1);
  const latest = useRef({ adding, query, tags, onOpen });
  latest.current = { adding, query, tags, onOpen };
  const floating = useRef<ReturnType<typeof wireAnchoredMenu> | null>(null);
  const close = useCallback(() => {
    floating.current?.setOpen(false);
    setOpen(false);
  }, []);
  useLayoutEffect(() => {
    const [button, menu] = [plus.current, picker.current];
    if (!button || !menu) return undefined;
    if ('showPopover' in menu) menu.setAttribute('popover', 'manual');
    const control = wireAnchoredMenu(button.parentElement!, button, menu);
    floating.current = control;
    const opened = () => {
      const current = latest.current;
      if (current.adding) { control.setOpen(false); setOpen(false); return }
      const opening = control.isOpen(); setOpen(opening);
      if (!opening) return;
      current.onOpen();
      if (!current.query.trim() || current.tags.some(tag => foldName(tag.k) === foldName(current.query.trim()))) { setQuery(''); setTerm('') }
      setActive(-1);
      requestAnimationFrame(() => search.current?.focus({ preventScroll:true }));
    };
    button.addEventListener('click', opened);
    const observer = new MutationObserver(() => setOpen(control.isOpen()));
    observer.observe(button, { attributes:true, attributeFilter:['aria-expanded'] });
    return () => { observer.disconnect(); button.removeEventListener('click', opened); control.dispose(); floating.current = null };
  }, []);
  useLayoutEffect(() => {
    if (!open || !picker.current || !floating.current?.isOpen()) return;
    picker.current.style.maxHeight = '';
    floating.current.setOpen(true);
  }, [open, term, candidates.length]);
  const sections = open ? pickerSections(term, candidates, recentTags()) : { recent: [], results: [], create: '' };
  const options = [...sections.recent, ...sections.results, ...(sections.create ? [{ k: sections.create, n: -1 }] : [])];
  const pick = (tag: TagCount, selected: boolean) => {
    close();
    if (!selected) onAdd(tag.k);
  };
  const keydown = (event: KeyboardEvent<HTMLInputElement>) => {
    /* 选字那一下的回车是定字，不是「新建这个标签」——半截拼音会真的建成标签。 */
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); plus.current?.focus(); return }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!options.length) return;
      const next = (active + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
      setActive(next);
      picker.current?.querySelectorAll('[data-pick]')[next]?.scrollIntoView({ block: 'nearest' });
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const chosen = active >= 0 ? options[active] : null;
      if (chosen) pick(chosen, chosen.n !== -1 && tags.some(tag => tag.k === chosen.k));
      else if (query.trim()) { close(); onAdd(query.trim()) }
    }
  };
  let index = -1;
  const button = (tag: TagCount) => {
    index += 1;
    const at = index;
    const selected = tags.some(value => foldName(value.k) === foldName(tag.k));
    const category = tag.cat || tags.find(value => foldName(value.k) === foldName(tag.k))?.cat || 'unknown';
    const color = category === 'unknown' ? 'r34-unknown'
      : scope === 'online' && ['general', 'artist', 'character', 'copyright', 'metadata'].includes(category) ? `r34-${category}` : category;
    return (
      <button key={`${at}:${tag.k}`} type="button" data-pick={tag.k} data-active={at === active ? '' : undefined}
        data-tag-cat={color}
        aria-pressed={selected} onClick={() => pick(tag, selected)}>
        <Glyph name={selected ? 'check' : 'tags'} /><span data-pick-name="">{label(tag.k)}</span>
        <span data-pick-count="">{(tag.n || 0).toLocaleString()}</span>
      </button>
    );
  };
  return (
    <>
      <button ref={plus} type="button" id="tagPlus" data-tag-plus="" title="Add tag" aria-label="Add tag" aria-expanded={open}
        {...busyProps(!!adding)}><Glyph name="plus" /></button>
      <div ref={picker} id="tagPicker" data-tag-picker="" role="dialog" aria-label="Add tag" hidden>
        <label data-tag-search="">
          {loading ? <span className="contents" dangerouslySetInnerHTML={{ __html:spinnerHtml('Loading tags') }} /> : <Glyph name="search" />}
          <input ref={search} id="tagPickSearch" maxLength={80} placeholder="Search or enter a new tag" autoComplete="off" value={query}
            onChange={(event) => { setQuery(event.target.value); setActive(-1); if (!composing.current) setTerm(event.target.value) }}
            onCompositionStart={() => { composing.current = true }}
            onCompositionEnd={(event) => { composing.current = false; setTerm(event.currentTarget.value) }} onKeyDown={keydown} />
        </label>
        <div data-tag-scroll-frame=""><div ref={body} id="tagPickBody" data-tag-body="">
          {open && sections.recent.length ? (
            <section data-tag-section=""><h4>Recently used</h4><div data-tag-grid="">{sections.recent.map(button)}</div></section>
          ) : null}
          {open ? (
            <section data-tag-section="">
              <h4>{term.trim() ? 'Search results' : 'All tags'}</h4>
              <div data-tag-grid="">
                {sections.results.map(button)}
                {sections.create ? (() => {
                  index += 1;
                  const at = index;
                  return (
                    <button key="create" type="button" data-pick={sections.create} data-active={at === active ? '' : undefined}
                      onClick={() => { close(); onAdd(sections.create) }}>
                      <Glyph name="plus" /><span data-pick-name="">Create “{sections.create}”</span>
                    </button>
                  );
                })() : null}
              </div>
            </section>
          ) : null}
        </div></div>
      </div>
    </>
  );
}
