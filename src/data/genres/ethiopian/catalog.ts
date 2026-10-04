import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "ethiopian",
  "name": "Ethiopian",
  "family": "Ethiopia",
  "color": "#1f02f9",
  "description": "Ethiopian is an independent musical world. Ethiopia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Ethio-Jazz",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["tenor-sax", "trumpet", "organ", "bass", "drums", "kebero", "voice", "masenqo", "krar"],
  "roles": {
    "lead": ["tenor-sax", "trumpet"],
    "harmony": ["organ"],
    "bass": ["bass"],
    "percussion": ["drums", "kebero"]
  },
  "pitchSystem": "modal / drone-centered",
  "scales": ["minor-pentatonic"],
  "chordQualities": ["Dm7", "Gm7"],
  "harmonicRhythm": "bar",
  "cadences": ["Dm7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["Ethio-jazz pentatonic horn over syncopated organ", "Tizita slow ornamented pentatonic lament", "Ethiopian funk clipped horns and bass interlock", "traditional modal vocal response and sparse pulse", "modern Ethio-jazz electric keys and horn exchange"],
  "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "ethio-jazz",
      "name": "Ethio-Jazz",
      "description": "Ethio-Jazz: Ethio-jazz pentatonic horn over syncopated organ. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Ethio-jazz pentatonic horn over syncopated organ"],
      "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response", "bend", "accent", "legato", "tenuto", "ghost", "open", "roll", "slap"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["tenor-sax", "trumpet"],
        "harmony": ["organ"],
        "bass": ["bass"],
        "percussion": ["drums", "kebero"]
      },
      "progressions": {
        "intro": ["Dm7", "Dm7"],
        "theme": ["Dm7", "Dm7"],
        "solo": ["Dm7", "Gm7", "Dm7", "Dm7"],
        "coda": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "tenor-sax", "soloMode": "accompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Ethio-jazz pentatonic horn over syncopated organ tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ kebero pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["kebero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Ethio-jazz pentatonic horn over syncopated organ kebero cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kebero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "tenor-sax": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "trumpet": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "kebero": ["slap", "roll"]
      },
      "instrumentDialects": {
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "kebero:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
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
      "id": "tizita",
      "name": "Tizita",
      "description": "Tizita: Tizita slow ornamented pentatonic lament. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Tizita slow ornamented pentatonic lament"],
      "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response", "accent", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "slap", "roll"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "masenqo"],
        "harmony": ["krar"],
        "percussion": ["kebero"]
      },
      "progressions": {
        "intro": ["Dm7", "Dm7"],
        "theme": ["Dm7", "Dm7"],
        "solo": ["Dm7", "Gm7", "Dm7", "Dm7"],
        "coda": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "masenqo", "soloMode": "accompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Tizita slow ornamented pentatonic lament voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "Tizita slow ornamented pentatonic lament voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Tizita slow ornamented pentatonic lament masenqo statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["masenqo"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "Tizita slow ornamented pentatonic lament masenqo cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["masenqo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Tizita slow ornamented pentatonic lament krar accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["krar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Tizita slow ornamented pentatonic lament krar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["krar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Tizita slow ornamented pentatonic lament kebero pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["kebero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Tizita slow ornamented pentatonic lament kebero cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kebero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "vibrato", "accent", "legato"],
        "masenqo": ["staccato", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "legato"],
        "krar": ["staccato", "accent", "legato"],
        "kebero": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "vibrato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "masenqo:lead": {
          "allowedTechniques": ["staccato", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "krar:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "kebero:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
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
      "id": "ethiopian-funk",
      "name": "Ethiopian Funk",
      "description": "Ethiopian Funk: Ethiopian funk clipped horns and bass interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Ethiopian funk clipped horns and bass interlock"],
      "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response", "bend", "accent", "legato", "tenuto", "ghost", "open", "roll", "slap"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["tenor-sax", "trumpet"],
        "harmony": ["organ"],
        "bass": ["bass"],
        "percussion": ["drums", "kebero"]
      },
      "progressions": {
        "intro": ["Dm7", "Dm7"],
        "theme": ["Dm7", "Dm7"],
        "solo": ["Dm7", "Gm7", "Dm7", "Dm7"],
        "coda": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "tenor-sax", "soloMode": "accompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Ethiopian funk clipped horns and bass interlock tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ethiopian funk clipped horns and bass interlock tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethiopian funk clipped horns and bass interlock trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ethiopian funk clipped horns and bass interlock trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethiopian funk clipped horns and bass interlock organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Ethiopian funk clipped horns and bass interlock organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethiopian funk clipped horns and bass interlock low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Ethiopian funk clipped horns and bass interlock bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ethiopian funk clipped horns and bass interlock kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Ethiopian funk clipped horns and bass interlock drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Ethiopian funk clipped horns and bass interlock kebero pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["kebero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Ethiopian funk clipped horns and bass interlock kebero cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kebero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "tenor-sax": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "trumpet": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "kebero": ["slap", "roll"]
      },
      "instrumentDialects": {
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "kebero:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
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
      "id": "traditional-modal",
      "name": "Traditional Modal",
      "description": "Traditional Modal: traditional modal vocal response and sparse pulse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["traditional modal vocal response and sparse pulse"],
      "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response", "accent", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "slap", "roll"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "masenqo"],
        "harmony": ["krar"],
        "percussion": ["kebero"]
      },
      "progressions": {
        "intro": ["Dm7", "Dm7"],
        "theme": ["Dm7", "Dm7"],
        "solo": ["Dm7", "Gm7", "Dm7", "Dm7"],
        "coda": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "masenqo", "soloMode": "accompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "traditional modal vocal response and sparse pulse voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional modal vocal response and sparse pulse voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional modal vocal response and sparse pulse masenqo statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["masenqo"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional modal vocal response and sparse pulse masenqo cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["masenqo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional modal vocal response and sparse pulse krar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["krar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional modal vocal response and sparse pulse krar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["krar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional modal vocal response and sparse pulse kebero pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["kebero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "traditional modal vocal response and sparse pulse kebero cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kebero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "vibrato", "accent", "legato"],
        "masenqo": ["staccato", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "legato"],
        "krar": ["staccato", "accent", "legato"],
        "kebero": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "vibrato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "masenqo:lead": {
          "allowedTechniques": ["staccato", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "krar:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "kebero:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
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
      "id": "modern-ethio-jazz",
      "name": "Modern Ethio-Jazz",
      "description": "Modern Ethio-Jazz: modern Ethio-jazz electric keys and horn exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern Ethio-jazz electric keys and horn exchange"],
      "techniques": ["ornament", "vibrato", "pitch-bend", "staccato", "ghost-note", "call-response", "bend", "accent", "legato", "tenuto", "ghost", "open", "roll", "slap"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["tenor-sax", "trumpet"],
        "harmony": ["organ"],
        "bass": ["bass"],
        "percussion": ["drums", "kebero"]
      },
      "progressions": {
        "intro": ["Dm7", "Dm7"],
        "theme": ["Dm7", "Dm7"],
        "solo": ["Dm7", "Gm7", "Dm7", "Dm7"],
        "coda": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "tenor-sax", "soloMode": "accompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern Ethio-jazz electric keys and horn exchange tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern Ethio-jazz electric keys and horn exchange tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Ethio-jazz electric keys and horn exchange trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern Ethio-jazz electric keys and horn exchange trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Ethio-jazz electric keys and horn exchange organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern Ethio-jazz electric keys and horn exchange organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Ethio-jazz electric keys and horn exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "modern Ethio-jazz electric keys and horn exchange bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Ethio-jazz electric keys and horn exchange kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "modern Ethio-jazz electric keys and horn exchange drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "modern Ethio-jazz electric keys and horn exchange kebero pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["kebero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern Ethio-jazz electric keys and horn exchange kebero cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kebero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "tenor-sax": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "trumpet": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "kebero": ["slap", "roll"]
      },
      "instrumentDialects": {
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "kebero:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
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
