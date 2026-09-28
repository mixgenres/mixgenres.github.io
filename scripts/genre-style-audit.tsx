// Generates a song for every style of one or more genres, compiles it the
// way the app does, and captures structural facts useful for a genre
// authenticity review: instrument/track allocation, pitch-range folding,
// pattern catalog usage, articulation usage, drum-hit usage, and (optionally)
// whether the offline MP3 renderer completes without error.
//
// Usage:
//   npx tsx scripts/genre-style-audit.ts <genreId>[,<genreId>...] [--render] [--out file.json]
//   npx tsx scripts/genre-style-audit.ts all --out /tmp/full-audit.json
import { writeFileSync } from 'fs';
import { makeSheet } from '../src/engine/generators/arrange';
import { tieredCompile } from '../src/engine/sequencing/tieredEngine';
import { renderPerformanceToMp3 } from '../src/engine/audio/offlineRender';
import { getStylesForGenre } from '../src/data/styles/registry';
import { GENRE_NAMES } from '../src/data/genres';
import { voiceProfile } from '../src/engine/theory/instrumentProfile';
import { PATTERNS_BY_ID } from '../src/data/genres';

const ALL_GENRE_IDS = Object.keys(GENRE_NAMES);

interface TrackStat {
  trackId: string;
  instrumentId: string;
  role: string;
  noteCount: number;
  minMidi: number | null;
  maxMidi: number | null;
  outOfRangeLow: number;
  outOfRangeHigh: number;
  rangeLow: number;
  rangeHigh: number;
  minVel: number | null;
  maxVel: number | null;
  zeroOrNegDur: number;
  maxPolyphony: number;
  articulationsUsed: string[];
  patternsUsed: string[];
}

interface StyleReport {
  genreId: string;
  styleId: string;
  styleName: string;
  bpm: number;
  meter: string;
  sections: string[];
  trackCount: number;
  noteCount: number;
  duration: number;
  ensembleInstruments: string[]; // from style.arrangement.ensemble
  trackInstruments: string[]; // actually placed on tracks
  ensembleUnused: string[]; // in ensemble but no track / no notes
  emptyTracks: string[]; // tracks with 0 notes
  patternsAllowed: number;
  patternsUsedCount: number;
  patternsUnusedIds: string[];
  patternsUsedIds: string[];
  crossStylePatterns: { patternId: string; usedInTrack: string; belongsToStyles: string[] }[];
  tracks: TrackStat[];
  renderError: string | null;
  renderMs: number | null;
  compileError: string | null;
}

