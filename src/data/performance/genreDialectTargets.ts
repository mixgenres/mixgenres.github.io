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

export const COMMON_DIALECT_TARGET: GenreDialectTarget = {
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
  afrobeats: {...COMMON_DIALECT_TARGET, reference:'Essence — Wizkid feat. Tems', maxBassRootRatio:.62, accompanimentNonRootRatio:.28, bassTrimDb:-.75, harmonicVoicing:'extended'},
  bachata: {...COMMON_DIALECT_TARGET, reference:'Obsesión — Aventura', maxBassRootRatio:.64, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.22, bassTrimDb:-1.25},
  blues: {...COMMON_DIALECT_TARGET, reference:'Sweet Home Chicago — Robert Johnson / blues standard', maxBassRootRatio:.58, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  brazilian: {...COMMON_DIALECT_TARGET, reference:'Chega de Saudade — Antônio Carlos Jobim', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.20, bassTrimDb:-1.25, harmonicVoicing:'extended'},
  country: {...COMMON_DIALECT_TARGET, reference:'Folsom Prison Blues — Johnny Cash', maxBassRootRatio:.70, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.18, bassTrimDb:-1.0},
  cumbia: {...COMMON_DIALECT_TARGET, reference:'La Pollera Colorá — Colombian cumbia standard', maxBassRootRatio:.64, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.18, bassTrimDb:-1.25},
  disco: {...COMMON_DIALECT_TARGET, reference:"Stayin' Alive — Bee Gees", maxBassRootRatio:.72, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.12, bassTrimDb:-.5, harmonicVoicing:'extended'},
  electronic: {...COMMON_DIALECT_TARGET, reference:'Blue Monday — New Order', maxBassRootRatio:.74, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10, bassTrimDb:.0},
  folk: {...COMMON_DIALECT_TARGET, reference:'The Times They Are a-Changin\' — Bob Dylan', maxBassRootRatio:.70, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16, bassTrimDb:-1.5},
  funk: {...COMMON_DIALECT_TARGET, reference:'Superstition — Stevie Wonder', maxBassRootRatio:.52, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.28, bassTrimDb:-.25, harmonicVoicing:'extended'},
  gospel: {...COMMON_DIALECT_TARGET, reference:'Oh Happy Day — Edwin Hawkins Singers', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.24, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  'hip-hop': {...COMMON_DIALECT_TARGET, reference:'The Message — Grandmaster Flash and the Furious Five', maxBassRootRatio:.76, accompanimentNonRootRatio:.20, techniqueLandmarkRatio:.10, bassTrimDb:-.25},
  house: {...COMMON_DIALECT_TARGET, reference:'Show Me Love — Robin S.', maxBassRootRatio:.76, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10, bassTrimDb:.0},
  jazz: {...COMMON_DIALECT_TARGET, reference:'Autumn Leaves — standard', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.42, techniqueLandmarkRatio:.28, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  kizomba: {...COMMON_DIALECT_TARGET, reference:'Saudade — Kizomba repertoire example', maxBassRootRatio:.68, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.16, bassTrimDb:-1.25},
  tango: {...COMMON_DIALECT_TARGET, reference:'La Cumparsita — Gerardo Matos Rodríguez', maxBassRootRatio:.62, maxBassLowRegisterRatio:.84, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.28, bassTrimDb:-1.75, harmonicVoicing:'extended'},
  flamenco: {...COMMON_DIALECT_TARGET, reference:'Entre Dos Aguas — Paco de Lucía', maxBassRootRatio:.52, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.30, bassTrimDb:-1.25, harmonicVoicing:'modal'},
  metal: {...COMMON_DIALECT_TARGET, reference:'Paranoid — Black Sabbath', maxBassRootRatio:.76, accompanimentNonRootRatio:.12, techniqueLandmarkRatio:.18, bassTrimDb:-.5, harmonicVoicing:'power'},
  'r-and-b': {...COMMON_DIALECT_TARGET, reference:'No Diggity — Blackstreet', maxBassRootRatio:.60, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.22, bassTrimDb:-.75, harmonicVoicing:'extended'},
  reggae: {...COMMON_DIALECT_TARGET, reference:'Three Little Birds — Bob Marley & The Wailers', maxBassRootRatio:.58, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16, bassTrimDb:-1.25},
  reggaeton: {...COMMON_DIALECT_TARGET, reference:'Gasolina — Daddy Yankee', maxBassRootRatio:.76, accompanimentNonRootRatio:.18, techniqueLandmarkRatio:.12, bassTrimDb:.0},
  rock: {...COMMON_DIALECT_TARGET, reference:'Back in Black — AC/DC', maxBassRootRatio:.72, accompanimentNonRootRatio:.16, techniqueLandmarkRatio:.14, bassTrimDb:-.5, harmonicVoicing:'power'},
  salsa: {...COMMON_DIALECT_TARGET, reference:'Pedro Navaja — Rubén Blades', maxBassRootRatio:.54, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.28, bassTrimDb:-1.25, harmonicVoicing:'extended'},
  ska: {...COMMON_DIALECT_TARGET, reference:'A Message to You, Rudy — The Specials', maxBassRootRatio:.62, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.18, bassTrimDb:-1.0},
  soul: {...COMMON_DIALECT_TARGET, reference:"Ain't No Sunshine — Bill Withers", maxBassRootRatio:.58, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.20, bassTrimDb:-1.5, harmonicVoicing:'extended'},
  swing: {...COMMON_DIALECT_TARGET, reference:'Sing, Sing, Sing — Benny Goodman', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, bassTrimDb:-1.5, harmonicVoicing:'extended'},
  timba: {...COMMON_DIALECT_TARGET, reference:'La Sandunguita — Cuban timba repertoire example', maxBassRootRatio:.50, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.40, techniqueLandmarkRatio:.30, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  zouk: {...COMMON_DIALECT_TARGET, reference:'Zouk la sé sèl médikaman nou ni — Kassav\'', maxBassRootRatio:.62, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.18, bassTrimDb:-1.0, harmonicVoicing:'extended'},
  'drum-and-bass': {...COMMON_DIALECT_TARGET, reference:'Inner City Life — Goldie', maxBassRootRatio:.72, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.12, bassTrimDb:.0},
  industrial: {...COMMON_DIALECT_TARGET, reference:'Head Like a Hole — Nine Inch Nails', maxBassRootRatio:.76, accompanimentNonRootRatio:.14, techniqueLandmarkRatio:.12, bassTrimDb:-.25, harmonicVoicing:'power'},
  'punk-hardcore': {...COMMON_DIALECT_TARGET, reference:'Blitzkrieg Bop — Ramones', maxBassRootRatio:.78, accompanimentNonRootRatio:.10, techniqueLandmarkRatio:.10, bassTrimDb:-.75, harmonicVoicing:'power'},
  'uk-bass': {...COMMON_DIALECT_TARGET, reference:'Flowers — Sweet Female Attitude', maxBassRootRatio:.70, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.12, bassTrimDb:.0},
};

