import { DEFAULT_ACTION_BY_FAMILY } from '../../data/performance/defaultInstrumentActions';
import { el } from '@elemaudio/core';
import type { VoiceState, TrackParams } from './elementaryEngine.ts';
import { midiToFreq } from './elementaryEngine.ts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { ENGINE_INSTRUMENT_KEYS, instrumentHasKey } from '../../engine/lookup/instrumentKeys.ts';
import type { InstrumentDSPProfile } from '../../data/sound/schema/dsp-profile';
import { getGenreDialect } from '../band/instrumentGenreDialect.ts';
import type { VoiceRenderContext, InstrumentModule } from './instrumentTypes.ts';
import AccordionModule from './accordion.ts';
import BandoneonModule from './bandoneon.ts';
import ConcertinaModule from './concertina.ts';
import ViolinModule from './violin.ts';
import CelloModule from './cello.ts';
import ViolaModule from './viola.ts';
import FiddleModule from './fiddle.ts';
import UprightBassModule from './upright-bass.ts';
import StringsModule from './strings.ts';
import SlowStringsModule from './slow-strings.ts';
import TremoloStringsModule from './tremolo-strings.ts';
import PizzStringsModule from './pizz-strings.ts';
import GuitarModule from './guitar.ts';
import BanjoModule from './banjo.ts';
import ElectricGuitarModule from './electric-guitar.ts';
import ClavinetModule from './clavinet.ts';
import HarpsichordModule from './harpsichord.ts';
import RequintoModule from './requinto.ts';
import SpanishGuitarModule from './spanish-guitar.ts';
import PalmasModule from './palmas.ts';
import CajonModule from './cajon.ts';
import ZapateadoModule from './zapateado.ts';
import CastanetsModule from './castanets.ts';
import DrumsModule from './drums.ts';
import ShakerModule from './shaker.ts';
import CowbellModule from './cowbell.ts';
import SaxModule from './sax.ts';
import WindModule from './wind.ts';
import BrassModule from './brass.ts';
import TrumpetModule from './trumpet.ts';
import FreeReedModule from './free-reed.ts';
import PipesModule from './pipes.ts';
import PianoModule from './piano.ts';
import RhodesModule from './rhodes.ts';
import OrganModule from './organ.ts';
import VoiceModule from './voice.ts';
import SynthModule from './synth.ts';
import BellowsModule from './bellows.ts';
import MarimbaModule from './marimba.ts';

