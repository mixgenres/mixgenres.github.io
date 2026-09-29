import type { SongStyle } from './schema';
import type { GenreStyleDefinition } from '../../types';
import { GENRE_WORLDS, GENRE_NAMES } from '../genres';
import { buildCuratedStyles, assembleStylePatterns } from './catalog';
import { applyStyleDialect } from './styleDialect';
import { ALL_PATTERNS, PATTERNS_BY_WORLD, PATTERNS_BY_ID, GENRE_SOURCE_MAP } from '../genres';
import { INSTRUMENTS_BY_ID } from '../instruments';
import { contractForGenre } from './contracts';
import { energyForFormIntensity } from '../../engine/metadata/energy';
import type { SectionEnergy } from '../../types';

const GENRE_RHYTHM: Record<string, { bpm: number; range: [number, number]; meter: string; feel: string; swing: number }> = {
  afrobeats:{bpm:108,range:[100,118],meter:'4/4',feel:'laid-back syncopation',swing:52}, bachata:{bpm:128,range:[118,138],meter:'4/4',feel:'derecho pocket',swing:52},
  blues:{bpm:92,range:[72,110],meter:'4/4',feel:'shuffle',swing:63}, brazilian:{bpm:112,range:[88,132],meter:'2/4',feel:'Brazilian syncopation',swing:50},
  country:{bpm:110,range:[90,132],meter:'4/4',feel:'train shuffle',swing:56}, cumbia:{bpm:102,range:[92,112],meter:'4/4',feel:'cumbia sway',swing:50},
  disco:{bpm:120,range:[112,128],meter:'4/4',feel:'four-on-floor',swing:50}, electronic:{bpm:124,range:[90,140],meter:'4/4',feel:'electronic grid',swing:50},
  folk:{bpm:96,range:[78,122],meter:'4/4',feel:'acoustic pulse',swing:52}, funk:{bpm:104,range:[92,116],meter:'4/4',feel:'on-the-one',swing:55},
  gospel:{bpm:104,range:[76,124],meter:'4/4',feel:'church pocket',swing:54}, 'hip-hop':{bpm:90,range:[70,110],meter:'4/4',feel:'laid-back drag',swing:57},
  house:{bpm:124,range:[118,130],meter:'4/4',feel:'club grid',swing:50}, jazz:{bpm:140,range:[110,180],meter:'4/4',feel:'swing',swing:64},
  kizomba:{bpm:92,range:[82,102],meter:'4/4',feel:'deep laid-back',swing:55},
  tango:{bpm:120,range:[108,132],meter:'4/4',feel:'marcato',swing:50}, flamenco:{bpm:96,range:[70,140],meter:'12/8',feel:'compás',swing:50},
  metal:{bpm:150,range:[110,210],meter:'4/4',feel:'machine-tight',swing:50}, 'r-and-b':{bpm:82,range:[65,105],meter:'4/4',feel:'behind-the-beat',swing:54},
  reggae:{bpm:78,range:[68,94],meter:'4/4',feel:'one-drop',swing:50}, reggaeton:{bpm:96,range:[88,108],meter:'4/4',feel:'dembow',swing:50},
  rock:{bpm:128,range:[100,160],meter:'4/4',feel:'driving',swing:50}, salsa:{bpm:96,range:[88,108],meter:'4/4',feel:'clave pocket',swing:52},
  ska:{bpm:168,range:[145,190],meter:'4/4',feel:'upbeat offbeat',swing:50}, soul:{bpm:94,range:[70,112],meter:'4/4',feel:'deep pocket',swing:54},
  swing:{bpm:160,range:[130,220],meter:'4/4',feel:'big-band swing',swing:66}, timba:{bpm:100,range:[92,112],meter:'4/4',feel:'gear pocket',swing:52},
  zouk:{bpm:100,range:[90,110],meter:'4/4',feel:'kompa lean',swing:54}, 'drum-and-bass':{bpm:174,range:[165,180],meter:'4/4',feel:'breakbeat drive',swing:50},
  industrial:{bpm:128,range:[110,145],meter:'4/4',feel:'machine pulse',swing:50}, 'punk-hardcore':{bpm:180,range:[150,220],meter:'4/4',feel:'straight drive',swing:50},
  'uk-bass':{bpm:132,range:[125,140],meter:'4/4',feel:'broken club',swing:50},
};

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}


