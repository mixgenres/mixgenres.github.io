import type { GenreWorld, MusicalPattern } from '../schema';

// Keep this registry explicit so it can be loaded by both Vite and Node-based checks.
import { GENRE_WORLD as AfrobeatWorld } from './afrobeat';
import { GENRE_WORLD as AfrobeatsWorld } from './afrobeats';
import { GENRE_WORLD as AmapianoWorld } from './amapiano';
import { GENRE_WORLD as AmbientWorld } from './ambient';
import { GENRE_WORLD as AndeanWorld } from './andean';
import { GENRE_WORLD as ArabicWorld } from './arabic';
import { GENRE_WORLD as BachataWorld } from './bachata';
import { GENRE_WORLD as BassWorld } from './bass';
import { GENRE_WORLD as BluesWorld } from './blues';
import { GENRE_WORLD as BollywoodWorld } from './bollywood';
import { GENRE_WORLD as BrazilianWorld } from './brazilian';
import { GENRE_WORLD as ChineseWorld } from './chinese';
import { GENRE_WORLD as CinematicWorld } from './cinematic';
import { GENRE_WORLD as ClassicalWorld } from './classical';
import { GENRE_WORLD as CountryWorld } from './country';
import { GENRE_WORLD as DangdutWorld } from './dangdut';
import { GENRE_WORLD as DesertBluesWorld } from './desert-blues';
import { GENRE_WORLD as ElectronicWorld } from './electronic';
import { GENRE_WORLD as EthiopianWorld } from './ethiopian';
import { GENRE_WORLD as FlamencoWorld } from './flamenco';
import { GENRE_WORLD as FolkWorld } from './folk';
import { GENRE_WORLD as FunkWorld } from './funk';
import { GENRE_WORLD as GamelanWorld } from './gamelan';
import { GENRE_WORLD as GnawaWorld } from './gnawa';
import { GENRE_WORLD as GospelWorld } from './gospel';
import { GENRE_WORLD as HipHopWorld } from './hip-hop';
import { GENRE_WORLD as HouseWorld } from './house';
import { GENRE_WORLD as IndianClassicalWorld } from './indian-classical';
import { GENRE_WORLD as IndustrialWorld } from './industrial';
import { GENRE_WORLD as JapaneseWorld } from './japanese';
import { GENRE_WORLD as JazzWorld } from './jazz';
import { GENRE_WORLD as KizombaWorld } from './kizomba';
import { GENRE_WORLD as KoreanWorld } from './korean';
import { GENRE_WORLD as LatinWorld } from './latin';
import { GENRE_WORLD as MbalaxWorld } from './mbalax';
import { GENRE_WORLD as MetalWorld } from './metal';
import { GENRE_WORLD as MexicanWorld } from './mexican';
import { GENRE_WORLD as PersianWorld } from './persian';
import { GENRE_WORLD as PopWorld } from './pop';
import { GENRE_WORLD as PunkWorld } from './punk';
import { GENRE_WORLD as QawwaliWorld } from './qawwali';
import { GENRE_WORLD as RAndBWorld } from './r-and-b';
import { GENRE_WORLD as ReggaeWorld } from './reggae';
import { GENRE_WORLD as ReggaetonWorld } from './reggaeton';
import { GENRE_WORLD as RockWorld } from './rock';
import { GENRE_WORLD as SalsaWorld } from './salsa';
import { GENRE_WORLD as SoukousWorld } from './soukous';
import { GENRE_WORLD as SteppeWorld } from './steppe';
import { GENRE_WORLD as SwingWorld } from './swing';
import { GENRE_WORLD as TaarabWorld } from './taarab';
import { GENRE_WORLD as TangoWorld } from './tango';
import { GENRE_WORLD as TimbaWorld } from './timba';
import { GENRE_WORLD as TurkishWorld } from './turkish';
import { GENRE_WORLD as WeirdWorld } from './weird';
import { GENRE_WORLD as ZoukWorld } from './zouk';

