import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'r-and-b-deep-funk', worldId: 'r-and-b', name: 'Contemporary R&B', origin: 'United States', era: '1980s–Present',
    description: 'Vocal-led rhythm and blues with a deep pocket, syncopated bass, rich keyboard harmony and shaped drum production.',
    characteristicInstruments: ['drums', 'bass', 'synth', 'piano', 'voice'], preferredMeters: ['4/4'], tempoRange: [65, 105],
    keySubstyles: ['Contemporary R&B'], coreConcepts: ['lead vocal phrasing', 'deep backbeat', 'extended chords', 'bass pocket', 'vocal layering'],
    rhythmicGrammar: ['laid-back backbeat with syncopated kick and bass, leaving space around lead vocal phrases'], tuningSystem: '12-tet',
    signatureCell: 'Deep backbeat and syncopated bass under an expressive lead vocal', grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['m7', 'maj7', '9', '13'], sectionProgressions: { verse: ['Am7', 'Dm9', 'G13', 'Cmaj7'], chorus: ['Fmaj7', 'Em7', 'Dm9', 'G13'] },
  },
  {
    id: 'r-and-b-synth-funk', worldId: 'r-and-b', name: 'Neo-Soul', origin: 'United States', era: '1990s–Present',
    description: 'Soulful, jazz-informed R&B with elastic timing, extended voicings and interlocking bass, drums and keys.',
    characteristicInstruments: ['drums', 'bass', 'piano', 'electric-guitar', 'voice'], preferredMeters: ['4/4'], tempoRange: [65, 100],
    keySubstyles: ['Neo-Soul'], coreConcepts: ['behind-the-beat pocket', 'extended voicings', 'live interplay', 'melismatic vocal'],
    rhythmicGrammar: ['loose pocket with delayed chord attacks, syncopated bass and subtle ghost notes'], tuningSystem: '12-tet',
    signatureCell: 'Laid-back kick and snare with delayed chord voicings', grooveMechanics: { swingPercentage: 56, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['maj9', 'm9', '13', '7#9'], sectionProgressions: { verse: ['Cmaj9', 'Bbmaj9', 'Am9', 'G13'], chorus: ['Fmaj9', 'Em9', 'Dm9', 'G13'] },
  },
  {
    id: 'r-and-b-boogie', worldId: 'r-and-b', name: 'Rhythm & Blues', origin: 'United States', era: '1940s–Present',
    description: 'A broad Black American popular music tradition connecting blues-rooted song, groove and vocal expression.',
    characteristicInstruments: ['voice', 'piano', 'bass', 'drums', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [60, 120],
    keySubstyles: ['Classic R&B'], coreConcepts: ['blues inflection', 'vocal harmony', 'backbeat', 'call and response'],
    rhythmicGrammar: ['backbeat or rolling 12/8 pulse shaped around vocal phrasing and blues-derived accents'], tuningSystem: '12-tet',
    signatureCell: 'Expressive vocal phrase over a blues-rooted backbeat', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
  {
    id: 'r-and-b-doo-wop', worldId: 'r-and-b', name: 'Doo-Wop', origin: 'United States', era: '1940s–1960s',
    description: 'Close vocal-group harmony over a simple bass-and-backbeat foundation, often with nonsense-syllable responses and a tenor lead.',
    characteristicInstruments: ['voice', 'piano', 'upright-bass', 'drums', 'tenor-sax'], preferredMeters: ['4/4', '12/8'], tempoRange: [60, 150],
    keySubstyles: ['Doo-Wop'], coreConcepts: ['close vocal harmony', 'tenor lead', 'bass vocal or upright bass foundation', 'call and response'],
    rhythmicGrammar: ['compact backbeat or triplet doo-wop pulse with vocal answers between lead phrases'], tuningSystem: '12-tet',
    signatureCell: 'Tenor lead answered by close vocal-group harmony over a simple bass pulse', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    prominentChords: ['I', 'vi', 'IV', 'V', 'I6'], sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['C', 'Am', 'F', 'G'] },
  },
  {
    id: 'r-and-b-quiet-storm', worldId: 'r-and-b', name: 'Quiet Storm', origin: 'United States', era: '1970s–Present',
    description: 'Late-night soul and R&B with intimate lead vocals, restrained drums, warm electric keys, and sustained harmony.',
    characteristicInstruments: ['voice', 'rhodes', 'bass', 'drums', 'tenor-sax'], preferredMeters: ['4/4'], tempoRange: [58, 92],
    keySubstyles: ['Quiet Storm'], coreConcepts: ['intimate vocal delivery', 'soft backbeat', 'warm extended chords', 'saxophone or keyboard fills'],
    rhythmicGrammar: ['sparse laid-back backbeat with held keyboard voicings and space for vocal phrasing'], tuningSystem: '12-tet',
    signatureCell: 'Soft pocket under a sustained electric-piano chord and intimate vocal phrase', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['maj7', 'm7', '9', '13'], sectionProgressions: { verse: ['Fmaj7', 'Dm7', 'Gm7', 'C9'], chorus: ['Bbmaj7', 'Am7', 'Gm7', 'C9'] },
  },
  {
    id: 'r-and-b-new-jack-swing', worldId: 'r-and-b', name: 'New Jack Swing', origin: 'United States', era: '1980s–1990s',
    description: 'Dance-oriented R&B combining sharply programmed swing-influenced drums, syncopated bass, bright synths, and layered vocals.',
    characteristicInstruments: ['drums', 'synth', 'bass', 'voice', 'sampler'], preferredMeters: ['4/4'], tempoRange: [95, 125],
    keySubstyles: ['New Jack Swing'], coreConcepts: ['swinging programmed beat', 'syncopated bass', 'bright keyboard stabs', 'layered vocal hooks'],
    rhythmicGrammar: ['firm kick and snare with swung subdivisions, syncopated bass and sharply placed keyboard accents'], tuningSystem: '12-tet',
    signatureCell: 'Swinging drum-machine backbeat and syncopated bass beneath a layered vocal hook', grooveMechanics: { swingPercentage: 57, anticipationOffsetSteps: 1, microtimingFeel: 'swung' },
    prominentChords: ['m7', '9', 'sus4', '7'], sectionProgressions: { verse: ['Am7', 'Fmaj7', 'Dm7', 'E7'], chorus: ['Am7', 'Dm7', 'G7', 'Cmaj7'] },
  },
  {
    id: 'r-and-b-classic-blues-rnb', worldId: 'r-and-b', name: 'Classic Rhythm and Blues', origin: 'United States', era: '1940s–1960s',
    description: 'Blues-derived postwar R&B with shuffle or backbeat, piano or saxophone-led riffs, and expressive lead singing.',
    characteristicInstruments: ['voice', 'piano', 'tenor-sax', 'upright-bass', 'drums'], preferredMeters: ['4/4', '12/8'], tempoRange: [65, 145],
    keySubstyles: ['Classic R&B', 'Rhythm and Blues'], coreConcepts: ['blues form', 'shuffle', 'riff-based horns', 'vocal call and response'],
    rhythmicGrammar: ['blues shuffle or straight backbeat supporting repeated horn or piano riffs and vocal responses'], tuningSystem: '12-tet',
    signatureCell: 'Short piano or saxophone riff answered by a blues-inflected lead vocal', grooveMechanics: { swingPercentage: 58, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    prominentChords: ['I7', 'IV7', 'V7'], sectionProgressions: { verse: ['C7', 'C7', 'F7', 'C7', 'G7', 'F7', 'C7', 'G7'] },
  },
  {
    id: 'r-and-b-alternative', worldId: 'r-and-b', name: 'Alternative R&B', origin: 'United States / International', era: '2000s–Present',
    description: 'Contemporary R&B that expands conventional song form and production through sparse textures, electronic timbres and intimate vocal delivery.',
    characteristicInstruments: ['voice', 'synth', 'drums', 'bass', 'sampler'], preferredMeters: ['4/4'], tempoRange: [60, 110],
    keySubstyles: ['Alternative R&B'], coreConcepts: ['intimate vocal production', 'sparse arrangement', 'electronic texture', 'nonstandard song structure'],
    rhythmicGrammar: ['restrained backbeat or programmed pulse with syncopated bass and deliberate negative space'], tuningSystem: '12-tet',
    signatureCell: 'Close lead vocal over a sparse, syncopated electronic rhythm section', grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['m7', 'maj7', '9', 'sus2'], sectionProgressions: { verse: ['Am7', 'Fmaj7', 'C', 'G'], chorus: ['Fmaj7', 'Am7', 'G', 'Em7'] },
  },
  {
  "id": "r-and-b-motown-r-b",
  "worldId": "r-and-b",
  "name": "Motown R&B",
  "origin": "Detroit / United States",
  "era": "1960s",
  "description": "Bass-forward arrangements, tambourine backbeat, melodic orchestration and strong vocal hooks.",
  "characteristicInstruments": [
    "bass",
    "drums",
    "tambourine",
    "strings",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    95,
    125
  ],
  "keySubstyles": [
    "Motown R&B"
  ],
  "coreConcepts": [
    "Motown tambourine",
    "melodic bass",
    "vocal hook",
    "orchestral response"
  ],
  "rhythmicGrammar": [
    "Melodic bass with tambourine backbeat"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Melodic bass with tambourine backbeat",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "Am7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ]
  },
  "referenceArtists": [
    "Marvin Gaye",
    "Smokey Robinson",
    "The Supremes"
  ],
  "referenceTracks": [],
  "techniques": [
    "background-vocal answer",
    "syncopated bass",
    "vocal chop",
    "vocal stack"
  ]
},
{
  "id": "r-and-b-memphis-r-b",
  "worldId": "r-and-b",
  "name": "Memphis R&B",
  "origin": "Memphis / United States",
  "era": "1960s–1970s",
  "description": "Sparse rhythm section, Hammond organ, deep pocket and gospel-derived vocal phrasing.",
  "characteristicInstruments": [
    "organ",
    "bass",
    "drums",
    "electric-guitar",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    65,
    105
  ],
  "keySubstyles": [
    "Memphis R&B"
  ],
  "coreConcepts": [
    "deep pocket",
    "Hammond swell",
    "gospel vocal run"
  ],
  "rhythmicGrammar": [
    "Sparse pocket with Hammond and vocal"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sparse pocket with Hammond and vocal",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "Am7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ]
  },
  "referenceArtists": [
    "Al Green",
    "Ann Peebles",
    "Otis Redding"
  ],
  "referenceTracks": [],
  "techniques": [
    "gospel run",
    "background-vocal answer",
    "vocal chop",
    "vocal stack"
  ]
},
{
  "id": "r-and-b-90s-contemporary-r-b",
  "worldId": "r-and-b",
  "name": "90s Contemporary R&B",
  "origin": "United States",
  "era": "1990s",
  "description": "Programmed drums, stacked harmonies, smooth bass and syncopated hip-hop-influenced rhythms.",
  "characteristicInstruments": [
    "drums",
    "bass",
    "rhodes",
    "voice",
    "backing-vocals"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    70,
    110
  ],
  "keySubstyles": [
    "90s Contemporary R&B"
  ],
  "coreConcepts": [
    "vocal stack",
    "programmed kick",
    "syncopated bass",
    "vocal chop"
  ],
  "rhythmicGrammar": [
    "Programmed pocket with stacked vocals"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Programmed pocket with stacked vocals",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "Am7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ]
  },
  "referenceArtists": [
    "Brandy",
    "Aaliyah",
    "TLC"
  ],
  "referenceTracks": [],
  "techniques": [
    "programmed kick",
    "syncopated bass",
    "vocal chop",
    "vocal stack",
    "background-vocal answer"
  ]
},
{
  "id": "r-and-b-uk-neo-r-b",
  "worldId": "r-and-b",
  "name": "UK Neo-R&B",
  "origin": "United Kingdom",
  "era": "1980s–Present",
  "description": "Soul songwriting combined with sophisticated electronic production and restrained rhythmic programming.",
  "characteristicInstruments": [
    "drums",
    "bass",
    "rhodes",
    "synth",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    115
  ],
  "keySubstyles": [
    "UK Neo-R&B"
  ],
  "coreConcepts": [
    "Rhodes voicing",
    "restrained programming",
    "suspended resolution"
  ],
  "rhythmicGrammar": [
    "Restrained electronic soul with Rhodes"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Restrained electronic soul with Rhodes",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "Am7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "Am7"
    ]
  },
  "referenceArtists": [
    "Sade",
    "Soul II Soul"
  ],
  "referenceTracks": [],
  "techniques": [
    "Rhodes voicing",
    "suspended chord resolution"
  ]
}];

