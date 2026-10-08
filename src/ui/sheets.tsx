import { EXPORT_FORMATS, type ExportFormat } from '../export/formats';
import React, { useMemo, useState, useEffect } from 'react';
import { Sheet, Chip } from './Sheet';
import { Glyph } from './Glyph';
import { GENRE_PLATES, plateFor } from './worlds';
import { INSTRUMENT_CATALOG, FAMILY_LABELS, FAMILY_ORDER, instrument } from '../engine/lookup/instruments';
import { ALL_PATTERNS, GENRE_WORLDS_BY_ID, cleanPatternName, FEEL_ORDER, FEEL_LABELS, feelsForPattern, PatternFeel } from '../data/genres';
import { Voice, affinity, roleForInstrument, toBar, getGenreForm, parseChord } from '../engine/sheet/index.ts';
import { BAR_CHOICES } from '../data/barChoices';
import { FEELS } from '../data/tempoFeels';
import { genreCategoryId } from '../data/genreCategories';
import { ENERGY_LABELS } from '../data/performance/energy';
import type { Sheet as SongSheet } from '../engine/sheet/sheet';
import type { Region } from '../types';
import { CHORD_PALETTE, CHORD_MOODS, CHORD_MOOD_ORDER, ChordMood, JAZZ_CHORD_LIBRARY, suggestedPaletteForStyle } from '../engine/lookup/theory';
import { formSummary } from '../engine/lookup/forms';
import type { SectionEnergy } from '../types';


/* ========================================================================== */
/*  Worlds / Lenses — genre color plates & musical traditions.                */
/* ========================================================================== */
function GenreTile({
  id: _id,
  p,
  active,
  onClick,
  compact = false,
}: {
  key?: React.Key;
  id: string;
  p: { ground: string; ink: string; signal: string; short: string };
  active: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="genre-tile text-left transition-transform active:scale-95"
      data-compact={compact ? 'true' : 'false'}
      style={{
        background: p.ground,
        color: p.ink,
        border: `1.5px solid ${active ? p.signal : 'color-mix(in srgb, var(--ink) 18%, transparent)'}`,
        boxShadow: 'none',
      }}
    >
      <span className="genre-tile-name">{p.short}</span>
    </button>
  );
}

export function WorldSheet({
  open,
  onClose,
  current,
  onPick,
  onPickSection,
  onPickSong,
}: {
  open: boolean;
  onClose: () => void;
  current: string;
  onPick: (id: string) => void;
  onPickSection?: (id: string) => void;
  onPickSong?: (id: string) => void;
}) {
  const [scope, setScope] = useState<'lens' | 'section' | 'song'>('song');

  const handleSelectWorld = (id: string) => {
    if (scope === 'section' && onPickSection) {
      onPickSection(id);
    } else if (scope === 'song' && onPickSong) {
      onPickSong(id);
    } else {
      onPick(id);
    }
    onClose();
  };

  return (
    <Sheet open={open} onClose={onClose} title="Genre">
      <div className="flex gap-1.5 mb-3">
        {onPickSong && <Chip active={scope === 'song'} onClick={() => setScope('song')}>Whole song</Chip>}
        {onPickSection && <Chip active={scope === 'section'} onClick={() => setScope('section')}>This part</Chip>}
        <Chip active={scope === 'lens'} onClick={() => setScope('lens')}>Theme</Chip>
      </div>

      {scope === 'song' && (
        <div className="text-[11px] font-mono opacity-60 mb-3.5 truncate">
          Form: {formSummary(getGenreForm(current))}
        </div>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {Object.entries(GENRE_PLATES).map(([id, p]) => {
          const active = id === genreCategoryId(current);
          return (
            <GenreTile key={id} id={id} p={p} active={active} onClick={() => handleSelectWorld(id)} />
          );
        })}
      </div>
    </Sheet>
  );
}

/* ========================================================================== */
/*  Instruments — the whole cupboard, grouped by how they make their sound.    */
/* ========================================================================== */
export function InstrumentSheet({
  open, onClose, current, onPick, onPickWithScope, onRemove,
  title = 'Instruments', sectionKind,
}: {
  open: boolean; onClose: () => void; current?: string;
  onPick?: (id: string) => void;
  onPickWithScope?: (id: string, scope: 'section' | 'song') => void;
  onRemove?: () => void;
  title?: string;
  sectionKind?: string;
}) {
  const [q, setQ] = useState('');
  const [addScope, setAddScope] = useState<'section' | 'song'>('section');
  const alphabetical = (items: typeof INSTRUMENT_CATALOG) =>
    [...items].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const hits = q.trim()
    ? alphabetical(INSTRUMENT_CATALOG.filter(i => i.name.toLowerCase().includes(q.trim().toLowerCase())))
    : null;

  const handlePick = (id: string) => {
    if (onPickWithScope) {
      onPickWithScope(id, addScope);
    } else if (onPick) {
      onPick(id);
    }
    onClose();
  };

  return (
    <Sheet open={open} onClose={onClose} title={title} kicker={sectionKind ? `This part · ${sectionKind}` : undefined}>

      {onRemove && (
        <div className="flex items-center justify-between flex-wrap gap-2 py-3.5 mb-4" style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 18%, transparent)' }}>
          <Chip onClick={() => { onRemove(); onClose(); }}>
            <span className="text-red-600 font-semibold">Delete instrument</span>
          </Chip>
        </div>
      )}
      {onPickWithScope && (
        <div className="mb-3.5 flex gap-2">
          <Chip
            active={addScope === 'section'}
            onClick={() => setAddScope('section')}
          >
            {sectionKind ? `This part (${sectionKind})` : 'This part'}
          </Chip>
          <Chip
            active={addScope === 'song'}
            onClick={() => setAddScope('song')}
          >
            Whole song
          </Chip>
        </div>
      )}

      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search instruments…"
        className="w-full mb-4"
        style={{
          background: 'transparent', padding: '6px 0', fontSize: 15,
          borderBottom: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)', outline: 'none',
        }}
      />
      {(hits ? [{ family: null, items: hits }] : FAMILY_ORDER.map(f => ({
        family: f, items: alphabetical(INSTRUMENT_CATALOG.filter(i => i.family === f)),
      }))).map(({ family, items }) => (
        items.length ? (
          <div key={family ?? 'search'} className="mb-5">
            {family && <div className="micro mb-2">{FAMILY_LABELS[family]}</div>}
            <div className="flex flex-wrap gap-1.5">
              {items.map(i => (
                <Chip key={i.id} active={i.id === current} onClick={() => handlePick(i.id)}>
                  {i.name}
                </Chip>
              ))}
            </div>
          </div>
        ) : null
      ))}
      {hits && hits.length === 0 && (
        <div className="micro mb-5">No instruments match “{q.trim()}”.</div>
      )}

    </Sheet>
  );
}

const ADD_ROLE_OPTIONS = [
  ['melody', 'Melody'], ['lead', 'Lead'], ['harmony', 'Harmony'], ['bass', 'Bass'],
  ['pulse', 'Pulse'], ['percussion', 'Percussion'], ['texture', 'Texture'], ['voice', 'Voice'], ['counterline', 'Counterline'],
] as const;

