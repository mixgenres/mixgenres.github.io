import type { SongStyle } from '../../data/styles/schema';
import type { GenreStyleDefinition } from '../../data/schema';
import { GENRE_NAMES, GENRE_WORLDS } from '../../data/genres';
import { buildCuratedStyles, assembleStylePatterns } from './catalog';
import { applyStyleDialect } from './styleDialect';
import { ALL_PATTERNS, PATTERNS_BY_WORLD, PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { contractForGenre } from '../../engine/style/contracts';
import { energyForFormIntensity } from '../sheet/sectionEnergy.ts';
import type { SectionEnergy } from '../../data/schema';
import { STYLE_FORM_TEMPLATES } from '../../data/styles/styleFormTemplates';

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}


function styleFromSeed(worldId: string, seed: GenreStyleDefinition, index: number): SongStyle {
  const contract = contractForGenre(worldId);
  // The ensemble is authored by the style seed. Never synthesize a genre-level
  // starter ensemble: a song style must inherit only its own musical personnel.
  const instruments = Array.from(new Set(seed.characteristicInstruments
    .filter((id: string) => INSTRUMENTS_BY_ID[id])));
  const formSteps = STYLE_FORM_TEMPLATES[seed.id];
  if (!formSteps?.length) {
    throw new Error(`Style ${seed.id} has no authored form template.`);
  }
  return {
    id: seed.id,
    sourceProvenance: {
      'form.sectionVocab':'style', 'form.templates':'style', 'form.defaultSpotlights':'hardcoded',
      'form.preferredMeters': seed.preferredMeters?.length ? 'style' : 'genre',
      'harmony.model':'genre', 'harmony.modePolicy':'genre', 'harmony.progressionTemplates': Object.keys(seed.sectionProgressions ?? {}).length ? 'style' : 'hardcoded',
      'harmony.chordVocabulary':'genre', 'harmony.harmonicRhythm':'genre', 'harmony.bassMotion':'genre',
      'harmony.sectionProgressions': Object.keys(seed.sectionProgressions ?? {}).length ? 'style' : 'hardcoded',
      'rhythm.meter': seed.preferredMeters?.length ? 'style' : 'genre',
      'rhythm.tempoRange': seed.tempoRange ? 'style' : 'genre', 'rhythm.defaultBpm': seed.tempoRange ? 'style' : 'genre',
      'rhythm.feel': seed.grooveMechanics?.microtimingFeel ? 'style' : 'genre',
      'rhythm.swingPercentage': seed.grooveMechanics?.swingPercentage !== undefined ? 'style' : 'genre',
      'rhythm.anticipationOffsetSteps': seed.grooveMechanics?.anticipationOffsetSteps !== undefined ? 'style' : 'hardcoded',
      'rhythm.microtimingFeel': seed.grooveMechanics?.microtimingFeel ? 'style' : 'genre',
      'rhythm.humanizeJitterMs':'genre', 'melody.scaleMode':'genre',
      'sound.instrumentPalette':'style',
      'sound.masterProfile.pocket':'hardcoded', 'sound.masterProfile.lift':'hardcoded',
    },
    name: seed.name,
    genres:[worldId], primaryGenre:worldId,
    kind:index === 0 ? 'canonical' : 'form', canonical:index === 0,
    summary:shortText(seed.description || `${seed.name} ${GENRE_NAMES[worldId]}`),
    aliases: seed.keySubstyles,
    danceTags: seed.danceTags,
    signatureTraits:Array.from(new Set([...(seed.coreConcepts ?? []), ...(seed.keySubstyles ?? []), ...(seed.rhythmicGrammar ?? [seed.name])])).slice(0, 8),
    era:seed.era, region:seed.origin,
    form:{
      sectionVocab:formSteps.map(step => step.kind),
      templates:[{w:1, value:formSteps}],
      defaultSpotlights:{},
      preferredMeters:[seed.preferredMeters?.[0] ?? contract.meter],
    },
    harmony:{
      model:contract.harmonyModel,
      modePolicy: contract.pitchModel.toLowerCase().replace(/\s+/g, '-'),
      progressionTemplates:Array.from(new Map(
        Object.values(seed.sectionProgressions ?? {}).filter((value): value is string[] => Array.isArray(value)).map(value => [JSON.stringify(value), value] as const)
      ).values()).map(value => ({w:1, value})),
      chordVocabulary:Array.from(new Set([...contract.harmonyVocabulary, ...(seed.prominentChords ?? []), ...(Object.values(seed.sectionProgressions ?? {}).flatMap(x => x).map(String))])),
      harmonicRhythm:contract.harmonicRhythm,
      bassMotion:contract.bass.style,
      sectionProgressions: seed.sectionProgressions ?? {},
      tuningSystem: seed.tuningSystem ?? contract.tuningSystem,
    },
    rhythm:{
      meter:seed.preferredMeters?.[0] ?? contract.meter,
      tempoRange:seed.tempoRange as [number,number],
      defaultBpm:Math.round((seed.tempoRange[0] + seed.tempoRange[1]) / 2),
      feel:seed.grooveMechanics?.microtimingFeel ?? contract.groove.name,
      swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
      anticipationOffsetSteps:seed.grooveMechanics?.anticipationOffsetSteps ?? 0,
      microtimingFeel: seed.grooveMechanics?.microtimingFeel === 'quantized' ? 'straight' : (seed.grooveMechanics?.microtimingFeel ?? (contract.groove.swing > .57 ? 'swung' : 'straight')),
      humanizeJitterMs:contract.groove.humanizeMs,
      timelineClave:contract.timeline === 'none' ? undefined : contract.timeline,
      signatureCell:seed.signatureCell ?? contract.timeline,
      grooveMechanics:{
        swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
        anticipationOffsetSteps:seed.grooveMechanics?.anticipationOffsetSteps ?? 0,
        microtimingFeel: seed.grooveMechanics?.microtimingFeel ?? 'straight',
        humanizeJitterMs:contract.groove.humanizeMs,
      },
    },
    melody:{
      scaleMode:contract.pitchModel,
      chordToneTargeting:contract.harmonyModel === 'functional',
      callAndResponse:/call|answer|coro|response/i.test(contract.ensemble.lead ?? '') || /call|response/i.test(contract.ensemble.interaction ?? ''),
      ornamentVocabulary:Object.values(contract.articulationGrammar).flat(),
    },
    arrangement:{
      energyMappings:Object.fromEntries(formSteps.map(step => [step.key, energyForFormIntensity(step.intensity)])) as Partial<Record<string, SectionEnergy>>,
      doublingRules:[contract.ensemble.motor ?? '', contract.ensemble.answer ?? ''].filter(Boolean),
    },
    sound:{
      instrumentPalette:instruments.map(value => ({value: String(value), w: 1})),
    },
    patterns:{require:[],preferred:[],allowed:[],avoid:[]}, gestures:{}, rules:{
      require:contract.timelineRequired ? [{tag:'timeline-lock',description:contract.timeline}] : [],
      forbid:contract.forbidden.map(tag => ({tag})),
    },
  };
}

