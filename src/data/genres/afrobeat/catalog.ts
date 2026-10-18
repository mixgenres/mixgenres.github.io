import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "afrobeat",
  "name": "Afrobeat",
  "family": "Nigeria / Ghana",
  "color": "#b74576",
  "description": "Afrobeat is an independent musical world. Nigeria / Ghana idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic Afrobeat",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "trumpet", "tenor-sax", "guitar", "organ", "bass", "drums", "congas", "shekere", "cowbell", "shaker", "talking-drum"],
  "roles": {
    "lead": ["voice", "trumpet", "tenor-sax"],
    "harmony": ["guitar", "organ"],
    "bass": ["bass"],
    "percussion": ["drums", "congas", "shekere"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["dorian"],
  "chordQualities": ["Am7", "Dm7", "G7"],
  "harmonicRhythm": "bar",
  "cadences": ["G7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["interlocking guitar and horn vamp", "highlife bell and guitar cross accents", "palm-wine fingerpicked guitar answer", "juju talking-drum response", "downbeat horn punches and scratch guitar", "jazz horn extensions over ostinato", "layered live percussion revival vamp"],
  "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic-afrobeat",
      "name": "Classic Afrobeat",
      "description": "Classic Afrobeat: interlocking guitar and horn vamp. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["interlocking guitar and horn vamp"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll", "slap-tapao", "quinto-slap"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet", "tenor-sax"],
        "harmony": ["guitar", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "congas", "shekere"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "interlocking guitar and horn vamp voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "interlocking guitar and horn vamp trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "interlocking guitar and horn vamp tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "interlocking guitar and horn vamp guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "interlocking guitar and horn vamp guitar sixteenth-note interlock", "shortName": "Guitar 16th-note interlock", "role": "harmony", "onsets": [0.25, 1.25, 2.25, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.2, 0.2, 0.2, 0.2], "articulation": "muted-strum", "difficulty": 2, "description": "Play clipped guitar attacks just after each beat; keep the gaps open so the organ and percussion answer independently."},
        {"name": "interlocking guitar and horn vamp organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "interlocking guitar and horn vamp organ offbeat stabs", "shortName": "Organ offbeat stabs", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.28, 0.28, 0.28, 0.28], "articulation": "staccato", "difficulty": 2, "description": "Place short organ chords on the offbeats between the guitar attacks; release each chord quickly to keep the interlocking parts distinct."},
        {"name": "interlocking guitar and horn vamp low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "interlocking guitar and horn vamp kit", "role": "percussion", "onsets": [0, 0, 0.5, 0.75, 1, 1.25, 1.5, 1.5, 2, 2.25, 2.5, 2.75, 3.25, 3.5, 3.5, 4, 4, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7.25, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "ghost", "snare", "hat", "hat", "kick", "hat", "ghost", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "ghost", "snare", "hat", "hat", "kick", "hat", "ghost", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.85, 0.28, 0.28, 0.92, 0.42, 0.28, 0.28, 0.92, 0.28, 0.28, 0.85, 0.42, 0.92, 0.28, 0.28, 0.85, 0.28, 0.28, 0.92, 0.42, 0.28, 0.92, 0.28, 0.85, 0.28], "articulation": "accent", "shortName": "Interlocking Afrobeat kit", "description": "Practice this two-bar interlocking afrobeat kit. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "interlocking guitar and horn vamp drums cadence fill", "role": "percussion", "onsets": [2, 2.25, 2.5, 2.75, 3.25, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "ghost", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.32, 0.92, 0.5, 0.85, 0.5], "shortName": "Interlocking Afrobeat close", "description": "Close with the last two beats of the interlocking afrobeat kit; keep the spaces clear and land the next phrase together."},
        {"name": "interlocking guitar and horn vamp congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "interlocking guitar and horn vamp shekere pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["shekere"], "cycleLength": 1, "articulation": "accent"},
        {"name": "interlocking guitar and horn vamp shekere eighth-note pulse", "shortName": "Shekere eighth-note pulse", "role": "percussion", "onsets": [0.25, 0.75, 1.25, 1.75, 2.25, 2.75, 3.25, 3.75], "instruments": ["shekere"], "cycleLength": 1, "articulation": "slap", "difficulty": 1, "description": "Keep an even, light eighth-note shake across the bar; let the conga accents carry the stronger hand-percussion calls."}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "tenor-sax": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "congas": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
        "shekere": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "congas:percussion": {
          "allowedTechniques": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
          "defaultTechnique": "staccato"
        },
        "shekere:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "highlife",
      "name": "Highlife",
      "description": "Highlife: highlife bell and guitar cross accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["highlife bell and guitar cross accents"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll", "slap-tapao", "quinto-slap"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "cowbell", "congas"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "highlife bell and guitar cross accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "highlife bell and guitar cross accents trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "highlife bell and guitar cross accents guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "highlife bell and guitar cross accents low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "highlife bell and guitar cross accents kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.5, 2, 2.5, 3, 3.5, 4, 4, 5, 5.5, 6, 6.5, 6.5, 7, 7.5], "instruments": ["drums"], "hits": ["cowbell", "kick", "cowbell", "cowbell", "kick", "snare", "cowbell", "cowbell", "ghost", "cowbell", "kick", "cowbell", "cowbell", "snare", "cowbell", "kick", "cowbell", "ghost"], "cycleLength": 2, "accents": [0.65, 0.92, 0.65, 0.65, 0.92, 0.85, 0.65, 0.65, 0.28, 0.65, 0.92, 0.65, 0.65, 0.85, 0.65, 0.92, 0.65, 0.28], "articulation": "accent", "shortName": "Highlife bell pocket", "description": "Practice this two-bar highlife bell and feet. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "highlife bell and guitar cross accents drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 2.5, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["snare", "cowbell", "kick", "cowbell", "ghost"], "accents": [0.85, 0.5, 0.92, 0.5, 0.32], "shortName": "Highlife bell close", "description": "Close with the last two beats of the highlife bell and feet; keep the spaces clear and land the next phrase together."},
        {"name": "highlife bell and guitar cross accents cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "highlife bell and guitar cross accents congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "cowbell": ["staccato", "ghost", "accent", "open"],
        "congas": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "ghost", "accent", "open"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
          "defaultTechnique": "staccato"
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
      "id": "palm-wine",
      "name": "Palm-Wine",
      "description": "Palm-Wine: palm-wine fingerpicked guitar answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["palm-wine fingerpicked guitar answer"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "strum", "ghost", "roll"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "percussion": ["shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "palm-wine fingerpicked guitar answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "palm-wine fingerpicked guitar answer guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "palm-wine fingerpicked guitar answer shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "shaker": ["ghost", "staccato", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "juju",
      "name": "Juju",
      "description": "Juju: juju talking-drum response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["juju talking-drum response"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["talking-drum", "shekere", "drums"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "juju talking-drum response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "juju talking-drum response guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "juju talking-drum response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "juju talking-drum response talking-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["talking-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "juju talking-drum response shekere pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["shekere"], "cycleLength": 1, "articulation": "accent"},
        {"name": "juju talking-drum response kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.5, 1.5, 2, 2.5, 3, 3, 3.5, 4, 4, 4.5, 5.5, 5.5, 5.5, 6, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "ghost", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "snare", "hat", "ghost", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.28, 0.85, 0.42, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.28, 0.92, 0.85, 0.42, 0.28, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Jùjú kit response", "description": "Practice this two-bar jùjú kit response. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "juju talking-drum response drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "ghost", "hat", "snare", "hat"], "accents": [0.5, 0.32, 0.5, 0.85, 0.5], "shortName": "Jùjú kit close", "description": "Close with the last two beats of the jùjú kit response; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "talking-drum": ["slap", "roll"],
        "shekere": ["slap", "roll"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "talking-drum:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        },
        "shekere:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "funk-heavy-afrobeat",
      "name": "Funk-Heavy Afrobeat",
      "description": "Funk-Heavy Afrobeat: downbeat horn punches and scratch guitar. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["downbeat horn punches and scratch guitar"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll", "slap-tapao", "quinto-slap"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet", "tenor-sax"],
        "harmony": ["guitar", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "congas", "shekere"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "downbeat horn punches and scratch guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "downbeat horn punches and scratch guitar trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "downbeat horn punches and scratch guitar tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "downbeat horn punches and scratch guitar guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "downbeat horn punches and scratch guitar organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "downbeat horn punches and scratch guitar low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "downbeat horn punches and scratch guitar kit", "role": "percussion", "onsets": [0.0, 0, 0.25, 0.5, 0.75, 0.75, 1.0, 1, 1.25, 1.5, 1.75, 1.75, 2.0, 2, 2.25, 2.5, 2.5, 2.75, 3.0, 3, 3.25, 3.5, 3.5, 3.75, 4.0, 4, 4.25, 4.5, 4.75, 5.0, 5, 5.25, 5.5, 5.5, 5.75, 5.75, 6.0, 6.25, 6.5, 6.5, 6.75, 6.75, 7.0, 7, 7.25, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "ghost", "hat", "hat", "kick", "hat", "ghost", "hat", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "snare", "hat", "hat", "kick", "ghost", "hat", "hat", "hat", "ghost", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.28, 0.42, 0.85, 0.28, 0.28, 0.92, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.85, 0.28, 0.28, 0.92, 0.28, 0.28, 0.42, 0.28, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28], "articulation": "accent", "shortName": "Afro-funk sixteenth pocket", "description": "Practice this two-bar afro-funk sixteenth pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "downbeat horn punches and scratch guitar drums cadence fill", "role": "percussion", "onsets": [2.0, 2.25, 2.5, 2.5, 2.75, 2.75, 3.0, 3, 3.25, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "ghost", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "accents": [0.5, 0.5, 0.32, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.5, 0.5], "shortName": "Afro-funk sixteenth close", "description": "Close with the last two beats of the afro-funk sixteenth pocket; keep the spaces clear and land the next phrase together."},
        {"name": "downbeat horn punches and scratch guitar congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "downbeat horn punches and scratch guitar shekere pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["shekere"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "tenor-sax": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "congas": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
        "shekere": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "congas:percussion": {
          "allowedTechniques": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
          "defaultTechnique": "staccato"
        },
        "shekere:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "jazz-heavy-afrobeat",
      "name": "Jazz-Heavy Afrobeat",
      "description": "Jazz-Heavy Afrobeat: jazz horn extensions over ostinato. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["jazz horn extensions over ostinato"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll", "slap-tapao", "quinto-slap"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet", "tenor-sax"],
        "harmony": ["guitar", "organ", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "congas", "shekere"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jazz horn extensions over ostinato voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazz horn extensions over ostinato trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazz horn extensions over ostinato tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazz horn extensions over ostinato guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jazz horn extensions over ostinato organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jazz horn extensions over ostinato Rhodes syncopated piano chords", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.45, 0.35, 0.45, 0.35], "articulation": "staccato"},
        {"name": "jazz horn extensions over ostinato Rhodes phrase answer", "role": "harmony", "onsets": [1, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.7, 0.35, 0.5], "phraseEnd": true, "articulation": "tenuto"},
        {"name": "jazz horn extensions over ostinato low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "jazz horn extensions over ostinato kit", "role": "percussion", "onsets": [0, 0, 0.5, 0.75, 1.5, 1.5, 2, 2.25, 2.75, 2.75, 3.25, 3.5, 4, 4, 4.5, 5, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "ghost", "ride", "snare", "ride", "ghost", "kick", "ride", "snare", "ride", "kick", "ride", "ghost", "ride", "ride", "snare", "ride", "ghost", "kick", "ride", "snare", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.28, 0.5, 0.85, 0.5, 0.28, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.28, 0.5, 0.5, 0.85, 0.5, 0.28, 0.92, 0.5, 0.85, 0.5], "articulation": "accent", "shortName": "Afro-jazz ride dialogue", "description": "Practice this two-bar afro-jazz ride dialogue. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "jazz horn extensions over ostinato drums cadence fill", "role": "percussion", "onsets": [2, 2.25, 2.5, 2.75, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "ghost", "kick", "ride", "snare", "ride"], "accents": [0.5, 0.32, 0.92, 0.5, 0.85, 0.5], "shortName": "Afro-jazz ride close", "description": "Close with the last two beats of the afro-jazz ride dialogue; keep the spaces clear and land the next phrase together."},
        {"name": "jazz horn extensions over ostinato congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "jazz horn extensions over ostinato shekere pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["shekere"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "tenor-sax": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "congas": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
        "shekere": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato",
          "variantId": "rhodes"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "congas:percussion": {
          "allowedTechniques": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
          "defaultTechnique": "staccato"
        },
        "shekere:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "modern-revival",
      "name": "Modern Revival",
      "description": "Modern Revival: layered live percussion revival vamp. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["layered live percussion revival vamp"],
      "techniques": ["muted-strum", "short-chord-stab", "ghost-note", "slap", "call-response", "staccato", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll", "slap-tapao", "quinto-slap"],
      "harmony": ["Am7", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet", "tenor-sax"],
        "harmony": ["guitar", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "congas", "shekere"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7"],
        "vamp": ["Am7", "G7"],
        "outro": ["G7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "vamp", "bars": 8},
        {"label": "horn theme", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "vamp", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "layered live percussion revival vamp voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "layered live percussion revival vamp trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "layered live percussion revival vamp tenor-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "layered live percussion revival vamp guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "layered live percussion revival vamp organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "layered live percussion revival vamp low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "layered live percussion revival vamp kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 1.75, 2.0, 2.25, 2.5, 2.5, 3.0, 3.25, 3.5, 4.0, 4, 4.5, 4.75, 5.0, 5, 5.5, 5.5, 6.0, 6.25, 6.5, 6.75, 7.0, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "ghost", "hat", "snare", "hat", "kick", "hat", "ghost", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "ghost", "hat", "snare", "hat", "kick", "hat", "ghost", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.28, 0.92, 0.42, 0.28, 0.85], "articulation": "accent", "shortName": "Modern Afrobeat pocket", "description": "Practice this two-bar modern afrobeat pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "layered live percussion revival vamp drums cadence fill", "role": "percussion", "onsets": [2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "ghost", "hat", "kick", "hat", "hat", "snare"], "accents": [0.5, 0.32, 0.5, 0.92, 0.5, 0.5, 0.85], "shortName": "Modern Afrobeat close", "description": "Close with the last two beats of the modern afrobeat pocket; keep the spaces clear and land the next phrase together."},
        {"name": "layered live percussion revival vamp congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "layered live percussion revival vamp shekere pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["shekere"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "tenor-sax": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "congas": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
        "shekere": ["slap", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "congas:percussion": {
          "allowedTechniques": ["staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent", "open"],
          "defaultTechnique": "staccato"
        },
        "shekere:percussion": {
          "allowedTechniques": ["slap", "roll"],
          "defaultTechnique": "slap"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
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
