import type { SongStyle } from '../../data/styles/schema';
import type { MusicalPattern } from '../../data/schema';
import { GENRE_NAMES, GENRE_WORLDS_BY_ID } from '../../data/genres';

/** Exactly the supported public genre leaves. */
export const CURATED_STYLE_NAMES: Record<string, string[]> = {
  afrobeats: ['Afro-Pop','Afrobeat','Amapiano','Highlife','Alté','Afro-House'],
  bachata: ['Tradicional','Dominicana','Bachata Moderna','Sensual','Bolero Bachata','Bachatango','Bachata Urbana'],
  blues: ['Chicago Blues','Delta Blues','Texas Blues','Piedmont Blues','Jump Blues','Soul Blues'],
  brazilian: ['Samba','Bossa Nova','Pagode','Choro','Samba-Rock','Forró'],
  country: ['Neotraditional','Outlaw','Bluegrass','Honky-Tonk','Bakersfield','Americana','Nashville Sound','Western Swing'],
  cumbia: ['Cumbia Colombiana','Cumbia Sabanera','Gaita Cumbia','Villera','Chicha','Sonidera','Rebajada','Porro'],
  disco: ['Studio Disco','Eurodisco','Hi-NRG','Disco-Funk','Italo Disco','Nu-Disco'],
  electronic: ['Techno','Ambient','Downtempo','IDM','Synthwave','Breakbeat','Electro'],
  folk: ['Indie Folk','Old-Time','Protest Folk','Psychedelic Folk','Neo-Traditional','Chamber Folk'],
  funk: ['Deep Funk','P-Funk','Boogie','Go-Go','Synth Funk','Funk Carioca'],
  gospel: ['Traditional Gospel','Contemporary Gospel','Southern Gospel','Choir Gospel','Gospel Soul','Gospel Funk'],
  'hip-hop': ['Boom Bap','Trap','Drill','Lo-Fi','G-Funk','Cloud Rap','Jazz Rap','Conscious Rap'],
  house: ['Deep House','Classic House','Soulful House','Tech House','Garage House','Acid House','French House'],
  jazz: ['Bebop','Cool Jazz','Hard Bop','Free Jazz','Gypsy Jazz','Fusion','Spiritual Jazz','Ragtime'],
  kizomba: ['Tradicional','Semba Playful','Passada','Tarraxinha','Urbankiz','Ghetto Zouk','Kizomba Afro'],
  tango: ['Tango Tradicional','Guardia Vieja','Troilo','Pugliese','Milonga','Tango Vals','Tango Nuevo','Piazzolla','Chacarera'],
  flamenco: ['Soleá','Bulerías','Alegrías','Tangos','Seguiriya','Rumba'],
  metal: ['Heavy Metal','Thrash','Death Metal','Black Metal','Power Metal','Doom Metal','Sludge','Progressive Metal'],
  'r-and-b': ['Contemporary R&B','Neo-Soul','Quiet Storm','New Jack Swing','Alternative R&B','Funk R&B'],
  reggae: ['Roots Reggae','Dub','Dancehall','Lovers Rock','Rocksteady','Ragga'],
  reggaeton: ['Perreo','Melodic Reggaeton','Neoperreo','Pop Reggaeton','Playero','Trap Reggaeton'],
  rock: ['Hard Rock','Grunge','Progressive Rock','Garage Rock','Psychedelic Rock','Post-Rock','Shoegaze','Alternative Rock'],
  salsa: ['Salsa Dura','Salsa Romántica','Mambo / On-2','Pachanga','Cha-Cha-Chá','Charanga','Son Montuno','Salsa Caleña','Salsa Choke','Descarga'],
  ska: ['Traditional','Two-Tone','Rocksteady','Ska-Punk','Ska-Core','Latin Ska','Ska-Jazz'],
  soul: ['Classic Soul','Motown Soul','Deep Soul','Southern Soul','Neo-Soul','Psychedelic Soul'],
  swing: ['Big Band Lindy','Balboa Speed','Gypsy Swing','Charleston','West Coast Swing','Boogie-Woogie','Neo-Swing','Electro Swing'],
  timba: ['Timba Clásica','Timba Funk','Timba Despelote','Timba Rumbeada','Afro-Cuban Timba','Cimafunk Groove','Songo / Timba'],
  zouk: ['Zouk Béton','Zouk Love','Kassav Carnival Zouk','Brazilian Zouk','Lyrical Zouk','Zouk Bass','Kompa Zouk','Acoustic Zouk'],
  'drum-and-bass': ['Jungle','Liquid DnB','Jump-Up','Neurofunk','Dancefloor DnB','Minimal DnB'],
  industrial: ['EBM','Industrial Rock','Industrial Metal','Industrial Techno','Noise Industrial','Dark Industrial'],
  'punk-hardcore': ['Punk Rock','Hardcore Punk','Post-Hardcore','Skate Punk','Crust Punk','Melodic Hardcore','Pop Punk'],
  'uk-bass': ['UK Garage','2-Step','Grime','Dubstep','Future Garage','Bassline','Breaks'],
};

