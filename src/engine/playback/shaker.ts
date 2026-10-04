import { SCRAPER_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';
import { URBAN_LATIN_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { KIZOMBA_PATTERN, REGGAETON_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from './dsp';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class ShakerModule implements InstrumentModule {
  id = 'shaker';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      params,
      gateSignal,
      b,
      decayTime
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 5678);
    const durDev = Math.max(0.8, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0x8888) * 0.12));
    const freqDev = randNorm(hitSeed ^ 0x9999) * 200;

    const baseBurst = el.mul(el.noise(), el.adsr(0.001, (0.02 + decayTime * 0.06) * durDev, 0, 0.03 + decayTime * 0.08, gateSignal));
    
    const instId = (params.instrumentId ?? '').toLowerCase();
    const isScraper = SCRAPER_INSTRUMENT_PATTERN.test(instId);
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const urbanResponse = isKizomba ? URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.kizomba : isReggaeton ? URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.reggaeton : URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.default;
    let burst = baseBurst;
    if (isScraper) {
      const strokeDur = Math.max(0.03, Math.min(0.8, decayTime * 0.25));
      const scrapeRate = Math.max(14, Math.min(75, 1.6 / strokeDur));
      const ridgeOsc = el.cycle(scrapeRate);
      const ridgeMod = el.add(el.const({ value: 0.55 }), el.mul(el.const({ value: 0.45 }), ridgeOsc));
      const modulatedNoise = el.mul(ridgeMod, baseBurst);
      burst = el.add(el.mul(0.65, modulatedNoise), el.mul(0.35, baseBurst));
    }

    const bodyPeak = isKizomba
      ? (instId === 'dikanza' ? 1700 + params.body * 1800 + freqDev : urbanResponse.peakBase + params.body * urbanResponse.peakBody + freqDev)
      : urbanResponse.peakBase + params.body * urbanResponse.peakBody + freqDev;
    const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
    const brightNoise = el.mul(urbanResponse.noiseGain + b * urbanResponse.bodyNoiseGain, el.highpass(urbanResponse.highpass + b * 4200 + freqDev, 0.9, burst));
    
    return el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
  }
}
