import { BELLOWS_LEGATO_INSTRUMENT_PATTERN, DEFAULT_ACTION_BY_FAMILY } from '../../data/performance/defaultInstrumentActions';
import { el } from '@elemaudio/core';
import type { VoiceState, TrackParams } from './elementaryEngine.ts';
import { midiToFreq } from './elementaryEngine.ts';
import type { InstrumentDSPProfile } from '../../data/sound/schema/dsp-profile';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getGenreDialect } from '../band/instrumentGenreDialect.ts';
import type { VoiceRenderContext, InstrumentModule } from './instrumentTypes.ts';
import AccordionModule from './accordion.ts';
import BandoneonModule from './bandoneon.ts';
import ConcertinaModule from './concertina.ts';
import ViolinModule from './violin.ts';
import StringsModule from './strings.ts';
import CelloModule from './cello.ts';
import ViolaModule from './viola.ts';
import UprightBassModule from './upright-bass.ts';
import GuitarModule from './guitar.ts';
import BanjoModule from './banjo.ts';
import RequintoModule from './requinto.ts';
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
import ClavinetModule from './clavinet.ts';
import HarpsichordModule from './harpsichord.ts';

const accordion = new AccordionModule();
const bandoneon = new BandoneonModule();
const concertina = new ConcertinaModule();
const violin = new ViolinModule();
const strings = new StringsModule();
const cello = new CelloModule();
const viola = new ViolaModule();
const bass = new UprightBassModule();
const guitar = new GuitarModule();
const banjo = new BanjoModule();
const requinto = new RequintoModule();
const drums = new DrumsModule();
const shaker = new ShakerModule();
const cowbell = new CowbellModule();
const sax = new SaxModule();
const wind = new WindModule();
const brass = new BrassModule();
const trumpet = new TrumpetModule();
const freeReed = new FreeReedModule();
const pipes = new PipesModule();
const piano = new PianoModule();
const rhodes = new RhodesModule();
const organ = new OrganModule();
const voice = new VoiceModule();
const synth = new SynthModule();
const bellows = new BellowsModule();
const marimba = new MarimbaModule();
const palmas = new PalmasModule();
const cajon = new CajonModule();
const zapateado = new ZapateadoModule();
const castanets = new CastanetsModule();
const clavinet = new ClavinetModule();
const harpsichord = new HarpsichordModule();

/** Resolve a real catalog instrument to a shared synthesis implementation by its physical family. */
export function getInstrumentModule(instrumentId: string): InstrumentModule {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) throw new Error(`No catalog instrument registered for ${instrumentId}`);
  if (instrumentId === 'bandoneon') return bandoneon;
  if (instrumentId === 'accordion') return accordion;
  if (instrumentId === 'concertina') return concertina;
  if (instrumentId === 'piano' || instrumentId === 'harpsichord' || instrumentId === 'celeste' || instrumentId === 'music-box') return instrumentId === 'harpsichord' ? harpsichord : piano;
  if (instrumentId === 'rhodes' || instrumentId === 'fm-ep') return rhodes;
  if (instrumentId === 'clavinet') return clavinet;
  if (instrumentId === 'organ') return organ;
  if (instrumentId === 'trumpet') return trumpet;
  if (instrumentId === 'trombone' || instrumentId === 'horn-section' || instrumentId === 'french-horn' || instrumentId === 'tuba') return brass;
  if (instrumentId === 'viola') return viola;
  if (instrumentId === 'cello') return cello;
  if (instrumentId === 'violin' || instrumentId === 'erhu' || instrumentId === 'jinghu' || instrumentId === 'sarangi' || instrumentId === 'haegeum') return violin;
  if (instrumentId === 'string-ensemble') return strings;
  if (instrumentId === 'upright-bass' || instrumentId === 'bass' || instrumentId === 'guitarron') return bass;
  if (instrumentId === 'banjo') return banjo;
  if (instrumentId === 'requinto') return requinto;
  if (instrumentId === 'palmas') return palmas;
  if (instrumentId === 'cajon') return cajon;
  if (instrumentId === 'zapateado') return zapateado;
  if (instrumentId === 'castanets') return castanets;
  if (instrumentId === 'güira' || instrumentId === 'guira' || instrumentId === 'guiro' || instrumentId === 'guacharaca' || instrumentId === 'dikanza' || instrumentId === 'shaker' || instrumentId === 'maracas' || instrumentId === 'cabasa') return shaker;
  if (instrumentId === 'cowbell' || instrumentId === 'agogo' || instrumentId === 'claves' || instrumentId === 'woodblock' || instrumentId === 'triangle' || instrumentId === 'gongs' || instrumentId === 'kane' || instrumentId === 'bones') return cowbell;
  if (instrumentId === 'marimba' || instrumentId === 'balafon' || instrumentId === 'marimba-de-chonta' || instrumentId === 'gamelan-metallophone' || instrumentId === 'vibraphone' || instrumentId === 'xylophone' || instrumentId === 'glockenspiel' || instrumentId === 'tubular-bells' || instrumentId === 'steel-drums' || instrumentId === 'kalimba') return marimba;
  if (instrumentId === 'alto-sax' || instrumentId === 'tenor-sax' || instrumentId === 'soprano-sax' || instrumentId === 'bari-sax') return sax;
  if (instrumentId === 'bagpipes' || instrumentId === 'uilleann-pipes') return pipes;
  if (instrumentId === 'sho' || instrumentId === 'harmonica' || instrumentId === 'melodica') return freeReed;
  if (instrumentId === 'harmonium') return bellows;
  if (instrumentId === 'voice' || instrumentId === 'choir') return voice;
  if (instrumentId === 'synth' || instrumentId === 'sampler' || instrumentId === 'turntable') return synth;
  if (def.kit || def.drum || def.family === 'hand-drums' || def.family === 'kit' || def.family === 'body-percussion') return drums;
  if (def.family === 'winds') return wind;
  if (def.family === 'brass') return brass;
  if (def.family === 'bowed') return violin;
  if (def.family === 'plucked' || def.family === 'plucked-string') return guitar;
  if (def.family === 'metal-and-wood') return marimba;
  if (def.family === 'electronic') return synth;
  if (def.family === 'bellows-and-keys') return bellows;
  if (def.family === 'voice') return voice;
  return drums;
}