const discoveredWorlds = [
  AfrobeatWorld,
  AfrobeatsWorld,
  AmapianoWorld,
  AmbientWorld,
  AndeanWorld,
  ArabicWorld,
  BachataWorld,
  BassWorld,
  BluesWorld,
  BollywoodWorld,
  BrazilianWorld,
  ChineseWorld,
  CinematicWorld,
  ClassicalWorld,
  CountryWorld,
  DangdutWorld,
  DesertBluesWorld,
  ElectronicWorld,
  EthiopianWorld,
  FlamencoWorld,
  FolkWorld,
  FunkWorld,
  GamelanWorld,
  GnawaWorld,
  GospelWorld,
  HipHopWorld,
  HouseWorld,
  IndianClassicalWorld,
  IndustrialWorld,
  JapaneseWorld,
  JazzWorld,
  KizombaWorld,
  KoreanWorld,
  LatinWorld,
  MbalaxWorld,
  MetalWorld,
  MexicanWorld,
  PersianWorld,
  PopWorld,
  PunkWorld,
  QawwaliWorld,
  RAndBWorld,
  ReggaeWorld,
  ReggaetonWorld,
  RockWorld,
  SalsaWorld,
  SoukousWorld,
  SteppeWorld,
  SwingWorld,
  TaarabWorld,
  TangoWorld,
  TimbaWorld,
  TurkishWorld,
  WeirdWorld,
  ZoukWorld,
].filter(isGenreWorld);

function isGenreWorld(value: unknown): value is GenreWorld {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<GenreWorld>;
  return typeof candidate.id === 'string'
    && typeof candidate.name === 'string'
    && candidate.catalogGeneration === 'genre-style-map-v1'
    && Array.isArray(candidate.styleDefinitions)
    && Array.isArray(candidate.patterns);
}


/** Every public genre is defined by its own folder and world definition. */
export const GENRE_WORLDS: GenreWorld[] = discoveredWorlds.map(world => {
  const patterns = (world.patterns ?? []).filter(pattern => pattern.worldId === world.id);
  const homeStyleId = world.styleDefinitions.some(style => style.id === world.homeStyleId)
    ? world.homeStyleId
    : world.styleDefinitions[0]?.id;
  return {
    ...world,
    patterns,
    // Capture the authored default on the world itself so later sorting or UI
    // presentation cannot silently change the default song style.
    homeStyleId,
  };
}).sort((a, b) => a.name.localeCompare(b.name));

export const GENRE_WORLDS_BY_ID: Record<string, GenreWorld> = Object.fromEntries(
  GENRE_WORLDS.map(world => [world.id, world])
);

export const GENRE_NAMES: Record<string, string> = Object.fromEntries(
  GENRE_WORLDS.map(world => [world.id, world.name])
);

function shortDescription(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function cleanPatternName(name: string, shortName?: string): string {
  const label = String(shortName || name || '')
    .replace(/\s*\[[^\]]+\]\s*/g, ' ')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
  return label;
}

