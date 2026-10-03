import { mkdirSync, writeFileSync } from 'node:fs';
import { ALL_STYLES } from '../../src/engine/style';
import { GENRE_WORLDS_BY_ID } from '../../src/data/genres';
import { INSTRUMENTS_BY_ID } from '../../src/engine/lookup/instruments';

interface ScoreCase {
  styleId: string; genre: string; meter: string; bpm: number; bars: number;
  parts: { instrumentId: string }[];
  sections?: unknown;
}
const escape = (value: string | number) => String(value).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Regenerated from the audited score inventory, not a second sample catalog. */
export function writeSampleReview(cases: ScoreCase[]) {
  const genres = [...new Set(cases.map(c => c.genre))];
  const styles = new Map(ALL_STYLES.map(style => [style.id, style]));
  const groups = genres.map(genre => `<details><summary>${escape(GENRE_WORLDS_BY_ID[genre]?.name ?? genre)}</summary>
    <table><thead><tr><th>Sample style</th><th>Meter / BPM</th><th>Bars</th><th>Players</th><th>Complete data</th></tr></thead><tbody>${cases.filter(c => c.genre === genre).map(c =>
      `<tr><td><a href="/?genre=${encodeURIComponent(c.genre)}&amp;style=${encodeURIComponent(c.styleId)}&amp;score=1">${escape(styles.get(c.styleId)?.name ?? c.styleId)}</a></td>
      <td>${escape(c.meter)} / ${c.bpm}</td><td>${c.bars}</td><td>${escape(c.parts.map(p => INSTRUMENTS_BY_ID[p.instrumentId]?.name ?? p.instrumentId).join(', '))}</td>
      <td><a href="complete-scores/${encodeURIComponent(c.styleId)}.json">JSON</a></td></tr>`).join('')}</tbody></table></details>`).join('\n');
  mkdirSync('audit', { recursive: true });
  writeFileSync('audit/sample-review.html', `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Sample sound and score review</title>
  <style>body{font:16px/1.5 system-ui;margin:32px auto;padding:0 24px;max-width:1050px;color:#18202c;background:#f7f5ef}h1{font-size:32px}details{border-top:1px solid #b7bac1;padding:12px 0}summary{font-weight:650;cursor:pointer}table{width:100%;border-collapse:collapse;font-size:14px}td,th{text-align:left;padding:8px;border-bottom:1px solid #d9dae0}a{color:#175a95}audio{display:block;width:100%;max-width:540px}aside{padding:16px;background:#e4e9ef;border-radius:6px}</style>
  <h1>Sample sound and score review</h1><p>${genres.length} genres · ${cases.length} styles · complete scores with solo auditions. Choose a sample below to inspect every bar, note, technique and rest.</p>
  <aside>Checks: <a href="sample-accuracy.json">all scores</a>, <a href="instrument-pitch.json">pitch probes</a>, <a href="audio-regression.json">ensemble excerpts</a>.
  These synthesized studies and shared family models still require perceptual and tradition-specific review.</aside>
  <h2>Tango comparison</h2><p>Before, first four bars</p><audio controls preload="none" src="tango-before.wav"></audio>
  <p>After, first four bars</p><audio controls preload="none" src="tango-after.wav"></audio>
  <p>Complete revised Golden Age study</p><audio controls preload="none" src="tango-complete-after.mp3"></audio>
  <details><summary>Revised instrument solos, four bars from the developed section</summary>${['bandoneon', 'piano', 'violin', 'upright-bass'].map(id =>
    `<p>${escape(INSTRUMENTS_BY_ID[id].name)}</p><audio controls preload="none" src="tango-${id}-after.wav"></audio>`).join('')}</details>
  <h2>All samples</h2>${groups}</html>`);
}
