import { writeFileSync, mkdirSync } from 'node:fs';
import { makeSheet, setInstrument, setPattern, setPartLens, type Sheet } from '../src/engine/generators/arrange.ts';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler.ts';
import { GESTURE_NAMES } from '../src/engine/compiler/gestureCodes.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { GENRE_NAMES } from '../src/data/genres/index.ts';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID, WORLD_INSTRUMENT_HINTS } from '../src/data/instruments/index.ts';
import { getInstrumentPerformanceProfile } from '../src/data/performance/instrumentPerformanceProfiles.ts';
import { buildBarTimes } from '../src/engine/sequencing/perform.ts';
import { getStylesForGenre, getCanonicalStyle } from '../src/data/styles/registry.ts';
import type { GuestLens } from '../src/types.ts';

const OUT = 'reports/genre-instrument';
mkdirSync(OUT, { recursive: true });

const GENRES = Object.keys(GENRE_NAMES);
const INSTRUMENT_IDS = INSTRUMENT_CATALOG.map(x => x.id);
const BASE_SHEETS = new Map<string, Sheet>();

function firstTrackId(sheet: Sheet): string { return sheet.tracks[0]?.id ?? 'v0'; }

function shortenToFirstPhrase(sheet: Sheet): Sheet {
  const region = sheet.regions[0];
  if (!region) return sheet;
  const track = sheet.tracks[0];
  const end = Math.min(region.start + 8, region.end);
  const regions = [{ ...region, start: 0, end: end - region.start, bars: end - region.start }];
  const measures = sheet.measures
    .filter(m => m.index >= region.start && m.index < end)
    .map((m, i) => ({ ...m, index: i, regionId: regions[0].id }));
  return {
    ...sheet,
    durationMeasures: measures.length,
    regions,
    measures,
    tracks: [track],
    arrangement: { [regions[0].id]: { [track.id]: sheet.arrangement?.[region.id]?.[track.id] ?? '' } },
    energies: { [regions[0].id]: { [track.id]: sheet.energies?.[region.id]?.[track.id] ?? region.energy ?? 3 } },
    partLens: sheet.partLens?.[region.id]?.[track.id]
      ? { [regions[0].id]: { [track.id]: sheet.partLens[region.id][track.id] } }
      : undefined,
  } as Sheet;
}

function isolatedGenreSheet(genre: string, styleId: string | undefined, instrumentId: string): Sheet {
  const key = `${genre}|${styleId ?? ''}`;
  let base = BASE_SHEETS.get(key);
  if (!base) {
    const made = styleId ? makeSheet({ genreId: genre, styleId }) : makeSheet(genre);
    base = shortenToFirstPhrase(made);
    BASE_SHEETS.set(key, base);
  }
  return setInstrument(base, firstTrackId(base), instrumentId);
}

function forceExactPatternCell(sheet: Sheet, trackId: string, patternId: string, variantId?: string): Sheet {
  const p = ALL_PATTERNS.find(x => x.id === patternId);
  if (!p) return sheet;
  const variant = variantId ? (p.variants ?? []).find(v => v.id === variantId) : undefined;
  const onsets = variant?.onsetGrid ?? p.onsetGrid ?? [];
  const accents = variant?.accentProfile ?? p.accentProfile;
  const durations = variant?.durationGrid ?? p.durationGrid;
  const hitTypes = (variant as any)?.hitGrid ?? p.hitGrid;
  const measures = sheet.measures.map(m => ({
    ...m,
    patternByTrack: { ...m.patternByTrack, [trackId]: patternId },
    patternDetailsByTrack: {
      ...(m.patternDetailsByTrack ?? {}),
      [trackId]: {
        patternId,
        styleId: sheet.styleId,
        variantId: variant?.id,
        onsetGrid: [...onsets],
        accentProfile: accents ? [...accents] : undefined,
        durationGrid: durations ? [...durations] : undefined,
        hitTypes: hitTypes as any,
        articulation: variant?.articulation ?? p.articulations?.[0],
        articulations: p.articulations ? [...p.articulations] : undefined,
        variationType: variant?.variationType,
      } as any,
    },
  }));
  return { ...sheet, measures };
}

