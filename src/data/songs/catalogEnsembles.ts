/**
 * Deliberate teaching-roster extensions for worlds whose historical palette
 * is smaller than the catalog's eight-part sample target. These are still
 * world-native colors (or documented production companions), and are only
 * used when a style's authored roster needs additional playable parts.
 */
export const CATALOG_ROSTER_EXTENSIONS: Readonly<Record<string, readonly string[]>> = {
  amapiano: ['organ'],
  arabic: ['harp'],
  'arabic-instrumental-maqam': ['harp', 'bendir'],
  // Ambient's genre palette contains a drum kit for Downtempo Ambient, but
  // the sparse pad, drone, glitch, and generative studies need sustained
  // colors when they expand to the teaching roster.
  ambient: ['harp', 'cello', 'oboe'],
  bass: ['bass', 'rhodes', 'turntable', 'piano', 'guitar'],
  'bachata-dominican': ['maracas', 'tambora'],
  'bachata-amargue': ['maracas', 'tambora'],
  'bachata-traditional-bolero-bachata': ['maracas', 'tambora'],
  'afrobeat-palm-wine': ['talking-drum', 'shekere', 'djembe', 'congas', 'cowbell'],
  'steppe-morin-khuur': ['tovshuur', 'yatga'],
  'steppe-dombra': ['tovshuur', 'yatga'],
  'steppe-khoomei': ['tovshuur', 'yatga'],
  'steppe-sygyt': ['tovshuur', 'yatga'],
  'steppe-kargyraa': ['tovshuur', 'yatga'],
  'gnawa-traditional': ['bendir', 'tbel'],
  'gnawa-lila-trance': ['bendir', 'tbel'],
  bollywood: ['piano'],
  'bollywood-disco-bollywood': ['sitar', 'sarangi'],
  blues: ['organ', 'rhodes'],
  cinematic: ['violin', 'harp', 'oboe', 'flute'],
  tango: ['cello', 'viola', 'clarinet'],
  classical: ['oboe'],
  dangdut: ['piano', 'organ', 'rhodes'],
  'desert-blues-tishoumaren': ['harmonica', 'kora', 'oud', 'flute'],
  'desert-blues-sahel-guitar': ['harmonica', 'kora', 'oud'],
  'desert-blues-acoustic-tuareg': ['harmonica', 'kora', 'oud', 'flute', 'frame-drum'],
  'desert-blues-psychedelic-desert': ['harmonica', 'organ', 'sampler', 'rhodes'],
  electronic: ['synth-bass', 'sampler', 'turntable', 'rhodes', 'piano', 'bass'],
  // Tizita and Traditional Modal are carried by Ethiopian acoustic colors;
  // keep their eight-part teaching roster away from the Ethio-jazz horn/keys
  // palette used by the modern styles.
  'ethiopian-tizita': ['washint', 'begena', 'nagarit', 'sistrum'],
  'ethiopian-traditional-modal': ['washint', 'begena', 'nagarit', 'sistrum'],
  // The traditional Gamelan worlds need another keyed metallophone rather
  // than the generic Synthesizer that used to fill the eighth slot.
  gamelan: ['flute', 'saron'],
  'gamelan-balinese-gong-kebyar': ['saron', 'gangsa'],
  gnawa: ['darbuka', 'oud', 'flute'],
  andean: ['pan-flute', 'mandolin'],
  house: ['bass', 'sampler'],
  // Traditional Hindustani and Carnatic studies reach the teaching target
  // through Indian melodic and tala colors, never through generic keyboards.
  // Veena and Mridangam are real catalog aliases backed by Indian plucked and
  // hand-drum models; they remain available if a sparse style needs another
  // authored support voice after the core palette is exhausted.
  'indian-classical': ['bansuri', 'flute', 'veena', 'mridangam'],
  industrial: ['turntable', 'rhodes', 'piano'],
  kizomba: ['rhodes', 'shaker', 'piano'],
  korean: ['flute', 'voice', 'violin', 'cello'],
  mbalax: ['djembe', 'kora', 'piano'],
  'mbalax-sabar-heavy': ['balafon'],
  metal: ['synth', 'sampler', 'piano', 'turntable', 'organ'],
  punk: ['synth', 'sampler', 'piano', 'organ', 'rhodes'],
  qawwali: ['tabla', 'tanpura', 'shaker'],
  // The Night Song study explicitly omits the traditional drum/guitar band;
  // use quiet raga colors and studio-friendly support parts instead.
  'qawwali-contemporary-fusion': ['tanpura', 'sarangi', 'sitar', 'bansuri'],
  'r-and-b': ['piano', 'organ', 'tambourine', 'synth'],
  reggaeton: ['bass', 'guitar', 'congas', 'maracas', 'piano'],
  rock: ['piano', 'organ', 'synth', 'sampler', 'rhodes'],
  soukous: ['shaker', 'organ', 'rhodes', 'piano'],
  steppe: ['flute', 'frame-drum', 'khomus', 'piano'],
  flamenco: ['castanets', 'shaker', 'hand-percussion'],
  weird: ['rhodes', 'turntable'],
  persian: ['piano'],
  'persian-radif': ['ney', 'oud', 'qanun'],
  'persian-instrumental-ensemble': ['ney', 'oud', 'qanun'],
  'turkish-ottoman-classical': ['violin', 'tanbur', 'kemenche'],
  'turkish-turkish-folk': ['kemenche'],
  // The contemporary Persian chamber study is intentionally percussion-free.
  // Add a viola color from the chamber palette so its expanded teaching roster
  // still reaches eight distinct players without importing tombak or a pop kit.
  'persian-modern-persian': ['viola', 'piano'],
  zouk: ['rhodes', 'sampler', 'piano'],
};

