import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_0: GenreStyleDefinition = {
        "id": "samba-bossa-bossa-nova",
        "worldId": "samba-bossa",
        "name": "Bossa Nova",
        "origin": "Rio de Janeiro (Ipanema / Copacabana)",
        "era": "Late 1950s–1960s",
        "description": "Nylon Guitar • Whispering Vocals •",
        "characteristicInstruments": [
          "acoustic-guitar",
          "piano",
          "flute",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          120,
          145
        ],
        "keySubstyles": [
          "Classic Bossa",
          "Bossa-Jazz"
        ],
        "coreConcepts": [
          "João Gilberto violão syncopated thumb bass and finger comping",
          "extended jazz harmonies (maj7, m7b5, 9, 13)",
          "whispered understated vocal delivery",
          "brush pattern on snare simulating surdo and shaker"
        ],
        "rhythmicGrammar": [
          "bossa nova guitar comping with thumb anchoring alternating bass on downbeats and fingers syncopating chords on offbeats"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "João Gilberto nylon guitar syncopation accompanying understated vocal whisper and brush snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9"
          ],
          "parte-a": [
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9",
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9"
          ],
          "parte-b": [
            "Gbmaj7",
            "B7",
            "F#m7",
            "B7",
            "Gm7",
            "C7",
            "Fmaj7",
            "C7b9"
          ],
          "coda": [
            "Gbmaj7",
            "C7b9",
            "Fmaj7",
            "Fmaj7"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "samba-bossa-pagode",
        "worldId": "samba-bossa",
        "name": "Pagode",
        "origin": "Rio de Janeiro (Fundo de Quintal)",
        "era": "Late 1970s–Present",
        "description": "Tantan • Pandeiro • Backyard Party\nWarm,",
        "characteristicInstruments": [
          "cavaquinho",
          "pandeiro",
          "tantan",
          "repinique",
          "synth"
        ],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          90,
          115
        ],
        "keySubstyles": [
          "Pagode Tradicional",
          "Pagode Romântico"
        ],
        "coreConcepts": [
          "tantan hand bass drum playing the surdo role in acoustic settings",
          "samba banjo with four strings replacing or doubling cavaquinho",
          "communal round-the-table singing (roda de samba)",
          "humorous everyday storytelling"
        ],
        "rhythmicGrammar": [
          "relaxed 2/4 acoustic swing with tantan hand slaps and sparkling pandeiro jingles"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Tantan hand bass slap answering cheerful cavaquinho intro and communal roda singalong",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "E7",
            "Am7",
            "D7"
          ],
          "verse": [
            "G",
            "E7",
            "Am7",
            "D7",
            "Bm7",
            "E7",
            "Am7",
            "D7"
          ],
          "refrão": [
            "C",
            "D7",
            "Bm7",
            "E7",
            "Am7",
            "D7",
            "G",
            "G"
          ],
          "coda": [
            "Am7",
            "D7",
            "G",
            "G"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "samba-bossa-samba-de-enredo",
        "worldId": "samba-bossa",
        "name": "Samba de Enredo",
        "origin": "Rio de Janeiro (Sambadrome / Escolas de Samba)",
        "era": "1930s–Present",
        "description": "Bateria • Surdo Accent • Carnival",
        "characteristicInstruments": [
          "surdo",
          "tamborim",
          "cavaquinho",
          "cuica",
          "brass"
        ],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          136,
          150
        ],
        "keySubstyles": [
          "Carnival Samba",
          "Escola de Samba"
        ],
        "coreConcepts": [
          "thunderous surdo drum dialogue (surdo de primeira on beat 2, surdo de resposta on beat 1)",
          "sharp syncopated tamborim teleco-teco phrasing",
          "brisk cavaquinho chord strumming",
          "massive unison choral singing"
        ],
        "rhythmicGrammar": [
          "fast 2/4 samba swing with heavy accent on beat 2 and continuous caixa snare roll"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Thunderous surdo beat 2 explosion answering rapid tamborim teleco-teco pattern and cavaquinho",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "enredo": [
            "C",
            "A7",
            "Dm",
            "G7",
            "C",
            "C7",
            "F",
            "G7"
          ],
          "chorus": [
            "C",
            "E7",
            "Am",
            "D7",
            "G7",
            "G7",
            "C",
            "C"
          ],
          "coda": [
            "G7",
            "G7",
            "C",
            "C"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "samba-bossa-samba-reggae",
        "worldId": "samba-bossa",
        "name": "Samba-Reggae",
        "origin": "Salvador da Bahia (Pelourinho / Olodum)",
        "era": "1980s–Present",
        "description": "Afro-Bahian Drums • Slow Swing •",
        "characteristicInstruments": [
          "surdo",
          "timbales",
          "repinique",
          "brass",
          "synth"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          92,
          108
        ],
        "keySubstyles": [
          "Bahian Carnival Bloc",
          "Axé Fusion"
        ],
        "coreConcepts": [
          "slowed-down reggae-infused tempo combined with Brazilian polyrhythms",
          "tuned surdo drum sections playing intricate melodic counterpoint",
          "blazing timbal hand drumming and repinique rolls",
          "Afro-Brazilian civil rights themes"
        ],
        "rhythmicGrammar": [
          "reggae offbeat accentuation fused with four tuned surdo drums in complex polyrhythm"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "just-intonation",
        "signatureCell": "Tuned surdo drum battery melodic roll exploding with blazing timbal slap and Afro-Bahian chant",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "G",
            "F",
            "E7"
          ],
          "bloco": [
            "Am",
            "G",
            "F",
            "E7",
            "Am",
            "G",
            "F",
            "E7"
          ],
          "chorus": [
            "C",
            "G",
            "Am",
            "Em",
            "F",
            "G",
            "Am",
            "Am"
          ],
          "coda": [
            "F",
            "E7",
            "Am",
            "Am"
          ]
        }
      };

export const SAMBA_BOSSA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3],
};
