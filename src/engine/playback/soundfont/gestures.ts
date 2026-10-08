import { INSTRUMENTS_BY_ID } from '../../lookup/instruments';
import { GESTURE_NAMES } from '../../band/gestures';
import { normalizeTechnique, techniqueMechanics } from '../../../data/performance/techniqueMechanics';
import type { PerfNote } from '../../band/performanceData';

/** Turn the score's authored gesture into a sample action and velocity. */
export function resolveSampleGesture(instrumentId: string, gestureCode: number, authoredVelocity: number,
  pitchIdentity?: PerfNote['pitchIdentity']) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) throw new Error(`No instrument mechanics for ${instrumentId}`);
  const name = GESTURE_NAMES[gestureCode] ?? 'tone';
  const normalized = normalizeTechnique(name);
  const bowed = def.family === 'bowed';
  const explicitPizz = normalized === 'pizzicato' || normalized.includes('pizz');
  let action = normalized;
  if (bowed && explicitPizz) action = 'pluck';
  else if (bowed && /fingerstyle|flatpick|pick|plectrum|pluck/.test(normalized)) action = 'arco';
  else if (normalized === 'arco') action = 'arco';
  else if (/fingerstyle|flatpick|pick|plectrum/.test(normalized)) action = 'pluck';
  else if (/rasgue|abanico/.test(normalized)) action = normalized.includes('abanico') ? 'abanico' : 'rasgueado';
  else if (/tongue|tongued|martellato/.test(normalized)) action = 'tongue';
  else if (normalized === 'brush') action = 'strike';
  const mechanics = techniqueMechanics(def, normalized);
  const scale = normalized === 'accent' || normalized === 'marcato' ? 1.25
    : normalized === 'ghost' ? .45 : /snare|rim|slap/.test(normalized) ? 1.1 : 1;
  return { name, action, pitchIdentity: pitchIdentity ?? mechanics.pitchIdentity,
    velocity: Math.max(1, Math.min(127, Math.round(authoredVelocity * scale))) };
}