const PATTERN_NAME_OVERRIDES: Record<string, string> = {
  'afro-log-drum-bass': 'Log Drum Bass Groove',
  'afro-highlife-guitar': 'Highlife Guitar Pattern',
  'afro-shekere-shaker': 'Shekere Shaker Pattern',
  'afro-horn-stabs': 'Afrobeat Horn Stabs',
  'bachata-roster-drums': 'Bachata Drum Groove',
  'brz-bossa-violao': 'Bossa Violão Comping',
  'brz-choro-maxixe': 'Choro–Maxixe Accompaniment',
  'brz-baiao-zabumba': 'Baião Zabumba Groove',
  'folk-roster-bass': 'Folk Bass Groove',
  'folk-roster-': 'Folk Accompaniment Pattern',
  'rock-roster-': 'Rock Accompaniment Pattern',
  'disco-four-floor': 'Four-on-the-Floor Beat',
  'disco-offbeat-hat': 'Offbeat Open-Hat Lift',
  'disco-octave-bass': 'Octave Bass Groove',
  'disco-string-hits': 'Disco String Hits',
  'elec-4onfloor': 'Four-on-the-Floor Beat',
  'elec-dnb-amen': 'Breakbeat Groove',
  'gospel-organ-response': 'Organ Call and Response',
  'house-bass-lock': 'House Bass Groove',
  'jazz-walking-bass': 'Walking Bass',
  'jazz-ride-spangalang': 'Ride Cymbal Spang-a-Lang',
  'ska-walking-bass': 'Walking Bass',
  'ska-offbeat-guitar': 'Offbeat Guitar Chop',
  'reggae-one-drop': 'One-Drop Groove',
  'reggae-skank': 'Offbeat Skank',
  'reggaeton-dembow-kick': 'Dembow Beat',
  'rnb-pocket-backbeat': 'R&B Backbeat',
  'dnb-break-core': 'Drum and Bass Breakbeat',
  'dnb-two-step': 'Drum and Bass Two-Step',
  'ukbass-two-step': 'UK Garage Two-Step',
  'industrial-ebm-pulse': 'EBM 16th-Note Pulse',
  'tango-marcato-4': 'Marcato en 4',
  'tango-marcato-2': 'Marcato en 2',
  'flam-solea-12beat': 'Soleá 12-Beat Compás',
  'flam-buleria-compas': 'Bulería Compás',
  'flam-seguiriya-compas': 'Seguiriya Compás',
};

export function cleanGenreName(id: string, name?: string): string {
  return GENRE_NAMES[id] ?? name ?? id;
}

function normalizePattern(pattern: MusicalPattern): MusicalPattern {
  const cleanedName = cleanPatternName(pattern.name, pattern.shortName);
  const overriddenName = PATTERN_NAME_OVERRIDES[pattern.id] ?? cleanedName;
  const worldName = GENRE_NAMES[pattern.worldId];
  const name = worldName && overriddenName.toLowerCase().startsWith(`${worldName.toLowerCase()} `)
    ? overriddenName.slice(worldName.length + 1)
    : overriddenName;
  return {
    ...pattern,
    name,
    description: shortDescription(pattern.description),
    variants: (pattern.variants ?? []).map(variant => ({
      ...variant,
      description: variant.description ? shortDescription(variant.description) : variant.description,
    })),
  };
}

function isSyntheticPattern(pattern: MusicalPattern): boolean {
  const id = String(pattern.id ?? '').toLowerCase();
  const name = String(pattern.name ?? '').toLowerCase();
  return /-(phrase|call|anchor|comp|intro|verse)-\d+$/.test(id)
    || /--phrasing$/.test(id)
    || /\b(comping comping|roster-)$/.test(name.trim());
}

const uniquePatterns = new Map<string, MusicalPattern>();
for (const world of GENRE_WORLDS) {
  for (const raw of world.patterns ?? []) {
    const pattern = normalizePattern(raw);
    if (!isSyntheticPattern(pattern)) uniquePatterns.set(pattern.id, pattern);
  }
}

const namedPatternCounts = new Map<string, number>();
const namedPatternWorldCounts = new Map<string, number>();
for (const pattern of uniquePatterns.values()) {
  const key = pattern.name.trim().toLowerCase();
  namedPatternCounts.set(key, (namedPatternCounts.get(key) ?? 0) + 1);
  const worldKey = `${pattern.worldId}:${key}`;
  namedPatternWorldCounts.set(worldKey, (namedPatternWorldCounts.get(worldKey) ?? 0) + 1);
}

