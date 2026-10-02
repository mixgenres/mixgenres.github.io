import { GENRE_WORLDS } from '../data/genres';

/**
 * Every world is a printing plate: a coloured stock, a second tone for panels,
 * one ink, one signal colour. The composition never changes between worlds — only the inks do.
 *
 * The catalog is authoritative: every GenreWorld gets a plate, so adding a genre
 * cannot silently make it disappear from the genre picker or fall back to Tango.
 */
export interface Plate {
  /** the paper the song is printed on */
  ground: string;
  /** a second, deeper tone of the same stock, for blocks and sheets */
  tone: string;
  /** the one ink everything is drawn in */
  ink: string;
  /** the one colour that means "now" or "chosen" */
  signal: string;
  /** display name used in the interface; comes from the genre catalog, not from here */
  short: string;
}

const CURATED_PLATES: Record<string, Omit<Plate, 'short'>> = {
  'afrobeats': { ground: '#E9E2CE', tone: '#E9E2CE', ink: '#1F1F1F', signal: '#5A6B7A' },
  'bachata': { ground: '#E8D8DB', tone: '#E8D8DB', ink: '#1F1F1F', signal: '#5A6B7A' },
  'blues': { ground: '#CBD6DD', tone: '#CBD6DD', ink: '#1F1F1F', signal: '#5A6B7A' },
  'brazilian': { ground: '#E6E1C8', tone: '#E6E1C8', ink: '#1F1F1F', signal: '#5A6B7A' },
  'country': { ground: '#E8D3B8', tone: '#E8D3B8', ink: '#1F1F1F', signal: '#5A6B7A' },
  'cumbia': { ground: '#E3E0C8', tone: '#E3E0C8', ink: '#1F1F1F', signal: '#5A6B7A' },
  'disco': { ground: '#E9DCC6', tone: '#E9DCC6', ink: '#1F1F1F', signal: '#5A6B7A' },
  'electronic': { ground: '#C3E7EB', tone: '#C3E7EB', ink: '#1F1F1F', signal: '#5A6B7A' },
  'folk': { ground: '#DFE2C7', tone: '#DFE2C7', ink: '#1F1F1F', signal: '#5A6B7A' },
  'funk': { ground: '#E9DCC6', tone: '#E9DCC6', ink: '#1F1F1F', signal: '#5A6B7A' },
  'gospel': { ground: '#E3DCCB', tone: '#E3DCCB', ink: '#1F1F1F', signal: '#5A6B7A' },
  'hip-hop': { ground: '#D9D9D9', tone: '#D9D9D9', ink: '#1F1F1F', signal: '#5A6B7A' },
  'house': { ground: '#CDE5EB', tone: '#CDE5EB', ink: '#1F1F1F', signal: '#5A6B7A' },
  'jazz': { ground: '#D8DDE1', tone: '#D8DDE1', ink: '#1F1F1F', signal: '#5A6B7A' },
  'kizomba': { ground: '#D4DEC9', tone: '#D4DEC9', ink: '#1F1F1F', signal: '#5A6B7A' },
  'tango': { ground: '#DAD6E1', tone: '#DAD6E1', ink: '#1F1F1F', signal: '#5A6B7A' },
  'flamenco': { ground: '#E5D2C1', tone: '#E5D2C1', ink: '#1F1F1F', signal: '#5A6B7A' },
  'metal': { ground: '#CFCFD3', tone: '#CFCFD3', ink: '#1F1F1F', signal: '#5A6B7A' },
  'r-and-b': { ground: '#E3D8D0', tone: '#E3D8D0', ink: '#1F1F1F', signal: '#5A6B7A' },
  'reggae': { ground: '#DEE4CA', tone: '#DEE4CA', ink: '#1F1F1F', signal: '#5A6B7A' },
  'reggaeton': { ground: '#E7D8C8', tone: '#E7D8C8', ink: '#1F1F1F', signal: '#5A6B7A' },
  'rock': { ground: '#DEDAD2', tone: '#DEDAD2', ink: '#1F1F1F', signal: '#5A6B7A' },
  'salsa': { ground: '#E7DCBE', tone: '#E7DCBE', ink: '#1F1F1F', signal: '#5A6B7A' },
  'ska': { ground: '#DCDFE1', tone: '#DCDFE1', ink: '#1F1F1F', signal: '#5A6B7A' },
  'soul': { ground: '#E9DCC6', tone: '#E9DCC6', ink: '#1F1F1F', signal: '#5A6B7A' },
  'swing': { ground: '#EFD1D7', tone: '#EFD1D7', ink: '#1F1F1F', signal: '#5A6B7A' },
  'timba': { ground: '#D8DFDA', tone: '#D8DFDA', ink: '#1F1F1F', signal: '#5A6B7A' },
  'zouk': { ground: '#D9E4D7', tone: '#D9E4D7', ink: '#1F1F1F', signal: '#5A6B7A' },
  'drum-and-bass': { ground: '#C3E7EB', tone: '#C3E7EB', ink: '#1F1F1F', signal: '#5A6B7A' },
  'industrial': { ground: '#D4D4D6', tone: '#D4D4D6', ink: '#1F1F1F', signal: '#5A6B7A' },
  'punk-hardcore': { ground: '#DEDAD2', tone: '#DEDAD2', ink: '#1F1F1F', signal: '#5A6B7A' },
  'uk-bass': { ground: '#CDE5EB', tone: '#CDE5EB', ink: '#1F1F1F', signal: '#5A6B7A' }
};

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  const value = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function mix(hex: string, amount: number, towardWhite = true) {
  const { r, g, b } = hexToRgb(hex);
  const t = towardWhite ? 255 : 0;
  const m = Math.max(0, Math.min(1, amount));
  return `#${[r, g, b].map(c => Math.round(c + (t - c) * m).toString(16).padStart(2, '0')).join('')}`;
}

function generatedPlate(color?: string): Omit<Plate, 'short'> {
  const signal = color || '#5A6B7A';
  return {
    ground: mix(signal, 0.86),
    tone: mix(signal, 0.68),
    ink: mix(signal, 0.72, false),
    signal,
  };
}

// Genres are listed alphabetically by their display name everywhere they're
// picked from, so the order here is the order the whole app shows them in.
export const PLATES: Record<string, Plate> = Object.fromEntries(
  GENRE_WORLDS
    .map(world => [world.id, { ...(CURATED_PLATES[world.id] ?? generatedPlate(world.color)), short: world.name }] as const)
    .sort(([, a], [, b]) => a.short.localeCompare(b.short))
);

export const FALLBACK_PLATE: Plate = PLATES.tango;

export function plateFor(worldId: string): Plate {
  return PLATES[worldId] ?? FALLBACK_PLATE;
}

/** Paint the plate onto the document so CSS variables carry it everywhere. */
export function applyPlate(p: Plate) {
  const r = document.documentElement.style;
  r.setProperty('--ground', p.ground);
  r.setProperty('--tone', p.tone);
  r.setProperty('--ink', p.ink);
  r.setProperty('--signal', p.signal);
}