export function buildVoiceContext(
  trackId: string,
  voiceIndex: number,
  voice: VoiceState,
  params: TrackParams
): VoiceRenderContext {
  const pk = `track_${trackId}_voice_${voiceIndex}`;
  const rawFreq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note || 60);
  const freq = Math.max(20, isNaN(rawFreq) ? 440 : rawFreq);
  const instrumentDef = params.instrumentId ? INSTRUMENTS_BY_ID[params.instrumentId] : undefined;
  const dspProfile: InstrumentDSPProfile | undefined = instrumentDef?.dspProfile;
  const physics = dspProfile?.articulationPhysics;
  const transition = instrumentDef?.transitionMechanics;
  const transitionScale = physics?.noteTransition === 'retrigger' ? 0.55
    : physics?.noteTransition === 'legato' || physics?.noteTransition === 'lip-slur' ? 1.25
    : physics?.noteTransition === 'slide' || physics?.noteTransition === 'bellows-flow' || physics?.noteTransition === 'reservoir-flow' ? 1.5
    : transition?.portamentoCurve === 'stepped-chromatic' ? 0.72
    : transition?.portamentoCurve === 'continuous-exponential' ? 1.28 : 1;
  const gateSignal = el.const({ key: `${pk}_gate`, value: voice.gate ?? 0 });
  const velSignal = el.const({ key: `${pk}_vel`, value: (voice.velocity ?? 0) * (1 - 0.58 * params.mute) });
  const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) * transitionScale / 1000));
  const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${pk}_freq`, value: freq }));
  const safeFreqSignal = el.max(el.const({ value: 20 }), freqSignal);
  const pressureSensitivity = dspProfile?.excitationDynamics.pressureSensitivity ?? 0.5;
  const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity ?? 0)) * (0.8 + pressureSensitivity * 0.4);
  const genreDialect = getGenreDialect(params);
  const nailBrightness = physics ? (physics.fleshVsNail - 0.5) * 0.08 : 0;
  const b = Math.max(0, Math.min(1, params.brightness * velBoost * genreDialect.brightness + nailBrightness));
  const rawDecayTime = Math.max(0.05, params.decay * genreDialect.decay);
  const muteDamping = Math.max(0.08, 1 - 0.88 * params.mute);
  const handDamping = physics ? 1 - physics.handDamping * 0.35 : 1;
  const sustainFactor = physics?.continuousSustain ? 1.08 : 1;
  const decayTime = rawDecayTime * muteDamping * handDamping * sustainFactor;
  const model = params.performanceMode === 'programmed-electronic' ? 9 : Math.round(params.model);
  // A missing gesture must follow the instrument's energy source. Falling back to
  // `pluck` made bowed voices (especially direct/offline renders) enter their
  // pizzicato path even though their authored default excitation is bowing.
  const family = instrumentDef?.family;
  const defaultAction =
    params.bodyTap > 0.5 ? 'golpe'
      : family === 'bellows-and-keys' && instrumentHasKey(params.instrumentId ?? '', ENGINE_INSTRUMENT_KEYS.bellows) ? 'legato'
      : DEFAULT_ACTION_BY_FAMILY[family ?? ''] ?? 'tone';
  const action = voice.action ?? defaultAction;
  const articulation = voice.articulation ?? params.articulation;
  const isMuted = action === 'mute' || params.mute > 0.4;

  // The acoustic sustain class describes note-off behavior; elementary model
  // numbers are shared across instruments and cannot reliably imply it.
  const authoredSustain = instrumentDef?.acousticProfile?.sustain;
  const isDecayingInstrument = authoredSustain
    ? authoredSustain === 'decaying' || authoredSustain === 'short' || authoredSustain === 'percussive'
    : model === 0 || model === 1 || model === 2 || model === 3 || model === 4 ||
      model === 5 || model === 8 || model === 11 || model === 17 || model === 18 || model === 19 ||
      model === 20 || (model >= 21 && model <= 26);

  const attackCoupling = physics ? 0.75 + physics.attackToPitchCoupling * 0.5 : 1;
  const releaseCoupling = physics ? 0.75 + physics.releaseCoupling * 0.5 : 1;
  const attack = voice.attack !== undefined ? voice.attack : (isDecayingInstrument ? 0.0004 * genreDialect.attack : (0.0008 + (1 - b) * 0.01) * genreDialect.attack) * attackCoupling;
  const release = voice.release !== undefined ? voice.release : (isMuted ? 0.012 : (isDecayingInstrument ? 0.045 * genreDialect.decay : (0.06 + decayTime * 0.15) * genreDialect.decay)) * releaseCoupling;
  const sustain = voice.sustain !== undefined ? voice.sustain : (isDecayingInstrument ? 1.0 : (isMuted ? 0.05 : 0.75 + 0.15 * params.body * genreDialect.body));
  const envDecay = voice.decay !== undefined ? voice.decay : (isDecayingInstrument ? 12.0 : (decayTime * (isMuted ? 0.1 : 0.4)));

  const attackSignal = el.const({ key: `${pk}_attack`, value: attack });
  const decaySignal = el.const({ key: `${pk}_decay`, value: envDecay });
  const sustainSignal = el.const({ key: `${pk}_sustain`, value: sustain });
  const releaseSignal = el.const({ key: `${pk}_release`, value: release });
  let env = el.adsr(attackSignal, decaySignal, sustainSignal, releaseSignal, gateSignal);
  if (dspProfile?.excitationDynamics.continuousReservoir?.articulationNeverSilences) {
    env = el.adsr(0.002, 0.018, 1.0, Math.max(0.018, release * 0.35), gateSignal);
  }

  return {
    trackId,
    voiceIndex,
    voice,
    params,
    dspProfile,
    genreDialect,
    pk,
    freq,
    gateSignal,
    velSignal,
    freqSignal,
    safeFreqSignal,
    velBoost,
    b,
    decayTime,
    model,
    action,
    articulation,
    isMuted,
    env,
    isDecayingInstrument,
    attack,
    release,
    sustain,
    envDecay,
    attackSignal,
    decaySignal,
    sustainSignal,
    releaseSignal,
  };
}

const accordionModule = new AccordionModule();
const bandoneonModule = new BandoneonModule();
const concertinaModule = new ConcertinaModule();
const violinModule = new ViolinModule();
const celloModule = new CelloModule();
const violaModule = new ViolaModule();
const fiddleModule = new FiddleModule();
const stringsModule = new StringsModule();
const slowStringsModule = new SlowStringsModule();
const tremoloStringsModule = new TremoloStringsModule();
const pizzStringsModule = new PizzStringsModule();
const bassModule = new UprightBassModule();
const guitarModule = new GuitarModule();
const banjoModule = new BanjoModule();
const electricGuitarModule = new ElectricGuitarModule();
const drumsModule = new DrumsModule();
const saxModule = new SaxModule();
const windModule = new WindModule();
const brassModule = new BrassModule();
const trumpetModule = new TrumpetModule();
const freeReedModule = new FreeReedModule();
const pipesModule = new PipesModule();
const pianoModule = new PianoModule();
const rhodesModule = new RhodesModule();
const organModule = new OrganModule();
const voiceModule = new VoiceModule();
const synthModule = new SynthModule();
const bellowsModule = new BellowsModule();
const marimbaModule = new MarimbaModule();
const shakerModule = new ShakerModule();
const cowbellModule = new CowbellModule();
const clavinetModule = new ClavinetModule();
const harpsichordModule = new HarpsichordModule();
const requintoModule = new RequintoModule();
const spanishGuitarModule = new SpanishGuitarModule();
const palmasModule = new PalmasModule();
const cajonModule = new CajonModule();
const zapateadoModule = new ZapateadoModule();
const castanetsModule = new CastanetsModule();

/**
 * Canonical registry strictly mapping every registered catalog instrument ID
 * directly to its physical synthesis module.
 */
const registry: Record<string, InstrumentModule> = {
  // Accordion & Free Reeds
  'accordion': accordionModule,
  'bandoneon': bandoneonModule,
  'concertina': concertinaModule,
  'harmonica': freeReedModule,
  'melodica': freeReedModule,
  'sho': freeReedModule,
  'harmonium': bellowsModule,

  // Bowed Strings
  'violin': violinModule,
  'erhu': violinModule,
  'jinghu': violinModule,
  'cello': celloModule,
  'viola': violaModule,
  'fiddle': fiddleModule,
  'strings': stringsModule,
  'slow-strings': slowStringsModule,
  'tremolo-strings': tremoloStringsModule,
  'pizz-strings': pizzStringsModule,

  // Basses
  'bass': bassModule,
  'upright-bass': bassModule,
  'slap-bass': bassModule,
  'acoustic-bass': bassModule,
  'pick-bass': bassModule,
  'fretless-bass': bassModule,
  'sub-bass': bassModule,
  'bass-lead': bassModule,
  'guitarron': bassModule,

  // Plucked & Strung
  'guitar': guitarModule,
  'spanish-guitar': spanishGuitarModule,
  'acoustic-guitar': guitarModule,
  'steel-guitar': guitarModule,
  '12-string-guitar': guitarModule,
  'sitar': guitarModule,
  'koto': guitarModule,
  'tres': guitarModule,
  'cuatro': guitarModule,
  'cavaquinho': guitarModule,
  'charango': guitarModule,
  'oud': guitarModule,
  'bouzouki': guitarModule,
  'harp': guitarModule,
  'celtic-harp': guitarModule,
  'orchestral-harp': guitarModule,
  'banjo': banjoModule,
  'mandolin': guitarModule,
  'shamisen': guitarModule,
  'kora': guitarModule,
  'berimbau': guitarModule,
  'guqin': guitarModule,
  'pipa': guitarModule,
  'guzheng': guitarModule,
  'jarana': guitarModule,
  'requinto': requintoModule,
  'dulcimer': guitarModule,
  'slide-guitar': guitarModule,
  'vihuela': guitarModule,

  // Electric Guitars
  'electric-guitar': electricGuitarModule,
  'jazz-guitar': electricGuitarModule,
  'distortion-guitar': electricGuitarModule,
  'muted-guitar': electricGuitarModule,
  'guitar-harmonics': electricGuitarModule,
  'overdrive-guitar': electricGuitarModule,

  // Keyboards
  'clavinet': clavinetModule,
  'harpsichord': harpsichordModule,
  'piano': pianoModule,
  'rhodes': rhodesModule,
  'fm-ep': rhodesModule,
  'organ': organModule,
  'rock-organ': organModule,

  // Voice
  'voice': voiceModule,
  'choir': voiceModule,
  'backing-vocals': voiceModule,

  // Winds
  'soprano-sax': saxModule,
  'alto-sax': saxModule,
  'tenor-sax': saxModule,
  'bari-sax': saxModule,
  'oboe': windModule,
  'english-horn': windModule,
  'clarinet': windModule,
  'bassoon': windModule,
  'flute': windModule,
  'piccolo': windModule,
  'tin-whistle': windModule,
  'low-whistle': windModule,
  'quena': windModule,
  'pan-flute': windModule,
  'shakuhachi': windModule,
  'xiao': windModule,
  'dizi': windModule,
  'ryuteki': windModule,
  'hichiriki': windModule,
  'recorder': windModule,
  'ocarina': windModule,
  'bagpipes': pipesModule,
  'uilleann-pipes': pipesModule,

  // Brass
  'trumpet': trumpetModule,
  'muted-trumpet': trumpetModule,
  'trombone': brassModule,
  'horn-section': brassModule,
  'brass': brassModule,
  'french-horn': brassModule,
  'tuba': brassModule,

  // Percussion - Shakers & Scrapers
  'shaker': shakerModule,
  'maracas': shakerModule,
  'cabasa': shakerModule,
  'guiro': shakerModule,
  'guacharaca': shakerModule,
  'dikanza': shakerModule,

  // Percussion - Bells, Blocks & Metal
  'cowbell': cowbellModule,
  'agogo': cowbellModule,
  'claves': cowbellModule,
  'woodblock': cowbellModule,
  'triangle': cowbellModule,
  'tambourine': cowbellModule,
  'castanets': castanetsModule,
  'palmas': palmasModule,
  'kane': cowbellModule,
  'zapateado': zapateadoModule,
  'gongs': cowbellModule,
  'bones': cowbellModule,
  'foot-stomp': cowbellModule,

  // Tuned Percussion
  'marimba': marimbaModule,
  'vibraphone': marimbaModule,
  'celeste': marimbaModule,
  'glockenspiel': marimbaModule,
  'crystal': marimbaModule,
  'music-box': marimbaModule,
  'xylophone': marimbaModule,
  'tubular-bells': marimbaModule,
  'kalimba': marimbaModule,
  'steel-drums': marimbaModule,

  // Drums & Kit
  'drums': drumsModule,
  'kick': drumsModule,
  'snare': drumsModule,
  'hats': drumsModule,
  'ride': drumsModule,
  'brush-kit': drumsModule,
  'congas': drumsModule,
  'bongos': drumsModule,
  'timbales': drumsModule,
  'cajon': cajonModule,
  'surdo': drumsModule,
  'pandeiro': drumsModule,
  'tamborim': drumsModule,
  'tantan': drumsModule,
  'repinique': drumsModule,
  'cuica': drumsModule,
  'zabumba': drumsModule,
  'bata': drumsModule,
  'darbuka': drumsModule,
  'bodhran': drumsModule,
  'taiko': drumsModule,
  'bombo': drumsModule,
  'bombo-leguero': drumsModule,
  'bombo-andino': drumsModule,
  'tambora': drumsModule,
  'tambor-alegre': drumsModule,
  'cumbia-drum': drumsModule,
  'log-drum': drumsModule,
  'paigu': drumsModule,
  'tabla': drumsModule,
  'hand-percussion': drumsModule,
  'washboard': drumsModule,

  // Synthesizers & Electronic
  'synth': synthModule,
  'synth-brass': synthModule,
  'synth-strings': synthModule,
  'saw-lead': synthModule,
  'square-lead': synthModule,
  'polysynth': synthModule,
  'acid-303': synthModule,
  'warm-pad': synthModule,
  'halo-pad': synthModule,
  'sweep-pad': synthModule,
  'drone': synthModule,
  'noise-sweep': synthModule,
  'dub-echo': synthModule,
  'tape-echo': synthModule,
  'spring-reverb': synthModule,
  'sampler': synthModule,
  'turntable': synthModule,
};

/**
 * Returns the physical instrument module for a registered catalog instrument ID.
 */
export function getInstrumentModule(instrumentId: string): InstrumentModule {
  const module = registry[instrumentId];
  if (!module) throw new Error(`No physical instrument module registered for ${instrumentId}`);
  return module;
}
