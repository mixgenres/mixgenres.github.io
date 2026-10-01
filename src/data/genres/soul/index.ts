import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'soul-deep-funk', worldId: 'soul', name: 'Classic Soul', origin: 'United States', era: '1950s–Present',
    description: 'Expressive lead singing, gospel-rooted response, a firm backbeat and a melodic rhythm section.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'piano', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [65, 120],
    keySubstyles: ['Classic Soul'], coreConcepts: ['gospel vocal phrasing', 'call and response', 'backbeat', 'horn response', 'melodic bass'],
    rhythmicGrammar: ['strong backbeat with a deep pocket, tambourine or handclap lift and short phrase-ending fills'], tuningSystem: '12-tet',
    signatureCell: 'Expressive vocal call answered by horns or backing voices over a deep backbeat', grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Am7', 'Dm7', 'G7', 'Cmaj7'], chorus: ['Fmaj7', 'G7', 'Em7', 'Am7'] },
  },
  {
    id: 'soul-p-funk', worldId: 'soul', name: 'Motown Soul', origin: 'Detroit, United States', era: '1960s–1970s',
    description: 'Polished pop-soul with a propulsive bass line, tambourine backbeat, bright strings and vocal-group replies.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'strings', 'tambourine'], preferredMeters: ['4/4'], tempoRange: [90, 130],
    keySubstyles: ['Motown'], coreConcepts: ['melodic bass', 'tambourine backbeat', 'string lift', 'vocal-group response'],
    rhythmicGrammar: ['driving straight backbeat, busy melodic bass and tambourine accents on two and four'], tuningSystem: '12-tet',
    signatureCell: 'Propulsive bass, tambourine backbeat and a short vocal-group answer', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
  {
    id: 'soul-synth-funk', worldId: 'soul', name: 'Southern Soul', origin: 'Memphis and Muscle Shoals, United States', era: '1960s–Present',
    description: 'Raw, gospel-inflected singing over earthy drums, bass, organ and restrained horn punctuation.',
    characteristicInstruments: ['voice', 'organ', 'bass', 'drums', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [60, 110],
    keySubstyles: ['Southern Soul'], coreConcepts: ['gospel inflection', 'organ support', 'horn punches', 'restrained groove'],
    rhythmicGrammar: ['laid-back backbeat or 12/8 shuffle with organ swells and compact horn answers'], tuningSystem: '12-tet',
    signatureCell: 'Organ and horn response around a gospel-inflected lead vocal', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Am', 'D7', 'Am', 'E7'], chorus: ['Dm7', 'G7', 'C', 'Am'] },
  },
  {
    id: 'soul-philly', worldId: 'soul', name: 'Philadelphia Soul', origin: 'Philadelphia, United States', era: '1960s–1970s',
    description: 'Orchestrated soul built around a steady rhythm section, lush strings, arranged horns and tightly blended vocal parts.',
    characteristicInstruments: ['voice', 'strings', 'bass', 'drums', 'piano'], preferredMeters: ['4/4'], tempoRange: [85, 125],
    keySubstyles: ['Philly Soul'], coreConcepts: ['string arrangement', 'tight vocal harmony', 'steady dance pulse', 'horn punctuation'],
    rhythmicGrammar: ['steady four-square soul groove with strings sustaining the harmony and compact horn or vocal responses'], tuningSystem: '12-tet',
    signatureCell: 'Sweeping string answer over a buoyant bass line and blended vocal phrase', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    prominentChords: ['maj7', 'm7', '9', '6'], sectionProgressions: { verse: ['C', 'Am7', 'Dm7', 'G7'], chorus: ['F', 'Em7', 'Dm7', 'G7'] },
  },
  {
    id: 'soul-northern', worldId: 'soul', name: 'Northern Soul', origin: 'United States; Northern England club scene', era: '1960s–1970s',
    description: 'Fast, driving 1960s soul centered on an urgent lead vocal, punchy backbeat, melodic bass and concise orchestral accents.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'piano', 'brass'], preferredMeters: ['4/4'], tempoRange: [125, 165],
    keySubstyles: ['Northern Soul'], coreConcepts: ['fast dance pulse', 'urgent vocal', 'strong backbeat', 'short horn or string accents'],
    rhythmicGrammar: ['brisk straight backbeat with active bass and short phrase-ending instrumental fills'], tuningSystem: '12-tet',
    signatureCell: 'Urgent vocal pickup answered by a tight horn stab over a fast backbeat', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 1, microtimingFeel: 'straight' },
    prominentChords: ['I', 'vi', 'IV', 'V'], sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
  {
    id: 'soul-neo-soul', worldId: 'soul', name: 'Neo-Soul', origin: 'United States', era: '1990s–Present',
    description: 'Contemporary soul drawing on gospel and jazz harmony, intimate vocals, elastic pocket and close interaction among bass, drums and keys.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'rhodes', 'electric-guitar'], preferredMeters: ['4/4'], tempoRange: [62, 100],
    keySubstyles: ['Neo-Soul'], coreConcepts: ['laid-back pocket', 'extended harmony', 'intimate lead vocal', 'live rhythmic interplay'],
    rhythmicGrammar: ['relaxed backbeat with syncopated bass, delayed chord attacks and restrained fills'], tuningSystem: '12-tet',
    signatureCell: 'Behind-the-beat vocal and bass phrase answered by a soft extended keyboard chord', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['maj9', 'm9', '13', '7#9'], sectionProgressions: { verse: ['Cmaj9', 'Am9', 'Dm9', 'G13'], chorus: ['Fmaj9', 'Em9', 'Dm9', 'G13'] },
  },
  {
    id: 'soul-memphis', worldId: 'soul', name: 'Memphis Soul', origin: 'Memphis, United States', era: '1960s–1970s',
    description: 'A distinctive Southern soul sound with intimate vocals, lean arrangements, deep rhythm-section pocket and restrained horn or organ answers.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'organ', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [65, 115],
    keySubstyles: ['Memphis Soul'], coreConcepts: ['deep pocket', 'restrained horn accents', 'organ support', 'gospel-inflected vocal'],
    rhythmicGrammar: ['laid-back backbeat or shuffle with a compact bass figure and concise instrumental responses'], tuningSystem: '12-tet',
    signatureCell: 'Gospel-inflected vocal answered by a restrained horn phrase over a deep pocket', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['I7', 'IV7', 'V7', 'm7'], sectionProgressions: { verse: ['C7', 'F7', 'C7', 'C7', 'F7', 'F7', 'C7', 'G7'] },
  },
  {
    id: 'soul-deep-soul', worldId: 'soul', name: 'Deep Soul', origin: 'Southern United States', era: '1950s–Present',
    description: 'Emotionally intense soul singing shaped by gospel phrasing, blues harmony and an unhurried rhythm section.',
    characteristicInstruments: ['voice', 'piano', 'bass', 'drums', 'organ'], preferredMeters: ['4/4', '12/8'], tempoRange: [55, 105],
    keySubstyles: ['Deep Soul'], coreConcepts: ['gospel melisma', 'blues inflection', 'slow backbeat or shuffle', 'dynamic vocal build'],
    rhythmicGrammar: ['slow, spacious backbeat or 12/8 shuffle with held chord support and phrase-ending responses'], tuningSystem: '12-tet',
    signatureCell: 'A rising, gospel-shaped vocal phrase over sustained keys and a spacious backbeat', grooveMechanics: { swingPercentage: 56, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['I7', 'IV7', 'V7', 'm7'], sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
  {
  "id": "soul-stax-soul",
  "worldId": "soul",
  "name": "Stax Soul",
  "origin": "Memphis / United States",
  "era": "1960s–1970s",
  "description": "Raw rhythm-section sound with Hammond, guitar interplay and tight horn arrangements.",
  "characteristicInstruments": [
    "organ",
    "electric-guitar",
    "bass",
    "drums",
    "brass",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    110
  ],
  "keySubstyles": [
    "Stax Soul"
  ],
  "coreConcepts": [
    "soul backbeat",
    "Hammond swell",
    "horn response"
  ],
  "rhythmicGrammar": [
    "Raw pocket with Hammond and horn"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Raw pocket with Hammond and horn",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Dm7",
    "G7",
    "Cmaj7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "verse": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "chorus": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "bridge": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "solo": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "coda": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ]
  },
  "referenceArtists": [
    "Booker T. & the M.G.'s",
    "Otis Redding"
  ],
  "referenceTracks": [],
  "techniques": [
    "Hammond swell",
    "horn response",
    "soul backbeat",
    "call-and-response",
    "string swell"
  ]
},
{
  "id": "soul-muscle-shoals-soul",
  "worldId": "soul",
  "name": "Muscle Shoals Soul",
  "origin": "Alabama / United States",
  "era": "1960s–1970s",
  "description": "Deep pocket, melodic bass, gospel vocals and understated expressive rhythm guitar.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "organ",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    70,
    110
  ],
  "keySubstyles": [
    "Muscle Shoals Soul"
  ],
  "coreConcepts": [
    "melodic bass",
    "gospel vocal run",
    "restrained guitar"
  ],
  "rhythmicGrammar": [
    "Deep pocket with melodic bass"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Deep pocket with melodic bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Dm7",
    "G7",
    "Cmaj7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "verse": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "chorus": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "bridge": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "solo": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "coda": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ]
  },
  "referenceArtists": [
    "Aretha Franklin",
    "Wilson Pickett"
  ],
  "referenceTracks": [],
  "techniques": [
    "gospel vocal run",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
},
{
  "id": "soul-psychedelic-soul",
  "worldId": "soul",
  "name": "Psychedelic Soul",
  "origin": "United States",
  "era": "1960s–1970s",
  "description": "Soul harmony combined with funk bass, studio effects, extended grooves and experimental arrangements.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "synth",
    "strings",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    75,
    110
  ],
  "keySubstyles": [
    "Psychedelic Soul"
  ],
  "coreConcepts": [
    "studio effect",
    "extended groove",
    "funk bass",
    "vocal layering"
  ],
  "rhythmicGrammar": [
    "Extended soul groove with psychedelic texture"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Extended soul groove with psychedelic texture",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Dm7",
    "G7",
    "Cmaj7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "verse": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "chorus": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "bridge": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "solo": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "coda": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ]
  },
  "referenceArtists": [
    "Curtis Mayfield",
    "Sly Stone"
  ],
  "referenceTracks": [],
  "techniques": [
    "gospel vocal run",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
},
{
  "id": "soul-quiet-funk-boogie-soul",
  "worldId": "soul",
  "name": "Quiet Funk / Boogie Soul",
  "origin": "United States",
  "era": "1970s–1980s",
  "description": "Polished electric bass, Rhodes and synth textures with sophisticated harmony and danceable grooves.",
  "characteristicInstruments": [
    "bass",
    "rhodes",
    "synth",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    95,
    120
  ],
  "keySubstyles": [
    "Quiet Funk / Boogie Soul"
  ],
  "coreConcepts": [
    "Rhodes voicing",
    "octave bass",
    "extended harmony",
    "dance groove"
  ],
  "rhythmicGrammar": [
    "Rhodes harmony over polished boogie pocket"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Rhodes harmony over polished boogie pocket",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Dm7",
    "G7",
    "Cmaj7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "verse": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "chorus": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "bridge": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "solo": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "coda": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7"
    ]
  },
  "referenceArtists": [
    "Leon Ware",
    "Patrice Rushen"
  ],
  "referenceTracks": [],
  "techniques": [
    "Rhodes voicing",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
}];

export const SOUL_WORLD: GenreWorld = {
  id: 'soul', name: 'Soul', family: 'African American Popular Music', color: '#C76C46', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'Black American popular music joining gospel vocal expression and call-and-response with blues, R&B and dance grooves.',
  substyles: ['Classic Soul', 'Southern Soul', 'Memphis Soul', 'Motown', 'Northern Soul', 'Philly Soul', 'Deep Soul', 'Neo-Soul'],
  artists: ['Ray Charles', 'Sam Cooke', 'Aretha Franklin', 'Otis Redding', 'James Brown', 'Marvin Gaye', 'Al Green', 'Curtis Mayfield', 'Bill Withers', 'Gladys Knight'],
  concepts: ['gospel-rooted vocal phrasing', 'call and response', 'backbeat', 'melodic bass', 'horn and organ answers', 'tambourine lift'],
  crossLinks: ['Soul ↔ Gospel', 'Soul ↔ R&B', 'Soul ↔ Funk'],
  roles: { voice: ['lead vocal', 'backing-vocal response', 'ad-libs'], drums: ['deep backbeat', 'shuffle or straight pocket'], bass: ['melodic bass line', 'root and fifth motion'], harmony: ['organ and piano support', 'string or horn punctuation'], percussion: ['tambourine on backbeat', 'handclap accents'] },
  tuningSystem: '12-tet', signatureCell: 'Lead vocal call and backing response over melodic bass and a grounded backbeat',
  grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' }, styleDefinitions: styles, patterns: [
  {
  "id": "tech-soul-soul-backbeat",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul",
    "soul-muscle-shoals-soul",
    "soul-psychedelic-soul",
    "soul-quiet-funk-boogie-soul"
  ],
  "name": "soul backbeat",
  "shortName": "soul backbeat",
  "family": "soul",
  "category": "groove",
  "description": "Technique: soul backbeat",
  "tags": [
    "soul",
    "soul backbeat"
  ],
  "approaches": [
    "soul backbeat"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "percussion"
  ],
  "instruments": [
    "drums"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "soul backbeat"
  ],
  "techniques": [
    "soul backbeat"
  ]
},
{
  "id": "tech-soul-gospel-vocal-run",
  "worldId": "soul",
  "styleIds": [
    "soul-muscle-shoals-soul",
    "soul-psychedelic-soul"
  ],
  "name": "gospel vocal run",
  "shortName": "gospel vocal run",
  "family": "soul",
  "category": "lead",
  "description": "Technique: gospel vocal run",
  "tags": [
    "soul",
    "gospel vocal run"
  ],
  "approaches": [
    "gospel vocal run"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "voice",
    "lead"
  ],
  "instruments": [
    "voice"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "gospel vocal run"
  ],
  "techniques": [
    "gospel vocal run"
  ]
},
{
  "id": "tech-soul-hammond-swell",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul"
  ],
  "name": "Hammond swell",
  "shortName": "Hammond swell",
  "family": "soul",
  "category": "comping",
  "description": "Technique: Hammond swell",
  "tags": [
    "soul",
    "Hammond swell"
  ],
  "approaches": [
    "Hammond swell"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "harmony",
    "piano"
  ],
  "instruments": [
    "organ"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "Hammond swell"
  ],
  "techniques": [
    "Hammond swell"
  ]
},
{
  "id": "tech-soul-horn-response",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul"
  ],
  "name": "horn response",
  "shortName": "horn response",
  "family": "soul",
  "category": "lead",
  "description": "Technique: horn response",
  "tags": [
    "soul",
    "horn response"
  ],
  "approaches": [
    "horn response"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "horn-section",
    "lead"
  ],
  "instruments": [
    "brass"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "horn response"
  ],
  "techniques": [
    "horn response"
  ]
},
{
  "id": "tech-soul-motown-tambourine",
  "worldId": "soul",
  "styleIds": [],
  "name": "Motown tambourine",
  "shortName": "Motown tambourine",
  "family": "soul",
  "category": "groove",
  "description": "Technique: Motown tambourine",
  "tags": [
    "soul",
    "Motown tambourine"
  ],
  "approaches": [
    "Motown tambourine"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "percussion"
  ],
  "instruments": [
    "hand-percussion"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "Motown tambourine"
  ],
  "techniques": [
    "Motown tambourine"
  ]
},
{
  "id": "tech-soul-melodic-bass",
  "worldId": "soul",
  "styleIds": [
    "soul-muscle-shoals-soul",
    "soul-psychedelic-soul",
    "soul-quiet-funk-boogie-soul"
  ],
  "name": "melodic bass",
  "shortName": "melodic bass",
  "family": "soul",
  "category": "bass",
  "description": "Technique: melodic bass",
  "tags": [
    "soul",
    "melodic bass"
  ],
  "approaches": [
    "melodic bass"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "bass"
  ],
  "instruments": [
    "bass"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "melodic bass"
  ],
  "techniques": [
    "melodic bass"
  ]
},
{
  "id": "tech-soul-rhodes-voicing",
  "worldId": "soul",
  "styleIds": [
    "soul-quiet-funk-boogie-soul"
  ],
  "name": "Rhodes voicing",
  "shortName": "Rhodes voicing",
  "family": "soul",
  "category": "comping",
  "description": "Technique: Rhodes voicing",
  "tags": [
    "soul",
    "Rhodes voicing"
  ],
  "approaches": [
    "Rhodes voicing"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "harmony",
    "lead"
  ],
  "instruments": [
    "piano"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "Rhodes voicing"
  ],
  "techniques": [
    "Rhodes voicing"
  ]
},
{
  "id": "tech-soul-string-swell",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul"
  ],
  "name": "string swell",
  "shortName": "string swell",
  "family": "soul",
  "category": "texture",
  "description": "Technique: string swell",
  "tags": [
    "soul",
    "string swell"
  ],
  "approaches": [
    "string swell"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture",
    "harmony"
  ],
  "instruments": [
    "strings"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "string swell"
  ],
  "techniques": [
    "string swell"
  ]
},
{
  "id": "tech-soul-call-and-response",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul"
  ],
  "name": "call-and-response",
  "shortName": "call-and-response",
  "family": "soul",
  "category": "lead",
  "description": "Technique: call-and-response",
  "tags": [
    "soul",
    "call-and-response"
  ],
  "approaches": [
    "call-and-response"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "voice",
    "lead"
  ],
  "instruments": [
    "voice"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "call-and-response"
  ],
  "techniques": [
    "call-and-response"
  ]
},
{
  "id": "tech-soul-vocal-harmony-stack",
  "worldId": "soul",
  "styleIds": [
    "soul-muscle-shoals-soul",
    "soul-psychedelic-soul",
    "soul-quiet-funk-boogie-soul"
  ],
  "name": "vocal harmony stack",
  "shortName": "vocal harmony stack",
  "family": "soul",
  "category": "comping",
  "description": "Technique: vocal harmony stack",
  "tags": [
    "soul",
    "vocal harmony stack"
  ],
  "approaches": [
    "vocal harmony stack"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "harmony",
    "lead"
  ],
  "instruments": [
    "piano"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "soul",
    "vocal harmony stack"
  ],
  "techniques": [
    "vocal harmony stack"
  ]
},
{
  "id": "style-soul-stax-soul-signature",
  "worldId": "soul",
  "styleIds": [
    "soul-stax-soul"
  ],
  "name": "Stax Soul Signature Cell",
  "shortName": "Stax Soul Cell",
  "family": "soul",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "soul",
    "signature"
  ],
  "approaches": [
    "signature",
    "groove"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "bass",
    "harmony"
  ],
  "instruments": [
    "organ",
    "electric-guitar",
    "bass",
    "drums"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.7,
    0.7,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7,
    0.9,
    0.7
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "soul",
    "signature"
  ],
  "techniques": [
    "Hammond swell",
    "horn response",
    "soul backbeat",
    "call-and-response",
    "string swell"
  ]
},
{
  "id": "style-soul-muscle-shoals-soul-signature",
  "worldId": "soul",
  "styleIds": [
    "soul-muscle-shoals-soul"
  ],
  "name": "Muscle Shoals Soul Signature Cell",
  "shortName": "Muscle Shoals Soul Cell",
  "family": "soul",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "soul",
    "signature"
  ],
  "approaches": [
    "signature",
    "groove"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "bass",
    "harmony"
  ],
  "instruments": [
    "electric-guitar",
    "bass",
    "drums",
    "organ"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.7,
    0.7,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7,
    0.9,
    0.7
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "soul",
    "signature"
  ],
  "techniques": [
    "gospel vocal run",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
},
{
  "id": "style-soul-psychedelic-soul-signature",
  "worldId": "soul",
  "styleIds": [
    "soul-psychedelic-soul"
  ],
  "name": "Psychedelic Soul Signature Cell",
  "shortName": "Psychedelic Soul Cell",
  "family": "soul",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "soul",
    "signature"
  ],
  "approaches": [
    "signature",
    "groove"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "bass",
    "harmony"
  ],
  "instruments": [
    "electric-guitar",
    "bass",
    "drums",
    "synth"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.7,
    0.7,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7,
    0.9,
    0.7
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "soul",
    "signature"
  ],
  "techniques": [
    "gospel vocal run",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
},
{
  "id": "style-soul-quiet-funk-boogie-soul-signature",
  "worldId": "soul",
  "styleIds": [
    "soul-quiet-funk-boogie-soul"
  ],
  "name": "Quiet Funk / Boogie Soul Signature Cell",
  "shortName": "Quiet Funk / Boogie Soul Cell",
  "family": "soul",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "soul",
    "signature"
  ],
  "approaches": [
    "signature",
    "groove"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "bass",
    "harmony"
  ],
  "instruments": [
    "bass",
    "rhodes",
    "synth",
    "drums"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    4,
    8,
    12
  ],
  "accentProfile": [
    1,
    0.7,
    0.7,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7,
    0.9,
    0.7
  ],
  "durationGrid": [
    1,
    1,
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "soul",
    "signature"
  ],
  "techniques": [
    "Rhodes voicing",
    "melodic bass",
    "soul backbeat",
    "vocal harmony stack"
  ]
}],
};
