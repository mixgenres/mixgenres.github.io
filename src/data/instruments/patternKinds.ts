export type InstrumentPatternKindRule = {
  voicing?: string;
  family?: string;
  ids?: readonly string[];
  includes?: string;
  includesAny?: readonly string[];
  aliases: readonly string[];
};

export const INSTRUMENT_PATTERN_KIND_RULES: readonly InstrumentPatternKindRule[] = [
  { voicing: 'bass', aliases: ['bass', 'synth'] },
  { voicing: 'unpitched', aliases: ['percussion'] },
  { voicing: 'single', aliases: ['melody', 'lead'] },
  // Chordal instruments can share a written harmony cell even when the
  // authored source names a piano. Keep the concrete piano/keys aliases in
  // the compatibility vocabulary so an added organ, Rhodes, guitar, or
  // ensemble string part is ranked as an intentional adaptation.
  { voicing: 'chord', aliases: ['harmony', 'piano', 'keys'] },
  { family: 'kit', aliases: ['drums', 'percussion', 'pulse'] },
  { family: 'plucked', aliases: ['guitar', 'plucked', 'oud'] },
  { family: 'bowed', aliases: ['string-ensemble', 'violin', 'cello'] },
  { ids: ['violin', 'violin'], aliases: ['violin'] },
  { ids: ['cello'], aliases: ['cello'] },
  { family: 'winds', ids: ['soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax'], aliases: ['sax'] },
  { ids: ['flute', 'dizi', 'xiao', 'tin-whistle', 'low-whistle', 'quena'], aliases: ['flute', 'lead'] },
  { family: 'brass', aliases: ['horn-section'] },
  { family: 'voice', aliases: ['voice', 'coro'] },
  { ids: ['choir', 'choir'], aliases: ['coro'] },
  { family: 'bellows-and-keys', aliases: ['keys'] },
  { family: 'bellows-and-keys', includesAny: ['accordion', 'concertina'], aliases: ['accordion'] },
  { family: 'electronic', aliases: ['synth', 'texture'] },
  // These electronic patches are used as sampled one-shots or record-deck
  // hits in catalog arrangements. Let them receive authored kit/pulse cells
  // without being mistaken for a melodic vocal or synth lead.
  { ids: ['sampler', 'turntable'], aliases: ['sampler', 'drums', 'percussion', 'pulse'] },
  { ids: ['piano'], aliases: ['piano', 'keys'] },
  { ids: ['rhodes'], aliases: ['piano', 'keys'] },
  { ids: ['organ'], aliases: ['organ', 'keys'] },
  { includes: 'guitar', aliases: ['guitar'] },
  { ids: ['congas'], aliases: ['congas'] },
  { ids: ['bongos'], aliases: ['bongos'] },
  { ids: ['timbales'], aliases: ['timbales'] },
  { ids: ['guiro', 'guira', 'guacharaca'], aliases: ['guiro', 'guira', 'guacharaca'] },
  { ids: ['pandeiro', 'tamborim'], aliases: ['hand-percussion', 'pandeiro'] },
  { ids: ['bodhran'], aliases: ['bodhran', 'percussion'] },
  { ids: ['cajon'], aliases: ['cajon', 'percussion'] },
  { ids: ['palmas', 'zapateado'], aliases: ['palmas', 'percussion'] },
  { ids: ['tambora'], aliases: ['tambora', 'percussion'] },
  { ids: ['taiko', 'kane', 'paigu'], aliases: ['percussion'] },
  { ids: ['tabla'], aliases: ['tabla', 'percussion'] },
  { ids: ['shaker'], aliases: ['shaker', 'percussion'] },
  { ids: ['log-drum'], aliases: ['log-drum', 'percussion', 'bass'] },
  { ids: ['uilleann-pipes', 'bagpipes'], aliases: ['uilleann-pipes', 'bagpipes', 'lead'] },
  { ids: ['harp', 'harp'], aliases: ['harp', 'harp', 'harmony'] },
  { ids: ['tres'], aliases: ['tres', 'guitar'] },
  { ids: ['charango'], aliases: ['charango', 'guitar'] },
  { ids: ['requinto'], aliases: ['requinto', 'guitar'] },
  { ids: ['guitarron'], aliases: ['guitarron', 'bass'] },
  { ids: ['erhu'], aliases: ['erhu', 'string-ensemble', 'lead'] },
  { ids: ['pipa'], aliases: ['pipa', 'plucked', 'lead'] },
  { ids: ['guzheng', 'guqin'], aliases: ['guzheng', 'plucked', 'harmony'] },
  { ids: ['tovshuur'], aliases: ['tovshuur', 'guitar', 'plucked', 'lead'] },
  { ids: ['yatga'], aliases: ['yatga', 'guzheng', 'plucked', 'harmony'] },
  { ids: ['koto'], aliases: ['koto', 'plucked', 'harmony'] },
  { ids: ['shamisen'], aliases: ['shamisen', 'plucked', 'lead'] },
  { ids: ['shakuhachi'], aliases: ['shakuhachi', 'flute', 'lead'] },
  { ids: ['steel-drums'], aliases: ['steel-drums', 'percussion', 'melody'] },
  { ids: ['guitar'], aliases: ['guitar', 'guitar', 'lead'] },
  { ids: ['harmonium'], aliases: ['harmonium', 'keys', 'synth'] },
  { ids: ['synth'], aliases: ['synth', 'pad', 'texture'] },
  { ids: ['pedal-steel', 'lap-steel', 'resonator-guitar'], aliases: ['guitar', 'lead'] },
  { ids: ['djembe', 'shekere', 'talking-drum', 'janggu', 'kendang', 'nagarit', 'tbel'], aliases: ['percussion'] },
  { ids: ['bendir'], aliases: ['bendir', 'frame-drum', 'percussion'] },
  { ids: ['sistrum'], aliases: ['sistrum', 'shaker', 'percussion'] },
  { ids: ['balafon', 'gamelan-metallophone', 'marimba-de-chonta'], aliases: ['melody', 'percussion'] },
  { ids: ['qanun', 'tanpura', 'gayageum', 'bandola-llanera'], aliases: ['plucked', 'lead'] },
  { ids: ['ney', 'duduk', 'bansuri', 'washint'], aliases: ['flute', 'lead'] },
  { ids: ['begena'], aliases: ['plucked', 'harmony', 'lead'] },
  { ids: ['sarangi', 'haegeum'], aliases: ['string-ensemble', 'lead'] },
  { ids: ['kemenche'], aliases: ['kemenche', 'violin', 'string-ensemble', 'lead'] },
  { ids: ['tanbur'], aliases: ['tanbur', 'oud', 'plucked', 'harmony'] },
];
