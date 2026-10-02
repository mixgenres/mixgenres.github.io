import { GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS } from '../../data/instruments/idClassifiers';
import { el } from '@elemaudio/core';
import type { VoiceRenderContext, AudioSignal } from './instrumentTypes.ts';

/**
 * Small, genre-aware finishing stage for the existing instrument modules.
 * This stage only shapes the selected instrument's rendered signal. Instrument
 * attacks and mechanical noise belong to the instrument module, so this layer
 * must not add generic noise sources that can read as extra instruments.
 */
export function applyGenreInstrumentTreatment(audio: AudioSignal, ctx: VoiceRenderContext, family?: string): AudioSignal {
  const g = ctx.genreDialect;
  const inst = (ctx.params.instrumentId ?? '').toLowerCase();
  const fam = String(family ?? '').toLowerCase();
  const isBass = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.bassInstrument.test(inst) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.bassFamily.test(fam);
  const isDrum = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.drumFamily.test(fam) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.drumInstrument.test(inst);
  const isPlucked = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.pluckedFamily.test(fam) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.pluckedInstrument.test(inst);
  const isKeys = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.keysFamily.test(fam) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.keysInstrument.test(inst);
  const isBowed = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.bowedFamily.test(fam) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.bowedInstrument.test(inst);
  const isWind = GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.windFamily.test(fam) || GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS.windInstrument.test(inst);

  let out = audio;

  // Low-end roles get genre-specific body without forcing everything into the sub bus.
  if (isBass) {
    if (g.lowEnd > 1.05) out = el.add(out, el.mul((g.lowEnd - 1) * 0.07, el.lowpass(170, 0.9, out)));
    if (g.lowEnd < 1) out = el.highpass(38 + (1 - g.lowEnd) * 24, 0.7, out);
  }

  // Plucked instruments get genre-specific attack/decay character while retaining
  // their physical string model and authored articulations.
  if (isPlucked) {
    if (g.decay < 0.8) out = el.lowpass(Math.min(19000, 10500 + g.brightness * 5000), 1.0, out);
  }

  if (isKeys) {
    // Gospel/jazz/soul/blues retain body; house/disco/electronic tighten the attack.
    const body = Math.max(0, g.body - 1);
    if (body > 0.03) out = el.add(out, el.mul(body * 0.055, el.svf({ mode: 'bandpass' }, 180, 1.7, out)));
  }

  if (isBowed) {
    // Swing/jazz/blues sustain; funk/rock/electronic strings speak faster.
    if (g.swing > 0.15) out = el.add(out, el.mul(0.025, el.lowpass(4200, 0.8, out)));
  }

  if (isWind) {
    if (g.brightness < 1) out = el.lowpass(Math.max(5000, 12500 * g.brightness), 1.0, out);
  }

  if (isDrum) {
    // Electronic/urban genres favor compact transients; acoustic Afro/Latin genres
    // retain more shell/body resonance.
    if (!g.electronic && g.body > 1.08) out = el.add(out, el.mul((g.body - 1) * 0.045, el.lowpass(420, 1.0, out)));
  }

  return out;
}