function exactPatternSheet(
  genre: string,
  styleId: string | undefined,
  instrumentId: string,
  patternId: string,
  guest?: GuestLens,
  variantId?: string,
): Sheet {
  let sheet = isolatedGenreSheet(genre, styleId, instrumentId);
  const tid = firstTrackId(sheet);
  const rid = sheet.regions[0].id;
  if (guest) sheet = shortenToFirstPhrase(setPartLens(sheet, rid, tid, guest));
  sheet = shortenToFirstPhrase(setPattern(sheet, tid, rid, patternId, 'section'));
  return forceExactPatternCell(sheet, tid, patternId, variantId);
}

function finite(v: number): number { return Number.isFinite(v) ? v : 0; }
function mean(xs: number[]): number { return xs.length ? xs.reduce((a,b)=>a+b,0)/xs.length : 0; }
function stdev(xs: number[]): number {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(mean(xs.map(x => (x-m)*(x-m))));
}

function metrics(sheet: Sheet, instrumentId: string, deterministicCheck = false) {
  const performance = compileWholeSong(sheet, 0);
  const tid = firstTrackId(sheet);
  const notes = performance.notes.filter(n => n.trackId === tid);
  const profile = getInstrumentPerformanceProfile(instrumentId);
  const bars = Math.max(1, sheet.measures.length);
  const byBar = new Map<number, typeof notes>();
  for (const n of notes) (byBar.get(n.bar) ?? byBar.set(n.bar, []).get(n.bar)!).push(n);
  const counts = Array.from({ length: bars }, (_, i) => byBar.get(i)?.length ?? 0);
  const gestureCount = new Set(notes.map(n => n.gestureCode)).size;
  const hitCount = new Set(notes.map(n => n.hitFunctionCode)).size;
  const pitchRange = notes.length ? Math.max(...notes.map(n=>n.midi)) - Math.min(...notes.map(n=>n.midi)) : 0;
  const durationMean = mean(notes.map(n=>n.dur));
  const durationCv = durationMean ? stdev(notes.map(n=>n.dur))/durationMean : 0;
  const accentCv = stdev(notes.map(n=>n.accent));
  const derivedShare = notes.length ? notes.filter(n=>n.originCode === 1).length/notes.length : 0;
  const phraseSignatures = [0,4].map(start => notes.filter(n => n.bar >= start && n.bar < start+4).map(n => `${n.bar}:${Math.round(n.time*1000)}:${n.midi}:${n.gestureCode}`).join('|'));
  const maxPoly = notes.reduce((mx,n) => Math.max(mx, notes.filter(x => x !== n && x.time <= n.time && x.time + x.dur > n.time).length + 1), 0);
  const invalidGesture = [...new Set(notes.map(n => n.gestureCode))].some(code => !GESTURE_NAMES[code]);
  const inRange = notes.every(n => n.midi >= profile.capabilities.lowMidi && n.midi <= profile.capabilities.highMidi);
  const maxPolyOk = maxPoly <= profile.capabilities.polyphony;
  const barOccupancy = counts.filter(x=>x>0).length / bars;
  const densityMean = mean(counts);
  const rhythmicVariation = stdev(counts);
  const skeleton = notes.map(n => `${Math.round(n.time*1000)}:${n.hitFunctionCode}`).join('|');
  return {
    notes: notes.length,
    bars,
    notesPerBar: finite(densityMean),
    barOccupancy,
    rhythmicVariation,
    gestureCount,
    hitCount,
    pitchRange,
    durationCv,
    accentCv,
    derivedShare,
    phraseChange: phraseSignatures[0] !== phraseSignatures[1],
    maxPoly,
    inRange,
    maxPolyOk,
    invalidGesture,
    deterministic: deterministicCheck ? JSON.stringify(performance) === JSON.stringify(compileWholeSong(sheet, 0)) : true,
    skeleton,
    performance,
  };
}

function matchingPattern(regex: RegExp, preferredGenres: string[] = GENRES): string | undefined {
  const candidates = ALL_PATTERNS.filter(p => regex.test(`${p.id} ${p.name} ${p.description ?? ''} ${(p.tags ?? []).join(' ')} ${(p.approaches ?? []).join(' ')}`));
  const preferred = candidates.find(p => preferredGenres.includes(p.worldId));
  return (preferred ?? candidates[0])?.id;
}

