import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'disco-disco', worldId: 'disco', name: 'Classic Disco', origin: 'United States', era: '1970s–Present',
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
    id: 'disco-afrobeat', worldId: 'disco', name: 'Hi-NRG Disco', origin: 'United States / Europe', era: 'Late 1970s–1980s',
    description: 'Fast, propulsive disco with sequenced bass, bright synths and emphatic vocal choruses.',
    characteristicInstruments: ['drums', 'synth', 'bass', 'strings', 'voice'], preferredMeters: ['4/4'], tempoRange: [125, 140],
    keySubstyles: ['Hi-NRG', 'Italo Disco'], coreConcepts: ['fast four-on-floor', 'sequenced bass', 'synth hook', 'dramatic chorus'],
    rhythmicGrammar: ['unbroken four-on-floor with driving eighth-note hats and rising phrase energy'], tuningSystem: '12-tet',
    signatureCell: 'Fast four-on-floor and sequenced bass under a high synth hook', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['Am', 'F', 'C', 'G'], chorus: ['F', 'G', 'Am', 'Am'] },
  },
];

export const DISCO_WORLD: GenreWorld = {
  id: 'disco', name: 'Disco', family: 'Dance / Soul', color: '#E28743', level: 'world', kind: 'world', strictness: 'strict',
  description: 'Dance music centered on a steady four-on-the-floor pulse, syncopated bass, bright ensemble arrangements and vocal choruses.',
  substyles: ['Classic Disco', 'Philadelphia Soul', 'Orchestral Disco', 'Boogie', 'Post-Disco', 'Hi-NRG', 'Italo Disco', 'Euro Disco'],
  artists: ['Chic', 'Donna Summer', 'Bee Gees', 'Diana Ross', 'The Trammps', 'Sylvester', 'Giorgio Moroder', 'Sister Sledge', 'KC and the Sunshine Band', 'Earth, Wind & Fire'],
  concepts: ['four-on-the-floor kick', 'offbeat open hi-hat', 'syncopated bass', 'string and horn hits', 'clipped rhythm guitar', 'vocal chorus'],
  crossLinks: ['Disco ↔ Soul', 'Disco ↔ House', 'Disco ↔ Funk'],
  roles: { drums: ['steady four-on-the-floor kick', 'snare or clap on two and four', 'open offbeat hi-hat'], bass: ['octave bass groove', 'syncopated root and fifth'], harmony: ['rhythm guitar chops', 'piano and string stabs'], lead: ['vocal hook', 'string or synth response'] },
  tuningSystem: '12-tet', signatureCell: 'Four-on-the-floor kick with offbeat hats, octave bass and string punctuation',
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' }, styleDefinitions: styles, patterns: [],
};
