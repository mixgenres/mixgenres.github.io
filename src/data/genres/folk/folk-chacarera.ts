import type { GenreStyleDefinition } from '../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
  id: 'folk-chacarera', worldId: 'folk', name: 'Argentine Chacarera',
  origin: 'Santiago del Estero, Argentina', era: 'Traditional–Present',
  description: 'A dance-song in compound meter, pairing guitar strumming and bombo legüero accents with sung coplas and instrumental responses.',
  characteristicInstruments: ['voice', 'guitar', 'bombo-leguero', 'violin', 'bass', 'accordion'],
  preferredMeters: ['6/8', '3/4'], tempoRange: [108, 132], keySubstyles: ['Chacarera simple', 'Chacarera doble'],
  coreConcepts: ['compound duple dance pulse', 'bombo legüero accents', 'sung coplas and refrain', 'instrumental interludes', 'regional Argentine folk'],
  rhythmicGrammar: ['A lilting 6/8 pulse layers guitar strums with bombo accents; sung coplas alternate with a refrain and instrumental interlude.'],
  signatureCell: 'Guitar strum and bombo legüero articulate a lilting 6/8 dance pulse beneath a sung copla.',
  tuningSystem: '12-tet', sectionProgressions: {
    intro: ['Am', 'G', 'F', 'E7'], verse: ['Am', 'G', 'F', 'E7'], refrain: ['C', 'G', 'F', 'E7'], interlude: ['Am', 'G', 'F', 'E7'], coda: ['F', 'E7', 'Am', 'Am'],
  },
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 1, microtimingFeel: 'straight' },
  arrangementSections: [
    { key: 'intro', label: 'Instrumental introduction', kind: 'intro', bars: 8, intensity: 'medium', instruments: ['guitar', 'bombo-leguero', 'violin'], leadInstrumentId: 'guitar' },
    { key: 'copla', label: 'Copla', kind: 'verse', bars: 16, intensity: 'medium', instruments: ['voice', 'guitar', 'bombo-leguero', 'bass'], leadInstrumentId: 'voice' },
    { key: 'refrain', label: 'Refrain', kind: 'chorus', bars: 8, intensity: 'high', instruments: ['voice', 'guitar', 'bombo-leguero', 'violin', 'bass'], leadInstrumentId: 'voice' },
    { key: 'interlude', label: 'Instrumental interlude', kind: 'interlude', bars: 8, intensity: 'high', instruments: ['guitar', 'bombo-leguero', 'violin', 'accordion', 'bass'], leadInstrumentId: 'violin' },
    { key: 'copla-return', label: 'Copla return', kind: 'verse', bars: 16, intensity: 'medium', instruments: ['voice', 'guitar', 'bombo-leguero', 'bass'], leadInstrumentId: 'voice' },
    { key: 'coda', label: 'Coda', kind: 'coda', bars: 4, intensity: 'high', instruments: ['guitar', 'bombo-leguero', 'violin', 'voice'], leadInstrumentId: 'violin' },
  ],
};
