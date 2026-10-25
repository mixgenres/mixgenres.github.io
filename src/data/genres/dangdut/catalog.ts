import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "dangdut",
  "name": "Dangdut",
  "family": "Indonesia",
  "color": "#e2044b",
  "description": "Dangdut is an independent musical world. Indonesia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "flute", "guitar", "bass", "kendang", "drums"],
  "roles": {
    "lead": ["voice", "flute"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["kendang", "drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["harmonic-minor"],
  "chordQualities": ["Am", "G", "F", "E7", "Dm"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["kendang syncopation and suling answers", "koplo rapid kendang fills and dance accents", "rock dangdut guitar over kendang cycle", "electronic dangdut kick and kendang breaks"],
  "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: kendang syncopation and suling answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kendang syncopation and suling answers"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kendang syncopation and suling answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kendang syncopation and suling answers flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kendang syncopation and suling answers guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "kendang syncopation and suling answers low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "kendang syncopation and suling answers kendang pulse", "role": "percussion", "onsets": [0, 0.5, 0.75, 1.5, 2, 2.5, 3, 3.25, 3.5], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "ghost", "slap", "open", "dum", "ghost", "open", "ghost", "slap"], "accents": [0.9, 0.3, 0.65, 0.75, 0.85, 0.3, 0.7, 0.35, 0.9], "description": "Alternate the low drum and upper hand replies; keep the final three-stroke answer lighter until its closing slap. Original ensemble lesson; not a recording transcription."},
        {"name": "kendang syncopation and suling answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "rim", "hat", "hat", "hat", "kick", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat", "hat", "hat", "kick", "hat", "rim", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.42, 0.28, 0.92, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.42, 0.28, 0.92, 0.42, 0.65, 0.28], "articulation": "accent", "shortName": "Dangdut kit punctuation", "description": "Practice this two-bar dangdut kit punctuation. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "kendang syncopation and suling answers drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "rim", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.5, 0.5], "shortName": "Dangdut kit close", "description": "Close with the last two beats of the dangdut kit punctuation; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "koplo",
      "name": "Koplo",
      "description": "Koplo: koplo rapid kendang fills and dance accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["koplo rapid kendang fills and dance accents"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [140, 156],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "koplo rapid kendang fills and dance accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koplo rapid kendang fills and dance accents flute statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koplo rapid kendang fills and dance accents guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.75, 2.5, 3.25, 3.75, 4, 4.75, 5.5, 6.25, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.2, 0.2, 0.25, 0.2, 0.25, 0.2, 0.12, 0.25, 0.2, 0.25, 0.2, 0.3, 0.3], "articulation": "strum", "accents": [0.9, 0.45, 0.65, 0.8, 0.5, 0.75, 0.4, 0.95, 0.5, 0.7, 0.5, 0.85, 0.6], "pitches": [{"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}, {"voicing": "chord", "register": 59}], "description": "Drive short dance strums around the kendang replies; lighten the pickups so the drum conversation remains clear. Original ensemble study, not a recording transcription."},
        {"name": "koplo rapid kendang fills and dance accents low anchor", "role": "bass", "onsets": [0, 0.5, 1.25, 2, 2.75, 3.5, 4, 4.75, 5.5, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.3, 0.4, 0.3, 0.4, 0.3, 0.3, 0.5, 0.3, 0.4, 0.3, 0.4, 0.3], "accents": [1, 0.5, 0.75, 0.9, 0.55, 0.8, 1, 0.55, 0.8, 0.9, 0.6, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep quick low anchors under the kendang conversation, letting the offbeat upper notes answer rather than stamping every eighth. Original ensemble study, not a recording transcription."},
        {"name": "koplo rapid kendang fills and dance accents kendang pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "koplo rapid kendang fills and dance accents kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 3.75, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "ghost", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "ghost"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28], "articulation": "accent", "shortName": "Koplo kit drive", "description": "Practice this two-bar koplo kit drive. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "koplo rapid kendang fills and dance accents drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat", "ghost"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.32], "shortName": "Koplo kit close", "description": "Close with the last two beats of the koplo kit drive; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "rock-dangdut",
      "name": "Rock Dangdut",
      "description": "Rock Dangdut: rock dangdut guitar over kendang cycle. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["rock dangdut guitar over kendang cycle"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "rock dangdut guitar over kendang cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock dangdut guitar over kendang cycle flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock dangdut guitar over kendang cycle guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.25, 2, 2.5, 3.25, 4, 4.75, 5.5, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.2, 0.2, 0.35, 0.2, 0.3, 0.35, 0.2, 0.2, 0.35, 0.2, 0.3], "articulation": "pick", "accents": [0.95, 0.5, 0.65, 0.8, 0.5, 0.7, 0.95, 0.55, 0.7, 0.85, 0.5, 0.8], "pitches": [{"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}], "description": "Alternate a low rock figure with short chords while leaving the kendang syncopations clear. Original ensemble study, not a recording transcription."},
        {"name": "rock dangdut guitar over kendang cycle low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2, 2.75, 3.5, 4, 5.25, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.5, 0.3, 0.3, 0.5, 0.3, 0.3, 0.8, 0.5, 0.4, 0.4, 0.3], "accents": [0.95, 0.5, 0.75, 0.9, 0.55, 0.75, 1, 0.55, 0.8, 0.6, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Match the rock low anchors while answering the kendang with shorter offbeat bass notes. Original ensemble study, not a recording transcription."},
        {"name": "rock dangdut guitar over kendang cycle kendang pulse", "role": "percussion", "onsets": [0.0, 0.75, 1.5, 2.0, 2.5, 3.25, 3.5], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "slap", "open", "dum", "ghost", "slap", "open"], "accents": [0.9, 0.7, 0.7, 0.85, 0.3, 0.8, 0.65], "shortName": "Rock kendang replies", "description": "Let the kit anchor the rock pulse while low drum and upper-hand answers keep their own kendang line. Ensemble learning adaptation, not a recording transcription."},
        {"name": "rock dangdut guitar over kendang cycle kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Dangdut rock accents", "description": "Practice this two-bar dangdut rock accents. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "rock dangdut guitar over kendang cycle drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Dangdut rock close", "description": "Close with the last two beats of the dangdut rock accents; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "electronic-dangdut",
      "name": "Electronic Dangdut",
      "description": "Electronic Dangdut: electronic dangdut kick and kendang breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electronic dangdut kick and kendang breaks"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [122, 138],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electronic dangdut kick and kendang breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electronic dangdut kick and kendang breaks flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electronic dangdut kick and kendang breaks guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electronic dangdut kick and kendang breaks low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "electronic dangdut kick and kendang breaks kendang pulse", "role": "percussion", "onsets": [0, 0.75, 1.5, 2.25, 2.75, 3.25, 3.75], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "slap", "ghost", "open", "ghost", "slap", "open"], "accents": [0.85, 0.7, 0.3, 0.8, 0.35, 0.75, 0.6], "description": "Place short kendang answers between the programmed beat anchors, leaving its low stroke distinct from the kick. Original ensemble lesson; not a recording transcription."},
        {"name": "electronic dangdut kick and kendang breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Electronic dangdut pulse", "description": "Practice this two-bar electronic dangdut pulse. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "electronic dangdut kick and kendang breaks drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "kick", "snare", "hat"], "accents": [0.5, 0.92, 0.5, 0.5, 0.92, 0.85, 0.5], "shortName": "Electronic dangdut close", "description": "Close with the last two beats of the electronic dangdut pulse; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
}, [
  { instrumentId: 'piano', role: 'harmony' },
  { instrumentId: 'organ', role: 'harmony' },
  { instrumentId: 'rhodes', role: 'harmony' },
]);
