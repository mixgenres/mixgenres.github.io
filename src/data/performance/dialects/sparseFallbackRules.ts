export type DialectMatcher = {
  source: 'token' | 'instrument';
  includes?: string;
  pattern?: RegExp;
  /** Exact semantic engine key. Avoids fuzzy instrument-id matching. */
  engineKey?: string;
};

export interface SparseDialectFallbackRule {
  dialectId: string;
  allOf?: DialectMatcher[];
  anyOf?: DialectMatcher[];
}

export const RELATED_DIALECT_INSTRUMENTS: Record<string, string[]> = {
  bass: ['upright-bass', 'bass', 'pick-bass'],
  guitar: ['guitar', 'spanish-guitar', 'acoustic-guitar', 'electric-guitar'],
  sax: ['tenor-sax', 'alto-sax', 'soprano-sax', 'bari-sax'],
  drum: ['drums', 'brush-kit'],
};

export const SPARSE_DIALECT_FALLBACK_RULES: SparseDialectFallbackRule[] = [
  { dialectId: 'upright-bass:salsa-tumbao', allOf: [{ source: 'token', includes: 'salsa' }, { source: 'instrument', pattern: /(bass|upright)/ }] },
  { dialectId: 'congas:salsa', allOf: [{ source: 'instrument', includes: 'conga' }], anyOf: [{ source: 'token', includes: 'salsa' }, { source: 'token', includes: 'timba' }, { source: 'token', includes: 'cumbia' }] },
  { dialectId: 'congas:funk', allOf: [{ source: 'instrument', includes: 'conga' }], anyOf: [{ source: 'token', includes: 'funk' }, { source: 'token', includes: 'soul' }, { source: 'token', includes: 'disco' }] },
  { dialectId: 'trumpet:salsa', allOf: [{ source: 'instrument', includes: 'trumpet' }], anyOf: [{ source: 'token', includes: 'salsa' }, { source: 'token', includes: 'timba' }] },
  { dialectId: 'trumpet:jazz', allOf: [{ source: 'instrument', includes: 'trumpet' }, { source: 'token', includes: 'jazz' }] },
  { dialectId: 'upright-bass:tango-arco', allOf: [{ source: 'token', includes: 'tango' }, { source: 'instrument', pattern: /(bass|upright)/ }] },
  { dialectId: 'guitar:flamenco', allOf: [{ source: 'token', includes: 'flamenco' }, { source: 'instrument', includes: 'guitar' }] },
  { dialectId: 'guitar:tango', allOf: [{ source: 'token', includes: 'tango' }, { source: 'instrument', includes: 'guitar' }] },
  { dialectId: 'guitar:blues', allOf: [{ source: 'token', includes: 'blues' }], anyOf: [{ source: 'instrument', includes: 'guitar' }, { source: 'instrument', includes: 'guitarra' }] },
  { dialectId: 'cajon:flamenco', allOf: [{ source: 'token', includes: 'flamenco' }, { source: 'instrument', includes: 'cajon' }] },
  { dialectId: 'bandoneon:tango', allOf: [{ source: 'token', includes: 'tango' }, { source: 'instrument', includes: 'bandoneon' }] },
  { dialectId: 'oud:arabic-maqam', allOf: [{ source: 'instrument', includes: 'oud' }], anyOf: [{ source: 'token', includes: 'maqam' }, { source: 'token', includes: 'middle_east' }] },
  { dialectId: 'sitar:hindustani', allOf: [{ source: 'instrument', includes: 'sitar' }], anyOf: [{ source: 'token', includes: 'raga' }, { source: 'token', includes: 'india' }] },
  { dialectId: 'quena:andean-flute', allOf: [{ source: 'instrument', includes: 'quena' }], anyOf: [{ source: 'instrument', includes: 'zampona' }, { source: 'token', includes: 'andean' }] },
  { dialectId: 'kizomba:electronic-beat', allOf: [{ source: 'token', pattern: /(kizomba|tarraxo|dembow)/ }, { source: 'instrument', pattern: /(bass|synth)/ }] },
  { dialectId: 'bass:reggae', allOf: [{ source: 'instrument', includes: 'bass' }, { source: 'token', pattern: /(reggae|dub|dancehall)/ }] },
  { dialectId: 'log-drum:afrobeats', allOf: [{ source: 'instrument', includes: 'log-drum' }] },
  { dialectId: 'requinto:bachata', allOf: [{ source: 'instrument', includes: 'requinto' }, { source: 'token', includes: 'bachata' }] },
  { dialectId: 'drums:kizomba', allOf: [{ source: 'instrument', includes: 'drum' }, { source: 'token', pattern: /(kizomba|zouk|tarraxo)/ }] },
  { dialectId: 'bagpipes:celtic', anyOf: [{ source: 'instrument', includes: 'bagpipe' }, { source: 'instrument', includes: 'uilleann' }] },
  { dialectId: 'cowbell:salsa', anyOf: [{ source: 'instrument', includes: 'cowbell' }, { source: 'instrument', includes: 'claves' }, { source: 'instrument', includes: 'woodblock' }] },
];

export const PROGRAMMED_ELECTRONIC_GENRE_PATTERN = /house|techno|electronic|drum-and-bass|uk-bass|industrial|reggaeton|hip-hop|trap|modern-kizomba|tarraxo/;
export const HYBRID_GENRE_PATTERN = /cumbia|afrobeats|funk|ska|soul|r-and-b|rock|pop|zouk/;
