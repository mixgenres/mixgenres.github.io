import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'disco-classic', worldId: 'disco', name: 'Classic Disco', origin: 'United States', era: '1970s–Present',
    description: 'Four-on-the-floor dance music with octave bass, bright strings, clipped rhythm guitar and vocal hooks.',
    characteristicInstruments: ['drums', 'bass', 'strings', 'piano', 'voice'], preferredMeters: ['4/4'], tempoRange: [110, 130],
    keySubstyles: ['Philadelphia Soul', 'Orchestral Disco'], coreConcepts: ['four-on-the-floor kick', 'octave bass', 'string arrangements', 'rhythm guitar', 'vocal hook'],
    rhythmicGrammar: ['steady quarter-note kick, snare or clap on two and four, open hi-hat on offbeats and syncopated bass'], tuningSystem: '12-tet',
    signatureCell: 'Four-on-the-floor kick, octave bass and offbeat open hats', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am7', 'Dm7', 'G7', 'Cmaj7'], chorus: ['Fmaj7', 'G', 'Em7', 'Am7'] },
  },
  {
    id: 'disco-boogie', worldId: 'disco', name: 'Boogie', origin: 'United States', era: 'Late 1970s–1980s',
    description: 'Electronic post-disco groove with syncopated bass, crisp drum-machine pulse and keyboard stabs.',
    characteristicInstruments: ['drums', 'synth', 'bass', 'clavinet', 'voice'], preferredMeters: ['4/4'], tempoRange: [105, 120],
    keySubstyles: ['Post-Disco', 'Electro-Boogie'], coreConcepts: ['synth bass', 'clavinet stabs', 'tight drum machine', 'syncopated groove'],
    rhythmicGrammar: ['straight dance pulse with syncopated bass and short keyboard chord attacks'], tuningSystem: '12-tet',
    signatureCell: 'Syncopated synth bass over a tight dance pulse', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Em7', 'A7', 'Dmaj7', 'B7'], chorus: ['Gmaj7', 'A7', 'F#m7', 'B7'] },
  },
  {
    id: 'disco-hi-nrg', worldId: 'disco', name: 'Hi-NRG', origin: 'United States / Europe', era: 'Late 1970s–1980s',
    description: 'Fast, propulsive disco with sequenced bass, bright synths and emphatic vocal choruses.',
    characteristicInstruments: ['drums', 'synth', 'bass', 'strings', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 140],
    keySubstyles: ['Hi-NRG', 'Italo Disco'], coreConcepts: ['fast four-on-floor', 'sequenced bass', 'synth hook', 'dramatic chorus'],
    rhythmicGrammar: ['unbroken four-on-floor with driving eighth-note hats and rising phrase energy'], tuningSystem: '12-tet',
    signatureCell: 'Fast four-on-floor and sequenced bass under a high synth hook', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'disco-philadelphia', worldId: 'disco', name: 'Philadelphia Disco', origin: 'Philadelphia, United States', era: '1970s',
    description: 'Orchestral disco with lush strings, horn punches, soulful vocals and a steady dance pulse.',
    characteristicInstruments: ['drums', 'bass', 'strings', 'brass', 'voice'], preferredMeters: ['4/4'], tempoRange: [105, 125],
    keySubstyles: ['Philly Soul', 'Orchestral Disco'], coreConcepts: ['string section', 'horn punctuation', 'soulful lead vocal', 'steady kick'],
    rhythmicGrammar: ['four-on-the-floor kick with syncopated bass and arranged string and horn responses'], tuningSystem: '12-tet',
    signatureCell: 'Orchestral string lift over a steady kick and soulful vocal', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am7', 'Dm7', 'G7', 'Cmaj7'], chorus: ['Fmaj7', 'G7', 'Em7', 'Am7'] },
  },
  {
    id: 'disco-italo', worldId: 'disco', name: 'Italo Disco', origin: 'Italy', era: 'Late 1970s–1980s',
    description: 'European synth-led disco with sequenced bass, bright electronic hooks and romantic vocals.',
    characteristicInstruments: ['drums', 'synth', 'bass', 'voice', 'strings'], preferredMeters: ['4/4'], tempoRange: [110, 130],
    keySubstyles: ['Italo Disco', 'Space Disco'], coreConcepts: ['sequenced bass', 'synth arpeggio', 'romantic vocal', 'electronic production'],
    rhythmicGrammar: ['straight dance kick with sequenced bass and eighth-note synth ostinato'], tuningSystem: '12-tet',
    signatureCell: 'Sequenced synth bass beneath a bright repeating hook', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'disco-euro', worldId: 'disco', name: 'Euro Disco', origin: 'Europe', era: '1970s–1980s',
    description: 'Melodic continental disco with orchestral or electronic arrangement and prominent vocal refrains.',
    characteristicInstruments: ['drums', 'bass', 'strings', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [105, 125],
    keySubstyles: ['Euro Disco', 'Orchestral Pop Disco'], coreConcepts: ['long melodic refrain', 'string arrangement', 'dance pulse', 'vocal harmonies'],
    rhythmicGrammar: ['even four-beat dance pulse with bass movement and sustained chorus harmony'], tuningSystem: '12-tet',
    signatureCell: 'Sustained vocal refrain over an even dance pulse and strings', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Dm', 'Bb', 'F', 'C'], chorus: ['Bb', 'C', 'Dm', 'Dm'] },
  },
  {
    id: 'disco-post-disco', worldId: 'disco', name: 'Post-Disco', origin: 'United States', era: 'Late 1970s–1980s',
    description: 'A stripped, rhythm-section-led transition from disco toward boogie and early electronic dance music.',
    characteristicInstruments: ['drums', 'bass', 'electric-guitar', 'clavinet', 'voice'], preferredMeters: ['4/4'], tempoRange: [105, 125],
    keySubstyles: ['Post-Disco', 'Boogie'], coreConcepts: ['lean arrangement', 'syncopated bass', 'clipped guitar', 'repeating groove'],
    rhythmicGrammar: ['steady dance kick with tighter syncopated bass and short guitar or keyboard chops'], tuningSystem: '12-tet',
    signatureCell: 'Lean dance groove with syncopated bass and clipped guitar', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Em7', 'A7', 'Dmaj7', 'B7'], chorus: ['Gmaj7', 'A7', 'F#m7', 'B7'] },
  },
  {
    id: 'disco-nu-disco', worldId: 'disco', name: 'Nu-Disco', origin: 'International', era: '1990s–Present',
    description: 'Modern dance music reworking disco bass, guitar and string language through electronic production.',
    characteristicInstruments: ['drums', 'bass', 'synth', 'electric-guitar', 'strings'], preferredMeters: ['4/4'], tempoRange: [115, 128],
    keySubstyles: ['Nu-Disco', 'Disco House'], coreConcepts: ['disco-derived bass', 'electronic drum production', 'filtered strings', 'loop-based arrangement'],
    rhythmicGrammar: ['four-on-the-floor kick with syncopated bass, clipped guitar and filtered loop layers'], tuningSystem: '12-tet',
    signatureCell: 'Disco bass and guitar loop over a modern four-beat kick', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am7', 'Fmaj7', 'C', 'G'], chorus: ['Fmaj7', 'G', 'Am7', 'Am7'] },
  },
  {
  "id": "disco-salsoul-latin-disco",
  "worldId": "disco",
  "name": "Salsoul / Latin Disco",
  "origin": "New York / United States",
  "era": "1970s–1980s",
  "description": "Disco fused with Latin percussion, strings and horn arrangements.",
  "characteristicInstruments": [
    "drums",
    "bass",
    "strings",
    "brass",
    "congas",
    "piano"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    115,
    125
  ],
  "keySubstyles": [
    "Salsoul / Latin Disco"
  ],
  "coreConcepts": [
    "disco conga pattern",
    "string disco stabs",
    "Latin percussion"
  ],
  "rhythmicGrammar": [
    "Four-on-floor with Latin percussion and strings"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Four-on-floor with Latin percussion and strings",
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
    "Salsoul Orchestra",
    "Joe Bataan"
  ],
  "referenceTracks": [],
  "techniques": [
    "disco conga pattern",
    "string disco stabs",
    "four-on-floor kick",
    "disco octave bass"
  ]
},
{
  "id": "disco-cosmic-disco",
  "worldId": "disco",
  "name": "Cosmic Disco",
  "origin": "Europe / Global",
  "era": "1970s–1980s",
  "description": "Long electronic disco grooves with synthesizer bass, sequenced repetition and extended instrumental development.",
  "characteristicInstruments": [
    "synth",
    "bass-lead",
    "drums",
    "strings",
    "polysynth"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    115,
    130
  ],
  "keySubstyles": [
    "Cosmic Disco"
  ],
  "coreConcepts": [
    "sequenced bass",
    "extended instrumental groove",
    "filter sweep"
  ],
  "rhythmicGrammar": [
    "Sequenced bass over extended disco pulse"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sequenced bass over extended disco pulse",
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
    "Giorgio Moroder",
    "Cerrone"
  ],
  "referenceTracks": [],
  "techniques": [
    "filter sweep",
    "disco octave bass",
    "disco conga pattern",
    "string disco stabs"
  ]
},
{
  "id": "disco-studio-54-orchestral-disco",
  "worldId": "disco",
  "name": "Studio 54 / Orchestral Disco",
  "origin": "New York / United States",
  "era": "1970s",
  "description": "Four-on-floor disco with orchestral strings, funk guitar and octave bass.",
  "characteristicInstruments": [
    "drums",
    "bass",
    "electric-guitar",
    "strings",
    "piano",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    115,
    130
  ],
  "keySubstyles": [
    "Studio 54 / Orchestral Disco"
  ],
  "coreConcepts": [
    "octave disco bass",
    "Chic guitar scratch",
    "orchestral crescendo"
  ],
  "rhythmicGrammar": [
    "Octave bass with string stabs and scratch"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Octave bass with string stabs and scratch",
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
    "Chic",
    "Donna Summer"
  ],
  "referenceTracks": [],
  "techniques": [
    "orchestral crescendo",
    "Chic-style guitar scratch",
    "disco octave bass",
    "string disco stabs",
    "disco conga pattern"
  ]
},
{
  "id": "disco-italo-hi-energy",
  "worldId": "disco",
  "name": "Italo Hi-Energy",
  "origin": "Italy / Europe",
  "era": "1970s–1980s",
  "description": "Fast electronic disco with sequenced bass, synthesizers and dramatic vocal hooks.",
  "characteristicInstruments": [
    "synth",
    "polysynth",
    "bass-lead",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    125,
    145
  ],
  "keySubstyles": [
    "Italo Hi-Energy"
  ],
  "coreConcepts": [
    "sequenced bass",
    "dramatic synth hook",
    "club breakdown"
  ],
  "rhythmicGrammar": [
    "Fast sequenced disco with dramatic vocal"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Fast sequenced disco with dramatic vocal",
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
    "Patrick Cowley",
    "Sylvester"
  ],
  "referenceTracks": [],
  "techniques": [
    "disco octave bass",
    "breakdown → final chorus",
    "disco conga pattern",
    "string disco stabs"
  ]
}];

