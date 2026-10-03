import type { InstrumentDef } from './schema/instrument-def';
import { pedalSteel, lapSteel, resonatorGuitar, guira, djembe, shekere, talkingDrum, balafon, qanun, ney, duduk, bansuri, tanpura, sarangi, gayageum, haegeum, janggu, gamelanMetallophone, kendang, bandolaLlanera, marimbaDeChonta } from './catalog/world-instruments';

import { bandoneon } from './catalog/bellows-and-keys/bandoneon';
import { accordion } from './catalog/bellows-and-keys/accordion';
import { piano } from './catalog/bellows-and-keys/piano';
import { fm_ep } from './catalog/bellows-and-keys/fm-ep';
import { rhodes } from './catalog/bellows-and-keys/rhodes';
import { clavinet } from './catalog/bellows-and-keys/clavinet';
import { organ } from './catalog/bellows-and-keys/organ';
import { harpsichord } from './catalog/bellows-and-keys/harpsichord';
import { celeste } from './catalog/metal-and-wood/celeste';
import { glockenspiel } from './catalog/metal-and-wood/glockenspiel';
import { crystal } from './catalog/electronic/crystal';
import { vibraphone } from './catalog/metal-and-wood/vibraphone';
import { marimba } from './catalog/metal-and-wood/marimba';
import { music_box } from './catalog/metal-and-wood/music-box';
import { xylophone } from './catalog/metal-and-wood/xylophone';
import { tubular_bells } from './catalog/metal-and-wood/tubular-bells';
import { dulcimer } from './catalog/plucked/dulcimer';
import { guitar } from './catalog/plucked/guitar';
import { requinto } from './catalog/plucked/requinto';
import { tres } from './catalog/plucked/tres';
import { cuatro } from './catalog/plucked/cuatro';
import { cavaquinho } from './catalog/plucked/cavaquinho';
import { charango } from './catalog/plucked/charango';
import { oud } from './catalog/plucked/oud';
import { bouzouki } from './catalog/plucked/bouzouki';
import { harp } from './catalog/plucked/harp';
import { concertina } from './catalog/bellows-and-keys/concertina';
import { guitarron } from './catalog/plucked/guitarron';
import { mandolin } from './catalog/plucked/mandolin';
import { banjo } from './catalog/plucked/banjo';
import { sitar } from './catalog/plucked/sitar';
import { shamisen } from './catalog/plucked/shamisen';
import { kora } from './catalog/plucked/kora';
import { berimbau } from './catalog/plucked/berimbau';
import { sho } from './catalog/free-reed/sho';
import { guqin } from './catalog/plucked/guqin';
import { pipa } from './catalog/plucked/pipa';
import { guzheng } from './catalog/plucked/guzheng';
import { jarana } from './catalog/plucked/jarana';
import { koto } from './catalog/plucked/koto';
import { kalimba } from './catalog/plucked/kalimba';
import { bass } from './catalog/plucked/bass';
import { upright_bass } from './catalog/plucked/upright-bass';
import { synth } from './catalog/electronic/synth';
import { string_ensemble } from './catalog/bowed/string-ensemble';
import { violin } from './catalog/bowed/violin';
import { viola } from './catalog/bowed/viola';
import { cello } from './catalog/bowed/cello';
import { erhu } from './catalog/bowed/erhu';
import { jinghu } from './catalog/bowed/jinghu';
import { flute } from './catalog/winds/flute';
import { tin_whistle } from './catalog/winds/tin-whistle';
import { low_whistle } from './catalog/winds/low-whistle';
import { bagpipes } from './catalog/winds/bagpipes';
import { uilleann_pipes } from './catalog/winds/uilleann-pipes';
import { clarinet } from './catalog/winds/clarinet';
import { quena } from './catalog/winds/quena';
import { harmonica } from './catalog/winds/harmonica';
import { soprano_sax } from './catalog/winds/soprano-sax';
import { alto_sax } from './catalog/winds/alto-sax';
import { tenor_sax } from './catalog/winds/tenor-sax';
import { bari_sax } from './catalog/winds/bari-sax';
import { oboe } from './catalog/winds/oboe';
import { bassoon } from './catalog/winds/bassoon';
import { piccolo } from './catalog/winds/piccolo';
import { pan_flute } from './catalog/winds/pan-flute';
import { shakuhachi } from './catalog/winds/shakuhachi';
import { xiao } from './catalog/winds/xiao';
import { dizi } from './catalog/winds/dizi';
import { ryuteki } from './catalog/winds/ryuteki';
import { hichiriki } from './catalog/winds/hichiriki';
import { english_horn } from './catalog/winds/english-horn';
import { recorder } from './catalog/winds/recorder';
import { ocarina } from './catalog/winds/ocarina';
import { trumpet } from './catalog/brass/trumpet';
import { trombone } from './catalog/brass/trombone';
import { horn_section } from './catalog/brass/horn-section';
import { french_horn } from './catalog/brass/french-horn';
import { tuba } from './catalog/brass/tuba';
import { voice } from './catalog/voice/voice';
import { choir } from './catalog/voice/choir';
import { congas } from './catalog/hand-drums/congas';
import { bongos } from './catalog/hand-drums/bongos';
import { zabumba } from './catalog/hand-drums/zabumba';
import { bombo } from './catalog/hand-drums/bombo';
import { bata } from './catalog/hand-drums/bata';
import { cajon } from './catalog/hand-drums/cajon';
import { timbales } from './catalog/hand-drums/timbales';
import { surdo } from './catalog/hand-drums/surdo';
import { pandeiro } from './catalog/hand-drums/pandeiro';
import { bodhran } from './catalog/hand-drums/bodhran';
import { bones } from './catalog/metal-and-wood/bones';
import { tamborim } from './catalog/hand-drums/tamborim';
import { darbuka } from './catalog/hand-drums/darbuka';
import { tabla } from './catalog/hand-drums/tabla';
import { log_drum } from './catalog/hand-drums/log-drum';
import { cumbia_drum } from './catalog/hand-drums/cumbia-drum';
import { bombo_andino } from './catalog/hand-drums/bombo-andino';
import { vihuela } from './catalog/plucked/vihuela';
import { tambora } from './catalog/hand-drums/tambora';
import { tambor_alegre } from './catalog/hand-drums/tambor-alegre';
import { guacharaca } from './catalog/metal-and-wood/guacharaca';
import { bombo_leguero } from './catalog/hand-drums/bombo-leguero';
import { gongs } from './catalog/metal-and-wood/gongs';
import { cowbell } from './catalog/metal-and-wood/cowbell';
import { agogo } from './catalog/metal-and-wood/agogo';
import { claves } from './catalog/metal-and-wood/claves';
import { woodblock } from './catalog/metal-and-wood/woodblock';
import { triangle } from './catalog/metal-and-wood/triangle';
import { maracas } from './catalog/metal-and-wood/maracas';
import { shaker } from './catalog/metal-and-wood/shaker';
import { guiro } from './catalog/metal-and-wood/guiro';
import { cabasa } from './catalog/metal-and-wood/cabasa';
import { tambourine } from './catalog/metal-and-wood/tambourine';
import { castanets } from './catalog/metal-and-wood/castanets';
import { palmas } from './catalog/body-percussion/palmas';
import { steel_drums } from './catalog/metal-and-wood/steel-drums';
import { taiko } from './catalog/metal-and-wood/taiko';
import { paigu } from './catalog/hand-drums/paigu';
import { kane } from './catalog/metal-and-wood/kane';
import { zapateado } from './catalog/body-percussion/zapateado';
import { drums } from './catalog/kit/drums';
import { turntable } from './catalog/electronic/turntable';
import { melodica } from './catalog/winds/melodica';

