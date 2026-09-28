import { buildInstrumentDSPProfile } from './physicalDspProfile';
import type { InstrumentDef, InstrumentFamily, InstrumentTechniqueProfile, TransitionMechanics, EnvironmentalReactivity, SpatialRadiation } from './types';
import { bandoneon } from './definitions/bandoneon';
import { accordion } from './definitions/accordion';
import { piano } from './definitions/piano';
import { fm_ep } from './definitions/fm_ep';
import { rhodes } from './definitions/rhodes';
import { clavinet } from './definitions/clavinet';
import { organ } from './definitions/organ';
import { rock_organ } from './definitions/rock_organ';
import { harpsichord } from './definitions/harpsichord';
import { celeste } from './definitions/celeste';
import { glockenspiel } from './definitions/glockenspiel';
import { crystal } from './definitions/crystal';
import { vibraphone } from './definitions/vibraphone';
import { marimba } from './definitions/marimba';
import { music_box } from './definitions/music_box';
import { xylophone } from './definitions/xylophone';
import { tubular_bells } from './definitions/tubular_bells';
import { dulcimer } from './definitions/dulcimer';
import { guitar } from './definitions/guitar';
import { spanish_guitar } from './definitions/spanish_guitar';
import { acoustic_guitar } from './definitions/acoustic_guitar';
import { steel_guitar } from './definitions/steel_guitar';
import { i_12_string_guitar } from './definitions/12_string_guitar';
import { electric_guitar } from './definitions/electric_guitar';
import { jazz_guitar } from './definitions/jazz_guitar';
import { distortion_guitar } from './definitions/distortion_guitar';
import { muted_guitar } from './definitions/muted_guitar';
import { guitar_harmonics } from './definitions/guitar_harmonics';
import { requinto } from './definitions/requinto';
import { overdrive_guitar } from './definitions/overdrive_guitar';
import { tres } from './definitions/tres';
import { cuatro } from './definitions/cuatro';
import { cavaquinho } from './definitions/cavaquinho';
import { charango } from './definitions/charango';
import { oud } from './definitions/oud';
import { bouzouki } from './definitions/bouzouki';
import { harp } from './definitions/harp';
import { celtic_harp } from './definitions/celtic_harp';
import { concertina } from './definitions/concertina';
import { guitarron } from './definitions/guitarron';
import { mandolin } from './definitions/mandolin';
import { banjo } from './definitions/banjo';
import { sitar } from './definitions/sitar';
import { shamisen } from './definitions/shamisen';
import { kora } from './definitions/kora';
import { berimbau } from './definitions/berimbau';
import { sho } from './definitions/sho';
import { guqin } from './definitions/guqin';
import { pipa } from './definitions/pipa';
import { guzheng } from './definitions/guzheng';
import { jarana } from './definitions/jarana';
import { koto } from './definitions/koto';
import { kalimba } from './definitions/kalimba';
import { bass } from './definitions/bass';
import { upright_bass } from './definitions/upright_bass';
import { slap_bass } from './definitions/slap_bass';
import { acoustic_bass } from './definitions/acoustic_bass';
import { pick_bass } from './definitions/pick_bass';
import { fretless_bass } from './definitions/fretless_bass';
import { sub_bass } from './definitions/sub_bass';
import { synth } from './definitions/synth';
import { violin } from './definitions/violin';
import { viola } from './definitions/viola';
import { cello } from './definitions/cello';
import { strings } from './definitions/strings';
import { slow_strings } from './definitions/slow_strings';
import { tremolo_strings } from './definitions/tremolo_strings';
import { orchestral_harp } from './definitions/orchestral_harp';
import { pizz_strings } from './definitions/pizz_strings';
import { fiddle } from './definitions/fiddle';
import { erhu } from './definitions/erhu';
import { jinghu } from './definitions/jinghu';
import { flute } from './definitions/flute';
import { tin_whistle } from './definitions/tin_whistle';
import { low_whistle } from './definitions/low_whistle';
import { bagpipes } from './definitions/bagpipes';
import { uilleann_pipes } from './definitions/uilleann_pipes';
import { clarinet } from './definitions/clarinet';
import { quena } from './definitions/quena';
import { harmonica } from './definitions/harmonica';
import { soprano_sax } from './definitions/soprano_sax';
import { alto_sax } from './definitions/alto_sax';
import { tenor_sax } from './definitions/tenor_sax';
import { bari_sax } from './definitions/bari_sax';
import { oboe } from './definitions/oboe';
import { bassoon } from './definitions/bassoon';
import { piccolo } from './definitions/piccolo';
import { pan_flute } from './definitions/pan_flute';
import { shakuhachi } from './definitions/shakuhachi';
import { xiao } from './definitions/xiao';
import { dizi } from './definitions/dizi';
import { ryuteki } from './definitions/ryuteki';
import { hichiriki } from './definitions/hichiriki';
import { english_horn } from './definitions/english_horn';
import { recorder } from './definitions/recorder';
import { ocarina } from './definitions/ocarina';
import { trumpet } from './definitions/trumpet';
import { muted_trumpet } from './definitions/muted_trumpet';
import { trombone } from './definitions/trombone';
import { horn_section } from './definitions/horn_section';
import { brass } from './definitions/brass';
import { french_horn } from './definitions/french_horn';
import { tuba } from './definitions/tuba';
import { synth_brass } from './definitions/synth_brass';
import { voice } from './definitions/voice';
import { choir } from './definitions/choir';
import { backing_vocals } from './definitions/backing_vocals';
import { congas } from './definitions/congas';
import { bongos } from './definitions/bongos';
import { zabumba } from './definitions/zabumba';
import { bombo } from './definitions/bombo';
import { bata } from './definitions/bata';
import { cajon } from './definitions/cajon';
import { timbales } from './definitions/timbales';
import { surdo } from './definitions/surdo';
import { pandeiro } from './definitions/pandeiro';
import { bodhran } from './definitions/bodhran';
import { bones } from './definitions/bones';
import { tamborim } from './definitions/tamborim';
import { darbuka } from './definitions/darbuka';
import { tabla } from './definitions/tabla';
import { log_drum } from './definitions/log_drum';
import { cumbia_drum } from './definitions/cumbia_drum';
import { bombo_andino } from './definitions/bombo_andino';
import { vihuela } from './definitions/vihuela';
import { tambora } from './definitions/tambora';
import { tambor_alegre } from './definitions/tambor_alegre';
import { guacharaca } from './definitions/guacharaca';
import { bombo_leguero } from './definitions/bombo_leguero';
import { gongs } from './definitions/gongs';
import { cowbell } from './definitions/cowbell';
import { agogo } from './definitions/agogo';
import { claves } from './definitions/claves';
import { woodblock } from './definitions/woodblock';
import { triangle } from './definitions/triangle';
import { maracas } from './definitions/maracas';
import { shaker } from './definitions/shaker';
import { guiro } from './definitions/guiro';
import { cabasa } from './definitions/cabasa';
import { tambourine } from './definitions/tambourine';
import { castanets } from './definitions/castanets';
import { palmas } from './definitions/palmas';
import { ride } from './definitions/ride';
import { steel_drums } from './definitions/steel_drums';
import { taiko } from './definitions/taiko';
import { paigu } from './definitions/paigu';
import { kane } from './definitions/kane';
import { zapateado } from './definitions/zapateado';
import { drums } from './definitions/drums';
import { brush_kit } from './definitions/brush_kit';
import { kick } from './definitions/kick';
import { snare } from './definitions/snare';
import { hats } from './definitions/hats';
import { acid_303 } from './definitions/acid_303';
import { noise_sweep } from './definitions/noise_sweep';
import { dub_echo } from './definitions/dub_echo';
import { turntable } from './definitions/turntable';
import { melodica } from './definitions/melodica';
import { saw_lead } from './definitions/saw_lead';
import { square_lead } from './definitions/square_lead';
import { warm_pad } from './definitions/warm_pad';
import { synth_strings } from './definitions/synth_strings';
import { bass_lead } from './definitions/bass_lead';
import { polysynth } from './definitions/polysynth';
import { halo_pad } from './definitions/halo_pad';
import { sweep_pad } from './definitions/sweep_pad';