export const DISCO_WORLD: GenreWorld = {
  id: 'disco', name: 'Disco', family: 'Dance / Soul', color: '#E28743', level: 'world', kind: 'world', strictness: 'strict',
  description: 'Dance music centered on a steady four-on-the-floor pulse, syncopated bass, bright ensemble arrangements and vocal choruses.',
  substyles: ['Classic Disco', 'Philadelphia Disco', 'Boogie', 'Post-Disco', 'Hi-NRG', 'Italo Disco', 'Euro Disco', 'Nu-Disco'],
  artists: ['Chic', 'Donna Summer', 'Bee Gees', 'Diana Ross', 'The Trammps', 'Sylvester', 'Giorgio Moroder', 'Sister Sledge', 'KC and the Sunshine Band', 'Earth, Wind & Fire'],
  concepts: ['four-on-the-floor kick', 'offbeat open hi-hat', 'syncopated bass', 'string and horn hits', 'clipped rhythm guitar', 'vocal chorus'],
  crossLinks: ['Disco ↔ Soul', 'Disco ↔ House', 'Disco ↔ Funk'],
  roles: { drums: ['steady four-on-the-floor kick', 'snare or clap on two and four', 'open offbeat hi-hat'], bass: ['octave bass groove', 'syncopated root and fifth'], harmony: ['rhythm guitar chops', 'piano and string stabs'], lead: ['vocal hook', 'string or synth response'] },
  tuningSystem: '12-tet', signatureCell: 'Four-on-the-floor kick with offbeat hats, octave bass and string punctuation',
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' }, styleDefinitions: styles, patterns: [
  {
  "id": "tech-disco-disco-octave-bass",
  "worldId": "disco",
  "styleIds": [
    "disco-salsoul-latin-disco",
    "disco-cosmic-disco",
    "disco-studio-54-orchestral-disco",
    "disco-italo-hi-energy"
  ],
  "name": "disco octave bass",
  "shortName": "disco octave bass",
  "family": "disco",
  "category": "bass",
  "description": "Technique: disco octave bass",
  "tags": [
    "disco",
    "disco octave bass"
  ],
  "approaches": [
    "disco octave bass"
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
    "disco",
    "disco octave bass"
  ],
  "techniques": [
    "disco octave bass"
  ]
},
{
  "id": "tech-disco-four-on-floor-kick",
  "worldId": "disco",
  "styleIds": [
    "disco-salsoul-latin-disco"
  ],
  "name": "four-on-floor kick",
  "shortName": "four-on-floor kick",
  "family": "disco",
  "category": "groove",
  "description": "Technique: four-on-floor kick",
  "tags": [
    "disco",
    "four-on-floor kick"
  ],
  "approaches": [
    "four-on-floor kick"
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
    "disco",
    "four-on-floor kick"
  ],
  "techniques": [
    "four-on-floor kick"
  ]
},
{
  "id": "tech-disco-open-hat-offbeat",
  "worldId": "disco",
  "styleIds": [],
  "name": "open-hat offbeat",
  "shortName": "open-hat offbeat",
  "family": "disco",
  "category": "groove",
  "description": "Technique: open-hat offbeat",
  "tags": [
    "disco",
    "open-hat offbeat"
  ],
  "approaches": [
    "open-hat offbeat"
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
    2,
    6,
    10,
    14
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
    "disco",
    "open-hat offbeat"
  ],
  "techniques": [
    "open-hat offbeat"
  ]
},
{
  "id": "tech-disco-chic-style-guitar-scratch",
  "worldId": "disco",
  "styleIds": [
    "disco-studio-54-orchestral-disco"
  ],
  "name": "Chic-style guitar scratch",
  "shortName": "Chic-style guitar scratch",
  "family": "disco",
  "category": "comping",
  "description": "Technique: Chic-style guitar scratch",
  "tags": [
    "disco",
    "Chic-style guitar scratch"
  ],
  "approaches": [
    "Chic-style guitar scratch"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "guitar",
    "lead",
    "comp"
  ],
  "instruments": [
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
    "disco",
    "Chic-style guitar scratch"
  ],
  "techniques": [
    "Chic-style guitar scratch"
  ]
},
{
  "id": "tech-disco-string-disco-stabs",
  "worldId": "disco",
  "styleIds": [
    "disco-salsoul-latin-disco",
    "disco-cosmic-disco",
    "disco-studio-54-orchestral-disco",
    "disco-italo-hi-energy"
  ],
  "name": "string disco stabs",
  "shortName": "string disco stabs",
  "family": "disco",
  "category": "texture",
  "description": "Technique: string disco stabs",
  "tags": [
    "disco",
    "string disco stabs"
  ],
  "approaches": [
    "string disco stabs"
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
    "disco",
    "string disco stabs"
  ],
  "techniques": [
    "string disco stabs"
  ]
},
{
  "id": "tech-disco-disco-conga-pattern",
  "worldId": "disco",
  "styleIds": [
    "disco-salsoul-latin-disco",
    "disco-cosmic-disco",
    "disco-studio-54-orchestral-disco",
    "disco-italo-hi-energy"
  ],
  "name": "disco conga pattern",
  "shortName": "disco conga pattern",
  "family": "disco",
  "category": "groove",
  "description": "Technique: disco conga pattern",
  "tags": [
    "disco",
    "disco conga pattern"
  ],
  "approaches": [
    "disco conga pattern"
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
    "disco",
    "disco conga pattern"
  ],
  "techniques": [
    "disco conga pattern"
  ]
},
{
  "id": "tech-disco-orchestral-crescendo",
  "worldId": "disco",
  "styleIds": [
    "disco-studio-54-orchestral-disco"
  ],
  "name": "orchestral crescendo",
  "shortName": "orchestral crescendo",
  "family": "disco",
  "category": "texture",
  "description": "Technique: orchestral crescendo",
  "tags": [
    "disco",
    "orchestral crescendo"
  ],
  "approaches": [
    "orchestral crescendo"
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
    "disco",
    "orchestral crescendo"
  ],
  "techniques": [
    "orchestral crescendo"
  ]
},
{
  "id": "tech-disco-filter-sweep",
  "worldId": "disco",
  "styleIds": [
    "disco-cosmic-disco"
  ],
  "name": "filter sweep",
  "shortName": "filter sweep",
  "family": "disco",
  "category": "texture",
  "description": "Technique: filter sweep",
  "tags": [
    "disco",
    "filter sweep"
  ],
  "approaches": [
    "filter sweep"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture"
  ],
  "instruments": [
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
    "disco",
    "filter sweep"
  ],
  "techniques": [
    "filter sweep"
  ]
},
{
  "id": "tech-disco-moroder-sequencer",
  "worldId": "disco",
  "styleIds": [],
  "name": "Moroder sequencer",
  "shortName": "Moroder sequencer",
  "family": "disco",
  "category": "texture",
  "description": "Technique: Moroder sequencer",
  "tags": [
    "disco",
    "Moroder sequencer"
  ],
  "approaches": [
    "Moroder sequencer"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture",
    "lead"
  ],
  "instruments": [
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
    "disco",
    "Moroder sequencer"
  ],
  "techniques": [
    "Moroder sequencer"
  ]
},
{
  "id": "tech-disco-breakdown-final-chorus",
  "worldId": "disco",
  "styleIds": [
    "disco-italo-hi-energy"
  ],
  "name": "breakdown → final chorus",
  "shortName": "breakdown → final chorus",
  "family": "disco",
  "category": "groove",
  "description": "Technique: breakdown → final chorus",
  "tags": [
    "disco",
    "breakdown → final chorus"
  ],
  "approaches": [
    "breakdown → final chorus"
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
    "drums",
    "hand-percussion"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "accentProfile": [
    1,
    0.65,
    0.65,
    0.65,
    1,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72,
    0.72,
    0.92,
    0.72,
    0.72
  ],
  "durationGrid": [
    1,
    1,
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
    "disco",
    "breakdown → final chorus"
  ],
  "techniques": [
    "breakdown → final chorus"
  ]
},
{
  "id": "style-disco-salsoul-latin-disco-signature",
  "worldId": "disco",
  "styleIds": [
    "disco-salsoul-latin-disco"
  ],
  "name": "Salsoul / Latin Disco Signature Cell",
  "shortName": "Salsoul / Latin Disco Cell",
  "family": "disco",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "disco",
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
    "strings",
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
    "disco",
    "signature"
  ],
  "techniques": [
    "disco conga pattern",
    "string disco stabs",
    "four-on-floor kick",
    "disco octave bass"
  ]
},
{
  "id": "style-disco-cosmic-disco-signature",
  "worldId": "disco",
  "styleIds": [
    "disco-cosmic-disco"
  ],
  "name": "Cosmic Disco Signature Cell",
  "shortName": "Cosmic Disco Cell",
  "family": "disco",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "disco",
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
    "synth",
    "bass-lead",
    "drums",
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
    "disco",
    "signature"
  ],
  "techniques": [
    "filter sweep",
    "disco octave bass",
    "disco conga pattern",
    "string disco stabs"
  ]
},
{
  "id": "style-disco-studio-54-orchestral-disco-signature",
  "worldId": "disco",
  "styleIds": [
    "disco-studio-54-orchestral-disco"
  ],
  "name": "Studio 54 / Orchestral Disco Signature Cell",
  "shortName": "Studio 54 / Orchestral Disco Cell",
  "family": "disco",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "disco",
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
    "electric-guitar",
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
    "disco",
    "signature"
  ],
  "techniques": [
    "orchestral crescendo",
    "Chic-style guitar scratch",
    "disco octave bass",
    "string disco stabs",
    "disco conga pattern"
  ]
},
{
  "id": "style-disco-italo-hi-energy-signature",
  "worldId": "disco",
  "styleIds": [
    "disco-italo-hi-energy"
  ],
  "name": "Italo Hi-Energy Signature Cell",
  "shortName": "Italo Hi-Energy Cell",
  "family": "disco",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "disco",
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
    "synth",
    "polysynth",
    "bass-lead",
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
    "disco",
    "signature"
  ],
  "techniques": [
    "disco octave bass",
    "breakdown → final chorus",
    "disco conga pattern",
    "string disco stabs"
  ]
}],
};
