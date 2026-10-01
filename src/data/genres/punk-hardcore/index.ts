import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'punk-hardcore-punk-rock', worldId: 'punk-hardcore', name: 'Punk Rock', origin: 'United States / United Kingdom', era: '1970s–Present',
    description: 'Short, direct songs driven by fast downstrokes, bass, drums and urgent vocals.',
    characteristicInstruments: ['electric-guitar', 'bass', 'drums', 'voice', 'overdrive-guitar'], preferredMeters: ['4/4'], tempoRange: [150, 210],
    keySubstyles: ['First-Wave Punk', 'Street Punk'], coreConcepts: ['downstroked eighths', 'short forms', 'power chords', 'urgent vocal delivery'],
    rhythmicGrammar: ['straight fast eighth-note guitar with kick accents and a forceful snare backbeat'], tuningSystem: '12-tet',
    signatureCell: 'Fast downstrokes over a direct kick and snare backbeat', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['A5', 'G5', 'D5', 'A5'], chorus: ['D5', 'C5', 'G5', 'A5'] },
  },
  {
    id: 'punk-hardcore-hardcore-punk', worldId: 'punk-hardcore', name: 'Hardcore Punk', origin: 'United States', era: '1980s–Present',
    description: 'Very fast, compact punk with abrasive guitar, hard attacks and abrupt stops.',
    characteristicInstruments: ['distortion-guitar', 'bass', 'drums', 'voice', 'overdrive-guitar'], preferredMeters: ['4/4'], tempoRange: [170, 240],
    keySubstyles: ['Hardcore', 'Straight Edge'], coreConcepts: ['short bursts', 'D-beat and fast backbeat', 'unison riffs', 'hard stops'],
    rhythmicGrammar: ['rapid eighth-note drive with displaced kick, sharp snare and abrupt phrase cuts'], tuningSystem: '12-tet',
    signatureCell: 'D-beat kick and snare under tightly repeated power chords', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['E5', 'G5', 'A5', 'E5'], chorus: ['A5', 'G5', 'E5', 'E5'] },
  },
  {
    id: 'punk-hardcore-skate-punk', worldId: 'punk-hardcore', name: 'Skate Punk', origin: 'United States', era: '1980s–Present',
    description: 'Fast melodic punk with continuous guitar subdivisions and quick vocal phrases.',
    characteristicInstruments: ['electric-guitar', 'bass', 'drums', 'voice', 'backing-vocals'], preferredMeters: ['4/4'], tempoRange: [160, 220],
    keySubstyles: ['Melodic Punk', 'Skate Punk'], coreConcepts: ['fast eighths', 'melodic power-chord changes', 'group vocal hooks'],
    rhythmicGrammar: ['continuous guitar eighths over a two-and-four snare with brief double-time fills'], tuningSystem: '12-tet',
    signatureCell: 'Fast melodic eighth-note guitar with a tight backbeat', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['G5', 'D5', 'E5', 'C5'], chorus: ['G5', 'C5', 'D5', 'D5'] },
  },
  {
    id: 'punk-hardcore-pop-punk', worldId: 'punk-hardcore', name: 'Pop Punk', origin: 'United States', era: '1990s–Present',
    description: 'Concise guitar songs with bright hooks, clear choruses and layered backing vocals.',
    characteristicInstruments: ['electric-guitar', 'bass', 'drums', 'voice', 'backing-vocals'], preferredMeters: ['4/4'], tempoRange: [100, 190],
    keySubstyles: ['Pop Punk', 'Power Pop Punk'], coreConcepts: ['major-key hooks', 'verse-chorus form', 'group backing vocals', 'palm-muted verse'],
    rhythmicGrammar: ['straight eighth-note guitar with a firm backbeat and broader open chorus chords'], tuningSystem: '12-tet',
    signatureCell: 'Muted verse eighths opening into a wide sing-along chorus', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['G', 'D', 'Em', 'C'], chorus: ['G', 'D', 'C', 'C'] },
  },
  {
    id: 'punk-hardcore-melodic-hardcore', worldId: 'punk-hardcore', name: 'Melodic Hardcore', origin: 'United States / Europe', era: '1980s–Present',
    description: 'Fast hardcore with melodic guitar movement, forceful vocals and dynamic section changes.',
    characteristicInstruments: ['distortion-guitar', 'bass', 'drums', 'voice', 'backing-vocals'], preferredMeters: ['4/4'], tempoRange: [150, 220],
    keySubstyles: ['Melodic Hardcore', 'Emo-Hardcore'], coreConcepts: ['fast punk drive', 'minor-key melody', 'dynamic release', 'gang vocals'],
    rhythmicGrammar: ['driving eighth-note riff interrupted by half-time or held-note contrasts'], tuningSystem: '12-tet',
    signatureCell: 'Fast hardcore riff that breaks into a half-time vocal refrain', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['Em', 'C', 'G', 'D'], chorus: ['C', 'D', 'Em', 'Em'] },
  },
  {
    id: 'punk-hardcore-post-hardcore', worldId: 'punk-hardcore', name: 'Post-Hardcore', origin: 'United States', era: '1980s–Present',
    description: 'Hardcore-derived music using sharp dynamic shifts, irregular accents and contrasting vocal delivery.',
    characteristicInstruments: ['electric-guitar', 'bass', 'drums', 'voice', 'synth'], preferredMeters: ['4/4', '7/8'], tempoRange: [90, 190],
    keySubstyles: ['Post-Hardcore', 'Screamo'], coreConcepts: ['dynamic contrast', 'stop-start riffs', 'dissonant voicings', 'irregular accents'],
    rhythmicGrammar: ['angular syncopation, sudden rests and shifts between full-time and half-time'], tuningSystem: '12-tet',
    signatureCell: 'Stop-start guitar accents opening into a dense full-band section', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Em', 'C', 'Bb', 'C'], chorus: ['Am', 'C', 'Em', 'D'] },
  },
  {
    id: 'punk-hardcore-crust-punk', worldId: 'punk-hardcore', name: 'Crust Punk', origin: 'United Kingdom / Sweden', era: '1980s–Present',
    description: 'Raw distorted punk combining fast D-beat drive with heavy, sustained riff sections.',
    characteristicInstruments: ['distortion-guitar', 'bass', 'drums', 'voice', 'overdrive-guitar'], preferredMeters: ['4/4'], tempoRange: [130, 220],
    keySubstyles: ['Crust', 'Stenchcore'], coreConcepts: ['D-beat', 'low-register power chords', 'raw distortion', 'fast-to-heavy contrast'],
    rhythmicGrammar: ['D-beat kick and snare switching to half-time weight for riff breaks'], tuningSystem: '12-tet',
    signatureCell: 'Driving D-beat that drops into a heavy half-time riff', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['E5', 'D5', 'C5', 'D5'], chorus: ['E5', 'G5', 'A5', 'E5'] },
  },
  {
    id: 'punk-hardcore-d-beat', worldId: 'punk-hardcore', name: 'D-Beat', origin: 'United Kingdom / Sweden', era: '1980s–Present',
    description: 'Relentless punk groove built around the characteristic displaced kick-and-snare cycle.',
    characteristicInstruments: ['electric-guitar', 'bass', 'drums', 'voice', 'distortion-guitar'], preferredMeters: ['4/4'], tempoRange: [160, 220],
    keySubstyles: ['Scandi-Punk', 'Raw Punk'], coreConcepts: ['D-beat', 'repeating guitar riff', 'shouted vocal', 'brief fills'],
    rhythmicGrammar: ['repeating kick-snare displacement with continuous eighth-note guitar and short fills'], tuningSystem: '12-tet',
    signatureCell: 'Unbroken D-beat under a repeating eighth-note guitar riff', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['A5', 'G5', 'F5', 'G5'], chorus: ['A5', 'C5', 'G5', 'A5'] },
  },
  {
  "id": "punk-hardcore-proto-punk-garage-punk",
  "worldId": "punk-hardcore",
  "name": "Proto-Punk / Garage Punk",
  "origin": "United States",
  "era": "1960s–1970s",
  "description": "Raw blues-rock stripped to aggressive riffs, repetitive structures and confrontational performance.",
  "characteristicInstruments": [
    "distortion-guitar",
    "bass",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    100,
    160
  ],
  "keySubstyles": [
    "Proto-Punk / Garage Punk"
  ],
  "coreConcepts": [
    "power-chord eighths",
    "raw backbeat",
    "stop-start punk"
  ],
  "rhythmicGrammar": [
    "Raw guitar riff with driving backbeat"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Raw guitar riff with driving backbeat",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "E5",
    "C5",
    "G5",
    "D5"
  ],
  "sectionProgressions": {
    "intro": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "verse": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "chorus": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "bridge": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "solo": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "coda": [
      "E5",
      "C5",
      "G5",
      "D5"
    ]
  },
  "referenceArtists": [
    "The Stooges",
    "MC5"
  ],
  "referenceTracks": [],
  "techniques": [
    "power-chord eighths",
    "stop-start punk",
    "octave guitar",
    "tremolo guitar"
  ]
},
{
  "id": "punk-hardcore-anarcho-punk",
  "worldId": "punk-hardcore",
  "name": "Anarcho-Punk",
  "origin": "United Kingdom",
  "era": "1970s–1980s",
  "description": "Experimental punk structures, abrasive production, spoken vocals and politically charged repetition.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "voice",
    "sampler"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    100,
    160
  ],
  "keySubstyles": [
    "Anarcho-Punk"
  ],
  "coreConcepts": [
    "spoken vocal",
    "abrasive noise",
    "stop-start repetition"
  ],
  "rhythmicGrammar": [
    "Abrasive punk groove with spoken vocal"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Abrasive punk groove with spoken vocal",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "E5",
    "C5",
    "G5",
    "D5"
  ],
  "sectionProgressions": {
    "intro": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "verse": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "chorus": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "bridge": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "solo": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "coda": [
      "E5",
      "C5",
      "G5",
      "D5"
    ]
  },
  "referenceArtists": [
    "Crass",
    "Conflict"
  ],
  "referenceTracks": [],
  "techniques": [
    "stop-start punk",
    "gang vocal"
  ]
},
{
  "id": "punk-hardcore-oi",
  "worldId": "punk-hardcore",
  "name": "Oi!",
  "origin": "United Kingdom",
  "era": "1970s–Present",
  "description": "Straightforward guitar riffs, gang vocals, stomp rhythms and communal choruses.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "voice",
    "backing-vocals"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    110,
    155
  ],
  "keySubstyles": [
    "Oi!"
  ],
  "coreConcepts": [
    "gang vocal",
    "stomp rhythm",
    "shouted unison chorus"
  ],
  "rhythmicGrammar": [
    "Stomp rhythm with gang-vocal chorus"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Stomp rhythm with gang-vocal chorus",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "E5",
    "C5",
    "G5",
    "D5"
  ],
  "sectionProgressions": {
    "intro": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "verse": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "chorus": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "bridge": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "solo": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "coda": [
      "E5",
      "C5",
      "G5",
      "D5"
    ]
  },
  "referenceArtists": [
    "Cock Sparrer",
    "Sham 69"
  ],
  "referenceTracks": [],
  "techniques": [
    "shouted unison chorus",
    "gang vocal"
  ]
},
{
  "id": "punk-hardcore-screamo",
  "worldId": "punk-hardcore",
  "name": "Screamo",
  "origin": "United States",
  "era": "1990s–Present",
  "description": "Chaotic dynamics, high-register screamed vocals, rapid shifts and quiet/loud contrast.",
  "characteristicInstruments": [
    "distortion-guitar",
    "bass",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4",
    "6/8"
  ],
  "tempoRange": [
    100,
    190
  ],
  "keySubstyles": [
    "Screamo"
  ],
  "coreConcepts": [
    "quiet/loud dynamics",
    "rapid shift",
    "tremolo guitar",
    "screamed high register"
  ],
  "rhythmicGrammar": [
    "Quiet/loud eruption with screamed vocal"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Quiet/loud eruption with screamed vocal",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "E5",
    "C5",
    "G5",
    "D5"
  ],
  "sectionProgressions": {
    "intro": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "verse": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "chorus": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "bridge": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "solo": [
      "E5",
      "C5",
      "G5",
      "D5"
    ],
    "coda": [
      "E5",
      "C5",
      "G5",
      "D5"
    ]
  },
  "referenceArtists": [
    "Orchid",
    "Saetia"
  ],
  "referenceTracks": [],
  "techniques": [
    "tremolo guitar",
    "quiet/loud dynamics",
    "gang vocal",
    "octave guitar"
  ]
}];