const seenPatternLabels = new Map<string, number>();
export const ALL_PATTERNS: MusicalPattern[] = [...uniquePatterns.values()].map(pattern => {
  const key = pattern.name.trim().toLowerCase();
  if ((namedPatternCounts.get(key) ?? 0) <= 1) return pattern;
  const worldKey = `${pattern.worldId}:${key}`;
  const occurrence = (seenPatternLabels.get(worldKey) ?? 0) + 1;
  seenPatternLabels.set(worldKey, occurrence);
  if ((namedPatternWorldCounts.get(worldKey) ?? 0) > 1) {
    return occurrence === 1 ? pattern : { ...pattern, name: `${pattern.name}, variation ${occurrence}` };
  }
  const genre = String(pattern.worldId ?? pattern.family ?? 'source');
  const genreLabels: Record<string, string> = { 'uk-bass': 'UK Bass', 'drum-and-bass': 'Drum & Bass', 'r-and-b': 'R&B', 'hip-hop': 'Hip-Hop', 'punk-hardcore': 'Punk / Hardcore' };
  const label = genreLabels[genre] ?? genre.replace(/[-_]+/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
  const prefix = `${label} `;
  return { ...pattern, name: pattern.name.toLowerCase().startsWith(prefix.toLowerCase()) ? pattern.name : `${prefix}${pattern.name}` };
});

/** Pattern pickers show shortName, so deduplicate that visible label within
 * each style/instrument/role context as well as the longer search name. */
function disambiguateChoiceLabels(patterns: MusicalPattern[]): MusicalPattern[] {
  const labels = new Map(patterns.map(pattern => [pattern.id, pattern.shortName || pattern.name]));
  const stopWords = new Set(['a','an','and','at','for','from','in','into','of','on','or','over','the','to','under','with','pattern','study','cell']);
  const title = (value: string) => value.charAt(0).toLocaleUpperCase() + value.slice(1);
  const instrumentLabel = (pattern: MusicalPattern) => {
    const id = pattern.instruments?.[0] ?? 'part';
    return id.split('-').map(title).join(' ');
  };
  const sourceWords = (pattern: MusicalPattern) => {
    const source = pattern.tags?.at(-1) ?? pattern.family ?? pattern.name;
    return source.match(/[A-Za-zÀ-ž0-9]+/g) ?? [];
  };
  const normalized = (value: string) => value.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const contextKeys = (pattern: MusicalPattern) => (pattern.styleIds ?? []).flatMap(styleId =>
    (pattern.roles ?? []).flatMap(role => (pattern.instruments ?? []).map(instrument => `${styleId}|${role}|${instrument}`)));
  const contexts = new Map<string, MusicalPattern[]>();
  for (const pattern of patterns) for (const key of contextKeys(pattern)) {
    contexts.set(key, [...(contexts.get(key) ?? []), pattern]);
  }

  for (const group of contexts.values()) {
    const byLabel = new Map<string, MusicalPattern[]>();
    for (const pattern of group) {
      const key = normalized(labels.get(pattern.id) ?? pattern.name);
      byLabel.set(key, [...(byLabel.get(key) ?? []), pattern]);
    }
    for (const duplicates of byLabel.values()) {
      if (duplicates.length < 2) continue;
      const baseLabel = labels.get(duplicates[0].id) ?? duplicates[0].name;
      const groupIds = new Set(duplicates.map(pattern => pattern.id));
      const reserved = new Set(group.filter(pattern => !groupIds.has(pattern.id))
        .map(pattern => normalized(labels.get(pattern.id) ?? pattern.name)));
      const baseWords = new Set(normalized(baseLabel).match(/[a-z0-9]+/g) ?? []);
      const descriptorWords = duplicates.map(pattern => new Set(sourceWords(pattern).map(normalized)));
      const ordered = duplicates;
      const used = new Set<string>();

      for (const pattern of ordered) {
        const current = labels.get(pattern.id) ?? pattern.name;
        let candidate = current;
        if (used.has(normalized(candidate)) || (pattern !== ordered[0] && normalized(candidate) === normalized(baseLabel))) {
          const instrument = instrumentLabel(pattern);
          const shortInstrument = instrument.split(/\s+/).at(-1) ?? instrument;
          const tokens = sourceWords(pattern).filter(word => {
            const key = normalized(word);
            if (key.length < 3 || stopWords.has(key) || baseWords.has(key)) return false;
            const instrumentWords: string[] = normalized(instrument).match(/[a-z0-9]+/g) ?? [];
            if (instrumentWords.includes(key)) return false;
            return descriptorWords.filter(words => words.has(key)).length === 1;
          });
          const ordinal = pattern.name.match(/variation\s+(\d+)/i)?.[1];
          const options = [...tokens.map(word => `${instrument} ${title(word)}`),
            ...(ordinal ? [`${shortInstrument} option ${ordinal}`] : []), `${shortInstrument} option 2`, `${shortInstrument} option 3`]
            .filter(Boolean);
          candidate = options.find(option => !used.has(normalized(option))
            && !reserved.has(normalized(option)) && (option.split(/\s+/).length <= 3)) ?? `${shortInstrument} option 4`;
        }
        labels.set(pattern.id, candidate);
        used.add(normalized(candidate));
      }
    }
  }

  return patterns.map(pattern => ({ ...pattern, shortName: labels.get(pattern.id) ?? pattern.shortName }));
}

const deduplicatedChoiceLabels = disambiguateChoiceLabels(ALL_PATTERNS);
ALL_PATTERNS.splice(0, ALL_PATTERNS.length, ...deduplicatedChoiceLabels);

export const PATTERNS_BY_ID: Record<string, MusicalPattern> = Object.fromEntries(
  ALL_PATTERNS.map(pattern => [pattern.id, pattern])
);

export const PATTERNS_BY_WORLD: Record<string, MusicalPattern[]> = Object.fromEntries(
  GENRE_WORLDS.map(world => [world.id,
    (world.patterns ?? []).map(pattern => PATTERNS_BY_ID[pattern.id]).filter((pattern): pattern is MusicalPattern => !!pattern),
  ])
);
export const PATTERNS_BY_GENRE = PATTERNS_BY_WORLD;

export function getPatternById(id: string): MusicalPattern | undefined {
  return PATTERNS_BY_ID[id];
}

export type PatternFeel = 'laid-back' | 'bouncy' | 'rolling' | 'hypnotic' | 'cinematic';
export const FEEL_LABELS: Record<PatternFeel, string> = {
  'laid-back': 'Laid-back', bouncy: 'Bouncy', rolling: 'Rolling', hypnotic: 'Hypnotic', cinematic: 'Cinematic',
};
export const FEEL_ORDER: PatternFeel[] = ['laid-back', 'bouncy', 'rolling', 'hypnotic', 'cinematic'];
const PATTERN_FEELS: Record<string, PatternFeel[]> = {};

export function feelsForPattern(patternId: string): PatternFeel[] {
  const pattern = PATTERNS_BY_ID[patternId];
  if (!pattern) return [];
  const explicit = PATTERN_FEELS[pattern.id];
  if (explicit) return explicit;
  const vocabulary = `${pattern.name} ${pattern.family} ${(pattern.tags ?? []).join(' ')} ${pattern.description}`.toLowerCase();
  const feels: PatternFeel[] = [];
  if (/laid.?back|relaxed|soft|slow|sparse|ballad|behind/.test(vocabulary)) feels.push('laid-back');
  if (/bounce|bouncy|shuffle|swing|dance|skip|skank/.test(vocabulary)) feels.push('bouncy');
  if (/roll|rolling|triplet|flow|drum.?and.?bass|breakbeat/.test(vocabulary)) feels.push('rolling');
  if (/hypnotic|loop|ostinato|drone|minimal|motorik|repetitive/.test(vocabulary)) feels.push('hypnotic');
  if (/cinematic|dramatic|epic|orchestral|build|transition|breakdown/.test(vocabulary)) feels.push('cinematic');
  return feels.length ? feels : ['bouncy'];
}
