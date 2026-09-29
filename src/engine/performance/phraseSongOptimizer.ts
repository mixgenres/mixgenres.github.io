import type { Sheet, Voice } from '../generators/arrange';
import type { ResolvedStyle } from '../../data/styles/schema';
import type { Performance, PerfNote } from '../sequencing/perform';
import { getResolvedSectionStyle, phraseSpanBars } from '../generators/arrange';
import { contractForGenre } from '../../data/styles/contracts';
import { getInstrumentPerformanceProfile, type InstrumentPerformanceProfile } from '../../data/performance/instrumentPerformanceProfiles';
import { GESTURE_CODES, GESTURE_NAMES } from '../compiler/gestureCodes';
import { parseChord } from '../theory/theory';
import { styleCalibrationTarget, type StyleCalibrationTarget } from '../../data/performance/styleCalibrationTargets';
import { styleTechniqueExpectation } from '../../data/performance/stylePerformanceSchema';

export interface PhraseOptimizationReport {
  genre: string;
  styleId?: string;
  phraseBars: number;
  trackReports: Array<{
    trackId: string;
    instrumentId: string;
    role: string;
    phrases: number;
    noteCount: number;
    rootHeavyPhrases: number;
    gestureDiversityBefore: number;
    gestureDiversityAfter: number;
    bassTrimDb?: number;
  }>;
  warnings: string[];
}

function clamp(v: number, lo = 0, hi = 1) { return Math.max(lo, Math.min(hi, v)); }
function dbToLinear(db: number) { return Math.pow(10, db / 20); }

function phraseLengthFor(style: ResolvedStyle, genre: string): number {
  const contract = contractForGenre(genre, style);
  const cycle = Math.max(1, Number(contract.cycleLength ?? 1));
  const authored = (style?.melody?.phraseLengthsBars ?? []).map((x: number) => Math.round(Number(x))).filter((x: number) => Number.isFinite(x) && x > 0);
  const compatible = authored.filter((x: number) => x % cycle === 0);
  return compatible[0] ?? phraseSpanBars(cycle);
}

function preferredGestureSet(profile: InstrumentPerformanceProfile, genre: string): string[] {
  const gp = profile.genreProfiles[genre] ?? profile.genreProfiles[Object.keys(profile.genreProfiles)[0] ?? ''];
  const ids = gp?.preferredGestures ?? [];
  return Array.from(new Set(ids.filter(id => Boolean(profile.gestures[id]))));
}

function chordTonePcs(chord: string): number[] {
  const c = parseChord(chord);
  const root = c.rootPc ?? 0;
  const intervals = c.intervals?.length ? c.intervals : [0, 4, 7];
  return Array.from(new Set(intervals.map((n: number) => (root + n + 120) % 12)));
}

function phrasePosition(n: PerfNote, phraseStart: number, phraseEnd: number): number {
  return clamp(((n.bar - phraseStart) + 0.5) / Math.max(1, phraseEnd - phraseStart));
}

function rootRatio(notes: PerfNote[], sheet: Sheet): number {
  let roots = 0, tonal = 0;
  for (const n of notes) { const chord = sheet.measures[n.bar]?.chord; if (!chord) continue; tonal++; if ((n.midi % 12 + 12) % 12 === (parseChord(chord).rootPc ?? 0)) roots++; }
  return tonal ? roots / tonal : 0;
}

function nearestNonRootChordTone(midi: number, pcs: number[], rootPc: number): number {
  const candidates: number[] = [];
  for (let d = -12; d <= 12; d++) { const x = midi + d; const pc = (x % 12 + 12) % 12; if (pcs.includes(pc) && pc !== rootPc) candidates.push(x); }
  candidates.sort((a, b) => Math.abs(a - midi) - Math.abs(b - midi));
  return candidates[0] ?? midi;
}

function phraseTechniqueBudget(role: string, family: string, genre: string, notes: PerfNote[]): number {
  if (notes.length < 5) return 0;
  if (/percussion|drum/.test(role)) return 0.22;
  if (/bass/.test(role)) return /tango|flamenco|jazz|blues|salsa|timba/.test(genre) ? 0.16 : 0.10;
  if (family === 'bellows' || family === 'bowed-string') return /tango|jazz|folk|flamenco|salsa/.test(genre) ? 0.28 : 0.16;
  if (/lead|melody|voice/.test(role)) return 0.24;
  return 0.18;
}

