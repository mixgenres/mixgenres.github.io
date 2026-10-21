import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gospel",
  "name": "Gospel",
  "family": "African American / United States",
  "color": "#0b7346",
  "description": "Gospel is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Choir Gospel",
  "meter": "4/4",
  "tempo": [92, 108],
  "instruments": ["voice", "choir", "piano", "organ", "bass", "drums", "tambourine", "guitar", "hand-percussion"],
  "roles": {
    "lead": ["voice", "choir"],
    "harmony": ["piano", "organ"],
    "bass": ["bass"],
    "percussion": ["drums", "tambourine"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G7", "Am", "Dm7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["choir response and organ shout vamp", "traditional gospel piano and handclap response", "quartet lead and stacked vocal reply", "gospel soul backbeat with organ answers", "contemporary gospel syncopated band and choir lift"],
  "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "choir-gospel",
      "name": "Choir Gospel",
      "description": "Choir Gospel: choir response and organ shout vamp. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["choir response and organ shout vamp"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "choir response and organ shout vamp voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "choir response and organ shout vamp choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "choir response and organ shout vamp piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "choir response and organ shout vamp organ accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "choir response and organ shout vamp low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "choir response and organ shout vamp kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Choir support pocket", "description": "Practice this two-bar choir support pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "choir response and organ shout vamp drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Choir support close", "description": "Close with the last two beats of the choir support pocket; keep the spaces clear and land the next phrase together."},
        {"name": "choir response and organ shout vamp tambourine pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":3.4,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: traditional gospel piano and handclap response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["traditional gospel piano and handclap response"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "traditional gospel piano and handclap response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional gospel piano and handclap response choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional gospel piano and handclap response piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional gospel piano and handclap response organ accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional gospel piano and handclap response low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "traditional gospel piano and handclap response kit", "role": "percussion", "onsets": [0, 0, 0.666667, 1, 1, 1.666667, 2, 2, 2.666667, 3, 3, 3.666667, 4, 4, 4.666667, 5, 5, 5.666667, 6, 6, 6.666667, 7, 7, 7.666667], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5], "articulation": "accent", "shortName": "Traditional gospel ride", "description": "Practice this two-bar traditional gospel ride. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "traditional gospel piano and handclap response drums cadence fill", "role": "percussion", "onsets": [2, 2, 2.666667, 3, 3, 3.666667], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "ride", "ride", "snare", "ride"], "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5], "shortName": "Traditional gospel close", "description": "Close with the last two beats of the traditional gospel ride; keep the spaces clear and land the next phrase together."},
        {"name": "traditional gospel piano and handclap response tambourine pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "quartet",
      "name": "Quartet",
      "description": "Quartet: quartet lead and stacked vocal reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["quartet lead and stacked vocal reply"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "legato-single-note", "ghost", "roll", "open"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["hand-percussion"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "quartet lead and stacked vocal reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "quartet lead and stacked vocal reply choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "quartet lead and stacked vocal reply guitar accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "quartet lead and stacked vocal reply low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "quartet lead and stacked vocal reply hand-percussion pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "guitar": ["legato", "vibrato", "glissando", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "hand-percussion": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "glissando", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "gospel-soul",
      "name": "Gospel-Soul",
      "description": "Gospel-Soul: gospel soul backbeat with organ answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["gospel soul backbeat with organ answers"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "gospel soul backbeat with organ answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gospel soul backbeat with organ answers choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gospel soul backbeat with organ answers piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.25], "instruments": ["piano"], "cycleLength": 2, "durations": [0.6, 0.3, 0.5, 0.6, 0.35, 0.7, 0.3, 0.75, 0.5], "articulation": "accent", "accents": [0.9, 0.5, 0.75, 0.6, 0.85, 0.65, 0.5, 0.85, 0.7], "pitches": [{"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}], "description": "Use short piano responses and broader chord arrivals around the sung line; keep the closing pickup light. Original ensemble study, not a recording transcription."},
        {"name": "gospel soul backbeat with organ answers organ accompaniment", "role": "harmony", "onsets": [0, 2.75, 4, 6.5], "instruments": ["organ"], "cycleLength": 2, "durations": [2.25, 0.8, 2, 0.9], "articulation": "legato", "accents": [0.65, 0.5, 0.8, 0.6], "pitches": [{"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}], "description": "Sustain organ harmony behind the piano answers, leaving an audible release before each new vocal phrase. Original ensemble study, not a recording transcription."},
        {"name": "gospel soul backbeat with organ answers low anchor", "role": "bass", "onsets": [0, 1, 2.5, 3.25, 4, 5.5, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.7, 0.65, 0.45, 0.5, 0.9, 0.35, 0.4, 0.4, 0.3], "accents": [0.95, 0.6, 0.7, 0.55, 1, 0.55, 0.75, 0.5, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 6, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 6, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Hold the gospel roots firmly and connect them with short upper chord-tone answers that leave the vocal cadence room. Original ensemble study, not a recording transcription."},
        {"name": "gospel soul backbeat with organ answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 5.75, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "ghost", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "ghost", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Gospel soul pocket", "description": "Practice this two-bar gospel soul pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "gospel soul backbeat with organ answers drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Gospel soul close", "description": "Close with the last two beats of the gospel soul pocket; keep the spaces clear and land the next phrase together."},
        {"name": "gospel soul backbeat with organ answers tambourine pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: contemporary gospel syncopated band and choir lift. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["contemporary gospel syncopated band and choir lift"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "contemporary gospel syncopated band and choir lift voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary gospel syncopated band and choir lift choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary gospel syncopated band and choir lift piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.75, 3.5, 4, 5.25, 6, 6.5, 7.25], "instruments": ["piano"], "cycleLength": 2, "durations": [0.55, 0.3, 0.7, 0.3, 0.4, 0.9, 0.3, 0.35, 0.5, 0.6], "articulation": "accent", "accents": [0.9, 0.5, 0.75, 0.55, 0.65, 1, 0.5, 0.7, 0.55, 0.85], "pitches": [{"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}, {"voicing": "chord", "register": 57}], "description": "Support the sung call with syncopated piano voicings and a fuller second-bar arrival. Keep the vocal breath clear. Original ensemble study, not a recording transcription."},
        {"name": "contemporary gospel syncopated band and choir lift organ accompaniment", "role": "harmony", "onsets": [0, 3.25, 4.75, 7], "instruments": ["organ"], "cycleLength": 2, "durations": [2.8, 0.55, 1.75, 0.75], "articulation": "legato", "accents": [0.65, 0.5, 0.8, 0.6], "pitches": [{"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}], "description": "Hold organ support under the piano rhythm; swell into the response and release before the next vocal call. Original ensemble study, not a recording transcription."},
        {"name": "contemporary gospel syncopated band and choir lift low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "contemporary gospel syncopated band and choir lift kit", "role": "percussion", "onsets": [0.0, 0, 0.25, 0.5, 0.75, 0.75, 1.0, 1, 1.25, 1.5, 1.5, 1.75, 2.0, 2.25, 2.5, 2.5, 2.75, 2.75, 3.0, 3, 3.25, 3.5, 3.75, 4.0, 4, 4.25, 4.5, 4.75, 4.75, 5.0, 5, 5.25, 5.5, 5.75, 5.75, 6.0, 6, 6.25, 6.5, 6.75, 6.75, 7.0, 7, 7.25, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "hat", "ghost", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "ghost", "hat", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.92, 0.28, 0.42, 0.28, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28], "articulation": "accent", "shortName": "Contemporary gospel kick line", "description": "Practice this two-bar contemporary gospel kick line. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "contemporary gospel syncopated band and choir lift drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.25, 2.5, 2.75, 2.75, 3.0, 3, 3.25, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "accents": [0.5, 0.92, 0.5, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.5, 0.5], "shortName": "Contemporary gospel close", "description": "Close with the last two beats of the contemporary gospel kick line; keep the spaces clear and land the next phrase together."},
        {"name": "contemporary gospel syncopated band and choir lift tambourine pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
