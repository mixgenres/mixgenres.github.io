import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { GESTURE_NAMES } from '../band/gestures.ts';
import { normalizeTechnique, techniqueMechanics, type TechniqueMechanics } from '../../data/performance/techniqueMechanics';

export type RenderExcitationType = 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer' | 'stick' | 'mallet' | 'breath' | 'bow';

export interface ResolvedRenderGesture {
  name: string;
  action: string;
  excitationType: RenderExcitationType | string;
  excitationOverride?: string;
  contactPoint: number;
  mass: number;
  gainMultiplier: number;
  articulationNorm: number;
  harmonicRichnessDelta: number;
  decayTimeFactorScale: number;
  mechanics: TechniqueMechanics;
}

export function resolveRenderGesture(instrumentId: string, gestureCode: number, baseExcitation?: string): ResolvedRenderGesture {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  const name = GESTURE_NAMES[gestureCode] ?? 'tone';
  const g = normalizeTechnique(name);
  const isBowed = def?.family === 'bowed';
  // A bowed instrument may use a plucked path only for an explicitly authored
  // pizzicato gesture. Generic pick/fingerstyle aliases must never override its
  // bow excitation simply because the gesture vocabulary overlaps.
  const explicitPizz = g === 'pizzicato' || /pizz/.test(g);

  let action = g;
  if (isBowed && explicitPizz) action = 'pluck';
  else if (isBowed && (/fingerstyle|flatpick|pick|plectrum|pluck/.test(g))) action = 'arco';
  else if (g === 'arco') action = 'arco';
  else if (/fingerstyle|flatpick|pick|plectrum/.test(g)) action = 'pluck';
  else if (/rasgue|abanico/.test(g)) action = g.includes('abanico') ? 'abanico' : 'rasgueado';
  else if (/tongue|tongued|martellato/.test(g)) action = 'tongue';
  else if (g === 'brush') action = 'strike';

  if (!def) throw new Error(`No instrument mechanics for ${instrumentId}`);
  const mechanics = techniqueMechanics(def, g, baseExcitation ?? def.excitationType ?? def.luthierPhysics?.excitationType);
  const excitationType = mechanics.excitation;
  const excitationOverride = excitationType;

  const handStroke = g.includes('heel') ? 0.34
    : /toe|finger-tap|tip/.test(g) ? 0.68
    : /thumb|tumba-open|conga-open|macho-open|hembra-open|bayan-ghe|iya-enu/.test(g) ? 0.52
    : undefined;
  const rimLike = /rimshot|cascara|side-stick|rim/.test(g);
  const bellLike = /bell|campana|ride-bell/.test(g);
  const contactPoint = Math.max(0.05, Math.min(0.95, handStroke ?? (rimLike ? 0.84 : bellLike ? 0.9 : 0.5)));
  const mass = Math.max(0.1, Math.min(0.95,
    g.includes('heel') ? 0.26
      : /slap|quinto-slap|macho-slap|tapao/.test(g) ? 0.58
      : handStroke !== undefined ? 0.34
      : (rimLike || bellLike ? 0.52 : 0.35)
  ));

  const gainMultiplier = g === 'accent' || g === 'marcato' ? 1.25
    : g === 'ghost' ? 0.45
    : /snare|rim|slap/.test(g) ? 1.1
    : 1;
  const articulationNorm = g === 'staccato' ? 0.9 : g === 'legato' || g === 'tenuto' ? 0.1 : 0.4;
  const harmonicRichnessDelta = g.includes('ponticello') ? 0.12 : g.includes('tasto') ? -0.10 : g.includes('mwah-growl') ? 0.07 : 0;
  const decayTimeFactorScale = g.includes('ponticello') ? 0.94 : g.includes('tasto') ? 1.05 : 1;

  return { name, action, excitationType, excitationOverride, contactPoint, mass, gainMultiplier, articulationNorm, harmonicRichnessDelta, decayTimeFactorScale, mechanics };
}
