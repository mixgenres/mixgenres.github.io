/**
 * Song-level calibration targets. These are not substitute genre definitions;
 * they are guardrails used after composition so an authored pattern is realized
 * with the density, harmonic spread, register and technique vocabulary expected
 * from the style reference.
 */
export interface GenreDialectTarget {
  reference: string;
  maxBassRootRatio: number;
  maxBassLowRegisterRatio: number;
  accompanimentNonRootRatio: number;
  techniqueLandmarkRatio: number;
  phraseDynamicRange: number;
  bassTrimDb: number;
  harmonicVoicing: 'triadic' | 'extended' | 'power' | 'modal';
}

const common = {
  reference: 'generic style reference',
  maxBassRootRatio: 0.68,
  maxBassLowRegisterRatio: 0.86,
  accompanimentNonRootRatio: 0.24,
  techniqueLandmarkRatio: 0.16,
  phraseDynamicRange: 0.10,
  bassTrimDb: -1.0,
  harmonicVoicing: 'triadic' as const,
};

export const GENRE_DIALECT_TARGETS: Record<string, GenreDialectTarget> = {
  afrobeats: {...common, reference:'Essence — Wizkid feat. Tems', maxBassRootRatio:.62, accompanimentNonRootRatio:.28, bassTrimDb:-.75, harmonicVoicing:'extended'},
  bachata: {...common, reference:'Obsesión — Aventura', maxBassRootRatio:.64, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.22, bassTrimDb:-1.25},
  blues: {...common, reference:'Sweet Home Chicago — Robert Johnson / blues standard', maxBassRootRatio:.58, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  brazilian: {...common, reference:'Chega de Saudade — Antônio Carlos Jobim', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.20, bassTrimDb:-1.25, harmonicVoicing:'extended'},
  country: {...common, reference:'Folsom Prison Blues — Johnny Cash', maxBassRootRatio:.70, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.18, bassTrimDb:-1.0},
  cumbia: {...common, reference:'La Pollera Colorá — Colombian cumbia standard', maxBassRootRatio:.64, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.18, bassTrimDb:-1.25},
  disco: {...common, reference:"Stayin' Alive — Bee Gees", maxBassRootRatio:.72, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.12, bassTrimDb:-.5, harmonicVoicing:'extended'},
  electronic: {...common, reference:'Blue Monday — New Order', maxBassRootRatio:.74, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10, bassTrimDb:.0},
  folk: {...common, reference:'The Times They Are a-Changin\' — Bob Dylan', maxBassRootRatio:.70, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16, bassTrimDb:-1.5},
  funk: {...common, reference:'Superstition — Stevie Wonder', maxBassRootRatio:.52, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.28, bassTrimDb:-.25, harmonicVoicing:'extended'},
  gospel: {...common, reference:'Oh Happy Day — Edwin Hawkins Singers', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.24, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  'hip-hop': {...common, reference:'The Message — Grandmaster Flash and the Furious Five', maxBassRootRatio:.76, accompanimentNonRootRatio:.20, techniqueLandmarkRatio:.10, bassTrimDb:-.25},
  house: {...common, reference:'Show Me Love — Robin S.', maxBassRootRatio:.76, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10, bassTrimDb:.0},
  jazz: {...common, reference:'Autumn Leaves — standard', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.42, techniqueLandmarkRatio:.28, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  kizomba: {...common, reference:'Saudade — Kizomba repertoire example', maxBassRootRatio:.68, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.16, bassTrimDb:-1.25},
  tango: {...common, reference:'La Cumparsita — Gerardo Matos Rodríguez', maxBassRootRatio:.62, maxBassLowRegisterRatio:.84, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.28, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  flamenco: {...common, reference:'Entre Dos Aguas — Paco de Lucía', maxBassRootRatio:.52, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.30, bassTrimDb:-1.25, harmonicVoicing:'modal'},
  metal: {...common, reference:'Paranoid — Black Sabbath', maxBassRootRatio:.76, accompanimentNonRootRatio:.12, techniqueLandmarkRatio:.18, bassTrimDb:-.5, harmonicVoicing:'power'},
  'r-and-b': {...common, reference:'No Diggity — Blackstreet', maxBassRootRatio:.60, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.22, bassTrimDb:-.75, harmonicVoicing:'extended'},
  reggae: {...common, reference:'Three Little Birds — Bob Marley & The Wailers', maxBassRootRatio:.58, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16, bassTrimDb:-1.25},
  reggaeton: {...common, reference:'Gasolina — Daddy Yankee', maxBassRootRatio:.76, accompanimentNonRootRatio:.18, techniqueLandmarkRatio:.12, bassTrimDb:.0},
  rock: {...common, reference:'Back in Black — AC/DC', maxBassRootRatio:.72, accompanimentNonRootRatio:.16, techniqueLandmarkRatio:.14, bassTrimDb:-.5, harmonicVoicing:'power'},
  salsa: {...common, reference:'Pedro Navaja — Rubén Blades', maxBassRootRatio:.54, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.28, bassTrimDb:-1.25, harmonicVoicing:'extended'},
  ska: {...common, reference:'A Message to You, Rudy — The Specials', maxBassRootRatio:.62, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.18, bassTrimDb:-1.0},
  soul: {...common, reference:"Ain't No Sunshine — Bill Withers", maxBassRootRatio:.58, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.20, bassTrimDb:-1.5, harmonicVoicing:'extended'},
  swing: {...common, reference:'Sing, Sing, Sing — Benny Goodman', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, bassTrimDb:-1.5, harmonicVoicing:'extended'},
  timba: {...common, reference:'La Sandunguita — Cuban timba repertoire example', maxBassRootRatio:.50, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.40, techniqueLandmarkRatio:.30, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  zouk: {...common, reference:'Zouk la sé sèl médikaman nou ni — Kassav\'', maxBassRootRatio:.62, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.18, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  'drum-and-bass': {...common, reference:'Inner City Life — Goldie', maxBassRootRatio:.72, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.12, bassTrimDb:.0},
  industrial: {...common, reference:'Head Like a Hole — Nine Inch Nails', maxBassRootRatio:.76, accompanimentNonRootRatio:.14, techniqueLandmarkRatio:.12, bassTrimDb:-.25, harmonicVoicing:'power'},
  'punk-hardcore': {...common, reference:'Blitzkrieg Bop — Ramones', maxBassRootRatio:.78, accompanimentNonRootRatio:.10, techniqueLandmarkRatio:.10, bassTrimDb:-.75, harmonicVoicing:'power'},
  'uk-bass': {...common, reference:'Flowers — Sweet Female Attitude', maxBassRootRatio:.70, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.12, bassTrimDb:.0},
};

export function genreDialectTarget(genre: string): GenreDialectTarget {
  return GENRE_DIALECT_TARGETS[genre] ?? common;
}