function signatures() {
  const out: {name:string; genre:string; styleId?:string; instrument:string; patternId?:string; variantId?:string}[] = [];
  const tangoStyle = getStylesForGenre('tango').find(s => /milonga/i.test(`${s.id} ${s.name}`))?.id;
  const tangoPatterns = [
    ['tango syncopa', /s[ií]ncopa|syncop/i],
    ['tango marcato', /marcato/i],
    ['tango bordoneo', /bordoneo/i],
    ['tango milonga', /milonga/i],
  ] as const;
  for (const instrument of ['bandoneon','upright-bass','violin','piano']) {
    for (const [name, rx] of tangoPatterns) {
      const patternId = name === 'tango milonga'
        ? 'tango-bordoneo'
        : matchingPattern(rx, ['tango']);
      const variantId = name === 'tango milonga' ? 'tango-bordoneo-milonga' : undefined;
      out.push({ name, genre:'tango', styleId:name === 'tango milonga' ? tangoStyle : undefined, instrument, patternId, variantId });
    }
  }
  const salsaTumbao = ALL_PATTERNS.find(p => p.id === 'afro-conga-tumbao')?.id
    ?? matchingPattern(/conga.*tumbao/i, ['salsa']);
  if (salsaTumbao) out.push({name:'salsa tumbao',genre:'salsa',instrument:'congas',patternId:salsaTumbao});
  const timbaTumbao = ALL_PATTERNS.find(p => p.id === 'timba-conga-gear')?.id
    ?? ALL_PATTERNS.find(p => p.worldId === 'timba' && /conga/i.test(`${p.id} ${p.name}`))?.id;
  if (timbaTumbao) out.push({name:'timba conga tumbao/gear',genre:'timba',instrument:'congas',patternId:timbaTumbao});
  const bluegrassStyle = getStylesForGenre('country').find(s => /bluegrass/i.test(`${s.id} ${s.name}`))
    ?? getStylesForGenre('folk').find(s => /bluegrass/i.test(`${s.id} ${s.name}`));
  const bluePattern = ALL_PATTERNS.find(p => p.id === 'folk-travis')?.id ?? matchingPattern(/fingerpicking|travis/i, ['folk']);
  const flatpickPattern = ALL_PATTERNS.find(p => p.id === 'folk-intro-16')?.id ?? matchingPattern(/flatpick/i, ['folk','country']);
  if (bluegrassStyle && bluePattern) out.push({ name:'bluegrass fingerstyle guitar', genre:bluegrassStyle.primaryGenre, styleId:bluegrassStyle.id, instrument:'guitar', patternId:bluePattern });
  if (bluegrassStyle && flatpickPattern) out.push({ name:'bluegrass flatpick guitar', genre:bluegrassStyle.primaryGenre, styleId:bluegrassStyle.id, instrument:'guitar', patternId:flatpickPattern });
  const jazzWalking = ALL_PATTERNS.find(p => p.id === 'jazz-walking-bass')?.id ?? matchingPattern(/walking/i, ['jazz','swing','blues']);
  if (jazzWalking) out.push({ name:'jazz walking bass', genre:'jazz', instrument:'upright-bass', patternId:jazzWalking });
  for (const [name, genre, instrument, rx] of [
    ['timba funk-bass swap','timba','slap-bass',/funk|slap|timba.*bass/i],
    ['funk timba conga swap','funk','congas',/tumbao|conga/i],
    ['funk timba horn swap','funk','horn_section',/moña|mona|horn/i],
  ] as const) {
    const p=matchingPattern(rx, [genre]);
    if (p) out.push({name,genre,instrument,patternId:p});
  }
  return out.filter(x=>x.patternId && INSTRUMENTS_BY_ID[x.instrument]);
}

const phase = process.argv[2] ?? 'signatures';
const failures: any[] = [];
const genreCells: any[] = [];
const styleCells: any[] = [];
const fusionCells: any[] = [];
const additiveChecks: any[] = [];
const sigRows:any[]=[];
const transferRows:any[]=[];

function runMetric(genre:string, styleId:string|undefined, instrumentId:string, patternId?:string, guest?:GuestLens, variantId?:string) {
  const sheet = patternId ? exactPatternSheet(genre, styleId, instrumentId, patternId, guest, variantId) : isolatedGenreSheet(genre, styleId, instrumentId);
  return { sheet, metrics: metrics(sheet, instrumentId, phase === 'signatures') };
}

function checkMetric(type:string, identity:any, m:any) {
  if (!m.notes || !m.inRange || !m.maxPolyOk || m.invalidGesture) failures.push({type,...identity});
}

