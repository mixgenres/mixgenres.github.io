import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "desert-blues",
  "name": "Desert Blues",
  "family": "Sahel / Tuareg",
  "color": "#be6293",
  "description": "Desert Blues is an independent musical world. Sahel / Tuareg idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Tishoumaren",
  "meter": "4/4",
  "tempo": [92, 108],
  "instruments": ["voice", "guitar", "bass", "drums", "hand-percussion"],
  "roles": {
    "lead": ["voice", "guitar"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums", "hand-percussion"]
  },
  "pitchSystem": "modal / drone-centered",
  "tuningSystem": "12-tet",
  "scales": ["minor-pentatonic"],
  "chordQualities": ["Am", "G"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["Tishoumaren guitar ostinato and sung response", "Sahel guitar syncopation and melodic bass", "acoustic Tuareg thumb bass and guitar ornaments", "psychedelic desert repeating guitar and long echoes"],
  "techniques": ["hammer-on", "pull-off", "slide", "muted-strum", "call-response", "bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "tishoumaren",
      "name": "Tishoumaren",
      "description": "Tishoumaren: lock two electric-guitar parts into a repeating pulse, then trade short sung and guitar responses without disturbing the cycle.",
      "patterns": ["Tishoumaren guitar ostinato and sung response"],
      "techniques": ["hammer-on", "pull-off", "slide", "muted-strum", "call-response", "bend", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "roll"],
      "harmony": ["Am", "G"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "hand-percussion"]
      },
      "progressions": {
        "intro": ["Am", "Am"],
        "ostinato": ["Am", "Am"],
        "response": ["Am", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "ostinato", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Tishoumaren guitar ostinato and sung response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Tishoumaren guitar ostinato and sung response guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Tishoumaren guitar ostinato and sung response guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2.25, 2.75, 3.5, 4, 4.75, 5.5, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.3, 0.3, 0.4, 0.25, 0.35, 0.3, 0.45, 0.3, 0.3, 0.4, 0.3, 0.4], "articulation": "pick", "accents": [0.85, 0.5, 0.65, 0.5, 0.8, 0.55, 0.7, 0.9, 0.5, 0.75, 0.55, 0.7, 0.85], "pitches": [{"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 2}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}], "description": "Repeat a modal picked figure with open-string space and a descending answer; let the sung phrase float above the cycle. Original ensemble study, not a recording transcription."},
        {"name": "Tishoumaren guitar ostinato and sung response low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Tishoumaren guitar ostinato and sung response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Tishoumaren syncopated kit", "description": "Practice this two-bar tishoumaren syncopated kit. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Tishoumaren guitar ostinato and sung response drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Tishoumaren syncopated close", "description": "Close with the last two beats of the tishoumaren syncopated kit; keep the spaces clear and land the next phrase together."},
        {"name": "Tishoumaren guitar ostinato and sung response hand-percussion pulse", "role": "percussion", "onsets": [0, 1.5, 3], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"],
        "hand-percussion": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "sahel-guitar",
      "name": "Sahel Guitar",
      "description": "Sahel Guitar: let syncopated guitar phrases and a mobile bass line answer one another over a relaxed, steady hand-percussion pulse.",
      "patterns": ["Sahel guitar syncopation and melodic bass"],
      "techniques": ["hammer-on", "pull-off", "slide", "muted-strum", "call-response", "bend", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "roll"],
      "harmony": ["Am", "G"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "hand-percussion"]
      },
      "progressions": {
        "intro": ["Am", "Am"],
        "ostinato": ["Am", "Am"],
        "response": ["Am", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "ostinato", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Sahel guitar syncopation and melodic bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Sahel guitar syncopation and melodic bass guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Sahel guitar syncopation and melodic bass guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.75, 2.5, 3, 3.75, 4.25, 5, 5.5, 6.25, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.35, 0.2, 0.35, 0.3, 0.3, 0.18, 0.4, 0.35, 0.25, 0.4, 0.25, 0.35], "articulation": "pick", "accents": [0.9, 0.55, 0.65, 0.5, 0.75, 0.85, 0.4, 0.7, 0.6, 0.55, 0.8, 0.5, 0.9], "pitches": [{"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 2}, {"register": 57, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}], "description": "Pick a looping modal accompaniment with ringing open-space answers. The second bar turns back toward the tonic without copying the lead. Original ensemble study, not a recording transcription."},
        {"name": "Sahel guitar syncopation and melodic bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Sahel guitar syncopation and melodic bass kit", "role": "percussion", "onsets": [0, 0, 0.5, 0.75, 1, 1.5, 1.5, 2.5, 2.5, 3, 3, 3.5, 4, 4, 4.5, 5, 5.5, 5.5, 5.5, 6.5, 7, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.28, 0.85, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.28, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.85], "articulation": "accent", "shortName": "Sahel dance interlock", "description": "Practice this two-bar sahel dance interlock. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Sahel guitar syncopation and melodic bass drums cadence fill", "role": "percussion", "onsets": [2.5, 3, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85], "shortName": "Sahel dance close", "description": "Close with the last two beats of the sahel dance interlock; keep the spaces clear and land the next phrase together."},
        {"name": "Sahel guitar syncopation and melodic bass hand-percussion pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.5, 2.0, 2.75, 3.5], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "ghost", "open", "dum", "slap", "open"], "accents": [0.85, 0.25, 0.7, 0.8, 0.65, 0.75], "shortName": "Low hand and guitar reply", "description": "Keep the low hand grounded and the small passing contact quiet; answer in the gaps of the picked guitar ostinato. Ensemble learning adaptation, not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"],
        "hand-percussion": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "acoustic-tuareg",
      "name": "Acoustic Tuareg",
      "description": "Acoustic Tuareg: keep a ringing acoustic-guitar cycle under the vocal, using brief fingerstyle ornaments and hand percussion while leaving room between phrases.",
      "patterns": ["acoustic Tuareg thumb bass and guitar ornaments"],
      "techniques": ["hammer-on", "pull-off", "slide", "muted-strum", "call-response", "bend", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["Am", "G"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["hand-percussion"]
      },
      "progressions": {
        "intro": ["Am", "Am"],
        "ostinato": ["Am", "Am"],
        "response": ["Am", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "ostinato", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "acoustic Tuareg thumb bass and guitar ornaments voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "acoustic Tuareg thumb bass and guitar ornaments guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "acoustic Tuareg thumb bass and guitar ornaments hand-percussion pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2.75, 3.5, 4, 5, 5.75, 6.5, 7.5], "instruments": ["hand-percussion"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "ghost", "open", "slap", "ghost", "dum", "open", "ghost", "slap", "open"], "accents": [0.8, 0.3, 0.65, 0.7, 0.3, 0.85, 0.6, 0.3, 0.7, 0.75], "description": "Support the modal guitar with a low hand-drum anchor and separated upper replies across two bars. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["fingerstyle", "hammer-on", "pull-off", "slide", "strum", "accent", "staccato", "legato"],
        "hand-percussion": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["fingerstyle", "hammer-on", "pull-off", "slide", "strum", "accent", "staccato", "legato"],
          "defaultTechnique": "fingerstyle",
          "variantId": "steel-acoustic"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.72,"bassForward":0.48,"width":0.48,"brightness":0.55,"compressionRatio":1.3,"transientSnap":0.8,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.02,"delayTimeSeconds":0.28,"delayFeedback":0.18,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"percussion":0.12},"roleWidth":{"lead":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.25,"reverbSend":0.055,"delaySend":0.015,"bloom":0.22,"preDelayMs":9},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","percussion":"percussion"}}
      }
    },
    {
      "id": "psychedelic-desert",
      "name": "Psychedelic Desert",
      "description": "Psychedelic Desert: hold a repeating electric-guitar riff against bass and drums; stretch lead notes and use echo on phrase ends to widen the build.",
      "patterns": ["psychedelic desert repeating guitar and long echoes"],
      "techniques": ["hammer-on", "pull-off", "slide", "muted-strum", "call-response", "bend", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "roll"],
      "harmony": ["Am", "G"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "hand-percussion"]
      },
      "progressions": {
        "intro": ["Am", "Am"],
        "ostinato": ["Am", "Am"],
        "response": ["Am", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "ostinato", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "psychedelic desert repeating guitar and long echoes voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "psychedelic desert repeating guitar and long echoes guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "psychedelic desert repeating guitar and long echoes guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.25, 5.5, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.6, 0.4, 0.7, 0.6, 0.3, 0.8, 0.7, 0.45, 0.6], "articulation": "legato", "accents": [0.9, 0.5, 0.75, 0.55, 0.65, 0.85, 0.6, 0.7, 0.9], "pitches": [{"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 3}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 10}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 55, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}], "description": "Let the modal guitar counterfigure ring with unequal spacing; keep the return to the drone clear underneath the lead. Original ensemble study, not a recording transcription."},
        {"name": "psychedelic desert repeating guitar and long echoes low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "psychedelic desert repeating guitar and long echoes kit", "role": "percussion", "onsets": [0, 0.0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.5, 4, 4.0, 4.5, 5.0, 5.5, 6.0, 6, 6.5, 6.5, 7.0, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "ride", "ride", "kick", "ride", "snare", "ride", "ride", "ride", "kick", "ride", "ride", "ride", "ride", "ride", "snare", "kick", "ride", "ride", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.5, 0.5, 0.92, 0.5, 0.5, 0.5, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.5], "articulation": "accent", "shortName": "Desert rock open pocket", "description": "Practice this two-bar desert rock open pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "psychedelic desert repeating guitar and long echoes drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 2.5, 3.0, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "snare", "kick", "ride", "ride", "ride"], "accents": [0.5, 0.85, 0.92, 0.5, 0.5, 0.5], "shortName": "Desert rock close", "description": "Close with the last two beats of the desert rock open pocket; keep the spaces clear and land the next phrase together."},
        {"name": "psychedelic desert repeating guitar and long echoes hand-percussion pulse", "role": "percussion", "onsets": [0, 1.5, 3], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"],
        "hand-percussion": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["bend", "hammer-on", "pull-off", "slide", "strum", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.62,"bassForward":0.5,"width":0.58,"brightness":0.58,"compressionRatio":1.55,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.22,"delayTimeSeconds":0.38,"delayFeedback":0.32,"delayToneHz":3800,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.18,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
}, [
  { instrumentId: 'harmonica', role: 'lead' },
  { instrumentId: 'kora', role: 'harmony' },
  { instrumentId: 'oud', role: 'harmony' },
  { instrumentId: 'flute', role: 'lead' },
  { instrumentId: 'frame-drum', role: 'percussion' },
]);