export const PUNK_HARDCORE_WORLD: GenreWorld = {
  id: 'punk-hardcore', name: 'Punk / Hardcore', family: 'Punk', color: '#B45B68', level: 'world', kind: 'world', strictness: 'strict',
  description: 'Punk and hardcore traditions built around direct songs, distorted guitar, bass, drums and urgent vocal performance.',
  substyles: ['Punk Rock', 'Hardcore Punk', 'Skate Punk', 'Pop Punk', 'Melodic Hardcore', 'Post-Hardcore', 'Crust Punk', 'D-Beat'],
  artists: ['The Ramones', 'The Clash', 'Bad Brains', 'Black Flag', 'Dead Kennedys', 'Minor Threat', 'Discharge', 'Bad Religion', 'Fugazi', 'Refused'],
  concepts: ['downstrokes', 'power-chord riffs', 'D-beat', 'fast backbeat', 'half-time breakdown', 'short forms', 'gang vocals'],
  crossLinks: ['Hardcore ↔ Metal', 'Punk ↔ Rock', 'Post-Hardcore ↔ Alternative Rock'],
  roles: { guitar: ['downstroked eighths', 'power-chord riff', 'stop-start accents'], bass: ['guitar-unison drive', 'root and fifth motion'], drums: ['fast backbeat', 'D-beat', 'half-time breakdown', 'short fill'], voice: ['shouted lead', 'group response', 'melodic chorus'] },
  tuningSystem: '12-tet', signatureCell: 'Fast downstroked guitar, bass lock, direct kick and snare, urgent vocal',
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' }, styleDefinitions: styles, patterns: [
  {
  "id": "tech-punk-hardcore-power-chord-eighths",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-proto-punk-garage-punk"
  ],
  "name": "power-chord eighths",
  "shortName": "power-chord eighths",
  "family": "punk-hardcore",
  "category": "comping",
  "description": "Technique: power-chord eighths",
  "tags": [
    "punk-hardcore",
    "power-chord eighths"
  ],
  "approaches": [
    "power-chord eighths"
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
    "punk-hardcore",
    "power-chord eighths"
  ],
  "techniques": [
    "power-chord eighths"
  ]
},
{
  "id": "tech-punk-hardcore-d-beat",
  "worldId": "punk-hardcore",
  "styleIds": [],
  "name": "d-beat",
  "shortName": "d-beat",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Technique: d-beat",
  "tags": [
    "punk-hardcore",
    "d-beat"
  ],
  "approaches": [
    "d-beat"
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
    "punk-hardcore",
    "d-beat"
  ],
  "techniques": [
    "d-beat"
  ]
},
{
  "id": "tech-punk-hardcore-hardcore-two-step",
  "worldId": "punk-hardcore",
  "styleIds": [],
  "name": "hardcore two-step",
  "shortName": "hardcore two-step",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Technique: hardcore two-step",
  "tags": [
    "punk-hardcore",
    "hardcore two-step"
  ],
  "approaches": [
    "hardcore two-step"
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
    "punk-hardcore",
    "hardcore two-step"
  ],
  "techniques": [
    "hardcore two-step"
  ]
},
{
  "id": "tech-punk-hardcore-breakdown",
  "worldId": "punk-hardcore",
  "styleIds": [],
  "name": "breakdown",
  "shortName": "breakdown",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Technique: breakdown",
  "tags": [
    "punk-hardcore",
    "breakdown"
  ],
  "approaches": [
    "breakdown"
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
    "punk-hardcore",
    "breakdown"
  ],
  "techniques": [
    "breakdown"
  ]
},
{
  "id": "tech-punk-hardcore-gang-vocal",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-anarcho-punk",
    "punk-hardcore-oi",
    "punk-hardcore-screamo"
  ],
  "name": "gang vocal",
  "shortName": "gang vocal",
  "family": "punk-hardcore",
  "category": "lead",
  "description": "Technique: gang vocal",
  "tags": [
    "punk-hardcore",
    "gang vocal"
  ],
  "approaches": [
    "gang vocal"
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
    "punk-hardcore",
    "gang vocal"
  ],
  "techniques": [
    "gang vocal"
  ]
},
{
  "id": "tech-punk-hardcore-octave-guitar",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-proto-punk-garage-punk",
    "punk-hardcore-screamo"
  ],
  "name": "octave guitar",
  "shortName": "octave guitar",
  "family": "punk-hardcore",
  "category": "comping",
  "description": "Technique: octave guitar",
  "tags": [
    "punk-hardcore",
    "octave guitar"
  ],
  "approaches": [
    "octave guitar"
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
    "punk-hardcore",
    "octave guitar"
  ],
  "techniques": [
    "octave guitar"
  ]
},
{
  "id": "tech-punk-hardcore-tremolo-guitar",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-proto-punk-garage-punk",
    "punk-hardcore-screamo"
  ],
  "name": "tremolo guitar",
  "shortName": "tremolo guitar",
  "family": "punk-hardcore",
  "category": "comping",
  "description": "Technique: tremolo guitar",
  "tags": [
    "punk-hardcore",
    "tremolo guitar"
  ],
  "approaches": [
    "tremolo guitar"
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
    "punk-hardcore",
    "tremolo guitar"
  ],
  "techniques": [
    "tremolo guitar"
  ]
},
{
  "id": "tech-punk-hardcore-stop-start-punk",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-proto-punk-garage-punk",
    "punk-hardcore-anarcho-punk"
  ],
  "name": "stop-start punk",
  "shortName": "stop-start punk",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Technique: stop-start punk",
  "tags": [
    "punk-hardcore",
    "stop-start punk"
  ],
  "approaches": [
    "stop-start punk"
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
    "punk-hardcore",
    "stop-start punk"
  ],
  "techniques": [
    "stop-start punk"
  ]
},
{
  "id": "tech-punk-hardcore-quiet-loud-dynamics",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-screamo"
  ],
  "name": "quiet/loud dynamics",
  "shortName": "quiet/loud dynamics",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Technique: quiet/loud dynamics",
  "tags": [
    "punk-hardcore",
    "quiet/loud dynamics"
  ],
  "approaches": [
    "quiet/loud dynamics"
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
    "punk-hardcore",
    "quiet/loud dynamics"
  ],
  "techniques": [
    "quiet/loud dynamics"
  ]
},
{
  "id": "tech-punk-hardcore-shouted-unison-chorus",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-oi"
  ],
  "name": "shouted unison chorus",
  "shortName": "shouted unison chorus",
  "family": "punk-hardcore",
  "category": "lead",
  "description": "Technique: shouted unison chorus",
  "tags": [
    "punk-hardcore",
    "shouted unison chorus"
  ],
  "approaches": [
    "shouted unison chorus"
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
    "punk-hardcore",
    "shouted unison chorus"
  ],
  "techniques": [
    "shouted unison chorus"
  ]
},
{
  "id": "style-punk-hardcore-proto-punk-garage-punk-signature",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-proto-punk-garage-punk"
  ],
  "name": "Proto-Punk / Garage Punk Signature Cell",
  "shortName": "Proto-Punk / Garage Punk Cell",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "punk-hardcore",
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
    "distortion-guitar",
    "bass",
    "drums",
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
    "punk-hardcore",
    "signature"
  ],
  "techniques": [
    "power-chord eighths",
    "stop-start punk",
    "octave guitar",
    "tremolo guitar"
  ]
},
{
  "id": "style-punk-hardcore-anarcho-punk-signature",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-anarcho-punk"
  ],
  "name": "Anarcho-Punk Signature Cell",
  "shortName": "Anarcho-Punk Cell",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "punk-hardcore",
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
    "punk-hardcore",
    "signature"
  ],
  "techniques": [
    "stop-start punk",
    "gang vocal"
  ]
},
{
  "id": "style-punk-hardcore-oi-signature",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-oi"
  ],
  "name": "Oi! Signature Cell",
  "shortName": "Oi! Cell",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "punk-hardcore",
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
    "punk-hardcore",
    "signature"
  ],
  "techniques": [
    "shouted unison chorus",
    "gang vocal"
  ]
},
{
  "id": "style-punk-hardcore-screamo-signature",
  "worldId": "punk-hardcore",
  "styleIds": [
    "punk-hardcore-screamo"
  ],
  "name": "Screamo Signature Cell",
  "shortName": "Screamo Cell",
  "family": "punk-hardcore",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "punk-hardcore",
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
    "distortion-guitar",
    "bass",
    "drums",
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
    "punk-hardcore",
    "signature"
  ],
  "techniques": [
    "tremolo guitar",
    "quiet/loud dynamics",
    "gang vocal",
    "octave guitar"
  ]
}],
};