import { cuica } from './catalog/hand-drums/cuica';
import { dikanza } from './catalog/metal-and-wood/dikanza';
import { foot_stomp } from './catalog/body-percussion/foot-stomp';
import { hand_percussion } from './catalog/body-percussion/hand-percussion';
import { harmonium } from './catalog/bellows-and-keys/harmonium';
import { repinique } from './catalog/hand-drums/repinique';
import { sampler } from './catalog/electronic/sampler';
import { tantan } from './catalog/hand-drums/tantan';
import { washboard } from './catalog/metal-and-wood/washboard';
export type { InstrumentDef, InstrumentFamily, DrumVoice, InstrumentTechniqueProfile } from './schema/instrument-def';

export const INSTRUMENT_CATALOG: InstrumentDef[] = [
  cuica,
  dikanza,
  foot_stomp,
  hand_percussion,
  harmonium,
  repinique,
  sampler,
  steel_drums,
  tantan,
  washboard,

  bandoneon,
  accordion,
  piano,
  fm_ep,
  rhodes,
  clavinet,
  organ,
  harpsichord,
  celeste,
  glockenspiel,
  crystal,
  vibraphone,
  marimba,
  balafon,
  marimbaDeChonta,
  gamelanMetallophone,
  music_box,
  xylophone,
  tubular_bells,
  dulcimer,
  guitar,
  resonatorGuitar,
  pedalSteel,
  lapSteel,
  requinto,
  tres,
  cuatro,
  cavaquinho,
  charango,
  oud,
  bouzouki,
  harp,
  concertina,
  guitarron,
  mandolin,
  banjo,
  sitar,
  shamisen,
  kora,
  qanun,
  tanpura,
  bandolaLlanera,
  berimbau,
  sho,
  guqin,
  pipa,
  guzheng,
  jarana,
  koto,
  gayageum,
  kalimba,
  bass,
  upright_bass,
  synth,
  string_ensemble,
  violin,
  sarangi,
  haegeum,
  viola,
  cello,
  erhu,
  jinghu,
  flute,
  ney,
  bansuri,
  duduk,
  tin_whistle,
  low_whistle,
  bagpipes,
  uilleann_pipes,
  clarinet,
  quena,
  harmonica,
  soprano_sax,
  alto_sax,
  tenor_sax,
  bari_sax,
  oboe,
  bassoon,
  piccolo,
  pan_flute,
  shakuhachi,
  xiao,
  dizi,
  ryuteki,
  hichiriki,
  english_horn,
  recorder,
  ocarina,
  trumpet,
  trombone,
  horn_section,
  french_horn,
  tuba,
  voice,
  choir,
  congas,
  bongos,
  zabumba,
  bombo,
  bata,
  cajon,
  timbales,
  surdo,
  pandeiro,
  bodhran,
  bones,
  tamborim,
  darbuka,
  tabla,
  djembe,
  shekere,
  talkingDrum,
  janggu,
  kendang,
  log_drum,
  cumbia_drum,
  bombo_andino,
  vihuela,
  tambora,
  tambor_alegre,
  guacharaca,
  bombo_leguero,
  gongs,
  cowbell,
  agogo,
  claves,
  woodblock,
  triangle,
  maracas,
  shaker,
  guiro,
  guira,
  cabasa,
  tambourine,
  castanets,
  palmas,
  taiko,
  paigu,
  kane,
  zapateado,
  drums,
  turntable,
  melodica,
];

