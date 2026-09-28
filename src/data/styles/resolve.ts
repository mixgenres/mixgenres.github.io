import type {
  SongStyle,
  ResolvedStyle,
  StyleInfluence,
  DecisionTrace,
  DecisionTraceItem,
  Weighted,
  Range,
  FormGrammar,
  HarmonyGrammar,
  RhythmGrammar,
  MelodyGrammar,
  ArrangementGrammar,
  SoundProfile,
  GestureRule,
  RuleRef,
} from './schema';
import { getCanonicalStyle, getStyle } from './registry';
import { contractForGenre } from './contracts';

export interface ResolveStyleOptions {
  genreId?: string;
  styleId: string;
  influences?: StyleInfluence[];
  userOverrides?: Partial<SongStyle>;
}

type CompleteStyle = SongStyle & {
  form: FormGrammar;
  harmony: HarmonyGrammar;
  rhythm: RhythmGrammar;
  melody: MelodyGrammar;
  arrangement: ArrangementGrammar;
  sound: SoundProfile;
  gestures: Record<string, GestureRule>;
  rules: { require: RuleRef[]; forbid: RuleRef[] };
};

function completeStyle(style: SongStyle): CompleteStyle {
  return {
    ...style,
    form: { ...style.form, sectionVocab: style.form?.sectionVocab ?? [], templates: style.form?.templates ?? [], preferredMeters: style.form?.preferredMeters ?? [], defaultSpotlights: style.form?.defaultSpotlights ?? {} },
    harmony: { ...style.harmony, model: style.harmony?.model ?? 'functional', modePolicy: style.harmony?.modePolicy ?? 'major', progressionTemplates: style.harmony?.progressionTemplates ?? [], chordVocabulary: style.harmony?.chordVocabulary ?? [] },
    rhythm: { ...style.rhythm, meter: style.rhythm?.meter ?? '4/4', tempoRange: style.rhythm?.tempoRange ?? [80, 140], defaultBpm: style.rhythm?.defaultBpm ?? 110, feel: style.rhythm?.feel ?? 'style-native', swingPercentage: style.rhythm?.swingPercentage ?? 50, anticipationOffsetSteps: style.rhythm?.anticipationOffsetSteps ?? 0, microtimingFeel: style.rhythm?.microtimingFeel ?? 'straight', humanizeJitterMs: style.rhythm?.humanizeJitterMs ?? 8 },
    melody: { ...style.melody, scaleMode: style.melody?.scaleMode ?? 'major' },
    arrangement: { ...style.arrangement, ensemble: style.arrangement?.ensemble ?? [] },
    sound: { ...style.sound, instrumentPalette: style.sound?.instrumentPalette ?? [], masterProfile: { pocket: style.sound?.masterProfile?.pocket ?? 0.5, lift: style.sound?.masterProfile?.lift ?? 0.5, ...(style.sound?.masterProfile ?? {}) } },
    gestures: { ...(style.gestures ?? {}) },
    rules: { require: [], forbid: [], ...(style.rules ?? {}) },
  };
}

import { LRUMap, registerCache } from '../../engine/util/lru';

// Deterministic memoization cache
const resolveCache = new LRUMap<string, ResolvedStyle>(2000, 'resolveCache');
registerCache(resolveCache);

function cacheKey(opts: ResolveStyleOptions): string {
  const g = opts.genreId ?? '';
  const s = opts.styleId;
  let infKey = '';
  if (opts.influences && opts.influences.length > 0) {
    infKey = opts.influences
      .map(inf => `${inf.source.styleId ?? inf.source.genreId}:${(inf.weight * 100) | 0}:${inf.aspects.slice().sort().join(',')}`)
      .sort()
      .join(';');
  }
  let overKey = '';
  if (opts.userOverrides) {
    overKey = Object.keys(opts.userOverrides).sort().join(',');
  }
  return `${g}|${s}|${infKey}|${overKey}`;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function lerpRange(a: Range, b: Range, t: number): Range {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t))
  ];
}

function blendWeighted<T>(baseList: Weighted<T>[], influenceList: Weighted<T>[], weight: number): Weighted<T>[] {
  const w = Math.max(0, Math.min(1, weight));
  const baseScale = 1 - w * 0.5;
  const infScale = w;

  const results: Weighted<T>[] = [];
  for (const item of baseList) {
    results.push({ ...item, w: item.w * baseScale });
  }
  for (const item of influenceList) {
    results.push({ ...item, w: item.w * infScale });
  }
  return results;
}

/**
 * Resolves a style with full inheritance (extends chain), influences, and user overrides.
 * Pure, deterministic, memoized, frozen output.
 */
export function getDefaultStyleForGenre(genreId: string): SongStyle {
  return getCanonicalStyle(genreId);
}

