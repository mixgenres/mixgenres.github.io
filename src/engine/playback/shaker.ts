import { instrumentHasKey, ENGINE_INSTRUMENT_KEYS } from '../../engine/lookup/instrumentKeys.ts';
import { URBAN_LATIN_INSTRUMENT_RESPONSE, SCRAPER_STROKE_RESPONSE as K } from '../../data/sound/dsp/genreInstrumentProfiles';
import { KIZOMBA_PATTERN, REGGAETON_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
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

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isScraper = instrumentHasKey(instId, ENGINE_INSTRUMENT_KEYS.scraper);
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''}`);
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''}`);

    if (isScraper) {
      return this.renderScrape(ctx, hitSeed, isKizomba && instId === 'dikanza');
    }

    const baseBurst = el.mul(el.noise(), el.adsr(0.001, (0.02 + decayTime * 0.06) * durDev, 0, 0.03 + decayTime * 0.08, gateSignal));
    const urbanResponse = isKizomba ? URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.kizomba : isReggaeton ? URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.reggaeton : URBAN_LATIN_INSTRUMENT_RESPONSE.shaker.default;
    const burst = baseBurst;

    const bodyPeak = urbanResponse.peakBase + params.body * urbanResponse.peakBody + freqDev;
    const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
    const brightNoise = el.mul(urbanResponse.noiseGain + b * urbanResponse.bodyNoiseGain, el.highpass(urbanResponse.highpass + b * 4200 + freqDev, 0.9, burst));
    
    return el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
  }

  /**
   * Scraper strokes (guacharaca, guiro, cabasa, dikanza). Engine holds the signal graph only;
   * every tuning number lives in SCRAPER_STROKE_RESPONSE (src/data/sound/dsp/genreInstrumentProfiles.ts).
   * Each hit draws fresh random values through a latch on the gate, so no two strokes match.
   */
  private renderScrape(ctx: VoiceRenderContext, hitSeed: number, isDikanzaKizomba: boolean): AudioSignal {
    const { params, gateSignal, velSignal, b, decayTime, pk } = ctx;

    // Fresh -1..1 draw on every gate rising edge
    const draw = (n: number) => el.latch(gateSignal, el.noise({ key: `${pk}_scr_n${n}`, seed: hitSeed + n * 7919 }));
    const rLen = draw(1);
    const rRate = draw(2);
    const rTone = draw(3);
    const rLevel = draw(4);

    const vel = el.max(0, el.min(1, velSignal));
    const lenScale = Math.max(K.strokeScaleMin, Math.min(K.strokeScaleMax, K.strokeScaleBase + decayTime));

    const strokeLen = el.mul(lenScale, el.mul(el.add(K.strokeBaseSec, el.mul(K.strokeVelSec, vel)), el.add(1, el.mul(K.strokeJitter, rLen))));
    const env = el.adsr(K.attackSec, strokeLen, 0, K.releaseSec, gateSignal);

    // Ridge ticks: rate falls as the stroke slows (env 1 -> 0)
    const baseRate = el.mul(el.add(1, el.mul(K.ridgeRateJitter, rRate)), el.add(K.ridgeRateBaseHz, el.mul(K.ridgeRateVelHz, vel)));
    const rate = el.mul(baseRate, el.add(K.ridgeSlowFloor, el.mul(1 - K.ridgeSlowFloor, env)));
    const ticksA = el.train(rate);
    const ticksB = el.train(el.mul(rate, K.ridgeBeatRatio));
    const ticks = el.lowpass(K.ridgeLowpassHz, K.ridgeLowpassQ, el.add(el.mul(K.ridgeMixA, ticksA), el.mul(K.ridgeMixB, ticksB)));
    const ridgeMod = el.add(K.ridgeFloor, el.mul(K.ridgeDepth, ticks));

    const centre = isDikanzaKizomba
      ? K.dikanzaKizombaCentreHz + params.body * K.dikanzaKizombaBodyHz
      : K.raspCentreBaseHz + params.body * K.raspCentreBodyHz + b * K.raspCentreBrightHz;
    const centreSig = el.mul(centre, el.add(1, el.mul(K.raspCentreJitter, rTone)));
    const rasp = el.svf({ mode: 'bandpass' }, centreSig, K.raspQ, el.noise({ key: `${pk}_scr_body`, seed: hitSeed ^ 0x51ed }));

    const knockEnv = el.adsr(0.001, K.knockDecaySec, 0, K.knockReleaseSec, gateSignal);
    const knock = el.mul(knockEnv, el.svf({ mode: 'bandpass' }, K.knockHz, K.knockQ, el.noise({ key: `${pk}_scr_knock`, seed: hitSeed ^ 0xa11ce })));

    const level = el.add(K.levelBase, el.mul(K.levelJitter, rLevel));
    const scrape = el.mul(level, el.mul(env, el.mul(ridgeMod, rasp)));
    return el.add(el.mul(K.outputGain, scrape), el.mul(K.knockGain, knock));
  }
}