/** Parts that would contradict a style's authored sonic identity even though
 * the wider world palette contains them. They are replaced by the explicit
 * extension colors above when the eight-part teaching roster is built. */
export const CATALOG_ROSTER_EXCLUSIONS: Readonly<Record<string, readonly string[]>> = {
  gamelan: ['synth'],
  'indian-classical': ['synth', 'piano', 'organ'],
  'ambient-atmospheric': ['drums'],
  'ambient-drone': ['drums'],
  'ambient-dark-ambient': ['drums'],
  'ambient-organic-ambient': ['drums'],
  'ambient-neo-classical-ambient': ['drums'],
  'ambient-glitch-ambient': ['drums'],
  'ambient-generative-ambient': ['drums'],
  'ambient-cinematic-ambient': ['drums'],
  'qawwali-contemporary-fusion': ['dholak', 'hand-percussion', 'tabla'],
  'arabic-instrumental-maqam': ['string-ensemble'],
  'desert-blues-tishoumaren': ['organ', 'sampler', 'piano'],
  'desert-blues-sahel-guitar': ['organ', 'sampler', 'piano'],
  'desert-blues-acoustic-tuareg': ['organ', 'sampler', 'piano', 'bass', 'drums'],
  'tango-piazzolla-nuevo-tango': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-golden-age': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-canyengue': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-guardia-nueva-de-caro': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-canaro': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-darienzo': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-di-sarli': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-troilo': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-pugliese': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-salgan': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-tango-cancion': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-milonga': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-vals': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'tango-modern-orquesta': ['synth', 'sampler', 'drums', 'bass', 'bombo-leguero'],
  'flamenco-solea': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-bulerias': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-alegrias': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-tangos': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-seguiriya': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-tientos': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-fandangos': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-tonas-martinetes': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-taranta': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-granaina': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-malaguena': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-guajira': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-farruca': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  'flamenco-sevillanas': ['tenor-sax', 'piano', 'upright-bass', 'bass', 'drums', 'synth', 'sampler'],
  // Reich's minimalist study is carried by pitched mallets and bowed pulses;
  // a timpani patch has no authored cell and would fail when a student enables
  // the full teaching roster. The classical extension palette supplies a
  // playable chamber color in its place.
  'classical-minimalist': ['timpani'],
  'steppe-khoomei': ['drums', 'guitar', 'bass', 'piano'],
  'steppe-sygyt': ['drums', 'guitar', 'bass', 'piano'],
  'steppe-kargyraa': ['drums', 'guitar', 'bass', 'piano'],
  'bollywood-disco-bollywood': ['bansuri', 'tabla'],
  'gamelan-balinese-gong-kebyar': ['bonang'],
  'gnawa-gnawa-jazz': ['drums'],
  'cinematic-minimal-tension': ['french-horn', 'timpani'],
  'cinematic-ambient-score': ['french-horn', 'timpani'],
  // This style's authored arrangement explicitly keeps percussion out of the
  // chamber texture; the world-level tombak is reserved for dastgah/radif.
  'persian-modern-persian': ['tombak'],
  'persian-instrumental-ensemble': ['piano', 'string-ensemble'],
  'persian-radif': ['piano', 'string-ensemble'],
  'mbalax-sabar-heavy': ['piano'],
  'turkish-ottoman-classical': ['drums', 'string-ensemble', 'darbuka', 'clarinet', 'zurna', 'guitar', 'bass'],
  'turkish-turkish-folk': ['guitar', 'bass', 'oud', 'qanun', 'drums', 'string-ensemble'],
  'andean-huayno': ['synth', 'drums'],
  // Traditional Andean studies already author the bombo-andino. Keep the
  // teaching expansion on that native pulse and use pan-flute/mandolin colors
  // for the extra voices instead of layering a generic Western drum kit.
  'andean-sanjuanito': ['synth', 'drums'],
  'andean-saya': ['synth', 'drums'],
  'andean-tinku': ['synth', 'drums'],
  'andean-carnavalito': ['synth', 'drums'],
  'andean-nueva-cancion': ['synth', 'drums'],
  'bachata-dominican': ['synth', 'drums'],
  'bachata-amargue': ['synth', 'drums'],
  'bachata-traditional-bolero-bachata': ['synth', 'drums'],
  'afrobeat-palm-wine': ['trumpet', 'tenor-sax', 'organ', 'bass', 'drums'],
  'steppe-morin-khuur': ['drums', 'guitar', 'piano'],
  'steppe-dombra': ['drums', 'guitar', 'piano'],
  'gnawa-traditional': ['tenor-sax', 'drums', 'guitar'],
  'gnawa-lila-trance': ['tenor-sax', 'drums', 'guitar'],
  'ethiopian-tizita': ['tenor-sax', 'trumpet', 'organ', 'bass', 'drums'],
  'ethiopian-traditional-modal': ['tenor-sax', 'trumpet', 'organ', 'bass', 'drums'],
};

/** Preferred full-roster entrance for forms whose named peak sections already
 * have a deliberate reduced lineup (for example a Bollywood solo or a
 * Persian chamber build). */
export const CATALOG_ROSTER_ANCHOR_SECTIONS: Readonly<Record<string, readonly string[]>> = {
  'bollywood-disco-bollywood': ['outro'],
  'persian-modern-persian': ['climax'],
};

