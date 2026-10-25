import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "andean",
  "name": "Andean",
  "family": "Andes",
  "color": "#22f325",
  "description": "Andean is an independent musical world. Andes idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Huayno",
  "meter": "2/4",
  "tempo": [104, 120],
  "instruments": ["quena", "siku", "charango", "guitar", "bombo-andino", "bass", "drums", "synth"],
  "roles": {
    "lead": ["quena", "siku"],
    "harmony": ["charango", "guitar"],
    "percussion": ["bombo-andino"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor-pentatonic"],
  "chordQualities": ["Am", "C", "G", "E7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["huayno duple dance and quena reply", "sanjuanito even duple flute and charango", "saya drum and vocal response", "tinku heavy duple accents", "carnavalito charango dance ostinato", "nueva canción acoustic verse and instrumental reply", "Andean flute hook over digital cumbia shuffle"],
  "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "huayno",
      "name": "Huayno",
      "description": "Huayno: huayno duple dance and quena reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["huayno duple dance and quena reply"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [104, 120],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "huayno duple dance and quena reply quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "huayno duple dance and quena reply siku statement", "role": "lead", "onsets": [0], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "huayno duple dance and quena reply charango accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.22, 0.22, 0.22, 0.22], "articulation": "staccato"},
        {"name": "huayno duple dance and quena reply guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "huayno duple dance and quena reply bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "sanjuanito",
      "name": "Sanjuanito",
      "description": "Sanjuanito: sanjuanito even duple flute and charango. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sanjuanito even duple flute and charango"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": [
          "Am",
          "G",
          "Am",
          "G"
        ],
        "tema": [
          "Am",
          "G",
          "Am",
          "E7"
        ],
        "instrumental": [
          "C",
          "G",
          "Am",
          "E7"
        ],
        "coda": [
          "Am",
          "Am"
        ]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "sanjuanito even duple flute and charango quena statement",
          "role": "lead",
          "onsets": [
            0,
            0.5,
            1,
            1.5
          ],
          "instruments": [
            "quena"
          ],
          "cycleLength": 1,
          "durations": [
            0.3,
            0.3,
            0.3,
            0.3
          ],
          "articulation": "staccato"
        },
        {
          "name": "sanjuanito even duple flute and charango quena cadence fill",
          "role": "lead",
          "onsets": [
            0.5,
            1,
            1.5,
            1.75
          ],
          "instruments": [
            "quena"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "sanjuanito even duple flute and charango siku statement",
          "role": "lead",
          "onsets": [
            0.75,
            1.25,
            1.75
          ],
          "instruments": [
            "siku"
          ],
          "cycleLength": 1,
          "durations": [
            0.35,
            0.35,
            0.35
          ],
          "articulation": "legato"
        },
        {
          "name": "sanjuanito even duple flute and charango charango accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.75,
            1,
            1.75
          ],
          "instruments": [
            "charango"
          ],
          "cycleLength": 1,
          "durations": [
            0.24,
            0.24,
            0.24,
            0.24
          ],
          "articulation": "staccato"
        },
        {
          "name": "sanjuanito even duple flute and charango guitar accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1.5
          ],
          "instruments": [
            "guitar"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "sanjuanito even duple flute and charango bombo-andino pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.75,
            1,
            1.5
          ],
          "instruments": [
            "bombo-andino"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "accents": [
            1,
            0.38,
            0.86,
            0.4
          ]
        }
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "saya",
      "name": "Saya",
      "description": "Saya: saya drum and vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["saya drum and vocal response"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "saya drum and vocal response quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "saya drum and vocal response siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "saya drum and vocal response charango accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.25, 3], "instruments": ["charango"], "cycleLength": 1, "durations": [0.24, 0.24, 0.24, 0.24, 0.24], "articulation": "staccato"},
        {"name": "saya drum and vocal response guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.5, 2, 2.5, 3.5, 4, 4.5, 5.5, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.25, 0.18, 0.18, 0.28, 0.18, 0.18, 0.25, 0.18, 0.2, 0.28, 0.16, 0.25], "articulation": "strum", "accents": [0.85, 0.4, 0.65, 0.8, 0.4, 0.65, 0.9, 0.42, 0.6, 0.8, 0.4, 0.7], "pitches": [{"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}], "description": "Keep the two-beat sway with light upper strums between the low accents. Change the last answer while bombo keeps its own pattern. Original ensemble study, not a recording transcription."},
        {"name": "saya drum and vocal response bombo-andino pulse", "role": "percussion", "onsets": [0.0, 0.75, 1.5, 2.0, 2.5, 3.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "edge", "open", "dum", "ghost", "edge"], "accents": [0.9, 0.45, 0.7, 0.85, 0.3, 0.65], "shortName": "Saya low and rim", "description": "Separate the grounded low drum from light rim answers; the drum supports the dance while the vocal line replies. Ensemble learning adaptation, not a recording transcription."},
        {"name": "Saya vocal call before the instrumental response", "role": "lead", "instruments": ["voice"], "onsets": [0, 0.5, 1], "durations": [0.45, 0.45, 0.8], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "tinku",
      "name": "Tinku",
      "description": "Tinku: tinku heavy duple accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tinku heavy duple accents"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [124, 140],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": [
          "Am",
          "C",
          "Dm",
          "Am"
        ],
        "tema": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "instrumental": [
          "Dm",
          "C",
          "G",
          "E7"
        ],
        "coda": [
          "Am",
          "E7"
        ]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "tinku heavy duple accents quena statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1,
            1.5
          ],
          "instruments": [
            "quena"
          ],
          "cycleLength": 1,
          "durations": [
            0.25,
            0.25,
            0.25,
            0.25
          ],
          "articulation": "accent"
        },
        {
          "name": "tinku heavy duple accents siku statement",
          "role": "lead",
          "onsets": [
            0
          ],
          "instruments": [
            "siku"
          ],
          "cycleLength": 1,
          "durations": [
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "tinku heavy duple accents charango accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1.25,
            1.5
          ],
          "instruments": [
            "charango"
          ],
          "cycleLength": 1,
          "durations": [
            0.3,
            0.3,
            0.3
          ],
          "articulation": "staccato"
        },
        {
          "name": "tinku heavy duple accents guitar accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1.5
          ],
          "instruments": [
            "guitar"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "tinku heavy duple accents bombo-andino pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.75,
            1,
            1.25,
            1.75
          ],
          "instruments": [
            "bombo-andino"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "accents": [
            1,
            0.38,
            0.96,
            0.44,
            0.8
          ]
        },
        {
          "name": "tinku heavy duple accents bombo-andino cadence fill",
          "role": "percussion",
          "onsets": [
            1,
            1.25,
            1.5,
            1.75
          ],
          "instruments": [
            "bombo-andino"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "accent"
        }
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "carnavalito",
      "name": "Carnavalito",
      "description": "Carnavalito: carnavalito charango dance ostinato. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["carnavalito charango dance ostinato"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [118, 134],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": [
          "C",
          "G",
          "Am",
          "G"
        ],
        "tema": [
          "Am",
          "C",
          "G",
          "Am"
        ],
        "instrumental": [
          "C",
          "G",
          "E7",
          "Am"
        ],
        "coda": [
          "Am",
          "Am"
        ]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "carnavalito charango dance ostinato quena statement",
          "role": "lead",
          "onsets": [
            0,
            0.5,
            1,
            1.5
          ],
          "instruments": [
            "quena"
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
          "name": "carnavalito charango dance ostinato siku statement",
          "role": "lead",
          "onsets": [
            0
          ],
          "instruments": [
            "siku"
          ],
          "cycleLength": 1,
          "durations": [
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "carnavalito charango dance ostinato charango accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.5,
            1,
            1.5
          ],
          "instruments": [
            "charango"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28,
            0.28,
            0.28
          ],
          "articulation": "staccato"
        },
        {
          "name": "carnavalito charango dance ostinato charango cadence fill",
          "role": "harmony",
          "onsets": [
            0.5,
            0.75,
            1.25,
            1.5,
            1.75
          ],
          "instruments": [
            "charango"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "carnavalito charango dance ostinato guitar accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1.5
          ],
          "instruments": [
            "guitar"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "carnavalito charango dance ostinato bombo-andino pulse",
          "role": "percussion",
          "onsets": [
            0,
            1,
            1.5
          ],
          "instruments": [
            "bombo-andino"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "accents": [
            0.95,
            0.68,
            0.44
          ]
        }
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "nueva-cancion",
      "name": "Nueva Canción",
      "description": "Nueva Canción: nueva canción acoustic verse and instrumental reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["nueva canción acoustic verse and instrumental reply"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "nueva canción acoustic verse and instrumental reply quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nueva canción acoustic verse and instrumental reply siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nueva canción acoustic verse and instrumental reply charango accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 3.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.3, 0.3, 0.3, 0.3], "articulation": "staccato"},
        {"name": "nueva canción acoustic verse and instrumental reply guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "nueva canción acoustic verse and instrumental reply bombo-andino pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4.5, 6, 7.5], "instruments": ["bombo-andino"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "edge", "dum", "edge", "dum", "open"], "accents": [0.85, 0.45, 0.75, 0.5, 0.9, 0.65], "description": "Use sparse low strokes and lighter rim answers beneath the long vocal sentence; do not stamp every quarter note. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "andean-fusion",
      "name": "Andean Fusion",
      "description": "Andean Fusion: quena and siku phrases ride a loping digital cumbia shuffle, with a syncopated low anchor, compact kit backbeat and clipped synth color. Keep the electronic bed punchy under the melody, then thin it to a descending held synth tail in the coda.",
      "patterns": ["Andean flute hook over digital cumbia shuffle"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "bass": ["bass"],
        "percussion": ["bombo-andino", "drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Andean flute hook over digital cumbia shuffle quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Andean flute hook over digital cumbia shuffle siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Andean flute hook over digital cumbia shuffle charango accompaniment", "role": "harmony", "onsets": [0.75, 2.25, 3.25], "instruments": ["charango"], "cycleLength": 1, "durations": [0.3, 0.3, 0.3], "articulation": "staccato"},
        {"name": "Andean flute hook over digital cumbia shuffle guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.75, 2.5, 3, 3.5, 4, 5, 5.5, 6.25, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.15, 0.25, 0.2, 0.25, 0.25, 0.3, 0.3, 0.25, 0.3, 0.2, 0.25, 0.3], "articulation": "strum", "accents": [0.9, 0.4, 0.6, 0.7, 0.5, 0.8, 0.5, 0.95, 0.6, 0.75, 0.45, 0.8, 0.55], "pitches": [{"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}], "description": "Keep the lifted Andean strum beneath the electric texture; alternate grounded accents with light upper responses. Original ensemble study, not a recording transcription."},
        {"name": "Andean flute hook over digital cumbia shuffle bombo-andino pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Andean flute hook over digital cumbia shuffle syncopated bass", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "durations": [0.8, 0.35, 0.7, 0.35], "articulations": ["accent", "staccato", "accent", "staccato"], "arrangementVariation": true},
        {"name": "Andean flute hook over digital cumbia shuffle kit backbeat", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "hat", "hat", "snare", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.9, 0.35, 0.4, 0.8, 0.7, 0.35, 0.4, 0.8], "arrangementVariation": true},
        {"name": "Andean flute hook over digital cumbia shuffle synth chord jab", "role": "texture", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.35, 0.35], "articulation": "staccato", "arrangementVariation": true},
        {"name": "Andean flute hook over digital cumbia shuffle synth coda tail", "shortName": "Synth coda tail", "description": "Across the sixteen-bar dissolve, strike a held chord on each bar line and gradually step the level down. Keep the release open so the electronic color recedes behind the final Andean phrase.", "role": "texture", "onsets": [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60], "durations": [3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.75], "velocities": [0.8, 0.76, 0.73, 0.69, 0.65, 0.62, 0.58, 0.54, 0.51, 0.47, 0.43, 0.4, 0.36, 0.32, 0.29, 0.25], "pitches": [{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"},{"voicing":"chord"}], "instruments": ["synth"], "cycleLength": 16, "articulation": "tenuto", "sectionUsage": ["dissolve", "coda", "ending"], "supportedEnergy": [1, 2]}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"],
        "bass": ["accent", "ghost", "legato", "staccato"],
        "drums": ["accent", "ghost", "roll", "open"],
        "synth": ["accent", "legato", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "ghost", "legato", "staccato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        },
        "synth:texture": {
          "allowedTechniques": ["accent", "legato", "staccato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    }
  ]
};
