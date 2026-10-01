import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'drum-and-bass-jungle', worldId: 'drum-and-bass', name: 'Jungle', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Fast breakbeats, rolling sub-bass, chopped breaks and sound-system pressure.',
    characteristicInstruments: ['drums', 'sub-bass', 'sampler', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [160, 180],
    keySubstyles: ['Jungle', 'Ragga Jungle'], coreConcepts: ['chopped breakbeats', 'rolling sub-bass', 'sampled breaks', 'MC call and response'],
    rhythmicGrammar: ['fast syncopated breakbeat with a strong snare on beats two and four or a half-time backbeat'],
    tuningSystem: '12-tet', signatureCell: 'Chopped breakbeat over rolling sub-bass',
    grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    prominentChords: ['i', 'bVII', 'bVI'], sectionProgressions: { verse: ['Am', 'G', 'F', 'G'], chorus: ['Am', 'F', 'G', 'Am'] },
  },
  {
    id: 'drum-and-bass-liquid', worldId: 'drum-and-bass', name: 'Liquid Drum & Bass', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Fast, flowing breakbeats with warm sub, lyrical harmony and spacious melodic layers.',
    characteristicInstruments: ['drums', 'sub-bass', 'piano', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [168, 178],
    keySubstyles: ['Liquid', 'Soulful DnB'], coreConcepts: ['rolling breaks', 'melodic bass', 'extended harmony', 'legato pads'],
    rhythmicGrammar: ['rolling breakbeat with a clear backbeat, light syncopation and long melodic phrases'], tuningSystem: '12-tet',
    signatureCell: 'Rolling break, deep sub-bass and a sustained chord answer', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Dm7', 'Bbmaj7', 'F', 'C'], chorus: ['Bbmaj7', 'C', 'Dm7', 'Am7'] },
  },
  {
    id: 'drum-and-bass-techstep', worldId: 'drum-and-bass', name: 'Techstep', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Dark, sparse drum and bass with hard-edged sampled breaks, industrial textures and tense minor-key bass.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler'], preferredMeters: ['4/4'], tempoRange: [165, 180],
    keySubstyles: ['Techstep'], coreConcepts: ['precise break edits', 'dark bass design', 'industrial texture', 'minor-key tension'],
    rhythmicGrammar: ['fast broken kick pattern with a heavy snare backbeat and controlled syncopation'], tuningSystem: '12-tet',
    signatureCell: 'Tight break edits against a modulated reese bass', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'quantized' },
    sectionProgressions: { verse: ['Em', 'Em', 'C', 'B7'], chorus: ['Em', 'C', 'D', 'B7'] },
  },
  {
    id: 'drum-and-bass-neurofunk', worldId: 'drum-and-bass', name: 'Neurofunk', origin: 'United Kingdom / Europe', era: 'Late 1990s–Present',
    description: 'Precision-engineered drum and bass with tightly controlled breaks, modulated reese bass and intricate sound design.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler'], preferredMeters: ['4/4'], tempoRange: [170, 180],
    keySubstyles: ['Neurofunk'], coreConcepts: ['reese bass', 'fine-grained break edits', 'call-and-response bass design', 'high production precision'],
    rhythmicGrammar: ['fast broken beat with tightly edited kick and snare, ghosted break detail and controlled syncopation'], tuningSystem: '12-tet',
    signatureCell: 'A tightly edited break answered by a shifting reese-bass phrase', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'quantized' },
    sectionProgressions: { verse: ['Em', 'Em', 'C', 'B7'], chorus: ['Em', 'C', 'D', 'B7'] },
  },
  {
    id: 'drum-and-bass-dancefloor', worldId: 'drum-and-bass', name: 'Dancefloor Drum & Bass', origin: 'United Kingdom', era: '2000s–Present',
    description: 'High-energy DnB with a forceful break, bright lead hook and clear drop sections.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'brass', 'voice'], preferredMeters: ['4/4'], tempoRange: [170, 178],
    keySubstyles: ['Dancefloor Drum & Bass'], coreConcepts: ['big breakbeat', 'bass hook', 'build and drop', 'short vocal hook'],
    rhythmicGrammar: ['driving broken beat with snare backbeat; use fills and dropouts at section boundaries'], tuningSystem: '12-tet',
    signatureCell: 'Fast break, heavy sub and a concise synth hook', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'drum-and-bass-jump-up', worldId: 'drum-and-bass', name: 'Jump-Up', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Club-focused DnB with a direct break, repeated bass hook and concise vocal phrases.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'voice', 'sampler'], preferredMeters: ['4/4'], tempoRange: [170, 178],
    keySubstyles: ['Jump-Up'], coreConcepts: ['rolling break', 'repeated bass hook', 'call-and-response', 'drop contrast'],
    rhythmicGrammar: ['fast broken kick and snare with a repeating syncopated bass hook'], tuningSystem: '12-tet',
    signatureCell: 'Rolling break with a repeated syncopated bass hook', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['Am', 'F', 'G', 'Am'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'drum-and-bass-atmospheric', worldId: 'drum-and-bass', name: 'Atmospheric Drum & Bass', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Fast breakbeats framed by spacious pads, long melodic phrases and restrained bass movement.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'piano', 'flute'], preferredMeters: ['4/4'], tempoRange: [160, 174],
    keySubstyles: ['Intelligent DnB', 'Atmospheric Jungle'], coreConcepts: ['long break loops', 'spacious pad harmony', 'melodic counterline', 'restrained bass'],
    rhythmicGrammar: ['rolling fast break with lighter kick density and long sustained harmonic phrases'], tuningSystem: '12-tet',
    signatureCell: 'Rolling break beneath a spacious minor-key pad', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Dm7', 'Bbmaj7', 'F', 'C'], chorus: ['Bbmaj7', 'C', 'Dm7', 'Am7'] },
  },
  {
    id: 'drum-and-bass-drumfunk', worldId: 'drum-and-bass', name: 'Drumfunk', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Break-focused drum and bass that foregrounds intricate, re-edited acoustic breakbeats and detailed percussion.',
    characteristicInstruments: ['drums', 'sampler', 'sub-bass', 'synth', 'hand-percussion'], preferredMeters: ['4/4'], tempoRange: [160, 175],
    keySubstyles: ['Drumfunk'], coreConcepts: ['breakbeat editing', 'ghost-note detail', 'percussion interplay', 'sub-bass support'],
    rhythmicGrammar: ['continuous fast break with shifting ghost notes, detailed edits and a less dominant four-square backbeat'], tuningSystem: '12-tet',
    signatureCell: 'A detailed, shifting breakbeat with sub-bass anchoring the phrase', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['Am', 'F', 'G', 'Am'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
  "id": "drum-and-bass-ragga-jungle",
  "worldId": "drum-and-bass",
  "name": "Ragga Jungle",
  "origin": "United Kingdom",
  "era": "1990s–Present",
  "description": "Jungle breaks and heavyweight sub-bass combined with reggae/dancehall vocals and dub effects.",
  "characteristicInstruments": [
    "drums",
    "sub-bass",
    "sampler",
    "dub-echo",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    155,
    175
  ],
  "keySubstyles": [
    "Ragga Jungle"
  ],
  "coreConcepts": [
    "Amen chop",
    "jungle chopped vocal",
    "dub siren"
  ],
  "rhythmicGrammar": [
    "Chopped break with reggae vocal space"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Chopped break with reggae vocal space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "Am",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Congo Natty",
    "Shy FX"
  ],
  "referenceTracks": [],
  "techniques": [
    "jungle chopped vocal",
    "Amen chop",
    "Think break",
    "break rearrangement"
  ]
},
{
  "id": "drum-and-bass-darkstep",
  "worldId": "drum-and-bass",
  "name": "Darkstep",
  "origin": "United Kingdom / Europe",
  "era": "1990s–Present",
  "description": "Aggressive distorted breaks, dark atmospheres and heavily processed bass with industrial weight.",
  "characteristicInstruments": [
    "drums",
    "sub-bass",
    "distortion-guitar",
    "noise-sweep",
    "synth"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    165,
    180
  ],
  "keySubstyles": [
    "Darkstep"
  ],
  "coreConcepts": [
    "distorted break",
    "industrial bass texture",
    "darkstep stop"
  ],
  "rhythmicGrammar": [
    "Distorted break with dark sub pressure"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Distorted break with dark sub pressure",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "Am",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Technical Itch",
    "Limewax"
  ],
  "referenceTracks": [],
  "techniques": [
    "sub-bass glide",
    "Reese bass",
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
},
{
  "id": "drum-and-bass-minimal-autonomic",
  "worldId": "drum-and-bass",
  "name": "Minimal / Autonomic",
  "origin": "United Kingdom",
  "era": "2000s–Present",
  "description": "Deep sub-bass, sparse percussion, atmospheric pads and unusually large negative space.",
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
    165,
    175
  ],
  "keySubstyles": [
    "Minimal / Autonomic"
  ],
  "coreConcepts": [
    "sub-bass glide",
    "sparse break",
    "ambient negative space"
  ],
  "rhythmicGrammar": [
    "Sparse break with deep sub and space"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sparse break with deep sub and space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "Am",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Instra:mental",
    "dBridge"
  ],
  "referenceTracks": [],
  "techniques": [
    "sub-bass glide",
    "Reese bass",
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
},
{
  "id": "drum-and-bass-jazzstep",
  "worldId": "drum-and-bass",
  "name": "Jazzstep",
  "origin": "United Kingdom",
  "era": "1990s–Present",
  "description": "Atmospheric drum and bass informed by jazz harmony, sampled instrumentation and melodic movement.",
  "characteristicInstruments": [
    "drums",
    "upright-bass",
    "rhodes",
    "flute",
    "sampler"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    160,
    175
  ],
  "keySubstyles": [
    "Jazzstep"
  ],
  "coreConcepts": [
    "jazz voicing",
    "rolling break",
    "sampled jazz phrase"
  ],
  "rhythmicGrammar": [
    "Rolling break under jazz harmony"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Rolling break under jazz harmony",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "Am",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "Am",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "4hero",
    "LTJ Bukem"
  ],
  "referenceTracks": [],
  "techniques": [
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
}];

export const DRUM_AND_BASS_WORLD: GenreWorld = {
  id: 'drum-and-bass', name: 'Drum & Bass', family: 'Electronic / Dance', color: '#C7E2E0', level: 'world', kind: 'world', strictness: 'strict',
  description: 'UK sound-system music built around fast breakbeats, deep bass and contrasting melodic or MC-led sections.',
  substyles: ['Jungle', 'Liquid Drum & Bass', 'Dancefloor Drum & Bass', 'Jump-Up', 'Techstep', 'Neurofunk', 'Atmospheric Drum & Bass', 'Drumfunk'],
  artists: ['Goldie', 'Roni Size', 'LTJ Bukem', 'Photek', 'Shy FX', 'DJ Hype', 'Calibre', 'Andy C', 'Noisia', 'Camo & Krooked'],
  concepts: ['fast breakbeats', 'Amen break edits', 'rolling sub-bass', 'reese bass', 'half-time backbeat', 'builds and drops', 'MC call and response'],
  crossLinks: ['Jungle ↔ Reggae / Dub', 'UK Garage ↔ Drum & Bass', 'Breakbeat ↔ Hip-Hop'],
  roles: { drums: ['fast chopped break', 'kick and snare backbeat', 'ghost notes and break fills'], bass: ['sub-bass foundation', 'rolling bass phrase', 'reese bass hook'], synth: ['pads', 'short melodic hooks', 'modulated bass timbre'], voice: ['MC and vocal hook'] },
  tuningSystem: '12-tet', signatureCell: 'Fast syncopated breakbeat, heavy snare and rolling sub-bass',
  grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
  styleDefinitions: styles, patterns: [
  {
  "id": "tech-drum-and-bass-amen-chop",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-ragga-jungle"
  ],
  "name": "Amen chop",
  "shortName": "Amen chop",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: Amen chop",
  "tags": [
    "drum-and-bass",
    "Amen chop"
  ],
  "approaches": [
    "Amen chop"
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
    "drum-and-bass",
    "Amen chop"
  ],
  "techniques": [
    "Amen chop"
  ]
},
{
  "id": "tech-drum-and-bass-think-break",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-ragga-jungle",
    "drum-and-bass-darkstep",
    "drum-and-bass-minimal-autonomic",
    "drum-and-bass-jazzstep"
  ],
  "name": "Think break",
  "shortName": "Think break",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: Think break",
  "tags": [
    "drum-and-bass",
    "Think break"
  ],
  "approaches": [
    "Think break"
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
    "drum-and-bass",
    "Think break"
  ],
  "techniques": [
    "Think break"
  ]
},
{
  "id": "tech-drum-and-bass-reese-bass",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-darkstep",
    "drum-and-bass-minimal-autonomic"
  ],
  "name": "Reese bass",
  "shortName": "Reese bass",
  "family": "drum-and-bass",
  "category": "bass",
  "description": "Technique: Reese bass",
  "tags": [
    "drum-and-bass",
    "Reese bass"
  ],
  "approaches": [
    "Reese bass"
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
    "drum-and-bass",
    "Reese bass"
  ],
  "techniques": [
    "Reese bass"
  ]
},
{
  "id": "tech-drum-and-bass-sub-bass-glide",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-darkstep",
    "drum-and-bass-minimal-autonomic"
  ],
  "name": "sub-bass glide",
  "shortName": "sub-bass glide",
  "family": "drum-and-bass",
  "category": "bass",
  "description": "Technique: sub-bass glide",
  "tags": [
    "drum-and-bass",
    "sub-bass glide"
  ],
  "approaches": [
    "sub-bass glide"
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
    "drum-and-bass",
    "sub-bass glide"
  ],
  "techniques": [
    "sub-bass glide"
  ]
},
{
  "id": "tech-drum-and-bass-ghost-note-breakbeat",
  "worldId": "drum-and-bass",
  "styleIds": [],
  "name": "ghost-note breakbeat",
  "shortName": "ghost-note breakbeat",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: ghost-note breakbeat",
  "tags": [
    "drum-and-bass",
    "ghost-note breakbeat"
  ],
  "approaches": [
    "ghost-note breakbeat"
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
    "drum-and-bass",
    "ghost-note breakbeat"
  ],
  "techniques": [
    "ghost-note breakbeat"
  ]
},
{
  "id": "tech-drum-and-bass-break-rearrangement",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-ragga-jungle",
    "drum-and-bass-darkstep",
    "drum-and-bass-minimal-autonomic",
    "drum-and-bass-jazzstep"
  ],
  "name": "break rearrangement",
  "shortName": "break rearrangement",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: break rearrangement",
  "tags": [
    "drum-and-bass",
    "break rearrangement"
  ],
  "approaches": [
    "break rearrangement"
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
    "drum-and-bass",
    "break rearrangement"
  ],
  "techniques": [
    "break rearrangement"
  ]
},
{
  "id": "tech-drum-and-bass-halftime-switch",
  "worldId": "drum-and-bass",
  "styleIds": [],
  "name": "halftime switch",
  "shortName": "halftime switch",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: halftime switch",
  "tags": [
    "drum-and-bass",
    "halftime switch"
  ],
  "approaches": [
    "halftime switch"
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
    "drum-and-bass",
    "halftime switch"
  ],
  "techniques": [
    "halftime switch"
  ]
},
{
  "id": "tech-drum-and-bass-rolling-16th-bass",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-darkstep",
    "drum-and-bass-minimal-autonomic",
    "drum-and-bass-jazzstep"
  ],
  "name": "rolling 16th bass",
  "shortName": "rolling 16th bass",
  "family": "drum-and-bass",
  "category": "bass",
  "description": "Technique: rolling 16th bass",
  "tags": [
    "drum-and-bass",
    "rolling 16th bass"
  ],
  "approaches": [
    "rolling 16th bass"
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
    "drum-and-bass",
    "rolling 16th bass"
  ],
  "techniques": [
    "rolling 16th bass"
  ]
},
{
  "id": "tech-drum-and-bass-jungle-chopped-vocal",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-ragga-jungle"
  ],
  "name": "jungle chopped vocal",
  "shortName": "jungle chopped vocal",
  "family": "drum-and-bass",
  "category": "lead",
  "description": "Technique: jungle chopped vocal",
  "tags": [
    "drum-and-bass",
    "jungle chopped vocal"
  ],
  "approaches": [
    "jungle chopped vocal"
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
    "drum-and-bass",
    "jungle chopped vocal"
  ],
  "techniques": [
    "jungle chopped vocal"
  ]
},
{
  "id": "tech-drum-and-bass-breakbeat-density-automation",
  "worldId": "drum-and-bass",
  "styleIds": [],
  "name": "breakbeat density automation",
  "shortName": "breakbeat density automation",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Technique: breakbeat density automation",
  "tags": [
    "drum-and-bass",
    "breakbeat density automation"
  ],
  "approaches": [
    "breakbeat density automation"
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
    "drum-and-bass",
    "breakbeat density automation"
  ],
  "techniques": [
    "breakbeat density automation"
  ]
},
{
  "id": "style-drum-and-bass-ragga-jungle-signature",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-ragga-jungle"
  ],
  "name": "Ragga Jungle Signature Cell",
  "shortName": "Ragga Jungle Cell",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "drum-and-bass",
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
    "dub-echo"
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
    "drum-and-bass",
    "signature"
  ],
  "techniques": [
    "jungle chopped vocal",
    "Amen chop",
    "Think break",
    "break rearrangement"
  ]
},
{
  "id": "style-drum-and-bass-darkstep-signature",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-darkstep"
  ],
  "name": "Darkstep Signature Cell",
  "shortName": "Darkstep Cell",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "drum-and-bass",
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
    "distortion-guitar",
    "noise-sweep"
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
    "drum-and-bass",
    "signature"
  ],
  "techniques": [
    "sub-bass glide",
    "Reese bass",
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
},
{
  "id": "style-drum-and-bass-minimal-autonomic-signature",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-minimal-autonomic"
  ],
  "name": "Minimal / Autonomic Signature Cell",
  "shortName": "Minimal / Autonomic Cell",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "drum-and-bass",
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
    "drum-and-bass",
    "signature"
  ],
  "techniques": [
    "sub-bass glide",
    "Reese bass",
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
},
{
  "id": "style-drum-and-bass-jazzstep-signature",
  "worldId": "drum-and-bass",
  "styleIds": [
    "drum-and-bass-jazzstep"
  ],
  "name": "Jazzstep Signature Cell",
  "shortName": "Jazzstep Cell",
  "family": "drum-and-bass",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "drum-and-bass",
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
    "upright-bass",
    "rhodes",
    "flute"
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
    "drum-and-bass",
    "signature"
  ],
  "techniques": [
    "Think break",
    "break rearrangement",
    "rolling 16th bass"
  ]
}],
};
