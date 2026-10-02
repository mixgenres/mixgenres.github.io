import type { InstrumentDef } from './schema/instrument-def';
import { bandoneon } from './catalog/bellows-and-keys/bandoneon';
import { accordion } from './catalog/bellows-and-keys/accordion';
import { piano } from './catalog/bellows-and-keys/piano';
import { rhodes } from './catalog/bellows-and-keys/rhodes';
import { clavinet } from './catalog/bellows-and-keys/clavinet';
import { organ } from './catalog/bellows-and-keys/organ';
import { glockenspiel } from './catalog/metal-and-wood/glockenspiel';
import { vibraphone } from './catalog/metal-and-wood/vibraphone';
import { guitar } from './catalog/plucked/guitar';
import { spanish_guitar } from './catalog/plucked/spanish-guitar';
import { acoustic_guitar } from './catalog/plucked/acoustic-guitar';
import { steel_guitar } from './catalog/plucked/steel-guitar';
import { electric_guitar } from './catalog/plucked/electric-guitar';
import { jazz_guitar } from './catalog/plucked/jazz-guitar';
import { distortion_guitar } from './catalog/plucked/distortion-guitar';
import { guitar_harmonics } from './catalog/plucked/guitar-harmonics';
import { requinto } from './catalog/plucked/requinto';
import { overdrive_guitar } from './catalog/plucked/overdrive-guitar';
import { tres } from './catalog/plucked/tres';
import { cavaquinho } from './catalog/plucked/cavaquinho';
import { harp } from './catalog/plucked/harp';
import { celtic_harp } from './catalog/plucked/celtic-harp';
import { guitarron } from './catalog/plucked/guitarron';
import { mandolin } from './catalog/plucked/mandolin';
import { banjo } from './catalog/plucked/banjo';
import { sitar } from './catalog/plucked/sitar';
import { bass } from './catalog/plucked/bass';
import { upright_bass } from './catalog/plucked/upright-bass';
import { slap_bass } from './catalog/plucked/slap-bass';
import { acoustic_bass } from './catalog/plucked/acoustic-bass';
import { sub_bass } from './catalog/electronic/sub-bass';
import { synth } from './catalog/electronic/synth';
import { violin } from './catalog/bowed/violin';
import { cello } from './catalog/bowed/cello';
import { strings } from './catalog/bowed/strings';
import { fiddle } from './catalog/bowed/fiddle';
import { flute } from './catalog/winds/flute';
import { tin_whistle } from './catalog/winds/tin-whistle';
import { clarinet } from './catalog/winds/clarinet';
import { harmonica } from './catalog/winds/harmonica';
import { soprano_sax } from './catalog/winds/soprano-sax';
import { alto_sax } from './catalog/winds/alto-sax';
import { tenor_sax } from './catalog/winds/tenor-sax';
import { trumpet } from './catalog/brass/trumpet';
import { trombone } from './catalog/brass/trombone';
import { horn_section } from './catalog/brass/horn-section';
import { brass } from './catalog/brass/brass';
import { voice } from './catalog/voice/voice';
import { backing_vocals } from './catalog/voice/backing-vocals';
import { congas } from './catalog/hand-drums/congas';
import { bongos } from './catalog/hand-drums/bongos';
import { zabumba } from './catalog/hand-drums/zabumba';
import { bombo } from './catalog/hand-drums/bombo';
import { cajon } from './catalog/hand-drums/cajon';
import { timbales } from './catalog/hand-drums/timbales';
import { surdo } from './catalog/hand-drums/surdo';
import { pandeiro } from './catalog/hand-drums/pandeiro';
import { tamborim } from './catalog/hand-drums/tamborim';
import { log_drum } from './catalog/hand-drums/log-drum';
import { cumbia_drum } from './catalog/hand-drums/cumbia-drum';
import { tambora } from './catalog/hand-drums/tambora';
import { tambor_alegre } from './catalog/hand-drums/tambor-alegre';
import { guacharaca } from './catalog/metal-and-wood/guacharaca';
import { cowbell } from './catalog/metal-and-wood/cowbell';
import { claves } from './catalog/metal-and-wood/claves';
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
import { saw_lead } from './catalog/electronic/saw-lead';
import { warm_pad } from './catalog/electronic/warm-pad';
import { bass_lead } from './catalog/electronic/bass-lead';
import { polysynth } from './catalog/electronic/polysynth';
import { halo_pad } from './catalog/electronic/halo-pad';

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
  rhodes,
  clavinet,
  organ,
  glockenspiel,
  vibraphone,
  guitar,
  spanish_guitar,
  acoustic_guitar,
  steel_guitar,
  electric_guitar,
  jazz_guitar,
  distortion_guitar,
  guitar_harmonics,
  requinto,
  overdrive_guitar,
  tres,
  cavaquinho,
  harp,
  celtic_harp,
  guitarron,
  mandolin,
  banjo,
  sitar,
  bass,
  upright_bass,
  slap_bass,
  acoustic_bass,
  sub_bass,
  synth,
  violin,
  cello,
  strings,
  fiddle,
  flute,
  tin_whistle,
  clarinet,
  harmonica,
  soprano_sax,
  alto_sax,
  tenor_sax,
  trumpet,
  trombone,
  horn_section,
  brass,
  voice,
  backing_vocals,
  congas,
  bongos,
  zabumba,
  bombo,
  cajon,
  timbales,
  surdo,
  pandeiro,
  tamborim,
  log_drum,
  cumbia_drum,
  tambora,
  tambor_alegre,
  guacharaca,
  cowbell,
  claves,
  triangle,
  maracas,
  shaker,
  guiro,
  cabasa,
  tambourine,
  castanets,
  palmas,
  ride,
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
  saw_lead,
  warm_pad,
  bass_lead,
  polysynth,
  halo_pad,
];


export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(INSTRUMENT_CATALOG.map(i => [i.id, i]));

export { FAMILY_LABELS, FAMILY_ORDER, WORLD_INSTRUMENT_HINTS } from './families';