// Genre packs may name regional instruments more precisely than the shared
// physical model catalog. Give every such name a real, resolvable definition
// backed by the closest available model; callers never need to silently drop
// a role or rewrite a genre's authored instrumentation.
const instrumentAliases: Array<[string, string, string]> = [
  ['ajaeng','cello','Korean bowed zither modeled from the low bowed-string profile.'],
  ['baglama','bouzouki','Long-necked saz-family lute, modeled from a plucked fretted lute.'],
  ['bajo-sexto','guitar','Mexican twelve-string bass-register guitar, modeled from guitar.'],
  ['biwa','pipa','Japanese short-necked lute, modeled from the pipa profile.'],
  ['bonang','gamelan-metallophone','Gamelan kettle-gong row, modeled from the gamelan metallophone profile.'],
  ['buk','janggu','Korean barrel drum, modeled from the janggu drum profile.'],
  ['dholak','tabla','Double-headed folk drum, modeled from the tabla percussion profile.'],
  ['dombra','mandolin','Central Asian long-necked plucked lute, modeled from a bright plucked-string profile.'],
  ['drum-kit','drums','Drum kit alias for the canonical kit model.'],
  ['frame-drum','tambourine','Frame drum, modeled from the frame-percussion profile.'],
  ['guembri','bass','Gnawa low plucked lute, modeled from the bass-string profile.'],
  ['kebero','djembe','Ethiopian double-headed drum, modeled from the hand-drum profile.'],
  ['khomus','kalimba','Jaw harp, modeled from a plucked resonator profile.'],
  ['krar','kora','Ethiopian lyre, modeled from a plucked African harp profile.'],
  ['masenqo','violin','Ethiopian one-string bowed fiddle, modeled from the bowed-string profile.'],
  ['morin-khuur','cello','Mongolian horsehead fiddle, modeled from the low bowed-string profile.'],
  ['mridangam','tabla','Carnatic double-headed drum, modeled from the tabla profile.'],
  ['pakhawaj','tabla','North Indian barrel drum, modeled from the tabla profile.'],
  ['qraqeb','castanets','Gnawa iron castanets, modeled from the castanet articulation profile.'],
  ['rebab','violin','Regional bowed rebab, modeled from the bowed-string profile.'],
  ['riq','tambourine','Arabic frame drum with jingles, modeled from tambourine.'],
  ['rudra-veena','sitar','Rudra veena, modeled from the sitar plucked-string profile.'],
  ['sabar','djembe','Senegalese sabar drum, modeled from a hand-drum profile.'],
  ['santur','dulcimer','Persian struck zither, modeled from the dulcimer profile.'],
  ['setar','sitar','Persian long-necked lute, modeled from the sitar profile.'],
  ['siku','pan-flute','Andean panpipe, modeled from the pan flute profile.'],
  ['synth-bass','synth','Synth bass alias for the canonical synthesizer model.'],
  ['tar','oud','Persian tar lute, modeled from an oud plucked-string profile.'],
  ['timpani','drums','Orchestral timpani, modeled from the pitched drum profile.'],
  ['tombak','darbuka','Persian goblet drum, modeled from the darbuka percussion profile.'],
  ['veena','sitar','Indian veena, modeled from the sitar plucked-string profile.'],
  ['zurna','oboe','Loud double-reed zurna, modeled from the oboe wind profile.'],
];
for (const [id, sourceId, note] of instrumentAliases) {
  const source = INSTRUMENT_CATALOG.find(instrument => instrument.id === sourceId);
  if (!source || INSTRUMENT_CATALOG.some(instrument => instrument.id === id)) continue;
  INSTRUMENT_CATALOG.push({ ...structuredClone(source), id, name: id.replace(/-/g, ' '), note });
}


export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(INSTRUMENT_CATALOG.map(i => [i.id, i]));

export { FAMILY_LABELS, FAMILY_ORDER, WORLD_INSTRUMENT_HINTS } from './families';