/** Shared physical/acoustic parameters. Style-resolved patches still honor the instrument's physical model. */
export function resolveVoiceParameters(voice: VoiceState, params: TrackParams) {
  const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity ?? 0));
  const fallbackDialect = getGenreDialect(params);
  const instrumentDef = INSTRUMENTS_BY_ID[params.instrumentId ?? ''];
  const authored = instrumentDef?.dspProfile?.genreDialects[params.genreId ?? ''];
  const genreDialect = authored ? { ...fallbackDialect, brightness: authored.brightness ?? 1,
    attack: authored.attack ?? 1, body: authored.body ?? 1, decay: 1 } : fallbackDialect;
  const b = Math.max(0, Math.min(1, (params.brightness + (voice.harmonicRichnessDelta ?? 0)) * velBoost * genreDialect.brightness));
  const rawDecayTime = Math.max(0.05, params.decay * genreDialect.decay * (voice.decayTimeFactorScale ?? 1));
  const muteDamping = Math.max(0.08, 1 - 0.88 * params.mute);
  const decayTime = rawDecayTime * muteDamping;
  const model = Math.round(params.model);
  const dspProfile: InstrumentDSPProfile | undefined = instrumentDef?.dspProfile;
  const action = voice.action ?? (params.bodyTap > 0.5 ? 'golpe'
    : instrumentDef?.family === 'bellows-and-keys' && BELLOWS_LEGATO_INSTRUMENT_PATTERN.test(params.instrumentId ?? '')
      ? 'legato' : DEFAULT_ACTION_BY_FAMILY[instrumentDef?.family ?? ''] ?? 'tone');
  const articulation = voice.articulation ?? params.articulation;
  const isMuted = action === 'mute' || params.mute > 0.4;
  const authoredSustain = instrumentDef?.acousticProfile?.sustain;
  const isDecayingInstrument = authoredSustain
    ? authoredSustain === 'decaying' || authoredSustain === 'short' || authoredSustain === 'percussive'
    : model === 0 || model === 1 || model === 2 || model === 3 || model === 4 || model === 5 || model === 8 || model === 11 || model === 17 || model === 18 || model === 19 || model === 20 || (model >= 21 && model <= 26);
  let attack = voice.attack !== undefined ? voice.attack : (isDecayingInstrument ? 0.0004 * genreDialect.attack : (0.0008 + (1 - b) * 0.01) * genreDialect.attack);
  let release = voice.release !== undefined ? voice.release : (isMuted ? 0.012 : (isDecayingInstrument ? 0.045 * genreDialect.decay : (0.06 + decayTime * 0.15)));
  let sustain = voice.sustain !== undefined ? voice.sustain : (isDecayingInstrument ? 1.0 : (isMuted ? 0.05 : 0.75 + 0.15 * params.body * genreDialect.body));
  let envDecay = voice.decay !== undefined ? voice.decay : (isDecayingInstrument ? 12.0 : (decayTime * (isMuted ? 0.1 : 0.4)));
  if (dspProfile?.excitationDynamics.continuousReservoir?.articulationNeverSilences) {
    attack = voice.attack ?? 0.002; envDecay = voice.decay ?? 0.018; sustain = voice.sustain ?? 1;
    release = voice.release ?? Math.max(0.018, release * 0.35);
  }
  return { velBoost, genreDialect, b, decayTime, model, instrumentDef, dspProfile, action, articulation, isMuted, isDecayingInstrument, attack, release, sustain, envDecay };
}

export function buildVoiceContext(trackId: string, voiceIndex: number, voice: VoiceState, params: TrackParams): VoiceRenderContext {
  const pk = `track_${trackId}_voice_${voiceIndex}`;
  const rawFreq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note || 60);
  const freq = Math.max(20, Number.isFinite(rawFreq) ? rawFreq : 440);
  const gateSignal = el.const({ key: `${pk}_gate`, value: voice.gate ?? 0 });
  const velSignal = el.const({ key: `${pk}_vel`, value: (voice.velocity ?? 0) * (1 - 0.58 * params.mute) });
  const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) / 1000));
  const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${pk}_freq`, value: freq }));
  const safeFreqSignal = el.max(el.const({ value: 20 }), freqSignal);
  const { velBoost, genreDialect, b, decayTime, model, dspProfile, action, articulation, isMuted, isDecayingInstrument, attack, release, sustain, envDecay } = resolveVoiceParameters(voice, params);
  const attackSignal = el.const({ key: `${pk}_attack`, value: attack });
  const decaySignal = el.const({ key: `${pk}_decay`, value: envDecay });
  const sustainSignal = el.const({ key: `${pk}_sustain`, value: sustain });
  const releaseSignal = el.const({ key: `${pk}_release`, value: release });
  const env = el.adsr(attackSignal, decaySignal, sustainSignal, releaseSignal, gateSignal);
  return { trackId, voiceIndex, voice, params, dspProfile, genreDialect, pk, freq, gateSignal, velSignal, freqSignal, safeFreqSignal,
    velBoost, b, decayTime, model, action, articulation, isMuted, env, isDecayingInstrument, attack, release, sustain, envDecay,
    attackSignal, decaySignal, sustainSignal, releaseSignal };
}
