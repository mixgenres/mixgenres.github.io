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
  "tuningSystem": "12-tet",
  "scales": ["minor", "major"],
  "chordQualities": ["Am", "Em", "G", "D", "Eb", "Ab", "Bb7", "Cm", "Fm", "G7", "D5", "Eb5", "C5", "F5", "Fmaj7", "Dm", "Bb", "Gm", "A", "F", "C", "Bm"],
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
      "description": "Modern Score builds a four-chord piano ostinato into a broad string-and-horn climax. Keep the synth bed quiet at first, add cello weight and orchestral color in stages, then remove the layers until the piano carries the release alone.",
      "patterns": ["modern thematic piano and orchestral swell"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Em", "G", "D"],
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
        "opening": ["Am"],
        "ostinato": ["Am", "Em", "G", "D"],
        "build": ["Am", "Em", "G", "D"],
        "climax": ["Am", "Em", "G", "D"],
        "resolution": ["Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 8},
        {"label": "ostinato", "bars": 16},
        {"label": "build", "bars": 16},
        {"label": "climax", "bars": 16},
        {"label": "release", "bars": 8},
        {"label": "outro", "bars": 8}
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
      "description": "Golden Age score writing sets a clear brass fanfare against a broad, singing string theme. Let the second theme soften and turn harmonically, then use a denser development and battle passage to earn the full orchestral reprise and coda.",
      "patterns": ["Golden Age lyrical strings and brass cadence"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Eb", "Ab", "Bb7", "Cm", "Fm", "G7"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "fanfare": ["Eb", "Ab", "Bb7", "Eb"],
        "A": ["Eb", "Ab", "Bb7", "Eb"],
        "B": ["Cm", "Fm", "G7", "Cm"],
        "development": ["Cm", "Fm", "G7", "Cm"],
        "battle": ["Eb", "Ab", "Bb7", "Eb"],
        "coda": ["Eb", "Eb"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "fanfare", "bars": 16},
        {"label": "A", "bars": 32},
        {"label": "B", "bars": 24},
        {"label": "development", "bars": 32},
        {"label": "battle", "bars": 32},
        {"label": "A", "bars": 32},
        {"label": "coda", "bars": 16}
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
      "description": "Minimal Tension grows from a narrow, repeated piano-and-cello figure with uneasy semitone color. Change one layer at a time through the long build; keep the pulse in the pitched parts, leave the timpani out, and let the release fall back to the bare cell.",
      "patterns": ["minimal tension repeated short ostinato"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["D5", "Eb5", "C5", "F5"],
      "meter": "4/4",
      "tempo": [56, 64],
      "scale": "minor",
      "roles": {
        "lead": ["piano"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5"],
        "pulse": ["D5", "D5", "Eb5", "D5"],
        "descent": ["D5", "C5", "Eb5", "D5"],
        "build": ["D5", "Eb5", "D5", "C5"],
        "climax": ["D5", "Eb5", "F5", "D5"],
        "release": ["D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 16},
        {"label": "pulse", "bars": 32},
        {"label": "descent", "bars": 32},
        {"label": "build", "bars": 48},
        {"label": "climax", "bars": 32},
        {"label": "release", "bars": 16}
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
      "description": "Hybrid score sets a dry piano hook against a low electronic pulse and granular synth color. Bring strings and timpani in as short impact layers, drop them before the hook returns, and keep the acoustic attacks distinct from the programmed low end.",
      "patterns": ["hybrid pulse and layered orchestral hits"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Fmaj7", "C", "G", "Em"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Am", "Fmaj7"],
        "A": ["Am", "Fmaj7", "C", "G"],
        "evolution": ["Am", "Fmaj7", "C", "Em"],
        "dissolve": ["Am", "Fmaj7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 8},
        {"label": "A", "bars": 16},
        {"label": "evolution", "bars": 16},
        {"label": "A", "bars": 16},
        {"label": "dissolve", "bars": 8}
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
      "description": "Epic score carries a broad horn motif over a driving low ostinato and timpani. Alternate battle passages with a sustained chorale, cut the pulse for a real break, then bring the full ensemble back for the climax and let the final fall clear the low percussion.",
      "patterns": ["epic low ostinato and brass climax"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Dm", "Bb", "Gm", "A", "F", "C"],
      "meter": "4/4",
      "tempo": [136, 148],
      "scale": "minor",
      "roles": {
        "lead": ["piano", "french-horn"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["Dm", "Bb", "Gm", "A"],
        "battle": ["Dm", "Bb", "Gm", "A"],
        "chorale": ["F", "C", "Bb", "F"],
        "break": ["Dm"],
        "climax": ["Dm", "Bb", "Gm", "A"],
        "fall": ["Bb", "A"],
        "coda": ["Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 8},
        {"label": "battle", "bars": 32},
        {"label": "chorale", "bars": 16},
        {"label": "battle", "bars": 32},
        {"label": "break", "bars": 8},
        {"label": "climax", "bars": 24},
        {"label": "fall", "bars": 8},
        {"label": "coda", "bars": 16}
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
      "description": "Ambient Score floats a soft synthesizer melody through long string and cello tones, with piano replies after each breath. Move the harmony slowly, keep percussion out, and dissolve the last phrase without forcing a dance pulse or a climactic drum hit.",
      "patterns": ["ambient score floating motif and long textures"],
      "techniques": ["legato", "tremolo", "staccato", "volume-swell", "harmonics", "roll", "accent", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["D5", "Bm", "G", "A"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "major",
      "roles": {
        "lead": ["synth"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "texture": ["piano"]
      },
      "progressions": {
        "opening": ["D5"],
        "A": ["D5", "Bm", "G", "A"],
        "solo": ["D5", "Bm", "G", "A"],
        "dissolve": ["D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 16},
        {"label": "A", "bars": 32},
        {"label": "solo", "bars": 32},
        {"label": "A", "bars": 32},
        {"label": "dissolve", "bars": 16}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ambient score synthetic long-tone lead motif", "shortName": "Synth slow motif", "description": "Play a beginner three-note contour with long, connected tones and a small breath before the next phrase. Let the performance layer vary register and note color without speeding up the calm pulse.", "role": "lead", "onsets": [0, 1.5, 2.75], "instruments": ["synth"], "cycleLength": 1, "durations": [1.2, 0.9, 1.0], "articulation": "legato", "pedagogicalStudy": "answer", "arrangementVariation": true},
        {"name": "ambient score synthetic phrase answer", "shortName": "Synth answering phrase", "description": "Answer after the lead breath with two soft, connected notes. Keep the contour inside the same slow harmonic color and leave the bar line open.", "role": "lead", "onsets": [1.75, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.65, 0.8], "articulation": "legato", "pedagogicalStudy": "answer", "arrangementVariation": true},
        {"name": "ambient score soft piano breath reply", "shortName": "Piano breath reply", "description": "Place two quiet piano tones in the open space after the sustained lead. This beginner answer marks a breath without turning the piano into a regular beat.", "role": "texture", "onsets": [1.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.75], "articulation": "tenuto", "pedagogicalStudy": "answer", "arrangementVariation": true},
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
        "synth:lead": {
          "allowedTechniques": ["legato", "tenuto", "vibrato", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:texture": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "tenuto"
        },
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
