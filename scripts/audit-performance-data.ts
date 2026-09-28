import { INSTRUMENT_CATALOG } from '../src/data/instruments/index.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { INSTRUMENT_PERFORMANCE_PROFILES } from '../src/data/performance/instrumentPerformanceProfiles.ts';
import { GESTURE_NAMES } from '../src/engine/compiler/wholeSongCompiler.ts';
import { writeFileSync } from 'node:fs';

const errors:string[]=[];
const warnings:string[]=[];
const genreIds = Array.from(new Set(ALL_PATTERNS.map(p=>p.worldId).filter(Boolean)));

for (const d of INSTRUMENT_CATALOG) {
  const p=INSTRUMENT_PERFORMANCE_PROFILES[d.id];
  if (!p) { errors.push(`${d.id}: missing performance profile`); continue; }
  if (!p.gestures || Object.keys(p.gestures).length===0) errors.push(`${d.id}: empty closed gesture set`);
  if (!p.primaryGenres.length) warnings.push(`${d.id}: no authored/derived primary genres; adaptation is family-derived`);
  if (p.capabilities.lowMidi > p.capabilities.highMidi) errors.push(`${d.id}: inverted range`);
  if (p.capabilities.comfortableLowMidi < p.capabilities.lowMidi || p.capabilities.comfortableHighMidi > p.capabilities.highMidi) errors.push(`${d.id}: comfortable range escapes absolute range`);
  if (p.capabilities.polyphony < 1) errors.push(`${d.id}: invalid polyphony`);
  for (const [genre,g] of Object.entries(p.genreProfiles)) {
    for (const id of g.gestureIds) if (!p.gestures[id]) errors.push(`${d.id}/${genre}: gesture ${id} is not closed`);
    for (const id of g.forbiddenGestures) if (g.gestureIds.includes(id)) errors.push(`${d.id}/${genre}: gesture ${id} both allowed and forbidden`);
    if (g.density.min < 0 || g.density.max > 1 || g.density.min > g.density.max) errors.push(`${d.id}/${genre}: invalid density`);
    if (g.phrase.ornamentCap < 0 || g.phrase.ornamentCap > 1) errors.push(`${d.id}/${genre}: invalid ornament cap`);
  }
}
const names=new Map<string,string[]>();
for(const p of ALL_PATTERNS){
  const n=p.name.trim().toLowerCase();
  const a=names.get(n)??[];a.push(p.id);names.set(n,a);
}
for(const [name,ids] of names) if(ids.length>1) errors.push(`duplicate rhythm name "${name}": ${ids.join(', ')}`);

const summary = {
  instruments: INSTRUMENT_CATALOG.length,
  profiles: Object.keys(INSTRUMENT_PERFORMANCE_PROFILES).length,
  patterns: ALL_PATTERNS.length,
  gestureCodes: Object.keys(GESTURE_NAMES).length,
  genres: genreIds.length,
  errors: errors.length,
  warnings: warnings.length,
  coverage: {
    physicalAuthored: Object.values(INSTRUMENT_PERFORMANCE_PROFILES).filter(p=>p.evidence.physical==='authored').length,
    rangeAuthored: Object.values(INSTRUMENT_PERFORMANCE_PROFILES).filter(p=>p.evidence.range==='authored').length,
    techniqueAuthored: Object.values(INSTRUMENT_PERFORMANCE_PROFILES).filter(p=>p.evidence.techniques==='authored').length,
    genreAuthored: Object.values(INSTRUMENT_PERFORMANCE_PROFILES).filter(p=>p.evidence.genres==='authored').length,
  }
};
writeFileSync('performance-data-audit.json', JSON.stringify({summary,errors,warnings},null,2));
console.log(JSON.stringify(summary,null,2));
for(const e of errors) console.error('ERROR',e);
for(const w of warnings.slice(0,40)) console.warn('WARN',w);
if(errors.length) process.exit(1);
