import type { ExportFormat } from './export/formats';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dices, Trash2, Pencil } from 'lucide-react';
import './index.css';

import { Glyph, PlayIcon, PauseIcon } from './ui/Glyph';
import { Sheet, NoteCard, NoteMark } from './ui/Sheet';
import { noteTags } from './ui/noteTags';
import { WorldSheet, InstrumentSheet, PatternSheet, SectionSheet, SectionGenreSheet, TempoSheet, EnergySheet, DownloadSheet, StartOverModal, RandomizeSheet, ChordSheet } from './ui/sheets';
import { StyleSheetModal } from './ui/StyleSheet';
import { StyleInspector } from './ui/StyleInspector';
import { PerformanceInspector } from './ui/PerformanceInspector';
import { RoleIcon, RoleSettings } from './ui/RoleControl';
import { supportsSolo, soloistAtBar } from './engine/sheet/solo';
import { plateFor, applyPlate } from './ui/worlds';
import { resolveStyle, getCanonicalStyle } from './engine/style';
import {
  Sheet as SongSheet, Voice, createSheet, switchLensOnly, switchSectionWorld,
  setBars, setKind, setSectionTitle, moveSection, setSectionChords, getSectionGenre,
  randomizeInstruments, addRandomInstrument, removeAllInstruments, randomizePatternsForSection, randomizePatternsForSong,
  randomizeChordsForSection, randomizeChordsForSong, randomizeEverythingForSong, randomizeEverythingForSection,
  duplicateSection, addSensibleSectionAfter, removeSection, setInstrument, setPattern, addVoice, removeVoice,
  isVoiceSilentInSection, isVoiceSilentInAll, silenceVoiceInSection, silenceVoiceInAll,
  unsilenceVoiceInSection, unsilenceVoiceInAll,
  silenceAllVoicesInSection, unsilenceAllVoicesInSection,
  setTrackRole, getTrackRole, setSectionSolo, getResolvedSectionStyle,
  getEffectiveBpm, setSectionTempoShift, setSongTempoShift, setSongBpm, setSectionBpm, setSectionEnergy,
} from './engine/sheet/index.ts';
import { FEELS } from './data/tempoFeels';
import { ENERGY_LABELS } from './data/performance/energy';
import { SongPlayer, type PlayerState } from './engine/playback/songPlayer';
import type { Performance } from './engine/band/performanceData';
import { preparedAudioStats } from './engine/cache/preparedAudio';
import { PATTERNS_BY_ID, cleanPatternName } from './data/genres';

function loadInitialSong(): { song: SongSheet; isNew: boolean } {
  const params = new URLSearchParams(window.location.search);
  const genre = params.get('genre');
  if (genre || params.get('score') === '1') {
    try { return { song: createSheet(genre ?? 'tango', params.get('style') ?? undefined), isNew: false }; }
    catch { /* An invalid review link falls back to the normal starter. */ }
  }
  return { song: createSheet('tango'), isNew: true };
}

