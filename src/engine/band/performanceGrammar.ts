import type { ResolvedStyle } from '../../data/styles/schema';
import { DEFAULT_PHRASE_DEVELOPMENT, DEFAULT_PERFORMANCE_GRAMMAR } from '../../data/performance/performanceGrammar';
import type { PerformanceAspect, PerformanceInfluence, PhraseDevelopmentProbabilities, PerformanceGrammar } from '../../data/performance/schema/performance-grammar';

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/**
 * Phrase behavior is inferred from each resolved style's authored motif,
 * response, fill, and break vocabulary. The old fallback reused one exact
 * repeat/variation/answer/rest mix for every genre, so a style with no extra
 * grammar quietly inherited the same interpretation as every other style.
 */
function phraseDevelopmentForStyle(style: ResolvedStyle): PhraseDevelopmentProbabilities {
  const result = { ...DEFAULT_PHRASE_DEVELOPMENT };
  const motifOps = (style.melody?.motifOps ?? []).map(value => value.toLowerCase());
  const contour = (style.melody?.contourArchetypes ?? []).map(value => value.toLowerCase());
  const formLanguage = (style.form?.templates ?? []).flatMap(template => template.value.map(section => `${section.kind} ${section.label}`));
  const patternLanguage = [
    ...(style.patterns?.require ?? []), ...(style.patterns?.preferred ?? []), ...(style.patterns?.allowed ?? []),
  ];
  // Genre pack styles carry their strongest identity in core concepts,
  // signature cells, authored form labels, and named local patterns. Their
  // older SongStyle projections do not populate motifOps/contourArchetypes,
  // so those fields alone would silently send the entire catalog to defaults.
  const identityText = `${style.rhythm?.signatureCell ?? ''} ${(style.signatureTraits ?? []).slice(0, 3).join(' ')} ${formLanguage.join(' ')} ${patternLanguage.join(' ')}`.toLowerCase();
  const hasMotif = (pattern: RegExp) => motifOps.some(value => pattern.test(value));

  if (style.melody?.callAndResponse || /call.?and.?response|call.?response|antiphon|answer|response|trading/.test(identityText)) {
    result.answerProbability += 0.12;
    result.repeatProbability -= 0.06;
  }
  if (hasMotif(/sequence|transpose|invert|retrograde|develop|vary|ornament/)
      || contour.length >= 3
      || /sequence|chromatic|lick|run|motif|variation|ornament|syncopa|sincopa|falseta|tihai|jhala|solo/.test(identityText)) {
    result.variationProbability += 0.10;
    result.repeatProbability -= 0.07;
  }
  if (hasMotif(/repeat|ostinato|vamp/)
      || /machine-grid|loop|ostinato|vamp|riddim|cycle|riff/.test(`${style.contract.pulseModel} ${identityText}`)) {
    result.repeatProbability += 0.10;
    result.variationProbability -= 0.04;
  }
  if (/pause|rest|silence|silencio|respiro|parada|corte|break|stop.?time|suwuk|angsel|ma\b/.test(identityText)) {
    result.restProbability += 0.12;
    result.repeatProbability -= 0.06;
  }
  if (Object.keys(style.rhythm?.fillGrammar ?? {}).length
      || /fill|roll|pickup|turnaround|shout|jhala|ornament|run|break/.test(identityText)) {
    result.fillProbability += 0.09;
    result.repeatProbability -= 0.04;
  }
  if (style.form?.outros?.length || /cadence|coda|ending|close|closing|chan.?chan|sam|suwuk|tag/.test(identityText)) {
    result.cadenceProbability += 0.08;
    result.repeatProbability -= 0.02;
  }

  for (const key of Object.keys(result) as Array<keyof PhraseDevelopmentProbabilities>) {
    result[key] = Math.max(0.005, result[key]);
  }
  const total = Object.values(result).reduce((sum, value) => sum + value, 0);
  for (const key of Object.keys(result) as Array<keyof PhraseDevelopmentProbabilities>) result[key] /= total;
  return result;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp01(t);
}