import { cuica } from './definitions/cuica';
import { dikanza } from './definitions/dikanza';
import { drone } from './definitions/drone';
import { foot_stomp } from './definitions/foot_stomp';
import { hand_percussion } from './definitions/hand_percussion';
import { harmonium } from './definitions/harmonium';
import { repinique } from './definitions/repinique';
import { sampler } from './definitions/sampler';
import { slide_guitar } from './definitions/slide_guitar';
import { spring_reverb } from './definitions/spring_reverb';
import { tantan } from './definitions/tantan';
import { tape_echo } from './definitions/tape_echo';
import { washboard } from './definitions/washboard';
export type { InstrumentDef, InstrumentFamily, DrumVoice, InstrumentTechniqueProfile } from './types';

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

/**
 * Engine-facing realism layer. Every catalog entry receives explicit physical
 * assumptions, signal-chain intent, and articulation synthesis metadata.
 * These are normalized controls for the DSP engine, not decorative labels.
 */
function enrichInstrumentPhysics(d: InstrumentDef): InstrumentDef {
  const id = d.id;
  const isString = d.family === 'plucked' || d.family === 'bowed';
  const isPerc = d.family === 'hand-drums' || d.family === 'metal-and-wood' || d.family === 'kit';
  const isWind = d.family === 'winds' || d.family === 'brass';
  const isFreeReed = ['accordion', 'bandoneon', 'concertina', 'harmonium', 'melodica', 'sho', 'harmonica'].includes(id);
  const isWoodwindReed = id.includes('sax') || id.includes('clarinet') || id.includes('oboe') || id.includes('bassoon');
  const isLipReed = id.includes('trumpet') || id.includes('trombone') || id.includes('horn') || id === 'tuba';
  const isStruckAcousticString = id === 'piano' || id === 'dulcimer' || id === 'celeste';

  const bodyConstruction = d.bodyConstruction ?? (d.family === 'plucked'
    ? (/electric|overdrive|distortion|pick-bass|slap-bass|sub-bass/i.test(id) ? 'solid-electric' : 'wood-box')
    : undefined);

  // Never invent a generic GM drum kit for arbitrary unpitched/effect objects.
  // Only actual percussion families may receive the low/mid/high fallback.
  const isPercussionFamily = d.family === 'hand-drums' || d.family === 'metal-and-wood' || d.family === 'body-percussion' || d.family === 'kit';
  const drum = d.drum ?? (d.voicing === 'unpitched' && isPercussionFamily ? { low: 36, mid: 38, high: 42 } : undefined);

  const transitionMechanics: TransitionMechanics = d.transitionMechanics ?? {
    legatoModes: isString ? ['hammer-on', 'pull-off', 'slide'] : isWind ? ['lip-slur', 'valve-cross'] : ['glissando'],
    stringSlideFrictionNoise: isString ? 0.15 : 0,
    valveActuationTimeMs: isWind ? 12 : 0,
    mechanicalKeyClickLevel: isFreeReed || isWind ? 0.08 : 0.02,
    portamentoCurve: 'continuous-linear',
  };

  const environmentalReactivity: EnvironmentalReactivity = d.environmentalReactivity ?? {
    tuningTemperatureCoefficientCents: isLipReed ? 0.8 : isString ? -0.5 : 0.1,
    randomTuningDriftCents: 1.2,
    harmonicSplitProbability: isLipReed || isWind ? 0.02 : 0,
  };

  const spatialRadiation: SpatialRadiation = d.spatialRadiation ?? {
    radiationPattern: isPerc ? 'omnidirectional' : 'cardioid',
    directionalCutoffHz: 2500,
    defaultMicrophoneArray: {
      technique: 'XY',
      distanceMeters: 1.2,
      offAxisDegrees: 15,
    },
  };

  const model = isStruckAcousticString ? 'struck-string'
    : isString ? (d.family === 'bowed' ? 'bowed-string' : 'plucked-string')
    : isPerc ? ((d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 'membrane' : 'metal-impact')
    : isFreeReed || isWoodwindReed ? 'blown-reed'
    : isLipReed ? 'lip-reed'
    : (isWind || id.includes('organ')) ? 'blown-air'
    : d.family === 'voice' ? 'voice-source'
    : d.family === 'electronic' ? (id.includes('fm') ? 'fm-synth' : id.includes('303') || id.includes('lead') || id.includes('pad') || id.includes('synth') ? 'subtractive-synth' : 'sample-playback')
    : 'hybrid';

  const parameters: Record<string, number | undefined> = {
    stiffness: isString ? (id.includes('bass') ? 0.72 : id.includes('guitar') ? 0.58 : 0.45) : undefined,
    damping: isString ? 0.32 : isPerc ? 0.45 : 0.28,
    inharmonicity: isString ? 0.22 : undefined,
    bodyResonance: isString || isStruckAcousticString ? 0.72 : 0.4,
    airResonance: (isWind || isFreeReed) ? 0.7 : undefined,
    membraneTension: isPerc && (d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 0.62 : undefined,
    membraneDamping: isPerc && (d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 0.38 : undefined,
    pickupPosition: d.family === 'plucked' && (id.includes('electric') || (d.bodyConstruction ?? bodyConstruction) === 'solid-electric') ? 0.42 : undefined,
    pickupDistance: d.family === 'plucked' && (id.includes('electric') || (d.bodyConstruction ?? bodyConstruction) === 'solid-electric') ? 0.3 : undefined,
    nonlinearDrive: id.includes('distortion') || id.includes('overdrive') || id.includes('acid') ? 0.72 : 0.08,
    saturation: id.includes('tape') || id.includes('echo') ? 0.48 : 0.12,
    pluckPosition: isString && d.family === 'plucked' ? 0.24 : undefined,
    pluckHardness: isString && d.family === 'plucked' ? (d.excitationType === 'hard-pick' ? 0.75 : 0.55) : undefined,
    reedStiffness: (isFreeReed || isWoodwindReed) ? 0.52 : undefined,
    breathNoise: (isWind || isFreeReed || d.family === 'voice') ? 0.18 : undefined,
    transientSharpness: isPerc ? 0.76 : 0.42,
    noiseAmount: isPerc || isWind ? 0.22 : 0.06,
  };
  const cleanParameters = Object.fromEntries(Object.entries(parameters).filter(([, v]) => v !== undefined)) as Record<string, number>;
  const articulations = d.techniques.articulations;
  return {
    ...d,
    dspProfile: d.dspProfile ?? buildInstrumentDSPProfile(d),
    bodyConstruction: d.bodyConstruction ?? bodyConstruction,
    drum: d.drum ?? drum,
    transitionMechanics,
    environmentalReactivity,
    spatialRadiation,
    physicalModel: d.physicalModel ?? {
      model, parameters: cleanParameters,
      signalChain: d.family === 'electronic' ? ['preamp', 'filter', 'compressor', 'delay', 'reverb'] : ['preamp', 'eq', 'compressor', 'reverb'],
      synthesisNotes: ['Use velocity as excitation energy, not only loudness.', 'Preserve articulation-specific transients and release tails.', 'Apply style profile before humanization; never randomize idiomatic accents.']
    },
    articulationModels: d.articulationModels ?? articulations.map(a => ({
      id: a, method: a, synthesis: 'hybrid' as const,
      parameters: { intensity: 0.65, durationScale: 1, noiseMix: a.includes('ghost') || a.includes('breath') ? 0.3 : 0.08 }
    }))
  };
}

export const ENRICHED_INSTRUMENT_CATALOG = INSTRUMENT_CATALOG.map(enrichInstrumentPhysics);

export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(ENRICHED_INSTRUMENT_CATALOG.map(i => [i.id, i]));

export const FAMILY_LABELS: Record<InstrumentFamily, string> = {
  'bellows-and-keys': 'Bellows & keys',
  plucked: 'Plucked & strung',
  bowed: 'Bowed',
  winds: 'Winds',
  brass: 'Brass',
  voice: 'Voices',
  'hand-drums': 'Hand drums',
  'metal-and-wood': 'Metal & wood',
  kit: 'Kit pieces',
  electronic: 'Electronic',
  'free-reed': 'Free reed',
  'plucked-string': 'Plucked strings',
  'body-percussion': 'Body percussion',
};

export const FAMILY_ORDER: InstrumentFamily[] = [
  'bellows-and-keys', 'plucked', 'bowed', 'winds', 'brass',
  'voice', 'hand-drums', 'metal-and-wood', 'kit', 'electronic',
  'free-reed', 'plucked-string', 'body-percussion',
];

export function instrument(id: string): InstrumentDef {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(
      `UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}". ` +
      `No catalog fallback is permitted.`
    );
  }
  return def;
}

/** Pattern vocabulary aliases. Genre pattern data uses musical roles/kinds
 * (e.g. "keys", "guitar", "percussion") rather than catalog IDs. Keep that
 * vocabulary separate from the concrete GeneralUser patch selected by a track. */
export function instrumentPatternKinds(id: string): string[] {
  const d = INSTRUMENTS_BY_ID[id];
  if (!d) return [];
  const out = new Set<string>([id]);
  if (d.voicing === 'bass') out.add('bass');
  if (d.voicing === 'unpitched') out.add('percussion');
  if (d.voicing === 'single') { out.add('melody'); out.add('lead'); }
  if (d.voicing === 'chord') out.add('harmony');
  if (d.family === 'kit') { out.add('drums'); out.add('percussion'); out.add('pulse'); }
  if (d.family === 'plucked') { out.add('guitar'); out.add('plucked'); }
  if (d.family === 'bowed') { out.add('strings'); if (id === 'violin' || id === 'fiddle') out.add('violin'); if (id === 'cello') out.add('cello'); }
  if (d.family === 'winds' && ['soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax'].includes(id)) out.add('sax');
  if (id === 'flute' || id === 'dizi' || id === 'xiao' || id === 'tin-whistle' || id === 'low-whistle' || id === 'quena') { out.add('flute'); out.add('lead'); }
  if (d.family === 'brass') out.add('brass');
  if (d.family === 'voice') { out.add('voice'); out.add('coro'); }
  if (id === 'backing-vocals' || id === 'choir') out.add('coro');
  if (d.family === 'bellows-and-keys') { out.add('keys'); if (id.includes('accordion') || id.includes('concertina')) out.add('accordion'); }
  if (d.family === 'electronic') { out.add('synth'); out.add('texture'); }
  if (id === 'piano') { out.add('piano'); out.add('keys'); }
  if (id === 'rhodes') { out.add('piano'); out.add('keys'); }
  if (id === 'organ') { out.add('organ'); out.add('keys'); }
  if (id === 'electric-guitar' || id.includes('guitar')) out.add('electric-guitar');
  if (id === 'congas') out.add('congas');
  if (id === 'bongos') out.add('bongos');
  if (id === 'timbales') out.add('timbales');
  if (id === 'guiro' || id === 'guacharaca') { out.add('guiro'); out.add('guacharaca'); }
  if (id === 'pandeiro' || id === 'tamborim') { out.add('hand-percussion'); out.add('pandeiro'); }
  if (id === 'bodhran') { out.add('bodhran'); out.add('percussion'); }
  if (id === 'cajon') { out.add('cajon'); out.add('percussion'); }
  if (id === 'palmas' || id === 'zapateado') { out.add('palmas'); out.add('percussion'); }
  if (id === 'tambora') { out.add('tambora'); out.add('percussion'); }
  if (id === 'taiko' || id === 'kane' || id === 'paigu') { out.add('percussion'); }
  if (id === 'tabla') { out.add('tabla'); out.add('percussion'); }
  if (id === 'shaker') { out.add('shaker'); out.add('percussion'); }
  if (id === 'log-drum') { out.add('log-drum'); out.add('percussion'); out.add('bass'); }
  if (id === 'uilleann-pipes' || id === 'bagpipes') { out.add('uilleann-pipes'); out.add('bagpipes'); out.add('lead'); }
  if (id === 'celtic-harp' || id === 'harp') { out.add('celtic-harp'); out.add('harp'); out.add('harmony'); }
  if (id === 'tres') { out.add('tres'); out.add('guitar'); }
  if (id === 'charango') { out.add('charango'); out.add('guitar'); }
  if (id === 'requinto') { out.add('requinto'); out.add('guitar'); }
  if (id === 'guitarron') { out.add('guitarron'); out.add('bass'); }
  if (id === 'erhu') { out.add('erhu'); out.add('strings'); out.add('lead'); }
  if (id === 'pipa') { out.add('pipa'); out.add('plucked'); out.add('lead'); }
  if (id === 'guzheng' || id === 'guqin') { out.add('guzheng'); out.add('plucked'); out.add('harmony'); }
  if (id === 'koto') { out.add('koto'); out.add('plucked'); out.add('harmony'); }
  if (id === 'shamisen') { out.add('shamisen'); out.add('plucked'); out.add('lead'); }
  if (id === 'shakuhachi') { out.add('shakuhachi'); out.add('flute'); out.add('lead'); }
  if (id === 'steel-drums') { out.add('steel-drums'); out.add('percussion'); out.add('melody'); }
  if (id === 'slide-guitar') { out.add('slide-guitar'); out.add('guitar'); out.add('lead'); }
  if (id === 'harmonium') { out.add('harmonium'); out.add('keys'); out.add('drone'); }
  if (id === 'drone') { out.add('drone'); out.add('pad'); out.add('texture'); }
  return [...out];
}

export function isPercussive(id: string): boolean {
  const def = INSTRUMENTS_BY_ID[id];
  return !!def && (def.kit === true || def.drum !== undefined);
}

export function cleanInstrumentName(name: string): string {
  return name
    .replace(/\s*\([^)]*GM[^)]*\)/gi, '')
    .replace(/\s*\([^)]*approx[^)]*\)/gi, '')
    .replace(/\s*\(GM approximation\)/gi, '')
    .replace(/GM approximation/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Instruments a world tends to reach for first, by world id.
 * Maps to canonical 32 genre baseline instrumentation.
 */
export const WORLD_INSTRUMENT_HINTS: Record<string, string[]> = {
  afrobeats: ['sub-bass', 'log-drum', 'electric-guitar', 'shaker', 'tenor-sax'],
  bachata: ['requinto', 'guitar', 'bass', 'bongos', 'guiro'],
  blues: ['electric-guitar', 'bass', 'drums', 'piano', 'harmonica'],
  brazilian: ['acoustic-guitar', 'surdo', 'pandeiro', 'cavaquinho', 'cuica'],
  country: ['steel-guitar', 'upright-bass', 'brush-kit', 'fiddle', 'banjo'],
  cumbia: ['bass', 'accordion', 'guacharaca', 'tambora', 'guitar'],
  disco: ['bass', 'electric-guitar', 'drums', 'piano', 'horn-section'],
  electronic: ['drums', 'bass-lead', 'warm-pad', 'saw-lead', 'polysynth'],
  folk: ['guitar', 'fiddle', 'upright-bass', 'bodhran', 'mandolin'],
  funk: ['slap-bass', 'electric-guitar', 'clavinet', 'drums', 'horn-section'],
  gospel: ['piano', 'organ', 'bass', 'drums', 'electric-guitar'],
  'hip-hop': ['drums', 'sub-bass', 'piano', 'turntable', 'warm-pad'],
  house: ['drums', 'sub-bass', 'rhodes', 'saw-lead', 'synth'],
  jazz: ['upright-bass', 'ride', 'piano', 'trumpet', 'tenor-sax'],
  kizomba: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  tango: ['bandoneon', 'piano', 'upright-bass', 'violin', 'cello'],
  flamenco: ['spanish-guitar', 'cajon', 'palmas', 'zapateado', 'flute'],
  metal: ['distortion-guitar', 'overdrive-guitar', 'bass', 'drums', 'guitar-harmonics'],
  'r-and-b': ['bass', 'electric-guitar', 'rhodes', 'drums', 'warm-pad'],
  reggae: ['sub-bass', 'organ', 'electric-guitar', 'drums', 'horn-section'],
  reggaeton: ['sub-bass', 'drums', 'synth', 'electric-guitar', 'maracas'],
  rock: ['overdrive-guitar', 'bass', 'drums', 'electric-guitar', 'organ'],
  salsa: ['piano', 'congas', 'bass', 'timbales', 'trumpet'],
  ska: ['bass', 'drums', 'electric-guitar', 'organ', 'trumpet'],
  soul: ['bass', 'electric-guitar', 'organ', 'drums', 'horn-section'],
  swing: ['upright-bass', 'drums', 'piano', 'tenor-sax', 'jazz-guitar'],
  timba: ['piano', 'bass', 'timbales', 'congas', 'trombone'],
  zouk: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  'drum-and-bass': ['drums', 'sub-bass', 'synth', 'warm-pad', 'saw-lead'],
  industrial: ['drums', 'distortion-guitar', 'sub-bass', 'synth', 'acid-303'],
  'punk-hardcore': ['overdrive-guitar', 'distortion-guitar', 'bass', 'drums', 'electric-guitar'],
  'uk-bass': ['sub-bass', 'drums', 'acid-303', 'synth', 'warm-pad'],
};


/** Return the authored technique profile for an instrument, with a safe fallback. */
export function techniqueProfile(id: string): InstrumentTechniqueProfile {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(`UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}" has no technique profile.`);
  }
  return def.techniques;
}

/** Pick style-specific idiomatic articulations without inventing unsupported gestures. */
export function genreTechniquesForInstrument(id: string, styleId?: string): string[] {
  const p = techniqueProfile(id);
  if (!styleId) return p.articulations;
  const key = styleId.toLowerCase();
  for (const [style, arts] of Object.entries(p.genreTechniques ?? {})) {
    if (key === style || key.includes(style) || style.includes(key)) return arts.filter(a => p.articulations.includes(a));
  }
  return p.articulations;
}
