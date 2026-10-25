/**
 * Song-level calibration targets. These are not substitute genre definitions;
 * they are guardrails used after composition so an authored pattern is realized
 * with the density, harmonic spread, register and technique vocabulary expected
 * from the style reference.
 */
export interface GenreDialectTarget {
  reference?: string;
  maxBassRootRatio?: number;
  maxBassLowRegisterRatio?: number;
  accompanimentNonRootRatio?: number;
  techniqueLandmarkRatio?: number;
  phraseDynamicRange?: number;
  harmonicVoicing?: 'triadic' | 'extended' | 'power' | 'modal';
}

export const GENRE_DIALECT_TARGETS: Record<string, GenreDialectTarget> = {
  afrobeats: {reference:'Essence — Wizkid feat. Tems', maxBassRootRatio:.62, accompanimentNonRootRatio:.28, harmonicVoicing:'extended'},
  bachata: {reference:'Obsesión — Aventura', maxBassRootRatio:.64, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.22},
  blues: {reference:'Sweet Home Chicago — Robert Johnson / blues standard', maxBassRootRatio:.58, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, harmonicVoicing:'extended'},
  brazilian: {reference:'Chega de Saudade — Antônio Carlos Jobim', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.20, harmonicVoicing:'extended'},
  country: {reference:'Folsom Prison Blues — Johnny Cash', maxBassRootRatio:.70, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.18},
  cumbia: {reference:'La Pollera Colorá — Colombian cumbia standard', maxBassRootRatio:.64, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.18},
  disco: {reference:"Stayin' Alive — Bee Gees", maxBassRootRatio:.72, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.12, harmonicVoicing:'extended'},
  electronic: {reference:'Blue Monday — New Order', maxBassRootRatio:.74, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10},
  folk: {reference:'The Times They Are a-Changin\' — Bob Dylan', maxBassRootRatio:.70, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16},
  funk: {reference:'Superstition — Stevie Wonder', maxBassRootRatio:.52, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.28, harmonicVoicing:'extended'},
  gospel: {reference:'Oh Happy Day — Edwin Hawkins Singers', maxBassRootRatio:.58, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.24, harmonicVoicing:'extended'},
  'hip-hop': {reference:'The Message — Grandmaster Flash and the Furious Five', maxBassRootRatio:.76, accompanimentNonRootRatio:.20, techniqueLandmarkRatio:.10},
  house: {reference:'Show Me Love — Robin S.', maxBassRootRatio:.76, accompanimentNonRootRatio:.26, techniqueLandmarkRatio:.10},
  jazz: {reference:'Autumn Leaves — standard', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.42, techniqueLandmarkRatio:.28, harmonicVoicing:'extended'},
  kizomba: {reference:'Saudade — Kizomba repertoire example', maxBassRootRatio:.68, accompanimentNonRootRatio:.28, techniqueLandmarkRatio:.16},
  tango: {reference:'La Cumparsita — Gerardo Matos Rodríguez', maxBassRootRatio:.62, maxBassLowRegisterRatio:.84, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.28, harmonicVoicing:'extended'},
  flamenco: {reference:'Entre Dos Aguas — Paco de Lucía', maxBassRootRatio:.52, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.30, harmonicVoicing:'modal'},
  metal: {reference:'Paranoid — Black Sabbath', maxBassRootRatio:.76, accompanimentNonRootRatio:.12, techniqueLandmarkRatio:.18, harmonicVoicing:'power'},
  'r-and-b': {reference:'No Diggity — Blackstreet', maxBassRootRatio:.60, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.36, techniqueLandmarkRatio:.22, harmonicVoicing:'extended'},
  reggae: {reference:'Three Little Birds — Bob Marley & The Wailers', maxBassRootRatio:.58, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.16},
  reggaeton: {reference:'Gasolina — Daddy Yankee', maxBassRootRatio:.76, accompanimentNonRootRatio:.18, techniqueLandmarkRatio:.12},
  rock: {reference:'Back in Black — AC/DC', maxBassRootRatio:.72, accompanimentNonRootRatio:.16, techniqueLandmarkRatio:.14, harmonicVoicing:'power'},
  salsa: {reference:'Pedro Navaja — Rubén Blades', maxBassRootRatio:.54, maxBassLowRegisterRatio:.82, accompanimentNonRootRatio:.38, techniqueLandmarkRatio:.28, harmonicVoicing:'extended'},
  ska: {reference:'A Message to You, Rudy — The Specials', maxBassRootRatio:.62, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.18},
  soul: {reference:"Ain't No Sunshine — Bill Withers", maxBassRootRatio:.58, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.20, harmonicVoicing:'extended'},
  swing: {reference:'Sing, Sing, Sing — Benny Goodman', maxBassRootRatio:.54, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.34, techniqueLandmarkRatio:.24, harmonicVoicing:'extended'},
  timba: {reference:'La Sandunguita — Cuban timba repertoire example', maxBassRootRatio:.50, maxBassLowRegisterRatio:.80, accompanimentNonRootRatio:.40, techniqueLandmarkRatio:.30, harmonicVoicing:'extended'},
  zouk: {reference:'Zouk la sé sèl médikaman nou ni — Kassav\'', maxBassRootRatio:.62, accompanimentNonRootRatio:.30, techniqueLandmarkRatio:.18, harmonicVoicing:'extended'},
  'drum-and-bass': {reference:'Inner City Life — Goldie', maxBassRootRatio:.72, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.22, techniqueLandmarkRatio:.12},
  industrial: {reference:'Head Like a Hole — Nine Inch Nails', maxBassRootRatio:.76, accompanimentNonRootRatio:.14, techniqueLandmarkRatio:.12, harmonicVoicing:'power'},
  'punk-hardcore': {reference:'Blitzkrieg Bop — Ramones', maxBassRootRatio:.78, accompanimentNonRootRatio:.10, techniqueLandmarkRatio:.10, harmonicVoicing:'power'},
  'uk-bass': {reference:'Flowers — Sweet Female Attitude', maxBassRootRatio:.70, maxBassLowRegisterRatio:.78, accompanimentNonRootRatio:.24, techniqueLandmarkRatio:.12},
};

