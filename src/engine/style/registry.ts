import { TANGO_STYLE_MIX } from '../../data/sound/mix/tangoMix';
import { mergeMixOverrides } from '../studio/dynamicMix/resolveMixContract';
import { DEFAULT_STYLE_MASTER_PROFILE } from '../../data/sound/mix/masterProfiles';
import type { SongStyle } from '../../data/styles/schema';
import type { GenreStyleDefinition } from '../../data/schema';
import { GENRE_NAMES, GENRE_WORLDS } from '../../data/genres';
import { assembleStylePatterns } from './catalog';
import { ALL_PATTERNS, PATTERNS_BY_WORLD, PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { contractForGenre } from '../../engine/style/contracts';
import { energyForFormIntensity } from '../sheet/sectionEnergy.ts';
import type { SectionEnergy } from '../../data/schema';
import { STYLE_REFERENCES, styleReferenceKey } from '../../data/styles/styleReferences';

function styleFromSeed(worldId: string, seed: GenreStyleDefinition, canonical: boolean): SongStyle {
  const contract = contractForGenre(worldId);
  const calibrationReference = STYLE_REFERENCES[styleReferenceKey(worldId, seed.name) as keyof typeof STYLE_REFERENCES];
  // The ensemble is authored by the style seed. Never synthesize a genre-level
  // starter ensemble: a song style must inherit only its own musical personnel.
  // Repeated canonical IDs are separate ensemble parts. Keep them so a style
  // can use several synth patches or guitar roles without inventing new
  // instrument identities.
  if (!seed.calibration || !seed.arrangementSections?.length || !Object.keys(seed.sectionProgressions ?? {}).length) {
    throw new Error(`Incomplete authored style metadata: ${seed.id}`);
  }
  const instruments = [...seed.characteristicInstruments];
  const assertInstrument = (id: string) => {
    if (!INSTRUMENTS_BY_ID[id]) throw new Error(`Style ${seed.id} names unknown instrument ${id}`);
  };
  instruments.forEach(assertInstrument);
  const formSteps = seed.arrangementSections.map(section => {
    section.instruments?.forEach(assertInstrument);
    for (const id of [section.leadInstrumentId, section.soloInstrumentId]) if (id) assertInstrument(id);
    return {
      key: section.key, label: section.label, kind: section.kind, bars: section.bars,
      intensity: section.intensity, instrumentIds: section.instruments,
      leadInstrumentId: section.leadInstrumentId, soloInstrumentId: section.soloInstrumentId,
      soloMode: section.soloMode, bpm: section.bpm, tempoFeel: section.tempoFeel,
    };
  });
  const authoredEnsemble = Object.entries(seed.calibration.roles).map(([role, preference], i) => {
    preference.preferredInstruments.forEach(assertInstrument);
    return { role, instrumentIds: [...preference.preferredInstruments], priority: 100 - i };
  });
  if (!authoredEnsemble.some(part => part.instrumentIds.length)) throw new Error(`Style ${seed.id} has no authored ensemble`);
  return {
    id: seed.id,
    sourceProvenance: {
      'form.sectionVocab':seed.arrangementSections?.length ? 'style' : 'genre', 'form.templates':seed.arrangementSections?.length ? 'style' : 'genre',
      'form.preferredMeters': seed.preferredMeters?.length ? 'style' : 'genre',
      'harmony.model':'genre', 'harmony.modePolicy':'genre', 'harmony.progressionTemplates': Object.keys(seed.sectionProgressions ?? {}).length ? 'style' : 'genre',
      'harmony.chordVocabulary':'genre', 'harmony.harmonicRhythm':'genre', 'harmony.bassMotion':'genre',
      'harmony.sectionProgressions': Object.keys(seed.sectionProgressions ?? {}).length ? 'style' : 'hardcoded',
      'rhythm.meter': seed.preferredMeters?.length ? 'style' : 'genre',
      'rhythm.tempoRange': seed.tempoRange ? 'style' : 'genre', 'rhythm.defaultBpm': seed.tempoRange ? 'style' : 'genre',
      'rhythm.feel': seed.grooveMechanics?.microtimingFeel ? 'style' : 'genre',
      'rhythm.swingPercentage': seed.grooveMechanics?.swingPercentage !== undefined ? 'style' : 'genre',
      'rhythm.anticipationOffsetSteps': seed.grooveMechanics?.anticipationOffsetSteps !== undefined ? 'style' : 'hardcoded',
      'rhythm.microtimingFeel': seed.grooveMechanics?.microtimingFeel ? 'style' : 'genre',
      'rhythm.humanizeJitterMs':'genre', 'melody.scaleMode':seed.scaleMode ? 'style' : 'genre', 'arrangement.ensemble':'style',
      'arrangement.energyMappings':'genre', 'sound.instrumentPalette':'style',
      'sound.masterProfile.pocket':'default', 'sound.masterProfile.lift':'default',
    },
    name: seed.name,
    calibration: seed.calibration,
    genres:[worldId], primaryGenre:worldId,
    kind:canonical ? 'canonical' : 'form', canonical,
    summary: calibrationReference?.qualities.length
      ? calibrationReference.qualities.join('; ')
      : seed.description,
    signatureTraits:[...(seed.coreConcepts ?? seed.rhythmicGrammar ?? [seed.name])],
    ...(calibrationReference ? {
      reference: { credit: calibrationReference.credit, ...(calibrationReference.recording ? { recording: calibrationReference.recording } : {}) },
      calibrationQualities: [...calibrationReference.qualities],
    } : {}),
    era:seed.era, region:seed.origin,
    form:{
      sectionVocab:[...contract.form],
      templates:[{w:1, value:formSteps}],
      preferredMeters:[...seed.preferredMeters],
    },
    harmony:{
      model:seed.harmonyModel ?? contract.harmonyModel,
      modePolicy: seed.scaleMode ?? contract.pitchModel.toLowerCase().replace(/\s+/g, '-'),
      progressionTemplates:Object.entries(seed.sectionProgressions!).map(([section, value]) => {
        if (!value?.length) throw new Error(`Style ${seed.id} has empty harmony for ${section}`);
        return {w:1, value:[...value]};
      }),
      chordVocabulary:Array.from(new Set([...(seed.calibration?.harmony.chordQualities ?? contract.harmonyVocabulary), ...(Object.values(seed.sectionProgressions ?? {}).flatMap(x => x).map(String))])),
      harmonicRhythm:seed.calibration?.harmony.harmonicRhythm ?? contract.harmonicRhythm,
      bassMotion:seed.bassMotion ?? contract.bass.style,
      sectionProgressions: seed.sectionProgressions ?? {},
      tuningSystem: seed.tuningSystem ?? contract.tuningSystem,
      preferredVoicingTones: seed.calibration?.harmony.preferredVoicingTones,
      voicingTonesByRole: seed.calibration?.harmony.voicingTonesByRole,
      pitchSystem: seed.calibration?.harmony.pitchSystem,
      requiresChords: seed.calibration?.harmony.requiresChords,
      cadences: seed.calibration ? [{ w: 1, value: seed.calibration.harmony.cadences }] : undefined,
    },
    rhythm:{
      meter:seed.preferredMeters?.[0] ?? contract.meter,
      tempoRange:seed.tempoRange as [number,number],
      defaultBpm:Math.round((seed.tempoRange[0] + seed.tempoRange[1]) / 2),
      feel:seed.grooveMechanics?.microtimingFeel ?? contract.groove.name,
      swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
      anticipationOffsetSteps:seed.grooveMechanics?.anticipationOffsetSteps ?? 0,
      microtimingFeel: seed.grooveMechanics?.microtimingFeel === 'quantized' ? 'straight' : (seed.grooveMechanics?.microtimingFeel ?? (contract.groove.swing > .57 ? 'swung' : 'straight')),
      humanizeJitterMs:seed.grooveMechanics?.humanizeJitterMs ?? contract.groove.humanizeMs,
      timelineClave:contract.timeline === 'none' ? undefined : contract.timeline,
      signatureCell:seed.signatureCell ?? contract.timeline,
      grooveMechanics:{
        swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
        anticipationOffsetSteps:seed.grooveMechanics?.anticipationOffsetSteps ?? 0,
        microtimingFeel: seed.grooveMechanics?.microtimingFeel ?? 'straight',
        humanizeJitterMs:seed.grooveMechanics?.humanizeJitterMs ?? contract.groove.humanizeMs,
      },
    },
    melody:{
      scaleMode:seed.scaleMode ?? contract.pitchModel,
      phraseLengthsBars:[4,8],
      chordToneTargeting:contract.harmonyModel === 'functional',
      callAndResponse:/call|answer|coro|response/i.test(contract.ensemble.lead ?? '') || /call|response/i.test(contract.ensemble.interaction ?? ''),
      ornamentVocabulary:Object.values(contract.articulationGrammar).flat(),
    },
    arrangement:{
      ensemble:authoredEnsemble,
      energyMappings:Object.fromEntries(formSteps.map(step => [step.key, energyForFormIntensity(step.intensity)])) as Partial<Record<string, SectionEnergy>>,
      doublingRules:[contract.ensemble.motor ?? '', contract.ensemble.answer ?? ''].filter(Boolean),
    },
    sound:{
      ...(seed.calibration?.mix || TANGO_STYLE_MIX[seed.id] ? { mix: mergeMixOverrides(seed.calibration?.mix ?? {}, TANGO_STYLE_MIX[seed.id]) } : {}),
      instrumentPalette:instruments.map(value => ({value: String(value), w: 1})),
      masterProfile:{...DEFAULT_STYLE_MASTER_PROFILE},
    },
    instrumentDialects: seed.instrumentDialects ?? contract.instrumentDialects ?? {},
    patterns:{require:[],preferred:[],allowed:[],avoid:[]}, gestures:{}, rules:{
      require:contract.timelineRequired ? [{tag:'timeline-lock',description:contract.timeline}] : [],
      forbid:contract.forbidden.map(tag => ({tag})),
    },
  };
}

const baseStyles: SongStyle[] = [];
for (const world of GENRE_WORLDS) {
  for (const [index, seed] of (world.styleDefinitions ?? []).entries()) {
    const canonical = seed.id === world.homeStyleId || (!world.homeStyleId && index === 0);
    baseStyles.push(styleFromSeed(world.id, seed, canonical));
  }
}

const styles = baseStyles;
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
