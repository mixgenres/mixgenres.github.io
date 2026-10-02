import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "tango-marcato-4",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Marcato en 4 (Orquesta Típica)",
          "family": "Marcato Accompaniment",
          "category": "ostinato",
          "description": "Strict four-beat staccato accompaniment providing rhythmic",
          "tags": [
            "pulse",
            "tango",
            "marcato",
            "staccato",
            "dance"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": [
            "piano",
            "bass",
            "strings",
            "guitar"
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
          "durationGrid": [
            0.25,
            0.25,
            0.25,
            0.25
          ],
          "accentProfile": [
            0.95,
            0.8,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.9,
            0.75,
            0.85,
            0.75
          ],
          "articulations": [
            "staccato",
            "martellato"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-m4-staccato-crisp",
              "parentPatternId": "tango-marcato-4",
              "name": "D’Arienzo Ultra-Staccato",
              "variationType": "dense",
              "probability": 0.6,
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.95
              ],
              "description": "Crisp, driving staccato characteristic of Juan"
            },
            {
              "id": "tango-m4-with-eighth-fill",
              "parentPatternId": "tango-marcato-4",
              "name": "Marcato en 4 with 8th-note turnaround",
              "variationType": "cadence",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.9,
                0.7,
                0.85,
                0.6,
                0.95,
                0.7
              ],
              "description": "Enlivened beat 3-4 with running eighth"
            },
            {
              "id": "tango-marcato-4-variant-yumba-osvaldo-pugliese",
              "parentPatternId": "tango-marcato-4",
              "name": "Yumba (Osvaldo Pugliese)",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Pugliese’s celebrated deep on-beat \"Yum\" (beats",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.35,
                0.95,
                0.3
              ],
              "velocityProfile": [
                1,
                0.4,
                0.9,
                0.35
              ],
              "articulation": "cluster",
              "hitGrid": [
                "cluster",
                "strappata",
                "cluster",
                "strappata"
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "tango-m4-strappata-arrastre",
              "parentPatternId": "tango-marcato-4",
              "name": "Marcato con Strappata y Arrastre",
              "variationType": "accentShift",
              "probability": 0.35,
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.85,
                1,
                0.9
              ],
              "articulation": "strappata",
              "hitGrid": [
                "strappata",
                "arrastre",
                "strappata",
                "arrastre"
              ],
              "description": "Bass strappata slap on strong beats with arrastre drag on offbeats"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-marcato-2",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Marcato en 2 (Troilo / Di Sarli)",
          "family": "Marcato Accompaniment",
          "category": "ostinato",
          "description": "Heavier two-beat pulse on 1 and",
          "tags": [
            "pulse",
            "tango",
            "marcato-2",
            "lyrical"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": [
            "piano",
            "bass",
            "guitar",
            "strings"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            1,
            0.88
          ],
          "velocityProfile": [
            0.92,
            0.78
          ],
          "articulations": [
            "pesado",
            "legato-staccato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "tango-m2-arrastre-lead",
              "parentPatternId": "tango-marcato-2",
              "name": "Marcato en 2 with Arrastre sweep",
              "variationType": "ornamented",
              "probability": 0.5,
              "onsetGrid": [
                14,
                15,
                0,
                8
              ],
              "accentProfile": [
                0.4,
                0.6,
                1,
                0.85
              ],
              "description": "Preceded by chromatic drag into beat"
            },
            {
              "id": "tango-marcato-2-v-02-safe",
              "parentPatternId": "tango-marcato-2",
              "name": "Marcato en 2 (Troilo / Di Sarli) — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.95,
                0.96
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-332-piazzolla",
          "worldId": "tango",
          "styleIds": ["tango-tango-nuevo"],
          "name": "3+3+2 Nuevo Tango Pulse (Piazzolla)",
          "family": "Additive Rhythms",
          "category": "ostinato",
          "description": "Piazzolla’s definitive 3+3+2 eighth-note syncopation across",
          "tags": [
            "piazzolla",
            "332",
            "nuevo-tango",
            "electric-guitar",
            "piano"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano",
            "rhythm-guitar",
            "drums"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": [
            "piano",
            "electric-guitar",
            "bandoneon",
            "bass",
            "drums"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.9,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.9
          ],
          "articulations": [
            "staccato-accent"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo",
            "development"
          ],
          "variants": [
            {
              "id": "tango-332-dense-16th",
              "parentPatternId": "tango-332-piazzolla",
              "name": "3+3+2 Sixteenth-Note Subdivision",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                1,
                0.6,
                0.9,
                0.6,
                0.85,
                0.6
              ],
              "description": "Double-time sixteenth note 3+3+2 additive groove."
            },
            {
              "id": "tango-332-chiche-slap",
              "parentPatternId": "tango-332-piazzolla",
              "name": "3+3+2 with Chiche / Percussive Hit",
              "variationType": "ornamented",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.4,
                0.9,
                0.4,
                0.9,
                0.5
              ],
              "description": "Accents on 0, 6, 12 layered"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-anchor-14",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Arrastre Anchor",
          "family": "Arrastre",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "tango",
            "arrastre",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            5,
            7,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.8571428571428571,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "tango-anchor-14-v-01",
              "parentPatternId": "tango-anchor-14",
              "name": "Arrastre Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                5,
                7,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "tango-anchor-14-v-02",
              "parentPatternId": "tango-anchor-14",
              "name": "Arrastre Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                5,
                7,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "arrastre"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