if (phase === 'additive' || phase === 'all') {
  for (const instrumentId of INSTRUMENT_IDS) {
    const def = INSTRUMENTS_BY_ID[instrumentId];
    const authored = new Set(def.techniques?.articulations ?? []);
    const profile = getInstrumentPerformanceProfile(instrumentId);
    for (const genre of GENRES) {
      const gp = profile.genreProfiles[genre];
      const missing = [...authored].filter(g => !gp?.gestureIds.includes(g));
      const forbiddenOverlap = [...(gp?.forbiddenGestures ?? [])].filter(g => authored.has(g));
      additiveChecks.push({instrumentId, genre, authored:authored.size, profileGestures:gp?.gestureIds.length??0, missing, forbiddenOverlap});
      if (missing.length || forbiddenOverlap.length) failures.push({type:'additive-gating',instrumentId,genre,missing,forbiddenOverlap});
    }
  }
  writeFileSync(`${OUT}/additive-checks.json`, JSON.stringify(additiveChecks,null,2));
}

if (phase === 'canonical' || phase === 'all') {
  for (const genre of GENRES) {
    const styleId = getCanonicalStyle(genre).id;
    for (const instrumentId of INSTRUMENT_IDS) {
      const {metrics:m}=runMetric(genre,styleId,instrumentId);
      const row={genre,styleId,instrumentId,notes:m.notes,bars:m.bars,notesPerBar:m.notesPerBar,barOccupancy:m.barOccupancy,rhythmicVariation:m.rhythmicVariation,gestureCount:m.gestureCount,hitCount:m.hitCount,pitchRange:m.pitchRange,durationCv:m.durationCv,accentCv:m.accentCv,derivedShare:m.derivedShare,phraseChange:m.phraseChange,maxPoly:m.maxPoly,inRange:m.inRange,maxPolyOk:m.maxPolyOk,deterministic:m.deterministic};
      genreCells.push(row);
      checkMetric('canonical-cell',{genre,styleId,instrumentId},m);
    }
    console.log(`canonical ${genre}: ${INSTRUMENT_IDS.length} instruments`);
  }
  writeFileSync(`${OUT}/canonical-cells.json`,JSON.stringify(genreCells,null,2));
}

if (phase === 'styles' || phase === 'all') {
  for (const genre of GENRES) {
    const hintIds = WORLD_INSTRUMENT_HINTS[genre] ?? [];
    for (const style of getStylesForGenre(genre)) {
      const styleInstruments = new Set<string>([
        ...hintIds,
        ...((style.arrangement?.ensemble ?? []).flatMap((x:any)=>x.instrumentIds ?? [])),
        ...((style.sound?.instrumentPalette ?? []).map((x:any)=>typeof x === 'string' ? x : x.value)),
      ]);
      for (const instrumentId of styleInstruments) {
        if (!INSTRUMENTS_BY_ID[instrumentId]) continue;
        const {metrics:m}=runMetric(genre,style.id,instrumentId);
        const row={genre,styleId:style.id,styleName:style.name,instrumentId,notes:m.notes,bars:m.bars,notesPerBar:m.notesPerBar,barOccupancy:m.barOccupancy,rhythmicVariation:m.rhythmicVariation,gestureCount:m.gestureCount,hitCount:m.hitCount,pitchRange:m.pitchRange,durationCv:m.durationCv,accentCv:m.accentCv,derivedShare:m.derivedShare,phraseChange:m.phraseChange,maxPoly:m.maxPoly,inRange:m.inRange,maxPolyOk:m.maxPolyOk,deterministic:m.deterministic};
        styleCells.push(row);
        checkMetric('style-cell',{genre,styleId:style.id,instrumentId},m);
      }
    }
    console.log(`styles ${genre}: ${getStylesForGenre(genre).length} styles`);
  }
  writeFileSync(`${OUT}/style-key-cells.json`,JSON.stringify(styleCells,null,2));
}

