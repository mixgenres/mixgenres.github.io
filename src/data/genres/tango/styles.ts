import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const build = (id: string, name: string, description: string, tempoRange: [number, number], instruments: string[], concepts: string[], groove: string, chords: Record<string, string[]>, sections: NonNullable<GenreStyleDefinition['arrangementSections']>): GenreStyleDefinition => ({
  id: `tango-${id}`, worldId: 'tango', name, origin: 'Buenos Aires / Río de la Plata', era: 'Golden Age (1935–1955)', description,
  characteristicInstruments: instruments, preferredMeters: ['4/4', '2/4'], tempoRange,
  keySubstyles: [name], coreConcepts: concepts, rhythmicGrammar: [groove],
  signatureCell: groove, prominentChords: ['minor tonic', 'dominant 7(b9)', 'diminished passing chord', 'chromatic approach'],
  tuningSystem: '12-tet', grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 1, microtimingFeel: 'pushed' },
  sectionProgressions: chords, arrangementSections: sections,
});

const pugliesePersonnel = ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'string-ensemble', 'voice'];
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

const troiloPersonnel = ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'voice', 'string-ensemble'];
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

export const TANGO_CANCION_STYLE = build('cancion', 'Tango Canción', 'Vocal tango song form: an instrumental introduction frames a lyric-led verse, instrumental interlude, and closing return.', [88, 116], ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin', 'cello', 'string-ensemble'],
  ['sung narrative and clear diction', 'instrumental interludes', 'lyrical bandoneon countermelody', 'rubato at phrase ends'],
  'The singer leads over restrained marcato; bandoneon and violin answer in the vocal gaps.',
  { intro: ['Am', 'Dm', 'E7', 'Am'], verse: ['Am', 'Dm', 'G7', 'C', 'F', 'Dm', 'E7', 'Am'], interlude: ['Dm', 'G7', 'C', 'F', 'Dm', 'E7', 'Am', 'Am'], coda: ['Dm', 'E7', 'Am', 'Am'] }, [
    { key: 'intro', label: 'Instrumental introduction', kind: 'intro', bars: 8, intensity: 'low', instruments: ['bandoneon', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon', tempoFeel: 'rubato introduction' },
    { key: 'verse', label: 'Vocal verse', kind: 'verse', bars: 16, intensity: 'medium', instruments: ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin'], leadInstrumentId: 'voice' },
    { key: 'interlude', label: 'Orchestral interlude', kind: 'interlude', bars: 8, intensity: 'high', instruments: ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello', 'string-ensemble'], leadInstrumentId: 'bandoneon' },
    { key: 'verse-return', label: 'Verse return', kind: 'verse', bars: 16, intensity: 'high', instruments: ['voice', 'bandoneon', 'piano', 'upright-bass', 'violin', 'cello'], leadInstrumentId: 'voice' },
    { key: 'coda', label: 'Coda', kind: 'coda', bars: 4, intensity: 'low', instruments: ['bandoneon', 'piano', 'upright-bass'], leadInstrumentId: 'bandoneon', tempoFeel: 'ritardando' },
  ]);

const STYLE_2: GenreStyleDefinition = {
        "id": "tango-milonga",
        "worldId": "tango",
        "name": "Milonga",
        "origin": "Río de la Plata",
        "era": "Late 19th Century–Present",
        "description": "Fast • Habanera Syncopation • Bouncy\nFast,",
        "characteristicInstruments": ["bandoneon", "violin", "piano", "upright-bass", "guitar"],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          96,
          116
        ],
        "keySubstyles": [
          "Milonga Ciudadana",
          "Milonga Campera"
        ],
        "coreConcepts": [
          "habanera / milonga syncopated rhythm",
          "snappy high-speed footwork (traspié)",
          "bright staccato bandoneón chords",
          "joyful urban spirit"
        ],
        "rhythmicGrammar": [
          "strict 2/4 milonga syncopation: [1, 1-and-a, 2, 2-and] played staccatissimo"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crisp 2/4 habanera milonga syncopation on piano and bandoneon with traspie violin leap",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "D",
            "A7",
            "D",
            "A7"
          ],
          "verse": [
            "D",
            "A7",
            "D",
            "A7",
            "D",
            "G",
            "A7",
            "D"
          ],
          "coda": [
            "A7",
            "A7",
            "D",
            "D"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "tango-tango-electronico",
        "worldId": "tango",
        "name": "Tango Electrónico",
        "origin": "Paris / Buenos Aires",
        "era": "2000s–Present",
        "description": "Bandoneon-led electrotango with a steady electronic pulse, deep bass, and sharply edited acoustic phrases.",
        "characteristicInstruments": ["bandoneon", "synth", "drums", "sampler", "synth", "guitar", "piano"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          90,
          115
        ],
        "keySubstyles": [
          "Electrotango",
          "Tango Lounge"
        ],
        "coreConcepts": [
          "trip-hop and electronic drum programming",
          "vintage vinyl bandoneón sample loops",
          "deep sub-bass pulses with nylon guitar comping",
          "sensual downtempo lounge atmosphere"
        ],
        "rhythmicGrammar": [
          "electronic 4/4 beat with heavy kick on 1 and 3, crisp snare on 2 and 4, and bandoneón syncopation"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Dusty vintage bandoneon sample looping over deep trip-hop sub-bass and crisp electronic snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Gm",
            "A7",
            "Dm"
          ],
          "groove": [
            "Dm",
            "Gm",
            "C",
            "F",
            "Bb",
            "Gm",
            "A7",
            "Dm"
          ],
          "coda": [
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ]
        }
        ,"arrangementSections": [
          { "key": "intro", "label": "Filtered bandoneon intro", "kind": "intro", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "sampler", "synth"], "leadInstrumentId": "bandoneon", "tempoFeel": "steady electronic pulse, filtered entrance" },
          { "key": "groove", "label": "Electrotango groove", "kind": "groove", "bars": 16, "intensity": "medium", "instruments": ["bandoneon", "synth", "drums", "sampler", "synth", "guitar", "piano"], "leadInstrumentId": "bandoneon" },
          { "key": "breakdown", "label": "Bandoneon breakdown", "kind": "breakdown", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "sampler", "piano"], "leadInstrumentId": "bandoneon", "tempoFeel": "pulse thins; tempo stays fixed" },
          { "key": "return", "label": "Full groove return", "kind": "drop", "bars": 16, "intensity": "peak", "instruments": ["bandoneon", "synth", "drums", "sampler", "synth", "guitar", "piano"], "leadInstrumentId": "bandoneon" },
          { "key": "coda", "label": "Electronic coda", "kind": "coda", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "synth", "sampler"], "leadInstrumentId": "bandoneon" }
        ]
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "tango-tango-nuevo",
        "worldId": "tango",
        "name": "Tango Nuevo",
        "origin": "Buenos Aires / Paris",
        "era": "1960s–1990s",
        "description": "3+3+2 • Dissonance • Bandoneón Virtuosity\nAstor",
        "characteristicInstruments": ["bandoneon", "violin", "guitar", "piano", "upright-bass"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          110,
          140
        ],
        "keySubstyles": [
          "Piazzolla Style",
          "Concert Tango"
        ],
        "coreConcepts": [
          "iconic 3+3+2 syncopated accentuation",
          "jazz chord harmonies (m9, maj7#11)",
          "virtuosic bandoneón solo lines",
          "contrast between aggression and weeping lyricism"
        ],
        "rhythmicGrammar": [
          "relentless 3+3+2 eighth-note pulse with sharp accents on notes 1, 4, and 7"
        ],
        "danceTags": [
          "listening",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "3+3+2 bandoneon syncopated stab answering virtuosic weeping violin glissando",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Dm7",
            "F#dim",
            "E7b9"
          ],
          "theme": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7",
            "Fmaj7",
            "Bm7b5",
            "E7b9",
            "Am7"
          ],
          "coda": [
            "F#dim",
            "E7b9",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "tango-tango-tradicional",
        "worldId": "tango",
        "name": "Tango Tradicional",
        "origin": "Buenos Aires / Montevideo",
        "era": "Golden Age (1935–1955)",
        "description": "Marcato • Bandoneón • Golden Age\nThe",
        "characteristicInstruments": ["bandoneon", "violin", "piano", "upright-bass", "cello", "string-ensemble"],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          120,
          136
        ],
        "keySubstyles": [
          "Estilo D'Arienzo",
          "Estilo Di Sarli"
        ],
        "coreConcepts": [
          "Marcato en 4 (accented downbeats 1, 2, 3, 4)",
          "Síncopa and arrastre (bass drag into the downbeat)",
          "bandoneón bellows phrasing",
          "dramatic dynamic stops"
        ],
        "rhythmicGrammar": [
          "Marcato en 4: heavy walking downbeats with sharp percussive chiques on violin"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Arrastre bass drag resolving into sharp Marcato en 4 bandoneon chord and violin staccato",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "tema-a": [
            "Am",
            "Dm",
            "E7",
            "Am",
            "Am",
            "Dm",
            "E7",
            "Am"
          ],
          "coda": [
            "E7",
            "E7",
            "Am",
            "Am"
          ]
        },
        "arrangementSections": [
          { "key": "intro", "label": "Piano and bandoneon introduction", "kind": "intro", "bars": 4, "intensity": "medium", "instruments": ["piano", "upright-bass", "bandoneon"], "leadInstrumentId": "bandoneon", "tempoFeel": "rubato pickup into steady marcato" },
          { "key": "tema-a", "label": "Main theme", "kind": "theme", "bars": 16, "intensity": "medium", "instruments": ["bandoneon", "violin", "piano", "upright-bass", "cello", "string-ensemble"], "leadInstrumentId": "bandoneon" },
          { "key": "tema-b", "label": "Contrasting theme", "kind": "theme", "bars": 16, "intensity": "high", "instruments": ["bandoneon", "violin", "piano", "upright-bass", "cello", "string-ensemble"], "leadInstrumentId": "violin" },
          { "key": "variation", "label": "Instrumental variation", "kind": "variation", "bars": 8, "intensity": "peak", "instruments": ["bandoneon", "violin", "piano", "upright-bass", "cello", "string-ensemble"], "leadInstrumentId": "bandoneon" },
          { "key": "coda", "label": "Coda", "kind": "coda", "bars": 4, "intensity": "high", "instruments": ["bandoneon", "violin", "piano", "upright-bass"], "leadInstrumentId": "bandoneon" }
        ]
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "tango-tango-vals",
        "worldId": "tango",
        "name": "Tango Vals",
        "origin": "Río de la Plata",
        "era": "Golden Age (1930s–1950s)",
        "description": "Lyrical • 3/4 Waltzing • Flowing\nFlowing,",
        "characteristicInstruments": ["violin", "bandoneon", "piano", "upright-bass", "cello", "string-ensemble"],
        "preferredMeters": [
          "3/4"
        ],
        "tempoRange": [
          60,
          75
        ],
        "keySubstyles": [
          "Vals Porteño",
          "Vals Criollo"
        ],
        "coreConcepts": [
          "continuous rotational movement and turns (giros)",
          "expressive lyrical violin melodies in triple meter",
          "rhythmic accent on beat 1 with light 2 and 3",
          "nostalgic themes"
        ],
        "rhythmicGrammar": [
          "flowing 3/4 waltz meter with subtle syncopations across bar lines"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Flowing 3/4 violin waltz melody swelling over buoyant piano downbeat and bandoneon sigh",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "vals-a": [
            "Am",
            "Dm",
            "G7",
            "C",
            "F",
            "Dm",
            "E7",
            "Am"
          ],
          "coda": [
            "E7",
            "E7",
            "Am",
            "Am"
          ]
        }
      };

