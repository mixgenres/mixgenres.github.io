import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'r-and-b-deep-funk', worldId: 'r-and-b', name: 'Contemporary R&B', origin: 'United States', era: '1980s–Present',
    description: 'Vocal-led rhythm and blues with a deep pocket, syncopated bass, rich keyboard harmony and shaped drum production.',
    characteristicInstruments: ['drums', 'bass', 'synth', 'piano', 'voice'], preferredMeters: ['4/4'], tempoRange: [65, 105],
    keySubstyles: ['Contemporary R&B', 'Quiet Storm'], coreConcepts: ['lead vocal phrasing', 'deep backbeat', 'extended chords', 'bass pocket', 'vocal layering'],
    rhythmicGrammar: ['laid-back backbeat with syncopated kick and bass, leaving space around lead vocal phrases'], tuningSystem: '12-tet',
    signatureCell: 'Deep backbeat and syncopated bass under an expressive lead vocal', grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['m7', 'maj7', '9', '13'], sectionProgressions: { verse: ['Am7', 'Dm9', 'G13', 'Cmaj7'], chorus: ['Fmaj7', 'Em7', 'Dm9', 'G13'] },
  },
  {
    id: 'r-and-b-synth-funk', worldId: 'r-and-b', name: 'Neo-Soul', origin: 'United States', era: '1990s–Present',
    description: 'Soulful, jazz-informed R&B with elastic timing, extended voicings and interlocking bass, drums and keys.',
    characteristicInstruments: ['drums', 'bass', 'piano', 'electric-guitar', 'voice'], preferredMeters: ['4/4'], tempoRange: [65, 100],
    keySubstyles: ['Neo-Soul', 'Alternative R&B'], coreConcepts: ['behind-the-beat pocket', 'extended voicings', 'live interplay', 'melismatic vocal'],
    rhythmicGrammar: ['loose pocket with delayed chord attacks, syncopated bass and subtle ghost notes'], tuningSystem: '12-tet',
    signatureCell: 'Laid-back kick and snare with delayed chord voicings', grooveMechanics: { swingPercentage: 56, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    prominentChords: ['maj9', 'm9', '13', '7#9'], sectionProgressions: { verse: ['Cmaj9', 'Bbmaj9', 'Am9', 'G13'], chorus: ['Fmaj9', 'Em9', 'Dm9', 'G13'] },
  },
  {
    id: 'r-and-b-boogie', worldId: 'r-and-b', name: 'Rhythm & Blues', origin: 'United States', era: '1940s–Present',
    description: 'A broad Black American popular music tradition connecting blues-rooted song, groove and vocal expression.',
    characteristicInstruments: ['voice', 'piano', 'bass', 'drums', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [60, 120],
    keySubstyles: ['Classic R&B', 'Doo-Wop'], coreConcepts: ['blues inflection', 'vocal harmony', 'backbeat', 'call and response'],
    rhythmicGrammar: ['backbeat or rolling 12/8 pulse shaped around vocal phrasing and blues-derived accents'], tuningSystem: '12-tet',
    signatureCell: 'Expressive vocal phrase over a blues-rooted backbeat', grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
];

export const R_AND_B_WORLD: GenreWorld = {
  id: 'r-and-b', name: 'R&B', family: 'African American Popular Music', color: '#8F79A8', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'Vocal-centered popular music shaped by blues and gospel traditions, strong rhythmic identity and evolving studio production.',
  substyles: ['Classic R&B', 'Contemporary R&B', 'Quiet Storm', 'Neo-Soul', 'Alternative R&B', 'New Jack Swing', 'Doo-Wop', 'Rhythm and Blues'],
  artists: ['Ray Charles', 'Aretha Franklin', 'Stevie Wonder', 'Sade', 'D’Angelo', 'Aaliyah', 'Mary J. Blige', 'Beyoncé', 'Frank Ocean', 'H.E.R.'],
  concepts: ['lead vocal phrasing', 'blues inflection', 'gospel call and response', 'backbeat', 'syncopated bass', 'extended harmony'],
  crossLinks: ['R&B ↔ Gospel', 'R&B ↔ Soul', 'R&B ↔ Hip-Hop'],
  roles: { voice: ['lead vocal', 'backing vocal harmony', 'vocal ad-libs'], drums: ['deep backbeat', 'ghost notes', 'syncopated kick'], bass: ['syncopated bass line', 'root and approach tones'], harmony: ['extended keyboard voicings', 'guitar and keyboard answers'] },
  tuningSystem: '12-tet', signatureCell: 'Vocal phrase answered by a restrained keyboard or backing-vocal response over a deep pocket',
  grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' }, styleDefinitions: styles, patterns: [],
};