if (phase === 'fusion' || phase === 'all') {
  for (let i=0;i<GENRES.length;i++) {
    const host=GENRES[i], guest=GENRES[(i+1)%GENRES.length];
    const guestStyle=getCanonicalStyle(guest);
    const guestPattern=ALL_PATTERNS.find(p=>p.worldId===guest && p.onsetGrid?.length) ?? ALL_PATTERNS.find(p=>p.worldId===guest);
    if(!guestPattern) continue;
    for(const instrumentId of new Set(WORLD_INSTRUMENT_HINTS[host]??[])){
      if(!INSTRUMENTS_BY_ID[instrumentId]) continue;
      const {metrics:m}=runMetric(host,getCanonicalStyle(host).id,instrumentId,guestPattern.id,{genreId:guest,styleId:guestStyle.id,weight:.72});
      const row={host,guest,guestStyle:guestStyle.id,patternId:guestPattern.id,instrumentId,notes:m.notes,gestureCount:m.gestureCount,derivedShare:m.derivedShare,phraseChange:m.phraseChange,notesPerBar:m.notesPerBar,pitchRange:m.pitchRange,durationCv:m.durationCv,inRange:m.inRange,maxPolyOk:m.maxPolyOk,deterministic:m.deterministic};
      fusionCells.push(row); checkMetric('fusion-cell',{host,guest,instrumentId,patternId:guestPattern.id},m);
    }
    console.log(`fusion ${host} <- ${guest}`);
  }
  writeFileSync(`${OUT}/fusion-cells.json`,JSON.stringify(fusionCells,null,2));
}

if (phase === 'signatures' || phase === 'all') {
  for(const sig of signatures()){
    const {metrics:m}=runMetric(sig.genre,sig.styleId,sig.instrument,sig.patternId,undefined,sig.variantId);
    const row={...sig,notes:m.notes,notesPerBar:m.notesPerBar,gestureCount:m.gestureCount,hitCount:m.hitCount,derivedShare:m.derivedShare,phraseChange:m.phraseChange,pitchRange:m.pitchRange,durationCv:m.durationCv,inRange:m.inRange,maxPolyOk:m.maxPolyOk,deterministic:m.deterministic};
    sigRows.push(row);
    checkMetric('signature',{name:sig.name,genre:sig.genre,instrument:sig.instrument,patternId:sig.patternId},m);
    if((sig.name.includes('tumbao') && m.gestureCount<2) || !m.notes) failures.push({type:'signature-richness',...row});
  }
  const transferPattern = signatures().find(s=>s.name==='tango marcato')?.patternId;
  if(transferPattern){
    let referenceSlots:Set<string> = new Set();
    for(const instrumentId of ['bandoneon','upright-bass','violin','piano','cello','trumpet','guitar','congas']){
      const {sheet,metrics:m}=runMetric('tango',undefined,instrumentId,transferPattern);
      const bars = buildBarTimes(sheet);
      const slots = new Set<string>();
      for(const n of m.performance.notes){
        const bar = bars[n.bar];
        if(!bar) continue;
        const beat = (n.time - bar.start) * bar.bpm / 60;
        const q16 = Math.round(beat * 4) / 4;
        slots.add(`${n.bar}:${q16.toFixed(2)}`);
      }
      let skeletonMatch = true;
      if(!referenceSlots.size) referenceSlots=slots;
      else skeletonMatch = [...referenceSlots].every(slot => slots.has(slot));
      transferRows.push({instrumentId,notes:m.notes,gestureCount:m.gestureCount,derivedShare:m.derivedShare,skeletonMatch});
      if(!skeletonMatch) failures.push({type:'rhythm-transfer-skeleton',instrumentId,patternId:transferPattern,missing:[...referenceSlots].filter(x=>!slots.has(x)).slice(0,12)});
    }
  }
  writeFileSync(`${OUT}/signatures.json`,JSON.stringify(sigRows,null,2));
  writeFileSync(`${OUT}/transfer.json`,JSON.stringify(transferRows,null,2));
}

const summary={phase,counts:{genres:GENRES.length,instruments:INSTRUMENT_IDS.length,canonicalCells:genreCells.length,styleCells:styleCells.length,fusionCells:fusionCells.length,signatureCells:sigRows.length,additiveChecks:additiveChecks.length,failures:failures.length},canonical:{meanNotesPerBar:mean(genreCells.map(x=>x.notesPerBar)),meanGestureCount:mean(genreCells.map(x=>x.gestureCount)),phraseVariationRate:mean(genreCells.map(x=>x.phraseChange?1:0)),derivedShare:mean(genreCells.map(x=>x.derivedShare))},signatures:sigRows,transferRows};
writeFileSync(`${OUT}/${phase}-summary.json`,JSON.stringify({...summary,failures},null,2));
console.log(JSON.stringify(summary,null,2));
if(failures.length){console.error(`FAILURES: ${failures.length}`);for(const f of failures.slice(0,30)) console.error(JSON.stringify(f));process.exit(1);}
