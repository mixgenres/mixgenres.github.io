// Static mix schema: resolves every mix value the renderer applies (pan, makeup gain, role/genre/instrument dB,
// track volume -> effective gain), straight from the same data modules and functions the engine uses, WITHOUT
// rendering audio. Used by reports/style-levels.ts. Optional input: audit/mix-schemas/instrument-levels.json.
import { existsSync, readFileSync } from 'node:fs';
import { INSTRUMENTS_BY_ID } from '../../src/data/instruments/index.ts';
import { instrumentHasKey, ENGINE_INSTRUMENT_KEYS } from '../../src/engine/lookup/instrumentKeys.ts';
import { PAN_MAP } from '../../src/data/sound/mix/panMap.ts';
import { ROLE_DB_PROFILES } from '../../src/data/sound/mix/roleProfiles.ts';
import { GENRE_MIX_OFFSETS } from '../../src/data/sound/mix/genreMixOffsets.ts';
import { INSTRUMENT_MIX_TRIMS, ELECTRONIC_MIX_GENRE_PATTERN } from '../../src/data/sound/mix/instrumentTrims.ts';
import { StereoFieldManager } from '../../src/engine/studio/panning.ts';
import { getRoleGainLinear } from '../../src/engine/studio/mixer.ts';
import { makeupGainFor, modelForInstrument, determineBusCategory } from '../../src/engine/playback/elementaryEngine.ts';
import { resolveRenderGesture } from '../../src/engine/playback/renderGesture.ts';
import { resolveInstrumentKitComponent } from '../../src/engine/lookup/instrument-components.ts';
import { resolveStyle } from '../../src/engine/style/index.ts';
import { contractForGenre, type MixCharacter } from '../../src/engine/style/contracts.ts';
import type { Sheet } from '../../src/engine/sheet/sheet.ts';
import type { Performance, PerfNote } from '../../src/engine/band/performanceData.ts';

/** Thresholds used only for the `flags` field; every raw value is reported regardless. */
export const MIX_FLAG_THRESHOLDS = {
  /** |sum of (normalizedPan - 0.5)| across tracks that have notes; 0 = layout is symmetric. */
  netPanOffset: 0.15,
};

const stereo = new StereoFieldManager();
/** Intrinsic per-instrument level at unit volume, from scripts/measure-instrument-levels.ts. */
const LEVELS_PATH = 'audit/mix-schemas/instrument-levels.json';
const INSTRUMENT_LEVELS: Record<string, { rms?: number; rmsDb?: number | null }> = existsSync(LEVELS_PATH) ? JSON.parse(readFileSync(LEVELS_PATH, 'utf8')) : {};
const round = (n: number, d = 4) => Number.isFinite(n) ? Number(n.toFixed(d)) : n;
const db = (lin: number) => lin > 0 ? 20 * Math.log10(lin) : -Infinity;
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));


interface MixTrack {
  id:string; instrumentId:string; sheetRole:string; instrumentRole:string; busCategory:string;
  pan:{panMapKey:string|null;panMapValue:number;trackOverride:number|null;normalized:number;kitComponentPans:Array<{id:string;midi:number;defaultPan:number}>;effectiveMin:number|null;effectiveMax:number|null;effectiveMean:number|null;meanLeftGain:number;meanRightGain:number};
  gain:{elementaryModel:number;effectiveModelForGain:number;isElectronic:boolean;makeupGain:number;roleBaseDb:number;genreOffsetDb:number;instrumentTrimDb:number;roleGainLinear:number;trackVolume:number;effectiveGainLinear:number;effectiveGainDb:number;meanHitGainMultiplier:number};
  referenceLevel:{rmsDb:number|null};
  performance:{noteCount:number;notesPerSecond:number;velocityMean:number;velocityP95:number|null;velocityMax:number|null;maxConcurrentNotes:number;instrumentPolyphony:number|null};
}
interface MixDescription { mixSchemaVersion:number; worldId:string; styleId:string; mixCharacter:MixCharacter|null; masterProfile:{pocket:number;lift:number}; tracks:MixTrack[]; summary:{panLayout:{left:string[];center:string[];right:string[];netPanOffset:number};flags:string[];thresholds:typeof MIX_FLAG_THRESHOLDS}; }