export const R_AND_B_WORLD: GenreWorld = {
  id: 'r-and-b', name: 'R&B', family: 'African American Popular Music', color: '#8F79A8', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'Vocal-centered popular music shaped by blues and gospel traditions, strong rhythmic identity and evolving studio production.',
  substyles: ['Classic R&B', 'Contemporary R&B', 'Quiet Storm', 'Neo-Soul', 'Alternative R&B', 'New Jack Swing', 'Doo-Wop', 'Rhythm and Blues'],
  artists: ['Ray Charles', 'Aretha Franklin', 'Stevie Wonder', 'Sade', 'D’Angelo', 'Aaliyah', 'Mary J. Blige', 'Beyoncé', 'Frank Ocean', 'H.E.R.'],
  concepts: ['lead vocal phrasing', 'blues inflection', 'gospel call and response', 'backbeat', 'syncopated bass', 'extended harmony'],
  crossLinks: ['R&B ↔ Gospel', 'R&B ↔ Soul', 'R&B ↔ Hip-Hop'],
  roles: { voice: ['lead vocal', 'backing vocal harmony', 'vocal ad-libs'], drums: ['deep backbeat', 'ghost notes', 'syncopated kick'], bass: ['syncopated bass line', 'root and approach tones'], harmony: ['extended keyboard voicings', 'guitar and keyboard answers'] },
  tuningSystem: '12-tet', signatureCell: 'Vocal phrase answered by a restrained keyboard or backing-vocal response over a deep pocket',
  grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' }, styleDefinitions: styles, patterns: [
  {
  "id": "tech-r-and-b-vocal-stack",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-motown-r-b",
    "r-and-b-memphis-r-b",
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "vocal stack",
  "shortName": "vocal stack",
  "family": "r-and-b",
  "category": "lead",
  "description": "Technique: vocal stack",
  "tags": [
    "r-and-b",
    "vocal stack"
  ],
  "approaches": [
    "vocal stack"
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
    "r-and-b",
    "vocal stack"
  ],
  "techniques": [
    "vocal stack"
  ]
},
{
  "id": "tech-r-and-b-r-b-melisma",
  "worldId": "r-and-b",
  "styleIds": [],
  "name": "R&B melisma",
  "shortName": "R&B melisma",
  "family": "r-and-b",
  "category": "lead",
  "description": "Technique: R&B melisma",
  "tags": [
    "r-and-b",
    "R&B melisma"
  ],
  "approaches": [
    "R&B melisma"
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
    "r-and-b",
    "R&B melisma"
  ],
  "techniques": [
    "R&B melisma"
  ]
},
{
  "id": "tech-r-and-b-gospel-run",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-memphis-r-b"
  ],
  "name": "gospel run",
  "shortName": "gospel run",
  "family": "r-and-b",
  "category": "groove",
  "description": "Technique: gospel run",
  "tags": [
    "r-and-b",
    "gospel run"
  ],
  "approaches": [
    "gospel run"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "lead"
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
    "r-and-b",
    "gospel run"
  ],
  "techniques": [
    "gospel run"
  ]
},
{
  "id": "tech-r-and-b-syncopated-bass",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-motown-r-b",
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "syncopated bass",
  "shortName": "syncopated bass",
  "family": "r-and-b",
  "category": "bass",
  "description": "Technique: syncopated bass",
  "tags": [
    "r-and-b",
    "syncopated bass"
  ],
  "approaches": [
    "syncopated bass"
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
    "r-and-b",
    "syncopated bass"
  ],
  "techniques": [
    "syncopated bass"
  ]
},
{
  "id": "tech-r-and-b-new-jack-swing-swing-grid",
  "worldId": "r-and-b",
  "styleIds": [],
  "name": "New Jack Swing swing-grid",
  "shortName": "New Jack Swing swing-grid",
  "family": "r-and-b",
  "category": "groove",
  "description": "Technique: New Jack Swing swing-grid",
  "tags": [
    "r-and-b",
    "New Jack Swing swing-grid"
  ],
  "approaches": [
    "New Jack Swing swing-grid"
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
    "r-and-b",
    "New Jack Swing swing-grid"
  ],
  "techniques": [
    "New Jack Swing swing-grid"
  ]
},
{
  "id": "tech-r-and-b-programmed-kick",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "programmed kick",
  "shortName": "programmed kick",
  "family": "r-and-b",
  "category": "groove",
  "description": "Technique: programmed kick",
  "tags": [
    "r-and-b",
    "programmed kick"
  ],
  "approaches": [
    "programmed kick"
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
    "r-and-b",
    "programmed kick"
  ],
  "techniques": [
    "programmed kick"
  ]
},
{
  "id": "tech-r-and-b-vocal-chop",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-motown-r-b",
    "r-and-b-memphis-r-b",
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "vocal chop",
  "shortName": "vocal chop",
  "family": "r-and-b",
  "category": "lead",
  "description": "Technique: vocal chop",
  "tags": [
    "r-and-b",
    "vocal chop"
  ],
  "approaches": [
    "vocal chop"
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
    "r-and-b",
    "vocal chop"
  ],
  "techniques": [
    "vocal chop"
  ]
},
{
  "id": "tech-r-and-b-rhodes-voicing",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-uk-neo-r-b"
  ],
  "name": "Rhodes voicing",
  "shortName": "Rhodes voicing",
  "family": "r-and-b",
  "category": "comping",
  "description": "Technique: Rhodes voicing",
  "tags": [
    "r-and-b",
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
    "r-and-b",
    "Rhodes voicing"
  ],
  "techniques": [
    "Rhodes voicing"
  ]
},
{
  "id": "tech-r-and-b-suspended-chord-resolution",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-uk-neo-r-b"
  ],
  "name": "suspended chord resolution",
  "shortName": "suspended chord resolution",
  "family": "r-and-b",
  "category": "comping",
  "description": "Technique: suspended chord resolution",
  "tags": [
    "r-and-b",
    "suspended chord resolution"
  ],
  "approaches": [
    "suspended chord resolution"
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
    "r-and-b",
    "suspended chord resolution"
  ],
  "techniques": [
    "suspended chord resolution"
  ]
},
{
  "id": "tech-r-and-b-background-vocal-answer",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-motown-r-b",
    "r-and-b-memphis-r-b",
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "background-vocal answer",
  "shortName": "background-vocal answer",
  "family": "r-and-b",
  "category": "lead",
  "description": "Technique: background-vocal answer",
  "tags": [
    "r-and-b",
    "background-vocal answer"
  ],
  "approaches": [
    "background-vocal answer"
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
    "r-and-b",
    "background-vocal answer"
  ],
  "techniques": [
    "background-vocal answer"
  ]
},
{
  "id": "style-r-and-b-motown-r-b-signature",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-motown-r-b"
  ],
  "name": "Motown R&B Signature Cell",
  "shortName": "Motown R&B Cell",
  "family": "r-and-b",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "r-and-b",
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
    "drums",
    "tambourine",
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
    "r-and-b",
    "signature"
  ],
  "techniques": [
    "background-vocal answer",
    "syncopated bass",
    "vocal chop",
    "vocal stack"
  ]
},
{
  "id": "style-r-and-b-memphis-r-b-signature",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-memphis-r-b"
  ],
  "name": "Memphis R&B Signature Cell",
  "shortName": "Memphis R&B Cell",
  "family": "r-and-b",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "r-and-b",
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
    "bass",
    "drums",
    "electric-guitar"
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
    "r-and-b",
    "signature"
  ],
  "techniques": [
    "gospel run",
    "background-vocal answer",
    "vocal chop",
    "vocal stack"
  ]
},
{
  "id": "style-r-and-b-90s-contemporary-r-b-signature",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-90s-contemporary-r-b"
  ],
  "name": "90s Contemporary R&B Signature Cell",
  "shortName": "90s Contemporary R&B Cell",
  "family": "r-and-b",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "r-and-b",
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
    "drums",
    "bass",
    "rhodes",
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
    "r-and-b",
    "signature"
  ],
  "techniques": [
    "programmed kick",
    "syncopated bass",
    "vocal chop",
    "vocal stack",
    "background-vocal answer"
  ]
},
{
  "id": "style-r-and-b-uk-neo-r-b-signature",
  "worldId": "r-and-b",
  "styleIds": [
    "r-and-b-uk-neo-r-b"
  ],
  "name": "UK Neo-R&B Signature Cell",
  "shortName": "UK Neo-R&B Cell",
  "family": "r-and-b",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "r-and-b",
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
    "drums",
    "bass",
    "rhodes",
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
    "r-and-b",
    "signature"
  ],
  "techniques": [
    "Rhodes voicing",
    "suspended chord resolution"
  ]
}],
};
