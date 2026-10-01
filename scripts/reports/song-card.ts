// AI-readable song card. JSON + plain text. Usage:
// npm run report:song-card -- tango [styleId] [outDir] [--audio=audit-audio.json]
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { asciiGrid, analyzePerformance, registerBand, gestureNames } from '../lib/auditMetrics.ts';
import { GENRE_NAMES } from '../../src/data/genres';
import type { PerfNote } from '../../src/engine/band/performanceData.ts';
import type { Track } from '../../src/types/song.ts';
import { flag } from '../lib/io.ts';

const genre = process.argv[2] ?? 'tango';
const styleId = process.argv[3] || undefined;
const outDir = process.argv[4] ?? 'audit/song-cards';
const audioPath = flag('audio');
if (!GENRE_NAMES[genre]) throw new Error(`Unknown genre ${genre}`);
mkdirSync(outDir, { recursive: true });
const sheet = makeSheet({ genreId: genre, styleId });
const perf = compileWholeSong(sheet, 0);
const metrics = analyzePerformance(sheet, perf);
const tracks = sheet.tracks.map((t: Track) => ({ id:t.id, role:t.role, instrumentId:t.instrumentId ?? t.id }));

function pitchClassHistogram(notes: PerfNote[]): number[] {
  return Array.from({ length: 12 }, (_, pc) => notes.filter(n => !n.drum && ((n.midi % 12) + 12) % 12 === pc).length);
}
function intervalHistogram(notes: PerfNote[]): Record<string, number> {
  const out: Record<string, number> = {};
  const sorted = [...notes].filter(n => !n.drum).sort((a,b) => a.time-b.time || a.trackId.localeCompare(b.trackId));
  for (let i=1;i<sorted.length;i++) { const d=sorted[i].midi-sorted[i-1].midi; out[String(d)] = (out[String(d)] ?? 0) + 1; }
  return out;
}
function entropy(notes: PerfNote[], slots = 16): number {
  if (!notes.length) return 0;
  const counts = Array.from({length:slots},()=>0);
  for (const n of notes) { const bar=perf.bars[n.bar]; if (!bar) continue; const beat=(n.time-bar.start)*bar.bpm/60; counts[Math.max(0,Math.min(slots-1,Math.round(beat/bar.beatsPerBar*slots)))]++; }
  const total=counts.reduce((a,b)=>a+b,0); if(!total) return 0;
  return counts.reduce((h,c)=>{if(!c)return h;const p=c/total;return h-p*Math.log2(p);},0)/Math.log2(slots);
}
function syncopation(notes: PerfNote[], slots = 16): number {
  if (!notes.length) return 0;
  let weighted = 0, total = 0;
  for (const n of notes) { const bar=perf.bars[n.bar]; if(!bar)continue; const slot=Math.round(((n.time-bar.start)*bar.bpm/60/bar.beatsPerBar)*slots)%slots; const strength = slot%4===0?0:slot%2===0?0.5:1; weighted += strength; total++; }
  return total ? weighted/total : 0;
}
function coincidenceMatrix(): Record<string, Record<string, number>> {
  const ids=sheet.tracks.map(t=>t.id); const out:Record<string,Record<string,number>>={};
  for(const a of ids){out[a]={}; const an=perf.notes.filter(n=>n.trackId===a).map(n=>n.time); for(const b of ids){const bn=new Set(perf.notes.filter(n=>n.trackId===b).map(n=>n.time));out[a][b]=an.length?an.filter(t=>bn.has(t)).length/an.length:0;}}
  return out;
}
function roleActivity(): Record<string, number[]> { const out:Record<string,number[]>={}; for(const t of sheet.tracks){const a=out[t.role]??Array.from({length:perf.bars.length},()=>0);for(const n of perf.notes)if(n.trackId===t.id)a[n.bar]++;out[t.role]=a;}return out; }

const bars = perf.bars.map((_bar, i) => ({ bar:i + 1, chord:sheet.measures[i]?.chord ?? '', tracks:Object.fromEntries(sheet.tracks.map((t: Track) => { const notes=perf.notes.filter(n=>n.trackId===t.id&&n.bar===i); return [t.id,{grid:asciiGrid(perf,t.id,i),register:registerBand(notes),notes:notes.length,gestures:gestureNames(notes)}]; })) }));
const audio = typeof audioPath === 'string' ? JSON.parse(readFileSync(audioPath, 'utf8')) : undefined;
const card = {
  schemaVersion:3, genre, styleId:sheet.styleId, tempoBpm:perf.bars[0]?.bpm ?? 0, meter:sheet.timeSignature, durationSec:perf.duration, tracks, bars,
  wholeSong:{ pitchClassHistogram:pitchClassHistogram(perf.notes), intervalHistogram:intervalHistogram(perf.notes), syncopationIndex:syncopation(perf.notes), rhythmicEntropy:entropy(perf.notes), interTrackOnsetCoincidence:coincidenceMatrix(), roleActivityPerBar:roleActivity(), energyCurve:metrics.form.energyCurve, symbolic:metrics, audio:audio?.rows?.find((r: {genre?:string})=>r.genre===genre) ?? null },
  sections:sheet.regions.map(r=>({id:r.id,kind:r.kind,startBar:r.start,endBar:r.end,energy:r.energy,chords:r.chords}))
};
const safe = `${genre}-${sheet.styleId}`.replace(/[^a-z0-9_-]/gi,'-');
writeFileSync(`${outDir}/${safe}.json`, `${JSON.stringify(card,null,2)}\n`);
const lines=[`SONG ${genre} / ${sheet.styleId}`,`TEMPO ${card.tempoBpm} BPM | METER ${card.meter} | ${perf.duration.toFixed(1)}s`,`TRACKS ${tracks.map(t=>`${t.id}=${t.instrumentId}/${t.role}`).join(' | ')}`,`BARS`];
for(const b of bars) lines.push(`${String(b.bar).padStart(3,'0')} ${b.chord.padEnd(10)} ${Object.entries(b.tracks).map(([id,v])=>`${id}:${v.grid}:${v.register}:${v.notes}`).join(' ')}`);
lines.push(`ENERGY ${metrics.form.energyCurve.join(',')}`,`PITCH-PC ${card.wholeSong.pitchClassHistogram.join(',')}`,`INTERVALS ${JSON.stringify(card.wholeSong.intervalHistogram)}`,`SYNCOPATION ${card.wholeSong.syncopationIndex.toFixed(4)} | RHYTHMIC-ENTROPY ${card.wholeSong.rhythmicEntropy.toFixed(4)}`,`ROLE-ACTIVITY ${JSON.stringify(card.wholeSong.roleActivityPerBar)}`,`ONSET-COINCIDENCE ${JSON.stringify(card.wholeSong.interTrackOnsetCoincidence)}`);
if (audio) lines.push(`AUDIO-SECTIONS ${JSON.stringify(audio.rows?.find((r: {genre?:string})=>r.genre===genre)?.sections ?? [])}`);
writeFileSync(`${outDir}/${safe}.txt`, lines.join('\n')+'\n'); console.log(`wrote ${outDir}/${safe}.{json,txt}`);
