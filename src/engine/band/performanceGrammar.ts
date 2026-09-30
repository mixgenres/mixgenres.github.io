import type { ResolvedStyle } from '../../data/styles/schema';
import { DEFAULT_PHRASE_DEVELOPMENT, DEFAULT_PERFORMANCE_GRAMMAR } from '../../data/performance/performanceGrammar';
import type { PerformanceAspect, PerformanceInfluence, PhraseDevelopmentProbabilities, PerformanceGrammar } from '../../data/performance/schema/performance-grammar';

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp01(t);
}

/**
 * Combines host and guest performance grammars based on explicit performance aspect weights.
 * Host structural constraints, timelines, cycles, and forbidden interpretations are preserved authoritative.
 */
export function resolveHybridGrammar(
  host: PerformanceGrammar,
  guest?: PerformanceGrammar,
  influence?: PerformanceInfluence,
  hostForbidden: string[] = []
): PerformanceGrammar {
  if (!guest || !influence || influence.weight <= 0.02) {
    return {
      ...host,
      forbiddenInterpretations: Array.from(new Set([...(host.forbiddenInterpretations ?? []), ...hostForbidden])),
    };
  }

  const baseW = clamp01(influence.weight);
  const getW = (aspect: PerformanceAspect): number => {
    const custom = influence.aspects?.[aspect];
    return custom !== undefined ? clamp01(custom) : baseW;
  };

  // 1. Structural aspect: timeline & rhythm preservation remains host-biased
  const timelineW = getW('timeline');
  const preserveAuthoredRhythm = lerp(
    host.preserveAuthoredRhythm,
    guest.preserveAuthoredRhythm,
    timelineW * 0.35 // Host remains structurally authoritative
  );

  // 2. Subdivision aspect
  const subW = getW('subdivision');
  const allowCrossStyleSubdivision = lerp(
    host.allowCrossStyleSubdivision,
    guest.allowCrossStyleSubdivision,
    subW
  );
  const allowDerivedAttacks = lerp(
    host.allowDerivedAttacks,
    guest.allowDerivedAttacks,
    subW * 0.75
  );

  // 3. Pitch decoration aspect
  const pitchW = getW('pitchDecoration');
  const allowDerivedPitch = lerp(
    host.allowDerivedPitch,
    guest.allowDerivedPitch,
    pitchW * 0.6
  );

  // 4. Density aspect
  const densityW = getW('density');
  const mergedDensityByRole: Record<string, { min: number; max: number }> = {};
  const allRoles = new Set([
    ...Object.keys(host.densityByRole ?? {}),
    ...Object.keys(guest.densityByRole ?? {}),
  ]);
  for (const role of allRoles) {
    const hD = host.densityByRole?.[role] ?? { min: 2, max: 8 };
    const gD = guest.densityByRole?.[role] ?? hD;
    mergedDensityByRole[role] = {
      min: Math.round(lerp(hD.min, gD.min, densityW)),
      max: Math.round(lerp(hD.max, gD.max, densityW)),
    };
  }

  // 5. Phrase development aspect
  const phraseW = getW('phraseDevelopment');
  const hDev = host.phraseDevelopment ?? DEFAULT_PHRASE_DEVELOPMENT;
  const gDev = guest.phraseDevelopment ?? hDev;
  const mergedPhraseDev: PhraseDevelopmentProbabilities = {
    repeatProbability: lerp(hDev.repeatProbability, gDev.repeatProbability, phraseW),
    variationProbability: lerp(hDev.variationProbability, gDev.variationProbability, phraseW),
    answerProbability: lerp(hDev.answerProbability, gDev.answerProbability, phraseW),
    fillProbability: lerp(hDev.fillProbability, gDev.fillProbability, phraseW),
    restProbability: lerp(hDev.restProbability, gDev.restProbability, phraseW),
    cadenceProbability: lerp(hDev.cadenceProbability, gDev.cadenceProbability, phraseW),
  };

  // 6. Articulation & variation vocabularies: union filtered by host forbidden
  const forbiddenSet = new Set([
    ...(host.forbiddenInterpretations ?? []),
    ...hostForbidden,
  ]);

  const mergedArticulations: Record<string, string[]> = {};
  const artRoles = new Set([
    ...Object.keys(host.articulationVocabulary ?? {}),
    ...Object.keys(guest.articulationVocabulary ?? {}),
  ]);
  for (const role of artRoles) {
    const hList = host.articulationVocabulary?.[role] ?? [];
    const gList = guest.articulationVocabulary?.[role] ?? [];
    const combined = Array.from(new Set([...hList, ...(getW('articulation') > 0.2 ? gList : [])]));
    mergedArticulations[role] = combined.filter(a => !forbiddenSet.has(a));
  }

  const mergedVariations: Record<string, string[]> = {};
  const varRoles = new Set([
    ...Object.keys(host.variationVocabulary ?? {}),
    ...Object.keys(guest.variationVocabulary ?? {}),
  ]);
  for (const role of varRoles) {
    const hList = host.variationVocabulary?.[role] ?? [];
    const gList = guest.variationVocabulary?.[role] ?? [];
    const combined = Array.from(new Set([...hList, ...(baseW > 0.2 ? gList : [])]));
    mergedVariations[role] = combined.filter(v => !forbiddenSet.has(v));
  }

  // 7. Microtiming
  const microW = getW('microtiming');
  const hMicro = host.microtiming ?? { amount: 0.015, tendency: 'straight' };
  const gMicro = guest.microtiming ?? hMicro;
  const mergedMicrotiming = {
    amount: lerp(hMicro.amount, gMicro.amount, microW),
    tendency: microW > 0.5 ? gMicro.tendency ?? hMicro.tendency : hMicro.tendency,
  };

  return {
    worldId: host.worldId ?? guest?.worldId,
    styleId: host.styleId ?? guest?.styleId,
    densityByRole: mergedDensityByRole,
    subdivisionVocabulary: host.subdivisionVocabulary ?? guest.subdivisionVocabulary,
    variationVocabulary: mergedVariations,
    articulationVocabulary: mergedArticulations,
    phraseDevelopment: mergedPhraseDev,
    interactionVocabulary: host.interactionVocabulary ?? guest.interactionVocabulary,
    preserveAuthoredRhythm,
    allowDerivedAttacks,
    allowDerivedPitch,
    allowCrossStyleSubdivision,
    forbiddenInterpretations: Array.from(forbiddenSet),
    microtiming: mergedMicrotiming,
  };
}

