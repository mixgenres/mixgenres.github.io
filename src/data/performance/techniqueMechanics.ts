import type { InstrumentDef } from '../instruments/schema/instrument-def';

export type ExcitationSurface = 'string' | 'muted-string' | 'afterlength' | 'soundboard' | 'air-column' | 'reed' | 'membrane' | 'object' | 'electronic' | 'voice';
export interface TechniqueMechanics {
  surface: ExcitationSurface;
  pitchIdentity: 'pitched' | 'unpitched';
  excitation: string;
  damping: number;
  bowPressure?: number;
  bowVelocity?: number;
  pluckPosition?: number;
  /** A bounded impulse/rasp lifetime, including the short insert-effect tail. */
  tailSeconds?: number;
  /** An implementation assessment, never certification by catalog membership. */
  fidelity: 'approximate' | 'symbolic';
}

export const normalizeTechnique = (name: string) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[_\s]+/g, '-');

/** Articulation does not choose an exciter. Source-changing techniques are
 * interpreted in the instrument's mechanics, rather than a global word list.
 * Coefficients are design estimates; research supports the mechanism only. */
export function techniqueMechanics(def: InstrumentDef, name: string, excitation: string = def.excitationType ?? 'fingerpad'): TechniqueMechanics {
  const g = normalizeTechnique(name);
  const bowed = def.family === 'bowed';
  const upright = def.id === 'upright-bass';
  const plucked = def.family === 'plucked' || def.family === 'plucked-string';
  const guitar = def.id === 'guitar';
  const surface: ExcitationSurface = bowed || plucked || def.id === 'piano' || def.id === 'dulcimer' ? 'string'
    : def.family === 'winds' || def.family === 'brass' ? 'air-column'
      : def.family === 'free-reed' || ['accordion', 'bandoneon', 'concertina', 'harmonium'].includes(def.id) ? 'reed'
        : def.family === 'voice' ? 'voice' : def.family === 'electronic' ? 'electronic'
          : def.bodyConstruction === 'skin-faced' ? 'membrane' : 'object';
  const result: TechniqueMechanics = { surface, pitchIdentity: def.voicing === 'unpitched' ? 'unpitched' : 'pitched', excitation, damping: 0, fidelity: 'symbolic' };
  if (bowed) result.excitation = 'bow';
  if ((bowed || upright) && /^(pizzicato|hard-pizzicato|bartok-pizzicato)$/.test(g)) result.excitation = 'fingerpad';
  if ((bowed || upright) && /^(arco|bow|bow-drag|lija|arrastre|ricochet|heavy-detache)$/.test(g)) result.excitation = 'bow';
  if (plucked && /^(pick|flatpick|alternate-picking|fast-picking|tremolo-picking)$/.test(g)) result.excitation = 'hard-pick';
  if (plucked && /^(fingerstyle|thumb|thumb-slap|thumb-sweep|slap|pop|pizzicato)$/.test(g)) result.excitation = 'fingerpad';
  if (guitar && /^(rasgueado|abanico|alzapua|picado|tremolo|apoyando|tirando)$/.test(g)) result.excitation = 'nail';
  if ((guitar || bowed || upright) && /^(golpe|golpe-caja|body-tap|percussive-body-hit|tap)$/.test(g)) {
    Object.assign(result, { surface: 'soundboard', pitchIdentity: 'unpitched', excitation: 'fingerpad', damping: 1, tailSeconds: .5, fidelity: 'approximate' });
  } else if ((bowed || upright) && g === 'tambor') {
    Object.assign(result, { surface: 'muted-string', pitchIdentity: 'unpitched', excitation: 'fingerpad', damping: .98, tailSeconds: .25, fidelity: 'approximate' });
  } else if ((bowed || upright) && g === 'chicharra') {
    Object.assign(result, { surface: 'afterlength', pitchIdentity: 'unpitched', excitation: 'bow', damping: .8, tailSeconds: .3, fidelity: 'approximate' });
  } else if ((upright || def.id === 'cello') && g === 'strappata') {
    Object.assign(result, { surface: 'muted-string', pitchIdentity: 'unpitched', excitation: 'bow', damping: .95, tailSeconds: .3, fidelity: 'approximate' });
  } else if (plucked && /^(dead-note|muted-sixteenth|muted-strum)$/.test(g)) {
    Object.assign(result, { surface: 'muted-string', pitchIdentity: 'unpitched', damping: .96, tailSeconds: .25, fidelity: 'approximate' });
  } else if (plucked && /^(palm-mute|tight-palm-mute|mute)$/.test(g)) {
    Object.assign(result, { damping: .85, fidelity: 'approximate' });
  }
  if ((bowed || upright) && g === 'lija') Object.assign(result, { bowPressure: .95, bowVelocity: .25, fidelity: 'approximate' });
  if (plucked && g === 'pop') Object.assign(result, { pluckPosition: .16, fidelity: 'approximate' });
  if (plucked && /^(slap|thumb-slap)$/.test(g)) Object.assign(result, { pluckPosition: .32, fidelity: 'approximate' });
  if (/^(staccato|accent|marcato|legato|tenuto|pizzicato|arco|rasgueado|abanico|picado|alzapua)$/.test(g)) result.fidelity = 'approximate';
  return result;
}