function styleFromSeed(worldId: string, seed: GenreStyleDefinition, index: number): SongStyle {
  const contract = contractForGenre(worldId);
  const rhythm = GENRE_RHYTHM[worldId] ?? { bpm: 110, range:[80,140] as [number,number], meter:contract.meter, feel:contract.groove.name, swing:contract.groove.swing * 100 };
  // The ensemble is authored by the style seed. Never synthesize a genre-level
  // starter ensemble: a song style must inherit only its own musical personnel.
  const instruments = Array.from(new Set((seed.characteristicInstruments ?? ['piano','bass','drums','guitar','tenor-sax'])
    .filter((id: string) => INSTRUMENTS_BY_ID[id])));
  const formSteps = contract.form.map((name, i) => ({
    key: `${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i}`,
    label: name,
    kind: name,
    bars: i === 0 ? 4 : 8,
    intensity: i === contract.form.length - 1 ? 'low' : (i >= contract.form.length - 2 ? 'high' : 'medium') as 'low'|'medium'|'high'|'peak',
  }));
  const ensemble = instruments.map((instrumentId: string, i: number) => {
    const def = INSTRUMENTS_BY_ID[instrumentId];
    const role = def?.voicing === 'bass' ? 'bass'
      : def?.voicing === 'unpitched' ? 'percussion'
      : def?.voicing === 'single' ? 'melody' : 'harmony';
    return { role, instrumentIds:[instrumentId], priority:10-i };
  });
  return {
    id: seed.id,
    name: seed.name,
    genres:[worldId], primaryGenre:worldId,
    kind:index === 0 ? 'canonical' : 'form', canonical:index === 0,
    summary:shortText(seed.description || `${seed.name} ${GENRE_NAMES[worldId]}`),
    signatureTraits:(seed.coreConcepts ?? seed.rhythmicGrammar ?? [seed.name]).slice(0, 6),
    era:seed.era, region:seed.origin,
    form:{
      sectionVocab:[...contract.form],
      templates:[{w:1, value:formSteps}],
      defaultSpotlights:{
        verse:['lead'],
        chorus:['lead'],
        coro:['lead'],
        refrain:['lead'],
        montuno:['harmony','pulse'],
      },
      preferredMeters:[contract.meter],
    },
    harmony:{
      model:contract.harmonyModel,
      modePolicy: contract.pitchModel.toLowerCase().includes('minor') ? 'minor' : 'major',
      progressionTemplates:[],
      chordVocabulary:Array.from(new Set([...contract.harmonyVocabulary, ...(Object.values(seed.sectionProgressions ?? {}).flatMap(x => x).map(String))])),
      harmonicRhythm:contract.harmonicRhythm,
      bassMotion:contract.bass.style,
      sectionProgressions: seed.sectionProgressions ?? {},
      tuningSystem: seed.tuningSystem ?? contract.tuningSystem,
    },
    rhythm:{
      meter:contract.meter,
      tempoRange:(seed.tempoRange ?? rhythm.range) as [number,number],
      defaultBpm:Math.round(((seed.tempoRange?.[0] ?? rhythm.bpm) + (seed.tempoRange?.[1] ?? rhythm.bpm)) / 2),
      feel:seed.grooveMechanics?.microtimingFeel ?? contract.groove.name,
      swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
      anticipationOffsetSteps:0,
      microtimingFeel: seed.grooveMechanics?.microtimingFeel === 'quantized' ? 'straight' : (seed.grooveMechanics?.microtimingFeel ?? (contract.groove.swing > .57 ? 'swung' : 'straight')),
      humanizeJitterMs:contract.groove.humanizeMs,
      timelineClave:contract.timeline === 'none' ? undefined : contract.timeline,
      signatureCell:seed.signatureCell ?? contract.timeline,
      grooveMechanics:{
        swingPercentage:contract.groove.swing * 100,
        anticipationOffsetSteps:contract.groove.anticipationMs < 0 ? -1 : 0,
        microtimingFeel: seed.grooveMechanics?.microtimingFeel ?? 'straight',
        humanizeJitterMs:contract.groove.humanizeMs,
      },
    },
    melody:{
      scaleMode:contract.pitchModel,
      phraseLengthsBars:[4,8],
      chordToneTargeting:contract.harmonyModel === 'functional',
      callAndResponse:/call|answer|coro|response/i.test(contract.ensemble.lead ?? '') || /call|response/i.test(contract.ensemble.interaction ?? ''),
      ornamentVocabulary:Object.values(contract.articulationGrammar).flat(),
    },
    arrangement:{
      ensemble,
      energyMappings:Object.fromEntries(formSteps.map(step => [step.key, energyForFormIntensity(step.intensity)])) as Partial<Record<string, SectionEnergy>>,
      doublingRules:[contract.ensemble.motor ?? '', contract.ensemble.answer ?? ''].filter(Boolean),
    },
    sound:{
      instrumentPalette:instruments.map(value => ({value: String(value), w: 1})),
      masterProfile:{pocket:0.5,lift:0.5},
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
for (const pattern of curatedPatterns) {
  PATTERNS_BY_ID[pattern.id] = pattern;
  const source = pattern.worldId;
  for (const [genreId, sourceId] of Object.entries(GENRE_SOURCE_MAP)) {
    if (source === genreId || sourceId === source) (PATTERNS_BY_WORLD[genreId] ??= []).push(pattern);
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


