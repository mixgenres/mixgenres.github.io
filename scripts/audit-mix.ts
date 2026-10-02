import { getGenreTheory } from '../src/engine/lookup/theory';
import { ALL_STYLES } from '../src/engine/style';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { resolveTrackGain, resolveTrackSound } from '../src/engine/playback/trackSound';
import { makeupGainFor, determineBusCategory } from '../src/engine/playback/elementaryEngine';
import { resolveMasterSettings, resolvePlaybackMix, ensembleHeadroom } from '../src/engine/studio/masterSettings';
import { reportMetadata, writeReport, summarizeFindings, type Finding } from './lib/auditReport';

const findings: Finding[] = [];
const add = (severity: Finding['severity'], code: string, scope: string, message: string) => findings.push({ severity, code, scope, message });
const mean = (xs: number[]) => xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
const rows = [];
for (const style of ALL_STYLES) {
  try {
    if (getGenreTheory(style.primaryGenre).genreId !== style.primaryGenre) add('error', 'borrowed-theory', style.id, 'Genre theory silently falls back to another genre');
    const sheet = makeSheet(style.primaryGenre, style.id);
    const perf = compileWholeSong(sheet);
    const mix = resolvePlaybackMix(style.primaryGenre, style.id);
    const master = resolveMasterSettings(mix.mixCharacter, mix.context);
    if (!mix.mixCharacter) add('error', 'missing-mix', style.id, 'No resolved mix character');
    for (const [key, value] of Object.entries(mix.mixCharacter ?? {})) {
      if (typeof value !== 'number') continue;
      if (!Number.isFinite(value) || value < 0 || (key !== 'compressionRatio' && value > 1)) add('error', 'invalid-mix-value', style.id, `${key}=${value}`);
    }
    const tracks = sheet.tracks.map(track => {
      const instrumentId = track.instrumentId!;
      const scope = `${style.id}/${instrumentId}`;
      const notes = perf.notes.filter(n => n.trackId === track.id);
      const params = resolveTrackSound(instrumentId, style.primaryGenre, style.id, track.role);
      const initialGain = resolveTrackGain(params, track.volume);
      const gainHistory = [initialGain];
      let ccVolume = 1, expression = 1;
      const controllers = perf.ccs.filter(c => c.trackId === track.id && (c.cc === 7 || c.cc === 11)).sort((a, b) => a.time - b.time);
      for (const cc of controllers) {
        if (!Number.isFinite(cc.value) || cc.value < 0 || cc.value > 127) add('error', 'invalid-controller', scope, `CC${cc.cc}=${cc.value}`);
        if (cc.cc === 7) ccVolume = cc.value / 127; else expression = cc.value / 127;
        gainHistory.push(resolveTrackGain(params, track.volume, ccVolume, expression));
      }
      if (!Number.isFinite(track.volume) || track.volume < 0 || track.volume > 1) add('error', 'invalid-track-level', scope, `Level ${track.volume} is outside 0–1`);
      if (!Number.isFinite(initialGain) || initialGain <= 0) add('error', 'invalid-resolved-gain', scope, `Gain ${initialGain}`);
      for (const n of notes) {
        if (![n.time, n.dur, n.vel, n.midi].every(Number.isFinite) || n.dur <= 0 || n.vel < 1 || n.vel > 127) { add('error', 'invalid-note', scope, 'Non-finite or invalid duration/velocity/pitch'); break; }
      }
      const sections = sheet.regions.map(region => {
        const sectionNotes = notes.filter(n => n.bar >= region.start && n.bar < region.end);
        const patternId = sheet.arrangement[region.id]?.[track.id];
        const scheduled = patternId !== undefined && patternId !== 'silent';
        if (scheduled && !sectionNotes.length) add('warning', 'scheduled-without-notes', `${scope}/${region.id}`, `Pattern ${patternId} selected, but compiler emitted no notes (check solo policy and role compatibility)`);
        return { regionId: region.id, name: region.name, energy: region.energy, scheduled, patternId, notes: sectionNotes.length };
      });
      if (!notes.length) add('warning', 'unused-track', scope, 'This starter track never plays; review palette fill versus authored personnel');
      const ceilingFraction = notes.length ? notes.filter(n => n.vel >= 126).length / notes.length : 0;
      if (ceilingFraction > 0.25) add('warning', 'velocity-ceiling', scope, `${Math.round(ceilingFraction * 100)}% of notes at velocity 126–127; expressive headroom is limited`);
      return { trackId: track.id, instrumentId, role: track.role, bus: determineBusCategory(track.role, instrumentId),
        trackLevel: track.volume, makeupGain: makeupGainFor(params.model, instrumentId), roleGain: params.roleGain,
        initialGain, controllerGainRange: [Math.min(...gainHistory), Math.max(...gainHistory)], noteCount: notes.length,
        meanVelocity: mean(notes.map(n => n.vel)), velocityCeilingFraction: ceilingFraction, sections };
    });
    rows.push({ genre: style.primaryGenre, styleId: style.id, name: style.name, durationSeconds: perf.duration,
      mixCharacter: mix.mixCharacter, masterProfile: mix.masterProfile, masterSettings: master,
      ensembleHeadroom: ensembleHeadroom(tracks.filter(t => t.noteCount).length, mix.masterProfile.lift), tracks });
  } catch (e) { add('error', 'compile-or-resolution', style.id, String(e)); }
}
const counts = summarizeFindings(findings);
const report = { ...reportMetadata(), status: counts.errors ? 'FAIL' : 'PASS', coverage: { expectedStyles: ALL_STYLES.length, inspectedStyles: rows.length },
  methodology: 'Structural gain and controller audit; no PCM or acoustic loudness is measured here. See audio-regression.json for PCM levels.',
  gaps: ['LUFS and true peak require a mastered audio measurement; static gains cannot determine acoustic balance.', 'A selected pattern with no notes can be intentional under a solo policy; these are warnings to review.'], counts, findings, rows };
writeReport('mix-audit', report);
console.log(JSON.stringify({ status: report.status, coverage: report.coverage, ...counts }));
if (counts.errors || rows.length !== ALL_STYLES.length) process.exitCode = 1;
