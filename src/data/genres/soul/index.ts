import type { GenreWorld, GenreStyleDefinition } from '../../schema';

const styles: GenreStyleDefinition[] = [
  {
    id: 'soul-deep-funk', worldId: 'soul', name: 'Classic Soul', origin: 'United States', era: '1950s–Present',
    description: 'Expressive lead singing, gospel-rooted response, a firm backbeat and a melodic rhythm section.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'piano', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [65, 120],
    keySubstyles: ['Southern Soul', 'Memphis Soul'], coreConcepts: ['gospel vocal phrasing', 'call and response', 'backbeat', 'horn response', 'melodic bass'],
    rhythmicGrammar: ['strong backbeat with a deep pocket, tambourine or handclap lift and short phrase-ending fills'], tuningSystem: '12-tet',
    signatureCell: 'Expressive vocal call answered by horns or backing voices over a deep backbeat', grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Am7', 'Dm7', 'G7', 'Cmaj7'], chorus: ['Fmaj7', 'G7', 'Em7', 'Am7'] },
  },
  {
    id: 'soul-p-funk', worldId: 'soul', name: 'Motown Soul', origin: 'Detroit, United States', era: '1960s–1970s',
    description: 'Polished pop-soul with a propulsive bass line, tambourine backbeat, bright strings and vocal-group replies.',
    characteristicInstruments: ['voice', 'bass', 'drums', 'strings', 'tambourine'], preferredMeters: ['4/4'], tempoRange: [90, 130],
    keySubstyles: ['Motown', 'Northern Soul'], coreConcepts: ['melodic bass', 'tambourine backbeat', 'string lift', 'vocal-group response'],
    rhythmicGrammar: ['driving straight backbeat, busy melodic bass and tambourine accents on two and four'], tuningSystem: '12-tet',
    signatureCell: 'Propulsive bass, tambourine backbeat and a short vocal-group answer', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    sectionProgressions: { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'C', 'Am'] },
  },
  {
    id: 'soul-synth-funk', worldId: 'soul', name: 'Southern Soul', origin: 'Memphis and Muscle Shoals, United States', era: '1960s–Present',
    description: 'Raw, gospel-inflected singing over earthy drums, bass, organ and restrained horn punctuation.',
    characteristicInstruments: ['voice', 'organ', 'bass', 'drums', 'brass'], preferredMeters: ['4/4', '12/8'], tempoRange: [60, 110],
    keySubstyles: ['Memphis Soul', 'Muscle Shoals Soul'], coreConcepts: ['gospel inflection', 'organ support', 'horn punches', 'restrained groove'],
    rhythmicGrammar: ['laid-back backbeat or 12/8 shuffle with organ swells and compact horn answers'], tuningSystem: '12-tet',
    signatureCell: 'Organ and horn response around a gospel-inflected lead vocal', grooveMechanics: { swingPercentage: 55, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' },
    sectionProgressions: { verse: ['Am', 'D7', 'Am', 'E7'], chorus: ['Dm7', 'G7', 'C', 'Am'] },
  },
];

export const SOUL_WORLD: GenreWorld = {
  id: 'soul', name: 'Soul', family: 'African American Popular Music', color: '#C76C46', level: 'world', kind: 'world', strictness: 'flexible',
  description: 'Black American popular music joining gospel vocal expression and call-and-response with blues, R&B and dance grooves.',
  substyles: ['Classic Soul', 'Southern Soul', 'Memphis Soul', 'Motown', 'Northern Soul', 'Philly Soul', 'Deep Soul', 'Neo-Soul'],
  artists: ['Ray Charles', 'Sam Cooke', 'Aretha Franklin', 'Otis Redding', 'James Brown', 'Marvin Gaye', 'Al Green', 'Curtis Mayfield', 'Bill Withers', 'Gladys Knight'],
  concepts: ['gospel-rooted vocal phrasing', 'call and response', 'backbeat', 'melodic bass', 'horn and organ answers', 'tambourine lift'],
  crossLinks: ['Soul ↔ Gospel', 'Soul ↔ R&B', 'Soul ↔ Funk'],
  roles: { voice: ['lead vocal', 'backing-vocal response', 'ad-libs'], drums: ['deep backbeat', 'shuffle or straight pocket'], bass: ['melodic bass line', 'root and fifth motion'], harmony: ['organ and piano support', 'string or horn punctuation'], percussion: ['tambourine on backbeat', 'handclap accents'] },
  tuningSystem: '12-tet', signatureCell: 'Lead vocal call and backing response over melodic bass and a grounded backbeat',
  grooveMechanics: { swingPercentage: 53, anticipationOffsetSteps: 0, microtimingFeel: 'laid-back' }, styleDefinitions: styles, patterns: [],
};