const SOURCE_STYLE_OVERRIDES: Record<string, Record<string, string>> = {
  tango: {
    'Tango Tradicional':'Tango Tradicional', 'Guardia Vieja':'Tango Tradicional', 'Troilo':'Tango Tradicional', 'Pugliese':'Tango Tradicional',
    'Milonga':'Milonga', 'Tango Vals':'Tango Vals', 'Tango Nuevo':'Tango Nuevo', 'Piazzolla':'Tango Nuevo', 'Chacarera':'Tango Tradicional',
  },
  salsa: {
    'Salsa Dura':'Salsa Dura', 'Salsa Romántica':'Salsa Romántica', 'Mambo / On-2':'Mambo', 'Pachanga':'Charanga', 'Cha-Cha-Chá':'Charanga',
    'Charanga':'Charanga', 'Son Montuno':'Son Montuno', 'Salsa Caleña':'Salsa Caleña', 'Salsa Choke':'Salsa Choke', 'Descarga':'Son Montuno',
  },
  timba: {
    'Timba Clásica':'Timba Funk', 'Timba Funk':'Timba Funk', 'Timba Despelote':'Timba Despelote', 'Timba Rumbeada':'Timba Rumbeada',
    'Afro-Cuban Timba':'Son Timbeado', 'Cimafunk Groove':'Timba Funk', 'Songo / Timba':'Timba Funk',
  },
  cumbia: {
    'Cumbia Colombiana':'Cumbia Colombiana', 'Cumbia Sabanera':'Cumbia Colombiana', 'Gaita Cumbia':'Cumbia Colombiana', 'Villera':'Villera',
    'Chicha':'Chicha', 'Sonidera':'Sonora', 'Rebajada':'Rebajada', 'Porro':'Porro',
  },
  bachata: {
    'Tradicional':'Tradicional', 'Dominicana':'Tradicional', 'Bachata Moderna':'Bachata Moderna', 'Sensual':'Sensual', 'Bolero Bachata':'Bolero Bachata', 'Bachatango':'Bachatango', 'Bachata Urbana':'Urbana',
  },
  kizomba: {
    'Tradicional':'Tradicional', 'Semba Playful':'Semba Playful', 'Passada':'Passada', 'Tarraxinha':'Tarraxinha', 'Urbankiz':'Urbankiz', 'Ghetto Zouk':'Ghetto Zouk', 'Kizomba Afro':'Tradicional',
  },
  zouk: {
    'Zouk Béton':'Zouk Béton', 'Zouk Love':'Zouk Love', 'Kassav Carnival Zouk':'Zouk Béton', 'Brazilian Zouk':'Brazilian Zouk', 'Lyrical Zouk':'Lyrical Zouk', 'Zouk Bass':'Zouk Bass', 'Kompa Zouk':'Kompa Zouk', 'Acoustic Zouk':'Acoustic Zouk',
  },
  brazilian: { 'Samba': 'Samba de Enredo', 'Bossa Nova': 'Bossa Nova', 'Pagode': 'Pagode', 'Choro': 'Choro', 'Samba-Rock': 'Samba Reggae', 'Forró': 'Samba de Roda' },
  disco: { 'Studio Disco': 'Disco', 'Eurodisco': 'Disco', 'Hi-NRG': 'Disco', 'Disco-Funk': 'Boogie', 'Italo Disco': 'Synth Funk', 'Nu-Disco': 'Boogie' },
  house: { 'Deep House': 'Dub Techno', 'Classic House': 'Detroit Techno', 'Soulful House': 'Melodic Techno', 'Tech House': 'Peak Time', 'Garage House': 'Minimal', 'Acid House': 'Acid Techno', 'French House': 'Detroit Techno' },
  'drum-and-bass': { 'Liquid DnB': 'Downtempo', 'Jungle': 'IDM', 'Jump-Up': 'Breakbeat', 'Neurofunk': 'IDM', 'Dancefloor DnB': 'Techno', 'Minimal DnB': 'Techno' },
  'punk-hardcore': { 'Punk Rock': 'Hard Rock', 'Hardcore Punk': 'Hard Rock', 'Post-Hardcore': 'Grunge', 'Skate Punk': 'Garage Rock', 'Crust Punk': 'Grunge', 'Melodic Hardcore': 'Alternative Rock', 'Pop Punk': 'Hard Rock' },
  'uk-bass': { 'UK Garage': 'Electro', '2-Step': 'Breakbeat', 'Grime': 'Techno', 'Dubstep': 'Downtempo', 'Future Garage': 'Ambient', 'Bassline': 'Electro', 'Breaks': 'Breakbeat' },
};

