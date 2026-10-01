import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'uk-bass-garage', worldId: 'uk-bass', name: 'UK Garage', origin: 'London, United Kingdom', era: '1990s–Present',
    description: 'Swinging, syncopated 2-step drums, deep bass, clipped chords and vocal chops.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [128, 138],
    keySubstyles: ['UK Garage'], coreConcepts: ['syncopated kick', 'snare on 2 and 4', 'swung hats', 'vocal chops', 'sub-bass'],
    rhythmicGrammar: ['two-step kick displacement with a firm backbeat, shuffled or swung subdivisions and bass syncopation'], tuningSystem: '12-tet',
    signatureCell: 'Skipped two-step kick, crisp backbeat and swung high percussion', grooveMechanics: { swingPercentage: 56, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am7', 'Fmaj7', 'C', 'G'], chorus: ['Fmaj7', 'G', 'Am7', 'Am7'] },
  },
  {
    id: 'uk-bass-2-step', worldId: 'uk-bass', name: '2-Step', origin: 'London, United Kingdom', era: 'Late 1990s–Present',
    description: 'UK garage rhythm with a broken, syncopated kick pattern, crisp backbeat, shuffled percussion and bass-led movement.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [128, 138],
    keySubstyles: ['2-Step'], coreConcepts: ['broken kick pattern', 'snare on 2 and 4', 'swung subdivisions', 'bass syncopation'],
    rhythmicGrammar: ['kick displacements around a firm backbeat with swung high percussion and syncopated bass'], tuningSystem: '12-tet',
    signatureCell: 'Skipped kick, crisp backbeat and swung percussion around a vocal chop', grooveMechanics: { swingPercentage: 57, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am7', 'Fmaj7', 'C', 'G'], chorus: ['Fmaj7', 'G', 'Am7', 'Am7'] },
  },
  {
    id: 'uk-bass-speed-garage', worldId: 'uk-bass', name: 'Speed Garage', origin: 'United Kingdom', era: 'Late 1990s–Present',
    description: 'High-energy garage with a four-to-the-floor pulse, swung percussion, weighty bass and chopped vocal phrases.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [130, 140],
    keySubstyles: ['Speed Garage'], coreConcepts: ['four-to-the-floor kick', 'swung percussion', 'heavy bassline', 'vocal chops'],
    rhythmicGrammar: ['steady four-beat kick with shuffled hats, syncopated bass and short vocal replies'], tuningSystem: '12-tet',
    signatureCell: 'Four-beat kick under swung percussion and a syncopated bass response', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'uk-bass-dubstep', worldId: 'uk-bass', name: 'Dubstep', origin: 'South London, United Kingdom', era: '2000s–Present',
    description: 'Half-time kick and snare, spacious syncopation, sub-bass and dark sound design.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler'], preferredMeters: ['4/4'], tempoRange: [138, 142],
    keySubstyles: ['Deep Dubstep', 'Brostep'], coreConcepts: ['half-time backbeat', 'sub-bass', 'space and silence', 'bass modulation'],
    rhythmicGrammar: ['half-time snare on beat three with syncopated kick and sparse subdivisions'], tuningSystem: '12-tet',
    signatureCell: 'Half-time snare, syncopated kick and sustained sub-bass', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Dm', 'Bb', 'Gm', 'A'], chorus: ['Dm', 'C', 'Bb', 'A'] },
  },
  {
    id: 'uk-bass-funky', worldId: 'uk-bass', name: 'UK Funky', origin: 'London, United Kingdom', era: '2000s–Present',
    description: 'Percussive house and garage hybrid with syncopated drums, bass and Afro-Caribbean percussion.',
    characteristicInstruments: ['drums', 'sub-bass', 'hand-percussion', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 132],
    keySubstyles: ['UK Funky', 'Tribal House'], coreConcepts: ['rolling percussion', 'syncopated house kick', 'bass-led groove', 'vocal calls'],
    rhythmicGrammar: ['four-on-floor foundation varied by syncopated hand percussion and bass accents'], tuningSystem: '12-tet',
    signatureCell: 'House pulse over interlocking syncopated percussion', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am', 'G', 'F', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'uk-bass-future-garage', worldId: 'uk-bass', name: 'Future Garage', origin: 'United Kingdom', era: '2000s–Present',
    description: 'Sparse, shuffled garage rhythms with deep sub, atmospheric harmony and fragmented vocal samples.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 135],
    keySubstyles: ['Future Garage', 'Bass Music'], coreConcepts: ['sparse 2-step', 'shuffled percussion', 'atmospheric pads', 'chopped vocal texture'],
    rhythmicGrammar: ['broken 2-step beat with irregular kick placement and loose shuffled high percussion'], tuningSystem: '12-tet',
    signatureCell: 'Sparse swung garage break under a long atmospheric chord', grooveMechanics: { swingPercentage: 57, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Em7', 'Cmaj7', 'G', 'D'], chorus: ['Cmaj7', 'D', 'Em7', 'Em7'] },
  },
  {
    id: 'uk-bass-bassline', worldId: 'uk-bass', name: 'Bassline', origin: 'Sheffield, United Kingdom', era: '2000s–Present',
    description: 'Fast UK club music with a four-to-the-floor pulse, elastic bass and pitched vocal hooks.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'voice', 'sampler'], preferredMeters: ['4/4'], tempoRange: [130, 140],
    keySubstyles: ['Bassline'], coreConcepts: ['four-to-the-floor kick', 'wobbly bass hook', 'pitched vocal sample', 'club drop'],
    rhythmicGrammar: ['steady four-beat kick with syncopated bass and clipped vocal or synth replies'], tuningSystem: '12-tet',
    signatureCell: 'Four-to-the-floor kick beneath a syncopated elastic bassline', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'uk-bass-grime', worldId: 'uk-bass', name: 'Grime', origin: 'East London, United Kingdom', era: '2000s–Present',
    description: 'MC-led UK electronic music with sparse syncopated drums, dark synth motifs and sharp bass.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [135, 145],
    keySubstyles: ['Eski', 'Instrumental Grime'], coreConcepts: ['MC cadence', 'sparse syncopated beat', 'dark synth motif', 'sub-bass'],
    rhythmicGrammar: ['broken syncopated kick and snare leaves rhythmic space for rapid MC phrasing'], tuningSystem: '12-tet',
    signatureCell: 'Sparse broken beat and dark synth hook under an MC cadence', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Em', 'Em', 'C', 'D'], chorus: ['Em', 'C', 'D', 'Em'] },
  },
  {
  "id": "uk-bass-jungle-hardcore-continuum",
  "worldId": "uk-bass",
  "name": "Jungle / Hardcore Continuum",
  "origin": "United Kingdom",
  "era": "1990s–Present",
  "description": "Breakbeat-heavy UK rave music with chopped breaks and sub-bass feeding later drum-and-bass.",
  "characteristicInstruments": [
    "drums",
    "sub-bass",
    "sampler",
    "synth"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    150,
    175
  ],
  "keySubstyles": [
    "Jungle / Hardcore Continuum"
  ],
  "coreConcepts": [
    "chopped break",
    "sub-bass",
    "break rearrangement"
  ],
  "rhythmicGrammar": [
    "Chopped rave break with deep sub"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Chopped rave break with deep sub",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "F",
    "C",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "verse": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "chorus": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "bridge": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "solo": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "coda": [
      "Am",
      "F",
      "C",
      "G"
    ]
  },
  "referenceArtists": [
    "Goldie",
    "4hero"
  ],
  "referenceTracks": [],
  "techniques": [
    "sub-bass wobble",
    "chopped vocal",
    "grime square-wave bass"
  ]
},
{
  "id": "uk-bass-dark-garage",
  "worldId": "uk-bass",
  "name": "Dark Garage",
  "origin": "United Kingdom",
  "era": "1990s–2000s",
  "description": "Sparse 2-step drums, dark sub-bass, ghostly samples and stripped atmosphere.",
  "characteristicInstruments": [
    "drums",
    "sub-bass",
    "warm-pad",
    "sampler"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    125,
    140
  ],
  "keySubstyles": [
    "Dark Garage"
  ],
  "coreConcepts": [
    "2-step kick displacement",
    "dark garage pad",
    "ghost percussion"
  ],
  "rhythmicGrammar": [
    "Sparse 2-step with dark sub"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sparse 2-step with dark sub",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "F",
    "C",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "verse": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "chorus": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "bridge": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "solo": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "coda": [
      "Am",
      "F",
      "C",
      "G"
    ]
  },
  "referenceArtists": [
    "El-B",
    "Horsepower Productions"
  ],
  "referenceTracks": [],
  "techniques": [
    "dark garage pad",
    "2-step kick displacement",
    "shuffled percussion",
    "sub-bass wobble",
    "syncopated UK funky percussion"
  ]
},
{
  "id": "uk-bass-breakstep",
  "worldId": "uk-bass",
  "name": "Breakstep",
  "origin": "United Kingdom",
  "era": "2000s",
  "description": "UK garage rhythm combined with broken beats and early dubstep bass design.",
  "characteristicInstruments": [
    "drums",
    "sub-bass",
    "sampler",
    "synth"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    130,
    145
  ],
  "keySubstyles": [
    "Breakstep"
  ],
  "coreConcepts": [
    "breakstep rhythm",
    "sub-bass wobble",
    "garage swing"
  ],
  "rhythmicGrammar": [
    "Broken garage rhythm with sub wobble"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Broken garage rhythm with sub wobble",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "F",
    "C",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "verse": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "chorus": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "bridge": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "solo": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "coda": [
      "Am",
      "F",
      "C",
      "G"
    ]
  },
  "referenceArtists": [
    "Plastician"
  ],
  "referenceTracks": [],
  "techniques": [
    "breakstep rhythm",
    "sub-bass wobble",
    "dark garage pad",
    "grime square-wave bass"
  ]
},
{
  "id": "uk-bass-uk-funky",
  "worldId": "uk-bass",
  "name": "UK Funky",
  "origin": "United Kingdom",
  "era": "2000s–Present",
  "description": "Syncopated percussion, Afro-Caribbean rhythmic influence, swung bass and vocal hooks.",
  "characteristicInstruments": [
    "drums",
    "bass",
    "hand-percussion",
    "synth",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    120,
    135
  ],
  "keySubstyles": [
    "UK Funky"
  ],
  "coreConcepts": [
    "UK funky percussion",
    "swung bass",
    "Afro-Caribbean syncopation"
  ],
  "rhythmicGrammar": [
    "Swung percussion with syncopated bass"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Swung percussion with syncopated bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "F",
    "C",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "verse": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "chorus": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "bridge": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "solo": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "coda": [
      "Am",
      "F",
      "C",
      "G"
    ]
  },
  "referenceArtists": [
    "Roska",
    "Donae'o"
  ],
  "referenceTracks": [],
  "techniques": [
    "syncopated UK funky percussion",
    "grime square-wave bass",
    "shuffled percussion",
    "sub-bass wobble"
  ]
},
{
  "id": "uk-bass-grime-instrumental",
  "worldId": "uk-bass",
  "name": "Grime Instrumental",
  "origin": "United Kingdom",
  "era": "2000s–Present",
  "description": "Sparse kick/snare grid, dark synth motifs, aggressive bass stabs and large negative space.",
  "characteristicInstruments": [
    "drums",
    "square-lead",
    "sub-bass",
    "synth"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    130,
    145
  ],
  "keySubstyles": [
    "Grime Instrumental"
  ],
  "coreConcepts": [
    "grime square-wave bass",
    "sparse grid",
    "aggressive bass stab"
  ],
  "rhythmicGrammar": [
    "Sparse grime grid with square bass"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sparse grime grid with square bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "F",
    "C",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "verse": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "chorus": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "bridge": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "solo": [
      "Am",
      "F",
      "C",
      "G"
    ],
    "coda": [
      "Am",
      "F",
      "C",
      "G"
    ]
  },
  "referenceArtists": [
    "Wiley",
    "Dizzee Rascal"
  ],
  "referenceTracks": [],
  "techniques": [
    "grime square-wave bass",
    "sub-bass wobble"
  ]
}];