function optimizePhrase(notes: PerfNote[], sheet: Sheet, track: Voice, profile: InstrumentPerformanceProfile, genre: string, style: ResolvedStyle, target: StyleCalibrationTarget, phraseStart: number, phraseEnd: number) {
  if (!notes.length) return { rootHeavy: false, beforeGestures: new Set<string>(), afterGestures: new Set<string>() };
  const beforeGestures = new Set(notes.map(n => GESTURE_NAMES[n.gestureCode] ?? String(n.gestureCode)));
  const role = String(track.role ?? profile.genreProfiles[genre]?.roles?.[0] ?? 'harmony').toLowerCase();
  const prefs = preferredGestureSet(profile, genre);
  const rootShare = rootRatio(notes, sheet);
  const rootHeavy = /bass|comp|harmony/.test(role) && notes.length >= 4 && rootShare > target.maxBassRootRatio;
  const family = profile.family;
  const density = Math.max(0.45, Math.min(1.0, notes.length / Math.max(4, (phraseEnd - phraseStart) * 2)));
  const desiredTechniqueCount = Math.max(0, Math.floor(notes.length * Math.max(target.techniqueLandmarkRatio, phraseTechniqueBudget(role, family, genre, notes))));

  // One phrase-level dynamic sentence: establish -> develop -> cadence.
  for (let i = 0; i < notes.length; i++) {
    const n = notes[i], pos = phrasePosition(n, phraseStart, phraseEnd);
    const arc = 1 - target.phraseDynamicRange * 0.5 + target.phraseDynamicRange * Math.sin(Math.PI * pos);
    const roleGain = /bass/.test(role) ? 0.96 : /comp|harmony/.test(role) ? 0.98 : /lead|melody|voice/.test(role) ? 1.01 : 1;
    n.vel = Math.max(1, Math.min(127, Math.round(n.vel * arc * (pos > 0.82 ? 0.98 : 1) * roleGain)));
    if (/bass/.test(role) && n.midi < profile.capabilities.comfortableLowMidi && n.hitFunctionCode !== 0) n.vel = Math.max(1, Math.round(n.vel * 0.88));

    // Harmony: selected inner attacks become 3rds/5ths/7ths instead of repeating roots.
    if (rootHeavy && /comp|harmony/.test(role) && pos > 0.12 && pos < 0.86 && i % 3 === 1) {
      const chord = sheet.measures[n.bar]?.chord, parsed = chord ? parseChord(chord) : undefined;
      if (parsed) { const candidate = nearestNonRootChordTone(n.midi, chordTonePcs(chord!), parsed.rootPc ?? 0); if (candidate !== n.midi && Math.abs(candidate - n.midi) <= 5) n.midi = candidate; }
    }
    // Bass: structural roots remain roots; inner attacks can outline the harmony.
    if (/bass/.test(role) && rootShare > 0.78 && pos > 0.16 && pos < 0.82 && i % 4 === 2) {
      const chord = sheet.measures[n.bar]?.chord, parsed = chord ? parseChord(chord) : undefined;
      if (parsed) { const candidate = nearestNonRootChordTone(n.midi, chordTonePcs(chord!), parsed.rootPc ?? 0); if (candidate !== n.midi && Math.abs(candidate - n.midi) <= 7) n.midi = candidate; }
    }
  }

  const styleTechnique = styleTechniqueExpectation(style, profile, role);
  const techniquePool = Array.from(new Set([...(styleTechnique.required ?? []), ...prefs]))
    .filter(id => profile.gestures[id] && !styleTechnique.forbidden.includes(id));
  if (techniquePool.length && desiredTechniqueCount) {
    const landmarks = Array.from(new Set([0, Math.floor(notes.length * 0.22), Math.floor(notes.length * 0.48), Math.floor(notes.length * 0.72), Math.max(0, notes.length - 1)]))
      .filter(i => i >= 0 && i < notes.length);
    const count = Math.min(desiredTechniqueCount, landmarks.length);
    for (let k = 0; k < count; k++) {
      const desired = techniquePool[(k + Math.floor((phraseEnd - phraseStart) / 2)) % techniquePool.length];
      if (desired) notes[landmarks[k]].gestureCode = GESTURE_CODES[desired] ?? notes[landmarks[k]].gestureCode;
    }
  }

  if (density > 0.82 && /comp|harmony/.test(role)) {
    for (const n of notes) { const pos = phrasePosition(n, phraseStart, phraseEnd); if (pos > 0.38 && pos < 0.62 && n.hitFunctionCode !== 0) n.vel = Math.max(1, Math.round(n.vel * 0.94)); }
  }
  const afterGestures = new Set(notes.map(n => GESTURE_NAMES[n.gestureCode] ?? String(n.gestureCode)));
  return { rootHeavy, beforeGestures, afterGestures };
}

