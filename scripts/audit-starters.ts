import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { ALL_STYLES, resolveStyle } from '../src/engine/style';
import { GENRE_WORLDS_BY_ID, PATTERNS_BY_ID } from '../src/data/genres';
import { INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../src/engine/lookup/instruments';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { reportMetadata, writeReport, printFindings, type Finding } from './lib/auditReport';

const findings: Finding[] = [], cases: Record<string, unknown>[] = [];
const check = (ok: unknown, code: string, scope: string, message: string) => {
  if (!ok) findings.push({ severity: 'error', code, scope, message });
};
const placeholder = /style-specific|style-defined|style-appropriate|pitch vocabulary|pulse cell|phrase shaping/;
for (const style of ALL_STYLES) {
  try {
    const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
    const seed = GENRE_WORLDS_BY_ID[style.primaryGenre].styleDefinitions.find(s => s.id === style.id)!;
    check(!placeholder.test(JSON.stringify(seed.calibration)), 'placeholder', style.id, 'Musical calibration contains placeholder vocabulary');
    const sheet = makeSheet(style.primaryGenre, style.id), performance = compileWholeSong(sheet);
    check(performance.notes.length > 0, 'empty-song', style.id, 'Starter produces no notes');
    check(sheet.bpm >= resolved.rhythm.tempoRange[0] && sheet.bpm <= resolved.rhythm.tempoRange[1], 'tempo', style.id, 'Starter tempo exceeds authored range');
    check(sheet.timeSignature === resolved.rhythm.meter, 'meter', style.id, 'Starter lost its meter');
    const expected = resolved.arrangement.ensemble.flatMap(part => part.instrumentIds.map(instrument => `${part.role}/${instrument}`));
    check(JSON.stringify(sheet.tracks.map(t => `${t.role}/${t.instrumentId}`)) === JSON.stringify(expected), 'personnel', style.id, 'Starter lost an authored instrument role');
    const active = new Set(performance.notes.map(n => n.trackId));
    for (const track of sheet.tracks) {
      const scope = `${style.id}/${track.id}/${track.instrumentId}`;
      check(INSTRUMENTS_BY_ID[track.instrumentId!], 'instrument', scope, 'Unresolved physical instrument');
      check(active.has(track.id), 'silent-part', scope, 'Authored instrument never plays');
      check(genreTechniquesForInstrument(track.instrumentId!, style.id).length, 'techniques', scope, 'No physically feasible technique in style vocabulary');
      const sound = resolveTrackSound(track.instrumentId!, style.primaryGenre, style.id, track.role);
      check(Number.isFinite(sound.roleGain), 'sound-gain', scope, 'Invalid resolved sound gain');
      check(Number.isFinite(track.volume) && track.volume > 0 && track.volume <= 1, 'track-level', scope, 'Invalid starter track level');
    }
    for (const [regionId, parts] of Object.entries(sheet.arrangement)) {
      for (const [trackId, patternId] of Object.entries(parts)) {
        if (patternId === 'silent') continue;
        const pattern = PATTERNS_BY_ID[patternId], track = sheet.tracks.find(t => t.id === trackId)!;
        check(pattern?.worldId === style.primaryGenre && pattern?.styleIds?.includes(style.id), 'ownership', `${style.id}/${regionId}/${trackId}`, 'Starter borrowed an unowned pattern');
        check(pattern?.roles.includes(track.role), 'pattern-role', `${style.id}/${trackId}`, 'Pattern does not support assigned role');
      }
    }
    check(performance.notes.every(n => Number.isFinite(n.midi) && Number.isFinite(n.vel) && Number.isFinite(n.time) && n.dur > 0), 'notes', style.id, 'Invalid compiled notes');
    const solos = sheet.regions.filter(r => r.solo);
    if ((cases.length + 1) % 25 === 0) console.log(`Generated ${cases.length + 1}/${ALL_STYLES.length} styles`);
    cases.push({ styleId: style.id, bars: sheet.durationMeasures, bpm: sheet.bpm, meter: sheet.timeSignature,
      tracks: sheet.tracks.map(t => ({ instrumentId: t.instrumentId, role: t.role, volume: t.volume, notes: performance.notes.filter(n => n.trackId === t.id).length })),
      sections: sheet.regions.map(r => ({ kind: r.kind, bars: r.bars, chords: r.chords, solo: r.solo })),
      notes: performance.notes.length, assignedSolos: solos.length });
  } catch (error) { check(false, 'generation', style.id, String(error)); }
}
const coverage = { genres: new Set(ALL_STYLES.map(s => s.primaryGenre)).size, styles: ALL_STYLES.length, generated: cases.length };
writeReport('starter-audit', { ...reportMetadata(), status: findings.length ? 'FAIL' : 'PASS', coverage, findings, cases });
printFindings('starter-audit', findings, coverage);
