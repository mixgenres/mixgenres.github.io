import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "ambient",
  "name": "Ambient",
  "family": "Global electronic / experimental",
  "color": "#fff66a",
  "description": "Ambient is an independent musical world. Global electronic / experimental idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Atmospheric",
  "meter": "4/4",
  "tempo": [56, 72],
  "instruments": ["piano", "synth", "string-ensemble", "guitar", "flute", "sampler", "rhodes", "drums"],
  "roles": {
    "lead": ["piano"],
    "texture": ["synth", "string-ensemble"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5", "Dmaj7", "Gmaj7"],
  "harmonicRhythm": "bar",
  "cadences": ["Gmaj7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["slow pad overlap and spacious motif", "continuous drone with sparse overtones", "dark low drones and isolated metallic attacks", "acoustic harmonics over breathing texture", "quiet piano motif with long string tails", "glitch fragments separated by silence", "independent repeating processes", "long orchestral swell and motif return", "soft downtempo beat under evolving pads"],
  "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "atmospheric",
      "name": "Atmospheric",
      "description": "Atmospheric: independent middle-register pad voices, overlapping releases and a slow melodic contour. An original study, not a transcription of An Ending (Ascent).",
      "patterns": ["slow pad overlap and spacious motif"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Breathing upper pad melody", "role": "lead", "instruments": ["synth"], "cycleLength": 4, "onsets": [0, 6, 11], "durations": [8, 7, 7], "pitches": [{"midi": [62, 74]}, {"midi": [66, 78]}, {"midi": [64, 76]}], "articulation": "legato"},
        {"name": "Independent left pad harmony", "role": "harmony", "instruments": ["synth"], "cycleLength": 4, "onsets": [1, 8], "durations": [10, 10], "pitches": [{"midi": [57, 66]}, {"midi": [59, 64]}], "articulation": "legato"},
        {"name": "Slow right string cloud", "role": "texture", "instruments": ["synth"], "cycleLength": 4, "onsets": [3, 10], "durations": [9, 9], "pitches": [{"midi": [55, 64]}, {"midi": [57, 62]}], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {"allowedTechniques": ["legato", "accent", "staccato", "tenuto"], "defaultTechnique": "legato"},
        "synth:texture": {"allowedTechniques": ["legato", "accent", "staccato", "vibrato"], "defaultTechnique": "legato", "patchId": "breathing-pad"},
        "string-ensemble:texture": {"allowedTechniques": ["legato", "slow-attack", "accent", "staccato"], "defaultTechnique": "legato"},
        "synth:lead": {"allowedTechniques": ["legato", "accent", "staccato", "vibrato"], "defaultTechnique": "legato", "patchId": "breathing-pad"},
        "synth:harmony": {"allowedTechniques": ["legato", "accent", "staccato", "vibrato"], "defaultTechnique": "legato", "patchId": "breathing-pad"}
      },
      "mix": {
        "enabled": true,
        "character": {"dryness": 0.28, "bassForward": 0.46, "width": 0.78, "brightness": 0.44, "compressionRatio": 1.45, "transientSnap": 0.46, "subHarmonics": 0, "sidechainDucking": 0, "delaySend": 0.28, "reverbType": "room", "saturationType": "tape"},
        "stage": {"width": 0.78, "depthRange": 0.62, "centerAnchorRoles": [], "rolePan": {"lead": 0.85, "harmony": -0.85, "texture": -0.65}, "roleWidth": {"lead": 0.16, "texture": 0.62}, "preserveNaturalStage": true},
        "dynamics": {"foregroundContrastDb": 2.8, "maxTrackBoostDb": 3, "maxTrackCutDb": -6, "ensembleBreathing": 0.48, "crescendoExpansion": 0.45, "silenceContrast": 0.72, "peakSectionHeadroomDb": 3, "busCompressionAmount": 0.22, "busCompressionRatio": 1.7, "densityCompensation": 0.34, "sharedForeground": true},
        "masking": {"enabled": true, "minOverlap": 0.2, "minPriorityDifference": 0.14, "maxPresenceCutDb": 2.2, "maxBodyCutDb": 0.9, "maxGainCutDb": 0.8, "amount": 0.52, "preserveCounterpoint": true},
        "ambience": {"roomSize": 0.72, "foregroundDepthDifference": 0.5, "reverbSend": 0.3, "delaySend": 0.28, "bloom": 0.56, "preDelayMs": 12},
        "roles": {"lead": {"mixFunctions": ["foreground"], "priority": 0.9, "gainDb": 0, "foregroundGainDb": 1.4, "supportGainDb": -0.2, "presenceDb": 0.8, "bodyDb": 0, "width": 1, "transientEmphasis": 0.15, "maskingPriority": 0.95, "ambienceSend": 0.1, "protectLowEnd": false, "protectRhythmicDefinition": false, "mayYieldSpectrally": false, "mayYieldInGain": false, "depth": 0.2}, "texture": {"mixFunctions": ["harmonic-support"], "priority": 0.55, "gainDb": 4, "foregroundGainDb": 0, "supportGainDb": -1, "presenceDb": -0.15, "bodyDb": 0, "width": 1, "transientEmphasis": 0.15, "maskingPriority": 0.52, "ambienceSend": 0.42, "protectLowEnd": false, "protectRhythmicDefinition": false, "mayYieldSpectrally": true, "mayYieldInGain": true, "depth": 0.48}, "harmony": {"mixFunctions": ["harmonic-support"], "priority": 0.55, "gainDb": 0, "foregroundGainDb": 0, "supportGainDb": -1, "presenceDb": -0.15, "bodyDb": 0, "width": 1, "transientEmphasis": 0.15, "maskingPriority": 0.52, "ambienceSend": 0.42, "protectLowEnd": false, "protectRhythmicDefinition": false, "mayYieldSpectrally": true, "mayYieldInGain": true, "depth": 0.48}},
        "sections": {"intro": {"gainDb": -1, "depth": 0.46, "width": 0.5903999999999999}, "breakdown": {"gainDb": -1.5, "ambience": 1.12}, "chorus": {"gainDb": 0.7, "width": 0.8064, "foregroundContrast": 1.1}, "climax": {"gainDb": 0.8, "width": 0.8351999999999999, "foregroundContrast": 1.2}},
        "transitions": {"attackMs": 120, "releaseMs": 480, "sectionTransitionMs": 640, "foregroundHandoffMs": 320, "spectralRampMs": 240, "lookaheadMs": 100},
        "buses": {"glueAmount": 0.18, "lowAnchorCompression": 0.05, "rhythmCompression": 0.12, "melodicCompression": 0.08, "ensembleCompression": 0.14, "parallelCompression": 0, "sharedRoom": true, "roleBus": {"lead": "melodic", "texture": "harmony", "harmony": "harmony"}}
      }
    },
    {
      "id": "drone",
      "name": "Drone",
      "description": "Drone: continuous drone with sparse overtones. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["continuous drone with sparse overtones"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "continuous drone with sparse overtones synth statement", "role": "lead", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "continuous drone with sparse overtones synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "continuous drone with sparse overtones synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "dark-ambient",
      "name": "Dark Ambient",
      "description": "Dark Ambient: dark low drones and isolated metallic attacks. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dark low drones and isolated metallic attacks"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dark low drones and isolated metallic attacks synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "dark low drones and isolated metallic attacks synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dark low drones and isolated metallic attacks synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "organic-ambient",
      "name": "Organic Ambient",
      "description": "Organic Ambient: acoustic harmonics over breathing texture. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["acoustic harmonics over breathing texture"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "harmonic", "legato-single-note", "accent", "staccato", "vibrato", "tenuto"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [60, 76],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guitar"],
        "texture": ["flute", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "acoustic harmonics over breathing texture guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "acoustic harmonics over breathing texture guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acoustic harmonics over breathing texture flute accompaniment", "role": "texture", "onsets": [0], "instruments": ["flute"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "acoustic harmonics over breathing texture string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "guitar": ["legato", "harmonic", "glissando", "legato-single-note", "accent", "staccato", "vibrato"],
        "flute": ["legato", "glissando", "accent", "staccato", "tenuto", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["legato", "harmonic", "glissando", "legato-single-note", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "flute:texture": {
          "allowedTechniques": ["legato", "glissando", "accent", "staccato", "tenuto", "vibrato"],
          "defaultTechnique": "legato"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "neo-classical-ambient",
      "name": "Neo-Classical Ambient",
      "description": "Neo-Classical Ambient: quiet piano motif with long string tails. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["quiet piano motif with long string tails"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "quiet piano motif with long string tails piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "quiet piano motif with long string tails piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet piano motif with long string tails synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "quiet piano motif with long string tails string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "glitch-ambient",
      "name": "Glitch Ambient",
      "description": "Glitch Ambient: glitch fragments separated by silence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["glitch fragments separated by silence"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth"],
        "percussion": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "glitch fragments separated by silence piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "glitch fragments separated by silence piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "glitch fragments separated by silence synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "glitch fragments separated by silence sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "glitch fragments separated by silence sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"texture":0,"percussion":0.12},"roleWidth":{"lead":0.16,"texture":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "generative-ambient",
      "name": "Generative Ambient",
      "description": "Generative Ambient: independent repeating processes. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["independent repeating processes"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [58, 74],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "independent repeating processes synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "independent repeating processes synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "independent repeating processes synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "cinematic-ambient",
      "name": "Cinematic Ambient",
      "description": "Cinematic Ambient: long orchestral swell and motif return. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["long orchestral swell and motif return"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [62, 78],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "long orchestral swell and motif return piano statement", "role": "lead", "onsets": [0], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "long orchestral swell and motif return piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "long orchestral swell and motif return synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "long orchestral swell and motif return string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":3.4,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "downtempo-ambient",
      "name": "Downtempo Ambient",
      "description": "Downtempo Ambient: soft downtempo beat under evolving pads. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["soft downtempo beat under evolving pads"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato", "ghost", "open", "roll"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "soft downtempo beat under evolving pads piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soft downtempo beat under evolving pads piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "soft downtempo beat under evolving pads rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "soft downtempo beat under evolving pads synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "soft downtempo beat under evolving pads drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "soft downtempo beat under evolving pads synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    }
  ]
};
