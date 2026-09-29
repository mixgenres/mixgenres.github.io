import type { SongStyle } from '../../data/styles/schema';
import { getStyle } from './registry';
import { profileForStyle, type StyleSongProfile } from './profiles';
import { genreDialectTarget } from '../lookup/performance';
import type { GenreDialectTarget } from '../../data/performance/genreDialectTargets';

export interface StyleCalibrationTarget extends GenreDialectTarget {
  styleId: string;
  styleName: string;
  genreId: string;
  referenceSongs: string[];
  referenceSong: string;
  referenceTone: string;
  instrumentPalette: string[];
  preferredProgression: string[];
  signatureCell: string;
  arrangementCues: string[];
  contourCues: string[];
  production: string;
  phraseBars: number[];
  targetLowDensity: number;
  targetLeadSpace: number;
  targetHarmonicDensity: number;
}

// Five references per musical world. A style selects one reference deterministically,
// so sibling styles in the same genre do not all inherit the same sonic target.
const REFERENCE_SETS: Record<string, string[]> = {
  afrobeats: ['Essence — Wizkid feat. Tems', 'Ye — Burna Boy', 'Last Last — Burna Boy', 'Anybody — Burna Boy', 'African Queen — 2Baba'],
  bachata: ['Obsesión — Aventura', 'Bachata en Fukuoka — Juan Luis Guerra', 'Te Extraño — Xtreme', 'Stand by Me — Prince Royce', 'Corazón Sin Cara — Prince Royce'],
  blues: ['Sweet Home Chicago — Robert Johnson', 'The Thrill Is Gone — B.B. King', 'Pride and Joy — Stevie Ray Vaughan', 'Boom Boom — John Lee Hooker', 'Stormy Monday — T-Bone Walker'],
  brazilian: ['Chega de Saudade — João Gilberto', 'Desafinado — João Gilberto', 'Mas Que Nada — Jorge Ben Jor', 'Águas de Março — Elis Regina & Tom Jobim', 'Carinhoso — Pixinguinha'],
  country: ['Folsom Prison Blues — Johnny Cash', 'Jolene — Dolly Parton', 'Friends in Low Places — Garth Brooks', 'Blue Moon of Kentucky — Bill Monroe', 'On the Road Again — Willie Nelson'],
  cumbia: ['La Pollera Colorá — Wilson Choperena / Juan Madera', 'Cumbia Sampuesana — Aniceto Molina', 'La Colegiala — Rodolfo y su Tipica RA7', 'Cumbia Sobre el Río — Celso Piña', 'El Africano — Wilfrido Vargas'],
  disco: ["Stayin' Alive — Bee Gees", 'Le Freak — Chic', 'Good Times — Chic', 'I Feel Love — Donna Summer', 'September — Earth, Wind & Fire'],
  electronic: ['Blue Monday — New Order', 'Around the World — Daft Punk', 'Windowlicker — Aphex Twin', 'Breathe — The Prodigy', 'Enjoy the Silence — Depeche Mode'],
  folk: ['The Times They Are a-Changin’ — Bob Dylan', 'House of the Rising Sun — traditional', 'The Boxer — Simon & Garfunkel', 'Scarborough Fair — traditional', 'Suzanne — Leonard Cohen'],
  funk: ['Superstition — Stevie Wonder', 'Cissy Strut — The Meters', 'Give Up the Funk — Parliament', 'Chameleon — Herbie Hancock', 'Pick Up the Pieces — Average White Band'],
  gospel: ['Oh Happy Day — Edwin Hawkins Singers', 'Take Me Back — Shirley Caesar', 'Soon and Very Soon — Andraé Crouch', 'Total Praise — Richard Smallwood', 'This Little Light of Mine — traditional'],
  'hip-hop': ['The Message — Grandmaster Flash and the Furious Five', 'Nuthin’ but a G Thang — Dr. Dre', 'C.R.E.A.M. — Wu-Tang Clan', 'Juicy — The Notorious B.I.G.', 'Electric Relaxation — A Tribe Called Quest'],
  house: ['Show Me Love — Robin S.', 'Finally — CeCe Peniston', 'Your Love — Frankie Knuckles', 'Can You Feel It — Mr. Fingers', 'Gypsy Woman — Crystal Waters'],
  jazz: ['Autumn Leaves — jazz standard', 'So What — Miles Davis', 'Take the A Train — Duke Ellington', 'All Blues — Miles Davis', 'Giant Steps — John Coltrane'],
  kizomba: ['Saudade — Kizomba repertoire', 'Magico — Anselmo Ralph', 'Atrevimento — Nelson Freitas', 'Bo Tem Mel — C4 Pedro', 'Amor — Kaysha'],
  tango: ['La Cumparsita — Gerardo Matos Rodríguez', 'Por una Cabeza — Carlos Gardel', 'El Choclo — Ángel Villoldo', 'Quejas de Bandoneón — Juan de Dios Filiberto', 'Libertango — Astor Piazzolla'],
  flamenco: ['Entre Dos Aguas — Paco de Lucía', 'Río Ancho — Paco de Lucía', 'Asturias — flamenco guitar repertoire', 'Almoraima — Paco de Lucía', 'Mediterranean Sundance — Paco de Lucía / Al Di Meola'],
  metal: ['Paranoid — Black Sabbath', 'Master of Puppets — Metallica', 'Ace of Spades — Motörhead', 'Holy Wars… The Punishment Due — Megadeth', 'Walk — Pantera'],
  'r-and-b': ['No Diggity — Blackstreet', 'Untitled (How Does It Feel) — D’Angelo', 'Return of the Mack — Mark Morrison', 'Adorn — Miguel', 'The Sweetest Taboo — Sade'],
  reggae: ['Three Little Birds — Bob Marley & The Wailers', 'Stir It Up — Bob Marley & The Wailers', 'Police and Thieves — Junior Murvin', '54-46 That’s My Number — Toots & The Maytals', 'Night Nurse — Gregory Isaacs'],
  reggaeton: ['Gasolina — Daddy Yankee', 'Dile — Don Omar', 'Yo Voy — Zion & Lennox', 'Rakata — Wisin & Yandel', 'Safaera — Bad Bunny'],
  rock: ['Back in Black — AC/DC', 'Sweet Child o’ Mine — Guns N’ Roses', 'Smells Like Teen Spirit — Nirvana', 'Seven Nation Army — The White Stripes', 'Paint It, Black — The Rolling Stones'],
  salsa: ['Pedro Navaja — Rubén Blades', 'Anacaona — Cheo Feliciano', 'Llorarás — Oscar D’León', 'Aguanilé — Héctor Lavoe', 'Sonora Ponceña — salsa repertoire'],
  ska: ['A Message to You, Rudy — The Specials', 'Guns of Navarone — The Skatalites', 'Ghost Town — The Specials', 'The Impression That I Get — The Mighty Mighty Bosstones', 'Time Bomb — Rancid'],
  soul: ["Ain't No Sunshine — Bill Withers", 'What’s Going On — Marvin Gaye', 'Try a Little Tenderness — Otis Redding', 'I Heard It Through the Grapevine — Marvin Gaye', 'People Get Ready — Curtis Mayfield'],
  swing: ['Sing, Sing, Sing — Benny Goodman', 'It Don’t Mean a Thing — Duke Ellington', 'Jumpin’ at the Woodside — Count Basie', 'Minor Swing — Django Reinhardt', 'Bei Mir Bist Du Shein — Andrews Sisters'],
  timba: ['La Sandunguita — Cuban timba repertoire', 'La Fórmula — Los Van Van', 'Que le Llegue la Mano — NG La Banda', 'Me Mantengo — Havana D’Primera', 'La Ritmo-Manía — Klimax'],
  zouk: ['Zouk la sé sèl médikaman nou ni — Kassav’', 'Syé Bwa — Kassav’', 'Vini Pou — Zouk repertoire', 'Lanmou épi Lanmou — Kassav’', 'Sye Bwa — Kassav’'],
  'drum-and-bass': ['Inner City Life — Goldie', 'Brown Paper Bag — Roni Size / Reprazent', 'Tarantula — Pendulum', 'Circles — Adam F', 'Original Nuttah — UK Apache & Shy FX'],
  industrial: ['Head Like a Hole — Nine Inch Nails', 'Du Hast — Rammstein', 'Headhunter — Front 242', 'Thieves — Ministry', 'Assimilate — Skinny Puppy'],
  'punk-hardcore': ['Blitzkrieg Bop — Ramones', 'London Calling — The Clash', 'Linoleum — NOFX', 'Minor Threat — Minor Threat', 'Basket Case — Green Day'],
  'uk-bass': ['Flowers — Sweet Female Attitude', 'Re-Rewind — Artful Dodger feat. Craig David', 'I Luv U — Dizzee Rascal', 'Go — Dubfire', 'Gabriel — Roy Davis Jr. feat. Peven Everett'],
};