/**
 * Combines host and guest playing grammars for one part. The song owns its
 * section clock and meter; the part blend may supply its own subdivisions,
 * articulation vocabulary, and phrase behavior inside that shared timeline.
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

  // The shared section clock and meter live outside this grammar. Let the
  // guest fully influence how this part subdivides and develops its cell.
  const timelineW = getW('timeline');
  const preserveAuthoredRhythm = lerp(host.preserveAuthoredRhythm, guest.preserveAuthoredRhythm, timelineW);

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
    subW
  );

  // 3. Pitch decoration aspect
  const pitchW = getW('pitchDecoration');
  const allowDerivedPitch = lerp(
    host.allowDerivedPitch,
    guest.allowDerivedPitch,
    pitchW
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

  // Negative vocabulary belongs to each style. A host rule must not erase the
  // guest articulation or variation that the student explicitly imports.
  const hostForbiddenSet = new Set([...(host.forbiddenInterpretations ?? []), ...hostForbidden]);
  const guestForbiddenSet = new Set(guest.forbiddenInterpretations ?? []);

  const mergedArticulations: Record<string, string[]> = {};
  const artRoles = new Set([
    ...Object.keys(host.articulationVocabulary ?? {}),
    ...Object.keys(guest.articulationVocabulary ?? {}),
  ]);
  for (const role of artRoles) {
    const hList = host.articulationVocabulary?.[role] ?? [];
    const gList = guest.articulationVocabulary?.[role] ?? [];
    const combined = [
      ...hList.filter(item => !hostForbiddenSet.has(item)),
      ...(getW('articulation') > 0.2 ? gList.filter(item => !guestForbiddenSet.has(item)) : []),
    ];
    mergedArticulations[role] = Array.from(new Set(combined));
  }

  const mergedVariations: Record<string, string[]> = {};
  const varRoles = new Set([
    ...Object.keys(host.variationVocabulary ?? {}),
    ...Object.keys(guest.variationVocabulary ?? {}),
  ]);
  for (const role of varRoles) {
    const hList = host.variationVocabulary?.[role] ?? [];
    const gList = guest.variationVocabulary?.[role] ?? [];
    const combined = [
      ...hList.filter(item => !hostForbiddenSet.has(item)),
      ...(baseW > 0.2 ? gList.filter(item => !guestForbiddenSet.has(item)) : []),
    ];
    mergedVariations[role] = Array.from(new Set(combined));
  }

  const mergedSubdivisions: Record<string, number[]> = {};
  const subdivisionRoles = new Set([
    ...Object.keys(host.subdivisionVocabulary ?? {}),
    ...Object.keys(guest.subdivisionVocabulary ?? {}),
  ]);
  for (const role of subdivisionRoles) {
    const hostSteps = host.subdivisionVocabulary?.[role] ?? [];
    const guestSteps = guest.subdivisionVocabulary?.[role] ?? [];
    mergedSubdivisions[role] = Array.from(new Set([
      ...hostSteps,
      ...(subW > 0.2 ? guestSteps : []),
    ])).sort((a, b) => a - b);
  }

  const mergedInteractions: Record<string, string[]> = {};
  const interactionRoles = new Set([
    ...Object.keys(host.interactionVocabulary ?? {}),
    ...Object.keys(guest.interactionVocabulary ?? {}),
  ]);
  for (const role of interactionRoles) {
    mergedInteractions[role] = Array.from(new Set([
      ...(host.interactionVocabulary?.[role] ?? []),
      ...(getW('interaction') > 0.2 ? guest.interactionVocabulary?.[role] ?? [] : []),
    ]));
  }
  const activeForbidden = baseW >= 0.5 ? guestForbiddenSet : hostForbiddenSet;

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
    subdivisionVocabulary: mergedSubdivisions,
    variationVocabulary: mergedVariations,
    articulationVocabulary: mergedArticulations,
    phraseDevelopment: mergedPhraseDev,
    interactionVocabulary: mergedInteractions,
    preserveAuthoredRhythm,
    allowDerivedAttacks,
    allowDerivedPitch,
    allowCrossStyleSubdivision,
    forbiddenInterpretations: Array.from(activeForbidden),
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
  const phraseDevelopment = source.performanceGrammar?.phraseDevelopment
    ?? (isResolvedStyle ? phraseDevelopmentForStyle(style) : DEFAULT_PHRASE_DEVELOPMENT);

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
    phraseDevelopment,
    worldId,
    styleId,
    articulationVocabulary: mergedArticulations,
    forbiddenInterpretations: mergedForbidden,
    microtiming: microtiming,
  };

  return result;
}
