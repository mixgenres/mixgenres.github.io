import type { MusicalPattern, GenreWorld } from '../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "rd-08-reggae-bass-lead",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Reggae Bass Lead",
          "family": "Roots Reggae",
          "category": "bass",
          "description": "Longer, melodic bass line with rests;",
          "tags": [
            "bass-led"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            9,
            14,
            16,
            22,
            25,
            30
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.75,
            0.55,
            0.88,
            0.62,
            0.72,
            0.58
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bass-led"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "rd-dub-drop",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-dub"],
          "name": "Dub Dropout & Echo Fragment",
          "family": "Dub Space",
          "category": "break",
          "transitionType": "fill",
          "description": "Removes selected skank/drum attacks and leaves",
          "tags": [
            "dub",
            "dropout",
            "echo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar",
            "organ",
            "horn-section"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86
          ],
          "syncopationRating": 0.65,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "delay"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-dub-drop-v-sparse",
              "parentPatternId": "rd-dub-drop",
              "name": "Dub Dropout & Echo Fragment — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                2,
                14
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "rd-dub-drop-v-shift",
              "parentPatternId": "rd-dub-drop",
              "name": "Dub Dropout & Echo Fragment — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                2,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "dub",
            "dropout",
            "echo"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "rd-11-dub-dropout",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub subtraction / return",
          "family": "Dub",
          "category": "break",
          "transitionType": "fill",
          "description": "Bass/drum dropout with a final pickup",
          "tags": [
            "dropout",
            "version"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "bass",
            "drums",
            "dub-echo"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            15
          ],
          "accentProfile": [
            0.9,
            0.65
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "dropout",
            " version"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dropout",
            "version"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rd-15-dub-version-tag",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Version Tag",
          "family": "Dub",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A short bass-and-drum tag announces a",
          "tags": [
            "version",
            "tag"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "fill"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "bass",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            8,
            12,
            15
          ],
          "accentProfile": [
            0.65,
            0.78,
            1
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" tag"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "bridge",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "version",
            "tag"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rd-07-skank-guitar",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Skank Guitar",
          "family": "Roots Reggae",
          "category": "cell",
          "description": "Short clipped guitar chord on the",
          "tags": [
            "skank"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "electric-guitar",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.72,
            0.68,
            0.7,
            0.75
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "skank"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "rd-09-bubble-organ",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Bubble Organ",
          "family": "Roots Reggae",
          "category": "cell",
          "description": "Short organ bubble fills the offbeat",
          "tags": [
            "organ bubble"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.5,
            0.62,
            0.48,
            0.66
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "organ bubble"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "rd-one-drop",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots"],
          "name": "One-Drop Foundation",
          "family": "Reggae Drums",
          "category": "groove",
          "description": "Kick and rimshot center the third",
          "tags": [
            "one-drop",
            "reggae",
            "drums"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "kick",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84
          ],
          "syncopationRating": 0.7,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "kick",
            "rimshot"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-one-drop-v-sparse",
              "parentPatternId": "rd-one-drop",
              "name": "One-Drop Foundation — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "rd-one-drop-v-shift",
              "parentPatternId": "rd-one-drop",
              "name": "One-Drop Foundation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "one-drop",
            "reggae",
            "drums"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "rd-steppers",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-steppers"],
          "name": "Steppers Foundation",
          "family": "Steppers Drums",
          "category": "groove",
          "description": "Four-to-the-floor kick with a deep bass",
          "tags": [
            "steppers",
            "sound-system"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "kick"
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
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "kick"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-steppers-v-sparse",
              "parentPatternId": "rd-steppers",
              "name": "Steppers Foundation — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "rd-steppers-v-shift",
              "parentPatternId": "rd-steppers",
              "name": "Steppers Foundation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "steppers",
            "sound-system"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "rd-06-one-drop-core",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots"],
          "name": "One Drop Core",
          "family": "Roots Reggae",
          "category": "groove",
          "description": "Drum pattern leaves the first beat",
          "tags": [
            "one-drop"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12
          ],
          "accentProfile": [
            0.45,
            0.8,
            0.7,
            0.9
          ],
          "syncopationRating": 0.25,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "one-drop"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "rd-12-steppers-kick-grid",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Steppers four-kick pulse",
          "family": "Digital Reggae",
          "category": "groove",
          "description": "Steppers kick architecture: four quarter-note kicks,",
          "tags": [
            "steppers"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "kick",
            "drums"
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
          "accentProfile": [
            0.9,
            0.72,
            0.85,
            0.75
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Digital Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "steppers"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rd-14-dub-horn-reply",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Horn Reply",
          "family": "Dub / Roots",
          "category": "interactionPattern",
          "description": "Short horn stab answers a vocal",
          "tags": [
            "horn reply"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "trombone"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            8,
            12,
            24,
            28
          ],
          "accentProfile": [
            0.65,
            0.8,
            0.6,
            0.78
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub / Roots; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "horn reply"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "rd-skank",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots"],
          "name": "Offbeat Skank",
          "family": "Reggae Skank",
          "category": "ostinato",
          "description": "Short guitar/organ chord attacks on the",
          "tags": [
            "skank",
            "reggae",
            "offbeat"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.76,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "staccato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-skank-v-sparse",
              "parentPatternId": "rd-skank",
              "name": "Offbeat Skank — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                2,
                10
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "rd-skank-v-shift",
              "parentPatternId": "rd-skank",
              "name": "Offbeat Skank — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "skank",
            "reggae",
            "offbeat"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "rd-reggae-bass",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots"],
          "name": "Melodic Reggae Bass",
          "family": "Reggae Bass",
          "category": "ostinato",
          "description": "Long, syncopated bass notes occupy the",
          "tags": [
            "reggae",
            "bass",
            "melodic"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass",
            "sub-bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
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
            0.72,
            0.9,
            0.65,
            0.88,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-reggae-bass-v-sparse",
              "parentPatternId": "rd-reggae-bass",
              "name": "Melodic Reggae Bass — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                6,
                11
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "rd-reggae-bass-v-shift",
              "parentPatternId": "rd-reggae-bass",
              "name": "Melodic Reggae Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "reggae",
            "bass",
            "melodic"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "rd-13-reggae-percussion-skitter",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Reggae shaker cross-rhythm",
          "family": "Percussion",
          "category": "ostinato",
          "description": "Sparse shaker placements that sit around",
          "tags": [
            "shaker",
            "ghost"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "shaker",
            "maracas"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.32,
            0.42,
            0.35,
            0.45
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "shaker",
            " ghost"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Percussion; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "shaker",
            "ghost"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

export const REGGAE_DUB_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
          "id": "rd-10-dub-echo-fragment",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Echo Fragment",
          "family": "Dub",
          "category": "texture",
          "description": "Isolated snare/perc fragment sent into echo/reverb",
          "tags": [
            "dub",
            "echo",
            "send"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "snare",
            "shaker"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            12
          ],
          "accentProfile": [
            0.7,
            0.55
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" echo"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dub",
            "echo",
            "send"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": REGGAE_DUB_WORLD_PATTERNS_GROOVE,
  "ostinato": REGGAE_DUB_WORLD_PATTERNS_OSTINATO,
  "break": REGGAE_DUB_WORLD_PATTERNS_BREAK,
  "cell": REGGAE_DUB_WORLD_PATTERNS_CELL,
  "bass": REGGAE_DUB_WORLD_PATTERNS_BASS,
  "texture": REGGAE_DUB_WORLD_PATTERNS_TEXTURE,
  "interactionPattern": REGGAE_DUB_WORLD_PATTERNS_INTERACTIONPATTERN,
  "cadence": REGGAE_DUB_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"cell","index":0},{"category":"bass","index":0},{"category":"cell","index":1},{"category":"texture","index":0},{"category":"break","index":1},{"category":"groove","index":3},{"category":"ostinato","index":2},{"category":"interactionPattern","index":0},{"category":"cadence","index":0}];

export const REGGAE_DUB_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