/** Mirrors StereoFieldManager.resolveInstrumentPan but also reports which PAN_MAP key matched. */
function panMatch(instrumentId: string): { key: string | null; pan: number } {
  const lower = (instrumentId || '').toLowerCase();
  for (const [k, v] of Object.entries(PAN_MAP)) if (lower.includes(k)) return { key: k, pan: v };
  return { key: null, pan: PAN_MAP[instrumentId] || 0 };
}

export function describeMix(sheet: Sheet, perf: Performance): MixDescription {
  const worldId: string = sheet.worldId;
  const genre = worldId || 'default';
  const resolvedStyle = sheet.styleId ? resolveStyle({ genreId: worldId, styleId: sheet.styleId }) : undefined;
  const mixCharacter = contractForGenre(worldId, resolvedStyle)?.timbreSpace?.mixCharacter;

  const tracks = sheet.tracks.map((track: Sheet['tracks'][number]) => {
    const instrumentId: string = track.instrumentId ?? track.id;
    const def = INSTRUMENTS_BY_ID[instrumentId];
    const notes = perf.notes.filter((n: PerfNote) => n.trackId === track.id);

    // --- pan (matches elementaryEngine.defaultTrackParams + renderTrack) ---
    const matched = panMatch(instrumentId);
    const resolvedPan = stereo.resolveInstrumentPan(instrumentId);
    if (round(matched.pan) !== round(resolvedPan)) throw new Error(`${instrumentId}: pan mirror diverged from StereoFieldManager`);
    const basePanNorm = track.pan ?? stereo.resolveInstrumentPanNormalized(instrumentId);
    let sumL2 = 0, sumR2 = 0, minPan = 1, maxPan = 0, panSum = 0;
    for (const n of notes) {
      const componentPan = resolveInstrumentKitComponent(instrumentId, n.midi)?.defaultPan ?? 0;
      const p = clamp01(basePanNorm + componentPan);
      sumL2 += Math.cos(p * Math.PI * 0.5) ** 2;
      sumR2 += Math.sin(p * Math.PI * 0.5) ** 2;
      minPan = Math.min(minPan, p); maxPan = Math.max(maxPan, p); panSum += p;
    }
    const n = Math.max(1, notes.length);
    const meanL2 = sumL2 / n, meanR2 = sumR2 / n;

    // --- gain chain: makeupGain * roleGain * trackVolume (mp3Export.ts) ---
    const model = def?.elementaryModel ?? modelForInstrument(instrumentId);
    const isElectronic = def?.family === 'electronic' || def?.elementaryModel === 9 || instrumentHasKey(instrumentId, ENGINE_INSTRUMENT_KEYS.electronic);
    const effectiveModel = isElectronic ? 9 : model;
    const makeup = def?.makeupGain ?? makeupGainFor(effectiveModel, instrumentId);
    const instrumentRole = def?.acousticProfile?.role || 'comp';
    const roleKey = instrumentRole.toLowerCase();
    const roleBaseDb = ROLE_DB_PROFILES[roleKey] ?? -3.0;
    const genreOffsetDb = (GENRE_MIX_OFFSETS[genre.toLowerCase()] || {})[roleKey] ?? 0;
    const trim = INSTRUMENT_MIX_TRIMS[instrumentId.toLowerCase()];
    const trimDb = trim?.electronic !== undefined
      ? (ELECTRONIC_MIX_GENRE_PATTERN.test(genre.toLowerCase()) ? trim.electronic : trim.acoustic ?? 0)
      : trim?.acoustic ?? 0;
    const roleGain = getRoleGainLinear(instrumentRole, genre, instrumentId);
    const trackVolume = track.volume ?? 1; // App.tsx passes t.volume ?? 1 as mixState.volume
    const effectiveGain = Math.max(0, Math.min(35, makeup * roleGain * trackVolume));

    // --- reference level (informational only) ---
    const ref = INSTRUMENT_LEVELS[instrumentId];

    // --- performance statistics ---
    const vels = notes.map(x => x.vel).sort((a: number, b: number) => a - b);
    const hitGain = notes.length ? notes.reduce((s: number, x) => s + resolveRenderGesture(instrumentId, x.gestureCode).gainMultiplier, 0) / notes.length : 0;
    const edges: Array<[number, number]> = [];
    for (const x of notes) { edges.push([x.time, 1]); edges.push([x.time + x.dur, -1]); }
    edges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let cur = 0, maxConcurrent = 0;
    for (const [, d] of edges) { cur += d; maxConcurrent = Math.max(maxConcurrent, cur); }

    return {
      id: track.id,
      instrumentId,
      sheetRole: track.role,
      instrumentRole,
      busCategory: determineBusCategory(def?.acousticProfile?.role, def?.id || track.id),
      pan: {
        panMapKey: matched.key,
        panMapValue: round(matched.pan),
        trackOverride: track.pan ?? null,
        normalized: round(basePanNorm),
        kitComponentPans: (def?.kitComponents ?? []).filter((c) => c.defaultPan).map(c => ({ id: c.id, midi: c.midi, defaultPan: c.defaultPan ?? 0 })),
        effectiveMin: notes.length ? round(minPan) : null,
        effectiveMax: notes.length ? round(maxPan) : null,
        effectiveMean: notes.length ? round(panSum / n) : null,
        meanLeftGain: round(Math.sqrt(meanL2)),
        meanRightGain: round(Math.sqrt(meanR2)),
      },
      gain: {
        elementaryModel: model,
        effectiveModelForGain: effectiveModel,
        isElectronic,
        makeupGain: round(makeup),
        roleBaseDb, genreOffsetDb, instrumentTrimDb: trimDb,
        roleGainLinear: round(roleGain),
        trackVolume: round(trackVolume),
        effectiveGainLinear: round(effectiveGain),
        effectiveGainDb: round(db(effectiveGain), 2),
        meanHitGainMultiplier: round(hitGain),
      },
      // Single reference note at unit volume. NOT a predictor of in-song level:
      // checked against isolated renders it was off by 12-16 dB for chordal
      // instruments (piano, guitar). Use rendered stem levels for loudness.
      referenceLevel: { rmsDb: ref?.rmsDb ?? null },
      performance: {
        noteCount: notes.length,
        notesPerSecond: round(notes.length / Math.max(1, perf.duration), 3),
        velocityMean: round(notes.length ? vels.reduce((s: number, v: number) => s + v, 0) / notes.length : 0, 2),
        velocityP95: vels.length ? vels[Math.floor(vels.length * 0.95)] : null,
        velocityMax: vels.length ? vels[vels.length - 1] : null,
        maxConcurrentNotes: maxConcurrent,
        instrumentPolyphony: def?.polyphony ?? null,
      },
    };
  });

  // Pan layout from authored values only (exact, gain-independent).
  const withNotes = tracks.filter(t => t.performance.noteCount > 0);
  const netPanOffset = withNotes.reduce((a: number, t) => a + (t.pan.normalized - 0.5), 0);
  const panLayout = {
    left: withNotes.filter(t => t.pan.normalized < 0.45).map(t => t.instrumentId),
    center: withNotes.filter(t => t.pan.normalized >= 0.45 && t.pan.normalized <= 0.55).map(t => t.instrumentId),
    right: withNotes.filter(t => t.pan.normalized > 0.55).map(t => t.instrumentId),
    netPanOffset: round(netPanOffset, 3),
  };

  const flags: string[] = [];
  if (Math.abs(netPanOffset) > MIX_FLAG_THRESHOLDS.netPanOffset) flags.push(`pan-layout-skewed:${netPanOffset < 0 ? 'left' : 'right'}:${round(netPanOffset, 2)}`);
  for (const t of tracks) {
    if (t.performance.noteCount === 0) flags.push(`silent-track:${t.id}:${t.instrumentId}`);
    if (t.gain.effectiveGainLinear >= 35) flags.push(`gain-at-clamp:${t.id}:${t.instrumentId}`);
  }

  return {
    mixSchemaVersion: 1,
    worldId, styleId: sheet.styleId ?? '',
    mixCharacter: mixCharacter ?? null,
    masterProfile: { pocket: resolvedStyle?.sound.masterProfile?.pocket ?? 0.5, lift: resolvedStyle?.sound.masterProfile?.lift ?? 0.5 },
    tracks,
    summary: {
      panLayout,
      flags,
      thresholds: MIX_FLAG_THRESHOLDS,
    },
  };
}
