import type { InstrumentDef } from './schema/instrument-def';
import { bandoneon } from './catalog/bellows-and-keys/bandoneon';
import { accordion } from './catalog/bellows-and-keys/accordion';
import { piano } from './catalog/bellows-and-keys/piano';
import { fm_ep } from './catalog/bellows-and-keys/fm-ep';
import { rhodes } from './catalog/bellows-and-keys/rhodes';
import { clavinet } from './catalog/bellows-and-keys/clavinet';
import { organ } from './catalog/bellows-and-keys/organ';
import { rock_organ } from './catalog/bellows-and-keys/rock-organ';
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
import { spanish_guitar } from './catalog/plucked/spanish-guitar';
import { acoustic_guitar } from './catalog/plucked/acoustic-guitar';
import { steel_guitar } from './catalog/plucked/steel-guitar';
import { i_12_string_guitar } from './catalog/plucked/12-string-guitar';
import { electric_guitar } from './catalog/plucked/electric-guitar';
import { jazz_guitar } from './catalog/plucked/jazz-guitar';
import { distortion_guitar } from './catalog/plucked/distortion-guitar';
import { muted_guitar } from './catalog/plucked/muted-guitar';
import { guitar_harmonics } from './catalog/plucked/guitar-harmonics';
import { requinto } from './catalog/plucked/requinto';
import { overdrive_guitar } from './catalog/plucked/overdrive-guitar';
import { tres } from './catalog/plucked/tres';
import { cuatro } from './catalog/plucked/cuatro';
import { cavaquinho } from './catalog/plucked/cavaquinho';
import { charango } from './catalog/plucked/charango';
import { oud } from './catalog/plucked/oud';
import { bouzouki } from './catalog/plucked/bouzouki';
import { harp } from './catalog/plucked/harp';
import { celtic_harp } from './catalog/plucked/celtic-harp';
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
import { slap_bass } from './catalog/plucked/slap-bass';
import { acoustic_bass } from './catalog/plucked/acoustic-bass';
import { pick_bass } from './catalog/plucked/pick-bass';
import { fretless_bass } from './catalog/plucked/fretless-bass';
import { sub_bass } from './catalog/electronic/sub-bass';
import { synth } from './catalog/electronic/synth';
import { violin } from './catalog/bowed/violin';
import { viola } from './catalog/bowed/viola';
import { cello } from './catalog/bowed/cello';
import { strings } from './catalog/bowed/strings';
import { slow_strings } from './catalog/bowed/slow-strings';
import { tremolo_strings } from './catalog/bowed/tremolo-strings';
import { orchestral_harp } from './catalog/plucked/orchestral-harp';
import { pizz_strings } from './catalog/plucked-string/pizz-strings';
import { fiddle } from './catalog/bowed/fiddle';
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
import { muted_trumpet } from './catalog/brass/muted-trumpet';
import { trombone } from './catalog/brass/trombone';
import { horn_section } from './catalog/brass/horn-section';
import { brass } from './catalog/brass/brass';
import { french_horn } from './catalog/brass/french-horn';
import { tuba } from './catalog/brass/tuba';
import { synth_brass } from './catalog/electronic/synth-brass';
import { voice } from './catalog/voice/voice';
import { choir } from './catalog/voice/choir';
import { backing_vocals } from './catalog/voice/backing-vocals';
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
import { ride } from './catalog/metal-and-wood/ride';
import { steel_drums } from './catalog/metal-and-wood/steel-drums';
import { taiko } from './catalog/metal-and-wood/taiko';
import { paigu } from './catalog/hand-drums/paigu';
import { kane } from './catalog/metal-and-wood/kane';
import { zapateado } from './catalog/body-percussion/zapateado';
import { drums } from './catalog/kit/drums';
import { brush_kit } from './catalog/kit/brush-kit';
import { kick } from './catalog/kit/kick';
import { snare } from './catalog/kit/snare';
import { hats } from './catalog/kit/hats';
import { acid_303 } from './catalog/electronic/acid-303';
import { noise_sweep } from './catalog/electronic/noise-sweep';
import { dub_echo } from './catalog/electronic/dub-echo';
import { turntable } from './catalog/electronic/turntable';
import { melodica } from './catalog/winds/melodica';
import { saw_lead } from './catalog/electronic/saw-lead';
import { square_lead } from './catalog/electronic/square-lead';
import { warm_pad } from './catalog/electronic/warm-pad';
import { synth_strings } from './catalog/electronic/synth-strings';
import { bass_lead } from './catalog/electronic/bass-lead';
import { polysynth } from './catalog/electronic/polysynth';
import { halo_pad } from './catalog/electronic/halo-pad';
import { sweep_pad } from './catalog/electronic/sweep-pad';

