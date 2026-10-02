import type { GenreWorld, MusicalPattern } from '../schema';

import { AFROBEATS_WORLD } from './afrobeats';
import { BACHATA_WORLD } from './bachata';
import { BLUES_WORLD } from './blues';
import { BRAZILIAN_WORLD } from './brazilian';
import { COUNTRY_WORLD } from './country';
import { CUMBIA_WORLD } from './cumbia';
import { DISCO_WORLD } from './disco';
import { ELECTRONIC_WORLD } from './electronic';
import { FOLK_WORLD } from './folk';
import { FUNK_WORLD } from './funk';
import { GOSPEL_WORLD } from './gospel';
import { HIP_HOP_WORLD } from './hip-hop';
import { HOUSE_WORLD } from './house';
import { JAZZ_WORLD } from './jazz';
import { KIZOMBA_WORLD } from './kizomba';
import { TANGO_WORLD } from './tango';
import { FLAMENCO_WORLD } from './flamenco';
import { METAL_WORLD } from './metal';
import { R_AND_B_WORLD } from './r-and-b';
import { REGGAE_WORLD } from './reggae';
import { REGGAETON_WORLD } from './reggaeton';
import { ROCK_WORLD } from './rock';
import { SALSA_WORLD } from './salsa';
import { SKA_WORLD } from './ska';
import { SOUL_WORLD } from './soul';
import { SWING_WORLD } from './swing';
import { TIMBA_WORLD } from './timba';
import { ZOUK_WORLD } from './zouk';
import { DRUM_AND_BASS_WORLD } from './drum-and-bass';
import { INDUSTRIAL_WORLD } from './industrial';
import { PUNK_HARDCORE_WORLD } from './punk-hardcore';
import { UK_BASS_WORLD } from './uk-bass';
import { KPOP_WORLD, CHINESE_TRADITIONAL_WORLD, JAPANESE_POP_WORLD, JAPANESE_ROCK_WORLD } from './east-asian';
import { CANONICAL_GENRE_PATTERNS } from './canonicalPatterns';
import { DRUM_AND_BASS_STYLES, DRUM_AND_BASS_WORLD_DETAILS } from './drum-and-bass/standalone';
import { UK_BASS_STYLES, UK_BASS_WORLD_DETAILS } from './uk-bass/standalone';

const STANDALONE_WORLD_OVERRIDES: Record<string, Partial<GenreWorld>> = {
  'drum-and-bass': { ...DRUM_AND_BASS_WORLD_DETAILS, styleDefinitions: DRUM_AND_BASS_STYLES },
  'uk-bass': { ...UK_BASS_WORLD_DETAILS, styleDefinitions: UK_BASS_STYLES },
};

const INAPPROPRIATE_ELECTRONIC_PATTERNS: Record<string, Set<string>> = {
  'drum-and-bass': new Set(['4onfloor', 'techno-rumble', 'trance-16ths', 'dubstep-half', 'footwork', 'ukg', 'electro', 'ambient', 'synthwave', 'synth']),
  'uk-bass': new Set(['techno-rumble', 'trance-16ths', 'footwork', 'electro', 'synthwave', 'synth']),
};

/** Every public genre is defined by its own folder and world definition. */
export const GENRE_WORLDS: GenreWorld[] = [
  AFROBEATS_WORLD, BACHATA_WORLD, BLUES_WORLD, BRAZILIAN_WORLD, COUNTRY_WORLD, CUMBIA_WORLD,
  DISCO_WORLD, ELECTRONIC_WORLD, FOLK_WORLD, FUNK_WORLD, GOSPEL_WORLD, HIP_HOP_WORLD,
  HOUSE_WORLD, JAZZ_WORLD, KIZOMBA_WORLD, TANGO_WORLD, FLAMENCO_WORLD, METAL_WORLD,
  R_AND_B_WORLD, REGGAE_WORLD, REGGAETON_WORLD, ROCK_WORLD, SALSA_WORLD, SKA_WORLD,
  SOUL_WORLD, SWING_WORLD, TIMBA_WORLD, ZOUK_WORLD, DRUM_AND_BASS_WORLD, INDUSTRIAL_WORLD,
  PUNK_HARDCORE_WORLD, UK_BASS_WORLD, KPOP_WORLD, CHINESE_TRADITIONAL_WORLD, JAPANESE_POP_WORLD, JAPANESE_ROCK_WORLD,
].map(world => {
  const native = CANONICAL_GENRE_PATTERNS.filter(pattern => pattern.worldId === world.id);
  const excluded = INAPPROPRIATE_ELECTRONIC_PATTERNS[world.id];
  const patterns = new Map((world.patterns ?? [])
    .filter(pattern => {
      const marker = String(pattern.id).lastIndexOf('--elec-');
      const sharedElectronicId = marker >= 0 ? pattern.id.slice(marker + '--elec-'.length) : '';
      return !excluded?.has(sharedElectronicId);
    })
    .map(pattern => [pattern.id, pattern]));
  for (const pattern of native) patterns.set(pattern.id, pattern);
  const standalone = STANDALONE_WORLD_OVERRIDES[world.id];
  return { ...world, ...(standalone ?? {}), ...(native.length || excluded ? { patterns: [...patterns.values()] } : {}) };
});

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