function slug(value: string): string {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}

function materializeStyle(base: SongStyle, genreId: string, name: string, id: string): SongStyle {
  const style: SongStyle = JSON.parse(JSON.stringify(base));
  style.id = id;
  style.name = name;
  style.genres = [genreId];
  style.primaryGenre = genreId;
  style.canonical = false;
  style.extends = undefined;
  style.influences = undefined;
  style.aliases = [];
  style.summary = base.summary || shortText(`${name} ${GENRE_NAMES[genreId]}`);
  style.signatureTraits = Array.from(new Set([...(base.signatureTraits ?? []), name, GENRE_NAMES[genreId]])).slice(0, 8);

  // Style names are musical sub-worlds, not UI labels. Apply a small, explicit
  // semantic dialect layer so sibling styles do not collapse to identical
  // runtime values even when their source seed is shared.
  const n = name.toLowerCase();
  const r = style.rhythm ?? {};
  const h = style.harmony ?? {};
  const m = style.melody ?? {};
  const sfx = style.sound ?? {};
  const slow = /rom[aá]nt|sensual|lyrical|ballad|quiet storm|deep soul|liquid|ambient|downtempo|soft/.test(n);
  const hard = /hard|thrash|death|black|doom|sludge|hardcore|crust|neuro|jump-up/.test(n);
  const complex = /nuevo|progressive|fusion|free|acid|experimental|idm|choro|bebop|bebop|spiritual|psychedelic|math|jungle|breakbeat/.test(n);
  const machine = /house|tech|electro|disco|dnb|drum|industrial|dubstep|2-step|garage|synth|italo/.test(n);
  const traditional = /traditional|tradicional|classic|roots|old-time|old time|neotraditional|honky|delta|chicago/.test(n);

  if (slow) {
    r.defaultBpm = Math.max(55, (r.defaultBpm ?? 100) - 8);
    r.microtimingFeel = 'laid-back';
    r.humanizeJitterMs = Math.min(16, (r.humanizeJitterMs ?? 8) + 2);
    sfx.masterProfile = { ...(sfx.masterProfile ?? {}), pocket:0.62, lift:0.42 };
  }
  if (hard) {
    r.defaultBpm = Math.min(220, (r.defaultBpm ?? 120) + 18);
    r.humanizeJitterMs = Math.max(2, (r.humanizeJitterMs ?? 8) - 3);
    r.swingPercentage = 50;
    h.chordVocabulary = Array.from(new Set([...(h.chordVocabulary ?? []), 'power-chord','tritone']));
    m.contourArchetypes = ['repeated riff','descending attack','register burst'];
    sfx.masterProfile = { ...(sfx.masterProfile ?? {}), pocket:0.35, lift:0.75 };
  }
  if (complex) {
    r.anticipationOffsetSteps = (r.anticipationOffsetSteps ?? 0) - 1;
    r.signatureCell = `${r.signatureCell ?? ''} | style-development`;
    m.phraseLengthsBars = [3,4,5,8];
    h.chordVocabulary = Array.from(new Set([...(h.chordVocabulary ?? []), 'extended','chromatic-passing']));
  }
  if (machine) {
    r.humanizeJitterMs = Math.min(r.humanizeJitterMs ?? 8, 4);
    r.swingPercentage = 50;
    sfx.masterProfile = { ...(sfx.masterProfile ?? {}), pocket:0.35, lift:0.68 };
  }
  if (traditional) {
    r.humanizeJitterMs = Math.max(r.humanizeJitterMs ?? 8, 6);
    m.phraseLengthsBars = [4,8];
  }

  style.rhythm = r;
  style.harmony = h;
  style.melody = m;
  style.sound = sfx;
  return style;
}

