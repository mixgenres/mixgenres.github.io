/** Template for the canonical starter song catalog. */
export interface SongTemplate { id: string; name: string; genreId: string; styleId: string; bpm: number; instruments: string[]; }

/** Canonical, generated starter catalog. Instrument lists are the exact eight-part palette compiled by makeSheet. */
export const starterSongs: SongTemplate[] = [
  {
    "id": "bachata-starter",
    "name": "Bachata: Urbana",
    "genreId": "bachata",
    "styleId": "bachata-urbana",
    "bpm": 130,
    "instruments": [
      "acoustic-guitar",
      "bass",
      "bongos",
      "guiro",
      "requinto",
      "voice",
      "piano",
      "maracas"
    ]
  },
  {
    "id": "blues-starter",
    "name": "Blues: Chicago Blues",
    "genreId": "blues",
    "styleId": "blues-chicago",
    "bpm": 98,
    "instruments": [
      "electric-guitar",
      "harmonica",
      "piano",
      "bass",
      "drums",
      "voice",
      "organ",
      "trumpet"
    ]
  },
  {
    "id": "country-starter",
    "name": "Country: Neotraditional",
    "genreId": "country",
    "styleId": "country-neotraditional",
    "bpm": 110,
    "instruments": [
      "steel-guitar",
      "fiddle",
      "acoustic-guitar",
      "electric-guitar",
      "bass",
      "voice",
      "piano",
      "mandolin"
    ]
  },
  {
    "id": "electronic-starter",
    "name": "Electronic: Downtempo",
    "genreId": "electronic",
    "styleId": "electronic-downtempo",
    "bpm": 90,
    "instruments": [
      "synth",
      "drums",
      "bass",
      "sampler",
      "acoustic-guitar",
      "bass-lead",
      "warm-pad",
      "saw-lead"
    ]
  },
  {
    "id": "folk-starter",
    "name": "Folk: Indie Folk",
    "genreId": "folk",
    "styleId": "folk-indie-folk",
    "bpm": 94,
    "instruments": [
      "acoustic-guitar",
      "banjo",
      "upright-bass",
      "piano",
      "drums",
      "voice",
      "fiddle",
      "mandolin"
    ]
  },
  {
    "id": "funk-starter",
    "name": "Funk: P-Funk",
    "genreId": "funk",
    "styleId": "funk-p-funk",
    "bpm": 106,
    "instruments": [
      "bass",
      "drums",
      "electric-guitar",
      "synth",
      "brass",
      "voice",
      "clavinet",
      "organ"
    ]
  },
  
  {
    "id": "hip-hop-starter",
    "name": "Global Urban Beat: Boom Bap",
    "genreId": "hip-hop",
    "styleId": "hip-hop-boom-bap",
    "bpm": 91,
    "instruments": [
      "sampler",
      "drums",
      "bass",
      "turntable",
      "piano",
      "sub-bass",
      "warm-pad",
      "voice"
    ]
  },
  {
    "id": "jazz-starter",
    "name": "Jazz: Bebop",
    "genreId": "jazz",
    "styleId": "jazz-bebop",
    "bpm": 220,
    "instruments": [
      "alto-sax",
      "trumpet",
      "piano",
      "upright-bass",
      "drums",
      "ride",
      "tenor-sax",
      "vibraphone"
    ]
  },
  {
    "id": "kizomba-starter",
    "name": "Kizomba: Tradicional",
    "genreId": "kizomba",
    "styleId": "kizomba-tradicional",
    "bpm": 92,
    "instruments": [
      "bass",
      "drums",
      "acoustic-guitar",
      "synth",
      "dikanza",
      "voice",
      "sub-bass",
      "rhodes"
    ]
  },
  {
    "id": "tango-starter",
    "name": "Tango: Tango Tradicional",
    "genreId": "tango",
    "styleId": "tango-tango-tradicional",
    "bpm": 128,
    "instruments": [
      "bandoneon",
      "violin",
      "piano",
      "upright-bass",
      "cello",
      "flute",
      "clarinet",
      "acoustic-guitar"
    ]
  },
  {
    "id": "flamenco-starter",
    "name": "Flamenco: Soleá",
    "genreId": "flamenco",
    "styleId": "flamenco-solea-style",
    "bpm": 83,
    "instruments": [
      "spanish-guitar",
      "flute",
      "palmas",
      "cajon",
      "hand-percussion",
      "zapateado",
      "voice",
      "castanets"
    ]
  },
  {
    "id": "metal-starter",
    "name": "Metal: Heavy Metal",
    "genreId": "metal",
    "styleId": "metal-heavy-metal",
    "bpm": 120,
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "overdrive-guitar",
      "voice",
      "synth",
      "strings",
      "guitar-harmonics"
    ]
  },
  {
    "id": "r-and-b-starter",
    "name": "R&B: Contemporary R&B",
    "genreId": "r-and-b",
    "styleId": "r-and-b-deep-funk",
    "bpm": 85,
    "instruments": [
      "drums",
      "bass",
      "synth",
      "piano",
      "voice",
      "electric-guitar",
      "rhodes",
      "warm-pad"
    ]
  },
  {
    "id": "reggaeton-starter",
    "name": "Reggaeton: Perreo",
    "genreId": "reggaeton",
    "styleId": "reggaeton-perreo",
    "bpm": 95,
    "instruments": [
      "drums",
      "sub-bass",
      "synth",
      "sampler",
      "maracas",
      "voice",
      "congas",
      "electric-guitar"
    ]
  },
  {
    "id": "rock-starter",
    "name": "Rock: Hard Rock",
    "genreId": "rock",
    "styleId": "rock-hard-rock",
    "bpm": 128,
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "overdrive-guitar",
      "voice",
      "piano",
      "organ",
      "synth"
    ]
  },
  {
    "id": "salsa-starter",
    "name": "Salsa: Mambo",
    "genreId": "salsa",
    "styleId": "salsa-mambo",
    "bpm": 200,
    "instruments": [
      "brass",
      "timbales",
      "congas",
      "piano",
      "bass",
      "voice",
      "bongos",
      "claves"
    ]
  },
  {
    "id": "swing-starter",
    "name": "Swing: Big Band Swing",
    "genreId": "swing",
    "styleId": "swing-big-band-swing",
    "bpm": 163,
    "instruments": [
      "brass",
      "clarinet",
      "piano",
      "upright-bass",
      "drums",
      "tenor-sax",
      "jazz-guitar",
      "trumpet"
    ]
  },
  {
    "id": "timba-starter",
    "name": "Timba: Timba Habanera",
    "genreId": "timba",
    "styleId": "timba-timba-habanera",
    "bpm": 100,
    "instruments": [
      "drums",
      "timbales",
      "congas",
      "bass",
      "piano",
      "trombone",
      "voice",
      "bongos"
    ]
  },
  {
    "id": "zouk-starter",
    "name": "Zouk: Zouk Béton",
    "genreId": "zouk",
    "styleId": "zouk-zouk-beton",
    "bpm": 129,
    "instruments": [
      "brass",
      "drums",
      "bass",
      "synth",
      "hand-percussion",
      "voice",
      "sub-bass",
      "rhodes"
    ]
  },
  {
    "id": "drum-and-bass-starter",
    "name": "Drum & Bass: Jungle",
    "genreId": "drum-and-bass",
    "styleId": "drum-and-bass-jungle",
    "bpm": 170,
    "instruments": [
      "drums",
      "sub-bass",
      "sampler",
      "synth",
      "voice",
      "warm-pad",
      "saw-lead",
      "piano"
    ]
  },
  {
    "id": "punk-hardcore-starter",
    "name": "Punk / Hardcore: Punk Rock",
    "genreId": "punk-hardcore",
    "styleId": "punk-hardcore-punk-rock",
    "bpm": 180,
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "voice",
      "overdrive-guitar",
      "distortion-guitar",
      "organ",
      "backing-vocals"
    ]
  },
  
];
