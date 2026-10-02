import type { GenreStyleDefinition } from '../../../schema';

const build = (id: string, name: string, description: string, tempoRange: [number, number], instruments: string[], concepts: string[], groove: string, chords: Record<string, string[]>, sections: NonNullable<GenreStyleDefinition['arrangementSections']>): GenreStyleDefinition => ({
  id: `tango-${id}`, worldId: 'tango', name, origin: 'Buenos Aires / Río de la Plata', era: 'Golden Age (1935–1955)', description,
  characteristicInstruments: instruments, preferredMeters: ['4/4', '2/4'], tempoRange,
  keySubstyles: [name], coreConcepts: concepts, rhythmicGrammar: [groove],
  signatureCell: groove, prominentChords: ['minor tonic', 'dominant 7(b9)', 'diminished passing chord', 'chromatic approach'],
  tuningSystem: '12-tet', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 1, microtimingFeel: 'pushed' },
  sectionProgressions: chords, arrangementSections: sections,
});

const pugliesePersonnel = ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'strings', 'voice'];
export const PUGLIESE_STYLE = build('pugliese', 'Tango Pugliese', 'Tense, orchestral tango with weighty yumba, elastic pauses, and dramatic ensemble accents.', [112, 132], pugliesePersonnel,
  ['yumba piano and bass ostinato', 'dramatic silences and holds', 'strong dynamic contrast', 'orchestral unison attacks'],
  'A heavy marcato/yumba motor alternates with suspended pauses before sharp tutti attacks.',
  { intro: ['Am', 'E7', 'Am', 'E7'], A: ['Am', 'Dm', 'E7', 'Am'], B: ['Dm', 'G7', 'C', 'E7'], coda: ['Dm', 'E7', 'Am', 'Am'] }, [
    { key: 'intro', label: 'Yumba introduction', kind: 'intro', bars: 4, intensity: 'medium', instruments: ['piano', 'upright-bass', 'bandoneon'], leadInstrumentId: 'bandoneon' },
    { key: 'tema', label: 'Main theme', kind: 'theme', bars: 16, intensity: 'high', instruments: pugliesePersonnel.slice(0, 5), leadInstrumentId: 'bandoneon' },
    { key: 'pause', label: 'Suspended break', kind: 'break', bars: 4, intensity: 'low', instruments: ['piano', 'cello'] },
    { key: 'variation', label: 'Orchestral variation', kind: 'variation', bars: 16, intensity: 'peak', instruments: pugliesePersonnel, leadInstrumentId: 'violin' },
    { key: 'coda', label: 'Coda', kind: 'coda', bars: 4, intensity: 'high', instruments: ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello'], leadInstrumentId: 'bandoneon' },
  ]);

const troiloPersonnel = ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'voice', 'strings'];
export const TROILO_STYLE = build('troilo', 'Tango Troilo', 'Warm, lyrical orquesta típica writing with expressive bandoneon phrasing and conversational violin answers.', [116, 132], troiloPersonnel,
  ['expressive bandoneon lead', 'legato violin responses', 'singable melodic phrasing', 'marcato support with restrained rubato'],
  'A lyrical melody breathes over a steady marcato pulse, with violin answering the bandoneon between phrases.',
  { intro: ['Dm', 'A7', 'Dm', 'A7'], A: ['Dm', 'Gm', 'A7', 'Dm'], B: ['Bb', 'F', 'Gm', 'A7'], coda: ['Gm', 'A7', 'Dm', 'Dm'] }, [
    { key: 'intro', label: 'Bandoneon pickup', kind: 'intro', bars: 4, intensity: 'low', instruments: ['bandoneon', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon', tempoFeel: 'rubato pickup' },
    { key: 'tema', label: 'Melodic theme', kind: 'theme', bars: 16, intensity: 'medium', instruments: troiloPersonnel.slice(0, 5), leadInstrumentId: 'bandoneon' },
    { key: 'respuesta', label: 'Violin response', kind: 'response', bars: 8, intensity: 'high', instruments: ['violin', 'bandoneon', 'piano', 'upright-bass', 'cello'], leadInstrumentId: 'violin' },
    { key: 'canto', label: 'Tango canción', kind: 'verse', bars: 16, intensity: 'medium', instruments: troiloPersonnel, leadInstrumentId: 'voice' },
    { key: 'coda', label: 'Coda', kind: 'coda', bars: 4, intensity: 'high', instruments: ['bandoneon', 'violin', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon' },
  ]);

export const TANGO_CANCION_STYLE = build('cancion', 'Tango Canción', 'Vocal tango song form: an instrumental introduction frames a lyric-led verse, instrumental interlude, and closing return.', [88, 116], ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin', 'cello', 'strings'],
  ['sung narrative and clear diction', 'instrumental interludes', 'lyrical bandoneon countermelody', 'rubato at phrase ends'],
  'The singer leads over restrained marcato; bandoneon and violin answer in the vocal gaps.',
  { intro: ['Am', 'Dm', 'E7', 'Am'], verse: ['Am', 'Dm', 'G7', 'C', 'F', 'Dm', 'E7', 'Am'], interlude: ['Dm', 'G7', 'C', 'F', 'Dm', 'E7', 'Am', 'Am'], coda: ['Dm', 'E7', 'Am', 'Am'] }, [
    { key: 'intro', label: 'Instrumental introduction', kind: 'intro', bars: 8, intensity: 'low', instruments: ['bandoneon', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon', tempoFeel: 'rubato introduction' },
    { key: 'verse', label: 'Vocal verse', kind: 'verse', bars: 16, intensity: 'medium', instruments: ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin'], leadInstrumentId: 'voice' },
    { key: 'interlude', label: 'Orchestral interlude', kind: 'interlude', bars: 8, intensity: 'high', instruments: ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'strings'], leadInstrumentId: 'bandoneon' },
    { key: 'verse-return', label: 'Verse return', kind: 'verse', bars: 16, intensity: 'high', instruments: ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin', 'cello'], leadInstrumentId: 'voice' },
    { key: 'coda', label: 'Coda', kind: 'coda', bars: 4, intensity: 'low', instruments: ['bandoneon', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon', tempoFeel: 'ritardando' },
  ]);
