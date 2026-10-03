import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { ALL_STYLES } from '../src/engine/style';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { reportMetadata, writeReport, printFindings, type Finding } from './lib/auditReport';

const findings: Finding[] = [], cases: object[] = [];
const instruments = new Set<string>();
const saveScores = process.argv.includes('--scores');
if (saveScores) mkdirSync('audit/complete-scores', { recursive: true });
for (const style of ALL_STYLES) {
  const song = makeSheet(style.primaryGenre, style.id), performance = compileWholeSong(song);
  const check = (ok: boolean, code: string, scope: string, message: string) => {
    if (!ok) findings.push({ severity: 'error', code, scope: `${style.id}/${scope}`, message });
  };
  const parts = song.tracks.map(track => {
    const id = track.instrumentId!; instruments.add(id);
    const def = INSTRUMENTS_BY_ID[id], profile = getInstrumentPerformanceProfile(id);
    const notes = performance.notes.filter(note => note.trackId === track.id);
    const pitched = def.voicing !== 'unpitched' && !def.kit && !def.drum;
    check(notes.length > 0, 'missing-player', id, 'An intended player never enters');
    for (const note of notes) {
      check(!pitched || note.midi >= profile.capabilities.lowMidi && note.midi <= profile.capabilities.highMidi,
        'physical-range', id, `Bar ${note.bar + 1}, MIDI ${note.midi} outside ${profile.capabilities.lowMidi}–${profile.capabilities.highMidi}`);
      check(Number.isFinite(note.frequencyHz) && note.frequencyHz! > 0 && note.dur > 0, 'invalid-note', id, `Bar ${note.bar + 1}: invalid pitch/length`);
      const bar = performance.bars[note.bar], measure = song.measures[note.bar];
      const selection = song.arrangement[bar.regionId]?.[track.id];
      check(selection !== 'silent' && measure.patternByTrack?.[track.id] !== 'silent', 'silent-attack', id, `Bar ${note.bar + 1}: rest acquired an attack`);
      if (note.authoredTechnique) {
        const detail = measure.patternDetailsByTrack?.[track.id];
        const index = Number(note.attackId!.split(':').at(-1));
        const technique = detail?.articulations?.[index] ?? detail?.articulation;
        // Authored solo development may use a specifically requested ornament.
        const solo = song.regions.find(r => r.id === bar.regionId)?.solo;
        check(Boolean(solo?.trackIds.includes(track.id)) || GESTURE_NAMES[note.gestureCode] === technique,
          'technique-substitution', id, `Bar ${note.bar + 1}: ${technique} became ${GESTURE_NAMES[note.gestureCode]}`);
      }
    }
    return { instrumentId: id, role: track.role, synthesisModule: getInstrumentModule(id).id, physicalRange: [profile.capabilities.lowMidi, profile.capabilities.highMidi],
      playedRange: notes.length ? [Math.min(...notes.map(n => n.midi)), Math.max(...notes.map(n => n.midi))] : [], notes: notes.length,
      techniques: [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode]))],
      authoredPitchNotes: notes.filter(n => n.authoredPitch).length,
      patterns: [...new Set(song.measures.map(m => m.patternByTrack?.[track.id]))].filter(id => id !== 'silent').map(id => ({ id, name: PATTERNS_BY_ID[id ?? '']?.name })) };
  });
  if (saveScores) writeFileSync(`audit/complete-scores/${style.id}.json`, JSON.stringify({ song, performance }));
  cases.push({ styleId: style.id, genre: style.primaryGenre, meter: song.timeSignature, bpm: song.bpm, bars: performance.bars.length, parts,
    sections: song.regions.map(r => ({ kind: r.kind, start: r.start, end: r.end, chords: r.chords })) });
  if (cases.length % 50 === 0) console.log(`Checked ${cases.length}/${ALL_STYLES.length} complete scores`);
}
const coverage = { genres: new Set(ALL_STYLES.map(s => s.primaryGenre)).size, styles: cases.length, instrumentsUsed: instruments.size };
writeReport('sample-accuracy', { ...reportMetadata(), status: findings.length ? 'FAIL' : 'PASS', coverage,
  evidence: 'Complete score checks against authored rhythm, ensemble, range and technique data. Not perceptual certification or a historical transcription audit.', findings, cases });
printFindings('sample-accuracy', findings, coverage);