export default function App() {
  const [initialData] = useState(() => loadInitialSong());
  const [song, setSong] = useState<SongSheet>(initialData.song);
  const [playerState, setPlayerState] = useState<PlayerState>({ status: 'idle', progress: 0 });
  const playerStatus = playerState.composition === song ? playerState.status : 'compiling';
  const playing = playerStatus === 'playing' || playerStatus === 'starting';
  const playbackLabel = playing ? 'Pause (Space)' : playerStatus === 'error' ? 'Retry playback (Space)' : 'Play (Space)';
  const [isBouncing, setIsBouncing] = useState(false);
  const [bounceProgress, setBounceProgress] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [bar, setBar] = useState(0);
  const [tempoOpen, setTempoOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [startOverOpen, setStartOverOpen] = useState(initialData.isNew);
  const [randomizeOpen, setRandomizeOpen] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingPartTitle, setIsEditingPartTitle] = useState(false);
  const [sectionGenreOpen, setSectionGenreOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [scoreOpen, setScoreOpen] = useState(() => new URLSearchParams(window.location.search).get('score') === '1');
  const [showDevStyle, setShowDevStyle] = useState(() => {
    try {
      return typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('dev') === 'style';
    } catch {
      return false;
    }
  });
  const [showDevAudio] = useState(() => new URLSearchParams(window.location.search).get('dev') === 'audio');

  const [pickedRegion, setPickedRegion] = useState<string | null>(null);

  const [worldOpen, setWorldOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [chordOpen, setChordOpen] = useState(false);
  const [roleFor, setRoleFor] = useState<string | null>(null);
  const [roleScope, setRoleScope] = useState<'section' | 'song'>('section');
  const [energyOpen, setEnergyOpen] = useState(false);
  const [instrFor, setInstrFor] = useState<string | null>(null);
  const [addingVoice, setAddingVoice] = useState(false);
  const [patternFor, setPatternFor] = useState<string | null>(null);
  const [note, setNote] = useState<{ title: string; body: string; tags?: string[] } | null>(null);

  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (msg: string) => {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    setToast(msg);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 2500);
  };

  const currentResolvedStyle = useMemo(() => {
    return resolveStyle({
      genreId: song.worldId,
      styleId: song.styleId ?? getCanonicalStyle(song.worldId).id,
      influences: (song as any).styleInfluences,
      userOverrides: (song as any).styleOverrides,
    });
  }, [song.worldId, song.styleId, (song as any).styleInfluences, (song as any).styleOverrides]);

  const handleStartOver = (worldId: string, styleId?: string) => {
    const canonical = getCanonicalStyle(worldId);
    const targetStyleId = styleId ?? canonical.id;
    const fresh = createSheet(worldId, targetStyleId);
    setSong(fresh);
    setPickedRegion(null);
    setBar(0);
    setStep(0);
    barRef.current = 0;
    stepRef.current = 0;
    seekSecondsRef.current = 0;
    playerRef.current?.locate(0);
    showToast(`Started a new ${plateFor(worldId).short} song (${resolveStyle({ genreId: worldId, styleId: targetStyleId }).name})`);
  };

  const handleSelectStyle = (styleId: string) => {
    const next = createSheet(song.worldId, styleId);
    if (song.title && song.title !== 'Untitled') {
      next.title = song.title;
    }
    setSong(next);
    setPickedRegion(null);
    setBar(0);
    setStep(0);
    barRef.current = 0;
    stepRef.current = 0;
    seekSecondsRef.current = 0;
    playerRef.current?.locate(0);
    const targetName = resolveStyle({ genreId: song.worldId, styleId }).name;
    showToast(`Style set to ${targetName}`);
  };

  const exportAbortRef = useRef<AbortController | null>(null);
  const handleExport = async (selectedTrackIds: string[], format: ExportFormat) => {
    if (exportAbortRef.current) return;
    if (!perfRef.current || playerRef.current?.composition !== songRef.current || playerRef.current.snapshot.performance !== perfRef.current) {
      showToast('Wait for the arrangement to finish compiling before exporting.');
      return;
    }
    const controller = new AbortController();
    exportAbortRef.current = controller;
    setIsBouncing(true);
    setBounceProgress(0);
    // Capture the composition and compiled performance together before yielding.
    const context = { song: songRef.current, performance: perfRef.current, selectedTrackIds };
    try {
      const { createExport, downloadExport } = await import('./export');
      const result = await createExport(context, format, fraction => {
        if (!controller.signal.aborted) setBounceProgress(fraction);
      }, controller.signal);
      if (controller.signal.aborted) return;
      downloadExport(result.blob, result.name);
      showToast(`Exported ${result.name}`);
    } catch (error) {
      if (!controller.signal.aborted) showToast(error instanceof Error ? error.message : 'Export failed. Please try again.');
    } finally {
      if (exportAbortRef.current === controller) {
        exportAbortRef.current = null;
        setIsBouncing(false);
        setBounceProgress(null);
      }
    }
  };

  const timelineRef = useRef<HTMLDivElement>(null);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [hoverFrac, setHoverFrac] = useState<number | null>(null);

  const plate = plateFor(song.worldId);
  useEffect(() => { applyPlate(plate); }, [plate]);

  const totalBars = song.durationMeasures || 1;

  /* ---- transport & scrubbing -------------------------------------------- */
  const songRef = useRef(song);
  songRef.current = song;
  const barRef = useRef(bar);
  barRef.current = bar;
  const stepRef = useRef(step);
  stepRef.current = step;
  const seekSecondsRef = useRef<number>(0);
  const playerRef = useRef<SongPlayer | null>(null);

  const seekTo = (newBar: number, newStep: number = 0) => {
    const total = songRef.current.durationMeasures || 1;
    const clampedBar = Math.max(0, Math.min(total - 1, newBar));
    const clampedStep = Math.max(0, Math.min(15, newStep));
    setBar(clampedBar);
    setStep(clampedStep);
    barRef.current = clampedBar;
    stepRef.current = clampedStep;
    // the transport thinks in seconds, so translate the grid position through
    // the tempo map rather than assuming one tempo for the whole song
    const bt = perfRef.current?.bars[clampedBar];
    if (bt) {
      const seconds = bt.start + ((bt.end - bt.start) * clampedStep) / 16;
      seekSecondsRef.current = seconds;
      playerRef.current?.locate(seconds);
    }
  };

  const getFracFromPointer = (clientX: number) => {
    if (!timelineRef.current) return 0;
    const rect = timelineRef.current.getBoundingClientRect();
    if (rect.width <= 0) return 0;
    const x = clientX - rect.left;
    return Math.max(0, Math.min(1, x / rect.width));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsScrubbing(true);
    const frac = getFracFromPointer(e.clientX);
    const totalSteps = totalBars * 16;
    const target = Math.min(totalSteps - 1, Math.max(0, Math.round(frac * totalSteps)));
    seekTo(Math.floor(target / 16), target % 16);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const frac = getFracFromPointer(e.clientX);
    if (isScrubbing) {
      const totalSteps = totalBars * 16;
      const target = Math.min(totalSteps - 1, Math.max(0, Math.round(frac * totalSteps)));
      seekTo(Math.floor(target / 16), target % 16);
    } else {
      setHoverFrac(frac);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isScrubbing) {
      setIsScrubbing(false);
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
    }
  };

  const handlePointerLeave = () => {
    if (!isScrubbing) setHoverFrac(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (!e.repeat) { playerRef.current?.configure(songRef.current); playerRef.current?.toggle(); }
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        seekTo(bar - 1, 0);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        seekTo(bar + 1, 0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bar]);

  /* ---- what we are looking at ------------------------------------------ */
  const playingRegion = song.measures[bar]?.regionId ?? song.regions[0]?.id;
  const focusId = pickedRegion ?? playingRegion;
  const focusIndex = Math.max(0, song.regions.findIndex(r => r.id === focusId));
  const region = song.regions[focusIndex] ?? song.regions[0];
  const chords = region?.chords ?? ['Am'];
  const live = region?.id === playingRegion;
  const activeChordIndex = (playing || isScrubbing) && live
    ? Math.max(0, ((song.measures[bar]?.index ?? bar) - (region?.start ?? 0)) % chords.length)
    : -1;
  // One name for the focused part, used everywhere it shows up in text.
  const partName = region ? (region.formLabel ?? region.name ?? String(region.kind)) : '';
  const sectionStyle = region ? getResolvedSectionStyle(song, region) : null;

  /* ---- one compiled snapshot owns both audio and the playhead ------------ */
  const perfRef = useRef<Performance | null>(null);

  useEffect(() => {
    const player = new SongPlayer(state => {
      perfRef.current = state.performance ?? null;
      setPlayerState(state);
    }, seconds => {
      seekSecondsRef.current = seconds;
      const bars = player.snapshot.performance?.bars;
      if (!bars?.length) return;
      let i = Math.min(bars.length - 1, Math.max(0, barRef.current));
      while (i > 0 && seconds < bars[i].start) i--;
      while (i < bars.length - 1 && seconds >= bars[i].end) i++;
      const bt = bars[i];
      const frac = bt.end > bt.start ? (seconds - bt.start) / (bt.end - bt.start) : 0;
      const st = Math.max(0, Math.min(15, Math.floor(frac * 16)));
      if (barRef.current !== i) { barRef.current = i; setBar(i); }
      if (stepRef.current !== st) { stepRef.current = st; setStep(st); }
    }, showDevAudio);
    playerRef.current = player;
    player.configure(songRef.current);
    return () => {
      player.dispose();
      if (playerRef.current === player) playerRef.current = null;
      exportAbortRef.current?.abort();
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    playerRef.current?.configure(song);
  }, [song]);

  // Accepts a plain Track: the sheet's tracks always carry an instrumentId at
  // runtime, but the stored type keeps it optional for older saved songs.

  const sectionGenreId = getSectionGenre(song, region?.id);
  const sectionPlate = plateFor(sectionGenreId);
  const isPartGenreSame = !region?.genre || region.genre === song.worldId;

  const handleSelectSectionGenre = (genreId: string) => {
    if (!region) return;
    try {
      edit(s => switchSectionWorld(s, region.id, genreId));
      showToast(`Switched ${partName} to ${plateFor(genreId).short}`);
    } catch (error) {
      console.error('Unable to switch part genre', { regionId: region.id, genreId, error });
      showToast(`Could not switch ${partName} to ${plateFor(genreId).short}`);
    }
  };

  const arrangementHere = song.arrangement[region?.id ?? ''] ?? {};
  const patternOf = (trackId: string) => arrangementHere[trackId] ? PATTERNS_BY_ID[arrangementHere[trackId]] : undefined;

  const shownMeasure = live ? song.measures[bar] : song.measures[region?.start ?? 0];

  const patternVoice = useMemo(
    () => song.tracks.find(t => t.id === patternFor) as Voice | undefined,
    [song.tracks, patternFor]
  );

  const currentSoundingRegion = song.measures[bar]
    ? song.regions.find(r => r.id === song.measures[bar].regionId) ?? region
    : region;
  const activeRegionForTempo = live ? currentSoundingRegion : region;
  const effectivePlayback = getEffectiveBpm(song, activeRegionForTempo?.id);
  const songFeel = FEELS.find(f => f.id === (song.tempoShift ?? 'as-written')) ?? FEELS[3];

  const edit = (
    fn: (s: SongSheet) => SongSheet,
    scope?: { tier: 0 | 1 | 2; regions?: string[] } | { tier: 3; tracks?: string[] } | { tier: 'none' }
  ) => {
    // Mix edits also produce a new immutable playback snapshot. Re-rendering
    // finishes before that version resumes, so UI and audio cannot disagree.
    void scope;
    setSong(fn);
  };
  const playheadPercent = Math.min(100, Math.max(0, ((bar * 16 + step) / (totalBars * 16)) * 100));

  return (
    <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
      {toast && (
        <div
          className="fixed top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded shadow-lg text-xs font-semibold z-50 transition-all pointer-events-none"
          style={{
            background: 'var(--ink)',
            color: 'var(--ground)',
            border: `1px solid ${plate.signal}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          {toast}
        </div>
      )}

      <div className="w-full max-w-[620px] mx-auto flex-1 flex flex-col px-5 sm:px-6 pb-12">

        {/* ---- 1. HEADER: Balanced 3-Zone Composition -------------------- */}
        <header className="flex flex-wrap items-center justify-between pt-5 pb-4 gap-x-3 gap-y-2.5">
          {/* LEFT: Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            {isEditingTitle ? (
              /* An invisible copy of the title (same text + pencil) sizes this box, so
                 renaming never changes the header's width or moves the genre/style pills. */
              <div className="relative flex items-center gap-2 min-w-0" style={{ minWidth: 50 }}>
                <span className="slab truncate invisible" aria-hidden="true" style={{ fontSize: 32, lineHeight: 1.1 }}>
                  {song.title || ' '}
                </span>
                <Pencil size={16} strokeWidth={2} className="invisible shrink-0" aria-hidden="true" />
                <input
                  autoFocus
                  className="slab bg-transparent outline-none absolute inset-y-0 left-0 w-full"
                  style={{ fontSize: 32, lineHeight: 1.1, borderBottom: '1px solid var(--ink)' }}
                  value={song.title}
                  onChange={e => edit(s => ({ ...s, title: e.target.value }))}
                  onFocus={() => {
                    if (region) setPickedRegion(region.id);
                  }}
                  onBlur={() => setIsEditingTitle(false)}
                  onKeyDown={e => e.key === 'Enter' && setIsEditingTitle(false)}
                />
              </div>
            ) : (
              <h1 
                className="slab truncate cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2" 
                style={{ fontSize: 32, lineHeight: 1.1 }}
                onClick={() => {
                  if (region) setPickedRegion(region.id);
                  setIsEditingTitle(true);
                }}
                title="Click to rename song"
              >
                <span className="truncate">{song.title}</span>
                <Pencil size={16} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
              </h1>
            )}
          </div>

          {/* RIGHT: Song Genre & Style cluster */}
          <div className="flex items-center gap-2 min-w-0 max-w-full ml-auto">
            <button
              type="button"
              onClick={() => setWorldOpen(true)}
              className="btn-pill transition-opacity hover:opacity-85 cursor-pointer shrink-0"
              style={{
                background: 'var(--tone)',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
              title={`Song genre: ${plate.short} — click to change`}
            >
              <div className="flex items-center gap-1.5 leading-tight">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: plate.signal,
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontWeight: 600 }}>{plate.short}</span>
                <Pencil size={9} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setStyleOpen(true)}
              className="btn-pill transition-opacity hover:opacity-85 cursor-pointer min-w-0"
              style={{
                background: 'var(--tone)',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
              title={`Song style: ${currentResolvedStyle.name} — click to change`}
            >
              <div className="flex items-center gap-1.5 leading-tight min-w-0">
                <span className="truncate" style={{ fontWeight: 600 }}>{currentResolvedStyle.name}</span>
                <Pencil size={9} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
              </div>
            </button>

            <button type="button" className="btn-pill cursor-pointer shrink-0" title="Inspect every note and audition individual instruments"
              onClick={() => { playerRef.current?.pause(); setScoreOpen(true); }}>Score</button>
            {showDevStyle && (
              <button
                type="button"
                onClick={() => setShowDevStyle(false)}
                className="btn-pill bg-amber-500/20 text-amber-900 dark:text-amber-100 text-[10px] font-mono uppercase font-bold cursor-pointer"
                title="Hide Style Inspector"
              >
                Dev: Style
              </button>
            )}
          </div>
        </header>

        {/* ---- 2. PLAYBACK & RHYTHM NAVIGATION STRIP ---------------------- */}
        <div className="flex items-stretch gap-2.5 select-none mb-5">
          {/* Play/Pause button */}
          <button
            onClick={() => { playerRef.current?.configure(songRef.current); playerRef.current?.toggle(); }}
            aria-label={playbackLabel}
            aria-busy={false}
            aria-pressed={playing}
            className="flex items-center justify-center transition-transform active:scale-95 rounded shrink-0 self-stretch cursor-pointer relative"
            style={{
              width: 52,
              background: 'var(--ink)',
              color: 'var(--ground)',
            }}
            title={playbackLabel}
          >
            {playing ? (
              <PauseIcon size={18} />
            ) : (
              <PlayIcon size={18} />
            )}
          </button>

          <span className="sr-only" role="status" aria-live="polite">{playbackLabel}</span>
          {playerState.composition === song && playerState.error && <div role="alert" className="text-xs self-center">{playerState.error}</div>}

          {/* Scrubber & Section Structure Timeline */}
          <div className="flex-1 flex flex-col justify-between gap-1.5 min-w-0">
            {/* Scrubber Bar */}
            <div
              ref={timelineRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerLeave}
              className="relative cursor-ew-resize touch-none rounded"
              style={{
                height: 20,
                background: 'var(--tone)',
                border: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)',
              }}
              title="Click or drag to seek"
            >
              {/* Play progress track highlight */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: `${playheadPercent}%`,
                  background: `color-mix(in srgb, ${plate.signal} 20%, transparent)`,
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                }}
              />

              {/* Hover ghost playhead */}
              {hoverFrac !== null && !isScrubbing && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `${hoverFrac * 100}%`,
                    width: 2,
                    background: 'var(--ink)',
                    opacity: 0.35,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Draggable Scrubber Diamond Handle */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${playheadPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  width: 13,
                  height: 13,
                  background: plate.signal,
                  borderRadius: 2,
                  transformOrigin: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  border: '2px solid var(--ground)',
                  zIndex: 25,
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Song Structure Bar (Section Blocks) */}
            <div className="relative">
              {/* Playhead indicator line extending through sections */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${playheadPercent}%`,
                  width: 1.5,
                  background: plate.signal,
                  zIndex: 10,
                  pointerEvents: 'none',
                  opacity: 0.8,
                }}
              />

              {/* Section blocks with direct 1-click edit structure */}
              <div className="flex gap-[3px] h-[22px] items-stretch">
                {song.regions.map((r, idx) => {
                  const isFocus = r.id === region?.id;
                  const isSounding = r.id === playingRegion;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        setPickedRegion(r.id);
                        setSectionOpen(true);
                      }}
                      className="relative overflow-hidden transition-all cursor-pointer select-none flex items-center justify-center px-1"
                      style={{
                        flex: `${r.end - r.start} 1 0`,
                        background: isFocus ? 'var(--ink)' : 'var(--tone)',
                        color: isFocus ? 'var(--ground)' : 'var(--ink)',
                        border: isFocus
                          ? `2px solid var(--ink)`
                          : isSounding
                          ? `1.5px solid ${plate.signal}`
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
                        <span style={{ position: 'absolute', inset: 0, background: plate.signal, opacity: 0.16, pointerEvents: 'none' }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {showDevAudio && <output aria-label="Playback diagnostics" className="block text-xs tabular-nums -mt-3 mb-5">
          {playerStatus} · {Math.round(playerState.progress*100)}% · {playerRef.current?.preparedDuration.toFixed(1) ?? '0'}s prepared
          {playerState.audioStartMs !== undefined && <> · click to signal {playerState.audioStartMs.toFixed(1)}ms · hardware latency {playerState.outputLatencyMs?.toFixed(1)}ms</>}
          {' · '}{(preparedAudioStats().bytes/1024/1024).toFixed(1)} MB cached · {preparedAudioStats().hits} hits / {preparedAudioStats().misses} misses
        </output>}

        {/* ---- 3. SECTION HEADING & CHORDS (Spacious & Refined) ------------ */}
        <div className="flex items-center justify-between gap-3 pt-2 pb-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {isEditingPartTitle ? (
              <input
                autoFocus
                className="slab truncate bg-transparent outline-none"
                style={{ fontSize: 20, lineHeight: 1.1, borderBottom: '1px solid var(--ink)', width: '100%', minWidth: 50 }}
                value={region?.formLabel ?? region?.name ?? (region?.kind ? String(region.kind) : '')}
                onChange={e => {
                  const val = e.target.value;
                  if (region) {
                    setPickedRegion(region.id);
                    edit(s => setSectionTitle(s, region.id, val));
                  }
                }}
                onFocus={() => {
                  if (region) setPickedRegion(region.id);
                }}
                onBlur={() => setIsEditingPartTitle(false)}
                onKeyDown={e => e.key === 'Enter' && setIsEditingPartTitle(false)}
              />
            ) : (
              <div
                className="slab truncate cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1.5"
                style={{ fontSize: 20, lineHeight: 1.1 }}
                onClick={() => {
                  if (region) setPickedRegion(region.id);
                  setIsEditingPartTitle(true);
                }}
                title="Click to rename part"
              >
                <span className="truncate">{region?.formLabel ?? region?.name ?? region?.kind}</span>
                <Pencil size={13} strokeWidth={2} style={{ opacity: 0.4, flexShrink: 0 }} />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {pickedRegion && (
              <button
                className="btn-pill transition-opacity hover:opacity-80 cursor-pointer"
                style={{
                  background: 'var(--tone)',
                  color: 'var(--ink)',
                  boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
                }}
                onClick={() => setPickedRegion(null)}
              >
                Follow playback
              </button>
            )}
            <button
              className="btn-pill transition-opacity hover:opacity-80 cursor-pointer"
              style={{
                background: 'var(--tone)',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
              onClick={() => {
                if (region) setPickedRegion(region.id);
                setSectionOpen(true);
              }}
            >
              Edit part
            </button>
          </div>
        </div>

        {/* Weight, Chords, BPM & Part Genre in this section */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <button type="button" onClick={() => setEnergyOpen(true)}
            className="btn-pill inline-flex items-center gap-1.5 px-3 shrink-0 h-[34px] cursor-pointer hover:opacity-85"
            style={{ background: 'var(--tone)', color: 'var(--ink)', boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)' }}
            title="Change energy">
            <span className="text-xs font-semibold">{ENERGY_LABELS[region.energy ?? 3]}</span>
            <Pencil size={9} strokeWidth={2} style={{ opacity: 0.45 }} />
          </button>

          {/* Chords Button */}
          <button
            type="button"
            onClick={() => setChordOpen(true)}
            className="btn-pill inline-flex items-center gap-2.5 px-3 transition-all hover:opacity-85 cursor-pointer text-left w-fit h-[34px] shrink-0"
            style={{
              background: 'var(--tone)',
              color: 'var(--ink)',
              boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
            }}
            title="Change chords"
          >
            <div className="flex flex-wrap gap-x-2.5 items-center">
              {chords.map((c, i) => {
                const now = i === activeChordIndex;
                return (
                  <span
                    key={i}
                    style={{
                      fontSize: 13,
                      opacity: now ? 1 : 0.75,
                      fontWeight: now ? 700 : 600,
                      color: now ? 'var(--ground)' : 'inherit',
                      background: now ? 'var(--ink)' : 'transparent',
                      border: now ? '1px solid var(--ink)' : '1px solid transparent',
                      borderRadius: 2,
                      padding: '1px 4px',
                    }}
                  >
                    {c}
                  </span>
                );
              })}
            </div>
            <Pencil size={11} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
          </button>

          {/* BPM Button (next to Chords) */}
          <button
            type="button"
            onClick={() => setTempoOpen(true)}
            className="btn-pill inline-flex items-center gap-1.5 px-3 transition-all hover:opacity-85 cursor-pointer shrink-0 h-[34px]"
            style={{
              background: 'var(--tone)',
              color: 'var(--ink)',
              boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
            }}
            title="Change tempo"
          >
            <span style={{ fontWeight: 600, fontSize: 12 }}>{effectivePlayback.bpm} BPM</span>
            <span className="text-xs opacity-65">· {effectivePlayback.feel.name}</span>
            <Pencil size={9} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
          </button>

          {/* Part Genre Control */}
          {isPartGenreSame ? (
            <button
              type="button"
              onClick={() => setSectionGenreOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-medium cursor-pointer transition-all opacity-60 hover:opacity-100 hover:underline underline-offset-2 py-1 px-1 shrink-0"
              style={{ color: 'var(--ink)' }}
              title="Change part genre"
            >
              <span>part genre</span>
              <Pencil size={10} strokeWidth={2} style={{ opacity: 0.6, flexShrink: 0 }} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSectionGenreOpen(true)}
              className="btn-pill inline-flex items-center gap-1.5 px-3 transition-opacity hover:opacity-85 cursor-pointer shrink-0 h-[34px]"
              style={{
                background: 'var(--tone)',
                color: 'var(--ink)',
                boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
              }}
              title={`Part genre: ${sectionPlate.short} — click to change`}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: sectionPlate.signal,
                  display: 'inline-block',
                  borderRadius: 1,
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 12 }}>{sectionPlate.short}</span>
              <Pencil size={9} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
            </button>
          )}
        </div>

        {/* ---- 4. INSTRUMENT ROWS: Unified Grid & Geometry ---------------- */}
        <div className="flex-1 flex flex-col">
          {song.tracks.map(t => {
            const v = t as Voice;
            const p = patternOf(t.id);
            const isSilentHere = isVoiceSilentInSection(song, t.id, region.id);
            const isSilentInAll = isVoiceSilentInAll(song, t.id);
            const soloPlan = song.arrangementContext?.[region.id]?.solo;
            const restsForSolo = !!soloPlan && (!supportsSolo(soloPlan, t, soloistAtBar(soloPlan, region, shownMeasure?.index ?? region.start, sectionStyle?.contract.cycleLength)) ||
              (soloPlan.mode === 'trading' && soloPlan.trackIds.includes(t.id) &&
                !soloistAtBar(soloPlan, region, shownMeasure?.index ?? region.start, sectionStyle?.contract.cycleLength).includes(t.id)));
            const shape = isSilentHere ? undefined : shownMeasure?.patternDetailsByTrack?.[t.id];
            const sounding = (playing || isScrubbing) && live && !t.muted && !isSilentHere && !restsForSolo;

            return (
              <div
                key={t.id}
                className="py-2.5 flex flex-col justify-center"
                style={{
                  borderTop: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)',
                  opacity: t.muted ? 0.35 : isSilentHere || restsForSolo ? 0.65 : 1,
                }}
              >
                {/* Row Header Line: Role + Name + Status on left, Pattern + Action on right */}
                <div className="flex items-center justify-between gap-2">
                  {/* Left Column: Role Icon + Instrument Name + Status */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <RoleIcon instrumentName={v.name} role={getTrackRole(song, t.id, region.id)}
                      solo={!!region.solo?.trackIds.includes(t.id)} onClick={() => { setRoleScope('section'); setRoleFor(t.id); }} />

                    <button
                      onClick={() => setInstrFor(t.id)}
                      className="font-semibold text-left transition-all hover:opacity-100 cursor-pointer flex items-center gap-1 shrink-0 pb-[1px]"
                      style={{
                        fontSize: 13.5,
                        border: 'none',
                        borderBottom: '1px dotted color-mix(in srgb, var(--ink) 45%, transparent)',
                        borderRadius: 0,
                        opacity: isSilentHere ? 0.75 : 1,
                      }}
                      title={`Change instrument (${v.name})`}
                    >
                      <span className="truncate max-w-[120px] sm:max-w-[160px]">{v.name}</span>
                      <Pencil size={10} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
                    </button>

                    {isSilentHere && <span className="text-[11px] opacity-60">silent</span>}
                  </div>

                  {/* Right Column: Pattern Name & Actions */}
                  <div className="flex items-center justify-end gap-1.5 shrink-0">
                    <button
                      onClick={() => setPatternFor(t.id)}
                      className="text-right transition-all hover:opacity-100 font-mono cursor-pointer flex items-center gap-1 shrink-0 pb-[1px]"
                      style={{
                        fontSize: 11.5,
                        border: 'none',
                        borderBottom: '1px dotted color-mix(in srgb, var(--ink) 40%, transparent)',
                        borderRadius: 0,
                        opacity: isSilentHere ? 0.6 : 0.85,
                        lineHeight: 1.2,
                      }}
                      title={
                        isSilentInAll
                          ? 'Pick a rhythm to play in the whole song'
                          : isSilentHere
                          ? `Pick a rhythm to play in ${partName}`
                          : `Change rhythm for ${partName}`
                      }
                    >
                      <span className="truncate max-w-[140px] sm:max-w-[200px]">
                        {isSilentInAll ? 'silent in all' : isSilentHere ? '+ pick rhythm' : p ? cleanPatternName(p.name) : 'silent'}
                      </span>
                      <Pencil size={10} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
                    </button>

                    {p && !isSilentHere && (
                      <NoteMark onClick={() => setNote({
                        title: cleanPatternName(p.name),
                        body: p.description,
                        tags: noteTags(p),
                      })} />
                    )}

                    {/* Delete instrument button with consistent hit-box */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        edit(s => removeVoice(s, t.id));
                        showToast(`Deleted ${v.name}`);
                      }}
                      className="w-6 h-6 opacity-35 hover:opacity-100 hover:text-red-500 transition-all cursor-pointer flex items-center justify-center shrink-0 ml-0.5"
                      style={{
                        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 15%, transparent)',
                      }}
                      title={`Delete ${v.name} from song`}
                      aria-label={`Delete ${v.name}`}
                    >
                      <Trash2 size={13.5} />
                    </button>
                  </div>
                </div>

                {/* Rhythm glyph or rest indicator aligned to instrument baseline */}
                <div style={{ marginLeft: 23, marginTop: 5 }}>
                  {restsForSolo && !isSilentHere ? (
                    <div className="relative flex items-center justify-center" style={{ height: 22 }}>
                      <div className="w-full opacity-20"><Glyph onsets={[]} dim steps={16} height={22} /></div>
                      <span className="absolute text-[10px] opacity-60">{soloPlan?.trackIds.includes(t.id) ? '— waiting for solo turn —' : '— rests for solo —'}</span>
                    </div>
                  ) : isSilentHere ? (
                    <div
                      onClick={() => edit(s => isSilentInAll ? unsilenceVoiceInAll(s, t.id) : unsilenceVoiceInSection(s, t.id, region.id))}
                      className="relative flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                      style={{ height: 22 }}
                      title={isSilentInAll ? 'Click to play in all parts' : `Click to play in ${partName}`}
                    >
                      <div className="w-full opacity-20">
                        <Glyph onsets={[]} dim steps={16} height={22} />
                      </div>
                      <span
                        className="absolute text-[10px] micro tracking-wider opacity-50 select-none"
                        style={{ color: 'var(--ink)' }}
                      >
                        {isSilentInAll ? '— silent in all parts —' : `— silent in ${partName} —`}
                      </span>
                    </div>
                  ) : (
                    <Glyph
                      onsets={shape?.onsetGrid}
                      accents={shape?.accentProfile}
                      playhead={sounding ? step : null}
                      dim={t.muted}
                      height={22}
                    />
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom Controls */}
          <div className="flex w-full items-center justify-between relative" style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)' }}>
            <div className="flex items-center" style={{ paddingLeft: 11 }}>
              <button
                onClick={() => setAddingVoice(true)}
                className="flex items-center text-left transition-opacity hover:opacity-80 px-3 py-3 cursor-pointer"
              >
                <span style={{ fontSize: 13.5, fontWeight: 500, opacity: 0.85 }}>
                  + Add instrument
                </span>
              </button>
              <span className="mx-0.5 opacity-35 select-none text-xs">|</span>
              <button
                onClick={() => {
                  edit(removeAllInstruments);
                  showToast('Deleted all instruments');
                }}
                className="flex items-center text-left transition-opacity opacity-60 hover:opacity-100 hover:text-red-600 px-3 py-3 cursor-pointer"
                title="Delete all instruments"
              >
                <span style={{ fontSize: 13.5, fontWeight: 500 }}>
                  Delete all
                </span>
              </button>
            </div>
            <div className="flex items-center pr-2">
              <button
                onClick={() => setStartOverOpen(true)}
                className="px-3 py-3 opacity-65 hover:opacity-100 transition-opacity cursor-pointer"
                title="Restart song"
              >
                <span style={{ fontSize: 13.5, fontWeight: 500 }}>Restart</span>
              </button>

              <span className="mx-0.5 opacity-35 select-none text-xs">|</span>

              <button
                onClick={() => setRandomizeOpen(true)}
                className="px-3 py-3 opacity-65 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center rounded"
                title="Randomize options"
                aria-label="Randomize options"
              >
                <Dices size={18} strokeWidth={2} />
              </button>

              <span className="mx-0.5 opacity-35 select-none text-xs">|</span>

              <button
                onClick={() => setDownloadOpen(true)}
                className="px-3 py-3 opacity-65 hover:opacity-100 transition-opacity cursor-pointer"
                title="Download song"
              >
                <span style={{ fontSize: 13.5, fontWeight: 500 }}>Download</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ---- sheets ------------------------------------------------------- */}

      {isBouncing && (
        <div className="fixed inset-0 bg-white/85 z-[100] flex flex-col items-center justify-center p-6 backdrop-blur-sm text-center">
          <div className="w-10 h-10 border-3 border-black/15 border-t-black rounded-full animate-spin mb-4" />
          <div className="text-xl font-bold mb-2">Creating your export…</div>
          <p className="text-sm opacity-60 max-w-xs leading-relaxed mb-2">
            Please stand by while your song renders…
          </p>
          {bounceProgress !== null && (
            <div className="w-48 h-1.5 bg-black/10 rounded-full overflow-hidden mt-2 mb-1">
              <div
                className="h-full bg-black transition-all duration-150"
                style={{ width: `${Math.round((bounceProgress ?? 0) * 100)}%` }}
              />
            </div>
          )}
          <button 
            onClick={() => {
              exportAbortRef.current?.abort();
            }}
            className="btn-pill mt-6 cursor-pointer transition-opacity hover:opacity-80"
            style={{
              background: 'transparent',
              color: 'var(--ink)',
              boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <StartOverModal
        open={startOverOpen}
        onClose={() => setStartOverOpen(false)}
        currentWorldId={song.worldId}
        onConfirmResetCurrent={() => handleStartOver(song.worldId)}
        onSelectNewGenre={handleStartOver}
        isInitialLoad={initialData.isNew}
      />

      <RandomizeSheet
        open={randomizeOpen}
        onClose={() => setRandomizeOpen(false)}
        regionKind={partName}
        onRandomizePartEverything={region ? () => {
          edit(s => randomizeEverythingForSection(s, region.id));
          showToast(`Randomized rhythms & chords for ${partName}`);
        } : undefined}
        onRandomizePartChords={region ? () => {
          edit(s => randomizeChordsForSection(s, region.id));
          showToast(`Randomized chords for ${partName}`);
        } : undefined}
        onRandomizePartRhythms={region ? () => {
          edit(s => randomizePatternsForSection(s, region.id));
          showToast(`Randomized rhythms for ${partName}`);
        } : undefined}
        onRandomizeEverything={() => {
          edit(randomizeEverythingForSong);
          showToast('Randomized everything (instruments, rhythms & chords)');
        }}
        onRandomizeSongChords={() => {
          edit(randomizeChordsForSong);
          showToast('Randomized chords for the whole song');
        }}
        onRandomizeSongRhythms={() => {
          edit(randomizePatternsForSong);
          showToast('Randomized rhythms for the whole song');
        }}
        onRandomizeInstruments={() => {
          edit(randomizeInstruments);
          showToast('Randomized instruments for the whole song');
        }}
        onAddRandomInstrumentToPart={region ? () => {
          edit(s => addRandomInstrument(s, region.id, 'section'));
          showToast(`Added a random instrument to ${partName}`);
        } : undefined}
        onAddRandomInstrumentToSong={() => {
          edit(s => addRandomInstrument(s, region?.id, 'song'));
          showToast('Added a random instrument to the whole song');
        }}
      />

      <WorldSheet
        open={worldOpen}
        onClose={() => setWorldOpen(false)}
        current={song.worldId}
        onPick={id => {
          edit(s => switchLensOnly(s, id));
          showToast(`Theme set to ${plateFor(id).short} (colors only, music unchanged)`);
          setWorldOpen(false);
        }}
        onPickSection={id => {
          handleSelectSectionGenre(id);
          setWorldOpen(false);
        }}
        onPickSong={id => {
          handleStartOver(id);
          setWorldOpen(false);
        }}
      />

      <SectionSheet
        open={sectionOpen} onClose={() => setSectionOpen(false)}
        region={region ?? null} index={focusIndex} count={song.regions.length}
        regions={song.regions}
        playingRegion={playingRegion}
        playing={playing}
        onSelectRegion={regId => {
          setPickedRegion(regId);
          const target = song.regions.find(r => r.id === regId);
          if (target) seekTo(target.start, 0);
        }}
        onBars={n => {
          if (!region) return;
          setPickedRegion(region.id);
          edit(s => setBars(s, region.id, n));
        }}
        onKind={k => {
          if (!region) return;
          setPickedRegion(region.id);
          edit(s => setKind(s, region.id, k));
        }}
        onTitleChange={title => {
          if (!region) return;
          setPickedRegion(region.id);
          edit(s => setSectionTitle(s, region.id, title));
        }}
        onStartEditingTitle={() => {
          if (region) setPickedRegion(region.id);
        }}
        onMove={d => {
          if (!region) return;
          const i = song.regions.findIndex(r => r.id === region.id);
          const j = i + d;
          if (i < 0 || j < 0 || j >= song.regions.length) return;
          const nextSheet = moveSection(song, region.id, d);
          setSong(nextSheet);
          setPickedRegion(region.id);
          const moved = nextSheet.regions.find(r => r.id === region.id);
          if (moved) seekTo(moved.start, 0);
          showToast(`Moved ${partName} ${d < 0 ? 'earlier' : 'later'}`);
        }}
        onDuplicate={() => {
          if (!region) return;
          const { sheet: nextSheet, newRegionId } = duplicateSection(song, region.id);
          setSong(nextSheet);
          setPickedRegion(newRegionId);
          const newReg = nextSheet.regions.find(r => r.id === newRegionId);
          if (newReg) seekTo(newReg.start, 0);
          showToast(`Duplicated ${partName}`);
        }}
        onNewPart={() => {
          if (!region) return;
          const { sheet: nextSheet, newRegionId } = addSensibleSectionAfter(song, region.id);
          setSong(nextSheet);
          setPickedRegion(newRegionId);
          const newReg = nextSheet.regions.find(r => r.id === newRegionId);
          if (newReg) seekTo(newReg.start, 0);
          showToast(`Added ${newReg?.formLabel ?? newReg?.name ?? newReg?.kind}`);
        }}
        onRemove={() => {
          if (!region || song.regions.length <= 1) return;
          const i = song.regions.findIndex(r => r.id === region.id);
          const nextSheet = removeSection(song, region.id);
          const targetIndex = i > 0 ? i - 1 : 0;
          const nextReg = nextSheet.regions[targetIndex] ?? nextSheet.regions[0];
          setSong(nextSheet);
          if (nextReg) {
            setPickedRegion(nextReg.id);
            seekTo(nextReg.start, 0);
          } else {
            setPickedRegion(null);
            seekTo(0, 0);
          }
          showToast(`Deleted ${partName}`);
        }}
        onSilenceAllInSection={() => edit(s => silenceAllVoicesInSection(s, region.id))}
        onPlayAllInSection={() => edit(s => unsilenceAllVoicesInSection(s, region.id))}
        songFeelName={songFeel.name}
        currentWorldId={song.worldId}
        onGenre={handleSelectSectionGenre}
        onEnergy={d => edit(s => setSectionEnergy(s, region.id, d))}
        onChords={prog => edit(s => setSectionChords(s, region.id, prog))}
        onTempoShift={shift => edit(s => setSectionTempoShift(s, region.id, shift))}
        customProgressions={song.customProgressions ?? []}
        onAddCustomChords={(name, chords) => edit(s => {
          const updated = { ...s };
          const newProg = { id: Math.random().toString(36).slice(2), name, chords };
          updated.customProgressions = [...(updated.customProgressions || []), newProg];
          return updated;
        })}
        onUpdateCustomChords={(id, name, chords) => edit(s => {
          const updated = { ...s };
          updated.customProgressions = updated.customProgressions?.map((p: any) => 
            p.id === id ? { ...p, name, chords } : p
          );
          return updated;
        })}
        onDeleteCustomChords={id => edit(s => {
          const updated = { ...s };
          updated.customProgressions = updated.customProgressions?.filter((p: any) => p.id !== id);
          return updated;
        })}
      />

      <ChordSheet
        open={chordOpen}
        onClose={() => setChordOpen(false)}
        region={region}
        currentWorldId={sectionGenreId}
        styleId={song.styleId}
        onChords={prog => edit(s => setSectionChords(s, region.id, prog))}
        customProgressions={song.customProgressions ?? []}
        onAddCustomChords={(name, chords) => edit(s => {
          const updated = { ...s };
          const newProg = { id: Math.random().toString(36).slice(2), name, chords };
          updated.customProgressions = [...(updated.customProgressions || []), newProg];
          return updated;
        })}
        onUpdateCustomChords={(id, name, chords) => edit(s => {
          const updated = { ...s };
          updated.customProgressions = updated.customProgressions?.map((p: any) => 
            p.id === id ? { ...p, name, chords } : p
          );
          return updated;
        })}
        onDeleteCustomChords={id => edit(s => {
          const updated = { ...s };
          updated.customProgressions = updated.customProgressions?.filter((p: any) => p.id !== id);
          return updated;
        })}
      />

      <SectionGenreSheet
        open={sectionGenreOpen}
        onClose={() => setSectionGenreOpen(false)}
        currentGenre={sectionGenreId}
        regionKind={partName}
        onPick={handleSelectSectionGenre}
      />

      <StyleSheetModal
        open={styleOpen}
        onClose={() => setStyleOpen(false)}
        currentGenreId={song.worldId}
        currentStyleId={song.styleId}
        onPickStyle={handleSelectStyle}
      />

      {scoreOpen && <PerformanceInspector song={song} onClose={() => setScoreOpen(false)} />}
      {showDevStyle && (
        <StyleInspector
          song={song}
          onClose={() => setShowDevStyle(false)}
        />
      )}

      <TempoSheet
        open={tempoOpen}
        onClose={() => setTempoOpen(false)}
        baseBpm={song.bpm}
        sectionBpm={region?.bpm}
        songTempoShift={song.tempoShift}
        sectionTempoShift={region?.tempoShift}
        sectionKind={partName}
        onSetSongBpm={bpm => edit(s => setSongBpm(s, bpm))}
        onSetSectionBpm={bpm => region && edit(s => setSectionBpm(s, region.id, bpm))}
        onSetSongTempoShift={shift => edit(s => setSongTempoShift(s, shift))}
        onSetSectionTempoShift={shift => region && edit(s => setSectionTempoShift(s, region.id, shift))}
      />

      <EnergySheet open={energyOpen} onClose={() => setEnergyOpen(false)}
        energy={region.energy ?? 3} sectionKind={partName}
        onPick={energy => edit(s => setSectionEnergy(s, region.id, energy))} />

      <Sheet open={!!roleFor} onClose={() => setRoleFor(null)} title="Instrument role"
        kicker={`${song.tracks.find(t => t.id === roleFor)?.name ?? 'Instrument'} · ${roleScope === 'section' ? `${partName} only` : 'whole song'}`}>
        {roleFor && (
          <RoleSettings
            role={getTrackRole(song, roleFor, region.id)}
            roleScope={roleScope}
            onRoleScope={setRoleScope}
            onRole={(role, scope) => edit(s => setTrackRole(s, roleFor!, region.id, role, scope))}
            silentInPart={roleScope === 'song'
              ? isVoiceSilentInAll(song, roleFor!)
              : isVoiceSilentInSection(song, roleFor!, region.id)}
            onTogglePartSilence={() => edit(s => roleScope === 'song'
              ? isVoiceSilentInAll(s, roleFor!) ? unsilenceVoiceInAll(s, roleFor!) : silenceVoiceInAll(s, roleFor!)
              : isVoiceSilentInSection(s, roleFor!, region.id) ? unsilenceVoiceInSection(s, roleFor!, region.id) : silenceVoiceInSection(s, roleFor!, region.id))}
            solo={roleScope === 'song'
              ? song.regions.length > 0 && song.regions.every(r => r.solo?.trackIds.includes(roleFor!))
              : !!region.solo?.trackIds.includes(roleFor!)}
            soloMode={region.solo?.mode ?? 'genre'}
            soloistCount={region.solo?.trackIds.length ?? 0}
            definition={sectionStyle?.contract.soloDefinition}
            onSolo={() => edit(s => {
              if (roleScope === 'song') {
                const allEnabled = s.regions.length > 0 && s.regions.every(r => r.solo?.trackIds.includes(roleFor!));
                return s.regions.reduce((nextSheet, r) => {
                  const current = nextSheet.regions.find(part => part.id === r.id)?.solo;
                  const ids = current?.trackIds ?? [];
                  const nextIds = allEnabled ? ids.filter(id => id !== roleFor!) : [...new Set([...ids, roleFor!])];
                  return setSectionSolo(nextSheet, r.id, { trackIds: nextIds, mode: current?.mode ?? region.solo?.mode ?? 'genre' });
                }, s);
              }
              const current = s.regions.find(r => r.id === region.id)?.solo;
              const ids = current?.trackIds ?? [];
              const next = ids.includes(roleFor!) ? ids.filter(id => id !== roleFor!) : [...ids, roleFor!];
              return setSectionSolo(s, region.id, { trackIds: next, mode: current?.mode ?? 'genre' });
            })}
            onMode={mode => edit(s => {
              if (roleScope === 'song') {
                return s.regions.reduce((nextSheet, r) => {
                  const current = nextSheet.regions.find(part => part.id === r.id)?.solo;
                  if (!current?.trackIds.includes(roleFor!)) return nextSheet;
                  return setSectionSolo(nextSheet, r.id, { trackIds: current.trackIds, mode });
                }, s);
              }
              const current = s.regions.find(r => r.id === region.id)?.solo;
              return setSectionSolo(s, region.id, { trackIds: current?.trackIds ?? [roleFor!], mode });
            })}
          />
        )}
      </Sheet>

      <InstrumentSheet
        open={!!instrFor} onClose={() => setInstrFor(null)}
        title={song.tracks.find(t => t.id === instrFor)?.name ?? 'Instrument'}
        sectionKind={partName}
        current={(song.tracks.find(t => t.id === instrFor) as Voice | undefined)?.instrumentId}
        isSilentPart={instrFor ? isVoiceSilentInSection(song, instrFor, region.id) : false}
        onSilencePart={() => instrFor && edit(s => silenceVoiceInSection(s, instrFor, region.id))}
        onPlayPart={() => instrFor && edit(s => unsilenceVoiceInSection(s, instrFor, region.id))}
        isSilentAll={instrFor ? isVoiceSilentInAll(song, instrFor) : false}
        onSilenceAll={() => instrFor && edit(s => silenceVoiceInAll(s, instrFor))}
        onPlayAll={() => instrFor && edit(s => unsilenceVoiceInAll(s, instrFor))}
        onPick={id => instrFor && edit(s => setInstrument(s, instrFor, id))}
        onRemove={() => {
          if (instrFor) {
            const instrVoice = song.tracks.find(t => t.id === instrFor);
            edit(s => removeVoice(s, instrFor));
            showToast(`Deleted ${instrVoice?.name ?? 'instrument'}`);
          }
        }}
      />

      <InstrumentSheet
        open={addingVoice} onClose={() => setAddingVoice(false)}
        title="Add an instrument"
        sectionKind={partName}
        onPickWithScope={(id, scope) => edit(s => addVoice(s, id, region.id, scope))}
      />

      <PatternSheet
        open={!!patternFor} onClose={() => setPatternFor(null)}
        voice={patternVoice ?? null} worldId={song.worldId}
        current={patternFor ? arrangementHere[patternFor] : undefined}
        isSilentAll={patternFor ? isVoiceSilentInAll(song, patternFor) : false}
        onSilence={() => patternFor && edit(s => silenceVoiceInSection(s, patternFor, region.id))}
        onSilenceAll={() => patternFor && edit(s => silenceVoiceInAll(s, patternFor))}
        onPick={id => patternFor && edit(s => setPattern(s, patternFor, region.id, id, 'section'))}
        onPickEverywhere={id => patternFor && edit(s => setPattern(s, patternFor, region.id, id, 'song'))}
      />

      <NoteCard
        open={!!note} onClose={() => setNote(null)}
        title={note?.title ?? ''} body={note?.body ?? ''} tags={note?.tags}
      />

      {downloadOpen && (
        <DownloadSheet
          open={downloadOpen}
          onClose={() => setDownloadOpen(false)}
          song={song}
          onExport={(selectedTrackIds, format) => {
            setDownloadOpen(false);
            void handleExport(selectedTrackIds, format);
          }}
        />
      )}
    </div>
  );
}
