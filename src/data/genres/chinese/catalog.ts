import type { GenrePackInput } from '../_shared/genrePack';
import { authorChineseStudies } from './studies';

export const GENRE_PACK: GenrePackInput = authorChineseStudies({
  "id": "chinese",
  "name": "Chinese",
  "family": "China",
  "color": "#babd29",
  "description": "Chinese is an independent musical world. China idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Jiangnan Sizhu",
  "meter": "4/4",
  "tempo": [80, 96],
  "instruments": ["erhu", "dizi", "pipa", "guzheng", "guqin", "voice", "jinghu", "paigu", "gongs", "gaohu", "suona"],
  "roles": {
    "lead": ["erhu", "dizi"],
    "harmony": ["pipa", "guzheng"]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["jiangnan sizhu heterophonic melody exchange", "shared melody with heterophonic embellishment", "guqin isolated plucks slides and harmonics", "free phrase", "repeated motivic cells", "guzheng tremolo phrase and bending response", "arpeggio/tremolo ostinato", "pipa rapid tremolo and strummed accents", "rapid tremolo, martial ostinato", "jingju vocal line and percussion cues", "percussion cue structures", "flexible speech-song rhythm", "Cantonese gaohu-led ornamented melody", "heterophonic small ensemble", "Chaozhou decorated melody and phrase cadences", "ornamented melody", "elastic timing", "suona chuida piercing melody and gong cues", "loud processional drum/wind cycles"],
  "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "jiangnan-sizhu",
      "name": "Jiangnan Sizhu",
      "description": "Jiangnan Sizhu: jiangnan sizhu heterophonic melody exchange. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["jiangnan sizhu heterophonic melody exchange", "shared melody with heterophonic embellishment"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "ornament, pitch bend, flexible timing", "accent", "staccato", "tenuto", "harmonic", "bend"],
      "harmony": ["D5", "modal/heterophonic", "no chord progression requirement"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["erhu", "dizi"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jiangnan sizhu heterophonic melody exchange erhu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["erhu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jiangnan sizhu heterophonic melody exchange erhu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["erhu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange dizi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["dizi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jiangnan sizhu heterophonic melody exchange dizi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["dizi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jiangnan sizhu heterophonic melody exchange pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jiangnan sizhu heterophonic melody exchange guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "erhu": ["legato", "vibrato", "tremolo", "accent"],
        "dizi": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "erhu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "dizi:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"harmony":-0.12},"roleWidth":{"lead":0.16,"harmony":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony"}}
      }
    },
    {
      "id": "guqin",
      "name": "Guqin",
      "description": "Guqin: guqin isolated plucks slides and harmonics. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["guqin isolated plucks slides and harmonics", "free phrase", "repeated motivic cells"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "harmonics, sliding, vibrato, left-hand pitch shading", "harmonic", "accent"],
      "harmony": ["D5", "pentatonic/modal single-line texture"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guqin"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "harmonic melody": ["D5", "D5"],
        "sliding variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "harmonic melody", "bars": 8},
        {"label": "sliding variation", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guqin isolated plucks slides and harmonics guqin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guqin"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "guqin isolated plucks slides and harmonics guqin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guqin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "guqin": ["legato", "harmonic", "vibrato", "accent"]
      },
      "instrumentDialects": {
        "guqin:lead": {
          "allowedTechniques": ["legato", "harmonic", "vibrato", "accent"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "guzheng",
      "name": "Guzheng",
      "description": "Guzheng: guzheng tremolo phrase and bending response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["guzheng tremolo phrase and bending response", "arpeggio/tremolo ostinato"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "tremolo, bends, glissando", "bend", "accent", "staccato"],
      "harmony": ["D5", "pentatonic/modal, occasional stacked open fifths"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guzheng tremolo phrase and bending response guzheng statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guzheng tremolo phrase and bending response guzheng cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "guzheng:lead": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "pipa",
      "name": "Pipa",
      "description": "Pipa: pipa rapid tremolo and strummed accents. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["pipa rapid tremolo and strummed accents", "rapid tremolo, martial ostinato"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "wheel tremolo, snaps, percussive strum", "harmonic", "accent", "staccato", "tenuto"],
      "harmony": ["D5", "melodic/modal"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["pipa"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pipa rapid tremolo and strummed accents pipa statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pipa rapid tremolo and strummed accents pipa cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"]
      },
      "instrumentDialects": {
        "pipa:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "jingju",
      "name": "Jingju",
      "description": "Jingju: jingju vocal line and percussion cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["jingju vocal line and percussion cues", "percussion cue structures", "flexible speech-song rhythm"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "stylized vocal ornament", "jinghu slides", "accent", "staccato", "bend", "ghost", "roll"],
      "harmony": ["D5", "modal melodic framework"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice", "jinghu"],
        "percussion": ["paigu", "gongs"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jingju vocal line and percussion cues voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jingju vocal line and percussion cues voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jingju vocal line and percussion cues jinghu statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["jinghu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jingju vocal line and percussion cues jinghu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["jinghu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jingju vocal line and percussion cues paigu pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["paigu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "jingju vocal line and percussion cues paigu cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["paigu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "jingju vocal line and percussion cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "jinghu": ["legato", "vibrato", "bend", "staccato", "accent"],
        "paigu": ["accent", "ghost", "roll"],
        "gongs": ["accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "jinghu:lead": {
          "allowedTechniques": ["legato", "vibrato", "bend", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "paigu:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "gongs:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"percussion":0.12},"roleWidth":{"lead":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","percussion":"percussion"}}
      }
    },
    {
      "id": "cantonese-ensemble",
      "name": "Cantonese Ensemble",
      "description": "Cantonese Ensemble: Cantonese gaohu-led ornamented melody. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Cantonese gaohu-led ornamented melody", "heterophonic small ensemble"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "harmonic", "staccato", "tenuto", "bend"],
      "harmony": ["D5", "modal/pentatonic"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gaohu"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Cantonese gaohu-led ornamented melody gaohu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gaohu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Cantonese gaohu-led ornamented melody gaohu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gaohu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Cantonese gaohu-led ornamented melody pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Cantonese gaohu-led ornamented melody pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Cantonese gaohu-led ornamented melody guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Cantonese gaohu-led ornamented melody guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "gaohu": ["legato", "vibrato", "tremolo", "accent"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "gaohu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"harmony":-0.12},"roleWidth":{"lead":0.16,"harmony":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony"}}
      }
    },
    {
      "id": "chaozhou",
      "name": "Chaozhou",
      "description": "Chaozhou: Chaozhou decorated melody and phrase cadences. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Chaozhou decorated melody and phrase cadences", "ornamented melody", "elastic timing"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "staccato", "tenuto", "harmonic", "bend"],
      "harmony": ["D5", "modal"],
      "meter": "4/4",
      "tempo": [78, 94],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["erhu", "dizi"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Chaozhou decorated melody and phrase cadences erhu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["erhu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chaozhou decorated melody and phrase cadences erhu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["erhu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences dizi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["dizi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chaozhou decorated melody and phrase cadences dizi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["dizi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chaozhou decorated melody and phrase cadences pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chaozhou decorated melody and phrase cadences guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "erhu": ["legato", "vibrato", "tremolo", "accent"],
        "dizi": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "erhu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "dizi:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"harmony":-0.12},"roleWidth":{"lead":0.16,"harmony":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony"}}
      }
    },
    {
      "id": "suona-chuida",
      "name": "Suona / Chuida",
      "description": "Suona / Chuida: suona chuida piercing melody and gong cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["suona chuida piercing melody and gong cues", "loud processional drum/wind cycles"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "staccato", "ghost", "roll"],
      "harmony": ["D5", "modal/unison/heterophonic"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["suona"],
        "percussion": ["paigu", "gongs"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "suona chuida piercing melody and gong cues suona statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["suona"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "suona chuida piercing melody and gong cues suona cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["suona"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "suona chuida piercing melody and gong cues paigu pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["paigu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "suona chuida piercing melody and gong cues paigu cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["paigu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "suona chuida piercing melody and gong cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "suona": ["legato", "vibrato", "accent", "staccato"],
        "paigu": ["accent", "ghost", "roll"],
        "gongs": ["accent", "roll"]
      },
      "instrumentDialects": {
        "suona:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "paigu:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "gongs:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"percussion":0.12},"roleWidth":{"lead":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","percussion":"percussion"}}
      }
    }
  ]
});
