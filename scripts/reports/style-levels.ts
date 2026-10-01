// REPORT (static, no audio): per-style level audit across all 363 styles.
// For each style's default starter it resolves the real gain chain (lib/mixSchema) and, per SECTION and per track,
// the note count, mean velocity and an estimated relative level (effective gain dB + velocity dB). Flags:
//   section-level-spread>N dB, thin-section, flat-energy, flat-velocity-across-sections, lead-buried, bass-buried,
//   pan-layout-skewed, silent-track, gain-at-clamp.
// Output: audit/song-levels/style-levels.json     Run: npm run report:levels [styleId|genreId]
// Follow-up: npm run report:level-targets  (per-track estimated peak vs role targets, as a diff)
import { writeFileSync, mkdirSync } from 'node:fs';
import { ALL_STYLES } from '../../src/engine/style/index.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { describeMix } from '../lib/mixSchema.ts';

mkdirSync('audit/song-levels', { recursive: true });
const only = process.argv[2];
const out: any[] = [];
const avg = (a: number[]) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
for (const s of ALL_STYLES as any[]) {
  const genreId = s.primaryGenre ?? s.genres?.[0];
  if (only && s.id !== only && genreId !== only) continue;
  try {
    const sheet: any = makeSheet({ genreId, styleId: s.id } as any);
    const perf: any = compileWholeSong(sheet);
    const mix: any = describeMix(sheet, perf);
    const effDb: Record<string, number> = Object.fromEntries(mix.tracks.map((t: any) => [t.id, t.gain.effectiveGainDb]));
    const flags: string[] = [...mix.summary.flags];
    const secs = sheet.regions.map((r: any) => {
      const t0 = perf.bars[r.start]?.start ?? perf.bars[r.start]?.time ?? 0;
      const t1 = perf.bars[r.end - 1]?.end ?? perf.duration;
      const tracks = sheet.tracks.map((t: any) => {
        const ns = perf.notes.filter((n: any) => n.trackId === t.id && n.time >= t0 && n.time < t1);
        const mv = avg(ns.map((n: any) => n.vel));
        const est = ns.length ? +(effDb[t.id] + 20 * Math.log10(Math.max(1, mv) / 127)).toFixed(1) : null;
        return { id: t.id, inst: t.instrumentId, role: t.role, n: ns.length, vel: +mv.toFixed(0), estDb: est };
      });
      const act = tracks.filter((x: any) => x.n > 0);
      return { id: r.id, kind: r.kind, bars: r.end - r.start, energy: r.energy, active: act.length, tracks,
        spreadDb: act.length ? +(Math.max(...act.map((x: any) => x.estDb)) - Math.min(...act.map((x: any) => x.estDb))).toFixed(1) : 0 };
    });
    const energies = secs.map((x: any) => x.energy);
    if (new Set(energies).size === 1) flags.push(`flat-energy:${energies[0]}`);
    const secLoud = secs.map((x: any) => avg(x.tracks.filter((t: any) => t.n > 0).map((t: any) => t.vel)));
    if (Math.max(...secLoud) - Math.min(...secLoud) < 6) flags.push(`flat-velocity-across-sections:${(Math.max(...secLoud) - Math.min(...secLoud)).toFixed(1)}`);
    for (const x of secs) {
      if (x.spreadDb > 30) flags.push(`section-level-spread>${x.spreadDb}dB:${x.id}`);
      if (x.active <= 2) flags.push(`thin-section:${x.id}:${x.active}-tracks`);
    }
    const allEst = secs.flatMap((x: any) => x.tracks.filter((t: any) => t.n > 0).map((t: any) => t.estDb));
    const bass = secs.flatMap((x: any) => x.tracks.filter((t: any) => /bass/.test(t.role) && t.n > 0).map((t: any) => t.estDb));
    const lead = secs.flatMap((x: any) => x.tracks.filter((t: any) => /lead|melody/.test(t.role) && t.n > 0).map((t: any) => t.estDb));
    if (lead.length && allEst.length && avg(lead) < avg(allEst) - 12) flags.push('lead-buried');
    if (bass.length && allEst.length && avg(bass) < avg(allEst) - 18) flags.push('bass-buried');
    out.push({ styleId: s.id, genreId, canonical: !!s.canonical, duration: +perf.duration.toFixed(0), flags, sections: secs,
      tracks: mix.tracks.map((t: any) => ({ id: t.id, inst: t.instrumentId, role: t.instrumentRole, effDb: t.gain.effectiveGainDb, makeup: t.gain.makeupGain, notes: t.performance.noteCount })) });
  } catch (e: any) { out.push({ styleId: s.id, genreId, error: String(e.message).slice(0, 160) }); }
}
writeFileSync('audit/song-levels/style-levels.json', JSON.stringify(out, null, 1));
console.log('styles', out.length, 'errors', out.filter(o => o.error).length);