const GUARDIA_VIEJA_STYLE: GenreStyleDefinition = {
  ...build('guardia-vieja', 'Guardia Vieja', 'Small early tango ensemble with short melodic exchanges over a clear habanera pulse.',
    [108, 128], ['bandoneon', 'guitar', 'violin', 'upright-bass', 'piano'],
    ['short melodic exchanges', 'habanera pulse', 'acoustic articulation'],
    'A dry 2/4 habanera motor supports short bandoneon and violin phrases.',
    { intro: ['Am', 'E7'], tema: ['Am', 'Dm', 'E7', 'Am'], trio: ['C', 'G7', 'C', 'E7'], coda: ['Dm', 'E7', 'Am', 'Am'] }, [
      { key: 'intro', label: 'Habanera introduction', kind: 'intro', bars: 4, intensity: 'low', instruments: ['guitar', 'upright-bass', 'bandoneon'], leadInstrumentId: 'bandoneon' },
      { key: 'tema', label: 'Main theme', kind: 'theme', bars: 16, intensity: 'medium', instruments: ['bandoneon', 'guitar', 'violin', 'upright-bass', 'piano'], leadInstrumentId: 'bandoneon' },
      { key: 'trio', label: 'Violin exchange', kind: 'response', bars: 8, intensity: 'medium', instruments: ['guitar', 'upright-bass', 'violin', 'piano'], leadInstrumentId: 'violin' },
      { key: 'coda', label: 'Closing phrase', kind: 'coda', bars: 4, intensity: 'low', instruments: ['bandoneon', 'guitar', 'upright-bass'], leadInstrumentId: 'bandoneon' },
    ]),
  preferredMeters: ['2/4'], era: 'Early tango',
};

