import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "r-and-b",
  "name": "R&B",
  "family": "R&B",
  "color": "#18bff6",
  "description": "R&B is an independent musical world. R&B idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary R&B",
  "meter": "4/4",
  "tempo": [74, 90],
  "instruments": ["voice", "rhodes", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["rhodes", "guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["dorian"],
  "chordQualities": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
  "harmonicRhythm": "bar",
  "cadences": ["Cmaj7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["contemporary R&B sparse beat and vocal runs", "Motown tambourine backbeat and bass countermelody", "Southern soul organ and gospel vocal response", "Memphis soul dry horn stabs and guitar pocket", "Philly soul strings and layered vocal refrain", "quiet storm intimate electric piano and long vocal phrases", "new jack swing swung machine sixteenths", "neo soul behind-beat drums and extended Rhodes voicings", "alternative R&B fragmented beat and textural vocal"],
  "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary-randb",
      "name": "Contemporary R&B",
      "description": "Modern R&B leaves deliberate holes around the vocal: syncopated sub bass carries the pocket, dry kick and snare stay sparse, and Rhodes or synth replies change between verse and refrain. The vocal patch is a pitch guide, not a recorded singer.",
      "patterns": [
        "syncopated sub-bass",
        "sparse programmed backbeat",
        "Rhodes and synth replies"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Am7",
        "Dm9",
        "Fmaj7",
        "E7",
        "G7",
        "Cmaj7"
],
      "meter": "4/4",
      "tempo": [
        74,
        90
],
      "scale": "aeolian",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "rhodes",
                "synth"
        ],
        "bass": [
                "synth-bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "Am7",
                "Am7",
                "Fmaj7",
                "E7"
        ],
        "verse": [
                "Am7",
                "Dm9",
                "Fmaj7",
                "E7"
        ],
        "chorus": [
                "Cmaj7",
                "G7",
                "Am7",
                "Fmaj7"
        ],
        "bridge": [
                "Dm9",
                "Fmaj7",
                "E7",
                "E7"
        ],
        "outro": [
                "Am7",
                "Fmaj7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "syncopated-sub",
      "form": [
        {
                "label": "intro",
                "bars": 4
        },
        {
                "label": "verse",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 8
        },
        {
                "label": "bridge",
                "bars": 4
        },
        {
                "label": "chorus",
                "bars": 12
        },
        {
                "label": "outro",
                "bars": 4
        }
],
      "groove": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 8
},
      "cells": [
        {
                "name": "syncopated sub-bass voice Vocal pocket statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0.25,
                        1,
                        2.25,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "syncopated sub-bass voice Vocal pocket cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2.5,
                        3,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "syncopated sub-bass rhodes Rhodes replies statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        0.5,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "syncopated sub-bass rhodes Rhodes replies cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "syncopated sub-bass synth Soft chord lift statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "syncopated sub-bass synth Soft chord lift cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0.75,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "syncopated sub-bass synth bass Sub syncopation statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.75,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "syncopated sub-bass synth bass Sub syncopation cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0,
                        1.25,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "syncopated sub-bass drums Kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1,
                        1.5,
                        2,
                        2.75,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "hat",
                        "kick",
                        "hat",
                        "snare"
                ]
        },
        {
                "name": "syncopated sub-bass drums Kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        1.5,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "snare",
                        "hat",
                        "kick",
                        "snare",
                        "openHat"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "rhodes": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "synth": [
                "staccato",
                "legato",
                "filter-sweep",
                "accent"
        ],
        "synth-bass": [
                "staccato",
                "legato",
                "slide",
                "ghost-note",
                "accent"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "legato"
        },
        "synth:harmony": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "filter-sweep",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "synth-bass:bass": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "slide",
                        "ghost-note",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.68,
        "bassForward": 0.72,
        "width": 0.55,
        "brightness": 0.62,
        "compressionRatio": 1.8,
        "transientSnap": 0.82,
        "subHarmonics": 0.22,
        "sidechainDucking": 0.08,
        "delaySend": 0.07,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "motown",
      "name": "Motown",
      "description": "Detroit soul pairs a moving bass line with a firm backbeat, bright tambourine eighths, clipped piano and guitar replies, and strings that open the refrain. The lead guide answers in phrase gaps; practice the bass pickup and refrain lift.",
      "patterns": [
        "tambourine backbeat and moving bass",
        "piano-guitar interlock",
        "string lift and vocal answer"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "C",
        "Am7",
        "F",
        "G",
        "Dm7",
        "E7",
        "G7"
],
      "meter": "4/4",
      "tempo": [
        104,
        120
],
      "scale": "major",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "piano",
                "guitar",
                "string-ensemble"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums",
                "tambourine"
        ]
},
      "progressions": {
        "intro": [
                "C",
                "Am7",
                "F",
                "G"
        ],
        "verse": [
                "C",
                "Am7",
                "F",
                "G"
        ],
        "chorus": [
                "F",
                "G",
                "C",
                "Am7"
        ],
        "bridge": [
                "Dm7",
                "G7",
                "C",
                "E7"
        ],
        "outro": [
                "F",
                "G",
                "C"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "countermelody",
      "form": [
        {
                "label": "intro",
                "bars": 4
        },
        {
                "label": "verse",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 8
        },
        {
                "label": "bridge",
                "bars": 4
        },
        {
                "label": "chorus",
                "bars": 12
        },
        {
                "label": "outro",
                "bars": 4
        }
],
      "groove": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 5
},
      "cells": [
        {
                "name": "tambourine backbeat and moving bass voice Vocal call statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "tambourine backbeat and moving bass voice Vocal call cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2.5,
                        3,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "tambourine backbeat and moving bass piano Piano answers statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "tambourine backbeat and moving bass piano Piano answers cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        1,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "tambourine backbeat and moving bass guitar Offbeat chops statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "tambourine backbeat and moving bass guitar Offbeat chops cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.75,
                        2.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "tambourine backbeat and moving bass string ensemble String lift statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "tambourine backbeat and moving bass string ensemble String lift cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        1,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "tambourine backbeat and moving bass bass Moving bass line statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        0.5,
                        1.25,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "tambourine backbeat and moving bass bass Moving bass line cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.5,
                        3,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "tambourine backbeat and moving bass drums Two-and-four kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "snare",
                        "kick",
                        "snare"
                ]
        },
        {
                "name": "tambourine backbeat and moving bass drums Two-and-four kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        2.5,
                        3,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "hat",
                        "tom",
                        "snare",
                        "snare"
                ]
        },
        {
                "name": "tambourine backbeat and moving bass tambourine Tambourine eighths statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "tambourine"
                ],
                "onsets": [
                        0,
                        0.5,
                        1,
                        1.5,
                        2,
                        2.5,
                        3,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent"
        },
        {
                "name": "tambourine backbeat and moving bass tambourine Tambourine eighths cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "tambourine"
                ],
                "onsets": [
                        2,
                        2.5,
                        3,
                        3.25,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "piano": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "guitar": [
                "legato",
                "vibrato",
                "slide",
                "short-chord-stab",
                "legato-single-note",
                "accent",
                "staccato"
        ],
        "string-ensemble": [
                "legato",
                "tenuto",
                "accent",
                "staccato",
                "tremolo"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ],
        "tambourine": [
                "accent",
                "ghost",
                "roll",
                "staccato"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "piano:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "slide",
                        "short-chord-stab",
                        "legato-single-note",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "staccato",
                "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
                "allowedTechniques": [
                        "legato",
                        "tenuto",
                        "accent",
                        "staccato",
                        "tremolo"
                ],
                "defaultTechnique": "legato"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
                "allowedTechniques": [
                        "accent",
                        "ghost",
                        "roll",
                        "staccato"
                ],
                "defaultTechnique": "staccato"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.74,
        "bassForward": 0.58,
        "width": 0.38,
        "brightness": 0.62,
        "compressionRatio": 1.65,
        "transientSnap": 0.84,
        "subHarmonics": 0,
        "sidechainDucking": 0,
        "delaySend": 0.02,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "southern-soul",
      "name": "Southern Soul",
      "description": "Southern soul leans on a loping gospel backbeat: leave space for the lead call, let organ answer with held chords, then let guitar and horns punctuate the shout. Build from a lean verse into stronger chorus responses instead of looping a full band.",
      "patterns": [
        "gospel call and answer",
        "organ over loping backbeat",
        "horn shout and turnaround"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "C7",
        "F7",
        "G7",
        "Dm7",
        "Bb7"
],
      "meter": "4/4",
      "tempo": [
        80,
        96
],
      "scale": "blues",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "organ",
                "guitar",
                "horn-section"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums",
                "tambourine"
        ]
},
      "progressions": {
        "intro": [
                "C7",
                "C7",
                "F7",
                "C7"
        ],
        "verse": [
                "C7",
                "C7",
                "F7",
                "C7"
        ],
        "chorus": [
                "F7",
                "F7",
                "C7",
                "C7"
        ],
        "bridge": [
                "Dm7",
                "G7",
                "F7",
                "C7"
        ],
        "outro": [
                "F7",
                "G7",
                "C7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "gospel-answer",
      "form": [
        {
                "label": "intro",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 12
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 12
        },
        {
                "label": "bridge",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 16
        },
        {
                "label": "outro",
                "bars": 4
        }
],
      "groove": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung",
        "humanizeJitterMs": 10
},
      "cells": [
        {
                "name": "gospel call and answer voice Gospel call statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        1,
                        1.75,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "gospel call and answer voice Gospel call cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2,
                        2.75,
                        3.25,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "gospel call and answer organ Organ response statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "organ"
                ],
                "onsets": [
                        1,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "gospel call and answer organ Organ response cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "organ"
                ],
                "onsets": [
                        0,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "gospel call and answer guitar Guitar chop statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "gospel call and answer guitar Guitar chop cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.75,
                        2.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "gospel call and answer horn section Horn punctuation statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "gospel call and answer horn section Horn punctuation cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        2.5,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "gospel call and answer bass Soul bass walk statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "gospel call and answer bass Soul bass walk cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "gospel call and answer drums Loping kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1,
                        2,
                        2.75,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "kick",
                        "hat",
                        "snare"
                ]
        },
        {
                "name": "gospel call and answer drums Loping kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        1.5,
                        2,
                        3,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "snare",
                        "hat",
                        "kick",
                        "snare",
                        "openHat"
                ]
        },
        {
                "name": "gospel call and answer tambourine Tambourine lift statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "tambourine"
                ],
                "onsets": [
                        0.5,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent"
        },
        {
                "name": "gospel call and answer tambourine Tambourine lift cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "tambourine"
                ],
                "onsets": [
                        1,
                        1.5,
                        2.5,
                        3,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "organ": [
                "legato",
                "accent",
                "staccato",
                "tenuto"
        ],
        "guitar": [
                "legato",
                "vibrato",
                "slide",
                "short-chord-stab",
                "legato-single-note",
                "accent",
                "staccato"
        ],
        "horn-section": [
                "accent",
                "staccato",
                "legato",
                "tenuto",
                "fall"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ],
        "tambourine": [
                "accent",
                "ghost",
                "roll",
                "staccato"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "organ:harmony": {
                "allowedTechniques": [
                        "legato",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "tenuto"
        },
        "guitar:harmony": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "slide",
                        "short-chord-stab",
                        "legato-single-note",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "staccato",
                "variantId": "solid-electric"
        },
        "horn-section:harmony": {
                "allowedTechniques": [
                        "accent",
                        "staccato",
                        "legato",
                        "tenuto",
                        "fall"
                ],
                "defaultTechnique": "staccato"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
                "allowedTechniques": [
                        "accent",
                        "ghost",
                        "roll",
                        "staccato"
                ],
                "defaultTechnique": "staccato"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.68,
        "bassForward": 0.58,
        "width": 0.4,
        "brightness": 0.55,
        "compressionRatio": 1.6,
        "transientSnap": 0.8,
        "subHarmonics": 0,
        "sidechainDucking": 0,
        "delaySend": 0.04,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "memphis-soul",
      "name": "Memphis Soul",
      "description": "Memphis soul is dry and economical: a tight kick-snare pocket carries clipped guitar, a warm organ bed, and short horn answers. Let the rhythm section stay steady while horns enter at vocal gaps and section turns.",
      "patterns": [
        "dry horn punctuation",
        "clipped guitar and organ pocket",
        "bass pickup into backbeat"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "C7",
        "F7",
        "G7",
        "Dm7"
],
      "meter": "4/4",
      "tempo": [
        92,
        108
],
      "scale": "blues",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "guitar",
                "organ",
                "horn-section"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "C7",
                "C7",
                "F7",
                "C7"
        ],
        "verse": [
                "C7",
                "C7",
                "F7",
                "C7"
        ],
        "chorus": [
                "F7",
                "F7",
                "C7",
                "C7"
        ],
        "bridge": [
                "Dm7",
                "G7",
                "F7",
                "C7"
        ],
        "outro": [
                "F7",
                "G7",
                "C7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff-root",
      "form": [
        {
                "label": "intro",
                "bars": 4
        },
        {
                "label": "verse",
                "bars": 12
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 12
        },
        {
                "label": "horn-break",
                "bars": 4
        },
        {
                "label": "chorus",
                "bars": 12
        },
        {
                "label": "outro",
                "bars": 4
        }
],
      "groove": {
        "swingPercentage": 51,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 6
},
      "cells": [
        {
                "name": "dry horn punctuation voice Vocal phrase statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "dry horn punctuation voice Vocal phrase cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2.5,
                        3.25,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "dry horn punctuation guitar Dry guitar chops statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "dry horn punctuation guitar Dry guitar chops cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.5,
                        1.75,
                        2.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "dry horn punctuation organ Organ bed statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "organ"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "dry horn punctuation organ Organ bed cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "organ"
                ],
                "onsets": [
                        1,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "dry horn punctuation horn section Horn answers statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "dry horn punctuation horn section Horn answers cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        2.5,
                        3.25,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "dry horn punctuation bass Pocket bass line statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1.5,
                        2,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "dry horn punctuation bass Pocket bass line cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "dry horn punctuation drums Stax backbeat statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        1.75,
                        2,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "snare",
                        "hat",
                        "kick",
                        "snare"
                ]
        },
        {
                "name": "dry horn punctuation drums Stax backbeat cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1,
                        2,
                        2.75,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "kick",
                        "hat",
                        "snare"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "guitar": [
                "legato",
                "vibrato",
                "slide",
                "short-chord-stab",
                "legato-single-note",
                "accent",
                "staccato"
        ],
        "organ": [
                "legato",
                "accent",
                "staccato",
                "tenuto"
        ],
        "horn-section": [
                "accent",
                "staccato",
                "legato",
                "tenuto",
                "fall"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "guitar:harmony": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "slide",
                        "short-chord-stab",
                        "legato-single-note",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "staccato",
                "variantId": "solid-electric"
        },
        "organ:harmony": {
                "allowedTechniques": [
                        "legato",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "tenuto"
        },
        "horn-section:harmony": {
                "allowedTechniques": [
                        "accent",
                        "staccato",
                        "legato",
                        "tenuto",
                        "fall"
                ],
                "defaultTechnique": "staccato"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.8,
        "bassForward": 0.55,
        "width": 0.34,
        "brightness": 0.53,
        "compressionRatio": 1.55,
        "transientSnap": 0.84,
        "subHarmonics": 0,
        "sidechainDucking": 0,
        "delaySend": 0.015,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "philly-soul",
      "name": "Philly Soul",
      "description": "Philly soul balances a steady dance-floor rhythm section with sustained string harmony, bright horn marks, and hand percussion. Keep the verse narrow; widen strings and refrain together, then strip to piano and congas for the turnaround.",
      "patterns": [
        "string-section lift",
        "piano and conga interlock",
        "horn accents into refrain"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Cmaj7",
        "Am7",
        "Fmaj7",
        "G13",
        "Dm9",
        "Em7",
        "A7"
],
      "meter": "4/4",
      "tempo": [
        96,
        112
],
      "scale": "major",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "piano",
                "string-ensemble",
                "horn-section"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums",
                "congas"
        ]
},
      "progressions": {
        "intro": [
                "Cmaj7",
                "Am7",
                "Fmaj7",
                "G13"
        ],
        "verse": [
                "Cmaj7",
                "Am7",
                "Fmaj7",
                "G13"
        ],
        "chorus": [
                "Fmaj7",
                "G13",
                "Cmaj7",
                "Am7"
        ],
        "bridge": [
                "Dm9",
                "Em7",
                "Fmaj7",
                "G13"
        ],
        "outro": [
                "Fmaj7",
                "G13",
                "Cmaj7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "orchestral-lift",
      "form": [
        {
                "label": "intro",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "break",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 16
        },
        {
                "label": "outro",
                "bars": 8
        }
],
      "groove": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 5
},
      "cells": [
        {
                "name": "string-section lift voice Refrain lead statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.5,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "string-section lift voice Refrain lead cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2,
                        2.75,
                        3.25,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "string-section lift piano Piano pulse statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "string-section lift piano Piano pulse cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "string-section lift string ensemble Sustained strings statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "string-section lift string ensemble Sustained strings cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        0,
                        1.5,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "string-section lift horn section Horn blocks statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "string-section lift horn section Horn blocks cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "horn-section"
                ],
                "onsets": [
                        2.5,
                        3.25,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "string-section lift bass Bass glide statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "string-section lift bass Bass glide cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "string-section lift drums Dance-floor kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "snare",
                        "kick",
                        "snare"
                ]
        },
        {
                "name": "string-section lift drums Dance-floor kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1,
                        2,
                        2.75,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "snare",
                        "kick",
                        "tom",
                        "snare"
                ]
        },
        {
                "name": "string-section lift congas Conga syncopation statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "congas"
                ],
                "onsets": [
                        0.5,
                        1.5,
                        2.5,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent"
        },
        {
                "name": "string-section lift congas Conga syncopation cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "congas"
                ],
                "onsets": [
                        1,
                        1.75,
                        2.5,
                        3,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "piano": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "string-ensemble": [
                "legato",
                "tenuto",
                "accent",
                "staccato",
                "tremolo"
        ],
        "horn-section": [
                "accent",
                "staccato",
                "legato",
                "tenuto",
                "fall"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ],
        "congas": [
                "slap",
                "open",
                "muffled",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "piano:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
                "allowedTechniques": [
                        "legato",
                        "tenuto",
                        "accent",
                        "staccato",
                        "tremolo"
                ],
                "defaultTechnique": "legato"
        },
        "horn-section:harmony": {
                "allowedTechniques": [
                        "accent",
                        "staccato",
                        "legato",
                        "tenuto",
                        "fall"
                ],
                "defaultTechnique": "staccato"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        },
        "congas:percussion": {
                "allowedTechniques": [
                        "slap",
                        "open",
                        "muffled",
                        "roll"
                ],
                "defaultTechnique": "open"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.48,
        "bassForward": 0.48,
        "width": 0.78,
        "brightness": 0.64,
        "compressionRatio": 1.55,
        "transientSnap": 0.58,
        "subHarmonics": 0,
        "sidechainDucking": 0,
        "delaySend": 0.1,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "quiet-storm",
      "name": "Quiet Storm",
      "description": "Quiet storm favors a slow, intimate pocket: electric piano and smooth bass sustain into the room, the kick and snare stay sparse, and the lead gets long breaths. A late string or synth pad widens the refrain without filling the gaps.",
      "patterns": [
        "spacious electric-piano voicings",
        "slow bass and sparse backbeat",
        "late pad and vocal lift"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Am9",
        "Fmaj7",
        "Dm9",
        "E7",
        "Cmaj7",
        "G6"
],
      "meter": "4/4",
      "tempo": [
        64,
        80
],
      "scale": "minor",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "rhodes",
                "string-ensemble",
                "synth"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "Am9",
                "Fmaj7",
                "Dm9",
                "E7"
        ],
        "verse": [
                "Am9",
                "Fmaj7",
                "Dm9",
                "E7"
        ],
        "chorus": [
                "Cmaj7",
                "G6",
                "Am9",
                "Fmaj7"
        ],
        "bridge": [
                "Dm9",
                "Fmaj7",
                "E7",
                "E7"
        ],
        "outro": [
                "Am9",
                "Fmaj7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "sustained-root",
      "form": [
        {
                "label": "intro",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "bridge",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 16
        },
        {
                "label": "outro",
                "bars": 8
        }
],
      "groove": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 7
},
      "cells": [
        {
                "name": "spacious electric-piano voicings voice Long vocal line statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "spacious electric-piano voicings voice Long vocal line cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        1.5,
                        2.5,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "spacious electric-piano voicings rhodes Open Rhodes chords statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "spacious electric-piano voicings rhodes Open Rhodes chords cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        1,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "spacious electric-piano voicings string ensemble Late string bed statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "spacious electric-piano voicings string ensemble Late string bed cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "string-ensemble"
                ],
                "onsets": [
                        0,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "spacious electric-piano voicings synth Soft pad bloom statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0
                ],
                "cycleLength": 1,
                "durations": [
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "spacious electric-piano voicings synth Soft pad bloom cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "spacious electric-piano voicings bass Held bass notes statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        2
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "spacious electric-piano voicings bass Held bass notes cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1.5,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "spacious electric-piano voicings drums Sparse slow kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        2,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "snare",
                        "hat"
                ]
        },
        {
                "name": "spacious electric-piano voicings drums Sparse slow kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1.5,
                        2,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "openHat"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "rhodes": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "string-ensemble": [
                "legato",
                "tenuto",
                "accent",
                "staccato",
                "tremolo"
        ],
        "synth": [
                "staccato",
                "legato",
                "filter-sweep",
                "accent"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "legato"
        },
        "string-ensemble:harmony": {
                "allowedTechniques": [
                        "legato",
                        "tenuto",
                        "accent",
                        "staccato",
                        "tremolo"
                ],
                "defaultTechnique": "legato"
        },
        "synth:harmony": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "filter-sweep",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.3,
        "bassForward": 0.55,
        "width": 0.78,
        "brightness": 0.44,
        "compressionRatio": 1.35,
        "transientSnap": 0.48,
        "subHarmonics": 0.12,
        "sidechainDucking": 0,
        "delaySend": 0.24,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "new-jack-swing",
      "name": "New Jack Swing",
      "description": "New jack swing combines a swung machine rhythm with sharp kick-snare syncopation, bouncy synth bass and short keyboard punches. Keep the sixteenth feel, vary kick placement, and use fills only at section boundaries.",
      "patterns": [
        "swung machine backbeat",
        "synth-bass bounce",
        "staccato keyboard punches"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Cm7",
        "Abmaj7",
        "Bb7",
        "Fm7",
        "G7"
],
      "meter": "4/4",
      "tempo": [
        100,
        116
],
      "scale": "minor",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "synth",
                "piano"
        ],
        "bass": [
                "synth-bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "Cm7",
                "Cm7",
                "Abmaj7",
                "Bb7"
        ],
        "verse": [
                "Cm7",
                "Abmaj7",
                "Bb7",
                "Cm7"
        ],
        "chorus": [
                "Fm7",
                "Abmaj7",
                "Cm7",
                "G7"
        ],
        "bridge": [
                "Fm7",
                "G7",
                "Cm7",
                "Cm7"
        ],
        "outro": [
                "Abmaj7",
                "Bb7",
                "Cm7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "synth-bass-bounce",
      "form": [
        {
                "label": "intro",
                "bars": 4
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "chorus",
                "bars": 8
        },
        {
                "label": "break",
                "bars": 8
        },
        {
                "label": "chorus",
                "bars": 16
        },
        {
                "label": "outro",
                "bars": 4
        }
],
      "groove": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "swung",
        "humanizeJitterMs": 6
},
      "cells": [
        {
                "name": "swung machine backbeat voice Swinging vocal hook statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2.5,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "swung machine backbeat voice Swinging vocal hook cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        2.5,
                        3,
                        3.5,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "swung machine backbeat synth Synth chord punches statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "swung machine backbeat synth Synth chord punches cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0.5,
                        1.75,
                        2.75,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "swung machine backbeat piano Piano response statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        1,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "swung machine backbeat piano Piano response cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "piano"
                ],
                "onsets": [
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "swung machine backbeat synth bass Bouncy bass sync statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "swung machine backbeat synth bass Bouncy bass sync cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0,
                        0.5,
                        1.5,
                        2.5,
                        3,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "swung machine backbeat drums Machine backbeat statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1,
                        1.75,
                        2,
                        2.75,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "hat",
                        "kick",
                        "hat",
                        "snare"
                ]
        },
        {
                "name": "swung machine backbeat drums Machine backbeat cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.5,
                        1,
                        1.5,
                        2,
                        2.5,
                        3,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "hat",
                        "kick",
                        "hat",
                        "snare",
                        "openHat"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "synth": [
                "staccato",
                "legato",
                "filter-sweep",
                "accent"
        ],
        "piano": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "synth-bass": [
                "staccato",
                "legato",
                "slide",
                "ghost-note",
                "accent"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "synth:harmony": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "filter-sweep",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "piano:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "staccato"
        },
        "synth-bass:bass": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "slide",
                        "ghost-note",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost",
                "variantId": "electronic-kit"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.62,
        "bassForward": 0.72,
        "width": 0.56,
        "brightness": 0.64,
        "compressionRatio": 2,
        "transientSnap": 0.9,
        "subHarmonics": 0.2,
        "sidechainDucking": 0.12,
        "delaySend": 0.035,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "neo-soul",
      "name": "Neo-Soul",
      "description": "Neo soul sits behind the beat rather than marching on top of it. Let bass and kick breathe around the vocal, use soft drum ghosts, and voice extended Rhodes chords as short replies; shift the pocket slightly from bar to bar instead of looping a full beat.",
      "patterns": [
        "behind-beat pocket",
        "Rhodes chord replies",
        "bass counterline and ghost snare"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Fm9",
        "Bb13",
        "Ebmaj9",
        "D7",
        "Gm9",
        "C13"
],
      "meter": "4/4",
      "tempo": [
        70,
        86
],
      "scale": "dorian",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "rhodes",
                "guitar"
        ],
        "bass": [
                "bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "Fm9",
                "Bb13",
                "Ebmaj9",
                "D7"
        ],
        "verse": [
                "Fm9",
                "Bb13",
                "Ebmaj9",
                "D7"
        ],
        "chorus": [
                "Gm9",
                "C13",
                "Fm9",
                "D7"
        ],
        "bridge": [
                "Bb13",
                "Gm9",
                "C13",
                "D7"
        ],
        "outro": [
                "Fm9",
                "Ebmaj9"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "counterline",
      "form": [
        {
                "label": "intro",
                "bars": 8
        },
        {
                "label": "groove",
                "bars": 16
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "refrain",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "vamp",
                "bars": 16
        },
        {
                "label": "outro",
                "bars": 8
        }
],
      "groove": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 13
},
      "cells": [
        {
                "name": "behind-beat pocket voice Conversational phrase statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0.25,
                        1.25,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "behind-beat pocket voice Conversational phrase cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        1.5,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "behind-beat pocket rhodes Extended chord answer statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        0.5,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "behind-beat pocket rhodes Extended chord answer cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        1,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "behind-beat pocket guitar Muted guitar color statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        1.5,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "behind-beat pocket guitar Muted guitar color cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "guitar"
                ],
                "onsets": [
                        0.75,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "behind-beat pocket bass Melodic bass answer statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        1.25,
                        2.5,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "behind-beat pocket bass Melodic bass answer cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "bass"
                ],
                "onsets": [
                        0,
                        0.75,
                        2,
                        2.75,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "behind-beat pocket drums Laid-back ghost kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.9,
                        1.05,
                        2,
                        2.9,
                        3.05
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "kick",
                        "hat",
                        "snare"
                ]
        },
        {
                "name": "behind-beat pocket drums Laid-back ghost kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.05,
                        2,
                        2.75,
                        3.05
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "kick",
                        "hat",
                        "snare"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "rhodes": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "guitar": [
                "legato",
                "vibrato",
                "slide",
                "short-chord-stab",
                "legato-single-note",
                "accent",
                "staccato"
        ],
        "bass": [
                "legato",
                "ghost-note",
                "slide",
                "ghost",
                "accent",
                "staccato"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "legato"
        },
        "guitar:harmony": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "slide",
                        "short-chord-stab",
                        "legato-single-note",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "staccato",
                "variantId": "solid-electric"
        },
        "bass:bass": {
                "allowedTechniques": [
                        "legato",
                        "ghost-note",
                        "slide",
                        "ghost",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.68,
        "bassForward": 0.56,
        "width": 0.45,
        "brightness": 0.43,
        "compressionRatio": 1.38,
        "transientSnap": 0.52,
        "subHarmonics": 0.04,
        "sidechainDucking": 0,
        "delaySend": 0.07,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "alternative-randb",
      "name": "Alternative R&B",
      "description": "Alternative R&B uses broken entrances and changing space as part of the arrangement: sub notes do not mirror every kick, drums disappear between phrases, and Rhodes or synth color arrives in shifting fragments. Let silence carry the transition into the second section.",
      "patterns": [
        "broken-beat vocal fragments",
        "offset sub and sparse drums",
        "shifting Rhodes and synth color"
],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": [
        "Bm7",
        "Gmaj7",
        "Em9",
        "F#7",
        "Dmaj7",
        "Aadd9"
],
      "meter": "4/4",
      "tempo": [
        76,
        92
],
      "scale": "minor",
      "roles": {
        "lead": [
                "voice"
        ],
        "harmony": [
                "rhodes",
                "synth"
        ],
        "bass": [
                "synth-bass"
        ],
        "percussion": [
                "drums"
        ]
},
      "progressions": {
        "intro": [
                "Bm7",
                "Bm7",
                "Gmaj7",
                "F#7"
        ],
        "verse": [
                "Bm7",
                "Gmaj7",
                "Em9",
                "F#7"
        ],
        "chorus": [
                "Dmaj7",
                "Aadd9",
                "Bm7",
                "Gmaj7"
        ],
        "bridge": [
                "Em9",
                "Gmaj7",
                "F#7",
                "F#7"
        ],
        "outro": [
                "Bm7",
                "Gmaj7"
        ]
},
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "fragmented-sub",
      "form": [
        {
                "label": "intro",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "refrain",
                "bars": 8
        },
        {
                "label": "drop",
                "bars": 8
        },
        {
                "label": "verse",
                "bars": 16
        },
        {
                "label": "refrain",
                "bars": 8
        },
        {
                "label": "outro",
                "bars": 8
        }
],
      "groove": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 15
},
      "cells": [
        {
                "name": "broken-beat vocal fragments voice Fragmented vocal statement",
                "shortName": "statement",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0,
                        1.25,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "legato"
        },
        {
                "name": "broken-beat vocal fragments voice Fragmented vocal cadence",
                "shortName": "cadence",
                "role": "lead",
                "instruments": [
                        "voice"
                ],
                "onsets": [
                        0.75,
                        2.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "broken-beat vocal fragments rhodes Sparse Rhodes color statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        1.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.32
                ],
                "articulation": "staccato"
        },
        {
                "name": "broken-beat vocal fragments rhodes Sparse Rhodes color cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "rhodes"
                ],
                "onsets": [
                        0.5,
                        3
                ],
                "cycleLength": 1,
                "durations": [
                        0.32,
                        0.32
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "broken-beat vocal fragments synth Filtered texture replies statement",
                "shortName": "statement",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        0.75,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5
                ],
                "articulation": "staccato"
        },
        {
                "name": "broken-beat vocal fragments synth Filtered texture replies cadence",
                "shortName": "cadence",
                "role": "harmony",
                "instruments": [
                        "synth"
                ],
                "onsets": [
                        1.75,
                        2.75,
                        3.75
                ],
                "cycleLength": 1,
                "durations": [
                        1.5,
                        1.5,
                        1.5
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "broken-beat vocal fragments synth bass Offset sub pulses statement",
                "shortName": "statement",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0,
                        1.75,
                        3.25
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "staccato"
        },
        {
                "name": "broken-beat vocal fragments synth bass Offset sub pulses cadence",
                "shortName": "cadence",
                "role": "bass",
                "instruments": [
                        "synth-bass"
                ],
                "onsets": [
                        0.5,
                        2,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.48,
                        0.48,
                        0.48
                ],
                "articulation": "ornament",
                "phraseEnd": true
        },
        {
                "name": "broken-beat vocal fragments drums Broken-beat kit statement",
                "shortName": "statement",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        1.5,
                        2.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "accent",
                "hits": [
                        "kick",
                        "snare",
                        "kick"
                ]
        },
        {
                "name": "broken-beat vocal fragments drums Broken-beat kit cadence",
                "shortName": "cadence",
                "role": "percussion",
                "instruments": [
                        "drums"
                ],
                "onsets": [
                        0,
                        0.75,
                        1.5,
                        3.5
                ],
                "cycleLength": 1,
                "durations": [
                        0.2,
                        0.2,
                        0.2,
                        0.2
                ],
                "articulation": "ornament",
                "phraseEnd": true,
                "hits": [
                        "kick",
                        "hat",
                        "snare",
                        "openHat"
                ]
        }
],
      "instrumentTechniques": {
        "voice": [
                "legato",
                "vibrato",
                "accent",
                "staccato"
        ],
        "rhodes": [
                "legato",
                "ghost",
                "accent",
                "staccato",
                "tenuto"
        ],
        "synth": [
                "staccato",
                "legato",
                "filter-sweep",
                "accent"
        ],
        "synth-bass": [
                "staccato",
                "legato",
                "slide",
                "ghost-note",
                "accent"
        ],
        "drums": [
                "ghost",
                "accent",
                "open",
                "roll"
        ]
},
      "instrumentDialects": {
        "voice:lead": {
                "allowedTechniques": [
                        "legato",
                        "vibrato",
                        "accent",
                        "staccato"
                ],
                "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
                "allowedTechniques": [
                        "legato",
                        "ghost",
                        "accent",
                        "staccato",
                        "tenuto"
                ],
                "defaultTechnique": "legato"
        },
        "synth:harmony": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "filter-sweep",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "synth-bass:bass": {
                "allowedTechniques": [
                        "staccato",
                        "legato",
                        "slide",
                        "ghost-note",
                        "accent"
                ],
                "defaultTechnique": "staccato"
        },
        "drums:percussion": {
                "allowedTechniques": [
                        "ghost",
                        "accent",
                        "open",
                        "roll"
                ],
                "defaultTechnique": "ghost"
        }
},
      "mix": {
        "enabled": true,
        "character": {
        "dryness": 0.48,
        "bassForward": 0.68,
        "width": 0.7,
        "brightness": 0.58,
        "compressionRatio": 1.25,
        "transientSnap": 0.7,
        "subHarmonics": 0.25,
        "sidechainDucking": 0.03,
        "delaySend": 0.18,
        "reverbType": "room",
        "saturationType": "tape"
},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
