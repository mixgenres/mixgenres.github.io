import type { GenreWorld, MusicalPattern } from '../schema';

import { BACHATA_WORLD } from './bachata';
import { BLUES_WORLD } from './blues';
import { COUNTRY_WORLD } from './country';
import { ELECTRONIC_WORLD } from './electronic';
import { FOLK_WORLD } from './folk';
import { FUNK_WORLD } from './funk';
import { HIP_HOP_WORLD } from './hip-hop';
import { JAZZ_WORLD } from './jazz';
import { KIZOMBA_WORLD } from './kizomba';
import { TANGO_WORLD } from './tango';
import { FLAMENCO_WORLD } from './flamenco';
import { METAL_WORLD } from './metal';
import { R_AND_B_WORLD } from './r-and-b';
import { REGGAETON_WORLD } from './reggaeton';
import { ROCK_WORLD } from './rock';
import { SALSA_WORLD } from './salsa';
import { SWING_WORLD } from './swing';
import { TIMBA_WORLD } from './timba';
import { ZOUK_WORLD } from './zouk';
import { DRUM_AND_BASS_WORLD } from './drum-and-bass';
import { PUNK_HARDCORE_WORLD } from './punk-hardcore';
import { CANONICAL_GENRE_PATTERNS } from './canonicalPatterns';

/** Every public genre is defined by its own folder and world definition. */
export const GENRE_WORLDS: GenreWorld[] = [ BACHATA_WORLD, BLUES_WORLD, COUNTRY_WORLD, ELECTRONIC_WORLD, FOLK_WORLD, FUNK_WORLD, HIP_HOP_WORLD, JAZZ_WORLD, KIZOMBA_WORLD, TANGO_WORLD, FLAMENCO_WORLD, METAL_WORLD,
  R_AND_B_WORLD, REGGAETON_WORLD, ROCK_WORLD, SALSA_WORLD, SWING_WORLD, TIMBA_WORLD, ZOUK_WORLD, DRUM_AND_BASS_WORLD,
  PUNK_HARDCORE_WORLD,
].map(world => {
  const native = CANONICAL_GENRE_PATTERNS.filter(pattern => pattern && pattern.worldId === world.id);
  const authored = (world.patterns ?? []).filter((pattern): pattern is MusicalPattern => !!pattern && typeof pattern.id === 'string');
  const patterns = new Map(authored.map(pattern => [pattern.id, pattern]));
  for (const pattern of native) patterns.set(pattern.id, pattern);
  return native.length ? { ...world, patterns: [...patterns.values()] } : world;
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

const DISPLAY_GENRE_NAMES: Record<string, string[]> = { 'bachata': ['Bachata'], 'blues': ['Blues'], 'country': ['Country'], 'electronic': ['Electronic'], 'flamenco': ['Flamenco'], 'funk': ['Funk'],
  'hip-hop': ['Hip Hop'], 'jazz': ['Jazz'], 'kizomba': ['Kizomba'], 'metal': ['Metal'],
  'rock': ['Rock'], 'salsa': ['Salsa'], 'tango': ['Tango'], 'timba': ['Timba'],
  'zouk': ['Zouk'], 'swing': ['Swing'], 'folk': ['Folk'], 'reggaeton': ['Reggaeton'], 'r-and-b': ['R&B'],
  'drum-and-bass': ['Drum & Bass'], 'punk-hardcore': ['Punk'],
};

/** User-facing pattern names are concise musical names; IDs remain the stable identity. */
export function cleanPatternName(name: string, shortName?: string, worldId?: string): string {
  let value = String(shortName || name || '')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+Signature Cell\b/gi, '')
    .replace(/\s+Cell\b/gi, '')
    .replace(/\bPattern\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const genreNames = DISPLAY_GENRE_NAMES[String(worldId ?? '')] ?? [];
  for (const genre of genreNames) {
    const escaped = genre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    value = value.replace(new RegExp(`^${escaped}\\s+`, 'i'), '');
  }

  // In Flamenco, these are descriptive redundancies rather than names musicians
  // need to see in a pattern picker; the palo/technique name carries the identity.
  if (worldId === 'flamenco') {
    value = value.replace(/\bFlamenco\s+(?=(Tremolo|Fusion)\b)/gi, '');
    value = value.replace(/\bTangos\s+Flamencos\s+/gi, 'Tangos ');
    value = value.replace(/\b4-Note\s+/gi, '4-note ');
  }

  value = value.replace(/\s+—\s+(alternate phrasing|sparse variation|accent shift|transition variation|played variation)$/i,
    (_, variant: string) => ` — ${variant.replace(/ variation$/i, '').replace(/^alternate phrasing$/i, 'alternate')}`);
  return value.replace(/\s{2,}/g, ' ').trim();
}

export function cleanGenreName(id: string, name?: string): string {
  return GENRE_NAMES[id] ?? name ?? id;
}

function normalizePattern(pattern: MusicalPattern): MusicalPattern {
  return {
    ...pattern,
    name: cleanPatternName(pattern.name, pattern.shortName, pattern.worldId),
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
    if (!raw || typeof raw.id !== 'string') continue;
    const pattern = normalizePattern(raw);
    if (!isSyntheticPattern(pattern)) uniquePatterns.set(pattern.id, pattern);
  }
}

export const ALL_PATTERNS: MusicalPattern[] = [...uniquePatterns.values()];

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