const PIAZZOLLA_STYLE = build('piazzolla', 'Piazzolla', 'Concert tango with contrapuntal lines, hard ostinati and lyrical release.',
  [118, 146], ['bandoneon', 'guitar', 'piano', 'violin', 'upright-bass'],
  ['3+3+2 ostinato', 'counterpoint', 'hard attack and lyrical contrast', 'jazz harmony'],
  'Interlocking 3+3+2 ostinati alternate with spacious contrapuntal and lyrical passages.',
  { intro: ['Dm9', 'G7b9'], tema: ['Dm9', 'G7b9', 'Cmaj7', 'A7'], development: ['Am', 'Bb7', 'E7b9', 'Am'], coda: ['Dm', 'E7', 'Am', 'Am'] }, [
    { key: 'intro', label: 'Free introduction', kind: 'intro', bars: 4, intensity: 'low', instruments: ['bandoneon', 'piano'], leadInstrumentId: 'bandoneon' },
    { key: 'tema', label: 'Concert theme', kind: 'theme', bars: 16, intensity: 'high', instruments: ['bandoneon', 'guitar', 'piano', 'violin', 'upright-bass'], leadInstrumentId: 'bandoneon' },
    { key: 'development', label: 'Contrapuntal development', kind: 'development', bars: 16, intensity: 'peak', instruments: ['bandoneon', 'guitar', 'piano', 'violin', 'upright-bass'], leadInstrumentId: 'violin' },
    { key: 'lyric', label: 'Lyrical release', kind: 'bridge', bars: 8, intensity: 'low', instruments: ['bandoneon', 'piano', 'violin', 'upright-bass'], leadInstrumentId: 'bandoneon' },
    { key: 'coda', label: 'Concert coda', kind: 'coda', bars: 4, intensity: 'high', instruments: ['bandoneon', 'guitar', 'piano', 'violin', 'upright-bass'], leadInstrumentId: 'bandoneon' },
  ]);

export const TANGO_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, PUGLIESE_STYLE, TROILO_STYLE, TANGO_CANCION_STYLE, GUARDIA_VIEJA_STYLE, PIAZZOLLA_STYLE],
};