function analyzeStyle(genreId: string, styleId: string, _doRender: boolean): StyleReport {
  try {
    const sheet = makeSheet({ genreId, styleId });
    const styleObj = getStylesForGenre(genreId).find(s => s.id === styleId);
    const perf = tieredCompile(sheet);

    const byTrack = new Map<string, TrackStat>();
    for (const t of sheet.tracks) {
      const prof = voiceProfile(t.instrumentId, genreId);
      byTrack.set(t.id, {
        trackId: t.id,
        instrumentId: t.instrumentId,
        role: t.role,
        noteCount: 0,
        minMidi: null, maxMidi: null,
        outOfRangeLow: 0, outOfRangeHigh: 0,
        rangeLow: prof.low, rangeHigh: prof.high,
        minVel: null, maxVel: null,
        zeroOrNegDur: 0,
        maxPolyphony: 0,
        articulationsUsed: [],
        patternsUsed: [],
      });
    }

    // polyphony: track simultaneous active notes per track
    const activeEnds = new Map<string, number[]>();
    const artSets = new Map<string, Set<string>>();
    const patSets = new Map<string, Set<string>>();

    for (const n of perf.notes) {
      const st = byTrack.get(n.trackId);
      if (!st) continue;
      st.noteCount++;
      if (st.minMidi === null || n.midi < st.minMidi) st.minMidi = n.midi;
      if (st.maxMidi === null || n.midi > st.maxMidi) st.maxMidi = n.midi;
      if (n.midi < st.rangeLow) st.outOfRangeLow++;
      if (n.midi > st.rangeHigh) st.outOfRangeHigh++;
      if (st.minVel === null || n.vel < st.minVel) st.minVel = n.vel;
      if (st.maxVel === null || n.vel > st.maxVel) st.maxVel = n.vel;
      if (n.dur <= 0) st.zeroOrNegDur++;
      if (n.articulation) (artSets.get(n.trackId) ?? artSets.set(n.trackId, new Set()).get(n.trackId)!).add(n.articulation);

      const ends = activeEnds.get(n.trackId) ?? [];
      const stillActive = ends.filter(e => e > n.time + 1e-4);
      stillActive.push(n.time + n.dur);
      activeEnds.set(n.trackId, stillActive);
      if (stillActive.length > st.maxPolyphony) st.maxPolyphony = stillActive.length;
    }

    const allPatternIds = new Set<string>();
    const patternCounts = new Map<string, number>();
    for (const m of sheet.measures ?? []) {
      const details = m.patternDetailsByTrack ?? {};
      for (const [trackId, det] of Object.entries(details)) {
        const patId = det.patternId;
        if (!patId) continue;
        allPatternIds.add(patId);
        patternCounts.set(patId, (patternCounts.get(patId) ?? 0) + 1);
        (patSets.get(trackId) ?? patSets.set(trackId, new Set()).get(trackId)!).add(patId);
      }
    }
    for (const [tid, st] of byTrack) {
      st.articulationsUsed = Array.from(artSets.get(tid) ?? []).sort();
      st.patternsUsed = Array.from(patSets.get(tid) ?? []).sort();
    }

    const ensembleInstruments = Array.from(new Set((styleObj?.arrangement?.ensemble ?? []).flatMap(e => e.instrumentIds)));
    const trackInstruments = Array.from(new Set(sheet.tracks.map(t => t.instrumentId)));
    const ensembleUnused = ensembleInstruments.filter(id => !trackInstruments.includes(id));
    const emptyTracks = Array.from(byTrack.values()).filter(t => t.noteCount === 0).map(t => `${t.trackId}:${t.instrumentId}`);

    const allowedPatterns = new Set(styleObj?.patterns?.allowed ?? []);
    const patternsUnusedIds = Array.from(allowedPatterns).filter(id => !allPatternIds.has(id));

    const crossStylePatterns: StyleReport['crossStylePatterns'] = [];
    for (const [tid, st] of byTrack) {
      for (const patId of st.patternsUsed) {
        const def = PATTERNS_BY_ID[patId];
        const belongsToStyles: string[] = (def as any)?.styleIds ?? [];
        if (belongsToStyles.length && !belongsToStyles.includes(styleId)) {
          crossStylePatterns.push({ patternId: patId, usedInTrack: `${tid}:${st.instrumentId}`, belongsToStyles });
        }
      }
    }

    return {
      genreId, styleId, styleName: styleObj?.name ?? styleId,
      bpm: sheet.bpm, meter: sheet.timeSignature,
      sections: sheet.regions.map(r => `${r.kind}(e${r.energy})`),
      trackCount: sheet.tracks.length,
      noteCount: perf.notes.length,
      duration: perf.duration,
      ensembleInstruments, trackInstruments, ensembleUnused, emptyTracks,
      patternsAllowed: allowedPatterns.size,
      patternsUsedCount: allPatternIds.size,
      patternsUnusedIds,
      patternsUsedIds: Array.from(allPatternIds),
      crossStylePatterns,
      tracks: Array.from(byTrack.values()),
      renderError: null, renderMs: null,
      compileError: null,
    };
  } catch (e: any) {
    return {
      genreId, styleId, styleName: styleId, bpm: 0, meter: '', sections: [],
      trackCount: 0, noteCount: 0, duration: 0, ensembleInstruments: [], trackInstruments: [],
      ensembleUnused: [], emptyTracks: [], patternsAllowed: 0, patternsUsedCount: 0, patternsUnusedIds: [],
      patternsUsedIds: [], crossStylePatterns: [],
      tracks: [], renderError: null, renderMs: null, compileError: String(e?.stack ?? e),
    };
  }
}

async function analyzeStyleWithRender(genreId: string, styleId: string, doRender: boolean): Promise<StyleReport> {
  const report = analyzeStyle(genreId, styleId, false);
  if (doRender && !report.compileError) {
    const sheet = makeSheet({ genreId, styleId });
    const perf = tieredCompile(sheet);
    const trackInstrumentsMap = new Map(sheet.tracks.map(t => [t.id, t.instrumentId]));
    const start = Date.now();
    try {
      const blob = await renderPerformanceToMp3(perf, { trackInstruments: trackInstrumentsMap, worldId: sheet.worldId, styleId: sheet.styleId });
      report.renderMs = Date.now() - start;
      report.renderError = blob && blob.size > 0 ? null : 'empty blob';
    } catch (e: any) {
      report.renderMs = Date.now() - start;
      report.renderError = String(e?.message ?? e).slice(0, 500);
    }
  }
  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const doRender = args.includes('--render');
  const outIdx = args.indexOf('--out');
  const outPath = outIdx >= 0 ? args[outIdx + 1] : null;
  const filtered = args.filter(a => a !== '--render' && a !== outPath && a !== '--out');
  const genreArg = filtered[0] || 'all';
  const genreIds = genreArg === 'all' ? ALL_GENRE_IDS : genreArg.split(',');

  const results: StyleReport[] = [];
  for (const genreId of genreIds) {
    const styles = getStylesForGenre(genreId);
    if (!styles.length) {
      console.error(`[${genreId}] NO STYLES FOUND`);
      continue;
    }
    console.error(`\n=== ${genreId} (${styles.length} styles) ===`);
    for (const style of styles) {
      process.stderr.write(`  - ${style.id} ... `);
      const report = await analyzeStyleWithRender(genreId, style.id, doRender);
      results.push(report);
      if (report.compileError) console.error(`COMPILE ERROR: ${report.compileError.split('\n')[0]}`);
      else console.error(`${report.noteCount} notes, ${report.duration.toFixed(1)}s${doRender ? (report.renderError ? `, RENDER ERROR: ${report.renderError.split('\n')[0]}` : `, rendered ok (${report.renderMs}ms)`) : ''}`);
    }
  }

  if (outPath) {
    writeFileSync(outPath, JSON.stringify(results, null, 2));
    console.error(`\nWrote ${outPath}`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});