export function resolveGenreStyle(genreId: string, opts: Omit<ResolveStyleOptions, 'genreId' | 'styleId'> = {}): ResolvedStyle {
  const style = getDefaultStyleForGenre(genreId);
  return resolveStyle({ ...opts, genreId, styleId: style.id });
}

export function resolveStyle(opts: ResolveStyleOptions): ResolvedStyle {
  const key = cacheKey(opts);
  const cached = resolveCache.get(key);
  if (cached) return cached;

  const targetStyle = getStyle(opts.styleId);
  if (!targetStyle) {
    throw new Error(`Unknown SongStyle: ${opts.styleId}`);
  }
  if (opts.genreId && !targetStyle.genres.includes(opts.genreId) && targetStyle.primaryGenre !== opts.genreId) {
    throw new Error(`SongStyle ${opts.styleId} does not belong to genre ${opts.genreId}`);
  }
  const extendsChain: string[] = [];
  const visited = new Set<string>();

  // 1. Build inheritance chain (cycle-safe)
  let curr: SongStyle | undefined = targetStyle;
  const hierarchy: SongStyle[] = [];
  while (curr) {
    if (visited.has(curr.id)) {
      console.warn(`Cycle detected in style extends chain for ${curr.id}`);
      break;
    }
    visited.add(curr.id);
    hierarchy.unshift(curr); // parent first, child overrides
    if (curr.extends) {
      extendsChain.push(curr.extends);
      curr = getStyle(curr.extends);
    } else {
      break;
    }
  }

  const provenance: ResolvedStyle['provenance'] = {};
  const trace: DecisionTrace = [];

  const recordDecision = (
    path: string,
    value: unknown,
    source: DecisionTraceItem['source'],
    sourceId?: string,
    weight?: number
  ) => {
    provenance[path] = { source, sourceId, weight };
    trace.push({ path, value, source, sourceId, weight });
  };

  // 2. Merge hierarchy (base parent -> child style)
  let merged: CompleteStyle = completeStyle(JSON.parse(JSON.stringify(hierarchy[0])));
  recordDecision('id', merged.id, 'style', merged.id);

  for (let i = 1; i < hierarchy.length; i++) {
    const child = hierarchy[i];
    const srcType = i === hierarchy.length - 1 ? 'style' : 'extends';
    
    // Scalar / meta fields
    merged.id = child.id;
    merged.name = child.name;
    merged.summary = child.summary;
    merged.signatureTraits = [...child.signatureTraits];
    merged.primaryGenre = child.primaryGenre;
    merged.genres = Array.from(new Set([...merged.genres, ...child.genres]));
    merged.kind = child.kind;
    merged.canonical = child.canonical;
    merged.era = child.era ?? merged.era;
    merged.region = child.region ?? merged.region;
    recordDecision('meta', { id: child.id, name: child.name }, srcType, child.id);

    // Form
    if (child.form) {
      merged.form = {
        ...merged.form,
        ...child.form,
        sectionVocab: Array.from(new Set([...(merged.form.sectionVocab ?? []), ...(child.form.sectionVocab ?? [])])),
        templates: child.form.templates?.length ? child.form.templates : merged.form.templates,
        preferredMeters: child.form.preferredMeters?.length ? child.form.preferredMeters : merged.form.preferredMeters,
      };
      recordDecision('form', merged.form, srcType, child.id);
    }

    // Harmony
    if (child.harmony) {
      merged.harmony = {
        ...merged.harmony,
        ...child.harmony,
        chordVocabulary: Array.from(new Set([...(merged.harmony.chordVocabulary ?? []), ...(child.harmony.chordVocabulary ?? [])])),
        progressionTemplates: child.harmony.progressionTemplates?.length ? child.harmony.progressionTemplates : merged.harmony.progressionTemplates,
        sectionProgressions: { ...(merged.harmony.sectionProgressions ?? {}), ...(child.harmony.sectionProgressions ?? {}) },
      };
      recordDecision('harmony', merged.harmony, srcType, child.id);
    }

    // Rhythm
    if (child.rhythm) {
      merged.rhythm = {
        ...merged.rhythm,
        ...child.rhythm,
        tempoRange: child.rhythm.tempoRange ?? merged.rhythm.tempoRange,
        grooveFamilies: { ...(merged.rhythm.grooveFamilies ?? {}), ...(child.rhythm.grooveFamilies ?? {}) },
      };
      recordDecision('rhythm', merged.rhythm, srcType, child.id);
    }

    // Melody
    if (child.melody) {
      merged.melody = {
        ...merged.melody,
        ...child.melody,
        contourArchetypes: child.melody.contourArchetypes ?? merged.melody.contourArchetypes,
        phraseLengthsBars: child.melody.phraseLengthsBars ?? merged.melody.phraseLengthsBars,
      };
      recordDecision('melody', merged.melody, srcType, child.id);
    }

    // Arrangement
    if (child.arrangement) {
      merged.arrangement = {
        ...merged.arrangement,
        ...child.arrangement,
        ensemble: child.arrangement.ensemble?.length ? child.arrangement.ensemble : merged.arrangement.ensemble,
        energyMappings: { ...(merged.arrangement.energyMappings ?? {}), ...(child.arrangement.energyMappings ?? {}) },
      };
      recordDecision('arrangement', merged.arrangement, srcType, child.id);
    }

    // Sound
    if (child.sound) {
      merged.sound = {
        ...merged.sound,
        ...child.sound,
        instrumentPalette: child.sound.instrumentPalette?.length ? child.sound.instrumentPalette : merged.sound.instrumentPalette,
        masterProfile: { ...merged.sound.masterProfile, ...child.sound.masterProfile },
      };
      recordDecision('sound', merged.sound, srcType, child.id);
    }

    // Pattern contract: concrete style ownership is first-class. A child style
    // may tighten/extend the pattern set, but never inherits a sibling style's patterns.
    if (child.patterns) {
      merged.patterns = {
        ...merged.patterns,
        ...child.patterns,
        require: child.patterns.require?.length ? child.patterns.require : merged.patterns?.require,
        preferred: child.patterns.preferred?.length ? child.patterns.preferred : merged.patterns?.preferred,
        allowed: child.patterns.allowed?.length ? child.patterns.allowed : merged.patterns?.allowed,
        avoid: Array.from(new Set([...(merged.patterns?.avoid ?? []), ...(child.patterns.avoid ?? [])])),
      };
      recordDecision('patterns', merged.patterns, srcType, child.id);
    }

    // Gestures & Rules
    merged.gestures = { ...merged.gestures, ...child.gestures };
    merged.rules = {
      require: [...(merged.rules?.require ?? []), ...(child.rules?.require ?? [])],
      forbid: [...(merged.rules?.forbid ?? []), ...(child.rules?.forbid ?? [])],
    };
  }

  // 3. Apply Influences
  const influences = opts.influences ?? targetStyle.influences ?? [];
  const appliedInfluences: StyleInfluence[] = [];

  for (const inf of influences) {
    const infStyle = inf.source.styleId
      ? getStyle(inf.source.styleId)
      : inf.source.genreId
      ? getCanonicalStyle(inf.source.genreId)
      : undefined;

    if (!infStyle) continue;
    const w = Math.max(0, Math.min(1, inf.weight));
    if (w <= 0) continue;

    appliedInfluences.push(inf);
    const srcId = infStyle.id;

    for (const aspect of inf.aspects) {
      switch (aspect) {
        case 'rhythm':
          if (infStyle.rhythm) {
            merged.rhythm.tempoRange = lerpRange(merged.rhythm.tempoRange, infStyle.rhythm.tempoRange ?? merged.rhythm.tempoRange, w);
            merged.rhythm.defaultBpm = Math.round(lerp(merged.rhythm.defaultBpm, infStyle.rhythm.defaultBpm ?? merged.rhythm.defaultBpm, w));
            merged.rhythm.swingPercentage = Math.round(lerp(merged.rhythm.swingPercentage, infStyle.rhythm.swingPercentage ?? merged.rhythm.swingPercentage, w));
            merged.rhythm.humanizeJitterMs = Math.round(lerp(merged.rhythm.humanizeJitterMs, infStyle.rhythm.humanizeJitterMs ?? merged.rhythm.humanizeJitterMs, w));
            if (w >= 0.5) {
              merged.rhythm.microtimingFeel = infStyle.rhythm.microtimingFeel ?? merged.rhythm.microtimingFeel;
              merged.rhythm.feel = infStyle.rhythm.feel ?? merged.rhythm.feel;
            }
            if (infStyle.rhythm.grooveFamilies) {
              merged.rhythm.grooveFamilies = {
                ...merged.rhythm.grooveFamilies,
                ...infStyle.rhythm.grooveFamilies,
              };
            }
            recordDecision('rhythm', merged.rhythm, 'influence', srcId, w);
          }
          break;

        case 'harmony':
          if (infStyle.harmony) {
            merged.harmony.progressionTemplates = blendWeighted(
              merged.harmony.progressionTemplates ?? [],
              infStyle.harmony.progressionTemplates ?? [],
              w
            );
            merged.harmony.chordVocabulary = Array.from(new Set([
              ...merged.harmony.chordVocabulary,
              ...(infStyle.harmony.chordVocabulary ?? [])
            ]));
            if (w >= 0.5) {
              merged.harmony.modePolicy = infStyle.harmony.modePolicy ?? merged.harmony.modePolicy;
              merged.harmony.voicingStyle = infStyle.harmony.voicingStyle ?? merged.harmony.voicingStyle;
              merged.harmony.bassMotion = infStyle.harmony.bassMotion ?? merged.harmony.bassMotion;
            }
            recordDecision('harmony', merged.harmony, 'influence', srcId, w);
          }
          break;

        case 'melody':
          if (infStyle.melody) {
            if (w >= 0.5) {
              merged.melody.scaleMode = infStyle.melody.scaleMode ?? merged.melody.scaleMode;
              if (infStyle.melody.pitchIntervals) merged.melody.pitchIntervals = infStyle.melody.pitchIntervals;
              if (infStyle.melody.contourArchetypes) merged.melody.contourArchetypes = infStyle.melody.contourArchetypes;
            }
            if (infStyle.melody.ornamentVocabulary) {
              merged.melody.ornamentVocabulary = Array.from(new Set([
                ...(merged.melody.ornamentVocabulary ?? []),
                ...infStyle.melody.ornamentVocabulary
              ]));
            }
            recordDecision('melody', merged.melody, 'influence', srcId, w);
          }
          break;

        case 'arrangement':
          if (infStyle.arrangement) {
            if (w >= 0.4 && infStyle.arrangement.energyMappings) {
              merged.arrangement.energyMappings = {
                ...merged.arrangement.energyMappings,
                ...infStyle.arrangement.energyMappings
              };
            }
            recordDecision('arrangement', merged.arrangement, 'influence', srcId, w);
          }
          break;

        case 'sound':
          if (infStyle.sound) {
            merged.sound.instrumentPalette = blendWeighted(
              merged.sound.instrumentPalette ?? [],
              infStyle.sound.instrumentPalette ?? [],
              w
            );
            if (w >= 0.5 && infStyle.sound.masterProfile) {
              merged.sound.masterProfile = {
                pocket: lerp(merged.sound.masterProfile.pocket ?? 0.5, infStyle.sound.masterProfile.pocket ?? 0.5, w),
                lift: lerp(merged.sound.masterProfile.lift ?? 0.5, infStyle.sound.masterProfile.lift ?? 0.5, w),
              };
            }
            recordDecision('sound', merged.sound, 'influence', srcId, w);
          }
          break;

        case 'gestures':
          if (infStyle.gestures) {
            for (const [gid, gest] of Object.entries(infStyle.gestures)) {
              merged.gestures[gid] = {
                ...gest,
                probability: (merged.gestures[gid]?.probability ?? 0) * (1 - w) + gest.probability * w
              };
            }
            recordDecision('gestures', merged.gestures, 'influence', srcId, w);
          }
          break;

        case 'form':
          if (infStyle.form && w >= 0.5) {
            merged.form.templates = blendWeighted(merged.form.templates, infStyle.form.templates ?? merged.form.templates, w);
            recordDecision('form', merged.form, 'influence', srcId, w);
          }
          break;
      }
    }
  }

  // 4. User Overrides
  if (opts.userOverrides) {
    merged = completeStyle({
      ...merged,
      ...opts.userOverrides,
      form: { ...merged.form, ...(opts.userOverrides.form ?? {}) },
      harmony: { ...merged.harmony, ...(opts.userOverrides.harmony ?? {}) },
      rhythm: { ...merged.rhythm, ...(opts.userOverrides.rhythm ?? {}) },
      melody: { ...merged.melody, ...(opts.userOverrides.melody ?? {}) },
      arrangement: { ...merged.arrangement, ...(opts.userOverrides.arrangement ?? {}) },
      sound: { ...merged.sound, ...(opts.userOverrides.sound ?? {}) },
      gestures: { ...merged.gestures, ...(opts.userOverrides.gestures ?? {}) },
    });
    recordDecision('userOverrides', opts.userOverrides, 'user');
  }

  const effectiveGenreId = opts.genreId ?? merged.primaryGenre;
  const contract = contractForGenre(effectiveGenreId, merged);

  const result: ResolvedStyle = Object.freeze({
    ...merged,
    contract,
    form: (merged.form ?? {}) as FormGrammar,
    harmony: (merged.harmony ?? {}) as HarmonyGrammar,
    rhythm: (merged.rhythm ?? {}) as RhythmGrammar,
    melody: (merged.melody ?? {}) as MelodyGrammar,
    arrangement: (merged.arrangement ?? {}) as ArrangementGrammar,
    sound: (merged.sound ?? {}) as SoundProfile,
    gestures: (merged.gestures ?? {}) as Record<string, GestureRule>,
    rules: (merged.rules ?? { require: [], forbid: [] }) as { require: RuleRef[]; forbid: RuleRef[] },
    resolvedFrom: {
      baseStyleId: targetStyle.id,
      genreId: opts.genreId ?? '',
      extendsChain,
      appliedInfluences,
    },
    provenance,
    trace,
  });

  resolveCache.set(key, result);
  return result;
}