function hash(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619);
  return h >>> 0;
}

function toneFor(style: StyleSongProfile, styleName: string): string {
  const text = `${styleName} ${style.feel ?? ''} ${style.production}`.toLowerCase();
  if (/sparse|minimal|space|intimate/.test(text)) return 'sparse / intimate / high separation';
  if (/lush|wide|warm|romantic/.test(text)) return 'lush / warm / sustained';
  if (/dry|bright|acoustic/.test(text)) return 'dry / close / transient-forward';
  if (/live|room|ensemble|organic/.test(text)) return 'live-room / ensemble-forward';
  if (/sub|low-end|electronic|machine/.test(text)) return 'controlled low-end / precise transients';
  if (/loud|aggressive|hard|metal/.test(text)) return 'dense / aggressive / controlled sustain';
  return 'balanced / style-forward / phrase-led';
}

function deriveTarget(style: StyleSongProfile, styleName: string): Omit<StyleCalibrationTarget, keyof GenreDialectTarget | 'styleId' | 'styleName' | 'genreId' | 'referenceSongs' | 'referenceSong'> {
  const text = `${styleName} ${style.feel ?? ''} ${style.production} ${style.signatureCell}`.toLowerCase();
  const sparse = /sparse|minimal|space|intimate|quiet|ambient/.test(text);
  const dense = /dense|live-room|layered|big band|festive|wall/.test(text);
  const lowHeavy = /sub|low-end|bass-forward|deep|tumbao|bass/.test(text);
  const harmonicDense = /extended|maj7|9|13|chord|voicing|lush|jazz|bossa|neo-soul/.test(`${style.progressions.join(' ')} ${text}`.toLowerCase());
  const phraseBars = style.form.some(x => /solo|instrumental|break|bridge|mambo|descarga|guitar|requinto|horn/.test(x.toLowerCase())) ? [2,4,8] : [4,8];
  return {
    referenceTone: toneFor(style, styleName),
    instrumentPalette: style.instruments,
    preferredProgression: style.progressions[0] ?? [],
    signatureCell: style.signatureCell,
    arrangementCues: style.arrangement,
    contourCues: style.contours,
    production: style.production,
    phraseBars,
    targetLowDensity: sparse ? 0.46 : dense ? 0.72 : 0.58,
    targetLeadSpace: sparse ? 0.70 : dense ? 0.44 : 0.56,
    targetHarmonicDensity: harmonicDense ? 0.72 : lowHeavy ? 0.48 : 0.58,
  };
}

