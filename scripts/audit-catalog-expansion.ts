import { GENRE_WORLDS, ALL_PATTERNS } from '../src/data/genres';
import { CATALOG_EXPANSION_STYLE_IDS, STYLE_FORM_TEMPLATES } from '../src/data/styles/styleFormTemplates';
import { ALL_STYLES } from '../src/engine/style/registry';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';

const failures: string[] = [];
const expect = (condition: unknown, message: string) => { if (!condition) failures.push(message); };

const publicWorldIds = new Set(GENRE_WORLDS.map(world => world.id));
const expansionIds = new Set<string>(CATALOG_EXPANSION_STYLE_IDS);
const expansionStyles = ALL_STYLES.filter(style => expansionIds.has(style.id));
const expansionPatterns = ALL_PATTERNS.filter(pattern => pattern.id.startsWith('tech-') || pattern.id.startsWith('style-'));
const styleIds = new Set(ALL_STYLES.map(style => style.id));

expect(GENRE_WORLDS.length === 32, `Expected 32 public genres; found ${GENRE_WORLDS.length}.`);
expect(expansionStyles.length === 145, `Expected 145 new styles; found ${expansionStyles.length}.`);
expect(expansionIds.size === 145, `Expected 145 unique expansion style IDs; found ${expansionIds.size}.`);
expect(expansionPatterns.length === 487, `Expected 487 expansion patterns; found ${expansionPatterns.length}.`);

for (const style of expansionStyles) {
  expect(publicWorldIds.has(style.primaryGenre), `Style ${style.id} targets unknown world ${style.primaryGenre}.`);
  expect(STYLE_FORM_TEMPLATES[style.id]?.length > 0, `Style ${style.id} has no form template.`);
  expect((style.referenceArtists?.length ?? 0) > 0, `Style ${style.id} has no reference lineage.`);
  expect((style.techniques?.length ?? 0) > 0, `Style ${style.id} has no technique vocabulary.`);
  for (const instrumentId of style.sound?.instrumentPalette?.map(item => item.value) ?? []) {
    expect(!!INSTRUMENTS_BY_ID[instrumentId], `Style ${style.id} references unknown runtime instrument ${instrumentId}.`);
  }
  const seed = GENRE_WORLDS.find(world => world.id === style.primaryGenre)?.styleDefinitions?.find(def => def.id === style.id);
  expect(!!seed, `Style ${style.id} is missing from its genre's authored styleDefinitions.`);
  for (const [section, progression] of Object.entries(seed?.sectionProgressions ?? {})) {
    expect(Array.isArray(progression) && progression.length === 4, `Style ${style.id} section ${section} does not use a four-chord cell.`);
  }
}

for (const pattern of expansionPatterns) {
  expect(publicWorldIds.has(pattern.worldId), `Pattern ${pattern.id} targets unknown world ${pattern.worldId}.`);
  expect(pattern.variants !== undefined, `Pattern ${pattern.id} is missing variants.`);
  expect(pattern.description.trim().split(/\s+/).length <= 6, `Pattern ${pattern.id} exceeds six-word description.`);
  expect(pattern.subdivisions > 0, `Pattern ${pattern.id} has invalid subdivisions.`);
  expect(pattern.onsetGrid.every(step => Number.isFinite(step) && step >= 0 && step < pattern.subdivisions), `Pattern ${pattern.id} has an onset outside its grid.`);
  expect(pattern.accentProfile === undefined || pattern.accentProfile.length === pattern.onsetGrid.length, `Pattern ${pattern.id} accent profile length mismatch.`);
  expect(pattern.velocityProfile === undefined || pattern.velocityProfile.length === pattern.onsetGrid.length, `Pattern ${pattern.id} velocity profile length mismatch.`);
  expect(pattern.durationGrid === undefined || pattern.durationGrid.length === pattern.onsetGrid.length, `Pattern ${pattern.id} duration profile length mismatch.`);
  for (const instrumentId of pattern.instruments ?? []) {
    expect(!!INSTRUMENTS_BY_ID[instrumentId], `Pattern ${pattern.id} references unknown instrument ${instrumentId}.`);
  }
  if (pattern.id.startsWith('style-')) {
    expect(pattern.styleIds?.length === 1 && styleIds.has(pattern.styleIds[0]), `Signature pattern ${pattern.id} must have exactly one registered style owner.`);
  } else {
    expect(!pattern.styleIds?.some(id => !styleIds.has(id)), `Technique pattern ${pattern.id} references an unknown style owner.`);
  }
}

if (failures.length) {
  throw new Error(`Catalog expansion audit failed:\n- ${failures.join('\n- ')}`);
}

console.log(`Catalog expansion audit passed: ${expansionStyles.length} styles, ${expansionPatterns.length} patterns.`);
