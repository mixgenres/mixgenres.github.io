import { el } from '@elemaudio/core';
import type { VoiceRenderContext } from './types';

/**
 * Small, genre-aware finishing stage for the existing instrument modules.
 * It deliberately does not replace an instrument's synthesis model; it changes
 * attack/body/brightness/low-end behavior so an authored instrument does not
 * collapse to the neutral patch when a genre lacks a bespoke DSP override.
 */
export function applyGenreInstrumentTreatment(audio: any, ctx: VoiceRenderContext, family?: string): any {
  const g = ctx.genreDialect;
  const inst = (ctx.params.instrumentId ?? '').toLowerCase();
  const fam = String(family ?? '').toLowerCase();
  const isBass = /bass|tuba|bassoon|guitarron|sub/.test(inst) || /bass/.test(fam);
  const isDrum = /drum|percussion|membrane|hand-drum/.test(fam) || /kick|snare|clap|tom|conga|bongo|timbale|cowbell|shaker|tambourine|guiro/.test(inst);
  const isPlucked = /pluck|guitar|string/.test(fam) || /guitar|oud|banjo|mandolin|koto|sitar|charango|tres|cuatro|cavaquinho|harp|kora|pipa|guzheng|shamisen|requinto/.test(inst);
  const isKeys = /key/.test(fam) || /piano|rhodes|organ|clavinet|harpsichord/.test(inst);
  const isBowed = /bowed|string/.test(fam) || /violin|viola|cello|fiddle|string/.test(inst);
  const isWind = /wind|brass|reed/.test(fam) || /sax|trumpet|trombone|horn|flute|clarinet|oboe|bassoon|tuba|whistle/.test(inst);

  let out = audio;

  // Low-end roles get genre-specific body without forcing everything into the sub bus.
  if (isBass) {
    if (g.lowEnd > 1.05) out = el.add(out, el.mul((g.lowEnd - 1) * 0.07, el.lowpass(170, 0.9, out)));
    if (g.lowEnd < 1) out = el.highpass(38 + (1 - g.lowEnd) * 24, 0.7, out);
  }

  // Plucked instruments get genre-specific attack/decay character while retaining
  // their physical string model and authored articulations.
  if (isPlucked) {
    const attack = Math.max(0, g.transient - 0.9);
    if (attack > 0.02) {
      const click = el.mul(attack * 0.045, el.mul(el.highpass(1700 + g.brightness * 700, 0.9, el.noise()), el.adsr(0.00015, 0.0045 * g.attack, 0, 0.002, ctx.gateSignal)));
      out = el.add(out, click);
    }
    if (g.decay < 0.8) out = el.lowpass(Math.min(19000, 10500 + g.brightness * 5000), 1.0, out);
  }

  if (isKeys) {
    // Gospel/jazz/soul/blues retain body; house/disco/electronic tighten the attack.
    const body = Math.max(0, g.body - 1);
    if (body > 0.03) out = el.add(out, el.mul(body * 0.055, el.svf({ mode: 'bandpass' }, 180, 1.7, out)));
    if (g.electronic) {
      const click = el.mul(Math.max(0, g.transient - 0.9) * 0.035, el.mul(el.highpass(2400, 1.0, el.noise()), el.adsr(0.0001, 0.0035, 0, 0.0015, ctx.gateSignal)));
      out = el.add(out, click);
    }
  }

  if (isBowed) {
    // Swing/jazz/blues sustain; funk/rock/electronic strings speak faster.
    if (g.swing > 0.15) out = el.add(out, el.mul(0.025, el.lowpass(4200, 0.8, out)));
    if (g.transient > 1.1) {
      out = el.add(out, el.mul(0.025, el.mul(el.highpass(1800, 1.0, el.pinknoise()), el.adsr(0.0003, 0.006, 0, 0.002, ctx.gateSignal))));
    }
  }

  if (isWind) {
    if (g.brightness < 1) out = el.lowpass(Math.max(5000, 12500 * g.brightness), 1.0, out);
    if (g.transient > 1.1) out = el.add(out, el.mul(0.02, el.mul(el.highpass(2800, 1.0, el.noise()), el.adsr(0.00015, 0.005, 0, 0.002, ctx.gateSignal))));
  }

  if (isDrum) {
    // Electronic/urban genres favor compact transients; acoustic Afro/Latin genres
    // retain more shell/body resonance.
    if (g.electronic) out = el.tanh(el.mul(Math.min(1.12, g.drive), out));
    else if (g.body > 1.08) out = el.add(out, el.mul((g.body - 1) * 0.045, el.lowpass(420, 1.0, out)));
  }

  // Brightness is deliberately a gentle ceiling, not a generic EQ preset.
  const ceiling = Math.min(19000, Math.max(2200, (6500 + ctx.b * 8500) * g.brightness));
  out = el.lowpass(ceiling, 1.0, out);
  return out;
}
