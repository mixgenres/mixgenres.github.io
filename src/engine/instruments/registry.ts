import { el } from '@elemaudio/core';
import type { VoiceState, TrackParams } from '../elementary/elementaryEngine';
import { midiToFreq } from '../elementary/elementaryEngine';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import type { InstrumentDSPProfile } from '../../data/instruments/physicalDspProfile';
import type { VoiceRenderContext, InstrumentModule } from './types';
import AccordionModule from './accordion';
import BandoneonModule from './bandoneon';
import ConcertinaModule from './concertina';
import ViolinModule from './violin';
import CelloModule from './cello';
import ViolaModule from './viola';
import FiddleModule from './fiddle';
import UprightBassModule from './upright-bass';
import StringsModule from './strings';
import SlowStringsModule from './slow-strings';
import TremoloStringsModule from './tremolo-strings';
import PizzStringsModule from './pizz-strings';
import GuitarModule from './guitar';
import ElectricGuitarModule from './electric-guitar';
import ClavinetModule from './clavinet';
import HarpsichordModule from './harpsichord';
import RequintoModule from './requinto';
import SpanishGuitarModule from './spanish-guitar';
import PalmasModule from './palmas';
import CajonModule from './cajon';
import ZapateadoModule from './zapateado';
import CastanetsModule from './castanets';
import DrumsModule from './drums';
import ShakerModule from './shaker';
import CowbellModule from './cowbell';
import FluteModule from './flute';
import TrumpetModule from './trumpet';
import SaxModule from './sax';
import PianoModule from './piano';
import RhodesModule from './rhodes';
import OrganModule from './organ';
import VoiceModule from './voice';
import SynthModule from './synth';
import BellowsModule from './bellows';
import MarimbaModule from './marimba';

export function buildVoiceContext(
  trackId: string,
  voiceIndex: number,
  voice: VoiceState,
  params: TrackParams
): VoiceRenderContext {
  const pk = `track_${trackId}_voice_${voiceIndex}`;
  const rawFreq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note || 60);
  const freq = Math.max(20, isNaN(rawFreq) ? 440 : rawFreq);
  const gateSignal = el.const({ key: `${pk}_gate`, value: voice.gate ?? 0 });
  const velSignal = el.const({ key: `${pk}_vel`, value: (voice.velocity ?? 0) * (1 - 0.58 * params.mute) });
  const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) / 1000));
  const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${pk}_freq`, value: freq }));
  const safeFreqSignal = el.max(el.const({ value: 20 }), freqSignal);
  const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity ?? 0));
  const b = Math.max(0, Math.min(1, params.brightness * velBoost));
  const rawDecayTime = Math.max(0.05, params.decay);
  const muteDamping = Math.max(0.08, 1 - 0.88 * params.mute);
  const decayTime = rawDecayTime * muteDamping;
  const model = params.performanceMode === 'programmed-electronic' ? 9 : Math.round(params.model);
  const instrumentDef = params.instrumentId ? INSTRUMENTS_BY_ID[params.instrumentId] : undefined;
  const dspProfile: InstrumentDSPProfile | undefined = instrumentDef?.dspProfile;
  const action = voice.actionType ?? (params.bodyTap > 0.5 ? 'golpe' : 'pluck');
  const isMuted = action === 'mute' || params.mute > 0.4;

  // Decaying instruments (Karplus-Strong loops, bells, drums) must not be choked by ADSR
  const isDecayingInstrument = model === 0 || model === 1 || model === 2 || model === 3 || model === 4 ||
    model === 5 || model === 8 || model === 11 || model === 17 || model === 18 || model === 19 ||
    model === 20 || (model >= 21 && model <= 26);

  const attack = voice.attack !== undefined ? voice.attack : (isDecayingInstrument ? 0.0004 : (0.0008 + (1 - b) * 0.01));
  const release = voice.release !== undefined ? voice.release : (isMuted ? 0.012 : (isDecayingInstrument ? 0.045 : 0.06 + decayTime * 0.15));
  const sustain = voice.sustain !== undefined ? voice.sustain : (isDecayingInstrument ? 1.0 : (isMuted ? 0.05 : 0.75 + 0.15 * params.body));
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
const electricGuitarModule = new ElectricGuitarModule();
const drumsModule = new DrumsModule();
const fluteModule = new FluteModule();
const trumpetModule = new TrumpetModule();
const saxModule = new SaxModule();
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
  'harmonica': bellowsModule,
  'harmonium': bellowsModule,
  'melodica': bellowsModule,
  'shō': bellowsModule,

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
  'tuba': bassModule,
  'bassoon': bassModule,

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
  'banjo': guitarModule,
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
  'flute': fluteModule,
  'piccolo': fluteModule,
  'tin-whistle': fluteModule,
  'low-whistle': fluteModule,
  'quena': fluteModule,
  'pan-flute': fluteModule,
  'shakuhachi': fluteModule,
  'xiao': fluteModule,
  'dizi': fluteModule,
  'ryuteki': fluteModule,
  'hichiriki': fluteModule,
  'recorder': fluteModule,
  'ocarina': fluteModule,
  'soprano-sax': saxModule,
  'alto-sax': saxModule,
  'tenor-sax': saxModule,
  'bari-sax': saxModule,
  'oboe': saxModule,
  'english-horn': saxModule,
  'clarinet': saxModule,
  'bagpipes': saxModule,
  'uilleann-pipes': saxModule,

  // Brass
  'trumpet': trumpetModule,
  'muted-trumpet': trumpetModule,
  'trombone': trumpetModule,
  'horn-section': trumpetModule,
  'brass': trumpetModule,
  'french-horn': trumpetModule,

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
  return registry[instrumentId] ?? synthModule;
}
