import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'uk-bass-garage', worldId: 'uk-bass', name: 'UK Garage / 2-Step', origin: 'London, United Kingdom', era: '1990s–Present',
    description: 'Swinging, syncopated 2-step drums, deep bass, clipped chords and vocal chops.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [128, 138],
    keySubstyles: ['2-Step Garage', 'Speed Garage'], coreConcepts: ['syncopated kick', 'snare on 2 and 4', 'swung hats', 'vocal chops', 'sub-bass'],
    rhythmicGrammar: ['two-step kick displacement with a firm backbeat, shuffled or swung subdivisions and bass syncopation'], tuningSystem: '12-tet',
    signatureCell: 'Skipped two-step kick, crisp backbeat and swung high percussion', grooveMechanics: { swingPercentage: 56, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am7', 'Fmaj7', 'C', 'G'], chorus: ['Fmaj7', 'G', 'Am7', 'Am7'] },
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
    id: 'uk-bass-downtempo', worldId: 'uk-bass', name: 'UK Funky', origin: 'London, United Kingdom', era: '2000s–Present',
    description: 'Percussive house and garage hybrid with syncopated drums, bass and Afro-Caribbean percussion.',
    characteristicInstruments: ['drums', 'sub-bass', 'hand-percussion', 'synth', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 132],
    keySubstyles: ['UK Funky', 'Tribal House'], coreConcepts: ['rolling percussion', 'syncopated house kick', 'bass-led groove', 'vocal calls'],
    rhythmicGrammar: ['four-on-floor foundation varied by syncopated hand percussion and bass accents'], tuningSystem: '12-tet',
    signatureCell: 'House pulse over interlocking syncopated percussion', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
    sectionProgressions: { verse: ['Am', 'G', 'F', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
  {
    id: 'uk-bass-ambient', worldId: 'uk-bass', name: 'Future Garage', origin: 'United Kingdom', era: '2000s–Present',
    description: 'Sparse, shuffled garage rhythms with deep sub, atmospheric harmony and fragmented vocal samples.',
    characteristicInstruments: ['drums', 'sub-bass', 'synth', 'sampler', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 135],
    keySubstyles: ['Future Garage', 'Bass Music'], coreConcepts: ['sparse 2-step', 'shuffled percussion', 'atmospheric pads', 'chopped vocal texture'],
    rhythmicGrammar: ['broken 2-step beat with irregular kick placement and loose shuffled high percussion'], tuningSystem: '12-tet',
    signatureCell: 'Sparse swung garage break under a long atmospheric chord', grooveMechanics: { swingPercentage: 57, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Em7', 'Cmaj7', 'G', 'D'], chorus: ['Cmaj7', 'D', 'Em7', 'Em7'] },
  },
];

export const UK_BASS_WORLD: GenreWorld = {
  id: 'uk-bass', name: 'UK Bass', family: 'Electronic / Dance', color: '#8A6DA8', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'A UK club continuum of garage, dubstep and bass music shaped by syncopated drums, sub-bass and sound-system culture.',
  substyles: ['UK Garage', '2-Step', 'Speed Garage', 'Bassline', 'Dubstep', 'UK Funky', 'Future Garage', 'Grime'],
  artists: ['Todd Edwards', 'MJ Cole', 'Artful Dodger', 'Burial', 'El-B', 'Horsepower Productions', 'Skream', 'Wookie', 'Dizzee Rascal', 'Roska'],
  concepts: ['2-step swing', 'syncopated kick', 'half-time backbeat', 'sub-bass', 'vocal chops', 'sound-system weight'],
  crossLinks: ['UK Garage ↔ R&B', 'Dubstep ↔ Reggae / Dub', 'Grime ↔ Hip-Hop'],
  roles: { drums: ['syncopated two-step', 'half-time backbeat', 'shuffled high percussion'], bass: ['sub-bass', 'syncopated bassline', 'long bass drop'], synth: ['short chord stabs', 'atmospheric pads', 'modulated bass'], voice: ['chopped vocal sample', 'MC cadence'] },
  tuningSystem: '12-tet', signatureCell: 'Syncopated UK club drums and deep sub-bass', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
  styleDefinitions: styles, patterns: [],
};
