import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "indian-classical",
  "name": "Indian Classical",
  "family": "South Asia",
  "color": "#9af20e",
  "description": "Indian Classical is an independent musical world. South Asia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Hindustani Khayal",
  "meter": "4/4",
  "tempo": [64, 80],
  "instruments": ["voice", "sarangi", "violin", "tanpura", "tabla", "rudra-veena", "pakhawaj", "sitar"],
  "roles": {
    "lead": ["voice", "sarangi"],
    "harmony": ["tanpura"],
    "percussion": ["tabla"]
  },
  "pitchSystem": "raga / shruti inflection",
  "tuningSystem": "12-tet",
  "scales": [],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["khayal vilambit bol alap and drut taan", "dhrupad long alap and pakhawaj cycle", "instrumental gat with tabla and jhala plucks", "thumri lyrical bol banav and flexible cadence", "Carnatic kriti pallavi anupallavi charanam", "ragam tanam pallavi and rhythmic improvisation", "varnam composed phrases and swara passages", "tillana rhythmic syllables and brisk melodic cadence"],
  "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "hindustani-khayal",
      "name": "Hindustani Khayal",
      "description": "Hindustani Khayal: a Miyan ki Todi study that opens with vilambit bol alap, then moves into drut taan over tanpura and tabla.",
      "patterns": ["khayal vilambit bol alap and drut taan"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "raga-todi",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "vilambit": ["D5", "D5"],
        "drut": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "vilambit", "bars": 8},
        {"label": "drut", "bars": 8},
        {"label": "taan", "bars": 8},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "khayal vilambit bol alap and drut taan voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan tabla pulse", "role": "percussion", "onsets": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15], "instruments": ["tabla"], "cycleLength": 4, "articulation": "accent", "hits": ["dayan-na", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-na", "dayan-tun", "dayan-tun", "dayan-na", "dayan-ti-ke", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe"], "accents": [0.95, 0.95, 0.55, 0.55, 0.6, 0.6, 0.7, 0.7, 0.85, 0.85, 0.55, 0.55, 0.6, 0.6, 0.7, 0.7, 0.6, 0.45, 0.5, 0.55, 0.75, 0.55, 0.55, 0.65, 0.65, 0.85, 0.85], "description": "Keep the full 16-beat tintal study: four groups of four, composite dayan-bayan strokes in the filled groups and a lighter khali group. The first stroke marks sam. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "dhrupad",
      "name": "Dhrupad",
      "description": "Dhrupad: a Raga Yaman study that grows from a long alap into nom-tom and pakhawaj-supported composition.",
      "patterns": ["dhrupad long alap and pakhawaj cycle"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "raga-yaman",
      "roles": {
        "lead": ["voice", "rudra-veena"],
        "harmony": ["tanpura"],
        "percussion": ["pakhawaj"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "jor": ["D5", "D5"],
        "nom tom": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "jor", "bars": 8},
        {"label": "nom tom", "bars": 8},
        {"label": "dhrupad", "bars": 9},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dhrupad long alap and pakhawaj cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle rudra-veena statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["rudra-veena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle pakhawaj pulse", "role": "percussion", "onsets": [0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11], "instruments": ["pakhawaj"], "cycleLength": 3, "articulation": "accent", "hits": ["dum", "open", "edge", "ghost", "dum", "open", "edge", "slap", "dum", "open", "ghost", "edge", "dum", "open", "slap", "edge"], "accents": [0.95, 0.8, 0.55, 0.45, 0.85, 0.7, 0.55, 0.65, 0.9, 0.75, 0.45, 0.6, 0.85, 0.7, 0.65, 0.8], "description": "Practice a twelve-pulse low-high drum cycle in paired groups, with clear bass resonances and quieter connecting strokes. Let the vocal phrase settle at the cycle return. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "rudra-veena": ["tremolo", "accent", "staccato", "legato"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "pakhawaj": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "rudra-veena:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "pakhawaj:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "instrumental-gat",
      "name": "Instrumental Gat",
      "description": "Instrumental Gat: a Raga Jog sitar study that moves from alap and jor to tabla gat, jhala, and a tihai landing on sam.",
      "patterns": ["instrumental gat with tabla and jhala plucks"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "raga-jog",
      "roles": {
        "lead": ["sitar"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "jor": ["D5", "D5"],
        "gat": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "jor", "bars": 8},
        {"label": "gat", "bars": 8},
        {"label": "jhala", "bars": 8, "soloInstrumentId": "sitar", "soloMode": "accompanied"},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "instrumental gat with tabla and jhala plucks sitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["sitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "instrumental gat with tabla and jhala plucks tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "instrumental gat with tabla and jhala plucks tabla pulse", "role": "percussion", "onsets": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15], "instruments": ["tabla"], "cycleLength": 4, "articulation": "accent", "hits": ["dayan-na", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe", "dayan-na", "dayan-tun", "dayan-tun", "dayan-na", "dayan-ti-ke", "dayan-tun", "bayan-ghe", "dayan-tun", "bayan-ghe", "dayan-na", "bayan-ghe"], "accents": [0.893, 0.893, 0.517, 0.517, 0.564, 0.564, 0.658, 0.658, 0.799, 0.799, 0.517, 0.517, 0.564, 0.564, 0.658, 0.658, 0.564, 0.423, 0.47, 0.517, 0.705, 0.517, 0.517, 0.611, 0.611, 0.799, 0.799], "description": "Keep the 16-beat tintal cycle under the instrumental gat; retain the composite strokes, lighter khali and clear sam while the sitar varies above it. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "sitar": ["tremolo", "accent", "staccato", "legato"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "sitar:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "thumri",
      "name": "Thumri",
      "description": "Thumri: a Pilu bol-banav study with lyric-led ornament, flexible phrase length, and a relaxed cadence.",
      "patterns": ["thumri lyrical bol banav and flexible cadence"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "raga-pilu",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "sthayi": ["D5", "D5"],
        "antara": ["D5", "D5"],
        "return": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "sthayi", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "bol banav", "bars": 8},
        {"label": "return", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "thumri lyrical bol banav and flexible cadence voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence tabla pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent", "hits": ["bayan-ghe", "dayan-na", "dayan-tun", "dayan-na", "dayan-ti-ke", "dayan-na", "bayan-ghe", "dayan-na"], "accents": [0.85, 0.5, 0.6, 0.55, 0.45, 0.5, 0.75, 0.6], "description": "Use a gentle eight-count keherwa study beneath the flexible bol-banav line. Separate the rounded bass tones from lighter upper contacts. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "carnatic-kriti",
      "name": "Carnatic Kriti",
      "description": "Carnatic Kriti: a Hamsadhwani Vatapi Ganapatim study through pallavi, anupallavi, and charanam with gamaka and tala support.",
      "patterns": ["Carnatic kriti pallavi anupallavi charanam"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "raga-hamsadhwani",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["tanpura"],
        "percussion": ["mridangam"]
      },
      "progressions": {
        "alapana": ["D5", "D5"],
        "pallavi": ["D5"],
        "charanam": ["D5", "D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alapana", "bars": 4},
        {"label": "pallavi", "bars": 8},
        {"label": "anupallavi", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "swaras", "bars": 8},
        {"label": "pallavi", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Carnatic kriti pallavi anupallavi charanam voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam mridangam pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5], "instruments": ["mridangam"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "ghost", "open", "edge", "open", "ghost", "slap", "edge", "dum", "ghost", "open", "edge", "slap", "ghost", "open", "edge"], "accents": [0.95, 0.3, 0.6, 0.45, 0.7, 0.3, 0.65, 0.45, 0.9, 0.3, 0.65, 0.45, 0.8, 0.3, 0.7, 0.55], "description": "Practice an eight-beat Adi-tala accompaniment as 4+2+2, keeping the first arrival clear and the smaller subdivisions light. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "mridangam": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "mridangam:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "ragam-tanam-pallavi",
      "name": "Ragam-Tanam-Pallavi",
      "description": "Ragam-Tanam-Pallavi: a Kalyani study that unfolds through alapana, tanam, pallavi, and rhythmic returns to sam.",
      "patterns": ["ragam tanam pallavi and rhythmic improvisation"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "raga-kalyani",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["tanpura"],
        "percussion": ["mridangam"]
      },
      "progressions": {
        "ragam": ["D5", "D5"],
        "tanam": ["D5", "D5"],
        "neraval": ["D5", "D5"],
        "pallavi": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "ragam", "bars": 4},
        {"label": "tanam", "bars": 8},
        {"label": "pallavi", "bars": 8},
        {"label": "neraval", "bars": 8},
        {"label": "swaras", "bars": 8},
        {"label": "tani", "bars": 8},
        {"label": "pallavi", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ragam tanam pallavi and rhythmic improvisation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation mridangam pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.75, 3.5, 4, 4.5, 5.25, 5.5, 6, 6.5, 7, 7.5], "instruments": ["mridangam"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "ghost", "open", "edge", "slap", "ghost", "open", "dum", "edge", "open", "ghost", "slap", "edge", "open", "edge"], "accents": [0.95, 0.3, 0.6, 0.45, 0.75, 0.3, 0.65, 0.9, 0.5, 0.7, 0.3, 0.8, 0.45, 0.7, 0.6], "description": "Keep a clear eight-beat accompaniment frame, with a changed second-half answer under the pallavi. Leave the sung phrase independent of the drum subdivisions. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "mridangam": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "mridangam:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "varnam",
      "name": "Varnam",
      "description": "Varnam: a Sahana study through pallavi, anupallavi, muktayi swara, charanam, and chitta-swara returns.",
      "patterns": ["varnam composed phrases and swara passages"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "raga-sahana",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["tanpura"],
        "percussion": ["mridangam"]
      },
      "progressions": {
        "pallavi": ["D5", "D5"],
        "anupallavi": ["D5", "D5"],
        "charanam": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pallavi", "bars": 4},
        {"label": "anupallavi", "bars": 8},
        {"label": "muktayi swara", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "chitta swaras", "bars": 8},
        {"label": "charanam", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "varnam composed phrases and swara passages voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages mridangam pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["mridangam"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "mridangam": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "mridangam:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "tillana",
      "name": "Tillana",
      "description": "Tillana: a Behag study balancing rhythmic syllables, melodic phrases, and a brisk tala-aligned cadence.",
      "patterns": ["tillana rhythmic syllables and brisk melodic cadence"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "raga-behag",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["tanpura"],
        "percussion": ["mridangam"]
      },
      "progressions": {
        "pallavi": ["D5", "D5"],
        "anupallavi": ["D5", "D5"],
        "rhythmic syllables": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pallavi", "bars": 4},
        {"label": "anupallavi", "bars": 8},
        {"label": "rhythmic syllables", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tillana rhythmic syllables and brisk melodic cadence voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence mridangam pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["mridangam"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "mridangam": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "mridangam:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    }
  ]
}, [
  { instrumentId: 'bansuri', role: 'lead' },
  { instrumentId: 'flute', role: 'lead' },
  { instrumentId: 'veena', role: 'lead' },
  { instrumentId: 'mridangam', role: 'percussion' },
  { instrumentId: 'tabla', role: 'percussion' },
  { instrumentId: 'tanpura', role: 'harmony' },
]);