export function optimizePerformanceByPhraseAndSong(sheet: Sheet, perf: Performance): { performance: Performance; report: PhraseOptimizationReport } {
  const notes = perf.notes.map(n => ({ ...n }));
  const warnings: string[] = [];
  const trackReports: PhraseOptimizationReport['trackReports'] = [];

  for (const region of sheet.regions) {
    const style = getResolvedSectionStyle(sheet, region);
    const genre = region.genre ?? sheet.worldId;
    const target = styleCalibrationTarget(genre, style?.id, style);
    const phraseBars = phraseLengthFor(style, genre);
    const regionNotes = notes.filter(n => n.bar >= region.start && n.bar < region.end);
    for (const track of sheet.tracks as Voice[]) {
      const profile = getInstrumentPerformanceProfile(track.instrumentId);
      const trackNotes = regionNotes.filter(n => n.trackId === track.id);
      if (!trackNotes.length) continue;
      let rootHeavyPhrases = 0;
      const before = new Set<string>();
      const after = new Set<string>();
      let phrases = 0;
      for (let start = region.start; start < region.end; start += phraseBars) {
        const end = Math.min(region.end, start + phraseBars);
        const phrase = trackNotes.filter(n => n.bar >= start && n.bar < end);
        if (!phrase.length) continue;
        phrases++;
        const result = optimizePhrase(phrase, sheet, track, profile, genre, style, target, start, end);
        if (result.rootHeavy) rootHeavyPhrases++;
        result.beforeGestures.forEach(x => before.add(x));
        result.afterGestures.forEach(x => after.add(x));
      }

      const role = String(track.role ?? profile.genreProfiles[genre]?.roles?.[0] ?? 'harmony').toLowerCase();
      const scopeWarnings: string[] = [];
      if (track.role && !profile.genreProfiles[genre]?.roles?.some(r => r === track.role || r === role)) scopeWarnings.push('track role is outside instrument genre scope');
      const outOfRange = trackNotes.filter(n => n.midi < profile.capabilities.lowMidi || n.midi > profile.capabilities.highMidi).length;
      if (outOfRange) scopeWarnings.push(`${outOfRange} notes outside authored instrument range`);
      if (profile.capabilities.polyphony < 2 && trackNotes.some(n => n.dur > 0.15)) scopeWarnings.push('monophonic physical model is receiving sustained overlap candidates');
      if (scopeWarnings.length) warnings.push(`${target.styleId}:${track.instrumentId}: ${scopeWarnings.join('; ')}`);
      let bassTrimDb: number | undefined;
      if (/bass/.test(role)) {
        const mc = contractForGenre(genre, style).timbreSpace.mixCharacter;
        const forward = mc?.bassForward ?? 0.5;
        const density = trackNotes.length / Math.max(1, (region.end - region.start) * 4);
        const densityTrim = density > 0.42 ? Math.min(2.5, (density - 0.42) * 8) : 0;
        bassTrimDb = target.bassTrimDb - densityTrim + (forward > 0.80 ? 0.75 : 0);
      }
      if (bassTrimDb) {
        const g = dbToLinear(bassTrimDb);
        for (const n of trackNotes) n.vel = Math.max(1, Math.min(127, Math.round(n.vel * g)));
      }

      trackReports.push({
        trackId: track.id,
        instrumentId: track.instrumentId,
        role,
        phrases,
        noteCount: trackNotes.length,
        rootHeavyPhrases,
        gestureDiversityBefore: before.size,
        gestureDiversityAfter: after.size,
        bassTrimDb,
      });
    }
  }

  // Song-level role balance: correct persistent lane imbalance after phrase shaping.
  const laneStats = new Map<string, { sum: number; count: number; role: string }>();
  for (const n of notes) { const info = perf.trackInfo?.[n.trackId]; const x = laneStats.get(n.trackId) ?? { sum: 0, count: 0, role: String(info?.role ?? '') }; x.sum += n.vel * n.vel; x.count++; laneStats.set(n.trackId, x); }
  const laneRms = Array.from(laneStats.entries()).map(([id, x]) => ({ id, value: Math.sqrt(x.sum / Math.max(1, x.count)), role: x.role }));
  const ensembleMedian = laneRms.length ? [...laneRms].sort((a,b)=>a.value-b.value)[Math.floor(laneRms.length/2)].value : 0;
  if (ensembleMedian > 0) {
    for (const lane of laneRms) {
      let target = 1;
      if (/bass/.test(lane.role) && lane.value > ensembleMedian * 1.05) target = 0.86;
      else if (/lead|melody|voice/.test(lane.role) && lane.value < ensembleMedian * 0.86) target = 1.06;
      else if (/comp|harmony/.test(lane.role) && lane.value > ensembleMedian * 1.20) target = 0.93;
      if (target !== 1) for (const n of notes) if (n.trackId === lane.id) n.vel = Math.max(1, Math.min(127, Math.round(n.vel * target)));
    }
  }

  // Song-level headroom pass. The loudest phrase in the song establishes a soft
  // ceiling; the whole ensemble is gently backed off if necessary instead of
  // allowing a single dense section to determine master loudness.
  const peakVelocity = notes.reduce((m, n) => Math.max(m, n.vel), 0);
  if (peakVelocity > 122) {
    const factor = 122 / peakVelocity;
    for (const n of notes) n.vel = Math.max(1, Math.round(n.vel * factor));
    warnings.push(`song-headroom: reduced peak velocity ${peakVelocity} -> 122`);
  }

  return {
    performance: { ...perf, notes },
    report: {
      genre: sheet.worldId,
      styleId: sheet.styleId,
      phraseBars: Math.max(...sheet.regions.map(r => phraseLengthFor(getResolvedSectionStyle(sheet, r), r.genre ?? sheet.worldId))),
      trackReports,
      warnings,
    },
  };
}
