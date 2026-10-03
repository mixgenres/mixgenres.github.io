import type { Sheet } from '../sheet/sheet';
import { getResolvedSectionStyle } from '../sheet/sheet';
import { beatsPerBarOf, type NativeSlice } from '../sheet/grid';
import type { PatternEvent } from '../../data/schema';
import { PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { GENRE_NOTATION_RULES, INSTRUMENT_NOTATION_RULES, type NotationRules } from '../../data/notation/rules';
import type { HitFunction } from '../../data/performance/hitFunctions';
import { notatedHit } from './rhythmicNotation';
import { beatFraction, beatValue, type BeatFraction } from './musicianScore';
import { resolveNotatedDrum, notatedDrum, type NotatedDrum } from './percussionNotation';
import { LRUMap, registerCache } from '../cache/lru';
import { contentKey } from '../cache/contentKey';

export type WrittenPitch = { kind: 'notes'; value: NonNullable<PatternEvent['pitch']> }
  | { kind: 'drum'; drum: NotatedDrum }
  | { kind: 'instruction'; instruction: 'improvise' | 'voice-chord' | 'bass-motion'; role: string };
export interface WrittenAttack {
  position: BeatFraction; duration: BeatFraction; pitch: WrittenPitch;
  velocity: number; accent: number; hit: HitFunction; sourceHit?: string;
  technique?: string; microtiming: { value: number; unit: 'milliseconds' | 'grid' }; durationAuthored: boolean;
  notation?: PatternEvent['notation'];
}
export interface WrittenBar { bar: number; patternId: string; patternName: string; variation?: string; attacks: WrittenAttack[]; rests: Array<{ position: BeatFraction; duration: BeatFraction }> }
export interface NotationCell {
  key: string; trackId: string; sectionId: string; instrumentId: string; role: string; rules: NotationRules;
  bars: WrittenBar[]; openStrings?: Array<{ name: string; midi: number }>;
}
/** Compact first-pass score: written pitches or explicit lead-sheet/improv
 * instructions. It contains no Hz, physical model controls or mix decisions. */
export interface NotatedScore {
  version: 1; title: string; meter: string; worldId: string;
  sections: Array<{ id: string; genre: string; styleId: string; start: number; end: number; cycleBars: number; chords: string[]; cells: Record<string, NotationCell> }>;
}
const cells = new LRUMap<string, NotationCell>(2048, 'notationSections'); registerCache(cells);

export function compileNotatedScore(sheet: Sheet): NotatedScore {
  const beats = beatsPerBarOf(sheet.timeSignature);
  return { version: 1, title: sheet.title, meter: sheet.timeSignature, worldId: sheet.worldId,
    sections: sheet.regions.map(region => {
      const style = getResolvedSectionStyle(sheet, region), genre = region.genre ?? sheet.worldId;
      const section: NotatedScore['sections'][number] = { id: region.id, genre, styleId: style.id, start: region.start, end: region.end,
        cycleBars: style.contract.cycleLength, chords: sheet.measures.slice(region.start, region.end).map(m => m.chord), cells: {} };
      for (const track of sheet.tracks) {
        const role = sheet.partRoles?.[region.id]?.[track.id] ?? track.role;
        const def = INSTRUMENTS_BY_ID[track.instrumentId ?? track.instrument], percussion = Boolean(def?.voicing === 'unpitched' || def?.kit || def?.drum);
        const rules: NotationRules = { clef: percussion ? 'percussion' : /bass|low-anchor/.test(role) ? 'bass' : 'treble',
          staffLines: percussion && !def?.kit ? 1 : 5, views: percussion ? ['staff', 'drum-lanes', 'technique'] : def?.tuningAndMechanics?.openStrings?.length ? ['staff','tablature','technique'] : ['staff','technique'], vocabulary: [],
          ...GENRE_NOTATION_RULES[genre], ...INSTRUMENT_NOTATION_RULES[def?.id], ...(percussion ? { views: ['staff','drum-lanes','technique'] as NotationRules['views'] } : {}), ...def?.notationRules };
        const measures = sheet.measures.slice(region.start, region.end).map(m => ({ pattern: m.patternByTrack?.[track.id], detail: m.patternDetailsByTrack?.[track.id] }));
        const key = contentKey(['notation-v1', track.id, region.id, def?.id, role, beats, rules, measures]);
        let cell = cells.get(key);
        if (!cell) {
          const bars = measures.map(({ pattern: selected, detail }, bar): WrittenBar => {
            const patternId = selected ?? detail?.patternId ?? 'silent', pattern = PATTERNS_BY_ID[patternId];
            const native = detail?.perf as NativeSlice | undefined;
            const onsets = patternId === 'silent' ? [] : native?.onsets ?? detail?.onsetGrid ?? [];
            const steps = native?.stepsPerBar ?? 16;
            const attacks = onsets.map((onset, index): WrittenAttack => {
              const position = (native?.fractionalPositions?.[index] ?? onset / steps) * beats + (pattern?.anticipationOffset ?? 0) / steps * beats;
              const sourceHit = native?.hitTypes?.[index] || detail?.hitTypes?.[index] || pattern?.hitGrid?.[index]
                || (pattern?.instruments?.includes('drums') || pattern?.family?.toLowerCase().includes('drum') ? `${pattern.id} ${pattern.name}` : undefined);
              const hit = notatedHit(pattern, index, native?.hitTypes?.[index] || detail?.hitTypes?.[index]);
              let value = native?.pitches?.[index];
              const directions = native?.notations?.[index];
              if (directions?.string !== undefined && (!Number.isInteger(directions.string) || directions.string < 1)) throw new Error('Invalid written string number');
              if (directions?.fret !== undefined && (!Number.isInteger(directions.fret) || directions.fret < 0)) throw new Error('Invalid written fret');
              if (directions?.string && directions.fret !== undefined) {
                const string = rules.openStrings?.[directions.string-1];
                if (!string) throw new Error(`No authored tuning for ${def.id} string ${directions.string}`);
                const midi = string.midi + directions.fret;
                if (value?.midi !== undefined && (Array.isArray(value.midi) ? value.midi.length !== 1 || value.midi[0] !== midi : value.midi !== midi)) throw new Error('Written pitch disagrees with string/fret notation');
                value = { ...value, midi };
              }
              const pitch: WrittenPitch = percussion ? { kind: 'drum', drum: value?.midi !== undefined
                ? notatedDrum(def.id, Array.isArray(value.midi) ? value.midi[0] : value.midi) : resolveNotatedDrum(def.id, sourceHit, hit, index) }
                : value ? { kind: 'notes', value } : { kind: 'instruction', instruction: /bass|low-anchor/.test(role) ? 'bass-motion' : /lead|melody|counterline|voice/.test(role) ? 'improvise' : 'voice-chord', role };
              return { position: beatFraction(position), duration: beatFraction((native?.durations?.[index] ?? detail?.durationGrid?.[index] ?? 1) / steps * beats), pitch,
                velocity: native?.velocities?.[index] ?? pattern?.velocityProfile?.[index] ?? .72, accent: native?.accents?.[index] ?? detail?.accentProfile?.[index] ?? .72,
                hit, sourceHit, technique: native?.articulations?.[index] || detail?.articulations?.[index] || detail?.articulation,
                microtiming: { value: native?.microtiming?.[index] ?? 0, unit: Math.abs(native?.microtiming?.[index] ?? 0) > .5 ? 'milliseconds' : 'grid' }, durationAuthored: native?.durationsAuthored ?? Boolean(detail?.durationGrid), notation: directions };
            });
            return { bar, patternId, patternName: pattern?.name ?? 'Silent', variation: detail?.variationType, attacks, rests: [] };
          });
          // Rest coverage includes notes sustained from earlier measures.
          const spans = bars.flatMap(b => b.attacks.map(a => ({ start: b.bar * beats + beatValue(a.position), end: b.bar * beats + beatValue(a.position) + beatValue(a.duration) }))).sort((a,b) => a.start-b.start);
          for (const bar of bars) {
            const start = bar.bar * beats, end = start + beats; let cursor = start;
            for (const span of spans) {
              if (span.end <= cursor || span.start >= end) continue;
              if (span.start > cursor) bar.rests.push({ position: beatFraction(cursor-start), duration: beatFraction(span.start-cursor) });
              cursor = Math.max(cursor, Math.min(end, span.end));
            }
            if (cursor < end) bar.rests.push({ position: beatFraction(cursor-start), duration: beatFraction(end-cursor) });
          }
          cell = { key, trackId: track.id, sectionId: region.id, instrumentId: def?.id ?? track.instrument, role, rules, bars,
            openStrings: rules.openStrings ?? def?.tuningAndMechanics?.openStrings?.map(s => ({ name: s.name, midi: s.midi })) };
          cells.set(key, cell);
        }
        section.cells[track.id] = cell;
      }
      return section;
    }) };
}
