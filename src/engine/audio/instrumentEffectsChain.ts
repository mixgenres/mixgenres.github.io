import { el } from '@elemaudio/core';
import type { VoiceRenderContext } from '../instruments/types';

type Node = ReturnType<typeof el.const>;

/**
 * Custom Insert-Effects Chain Constructor
 * Processes an instrument's physicalModel.signalChain array into sequential audio processing nodes.
 */
export function applyInstrumentEffectsChain(
  inputSignal: Node,
  chain: Array<string>,
  ctx: VoiceRenderContext
): Node {
  if (!chain || chain.length === 0) return inputSignal;

  let out = inputSignal;

  for (const stage of chain) {
    switch (stage.toLowerCase()) {
      case 'preamp': {
        // Subtle harmonic warming preamp stage
        out = el.mul(1.05, el.tanh(el.mul(1.08, out)));
        break;
      }
      case 'eq': {
        // High-pass rumble filter + presence lift
        const hp = el.highpass(45, 0.707, out);
        out = el.lowpass(16000, 0.9, hp);
        break;
      }
      case 'compressor': {
        // Soft compression stage
        const env = el.env(0.005, 0.12, ctx.gateSignal);
        const compGain = el.sub(1.0, el.mul(0.18, env));
        out = el.mul(compGain, out);
        break;
      }
      case 'distortion': {
        // Warm overdrive saturation
        out = el.tanh(el.mul(1.25, out));
        break;
      }
      case 'filter': {
        // Resonant acoustic bandpass shaping
        const cutoff = Math.min(16000, Math.max(120, ctx.freq * 3.2));
        out = el.svf({ mode: 'lowpass' }, cutoff, 1.1, out);
        break;
      }
      case 'chorus': {
        // Subtle acoustic thickness
        const mod1 = el.mul(0.15, el.cycle(0.8));
        out = el.add(out, el.mul(mod1, out));
        break;
      }
      case 'delay': {
        // Short acoustic slap/refraction
        out = el.add(out, el.mul(0.12, el.delay({ size: 44100 }, el.const({ value: 1200 }), el.const({ value: 0.2 }), out)));
        break;
      }
      case 'reverb': {
        // Early reflection room bloom
        const room = el.mul(0.15, el.svf({ mode: 'lowpass' }, 3200, 0.8, el.delay({ size: 44100 }, el.const({ value: 2200 }), el.const({ value: 0.3 }), out)));
        out = el.add(out, room);
        break;
      }
      case 'cabinet': {
        // Acoustic resonance body cabinet filter
        const lowRes = el.svf({ mode: 'peaking' }, 220, 1.4, out);
        out = el.svf({ mode: 'peaking' }, 2800, 1.8, lowRes);
        break;
      }
      case 'tape': {
        // Smooth tape polynomial compression
        out = el.mul(0.92, el.tanh(el.mul(1.15, out)));
        break;
      }
      case 'spring': {
        // Spring reverb ring
        const ring = el.mul(0.10, el.svf({ mode: 'bandpass' }, 1800, 3.5, out));
        out = el.add(out, ring);
        break;
      }
      case 'dub-send': {
        // Feedback delay send
        out = el.add(out, el.mul(0.08, el.delay({ size: 44100 }, el.const({ value: 4800 }), el.const({ value: 0.35 }), out)));
        break;
      }
      default:
        break;
    }
  }

  return out;
}
