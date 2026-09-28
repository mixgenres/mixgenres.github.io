import { writeFileSync, mkdirSync } from 'node:fs';
import { GENRE_NAMES } from '../src/data/genres';
import { getCanonicalStyle } from '../src/data/styles';
import { getResolvedSectionStyle } from '../src/engine/generators/arrange';
import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { getInstrumentPerformanceProfile } from '../src/data/performance/instrumentPerformanceProfiles';
import { contractForGenre } from '../src/data/styles/contracts';
import { parseChord } from '../src/engine/theory/theory';

const REFERENCES: Record<string, string> = {
  afrobeats:'Essence — Wizkid feat. Tems', bachata:'Obsesión — Aventura', blues:'Sweet Home Chicago — Robert Johnson / Blues standard',
  brazilian:'Chega de Saudade — Antônio Carlos Jobim', country:'Folsom Prison Blues — Johnny Cash', cumbia:'La Pollera Colorá — Colombian cumbia standard',
  disco:'Stayin\' Alive — Bee Gees', electronic:'Blue Monday — New Order', folk:'The Times They Are a-Changin\' — Bob Dylan', funk:'Superstition — Stevie Wonder',
  gospel:'Oh Happy Day — Edwin Hawkins Singers', 'hip-hop':'The Message — Grandmaster Flash and the Furious Five', house:'Show Me Love — Robin S.',
  jazz:'Autumn Leaves — standard', kizomba:'Saudade — Kizomba standard/repertoire example', tango:'La Cumparsita — Gerardo Matos Rodríguez',
  flamenco:'Entre Dos Aguas — Paco de Lucía', metal:'Paranoid — Black Sabbath', 'r-and-b':'No Diggity — Blackstreet', reggae:'Three Little Birds — Bob Marley & The Wailers',
  reggaeton:'Gasolina — Daddy Yankee', rock:'Back in Black — AC/DC', salsa:'Pedro Navaja — Rubén Blades', ska:'A Message to You, Rudy — The Specials',
  soul:'Ain\'t No Sunshine — Bill Withers', swing:'Sing, Sing, Sing — Benny Goodman', timba:'La Sandunguita — Cuban timba repertoire example',
  zouk:'Zouk la sé sèl médikaman nou ni — Kassav\'', 'drum-and-bass':'Inner City Life — Goldie', industrial:'Head Like a Hole — Nine Inch Nails',
  'punk-hardcore':'Blitzkrieg Bop — Ramones', 'uk-bass':'Flowers — Sweet Female Attitude',
};

function mean(xs:number[]){return xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:0;}
function phraseBars(sheet:any, region:any){
  const style=getResolvedSectionStyle(sheet,region); const cycle=Math.max(1,Number(style.contract?.cycleLength??1));
  const candidates=(style.melody?.phraseLengthsBars??[]).filter((x:number)=>x%cycle===0);
  return Math.max(cycle,Number(candidates[0]??cycle));
}

mkdirSync('audit', {recursive:true});
const genres=Object.keys(GENRE_NAMES);
const report:any={generatedAt:new Date().toISOString(), referenceMethod:'structural/sonic proxy targets; no reference audio is embedded', genres:[]};
for(const genre of genres){
  const sheet=makeSheet(genre); const perf=compileWholeSong(sheet); const style=getCanonicalStyle(genre); const contract=contractForGenre(genre,style);
  const tracks=sheet.tracks.map((t:any)=>{
    const p=getInstrumentPerformanceProfile(t.instrumentId); const ns=perf.notes.filter(n=>n.trackId===t.id); const role=String(t.role??'');
    const rootRatio=role==='bass' ? mean(ns.map(n=>{const c=sheet.measures[n.bar]?.chord; return c && n.midi%12===(parseChord(c).rootPc??0)?1:0})) : undefined;
    const gestures=new Set(ns.map(n=>String(n.gestureCode)));
    const lowRatio=role==='bass'?mean(ns.map(n=>n.midi<43?1:0)):undefined;
    const warnings:string[]=[];
    if(!p.evidence.physical||p.evidence.physical==='missing') warnings.push('missing physical evidence');
    if(role==='bass' && (rootRatio??0)>0.82) warnings.push('bass remains root-heavy');
    if(role==='bass' && (lowRatio??0)>0.72) warnings.push('bass has excessive low-register density');
    if(role==='bass' && mean(ns.map(n=>n.vel))>82) warnings.push('bass velocity remains forward');
    if(role && p.genreProfiles[genre] && !p.genreProfiles[genre].idiomatic) warnings.push('instrument genre profile marked non-idiomatic');
    return {trackId:t.id,instrumentId:t.instrumentId,role,noteCount:ns.length,meanVelocity:Number(mean(ns.map(n=>n.vel)).toFixed(2)),rootRatio:rootRatio===undefined?undefined:Number(rootRatio.toFixed(3)),lowRegisterRatio:lowRatio===undefined?undefined:Number(lowRatio.toFixed(3)),gestureDiversity:gestures.size,evidence:p.evidence,warnings};
  });
  report.genres.push({genre,name:GENRE_NAMES[genre],defaultStyleId:style.id,reference:REFERENCES[genre]??null,bpm:perf.bars[0]?.bpm,durationSec:Number(perf.duration.toFixed(2)),notes:perf.notes.length,tracks,phraseBars:Math.max(...sheet.regions.map(r=>phraseBars(sheet,r))),cycleLength:contract.cycleLength,bassForward:contract.timbreSpace.mixCharacter?.bassForward,warnings:tracks.flatMap((t:any)=>t.warnings.map((w:string)=>`${t.instrumentId}: ${w}`))});
}
writeFileSync('audit/all-default-genres-audit.json',JSON.stringify(report,null,2));
console.log(`audited ${report.genres.length} default genres`);
