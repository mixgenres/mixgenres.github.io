import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'drum-and-bass-downtempo', worldId: 'drum-and-bass', name: 'Jungle', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Fast breakbeats, rolling sub-bass, chopped breaks and sound-system pressure.',
    characteristicInstruments: ['drums', 'sub-bass', 'sampler', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [160, 180],
    keySubstyles: ['Jungle', 'Ragga Jungle'], coreConcepts: ['chopped breakbeats', 'rolling sub-bass', 'sampled breaks', 'MC call and response'],
    rhythmicGrammar: ['fast syncopated breakbeat with a strong snare on beats two and four or a half-time backbeat'],
    tuningSystem: '12-tet', signatureCell: 'Chopped breakbeat over rolling sub-bass',
    grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    prominentChords: ['i', 'bVII', 'bVI'], sectionProgressions: { verse: ['Am', 'G', 'F', 'G'], chorus: ['Am', 'F', 'G', 'Am'] },
  },
  {
    id: 'drum-and-bass-trip-hop', worldId: 'drum-and-bass', name: 'Liquid Drum & Bass', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Fast, flowing breakbeats with warm sub, lyrical harmony and spacious melodic layers.',
    characteristicInstruments: ['drums', 'sub-bass', 'piano', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [168, 178],
    keySubstyles: ['Liquid', 'Soulful DnB'], coreConcepts: ['rolling breaks', 'melodic bass', 'extended harmony', 'legato pads'],
    rhythmicGrammar: ['rolling breakbeat with a clear backbeat, light syncopation and long melodic phrases'], tuningSystem: '12-tet',
    signatureCell: 'Rolling break, deep sub-bass and a sustained chord answer', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Dm7', 'Bbmaj7', 'F', 'C'], chorus: ['Bbmaj7', 'C', 'Dm7', 'Am7'] },
  },
  {
    id: 'drum-and-bass-idm', worldId: 'drum-and-bass', name: 'Techstep / Neurofunk', origin: 'United Kingdom', era: '1990s–Present',
    description: 'Tightly edited breakbeats, hard-edged bass design and tense minor-key harmony.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler'], preferredMeters: ['4/4'], tempoRange: [165, 180],
    keySubstyles: ['Techstep', 'Neurofunk'], coreConcepts: ['precise break edits', 'reese bass', 'dark minor harmony', 'filter modulation'],
    rhythmicGrammar: ['fast broken kick pattern with a heavy snare backbeat and controlled syncopation'], tuningSystem: '12-tet',
    signatureCell: 'Tight break edits against a modulated reese bass', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'quantized' },
    sectionProgressions: { verse: ['Em', 'Em', 'C', 'B7'], chorus: ['Em', 'C', 'D', 'B7'] },
  },
  {
    id: 'drum-and-bass-dubstep', worldId: 'drum-and-bass', name: 'Dancefloor Drum & Bass', origin: 'United Kingdom', era: '2000s–Present',
    description: 'High-energy DnB with a forceful break, bright lead hook and clear drop sections.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'brass', 'voice'], preferredMeters: ['4/4'], tempoRange: [170, 178],
    keySubstyles: ['Dancefloor', 'Jump-Up'], coreConcepts: ['big breakbeat', 'bass hook', 'build and drop', 'short vocal hook'],
    rhythmicGrammar: ['driving broken beat with snare backbeat; use fills and dropouts at section boundaries'], tuningSystem: '12-tet',
    signatureCell: 'Fast break, heavy sub and a concise synth hook', grooveMechanics: { swingPercentage: 52, anticipationOffsetSteps: 0, microtimingFeel: 'pushed' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
];

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
  styleDefinitions: styles, patterns: [],
};
