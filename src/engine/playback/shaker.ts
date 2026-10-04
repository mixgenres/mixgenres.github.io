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
      decayTime,
      action,
      dspProfile,
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
      // A guiro/guacharaca is driven by contact friction from repeated
      // ridges, not a tuned membrane or an audible sine-rate tremolo. Use a
      // broadband stroke with a woody scrape band and a harder ridge edge.
      const hardness = dspProfile?.physicalDetails?.response.contactHardness ?? 0.65;
      const strokeDuration = action === 'roll' ? 0.16 : action === 'ghost' ? 0.045 : 0.095;
      const stroke = el.adsr(0.0005, strokeDuration * (0.7 + decayTime * 0.2), 0, 0.008, gateSignal);
      const scrapeBody = el.svf({ mode: 'bandpass' }, 620 + hardness * 420, 1.15, el.pinknoise());
      const ridgeEdge = el.svf({ mode: 'bandpass' }, 1450 + b * (900 + hardness * 900), 1.7, el.noise());
      const slideNoise = dspProfile?.mechanicalArtifacts?.slideNoise ?? 0.25;
      burst = el.mul(stroke, el.add(el.mul(0.35, scrapeBody), el.mul(0.45 + slideNoise * 0.20, ridgeEdge),
        el.mul(0.18, el.highpass(2800 + hardness * 1800, 0.8, el.pinknoise()))));
    }

    const bodyPeak = isKizomba
      ? (instId === 'dikanza' ? 1700 + params.body * 1800 + freqDev : urbanResponse.peakBase + params.body * urbanResponse.peakBody + freqDev)
      : urbanResponse.peakBase + params.body * urbanResponse.peakBody + freqDev;
    const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
    const brightNoise = el.mul(urbanResponse.noiseGain + b * urbanResponse.bodyNoiseGain, el.highpass(urbanResponse.highpass + b * 4200 + freqDev, 0.9, burst));
    
    return el.add(el.mul(isScraper ? 0.28 : 0.55, shell), el.mul(isScraper ? 0.38 : 0.65, brightNoise));
  }
}
