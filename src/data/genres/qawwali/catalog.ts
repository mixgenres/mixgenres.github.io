import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "qawwali",
  "name": "Qawwali",
  "family": "South Asia",
  "color": "#ea2a8e",
  "description": "Qawwali is an independent musical world. South Asia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [92, 108],
  "instruments": ["voice", "choir", "harmonium", "dholak", "hand-percussion"],
  "roles": {
    "lead": ["voice", "choir"],
    "harmony": ["harmonium"],
    "percussion": ["dholak", "hand-percussion"]
  },
  "pitchSystem": "raga / shruti inflection",
  "scales": ["mixolydian"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["qawwali lead chorus response and handclap cycle", "hamd naat devotional verse and restrained response", "ghazal qawwali long vocal line and harmonium answer", "fusion qawwali band groove under melismatic response"],
  "techniques": ["melisma", "call-response", "ornament", "legato", "roll", "accent", "vibrato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: qawwali lead chorus response and handclap cycle. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["qawwali lead chorus response and handclap cycle"],
      "techniques": ["melisma", "call-response", "ornament", "legato", "roll", "accent", "vibrato", "staccato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "mixolydian",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["harmonium"],
        "percussion": ["dholak", "hand-percussion"]
      },
      "progressions": {
        "instrumental opening": ["D5", "D5"],
        "hamd": ["D5", "D5"],
        "response": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental opening", "bars": 4},
        {"label": "hamd", "bars": 8},
        {"label": "lead verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "improvisation", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "qawwali lead chorus response and handclap cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "qawwali lead chorus response and handclap cycle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "qawwali lead chorus response and handclap cycle choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "qawwali lead chorus response and handclap cycle choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "qawwali lead chorus response and handclap cycle harmonium accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["harmonium"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "qawwali lead chorus response and handclap cycle harmonium cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonium"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "qawwali lead chorus response and handclap cycle dholak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["dholak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "qawwali lead chorus response and handclap cycle dholak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dholak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "qawwali lead chorus response and handclap cycle hand-percussion pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"},
        {"name": "qawwali lead chorus response and handclap cycle hand-percussion cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["hand-percussion"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "legato", "vibrato", "staccato"],
        "choir": ["legato", "accent", "tenuto"],
        "harmonium": ["accent", "legato", "tenuto", "staccato"],
        "dholak": ["accent", "open", "slap"],
        "hand-percussion": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "legato", "vibrato", "staccato"],
          "defaultTechnique": "accent"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "accent", "tenuto"],
          "defaultTechnique": "legato"
        },
        "harmonium:harmony": {
          "allowedTechniques": ["accent", "legato", "tenuto", "staccato"],
          "defaultTechnique": "accent"
        },
        "dholak:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
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
      "id": "hamd-naat",
      "name": "Hamd / Naat",
      "description": "Hamd / Naat: hamd naat devotional verse and restrained response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["hamd naat devotional verse and restrained response"],
      "techniques": ["melisma", "call-response", "ornament", "legato", "roll", "accent", "vibrato", "staccato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "mixolydian",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["harmonium"],
        "percussion": ["dholak", "hand-percussion"]
      },
      "progressions": {
        "instrumental opening": ["D5", "D5"],
        "hamd": ["D5", "D5"],
        "response": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental opening", "bars": 4},
        {"label": "hamd", "bars": 8},
        {"label": "lead verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "improvisation", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "hamd naat devotional verse and restrained response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hamd naat devotional verse and restrained response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hamd naat devotional verse and restrained response choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hamd naat devotional verse and restrained response choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hamd naat devotional verse and restrained response harmonium accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["harmonium"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "hamd naat devotional verse and restrained response harmonium cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonium"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hamd naat devotional verse and restrained response dholak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["dholak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "hamd naat devotional verse and restrained response dholak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dholak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "hamd naat devotional verse and restrained response hand-percussion pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"},
        {"name": "hamd naat devotional verse and restrained response hand-percussion cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["hand-percussion"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "legato", "vibrato", "staccato"],
        "choir": ["legato", "accent", "tenuto"],
        "harmonium": ["accent", "legato", "tenuto", "staccato"],
        "dholak": ["accent", "open", "slap"],
        "hand-percussion": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "legato", "vibrato", "staccato"],
          "defaultTechnique": "accent"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "accent", "tenuto"],
          "defaultTechnique": "legato"
        },
        "harmonium:harmony": {
          "allowedTechniques": ["accent", "legato", "tenuto", "staccato"],
          "defaultTechnique": "accent"
        },
        "dholak:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
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
      "id": "ghazal-qawwali",
      "name": "Ghazal-Qawwali",
      "description": "Ghazal-Qawwali: ghazal qawwali long vocal line and harmonium answer. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["ghazal qawwali long vocal line and harmonium answer"],
      "techniques": ["melisma", "call-response", "ornament", "legato", "roll", "accent", "vibrato", "staccato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "mixolydian",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["harmonium"],
        "percussion": ["dholak", "hand-percussion"]
      },
      "progressions": {
        "instrumental opening": ["D5", "D5"],
        "hamd": ["D5", "D5"],
        "response": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental opening", "bars": 4},
        {"label": "hamd", "bars": 8},
        {"label": "lead verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "improvisation", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ghazal qawwali long vocal line and harmonium answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ghazal qawwali long vocal line and harmonium answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghazal qawwali long vocal line and harmonium answer choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ghazal qawwali long vocal line and harmonium answer choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghazal qawwali long vocal line and harmonium answer harmonium accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["harmonium"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "ghazal qawwali long vocal line and harmonium answer harmonium cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonium"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghazal qawwali long vocal line and harmonium answer dholak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["dholak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ghazal qawwali long vocal line and harmonium answer dholak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dholak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "ghazal qawwali long vocal line and harmonium answer hand-percussion pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ghazal qawwali long vocal line and harmonium answer hand-percussion cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["hand-percussion"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "legato", "vibrato", "staccato"],
        "choir": ["legato", "accent", "tenuto"],
        "harmonium": ["accent", "legato", "tenuto", "staccato"],
        "dholak": ["accent", "open", "slap"],
        "hand-percussion": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "legato", "vibrato", "staccato"],
          "defaultTechnique": "accent"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "accent", "tenuto"],
          "defaultTechnique": "legato"
        },
        "harmonium:harmony": {
          "allowedTechniques": ["accent", "legato", "tenuto", "staccato"],
          "defaultTechnique": "accent"
        },
        "dholak:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
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
      "id": "contemporary-fusion",
      "name": "Contemporary Fusion",
      "description": "Contemporary Fusion: fusion qawwali band groove under melismatic response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["fusion qawwali band groove under melismatic response"],
      "techniques": ["melisma", "call-response", "ornament", "legato", "roll", "accent", "vibrato", "staccato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "mixolydian",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["harmonium", "synth"],
        "percussion": ["dholak", "hand-percussion"]
      },
      "progressions": {
        "instrumental opening": ["D5", "D5"],
        "hamd": ["D5", "D5"],
        "response": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental opening", "bars": 4},
        {"label": "hamd", "bars": 8},
        {"label": "lead verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "improvisation", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion qawwali band groove under melismatic response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion qawwali band groove under melismatic response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion qawwali band groove under melismatic response choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion qawwali band groove under melismatic response choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion qawwali band groove under melismatic response harmonium accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["harmonium", "synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion qawwali band groove under melismatic response harmonium cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonium", "synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion qawwali band groove under melismatic response dholak pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["dholak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion qawwali band groove under melismatic response dholak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dholak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "fusion qawwali band groove under melismatic response hand-percussion pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion qawwali band groove under melismatic response hand-percussion cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["hand-percussion"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "legato", "vibrato", "staccato"],
        "choir": ["legato", "accent", "tenuto"],
        "harmonium": ["accent", "legato", "tenuto", "staccato"],
        "dholak": ["accent", "open", "slap"],
        "hand-percussion": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "legato", "vibrato", "staccato"],
          "defaultTechnique": "accent"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "accent", "tenuto"],
          "defaultTechnique": "legato"
        },
        "harmonium:harmony": {
          "allowedTechniques": ["accent", "legato", "tenuto", "staccato"],
          "defaultTechnique": "accent"
        },
        "dholak:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
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
    }
  ]
};
