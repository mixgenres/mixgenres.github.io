export interface GenreDialectContext {
  genreId?: string;
  dialect?: string;
}

export type GenreDialect = {
  id: string;
  attack: number;
  decay: number;
  body: number;
  brightness: number;
  transient: number;
  lowEnd: number;
  stereo: number;
  drive: number;
  syncopation: number;
  swing: number;
  electronic: boolean;
};

const PROFILES: Record<string, Omit<GenreDialect, 'id'>> = {
  afrobeats: { attack:.90, decay:.82, body:1.05, brightness:1.00, transient:.95, lowEnd:1.00, stereo:1, drive:.85, syncopation:1.25, swing:.00, electronic:false },
  bachata: { attack:.92, decay:.72, body:1.08, brightness:1.08, transient:1.05, lowEnd:.95, stereo:1, drive:.70, syncopation:1.35, swing:.08, electronic:false },
  blues: { attack:.88, decay:1.12, body:1.12, brightness:.92, transient:.88, lowEnd:1.06, stereo:1, drive:1.05, syncopation:.72, swing:.18, electronic:false },
  brazilian: { attack:.94, decay:.78, body:1.02, brightness:1.02, transient:.90, lowEnd:.96, stereo:1, drive:.62, syncopation:1.22, swing:.10, electronic:false },
  country: { attack:.90, decay:.82, body:1.02, brightness:1.18, transient:1.08, lowEnd:.96, stereo:1, drive:.68, syncopation:.82, swing:.04, electronic:false },
  cumbia: { attack:.88, decay:.76, body:1.05, brightness:1.04, transient:1.00, lowEnd:1.04, stereo:1, drive:.78, syncopation:1.20, swing:.02, electronic:false },
  disco: { attack:.82, decay:.70, body:.98, brightness:1.18, transient:1.12, lowEnd:1.02, stereo:1.15, drive:.74, syncopation:.82, swing:.00, electronic:false },
  electronic: { attack:.70, decay:.64, body:.92, brightness:1.12, transient:1.18, lowEnd:1.18, stereo:1.35, drive:1.05, syncopation:1.00, swing:.00, electronic:true },
  folk: { attack:.96, decay:.90, body:1.10, brightness:.94, transient:.92, lowEnd:.96, stereo:.92, drive:.48, syncopation:.82, swing:.04, electronic:false },
  funk: { attack:.76, decay:.64, body:1.04, brightness:1.12, transient:1.20, lowEnd:1.08, stereo:1.08, drive:.88, syncopation:1.28, swing:.04, electronic:false },
  gospel: { attack:.88, decay:1.06, body:1.12, brightness:1.00, transient:.98, lowEnd:1.04, stereo:1.04, drive:.72, syncopation:.96, swing:.12, electronic:false },
  'hip-hop': { attack:.72, decay:.60, body:1.04, brightness:1.05, transient:1.18, lowEnd:1.20, stereo:1.15, drive:1.00, syncopation:1.12, swing:.04, electronic:true },
  house: { attack:.72, decay:.62, body:.98, brightness:1.12, transient:1.16, lowEnd:1.15, stereo:1.28, drive:.92, syncopation:.92, swing:.00, electronic:true },
  jazz: { attack:.96, decay:1.16, body:1.14, brightness:.94, transient:.88, lowEnd:1.04, stereo:1.06, drive:.56, syncopation:1.05, swing:.22, electronic:false },
  metal: { attack:.62, decay:.54, body:1.00, brightness:1.22, transient:1.28, lowEnd:1.10, stereo:1.12, drive:1.28, syncopation:.90, swing:0, electronic:false },
  'punk-hardcore': { attack:.64, decay:.58, body:1.02, brightness:1.16, transient:1.25, lowEnd:1.08, stereo:1.02, drive:1.20, syncopation:.96, swing:0, electronic:false },
  rnb: { attack:.86, decay:.92, body:1.12, brightness:.96, transient:.92, lowEnd:1.08, stereo:1.14, drive:.70, syncopation:1.14, swing:.06, electronic:false },
  reggae: { attack:.84, decay:.86, body:1.18, brightness:.88, transient:.84, lowEnd:1.20, stereo:1.08, drive:.64, syncopation:1.10, swing:.04, electronic:false },
  reggaeton: { attack:.70, decay:.56, body:1.00, brightness:1.08, transient:1.20, lowEnd:1.22, stereo:1.18, drive:1.00, syncopation:1.42, swing:0, electronic:true },
  rock: { attack:.70, decay:.66, body:1.06, brightness:1.12, transient:1.20, lowEnd:1.08, stereo:1.10, drive:1.10, syncopation:.94, swing:0, electronic:false },
  salsa: { attack:.86, decay:.72, body:1.04, brightness:1.06, transient:1.10, lowEnd:1.04, stereo:1.08, drive:.72, syncopation:1.34, swing:.02, electronic:false },
  ska: { attack:.76, decay:.62, body:1.00, brightness:1.20, transient:1.18, lowEnd:1.00, stereo:1.02, drive:.82, syncopation:1.25, swing:.02, electronic:false },
  soul: { attack:.88, decay:1.02, body:1.12, brightness:.98, transient:.94, lowEnd:1.06, stereo:1.08, drive:.72, syncopation:1.04, swing:.08, electronic:false },
  swing: { attack:.94, decay:1.10, body:1.10, brightness:.96, transient:.90, lowEnd:1.02, stereo:1.08, drive:.55, syncopation:1.10, swing:.24, electronic:false },
  timba: { attack:.78, decay:.66, body:1.08, brightness:1.10, transient:1.18, lowEnd:1.06, stereo:1.12, drive:.82, syncopation:1.48, swing:.02, electronic:false },
  tango: { attack:.82, decay:.68, body:1.08, brightness:1.04, transient:1.12, lowEnd:1.02, stereo:1.04, drive:.70, syncopation:1.18, swing:.04, electronic:false },
  flamenco: { attack:.78, decay:.70, body:1.02, brightness:1.18, transient:1.22, lowEnd:1.00, stereo:1.00, drive:.78, syncopation:1.30, swing:.02, electronic:false },
  zouk: { attack:.80, decay:.72, body:1.08, brightness:1.02, transient:1.06, lowEnd:1.14, stereo:1.20, drive:.76, syncopation:1.36, swing:.02, electronic:false },
  kizomba: { attack:.82, decay:.78, body:1.12, brightness:.96, transient:.94, lowEnd:1.16, stereo:1.16, drive:.66, syncopation:1.30, swing:.02, electronic:false },
  'drum-and-bass': { attack:.58, decay:.48, body:.96, brightness:1.16, transient:1.28, lowEnd:1.28, stereo:1.25, drive:1.08, syncopation:1.22, swing:.00, electronic:true },
  industrial: { attack:.58, decay:.48, body:1.00, brightness:1.24, transient:1.32, lowEnd:1.16, stereo:1.12, drive:1.30, syncopation:1.04, swing:0, electronic:true },
  'uk-bass': { attack:.62, decay:.52, body:1.02, brightness:1.08, transient:1.20, lowEnd:1.30, stereo:1.30, drive:1.08, syncopation:1.36, swing:.02, electronic:true },
};

function canonical(raw: string): string {
  const s = raw.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[_\s]+/g, '-');
  if (s === 'r-and-b' || s === 'rnb') return 'rnb';
  if (s === 'hiphop') return 'hip-hop';
  if (s === 'drum&bass' || s === 'drum-n-bass') return 'drum-and-bass';
  if (s === 'punk') return 'punk-hardcore';
  return s;
}

export function getGenreDialect(params: GenreDialectContext): GenreDialect {
  const raw = `${params.genreId ?? ''} ${params.dialect ?? ''}`;
  let id = canonical(params.genreId ?? '');
  for (const key of Object.keys(PROFILES)) {
    if (raw.toLowerCase().includes(key.replace(/-/g, ' ')) || raw.toLowerCase().includes(key)) { id = key; break; }
  }
  const p = PROFILES[id] ?? PROFILES.folk;
  return { id, ...p };
}