/** Add a part with an audible job and a pattern picked before it enters the song. */
export function AddInstrumentSheet({
  open, onClose, worldId, styleId, sectionKind, onAdd,
}: {
  open: boolean; onClose: () => void; worldId: string; styleId?: string; sectionKind?: string;
  onAdd: (instrumentId: string, role: string, patternId: string, scope: 'section' | 'song') => void;
}) {
  const [query, setQuery] = useState('');
  const [instrumentId, setInstrumentId] = useState<string | null>(null);
  const [role, setRole] = useState('');
  const [patternId, setPatternId] = useState('');
  const [scope, setScope] = useState<'section' | 'song'>('song');
  const [patternScope, setPatternScope] = useState<'recommended' | 'genre' | 'all'>('recommended');
  const [patternQuery, setPatternQuery] = useState('');
  const filtered = useMemo(() => INSTRUMENT_CATALOG
    .filter(item => item.id !== 'silence' && (!query.trim()
      || item.name.toLowerCase().includes(query.trim().toLowerCase())))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })), [query]);
  const selectedInstrument = instrumentId ? INSTRUMENT_CATALOG.find(item => item.id === instrumentId) : undefined;
  const effectiveRole = role || (instrumentId ? roleForInstrument(instrumentId) : '');
  const voice = selectedInstrument ? {
    id: 'new-instrument-preview', instrumentId: selectedInstrument.id, name: selectedInstrument.name,
    instrument: selectedInstrument.name, role: effectiveRole, kind: selectedInstrument.id,
    muted: false, volume: 0.85, lensIds: [],
  } as Voice : null;
  const rankedPatterns = useMemo(() => {
    if (!voice) return [];
    return ALL_PATTERNS.filter(pattern => pattern.enabled !== false)
      .map(pattern => ({ pattern, score: affinity(pattern.id, voice, worldId, styleId) }))
      .filter(item => Number.isFinite(item.score))
      .filter(item => patternScope !== 'genre' || item.pattern.worldId === worldId)
      .filter(item => !patternQuery.trim() || [item.pattern.name, item.pattern.family, item.pattern.description,
        ...item.pattern.tags].some(value => value.toLowerCase().includes(patternQuery.trim().toLowerCase())))
      .sort((a, b) => patternScope === 'all'
        ? a.pattern.name.localeCompare(b.pattern.name, undefined, { sensitivity: 'base' })
        : b.score - a.score);
  }, [voice?.instrumentId, effectiveRole, worldId, styleId, patternScope, patternQuery]);
  const patterns = rankedPatterns.map(item => item.pattern);
  const selectedPatternId = patterns.some(pattern => pattern.id === patternId) ? patternId : patterns[0]?.id ?? '';

  return <Sheet open={open} onClose={onClose} title="Add an instrument" kicker={sectionKind ? `Build a part · ${sectionKind}` : 'Build a new part'}>
    <div className="micro mb-2">1. Choose an instrument</div>
    <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search instruments…"
      className="w-full mb-3" style={{ background: 'transparent', padding: '6px 0', fontSize: 15,
        borderBottom: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)', outline: 'none' }} />
    <div className="flex flex-wrap gap-1.5 mb-4 overflow-y-auto" style={{ maxHeight: 180 }}>
      {filtered.map(item => <Chip key={item.id} active={item.id === instrumentId}
        onClick={() => { setInstrumentId(item.id); setRole(roleForInstrument(item.id)); setPatternId(''); }}>
        {item.name}
      </Chip>)}
      {!filtered.length && <div className="micro py-2">No instruments match “{query.trim()}”.</div>}
    </div>

    {selectedInstrument && <>
      <div className="micro mb-2">2. Give it a role</div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {ADD_ROLE_OPTIONS.map(([id, label]) => <Chip key={id} active={effectiveRole === id}
          onClick={() => { setRole(id); setPatternId(''); }}>{label}</Chip>)}
      </div>

      <div className="micro mb-2">3. Pick a pattern</div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        <Chip active={patternScope === 'recommended'} onClick={() => setPatternScope('recommended')}>Recommended</Chip>
        <Chip active={patternScope === 'genre'} onClick={() => setPatternScope('genre')}>{plateFor(worldId).short}</Chip>
        <Chip active={patternScope === 'all'} onClick={() => setPatternScope('all')}>Every genre</Chip>
      </div>
      <input value={patternQuery} onChange={event => setPatternQuery(event.target.value)} placeholder="Search any pattern…"
        className="w-full mb-2" style={{ background: 'transparent', padding: '6px 0', fontSize: 14,
          borderBottom: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)', outline: 'none' }} />
      <div className="flex flex-col mb-4 overflow-y-auto" style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)', maxHeight: 280 }}>
        {patterns.map(pattern => <button key={pattern.id} type="button" onClick={() => setPatternId(pattern.id)}
          className="text-left py-2.5 flex items-center gap-2.5 w-full"
          style={{ borderBottom: '1px solid color-mix(in srgb, var(--ink) 12%, transparent)',
            background: selectedPatternId === pattern.id ? 'color-mix(in srgb, var(--ink) 7%, transparent)' : 'transparent' }}>
          <span style={{ width: 4, alignSelf: 'stretch', background: plateFor(worldId).signal, opacity: selectedPatternId === pattern.id ? 1 : .45 }} />
          <span className="shrink-0" style={{ flex: '0 0 76px' }}><Glyph {...previewOf(pattern)} height={22} /></span>
          <span className="min-w-0 flex-1">
            <span className="truncate block" style={{ fontSize: 14, fontWeight: selectedPatternId === pattern.id ? 600 : 400 }}>
              {cleanPatternName(pattern.name, pattern.shortName)}
            </span>
            <span className="micro truncate block">{pattern.description}</span>
          </span>
        </button>)}
        {!patterns.length && <div className="micro py-3">No patterns match that search.</div>}
      </div>

      <div className="micro mb-2">Add it to</div>
      <div className="flex gap-1.5 mb-4">
        <Chip active={scope === 'song'} onClick={() => setScope('song')}>Whole song</Chip>
        <Chip active={scope === 'section'} onClick={() => setScope('section')}>{sectionKind ? `This part (${sectionKind})` : 'This part'}</Chip>
      </div>
      <button type="button" disabled={!selectedPatternId} onClick={() => {
        if (!instrumentId || !selectedPatternId) return;
        onAdd(instrumentId, effectiveRole, selectedPatternId, scope);
        onClose();
      }} className="w-full py-2.5 font-semibold text-sm disabled:opacity-40 cursor-pointer"
        style={{ color: 'var(--ground)', background: 'var(--ink)', border: 'none' }}>
        Add {selectedInstrument.name} · {ADD_ROLE_OPTIONS.find(item => item[0] === effectiveRole)?.[1] ?? effectiveRole}
      </button>
    </>}
  </Sheet>;
}