function patternCategory(p: MusicalPattern): string {
  const raw = `${p.category} ${p.family} ${p.name} ${p.tags.join(' ')}`.toLowerCase();
  if (p.category === 'bass' || /bass|tumbao|walking/.test(raw)) return 'bass';
  if (p.category === 'fill' || /fill|turnaround|pickup|answer|reply/.test(raw)) return 'fill';
  if (p.category === 'break' || /break|drop|stop|gear/.test(raw)) return 'break';
  if (p.category === 'lead' || p.category === 'motif' || /lead|melod|riff|hook|solo/.test(raw)) return 'lead';
  if (p.category === 'comping' || p.category === 'accompaniment' || /comp|chord|skank|strum|stab/.test(raw)) return 'comping';
  if (p.category === 'texture' || p.category === 'drone' || /pad|texture|drone|wash/.test(raw)) return 'texture';
  return 'groove';
}

function onsetSimilarity(a: MusicalPattern, b: MusicalPattern): number {
  if (a.meter !== b.meter || a.cycleLength !== b.cycleLength || a.subdivisions !== b.subdivisions) return 0;
  const aa = new Set(a.onsetGrid ?? []); const bb = new Set(b.onsetGrid ?? []);
  const union = new Set([...aa, ...bb]).size;
  return union ? [...aa].filter(x => bb.has(x)).length / union : 1;
}

function nearDuplicate(a: MusicalPattern, b: MusicalPattern): boolean {
  return patternCategory(a) === patternCategory(b) && onsetSimilarity(a, b) >= 0.92 && a.family === b.family;
}

function selectSharedPatterns(style: SongStyle, candidates: MusicalPattern[], target = 6): MusicalPattern[] {
  const terms = `${style.name} ${style.summary} ${style.signatureTraits.join(' ')}`.toLowerCase();
  const ranked = candidates
    .filter(p => p.enabled !== false)
    .map(p => ({ p, score: (p.styleIds?.includes(style.id) ? 1000 : 0) + (p.name + ' ' + p.tags.join(' ') + ' ' + p.description + ' ' + (p.authenticityTags ?? []).join(' ')).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).reduce((n, t) => n + (t.length > 3 && terms.includes(t) ? 2 : 0), 0) + (p.weight ?? 0) }))
    .sort((a,b) => b.score - a.score || a.p.id.localeCompare(b.p.id));
  const selected: MusicalPattern[] = [];
  const categories = new Set<string>();

  // Explicit style ownership outranks semantic matching. Apply duplicate filtering
  // only to patterns selected by semantic fallback.
  for (const { p } of ranked) {
    if (!p.styleIds?.includes(style.id)) continue;
    selected.push(p);
    categories.add(patternCategory(p));
  }

  for (const { p } of ranked) {
    if (selected.includes(p) || selected.some(x => nearDuplicate(x, p))) continue;
    const cat = patternCategory(p);
    if (categories.has(cat) && selected.length >= target) continue;
    selected.push(p); categories.add(cat);
    if (selected.length >= target) return selected;
  }
  for (const { p } of ranked) {
    if (selected.includes(p) || selected.some(x => nearDuplicate(x, p))) continue;
    selected.push(p);
    if (selected.length >= target) break;
  }
  return selected;
}