import { cuica } from './catalog/hand-drums/cuica';
import { dikanza } from './catalog/metal-and-wood/dikanza';
import { drone } from './catalog/electronic/drone';
import { foot_stomp } from './catalog/body-percussion/foot-stomp';
import { hand_percussion } from './catalog/body-percussion/hand-percussion';
import { harmonium } from './catalog/bellows-and-keys/harmonium';
import { repinique } from './catalog/hand-drums/repinique';
import { sampler } from './catalog/electronic/sampler';
import { slide_guitar } from './catalog/plucked/slide-guitar';
import { spring_reverb } from './catalog/electronic/spring-reverb';
import { tantan } from './catalog/hand-drums/tantan';
import { tape_echo } from './catalog/electronic/tape-echo';
import { washboard } from './catalog/metal-and-wood/washboard';
export type { InstrumentDef, InstrumentFamily, DrumVoice, InstrumentTechniqueProfile } from './schema/instrument-def';

export const INSTRUMENT_CATALOG: InstrumentDef[] = [
  cuica,
  dikanza,
  drone,
  foot_stomp,
  hand_percussion,
  harmonium,
  repinique,
  sampler,
  slide_guitar,
  spring_reverb,
  steel_drums,
  tantan,
  tape_echo,
  washboard,

  bandoneon,
  accordion,
  piano,
  fm_ep,
  rhodes,
  clavinet,
  organ,
  rock_organ,
  harpsichord,
  celeste,
  glockenspiel,
  crystal,
  vibraphone,
  marimba,
  music_box,
  xylophone,
  tubular_bells,
  dulcimer,
  guitar,
  spanish_guitar,
  acoustic_guitar,
  steel_guitar,
  i_12_string_guitar,
  electric_guitar,
  jazz_guitar,
  distortion_guitar,
  muted_guitar,
  guitar_harmonics,
  requinto,
  overdrive_guitar,
  tres,
  cuatro,
  cavaquinho,
  charango,
  oud,
  bouzouki,
  harp,
  celtic_harp,
  concertina,
  guitarron,
  mandolin,
  banjo,
  sitar,
  shamisen,
  kora,
  berimbau,
  sho,
  guqin,
  pipa,
  guzheng,
  jarana,
  koto,
  kalimba,
  bass,
  upright_bass,
  slap_bass,
  acoustic_bass,
  pick_bass,
  fretless_bass,
  sub_bass,
  synth,
  violin,
  viola,
  cello,
  strings,
  slow_strings,
  tremolo_strings,
  orchestral_harp,
  pizz_strings,
  fiddle,
  erhu,
  jinghu,
  flute,
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
  muted_trumpet,
  trombone,
  horn_section,
  brass,
  french_horn,
  tuba,
  synth_brass,
  voice,
  choir,
  backing_vocals,
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
  cabasa,
  tambourine,
  castanets,
  palmas,
  ride,
  taiko,
  paigu,
  kane,
  zapateado,
  drums,
  brush_kit,
  kick,
  snare,
  hats,
  acid_303,
  noise_sweep,
  dub_echo,
  turntable,
  melodica,
  saw_lead,
  square_lead,
  warm_pad,
  synth_strings,
  bass_lead,
  polysynth,
  halo_pad,
  sweep_pad,
];


export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(INSTRUMENT_CATALOG.map(i => [i.id, i]));

export { FAMILY_LABELS, FAMILY_ORDER, WORLD_INSTRUMENT_HINTS } from './families';
