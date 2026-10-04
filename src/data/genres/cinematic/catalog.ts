import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "cinematic",
  "name": "Cinematic",
  "family": "Global screen music",
  "color": "#47019e",
  "description": "Cinematic is an independent musical world. Global screen music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern Score",
  "meter": "4/4",
  "tempo": [76, 92],
  "instruments": ["piano", "french-horn", "string-ensemble", "cello", "timpani", "synth"],
  "roles": {
    "lead": ["piano", "french-horn"],
    "harmony": ["string-ensemble"],
    "bass": ["cello"],
    "percussion": ["timpani"],
    "texture": ["synth"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm", "Bb", "F", "C", "Gm", "A7"],
  "harmonicRhythm": "bar",
  "cadences": ["Dm"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["modern thematic piano and orchestral swell", "Golden Age lyrical strings and brass cadence", "minimal tension repeated short ostinato", "hybrid pulse and layered orchestral hits", "epic low ostinato and brass climax", "ambient score floating motif and long textures"],
  "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "modern-score",
      "name": "Modern Score",
      "description": "Modern Score: modern thematic piano and orchestral swell. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern thematic piano and orchestral swell"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern thematic piano and orchestral swell piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "modern thematic piano and orchestral swell piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern thematic piano and orchestral swell french-horn statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["french-horn"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "modern thematic piano and orchestral swell french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern thematic piano and orchestral swell string-ensemble accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "modern thematic piano and orchestral swell string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern thematic piano and orchestral swell low anchor", "role": "bass", "onsets": [0], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "modern thematic piano and orchestral swell cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern thematic piano and orchestral swell timpani pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern thematic piano and orchestral swell timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern thematic piano and orchestral swell synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: Golden Age lyrical strings and brass cadence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Golden Age lyrical strings and brass cadence"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Golden Age lyrical strings and brass cadence piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age lyrical strings and brass cadence piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age lyrical strings and brass cadence french-horn statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["french-horn"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age lyrical strings and brass cadence french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age lyrical strings and brass cadence string-ensemble accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Golden Age lyrical strings and brass cadence string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age lyrical strings and brass cadence low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Golden Age lyrical strings and brass cadence cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age lyrical strings and brass cadence timpani pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Golden Age lyrical strings and brass cadence timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Golden Age lyrical strings and brass cadence synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "minimal-tension",
      "name": "Minimal Tension",
      "description": "Minimal Tension: minimal tension repeated short ostinato. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["minimal tension repeated short ostinato"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "minimal tension repeated short ostinato piano statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "minimal tension repeated short ostinato piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal tension repeated short ostinato french-horn statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["french-horn"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "minimal tension repeated short ostinato french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal tension repeated short ostinato string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "minimal tension repeated short ostinato string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal tension repeated short ostinato low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "minimal tension repeated short ostinato cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal tension repeated short ostinato timpani pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "minimal tension repeated short ostinato timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "minimal tension repeated short ostinato synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.5,"reverbSend":0.3,"delaySend":0.28,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "hybrid",
      "name": "Hybrid",
      "description": "Hybrid: hybrid pulse and layered orchestral hits. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["hybrid pulse and layered orchestral hits"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "hybrid pulse and layered orchestral hits piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hybrid pulse and layered orchestral hits piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hybrid pulse and layered orchestral hits french-horn statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["french-horn"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hybrid pulse and layered orchestral hits french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hybrid pulse and layered orchestral hits string-ensemble accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "hybrid pulse and layered orchestral hits string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hybrid pulse and layered orchestral hits low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "hybrid pulse and layered orchestral hits cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hybrid pulse and layered orchestral hits timpani pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "hybrid pulse and layered orchestral hits timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "hybrid pulse and layered orchestral hits synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "epic",
      "name": "Epic",
      "description": "Epic: epic low ostinato and brass climax. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["epic low ostinato and brass climax"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "epic low ostinato and brass climax piano statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "epic low ostinato and brass climax piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "epic low ostinato and brass climax french-horn statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["french-horn"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "epic low ostinato and brass climax french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "epic low ostinato and brass climax string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "epic low ostinato and brass climax string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "epic low ostinato and brass climax low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "epic low ostinato and brass climax cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "epic low ostinato and brass climax timpani pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "epic low ostinato and brass climax timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "epic low ostinato and brass climax synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":3.4,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "ambient-score",
      "name": "Ambient Score",
      "description": "Ambient Score: ambient score floating motif and long textures. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["ambient score floating motif and long textures"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "F", "C", "Gm", "A7"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "F", "C"],
        "theme": ["Dm", "Bb", "F", "C"],
        "development": ["Gm", "A7", "Dm", "Dm"],
        "resolution": ["Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "resolution", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ambient score floating motif and long textures piano statement", "role": "lead", "onsets": [0], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "ambient score floating motif and long textures piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ambient score floating motif and long textures french-horn statement", "role": "lead", "onsets": [0], "instruments": ["french-horn"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "ambient score floating motif and long textures french-horn cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["french-horn"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ambient score floating motif and long textures string-ensemble accompaniment", "role": "harmony", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "ambient score floating motif and long textures string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ambient score floating motif and long textures low anchor", "role": "bass", "onsets": [0], "instruments": ["cello"], "cycleLength": 1, "articulation": "legato", "durations": [2]},
        {"name": "ambient score floating motif and long textures cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ambient score floating motif and long textures timpani pulse", "role": "percussion", "onsets": [0], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ambient score floating motif and long textures timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "ambient score floating motif and long textures synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "french-horn": ["staccato", "legato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "staccato", "accent"],
        "cello": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
        "timpani": ["staccato", "roll", "accent", "ghost", "open"],
        "synth": ["staccato", "legato", "accent", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "french-horn:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["legato", "staccato", "tremolo", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.62,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
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
