import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "bollywood",
  "name": "Bollywood",
  "family": "India",
  "color": "#09b542",
  "description": "Bollywood is an independent musical world. India idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "bansuri", "guitar", "string-ensemble", "bass", "tabla", "drums", "synth"],
  "roles": {
    "lead": ["voice", "bansuri"],
    "harmony": ["guitar", "string-ensemble", "synth"],
    "bass": ["bass"],
    "percussion": ["tabla", "drums"]
  },
  "pitchSystem": "raga / shruti inflection",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "G", "C", "E7"],
  "harmonicRhythm": "bar",
  "cadences": ["E7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["modern film hook and orchestral response", "Golden Age melodic prelude and string answers", "disco octave bass and string refrain", "romantic legato vocal and arpeggiated strings", "folk cinematic drum cycle and flute reply", "club kick and synth film hook"],
  "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "modern",
      "name": "Modern",
      "description": "Modern: modern film hook and orchestral response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern film hook and orchestral response"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern film hook and orchestral response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern film hook and orchestral response bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern film hook and orchestral response guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern film hook and orchestral response string chord bed", "shortName": "Cinematic string bed", "description": "Give the vocal hook two broad string chords on beats one and three, releasing each before the next pulse. Leave the shorter rhythmic comping to guitar.", "role": "harmony", "onsets": [0, 2], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [1.8, 1.8], "articulation": "legato"},
        {"name": "modern film hook and orchestral response string cadence hold", "shortName": "String cadence", "description": "Place one quiet sustained chord at the phrase close, then release so the next vocal pickup has room.", "role": "harmony", "onsets": [3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.45], "phraseEnd": true, "articulation": "legato"},
        {"name": "modern film hook and orchestral response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "modern film hook and orchestral response tabla pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern film hook and orchestral response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Modern film dance pocket", "description": "Practice this two-bar modern film dance pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "modern film hook and orchestral response drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Modern film close", "description": "Close with the last two beats of the modern film dance pocket; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: Golden Age melodic prelude and string answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Golden Age melodic prelude and string answers"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Golden Age melodic prelude and string answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Golden Age melodic prelude and string answers string phrase reply", "shortName": "String answer", "description": "Answer the singer in the vocal gap with two connected upper chord tones. Let the guitar keep its independent accompaniment pattern.", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.65, 0.5], "pitches": [{"degree": 5, "register": 74, "voicing": "single"}, {"degree": 3, "register": 74, "voicing": "single"}], "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers string cadence reply", "shortName": "String cadence reply", "description": "Close the vocal phrase with a falling third-to-root answer rather than a generic drum-like fill.", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.6, 0.45], "pitches": [{"degree": 3, "register": 74, "voicing": "single"}, {"degree": 1, "register": 74, "voicing": "single"}], "phraseEnd": true, "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Golden Age melodic prelude and string answers tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Golden Age melodic prelude and string answers kit", "role": "percussion", "onsets": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "rim", "hat", "kick", "hat", "rim", "hat", "kick", "hat", "rim", "hat", "kick", "hat", "rim"], "cycleLength": 2, "accents": [0.42, 0.92, 0.42, 0.65, 0.42, 0.92, 0.42, 0.65, 0.42, 0.92, 0.42, 0.65, 0.42, 0.92, 0.42, 0.65], "articulation": "accent", "shortName": "Film orchestra light kit", "description": "Practice this two-bar film orchestra light kit. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Golden Age melodic prelude and string answers drums cadence fill", "role": "percussion", "onsets": [2, 2, 3, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "rim"], "accents": [0.5, 0.92, 0.5, 0.5], "shortName": "Film orchestra close", "description": "Close with the last two beats of the film orchestra light kit; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "disco-bollywood",
      "name": "Disco Bollywood",
      "description": "Disco Bollywood: disco octave bass and string refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["disco octave bass and string refrain"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "string-ensemble", "synth"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "disco octave bass and string refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "disco octave bass and string refrain synth hook", "shortName": "Disco synth answer", "role": "harmony", "onsets": [0.5, 1.75, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.35, 0.3, 0.35, 0.55], "accents": [0.75, 0.52, 0.85, 0.95], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain synth pickup", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "disco octave bass and string refrain guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain string stabs", "shortName": "Disco string stabs", "description": "Strike short chord stabs on beats two and four, between the guitar's clipped scratches and the octave bass pulse.", "role": "harmony", "onsets": [1, 3], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.22, 0.22], "accents": [0.92, 0.78], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain string turnaround stab", "shortName": "String turnaround", "description": "Use one tight string accent as a phrase pickup; keep the final beat clear for the singer's return.", "role": "harmony", "onsets": [3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.2], "accents": [0.95], "phraseEnd": true, "articulation": "staccato"},
        {"name": "disco octave bass and string refrain sitar answer", "shortName": "Sitar disco answer", "description": "Pick a short, bright answer between the vocal phrases: touch the third, fifth, fourth, then second and leave the final beat open.", "role": "harmony", "onsets": [0.5, 1.75, 2.5, 3.25], "instruments": ["sitar"], "cycleLength": 1, "durations": [0.32, 0.28, 0.34, 0.48], "pitches": [{"degree": 3, "register": 74}, {"degree": 5, "register": 74}, {"degree": 4, "register": 74}, {"degree": 2, "register": 74}], "accents": [0.8, 0.56, 0.78, 0.92], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain sitar turnaround", "shortName": "Sitar turnaround", "description": "Answer the last disco bar with one clipped pluck, then release before the octave bass closes the phrase.", "role": "harmony", "onsets": [3.5], "instruments": ["sitar"], "cycleLength": 1, "durations": [0.22], "accents": [0.95], "phraseEnd": true, "articulation": "staccato"},
        {"name": "disco octave bass and string refrain low anchor", "shortName": "Disco octave bass", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "pitches": [{"degree": 1, "register": 36}, {"degree": 1, "register": 48}, {"degree": 1, "register": 36}, {"degree": 1, "register": 48}, {"degree": 1, "register": 36}, {"degree": 1, "register": 48}, {"degree": 1, "register": 36}, {"degree": 1, "register": 48}], "articulation": "staccato", "durations": [0.38, 0.22, 0.38, 0.22, 0.38, 0.22, 0.38, 0.22], "accents": [0.98, 0.5, 0.82, 0.48, 0.92, 0.5, 0.84, 0.56]},
        {"name": "disco octave bass and string refrain kit", "shortName": "Four-on-floor backbeat", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "clap", "openHat", "kick", "openHat", "kick", "clap", "openHat"], "cycleLength": 1, "accents": [0.98, 0.55, 0.88, 0.72, 0.52, 0.95, 0.5, 0.88, 0.76, 0.55]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "sitar": ["staccato", "accent", "ornament", "tremolo"],
        "synth": ["staccato", "accent", "filter-sweep", "portamento", "arpeggio"],
        "bass": ["legato", "accent", "staccato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "sitar:harmony": {
          "allowedTechniques": ["staccato", "accent", "ornament", "tremolo"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "accent", "filter-sweep", "portamento", "arpeggio"],
          "defaultTechnique": "staccato",
          "patchId": "synth-brass"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "romantic",
      "name": "Romantic",
      "description": "Romantic: romantic legato vocal and arpeggiated strings. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["romantic legato vocal and arpeggiated strings"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "romantic legato vocal and arpeggiated strings voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings guitar accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "romantic legato vocal and arpeggiated strings string arpeggio", "shortName": "String arpeggio", "description": "Play a connected tonic–third–fifth–third figure, one note at a time, under the longer vocal line. Let the written chord change reset the figure.", "role": "harmony", "onsets": [0, 1, 2, 3], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.78, 0.72, 0.78, 0.72], "pitches": [{"degree": 1, "register": 62, "voicing": "single"}, {"degree": 3, "register": 62, "voicing": "single"}, {"degree": 5, "register": 62, "voicing": "single"}, {"degree": 3, "register": 62, "voicing": "single"}], "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings string cadence line", "shortName": "String cadence line", "description": "At the phrase end, descend through the fifth, third, and root as a quiet connected line; leave a breath before the next refrain.", "role": "harmony", "onsets": [1.5, 2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.65, 0.6, 0.4], "pitches": [{"degree": 5, "register": 62, "voicing": "single"}, {"degree": 3, "register": 62, "voicing": "single"}, {"degree": 1, "register": 62, "voicing": "single"}], "phraseEnd": true, "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "romantic legato vocal and arpeggiated strings tabla pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "romantic legato vocal and arpeggiated strings kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "rim", "hat", "hat", "kick", "rim", "hat", "hat", "kick", "hat", "rim", "hat", "hat", "kick", "rim", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.65, 0.28, 0.42, 0.92, 0.65, 0.28, 0.42, 0.92, 0.28, 0.65, 0.28, 0.42, 0.92, 0.65, 0.28], "articulation": "accent", "shortName": "Romantic film rim pocket", "description": "Practice this two-bar romantic film rim pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "romantic legato vocal and arpeggiated strings drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "rim", "hat"], "accents": [0.5, 0.92, 0.5, 0.5], "shortName": "Romantic film close", "description": "Close with the last two beats of the romantic film rim pocket; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "folk-cinematic",
      "name": "Folk-Cinematic",
      "description": "Folk-Cinematic: folk cinematic drum cycle and flute reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["folk cinematic drum cycle and flute reply"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "6/8",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "folk cinematic drum cycle and flute reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "folk cinematic drum cycle and flute reply bansuri statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "folk cinematic drum cycle and flute reply guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "folk cinematic drum cycle and flute reply sustained string bed", "shortName": "Folk string bed", "description": "Hold one chord through the bar beneath the folk percussion and vocal call. Release before the phrase pickup instead of copying the guitar's rhythmic attacks.", "role": "harmony", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [3.75], "articulation": "legato"},
        {"name": "folk cinematic drum cycle and flute reply folk string landing", "shortName": "Folk string landing", "description": "Place a short chord landing late in the closing bar, then leave a clear gap before the next call.", "role": "harmony", "onsets": [2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.5], "phraseEnd": true, "articulation": "accent"},
        {"name": "folk cinematic drum cycle and flute reply low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "folk cinematic drum cycle and flute reply tabla pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "folk cinematic drum cycle and flute reply kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":3.4,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "electronic-club",
      "name": "Electronic / Club",
      "description": "Electronic / Club: club kick and synth film hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["club kick and synth film hook"],
      "techniques": ["legato", "staccato", "accent", "filter-sweep", "portamento", "arpeggio", "roll", "ghost", "open"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "club kick and synth film hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "club synth hook syncopated stabs", "role": "harmony", "onsets": [0, 0.75, 2, 2.75], "instruments": ["synth"], "cycleLength": 1, "durations": [0.3, 0.3, 0.3, 0.3], "accents": [0.9, 0.55, 0.85, 0.6], "articulation": "staccato"},
        {"name": "club synth pickup sweep", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "club kick and synth film hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "club kick and synth film hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Bollywood club pulse", "description": "Practice this two-bar bollywood club pulse. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "club kick and synth film hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "kick", "snare", "hat"], "accents": [0.5, 0.92, 0.5, 0.5, 0.92, 0.85, 0.5], "shortName": "Bollywood club close", "description": "Close with the last two beats of the bollywood club pulse; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "synth": ["staccato", "accent", "filter-sweep", "portamento", "arpeggio"],
        "bass": ["legato", "accent", "staccato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "accent", "filter-sweep", "portamento", "arpeggio"],
          "defaultTechnique": "staccato",
          "patchId": "synth-brass"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