const baseStyles: SongStyle[] = [];
for (const world of GENRE_WORLDS) {
  for (const [index, seed] of (world.styleDefinitions ?? []).entries()) {
    baseStyles.push(styleFromSeed(world.id, seed, index));
  }
}

let styles = buildCuratedStyles(baseStyles, ALL_PATTERNS);
styles = styles.map((style, index) => applyStyleDialect(style, index));
const curatedPatterns = assembleStylePatterns(styles, ALL_PATTERNS);

// The runtime registry exposes shared pattern definitions through genre views.
ALL_PATTERNS.splice(0, ALL_PATTERNS.length, ...curatedPatterns);
for (const key of Object.keys(PATTERNS_BY_WORLD)) delete PATTERNS_BY_WORLD[key];
for (const key of Object.keys(PATTERNS_BY_ID)) delete PATTERNS_BY_ID[key];
const patternIdsByGenre = new Map(GENRE_WORLDS.map(world => [world.id, new Set((world.patterns ?? []).map(pattern => pattern.id))]));
for (const pattern of curatedPatterns) {
  PATTERNS_BY_ID[pattern.id] = pattern;
  for (const [genreId, patternIds] of patternIdsByGenre) {
    if (patternIds.has(pattern.id)) (PATTERNS_BY_WORLD[genreId] ??= []).push(pattern);
  }
}

// Pattern selection is exclusively drawn from authored, reusable catalog entries.
// No per-style generated patterns are created or exposed.
for (const style of styles) {
  const curated = Array.from(new Set(style.patterns?.allowed ?? []));
  style.patterns = {
    require: Array.from(new Set(style.patterns?.require ?? [])).filter(id => curated.includes(id)),
    preferred: Array.from(new Set(style.patterns?.preferred ?? [])).filter(id => curated.includes(id)),
    allowed: curated,
    avoid: Array.from(new Set(style.patterns?.avoid ?? [])),
    inferred: Array.from(new Set(style.patterns?.inferred ?? [])).filter(id => curated.includes(id)),
  };
}

export const ALL_STYLES = styles;
export const ALL_STYLES_BY_ID: Record<string, SongStyle> = Object.fromEntries(styles.map(s => [s.id, s]));
export const STYLES_BY_GENRE: Record<string, SongStyle[]> = Object.fromEntries(
  Object.keys(GENRE_NAMES).map(g => [g, styles.filter(s => s.primaryGenre === g)])
);

export function getStyle(id: string): SongStyle | undefined { return ALL_STYLES_BY_ID[id]; }
export function getStylesForGenre(genreId: string): SongStyle[] { return STYLES_BY_GENRE[genreId] ?? []; }
/**
 * The style a genre defaults to.
 *
 * An unknown genre used to fall through to `ALL_STYLES[0]` — a style belonging
 * to some unrelated world. `resolveStyle` then threw "style X does not belong
 * to genre Y" from deep inside a rebuild, thousands of lines from the typo that
 * caused it. Failing here names the actual problem.
 */
export function getCanonicalStyle(genreId: string): SongStyle {
  const styles = getStylesForGenre(genreId);
  if (!styles.length) {
    throw new Error(
      `Unknown genre "${genreId}". Known genres: ${Object.keys(STYLES_BY_GENRE).filter(g => STYLES_BY_GENRE[g].length).join(', ')}`,
    );
  }
  return styles.find(s => s.canonical) ?? styles[0];
}