type PerformanceGrammarSource = Pick<import('../../engine/style/contracts').WorldContract,
  'performanceGrammar' | 'pulseModel' | 'harmonyModel' | 'forbidden' | 'groove'
> & {
  worldId?: string;
  styleId?: string;
};

/**
 * Extracts or constructs a PerformanceGrammar from a style specification.
 */
export function getPerformanceGrammar(style: ResolvedStyle | PerformanceGrammarSource, _role?: string): PerformanceGrammar {
  if (!style) return DEFAULT_PERFORMANCE_GRAMMAR;
  const isResolvedStyle = 'contract' in style;
  const source = isResolvedStyle ? style.contract : style;
  const rhythm = isResolvedStyle ? style.rhythm : undefined;
  const articulationGrammar = isResolvedStyle ? style.contract.articulationGrammar : undefined;
  const worldId = isResolvedStyle ? style.primaryGenre : ('worldId' in source ? source.worldId : undefined);
  const styleId = isResolvedStyle ? style.id : ('styleId' in source ? source.styleId : undefined);

  const baseGrammar: PerformanceGrammar = source.performanceGrammar ?? {
    ...DEFAULT_PERFORMANCE_GRAMMAR,
    preserveAuthoredRhythm: source.pulseModel === 'timeline-cycle' ? 0.95 : 0.85,
    allowDerivedAttacks: source.pulseModel === 'machine-grid' ? 0.15 : 0.35,
    allowDerivedPitch: source.harmonyModel === 'blues-form' ? 0.45 : 0.25,
    allowCrossStyleSubdivision: 0.15,
  };

  const forbidden = Array.isArray(source.forbidden) ? source.forbidden : [];
  const mergedForbidden = Array.from(new Set([...(baseGrammar.forbiddenInterpretations ?? []), ...forbidden]));

  // Microtiming
  const microTendency = rhythm?.microtimingFeel ?? source.groove?.name?.toLowerCase() ?? 'straight';
  const microtiming = {
    amount: (rhythm?.humanizeJitterMs ?? source.groove?.humanizeMs ?? 7) / 1000,
    tendency: microTendency,
  };

  // Articulations from style if available
  const styleArt = articulationGrammar ?? {};
  const mergedArticulations: Record<string, string[]> = {
    ...(baseGrammar.articulationVocabulary ?? {}),
  };
  for (const [r, list] of Object.entries(styleArt)) {
    if (Array.isArray(list)) {
      mergedArticulations[r] = list;
    }
  }

  const result: PerformanceGrammar = {
    ...baseGrammar,
    worldId,
    styleId,
    articulationVocabulary: mergedArticulations,
    forbiddenInterpretations: mergedForbidden,
    microtiming: microtiming,
  };

  return result;
}