export function styleCalibrationTarget(genreId: string, styleId?: string, style?: SongStyle): StyleCalibrationTarget {
  const resolvedStyle = style ?? (styleId ? getStyle(styleId) : undefined);
  const actualStyleId = resolvedStyle?.id ?? styleId ?? `${genreId}:default`;
  const styleName = resolvedStyle?.name ?? genreId;
  const profile = profileForStyle(genreId, styleName, hash(actualStyleId) % 5) ?? {
    form: [], progressions: [], signatureCell: '', instruments: [], contours: [], arrangement: [], production: '', feel: '',
  } as StyleSongProfile;
  const base = genreDialectTarget(genreId);
  const references = REFERENCE_SETS[genreId] ?? [base.reference];
  const referenceSong = references[hash(actualStyleId) % references.length] ?? base.reference;
  const derived = deriveTarget(profile, styleName);
  const lowDensityShift = derived.targetLowDensity > 0.68 ? 0.05 : derived.targetLowDensity < 0.5 ? -0.04 : 0;
  return {
    ...base,
    ...derived,
    styleId: actualStyleId,
    styleName,
    genreId,
    referenceSongs: references,
    referenceSong,
    maxBassRootRatio: Math.max(0.40, Math.min(0.82, base.maxBassRootRatio + (lowDensityShift < 0 ? -0.03 : 0))),
    accompanimentNonRootRatio: Math.max(0.12, Math.min(0.52, base.accompanimentNonRootRatio + (derived.targetHarmonicDensity - 0.58) * 0.12)),
    techniqueLandmarkRatio: Math.max(0.08, Math.min(0.34, base.techniqueLandmarkRatio + (derived.targetLeadSpace - 0.56) * 0.10)),
    phraseDynamicRange: Math.max(0.06, Math.min(0.22, base.phraseDynamicRange + (derived.targetLeadSpace - 0.56) * 0.08)),
    bassTrimDb: base.bassTrimDb + (derived.targetLowDensity < 0.5 ? -0.75 : derived.targetLowDensity > 0.70 ? 0.25 : 0),
  };
}