export const UK_BASS_WORLD: GenreWorld = {
  id: 'uk-bass', name: 'UK Bass', family: 'Electronic / Dance', color: '#8A6DA8', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'A UK club continuum of garage, dubstep and bass music shaped by syncopated drums, sub-bass and sound-system culture.',
  substyles: ['UK Garage', '2-Step', 'Speed Garage', 'Bassline', 'Dubstep', 'UK Funky', 'Future Garage', 'Grime'],
  artists: ['Todd Edwards', 'MJ Cole', 'Artful Dodger', 'Burial', 'El-B', 'Horsepower Productions', 'Skream', 'Wookie', 'Dizzee Rascal', 'Roska'],
  concepts: ['2-step swing', 'syncopated kick', 'half-time backbeat', 'sub-bass', 'vocal chops', 'sound-system weight'],
  crossLinks: ['UK Garage ↔ R&B', 'Dubstep ↔ Reggae / Dub', 'Grime ↔ Hip-Hop'],
  roles: { drums: ['syncopated two-step', 'half-time backbeat', 'shuffled high percussion'], bass: ['sub-bass', 'syncopated bassline', 'long bass drop'], synth: ['short chord stabs', 'atmospheric pads', 'modulated bass'], voice: ['chopped vocal sample', 'MC cadence'] },
  tuningSystem: '12-tet', signatureCell: 'Syncopated UK club drums and deep sub-bass', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
  styleDefinitions: styles, patterns: [
  {
  "id": "tech-uk-bass-2-step-kick-displacement",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-dark-garage"
  ],
  "name": "2-step kick displacement",
  "shortName": "2-step kick displacement",
  "family": "uk-bass",
  "category": "groove",
  "description": "Technique: 2-step kick displacement",
  "tags": [
    "uk-bass",
    "2-step kick displacement"
  ],
  "approaches": [
    "2-step kick displacement"
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
    6,
    8,
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
    "uk-bass",
    "2-step kick displacement"
  ],
  "techniques": [
    "2-step kick displacement"
  ]
},
{
  "id": "tech-uk-bass-shuffled-percussion",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-dark-garage",
    "uk-bass-uk-funky"
  ],
  "name": "shuffled percussion",
  "shortName": "shuffled percussion",
  "family": "uk-bass",
  "category": "groove",
  "description": "Technique: shuffled percussion",
  "tags": [
    "uk-bass",
    "shuffled percussion"
  ],
  "approaches": [
    "shuffled percussion"
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
    3,
    6,
    8,
    11,
    14
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
    "uk-bass",
    "shuffled percussion"
  ],
  "techniques": [
    "shuffled percussion"
  ]
},
{
  "id": "tech-uk-bass-ukg-bassline",
  "worldId": "uk-bass",
  "styleIds": [],
  "name": "UKG bassline",
  "shortName": "UKG bassline",
  "family": "uk-bass",
  "category": "bass",
  "description": "Technique: UKG bassline",
  "tags": [
    "uk-bass",
    "UKG bassline"
  ],
  "approaches": [
    "UKG bassline"
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
    "uk-bass",
    "UKG bassline"
  ],
  "techniques": [
    "UKG bassline"
  ]
},
{
  "id": "tech-uk-bass-sub-bass-wobble",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-jungle-hardcore-continuum",
    "uk-bass-dark-garage",
    "uk-bass-breakstep",
    "uk-bass-uk-funky",
    "uk-bass-grime-instrumental"
  ],
  "name": "sub-bass wobble",
  "shortName": "sub-bass wobble",
  "family": "uk-bass",
  "category": "bass",
  "description": "Technique: sub-bass wobble",
  "tags": [
    "uk-bass",
    "sub-bass wobble"
  ],
  "approaches": [
    "sub-bass wobble"
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
    "uk-bass",
    "sub-bass wobble"
  ],
  "techniques": [
    "sub-bass wobble"
  ]
},
{
  "id": "tech-uk-bass-dark-garage-pad",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-dark-garage",
    "uk-bass-breakstep"
  ],
  "name": "dark garage pad",
  "shortName": "dark garage pad",
  "family": "uk-bass",
  "category": "texture",
  "description": "Technique: dark garage pad",
  "tags": [
    "uk-bass",
    "dark garage pad"
  ],
  "approaches": [
    "dark garage pad"
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
    "uk-bass",
    "dark garage pad"
  ],
  "techniques": [
    "dark garage pad"
  ]
},
{
  "id": "tech-uk-bass-grime-square-wave-bass",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-jungle-hardcore-continuum",
    "uk-bass-breakstep",
    "uk-bass-uk-funky",
    "uk-bass-grime-instrumental"
  ],
  "name": "grime square-wave bass",
  "shortName": "grime square-wave bass",
  "family": "uk-bass",
  "category": "bass",
  "description": "Technique: grime square-wave bass",
  "tags": [
    "uk-bass",
    "grime square-wave bass"
  ],
  "approaches": [
    "grime square-wave bass"
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
    "uk-bass",
    "grime square-wave bass"
  ],
  "techniques": [
    "grime square-wave bass"
  ]
},
{
  "id": "tech-uk-bass-syncopated-uk-funky-percussion",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-dark-garage",
    "uk-bass-uk-funky"
  ],
  "name": "syncopated UK funky percussion",
  "shortName": "syncopated UK funky percussion",
  "family": "uk-bass",
  "category": "groove",
  "description": "Technique: syncopated UK funky percussion",
  "tags": [
    "uk-bass",
    "syncopated UK funky percussion"
  ],
  "approaches": [
    "syncopated UK funky percussion"
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
    "uk-bass",
    "syncopated UK funky percussion"
  ],
  "techniques": [
    "syncopated UK funky percussion"
  ]
},
{
  "id": "tech-uk-bass-chopped-vocal",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-jungle-hardcore-continuum"
  ],
  "name": "chopped vocal",
  "shortName": "chopped vocal",
  "family": "uk-bass",
  "category": "lead",
  "description": "Technique: chopped vocal",
  "tags": [
    "uk-bass",
    "chopped vocal"
  ],
  "approaches": [
    "chopped vocal"
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
    "uk-bass",
    "chopped vocal"
  ],
  "techniques": [
    "chopped vocal"
  ]
},
{
  "id": "tech-uk-bass-half-time-drop",
  "worldId": "uk-bass",
  "styleIds": [],
  "name": "half-time drop",
  "shortName": "half-time drop",
  "family": "uk-bass",
  "category": "groove",
  "description": "Technique: half-time drop",
  "tags": [
    "uk-bass",
    "half-time drop"
  ],
  "approaches": [
    "half-time drop"
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
    "uk-bass",
    "half-time drop"
  ],
  "techniques": [
    "half-time drop"
  ]
},
{
  "id": "tech-uk-bass-breakstep-rhythm",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-breakstep"
  ],
  "name": "breakstep rhythm",
  "shortName": "breakstep rhythm",
  "family": "uk-bass",
  "category": "groove",
  "description": "Technique: breakstep rhythm",
  "tags": [
    "uk-bass",
    "breakstep rhythm"
  ],
  "approaches": [
    "breakstep rhythm"
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
    "uk-bass",
    "breakstep rhythm"
  ],
  "techniques": [
    "breakstep rhythm"
  ]
},
{
  "id": "style-uk-bass-jungle-hardcore-continuum-signature",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-jungle-hardcore-continuum"
  ],
  "name": "Jungle / Hardcore Continuum Signature Cell",
  "shortName": "Jungle / Hardcore Continuum Cell",
  "family": "uk-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "uk-bass",
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
    "sub-bass",
    "sampler",
    "synth"
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
    0.7,
    0.7,
    0.7,
    1,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7,
    0.9,
    0.7,
    0.9,
    0.7
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
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "uk-bass",
    "signature"
  ],
  "techniques": [
    "sub-bass wobble",
    "chopped vocal",
    "grime square-wave bass"
  ]
},
{
  "id": "style-uk-bass-dark-garage-signature",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-dark-garage"
  ],
  "name": "Dark Garage Signature Cell",
  "shortName": "Dark Garage Cell",
  "family": "uk-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "uk-bass",
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
    "sub-bass",
    "warm-pad",
    "sampler"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    6,
    8,
    14
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
    "uk-bass",
    "signature"
  ],
  "techniques": [
    "dark garage pad",
    "2-step kick displacement",
    "shuffled percussion",
    "sub-bass wobble",
    "syncopated UK funky percussion"
  ]
},
{
  "id": "style-uk-bass-breakstep-signature",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-breakstep"
  ],
  "name": "Breakstep Signature Cell",
  "shortName": "Breakstep Cell",
  "family": "uk-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "uk-bass",
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
    "sub-bass",
    "sampler",
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
    "uk-bass",
    "signature"
  ],
  "techniques": [
    "breakstep rhythm",
    "sub-bass wobble",
    "dark garage pad",
    "grime square-wave bass"
  ]
},
{
  "id": "style-uk-bass-uk-funky-signature",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-uk-funky"
  ],
  "name": "UK Funky Signature Cell",
  "shortName": "UK Funky Cell",
  "family": "uk-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "uk-bass",
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
    "hand-percussion",
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
    "uk-bass",
    "signature"
  ],
  "techniques": [
    "syncopated UK funky percussion",
    "grime square-wave bass",
    "shuffled percussion",
    "sub-bass wobble"
  ]
},
{
  "id": "style-uk-bass-grime-instrumental-signature",
  "worldId": "uk-bass",
  "styleIds": [
    "uk-bass-grime-instrumental"
  ],
  "name": "Grime Instrumental Signature Cell",
  "shortName": "Grime Instrumental Cell",
  "family": "uk-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "uk-bass",
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
    "square-lead",
    "sub-bass",
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
    "uk-bass",
    "signature"
  ],
  "techniques": [
    "grime square-wave bass",
    "sub-bass wobble"
  ]
}],
};