/* ========================================================================== */
/*  Patterns — chosen by shape. Nothing here is locked to an instrument.       */
/* ========================================================================== */
function previewOf(p: { onsetGrid: number[]; accentProfile?: number[]; subdivisions: number }) {
  const sub = Math.max(p.subdivisions || 16, ...p.onsetGrid.map(o => o + 1));
  const bar = toBar(p.onsetGrid, p.accentProfile, undefined, sub, 0);
  return { onsets: bar.onsets, accents: bar.accents, steps: 16 };
}

export function PatternSheet({
  open, onClose, voice, worldId, styleId, current, onPick, onPickEverywhere,
}: {
  open: boolean; onClose: () => void; voice: Voice | null; worldId: string; styleId?: string;
  current?: string; onPick: (id: string) => void; onPickEverywhere: (id: string) => void;
}) {
  const [scope, setScope] = useState<'fits' | 'world' | 'all'>('fits');
  const [q, setQ] = useState('');
  const [applyToSong, setApplyToSong] = useState(false);
  const [feel, setFeel] = useState<PatternFeel | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const categoryOptions = useMemo(() => {
    const labels: Record<string, string> = {
      groove: 'Groove',
      bass: 'Bass',
      comping: 'Comping',
      lead: 'Lead',
      phrase: 'Phrase',
      fill: 'Fill',
      break: 'Break',
      texture: 'Texture',
    };
    const present = new Set(ALL_PATTERNS.filter(p => p.enabled !== false).map(p => p.category));
    return Object.entries(labels)
      .filter(([id]) => present.has(id))
      .sort((a, b) => a[1].localeCompare(b[1]));
  }, []);

  const list = useMemo(() => {
    let items = ALL_PATTERNS.filter(p => p.enabled !== false);
    if (scope === 'world') items = items.filter(p => p.worldId === worldId);
    if (feel) items = items.filter(p => feelsForPattern(p.id).includes(feel));
    if (category) items = items.filter(p => p.category === category);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      items = items.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.family.toLowerCase().includes(s) ||
        p.tags.some(t => t.toLowerCase().includes(s)));
    }
    if (scope === 'fits' && voice) {
      items = [...items].sort((a, b) => affinity(b.id, voice, worldId, styleId) - affinity(a.id, voice, worldId, styleId));
    } else if (scope === 'fits' || scope === 'all') {
      items = [...items].sort((a, b) => {
        const ga = plateFor(a.worldId).short || GENRE_WORLDS_BY_ID[a.worldId]?.name || a.worldId;
        const gb = plateFor(b.worldId).short || GENRE_WORLDS_BY_ID[b.worldId]?.name || b.worldId;
        const cmp = ga.localeCompare(gb, undefined, { sensitivity: 'base' });
        if (cmp !== 0) return cmp;
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      });
    } else {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
    return items;
  }, [scope, feel, category, q, voice, worldId, styleId]);

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Rhythms"
    >
      <div className="flex items-center gap-1.5 mb-3 flex-wrap">
        <Chip active={scope === 'fits'} onClick={() => setScope('fits')}>Recommended</Chip>
        <Chip active={scope === 'world'} onClick={() => setScope('world')}>{plateFor(worldId).short}</Chip>
        <Chip active={scope === 'all'} onClick={() => setScope('all')}>Every genre</Chip>
      </div>

      <div className="micro mb-2">Feel</div>
      <div className="flex items-center gap-1.5 mb-3 flex-wrap">
        <Chip active={feel === null} onClick={() => setFeel(null)}>All</Chip>
        {FEEL_ORDER.map(f => (
          <Chip key={f} active={feel === f} onClick={() => setFeel(feel === f ? null : f)}>
            {FEEL_LABELS[f]}
          </Chip>
        ))}
      </div>

      <div className="micro mb-2">Category</div>
      <div className="flex items-center gap-1.5 mb-3.5 flex-wrap">
        <Chip active={category === null} onClick={() => setCategory(null)}>All</Chip>
        {categoryOptions.map(([id, label]) => (
          <Chip key={id} active={category === id} onClick={() => setCategory(category === id ? null : id)}>
            {label}
          </Chip>
        ))}
      </div>

      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search rhythms…"
        className="w-full mb-3"
        style={{
          background: 'transparent', padding: '6px 0', fontSize: 15,
          borderBottom: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)', outline: 'none',
        }}
      />

      <label className="flex items-center gap-2 mb-3.5 text-xs select-none cursor-pointer">
        <input type="checkbox" checked={applyToSong} onChange={e => setApplyToSong(e.target.checked)} />
        <span>Use in every song section</span>
      </label>

      {list.length === 0 && (
        <div className="micro py-4">No rhythms match. Try clearing a filter.</div>
      )}

      <div className="flex flex-col">
        {list.map((p, idx) => {
          const active = p.id === current;
          const plate = plateFor(p.worldId);
          const prevP = idx > 0 ? list[idx - 1] : null;
          const showGenreHeader = (scope === 'all' || scope === 'fits') && (!prevP || prevP.worldId !== p.worldId);
          const genreName = plate.short || GENRE_WORLDS_BY_ID[p.worldId]?.name || p.worldId;

          return (
            <React.Fragment key={p.id}>
              {showGenreHeader && (
                <div
                  className="flex items-center gap-2 pt-3 pb-1.5 px-1 sticky top-0 z-10 select-none"
                  style={{
                    background: 'var(--tone)',
                    borderBottom: '1px solid color-mix(in srgb, var(--ink) 18%, transparent)',
                    marginTop: idx > 0 ? 10 : 0,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      background: plate.signal,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="slab"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--ink)',
                      opacity: 0.9,
                    }}
                  >
                    {genreName}
                  </span>
                </div>
              )}
              <button
                onClick={() => { (applyToSong ? onPickEverywhere : onPick)(p.id); onClose(); }}
                className="text-left py-2.5 flex items-center gap-2.5 sm:gap-3 w-full overflow-hidden"
                style={{ borderTop: showGenreHeader ? 'none' : '1px solid color-mix(in srgb, var(--ink) 12%, transparent)' }}
              >
                <span style={{ width: 4, alignSelf: 'stretch', background: plate.signal, opacity: active ? 1 : 0.45, flexShrink: 0 }} />
                <span style={{ flex: '0 0 76px' }} className="shrink-0 sm:flex-[0_0_96px]">
                  <Glyph {...previewOf(p)} height={22} />
                </span>
                <span style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                  <span className="truncate block" style={{ fontSize: 14, fontWeight: active ? 600 : 400, lineHeight: 1.2 }}>
                    {cleanPatternName(p.name, p.shortName)}
                  </span>
                  <span className="micro truncate block">{p.family} · {p.meter}</span>
                </span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </Sheet>
  );
}

/* ========================================================================== */
/* ========================================================================== */
/*  Chords Control — extracted chord progression chooser & custom chord tool   */
/* ========================================================================== */
export function ChordsControl({
  region,
  currentWorldId,
  styleId,
  onChords,
  customProgressions = [],
  onAddCustomChords,
  onUpdateCustomChords,
  onDeleteCustomChords,
}: {
  region: Region;
  currentWorldId?: string;
  styleId?: string;
  onChords?: (chords: string[]) => void;
  customProgressions?: Array<{ id: string; name: string; chords: string[] }>;
  onAddCustomChords?: (name: string, chords: string[]) => void;
  onUpdateCustomChords?: (id: string, name: string, chords: string[]) => void;
  onDeleteCustomChords?: (id: string) => void;
}) {
  const [isCustomizingChords, setIsCustomizingChords] = useState(false);
  const [editingProgressionId, setEditingProgressionId] = useState<string | null>(null);
  const [customNameInput, setCustomNameInput] = useState('');
  const [customChordInput, setCustomChordInput] = useState('');
  const [browseMood, setBrowseMood] = useState<ChordMood | null>(null);

  if (!onChords) return null;
  const currentProgStr = (region.chords ?? []).join(' ');

  return (
    <div>
      {/* Current Progression Pill */}
      <div className="mb-4 p-3 bg-black/5 rounded-[3px]" style={{ border: '1px solid color-mix(in srgb, var(--ink) 15%, transparent)' }}>
        <div className="micro opacity-70 mb-1.5 font-semibold">Current progression</div>
        <div className="flex flex-wrap gap-2 items-center">
          {(region.chords ?? []).map((chord, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm font-mono font-bold rounded-[3px]"
              style={{
                background: 'var(--ink)',
                color: 'var(--ground)',
              }}
            >
              {chord}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-2.5">
        <div className="micro font-bold opacity-60">Progressions</div>
        <button
          type="button"
          className="btn-pill cursor-pointer"
          style={{
            background: 'transparent',
            color: 'var(--ink)',
            boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
          }}
          onClick={() => {
            setIsCustomizingChords(!isCustomizingChords);
            setEditingProgressionId(null);
            setCustomNameInput('');
            setCustomChordInput('');
          }}
        >
          {isCustomizingChords || editingProgressionId ? 'Cancel' : '+ Custom'}
        </button>
      </div>

      {(isCustomizingChords || editingProgressionId) && (
        <div className="mb-4 p-4 bg-black/5 rounded-[3px]" style={{ border: '1px solid color-mix(in srgb, var(--ink) 18%, transparent)' }}>
          <input
            className="w-full bg-transparent border-b border-black/20 focus:border-black/50 outline-none pb-1.5 mb-3 text-sm font-semibold"
            placeholder="Name (e.g. My bridge)"
            value={customNameInput}
            onChange={e => setCustomNameInput(e.target.value)}
            autoFocus={isCustomizingChords}
          />
          <input
            className="w-full bg-transparent border-b border-black/20 focus:border-black/50 outline-none pb-1.5 mb-3.5 text-sm font-mono"
            placeholder="Chord symbols (e.g. Cmaj9 G13 Cmaj13#11)"
            value={customChordInput}
            onChange={e => setCustomChordInput(e.target.value)}
          />
          <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:12}}>
            <span style={{fontSize:11, opacity:.65, width:'100%'}}>Jazz chord symbols</span>
            {JAZZ_CHORD_LIBRARY.slice(0, 12).map(symbol => (
              <button key={symbol} type="button" className="chip" onClick={() => setCustomChordInput(v => `${v}${v.trim() ? ' ' : ''}${symbol}`)}>
                {symbol}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const chords = customChordInput.trim().split(/\s+/).filter(Boolean);
                const invalid = chords.filter(ch => { try { const p = parseChord(ch); return !/^[A-G](?:#|b)?/.test(p.symbol) || p.intervals.length < 2; } catch { return true; } });
                const name = customNameInput.trim() || 'Custom';
                if (chords.length > 0 && invalid.length === 0) {
                  if (editingProgressionId) {
                    onUpdateCustomChords?.(editingProgressionId, name, chords);
                    onChords(chords);
                  } else {
                    onAddCustomChords?.(name, chords);
                    onChords(chords);
                  }
                  setIsCustomizingChords(false);
                  setEditingProgressionId(null);
                  setCustomChordInput('');
                  setCustomNameInput('');
                }
              }}
              disabled={!customChordInput.trim()}
              className="btn-cta cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'var(--ink)',
                color: 'var(--ground)',
              }}
            >
              Save & apply
            </button>
            <button
              onClick={() => {
                setIsCustomizingChords(false);
                setEditingProgressionId(null);
                setCustomChordInput('');
                setCustomNameInput('');
              }}
              className="btn-pill cursor-pointer"
              style={{
                background: 'transparent',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {customProgressions && customProgressions.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {customProgressions.map(p => {
            const progStr = p.chords.join(' ');
            const isActive = currentProgStr === progStr;
            return (
              <div key={p.id} className="relative flex items-center group">
                <Chip active={isActive} onClick={() => onChords(p.chords)}>
                  <span className="font-semibold mr-1.5">{p.name}:</span>
                  <span className="font-mono">{progStr}</span>
                </Chip>
                <div className="hidden group-hover:flex items-center ml-1.5 bg-black/5 overflow-hidden rounded-[3px]" style={{ border: '1px solid color-mix(in srgb, var(--ink) 20%, transparent)' }}>
                    <button
                      onClick={() => {
                        setEditingProgressionId(p.id);
                        setCustomNameInput(p.name);
                        setCustomChordInput(p.chords.join(' '));
                        setIsCustomizingChords(false);
                      }}
                      className="px-2.5 py-1 text-xs hover:bg-black/10 transition-colors cursor-pointer font-medium"
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteCustomChords?.(p.id)}
                      className="px-2.5 py-1 text-xs hover:bg-red-500/20 text-red-600 transition-colors cursor-pointer font-medium"
                      title="Delete"
                    >
                      Delete
                    </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Suggested for this style */}
      {(() => {
        const genreId = region.genre ?? currentWorldId ?? 'tango';
        const suggested = suggestedPaletteForStyle(styleId, genreId);
        return (
          <>
            <div className="flex items-center justify-between mb-2">
              <div className="micro opacity-70 font-semibold">Suggested for {plateFor(genreId).short}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
              {suggested.map(opt => {
                const progStr = opt.chords.join(' ');
                const isActive = currentProgStr === progStr;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onChords(opt.chords)}
                    className="text-left px-4 py-3 cursor-pointer flex flex-col justify-between transition-all rounded-[3px]"
                    style={{
                      background: isActive ? 'var(--ink)' : 'transparent',
                      color: isActive ? 'var(--ground)' : 'var(--ink)',
                      boxShadow: isActive ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-2 w-full">
                      <span className="text-xs font-semibold truncate">
                        {opt.name}
                      </span>
                      <span className="font-mono text-[11px] opacity-75 shrink-0">{progStr}</span>
                    </div>
                    <div className="text-[11px] opacity-65 truncate mt-1" style={{ color: isActive ? 'var(--ground)' : 'inherit' }}>
                      {opt.aliases?.length ? `${opt.blurb} · Also called: ${opt.aliases.join(', ')}` : opt.blurb}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        );
      })()}

      {/* Browse by feel */}
      <div className="flex justify-between items-center mb-2">
        <div className="micro opacity-70 font-semibold">Browse by mood</div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {CHORD_MOOD_ORDER.map(mood => (
          <Chip
            key={mood}
            active={browseMood === mood}
            onClick={() => setBrowseMood(browseMood === mood ? null : mood)}
          >
            {CHORD_MOODS[mood].label}
          </Chip>
        ))}
      </div>
      {browseMood && (
        <div className="mb-5">
          <div className="text-xs opacity-70 mb-2.5 font-medium">{CHORD_MOODS[browseMood].description}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CHORD_PALETTE.filter(c => c.mood === browseMood).map(opt => {
              const progStr = opt.chords.join(' ');
              const isActive = currentProgStr === progStr;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onChords(opt.chords)}
                  className="text-left px-4 py-3 cursor-pointer flex flex-col justify-between transition-all rounded-[3px]"
                  style={{
                    background: isActive ? 'var(--ink)' : 'transparent',
                    color: isActive ? 'var(--ground)' : 'var(--ink)',
                    boxShadow: isActive ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
                  }}
                >
                  <div className="flex items-baseline justify-between gap-2 w-full">
                    <span className="text-xs font-semibold truncate">{opt.name}</span>
                    <span className="font-mono text-[11px] opacity-75 shrink-0">{progStr}</span>
                  </div>
                  <div className="text-[11px] opacity-65 truncate mt-1" style={{ color: isActive ? 'var(--ground)' : 'inherit' }}>
                    {opt.origin ? `${opt.origin} · ` : ''}{opt.blurb}{opt.aliases?.length ? ` · Also called: ${opt.aliases.join(', ')}` : ''}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================================================================== */
/*  ChordSheet — dedicated chord progression changer raised on chord click     */
/* ========================================================================== */
export function ChordSheet({
  open,
  onClose,
  region,
  currentWorldId,
  styleId,
  onChords,
  customProgressions = [],
  onAddCustomChords,
  onUpdateCustomChords,
  onDeleteCustomChords,
}: {
  open: boolean;
  onClose: () => void;
  region: Region | null;
  currentWorldId?: string;
  styleId?: string;
  onChords?: (chords: string[]) => void;
  customProgressions?: Array<{ id: string; name: string; chords: string[] }>;
  onAddCustomChords?: (name: string, chords: string[]) => void;
  onUpdateCustomChords?: (id: string, name: string, chords: string[]) => void;
  onDeleteCustomChords?: (id: string) => void;
}) {
  if (!region) return null;
  const bars = region.end - region.start;
  const currentChords = (region.chords || []).join(' – ');

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Chords"
      kicker={`${region.formLabel ?? region.kind} · ${bars} bars · ${currentChords}`}
    >
      <ChordsControl
        region={region}
        currentWorldId={currentWorldId}
        styleId={styleId}
        onChords={onChords}
        customProgressions={customProgressions}
        onAddCustomChords={onAddCustomChords}
        onUpdateCustomChords={onUpdateCustomChords}
        onDeleteCustomChords={onDeleteCustomChords}
      />
    </Sheet>
  );
}

/* ========================================================================== */
/*  Section — length, kind, order, all as discrete named choices.              */
/* ========================================================================== */
export function SectionSheet({
  open, onClose, region, index, count, onBars, onKind, onMove, onDuplicate, onRemove,
  onNewPart,
  songFeelName, onTempoShift,
  onChords,
  onGenre,
  onEnergy,
  currentWorldId,
  customProgressions = [],
  onAddCustomChords,
  onUpdateCustomChords,
  onDeleteCustomChords,
  onTitleChange,
  onStartEditingTitle,
  regions,
  playingRegion,
  playing,
  onSelectRegion,
}: {
  open: boolean; onClose: () => void; region: Region | null; index: number; count: number;
  onBars: (n: number) => void; onKind: (k: string) => void; onMove: (d: number) => void;
  onDuplicate: () => void; onRemove: () => void;
  onNewPart?: () => void;
  songFeelName?: string; onTempoShift?: (shift?: string) => void;
  onChords?: (chords: string[]) => void;
  onGenre?: (genreId: string) => void;
  onEnergy?: (energy: SectionEnergy) => void;
  currentWorldId?: string;
  customProgressions?: Array<{ id: string; name: string; chords: string[] }>;
  onAddCustomChords?: (name: string, chords: string[]) => void;
  onUpdateCustomChords?: (id: string, name: string, chords: string[]) => void;
  onDeleteCustomChords?: (id: string) => void;
  onTitleChange?: (title: string) => void;
  onStartEditingTitle?: () => void;
  regions?: Region[];
  playingRegion?: string | null;
  playing?: boolean;
  onSelectRegion?: (regionId: string) => void;
}) {
  if (!region) return null;
  const bars = region.end - region.start;

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={region.formLabel ?? region.name ?? String(region.kind)}
      kicker={`Part ${index + 1} of ${count}`}
      onTitleChange={onTitleChange}
      onStartEditingTitle={onStartEditingTitle}
    >
      {/* ORDER */}
      <div className="micro mb-2">Order</div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        <Chip onClick={() => onMove(-1)} muted={index === 0}>Move earlier</Chip>
        <Chip onClick={() => onMove(1)} muted={index === count - 1}>Move later</Chip>
        <Chip onClick={onDuplicate}>Duplicate</Chip>
        {onNewPart && <Chip onClick={onNewPart}>New part</Chip>}
        {count > 1 && <Chip onClick={onRemove}>Delete</Chip>}
      </div>

      {/* Song Structure Bar (Section Blocks) just like in main screen */}
      {regions && regions.length > 0 && (
        <div className="flex gap-[3px] h-[22px] items-stretch mb-5 w-full">
          {regions.map((r, idx) => {
            const isFocus = r.id === region.id;
            const isSounding = r.id === playingRegion;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelectRegion?.(r.id)}
                className="relative overflow-hidden transition-all cursor-pointer select-none flex items-center justify-center px-1"
                style={{
                  flex: `${r.end - r.start} 1 0`,
                  background: isFocus ? 'var(--ink)' : 'var(--tone)',
                  color: isFocus ? 'var(--ground)' : 'var(--ink)',
                  border: isFocus
                    ? '2px solid var(--ink)'
                    : isSounding
                    ? '1.5px solid var(--signal)'
                    : '1px solid color-mix(in srgb, var(--ink) 12%, transparent)',
                }}
                aria-label={`Part ${idx + 1}: ${r.formLabel ?? r.name ?? r.kind}, ${r.end - r.start} bars`}
                title={`Part ${idx + 1}: ${r.formLabel ?? r.name ?? r.kind} (${r.end - r.start} bars)`}
              >
                <span className="slab" style={{
                  fontSize: 11.5,
                  lineHeight: 1,
                  opacity: isFocus ? 1 : 0.5,
                }}>
                  {r.end - r.start}
                </span>

                {isSounding && playing && (
                  <span style={{ position: 'absolute', inset: 0, background: 'var(--signal)', opacity: 0.16, pointerEvents: 'none' }} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* SECTION TYPE */}
      <div className="micro mb-2">Part type</div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 mb-5">
        {getGenreForm(currentWorldId ?? 'rock').steps.map(step => (
          <Chip key={step.key} active={step.key === (region.formKey ?? region.kind)} onClick={() => onKind(step.key)}>{step.label}</Chip>
        ))}
      </div>

      {/* LENGTH (Below Order) */}
      <div className="micro mb-2">Length</div>
      <div className="flex items-end gap-1.5 mb-5">
        {BAR_CHOICES.map(n => (
          <button
            key={n}
            onClick={() => onBars(n)}
            className="flex-1 flex flex-col items-center gap-1.5 cursor-pointer py-1 px-1 transition-transform hover:scale-105"
            aria-label={`${n} bars`}
          >
            <span style={{
              width: '100%', height: 8 + n * 1.4,
              background: n === bars ? 'var(--signal)' : 'color-mix(in srgb, var(--ink) 22%, transparent)',
              borderRadius: 2,
            }} />
            <span style={{ fontSize: 11.5, fontWeight: n === bars ? 700 : 500, opacity: n === bars ? 1 : 0.6 }}>{n}</span>
          </button>
        ))}
      </div>

      {/* WEIGHT — the one section dial. The genre decides what each step means. */}
      {onEnergy && (
        <div className="mb-5">
          <div className="micro mb-2">Weight</div>
          <div className="flex items-center gap-1.5">
            {([1, 2, 3, 4, 5] as const).map(d => {
              const isActive = (region.energy ?? 3) === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => onEnergy(d)}
                  title={ENERGY_LABELS[d]}
                  className="flex-1 py-2 px-2 rounded text-xs font-semibold transition-all cursor-pointer flex justify-center items-center"
                  style={{
                    background: isActive ? 'var(--ink)' : 'color-mix(in srgb, var(--ink) 8%, transparent)',
                    color: isActive ? '#ffffff' : 'var(--ink)',
                    boxShadow: isActive ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 15%, transparent)',
                  }}
                >
                  {isActive ? ENERGY_LABELS[d] : d}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* CHORDS */}
      {onChords && (
        <div className="mb-5">
          <ChordsControl
            region={region}
            currentWorldId={currentWorldId}
            onChords={onChords}
            customProgressions={customProgressions}
            onAddCustomChords={onAddCustomChords}
            onUpdateCustomChords={onUpdateCustomChords}
            onDeleteCustomChords={onDeleteCustomChords}
          />
        </div>
      )}

      {/* TEMPO SHIFT */}
      {onTempoShift && (
        <>
          <div className="micro mb-2">Tempo</div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            <Chip
              active={!region.tempoShift}
              onClick={() => onTempoShift(undefined)}
            >
              Follow song ({songFeelName?.toLowerCase() ?? 'as written'})
            </Chip>
            {FEELS.map(f => (
              <Chip
                key={f.id}
                active={region.tempoShift === f.id}
                onClick={() => onTempoShift(f.id)}
              >
                {f.name}
              </Chip>
            ))}
          </div>
        </>
      )}

      {/* PART GENRE (Moved after Tempo, heading changed from Style to Part Genre) */}
      {onGenre && (
        <>
          <div className="micro mb-2">Part genre</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-5">
            {Object.entries(GENRE_PLATES).map(([genreId, p]) => {
              const active = genreCategoryId(region.genre ?? currentWorldId ?? 'tango') === genreId;
              return (
                <GenreTile key={genreId} id={genreId} p={p} active={active} onClick={() => onGenre(genreId)} compact />
              );
            })}
          </div>
        </>
      )}

    </Sheet>
  );
}

/* ========================================================================== */
/*  Section Genre — choose the musical tradition applied to this section      */
/* ========================================================================== */
export function SectionGenreSheet({
  open,
  onClose,
  currentGenre,
  regionKind,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  currentGenre: string;
  regionKind?: string;
  onPick: (genreId: string) => void;
}) {
  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={regionKind ? `Part genre: ${regionKind}` : 'Part genre'}
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {Object.entries(GENRE_PLATES).map(([id, p]) => (
          <GenreTile
            key={id}
            id={id}
            p={p}
            active={id === genreCategoryId(currentGenre)}
            onClick={() => {
              onPick(id);
              onClose();
            }}
          />
        ))}
      </div>
    </Sheet>
  );
}

/* ========================================================================== */
/*  Tempo Sheet — set tempo shift per section or per song                     */
/* ========================================================================== */

function BpmControl({
  label,
  value,
  onChange,
  onReset,
  resetLabel,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  onReset?: () => void;
  resetLabel?: string;
}) {
  return (
    <div className="mb-4 p-4 rounded-[3px]" style={{ background: 'var(--tone)', boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 18%, transparent)' }}>
      <div className="flex items-center justify-between mb-2.5">
        <div className="micro font-bold opacity-70">{label}</div>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="btn-pill cursor-pointer"
            style={{
              background: 'transparent',
              color: 'var(--ink)',
              boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
            }}
          >
            {resetLabel ?? 'Reset'}
          </button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => { if (value > 5) onChange(value - 5); }}
          className="btn-pill font-mono font-bold cursor-pointer hover:bg-black/10 transition-colors px-3 py-1.5 text-xs"
          style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)' }}
        >
          -5
        </button>
        <button
          type="button"
          onClick={() => { if (value > 1) onChange(value - 1); }}
          className="btn-pill font-mono font-bold cursor-pointer hover:bg-black/10 transition-colors px-3 py-1.5 text-xs"
          style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)' }}
        >
          -1
        </button>
        <div className="flex-1 flex items-center justify-center gap-1.5 bg-black/5 px-3 py-1.5 rounded-[3px]" style={{ border: '1px solid color-mix(in srgb, var(--ink) 20%, transparent)' }}>
          <input
            type="number"
            min={0}
            step="any"
            value={value}
            onChange={e => {
              const val = Number(e.target.value);
              if (Number.isFinite(val) && val > 0) onChange(val);
            }}
            className="w-14 text-center font-mono font-bold text-base bg-transparent outline-none"
          />
          <span className="text-xs font-semibold opacity-60">BPM</span>
        </div>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="btn-pill font-mono font-bold cursor-pointer hover:bg-black/10 transition-colors px-3 py-1.5 text-xs"
          style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)' }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => onChange(value + 5)}
          className="btn-pill font-mono font-bold cursor-pointer hover:bg-black/10 transition-colors px-3 py-1.5 text-xs"
          style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)' }}
        >
          +5
        </button>
      </div>
    </div>
  );
}

export function TempoSheet({
  open,
  onClose,
  baseBpm,
  sectionBpm,
  songTempoShift,
  sectionTempoShift,
  sectionKind,
  onSetSongBpm,
  onSetSectionBpm,
  onSetSongTempoShift,
  onSetSectionTempoShift,
}: {
  open: boolean;
  onClose: () => void;
  baseBpm: number;
  sectionBpm?: number;
  songTempoShift?: string;
  sectionTempoShift?: string;
  sectionKind?: string;
  onSetSongBpm: (bpm: number) => void;
  onSetSectionBpm: (bpm?: number) => void;
  onSetSongTempoShift: (shift?: string) => void;
  onSetSectionTempoShift: (shift?: string) => void;
}) {
  const [scope, setScope] = useState<'section' | 'song'>('section');
  const songFeel = FEELS.find(f => f.id === songTempoShift) ?? FEELS.find(f => f.id === 'as-written')!;
  const currentSectionFeel = sectionTempoShift ? FEELS.find(f => f.id === sectionTempoShift) : null;

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Tempo"
    >
      <div className="flex gap-2.5 mb-4">
        <button
          type="button"
          onClick={() => setScope('section')}
          className="flex-1 py-3 px-4 text-left transition-all text-sm cursor-pointer rounded-[3px]"
          style={{
            background: scope === 'section' ? 'var(--ink)' : 'var(--tone)',
            color: scope === 'section' ? 'var(--ground)' : 'var(--ink)',
            boxShadow: scope === 'section' ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
          }}
        >
          <div className="font-bold truncate">{sectionKind || 'This part'}</div>
          <div className="text-[11px] micro opacity-75 mt-0.5">
            {sectionBpm
              ? `${sectionBpm} BPM (custom)`
              : sectionTempoShift
              ? (currentSectionFeel?.name.toLowerCase() ?? 'part feel')
              : `Follows song (${baseBpm} BPM)`}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setScope('song')}
          className="flex-1 py-3 px-4 text-left transition-all text-sm cursor-pointer rounded-[3px]"
          style={{
            background: scope === 'song' ? 'var(--ink)' : 'var(--tone)',
            color: scope === 'song' ? 'var(--ground)' : 'var(--ink)',
            boxShadow: scope === 'song' ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
          }}
        >
          <div className="font-bold">Whole song</div>
          <div className="text-[11px] micro opacity-75 mt-0.5">
            {baseBpm} BPM · {songFeel.name.toLowerCase()}
          </div>
        </button>
      </div>

      {scope === 'section' ? (
        <div>
          <BpmControl
            label={`${sectionKind || 'Part'} tempo (${sectionBpm ? 'custom' : 'follows song'})`}
            value={sectionBpm ?? baseBpm}
            onChange={v => onSetSectionBpm(v)}
            onReset={sectionBpm ? () => onSetSectionBpm(undefined) : undefined}
            resetLabel="Follow song"
          />

          <div className="micro font-bold opacity-60 mb-2">Tempo feel</div>
          <div className="flex flex-wrap gap-1.5">
            <Chip
              active={!sectionTempoShift}
              onClick={() => { onSetSectionTempoShift(undefined); }}
            >
              Follow song ({songFeel.name.toLowerCase()})
            </Chip>
            {FEELS.map(f => {
              const isActive = sectionTempoShift === f.id;
              return (
                <Chip
                  key={f.id}
                  active={isActive}
                  onClick={() => { onSetSectionTempoShift(f.id); }}
                >
                  {f.name}
                </Chip>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <BpmControl
            label="Song tempo"
            value={baseBpm}
            onChange={onSetSongBpm}
          />

          <div className="micro font-bold opacity-60 mb-2">Tempo feel</div>
          <div className="flex flex-wrap gap-1.5">
            {FEELS.map(f => {
              const isActive = (songTempoShift ?? 'as-written') === f.id;
              return (
                <Chip
                  key={f.id}
                  active={isActive}
                  onClick={() => { onSetSongTempoShift(f.id); }}
                >
                  {f.name}
                </Chip>
              );
            })}
          </div>
        </div>
      )}
    </Sheet>
  );
}


/* ========================================================================== */
/*  Download Sheet — audio, performance, notation and DAW interchange                             */
/* ========================================================================== */

export function DownloadSheet({
  open,
  onClose,
  song,
  onExport,
}: {
  open: boolean;
  onClose: () => void;
  song: SongSheet;
  onExport?: (selectedTrackIds: string[], format: ExportFormat) => void;
}) {
  const [format, setFormat] = useState<ExportFormat>('mp3');
  const [selectedTracks, setSelectedTracks] = useState<Record<string, boolean>>({});

  // Initialize selected tracks when dialog opens or tracks change
  useEffect(() => {
    if (open && song?.tracks) {
      const initial: Record<string, boolean> = {};
      song.tracks.forEach(t => {
        initial[t.id] = !t.muted;
      });
      setSelectedTracks(initial);
    }
  }, [open, song?.tracks]);

  const activeTrackCount = Object.values(selectedTracks).filter(Boolean).length;

  const toggleAll = (select: boolean) => {
    const updated: Record<string, boolean> = {};
    song.tracks.forEach(t => {
      updated[t.id] = select;
    });
    setSelectedTracks(updated);
  };

  const handleDownload = () => {
    if (onExport) {
      const selectedTrackIds = song.tracks
        .filter(t => selectedTracks[t.id])
        .map(t => t.id);
      onExport(selectedTrackIds, format);
    }
  };

  return (
    <Sheet open={open} onClose={onClose} title="Download">
      <div className="mb-5">
        <label htmlFor="export-format" className="micro font-semibold block mb-2">Export format</label>
        <select id="export-format" value={format} onChange={e => setFormat(e.target.value as ExportFormat)} className="w-full p-3 border border-black/20 rounded bg-transparent">
          {EXPORT_FORMATS.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
        </select>
        <p className="text-xs opacity-70 mt-2 leading-relaxed">{EXPORT_FORMATS.find(option => option.id === format)?.description}</p>
        <p className="text-xs opacity-60 mt-2">Selected parts are included regardless of playback mute or solo. Scores use quantized timing; MIDI and JSON retain performance timing.</p>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="micro font-semibold">Included instruments ({activeTrackCount}/{song?.tracks?.length || 0})</div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleAll(true)}
              className="btn-pill cursor-pointer"
              style={{
                background: 'transparent',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
            >
              All
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="btn-pill cursor-pointer"
              style={{
                background: 'transparent',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
            >
              None
            </button>
            {['bass', 'percussion'].map(role => <button key={role} onClick={() => setSelectedTracks(Object.fromEntries(song.tracks.map(t => [t.id, role === 'bass' ? t.role === 'bass' : ['drums', 'percussion'].includes(t.role)])))} className="btn-pill cursor-pointer" style={{ background: 'transparent', color: 'var(--ink)' }}>{role === 'bass' ? 'Bass' : 'Percussion'}</button>)}
          </div>
        </div>

        <div className="flex flex-col gap-1 max-h-56 overflow-y-auto pr-1">
          {song?.tracks?.map(t => {
            const instDef = instrument(t.instrumentId ?? t.instrument);
            const displayName = t.name || instDef?.name || 'Instrument';
            const isChecked = !!selectedTracks[t.id];
            return (
              <label
                key={t.id}
                className="flex items-center justify-between gap-2.5 cursor-pointer px-3.5 py-2.5 hover:bg-black/5 transition-colors rounded-[3px]"
                style={{
                  background: isChecked ? 'var(--tone)' : 'transparent',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setSelectedTracks(prev => ({ ...prev, [t.id]: e.target.checked }))}
                    className="accent-black cursor-pointer"
                  />
                  <span className="text-sm font-medium">{displayName}</span>
                </div>
                {instDef?.family && (
                  <span className="text-[11px] micro opacity-60 capitalize">
                    {instDef.family.replace(/-/g, ' ')}
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/10 pt-4">
        <button
          className="btn-pill cursor-pointer"
          style={{
            background: 'transparent',
            color: 'var(--ink)',
            boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
          }}
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          onClick={handleDownload}
          disabled={activeTrackCount === 0}
          className="btn-cta cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: 'var(--ink)',
            color: 'var(--ground)',
          }}
        >
          Download {format === 'mp3' ? 'MP3' : format === 'wav' ? 'WAV' : 'export'}
        </button>
      </div>
    </Sheet>
  );
}



/* ========================================================================== */
/*  Start Over / Fresh Song Modal                                             */
/* ========================================================================== */
export function StartOverModal({
  open,
  onClose,
  currentWorldId,
  onConfirmResetCurrent,
  onSelectNewGenre,
  isInitialLoad = false,
}: {
  open: boolean;
  onClose: () => void;
  currentWorldId: string;
  onConfirmResetCurrent: () => void;
  onSelectNewGenre: (worldId: string) => void;
  isInitialLoad?: boolean;
}) {
  const currentPlate = plateFor(currentWorldId);
  const [showAllGenres, setShowAllGenres] = useState(isInitialLoad);

  React.useEffect(() => {
    if (open && isInitialLoad) {
      setShowAllGenres(true);
    }
  }, [open, isInitialLoad]);

  return (
    <Sheet
      open={open}
      onClose={() => {
        setShowAllGenres(false);
        onClose();
      }}
      title={isInitialLoad || showAllGenres ? 'Choose a genre' : 'Restart'}
    >
      <div className="space-y-4">
        {!showAllGenres ? (
          <div className="pt-1">
            <button
              onClick={() => {
                onConfirmResetCurrent();
                onClose();
              }}
              className="option-row"
            >
              <span className="option-row-label">Reset to {currentPlate.short}</span>
            </button>

            <button
              onClick={() => setShowAllGenres(true)}
              className="option-row"
            >
              <span className="option-row-label">Switch genre</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-2.5">
              {!isInitialLoad && (
                <button
                  onClick={() => setShowAllGenres(false)}
                  className="btn-pill cursor-pointer"
                  style={{
                    background: 'transparent',
                    color: 'var(--ink)',
                    boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
                  }}
                >
                  Back
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[55vh] overflow-y-auto pr-1">
              {Object.entries(GENRE_PLATES).map(([id, p]) => (
                <GenreTile
                  key={id}
                  id={id}
                  p={p}
                  active={id === genreCategoryId(currentWorldId)}
                  onClick={() => {
                    onSelectNewGenre(id);
                    setShowAllGenres(false);
                    onClose();
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Sheet>
  );
}

/* ========================================================================== */
/*  Randomize Sheet                                                           */
/* ========================================================================== */
/** Run `fn` after the browser has painted the next frame. */
function afterPaint(fn: () => void) {
  requestAnimationFrame(() => window.setTimeout(fn, 0));
}

/**
 * Close the sheet first, then do the heavy work. Randomizing rebuilds and
 * recompiles the whole song synchronously; if that runs in the click handler
 * the sheet can't start closing until it's done, and the click feels dead.
 * (Defined at module level so it isn't remounted on every render.)
 */
function RandomizeRow({ label, onClick, onClose }: { label: string; onClick: () => void; onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={() => {
        onClose();
        afterPaint(onClick);
      }}
      className="option-row"
    >
      <span className="option-row-label">{label}</span>
    </button>
  );
}

export function RandomizeSheet({
  open,
  onClose,
  regionKind,
  onRandomizePartEverything,
  onRandomizePartChords,
  onRandomizePartRhythms,
  onRandomizeEverything,
  onRandomizeSongChords,
  onRandomizeSongRhythms,
  onRandomizeInstruments,
  onAddRandomInstrumentToPart,
  onAddRandomInstrumentToSong,
}: {
  open: boolean;
  onClose: () => void;
  regionKind?: string;
  onRandomizePartEverything?: () => void;
  onRandomizePartChords?: () => void;
  onRandomizePartRhythms?: () => void;
  onRandomizeEverything?: () => void;
  onRandomizeSongChords: () => void;
  onRandomizeSongRhythms: () => void;
  onRandomizeInstruments: () => void;
  onAddRandomInstrumentToPart?: () => void;
  onAddRandomInstrumentToSong?: () => void;
}) {
  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Randomize"
    >
      <div className="pt-1">
        {/* Active Part Options */}
        {regionKind && (onRandomizePartEverything || onRandomizePartChords || onRandomizePartRhythms || onAddRandomInstrumentToPart) && (
          <div className="mb-5">
            <div className="micro px-0.5 mb-1 capitalize">This part &middot; {regionKind}</div>
            <div>
              {onRandomizePartEverything && (
                <RandomizeRow onClose={onClose} label="Randomize everything" onClick={onRandomizePartEverything} />
              )}
              {onRandomizePartChords && (
                <RandomizeRow onClose={onClose} label="Randomize chords" onClick={onRandomizePartChords} />
              )}
              {onRandomizePartRhythms && (
                <RandomizeRow onClose={onClose} label="Randomize rhythms" onClick={onRandomizePartRhythms} />
              )}
              {onAddRandomInstrumentToPart && (
                <RandomizeRow onClose={onClose} label="Add a random instrument" onClick={onAddRandomInstrumentToPart} />
              )}
            </div>
          </div>
        )}

        {/* Entire Song Options */}
        <div>
          <div className="micro px-0.5 mb-1">Whole song</div>
          <div>
            {onRandomizeEverything && (
              <RandomizeRow onClose={onClose} label="Randomize everything" onClick={onRandomizeEverything} />
            )}
            <RandomizeRow onClose={onClose} label="Randomize chords" onClick={onRandomizeSongChords} />
            <RandomizeRow onClose={onClose} label="Randomize rhythms" onClick={onRandomizeSongRhythms} />
            <RandomizeRow onClose={onClose} label="Randomize instruments" onClick={onRandomizeInstruments} />
            {onAddRandomInstrumentToSong && (
              <RandomizeRow onClose={onClose} label="Add a random instrument" onClick={onAddRandomInstrumentToSong} />
            )}
          </div>
        </div>
      </div>
    </Sheet>
  );
}

export function EnergySheet({ open, onClose, energy, sectionKind, onPick }: {
  open: boolean; onClose: () => void; energy: SectionEnergy; sectionKind: string;
  onPick: (energy: SectionEnergy) => void;
}) {
  return <Sheet open={open} onClose={onClose} title="Energy" kicker={`This part · ${sectionKind}`}>
    <p className="text-xs opacity-65 mb-4">How much this part of the song is working.</p>
    <div className="flex flex-col gap-2">
      {([1, 2, 3, 4, 5] as const).map(value => <button key={value} type="button"
        aria-pressed={energy === value} onClick={() => { onPick(value); onClose(); }}
        className="flex items-center gap-3 p-3 text-left text-sm cursor-pointer rounded-sm hover:opacity-80"
        style={{ background: energy === value ? 'var(--ink)' : 'transparent', color: energy === value ? 'var(--ground)' : 'var(--ink)' }}>
        <span className="font-mono opacity-60">{value}</span><span className="font-semibold">{ENERGY_LABELS[value]}</span>
      </button>)}
    </div>
  </Sheet>;
}