export function buildCuratedStyles(baseStyles: SongStyle[], _patterns: MusicalPattern[]): SongStyle[] {
  const byGenre = new Map<string, SongStyle[]>();
  for (const style of baseStyles) {
    const list = byGenre.get(style.primaryGenre) ?? [];
    list.push(style); byGenre.set(style.primaryGenre, list);
  }

  const result: SongStyle[] = [];
  for (const [genreId, names] of Object.entries(CURATED_STYLE_NAMES)) {
    const candidates = byGenre.get(genreId) ?? [];
    if (!candidates.length) continue;
    names.forEach((name, index) => {
      const requestedSourceName = SOURCE_STYLE_OVERRIDES[genreId]?.[name];
      const base = candidates.find(s => s.name.toLowerCase() === String(requestedSourceName ?? name).toLowerCase())
        ?? candidates[index % candidates.length];
      const style = materializeStyle(base, genreId, name, `${genreId}-${slug(name)}`);
      style.canonical = index === 0;
      style.summary = base.summary || shortText(`${name} ${GENRE_NAMES[genreId]}`);
      result.push(style);
    });
  }
  return result;
}

export function assembleStylePatterns(styles: SongStyle[], patterns: MusicalPattern[]): MusicalPattern[] {
  // Preserve authored style ownership from the source catalog. Older generated
  // revisions erased these IDs and forced every style through semantic guessing,
  // Preserve authored patterns before applying the fallback cap.
  const styleIdBySlug = new Map<string, string>();
  for (const style of styles) {
    const add = (value: string) => styleIdBySlug.set(
      value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, ''),
      style.id
    );
    add(style.id);
    add(style.name);
  }

  const resolveStaleId = (id: string): string => {
    const cleanId = String(id).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
    // Exact match first
    if (styleIdBySlug.has(cleanId)) return styleIdBySlug.get(cleanId)!;
    // Fuzzy substring match: e.g. "afro-son-montuno" includes "son-montuno" which maps to "salsa-son-montuno"
    for (const [slug, styleId] of styleIdBySlug.entries()) {
      if (slug.length >= 4 && (cleanId.includes(slug) || slug.includes(cleanId))) {
        return styleId;
      }
    }
    return id;
  };

  for (const p of patterns) {
    p.styleIds = Array.from(new Set((p.styleIds ?? [])
      .map(id => resolveStaleId(id))
      .filter(id => styles.some(style => style.id === id))));
  }

  // Styles share authored pattern definitions, but do not share one identical
  // six-pattern shortlist. Selection is semantic: each style gets the patterns
  // whose names/tags/description actually match its musical vocabulary.
  for (const style of styles) {
    const patternIds = new Set((GENRE_WORLDS_BY_ID[style.primaryGenre]?.patterns ?? []).map(pattern => pattern.id));
    const candidates = patterns.filter(pattern => patternIds.has(pattern.id));
    const chosen = selectSharedPatterns(style, candidates, Math.min(8, Math.max(4, candidates.length)));
    for (const p of chosen) p.styleIds = Array.from(new Set([...(p.styleIds ?? []), style.id]));
    style.patterns = {
      require: chosen.slice(0, Math.min(3, chosen.length)).map(p => p.id),
      preferred: chosen.slice(3).map(p => p.id),
      allowed: chosen.map(p => p.id),
      avoid: [],
    };
  }

  for (const p of patterns) {
    p.description = shortText(p.description);
    p.variants = (p.variants ?? []).map(v => ({ ...v, description: v.description ? shortText(v.description) : v.description }));
  }
  return patterns;
}
