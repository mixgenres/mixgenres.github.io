import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West Africa / Global pop",
  "color": "#9194aa",
  "description": "Afrobeats is an independent musical world. West Africa / Global pop idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary Afrobeats",
  "meter": "4/4",
  "tempo": [98, 114],
  "instruments": ["voice", "guitar", "rhodes", "bass", "drums", "shaker", "synth", "sampler"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "rhodes"],
    "bass": ["bass"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "Em7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Gbmaj7", "Fm7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["shaker-led offbeat guitar hook", "bright refrain and syncopated bass", "Afrofusion cross-rhythm hook", "sparse alté displaced backbeat", "melismatic R&B lead in guitar gaps"],
  "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary-afrobeats",
      "name": "Contemporary Afrobeats",
      "description": "Contemporary Afrobeats: shaker-led offbeat guitar hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["shaker-led offbeat guitar hook"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "shaker-led offbeat guitar hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shaker-led offbeat guitar hook guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "shaker-led offbeat guitar hook rhodes accompaniment", "role": "harmony", "onsets": [0.75, 2.25, 3.25], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.5, 0.5, 0.5], "articulation": "staccato"},
        {"name": "shaker-led offbeat guitar hook low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "shaker-led offbeat guitar hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 7.0, 7, 7.25, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "rim", "hat", "kick", "hat", "hat", "kick", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat", "kick", "hat", "hat", "hat", "rim", "kick", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.92, 0.42, 0.28, 0.42, 0.65, 0.92, 0.28], "articulation": "accent", "shortName": "Afrobeats rim pocket", "description": "Practice this two-bar afrobeats kick and rim. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "shaker-led offbeat guitar hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 3.0, 3, 3.25, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "hat", "rim", "kick", "hat"], "accents": [0.5, 0.5, 0.5, 0.5, 0.92, 0.5], "shortName": "Afrobeats rim close", "description": "Close with the last two beats of the afrobeats kick and rim; keep the spaces clear and land the next phrase together."},
        {"name": "shaker-led offbeat guitar hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
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
      "id": "afropop",
      "name": "Afropop",
      "description": "Afropop: bright refrain and syncopated bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap", "bright refrain and syncopated bass"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "syncopated kick/clap pocket", "clean guitar chops", "infectious melody hooks", "shaker perpetual motion", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Fmaj7", "G", "Em7", "Am7"],
        "verse": ["Fmaj7", "G", "Em7", "Am7"],
        "chorus": ["Dm7", "Em7", "Fmaj7", "G"],
        "coda": ["Am7", "G", "Fmaj7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bright refrain and syncopated bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bright refrain and syncopated bass guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bright refrain and syncopated bass rhodes accompaniment", "role": "harmony", "onsets": [0.5, 1.75, 2.75], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.65, 0.5, 0.65], "articulation": "staccato"},
        {"name": "bright refrain and syncopated bass low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "bright refrain and syncopated bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "clap", "hat", "hat", "hat", "kick", "hat", "clap", "hat", "hat", "kick", "hat", "hat", "clap", "hat", "kick", "hat", "hat", "kick", "hat", "clap", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Afropop clap pocket", "description": "Practice this two-bar afropop clap pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "bright refrain and syncopated bass drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Afropop clap close", "description": "Close with the last two beats of the afropop clap pocket; keep the spaces clear and land the next phrase together."},
        {"name": "bright refrain and syncopated bass shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
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
      "id": "afrofusion",
      "name": "Afrofusion",
      "description": "Afrofusion: Afrofusion cross-rhythm hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Afrofusion cross-rhythm hook"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Afrofusion cross-rhythm hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Afrofusion cross-rhythm hook guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Afrofusion cross-rhythm hook rhodes accompaniment", "role": "harmony", "onsets": [0.75, 2.25], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.55, 0.55], "articulation": "staccato"},
        {"name": "Afrofusion cross-rhythm hook low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Afrofusion cross-rhythm hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.5, 1.75, 2.0, 2.25, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 4.75, 5.0, 5.5, 5.5, 6.0, 6.25, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "snare", "kick", "hat", "ghost", "hat", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "ghost", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.28, 0.85, 0.92, 0.42, 0.28, 0.28, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.92, 0.42, 0.28, 0.85, 0.42, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Afrofusion broken pocket", "description": "Practice this two-bar afrofusion broken pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Afrofusion cross-rhythm hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2.25, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "ghost", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.32, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Afrofusion broken close", "description": "Close with the last two beats of the afrofusion broken pocket; keep the spaces clear and land the next phrase together."},
        {"name": "Afrofusion cross-rhythm hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
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
      "id": "alte",
      "name": "Alté",
      "description": "Alté: sparse alté displaced backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Lo-fi filtered Rhodes chords over relaxed half-time kick/snare and dreamy vocals", "sparse alté displaced backbeat"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "lo-fi filtered keys", "laid-back drum pockets", "atmospheric autotuned vocals", "indie R&B textures", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Dbmaj7", "Bbm7", "Ebm7", "Ab7"],
        "verse": ["Dbmaj7", "Bbm7", "Ebm7", "Ab7"],
        "chorus": ["Gbmaj7", "Fm7", "Ebm7", "Ab7"],
        "coda": ["Dbmaj7", "Bbm7", "Gbmaj7", "Ab7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sparse alté displaced backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sparse alté displaced backbeat rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "sparse alté displaced backbeat low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "sparse alté displaced backbeat kit", "role": "percussion", "onsets": [0, 0, 0.75, 1.5, 1.75, 2, 2.5, 3.25, 4, 4.5, 4.75, 5.5, 6, 6.5, 6.75, 7.25], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "kick", "snare", "hat", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.92, 0.85, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.85, 0.28, 0.92, 0.28], "articulation": "accent", "shortName": "Alté half-time space", "description": "Practice this two-bar alté half-time space. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "sparse alté displaced backbeat drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 2.75, 3.25], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["snare", "hat", "kick", "hat"], "accents": [0.85, 0.5, 0.92, 0.5], "shortName": "Alté half-time close", "description": "Close with the last two beats of the alté half-time space; keep the spaces clear and land the next phrase together."},
        {"name": "sparse alté displaced backbeat sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "synth": ["vibrato", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "synth:bass": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["accent"],
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
      "id": "randb-afrobeats",
      "name": "R&B Afrobeats",
      "description": "R&B Afrobeats: melismatic R&B lead in guitar gaps. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["melismatic R&B lead in guitar gaps"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "melismatic R&B lead in guitar gaps voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "melismatic R&B lead in guitar gaps guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "melismatic R&B lead in guitar gaps rhodes accompaniment", "role": "harmony", "onsets": [1, 3], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "melismatic R&B lead in guitar gaps low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "melismatic R&B lead in guitar gaps kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.25, 1.5, 2, 2.5, 2.75, 3, 3.5, 4, 4, 4.75, 5, 5.5, 5.5, 6, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "rim", "kick", "hat", "hat", "hat", "kick", "rim", "hat", "hat", "kick", "hat", "rim", "hat", "kick", "hat", "hat", "kick", "rim", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.65, 0.92, 0.28, 0.42, 0.28, 0.92, 0.65, 0.28, 0.42, 0.92, 0.28, 0.65, 0.28, 0.92, 0.42, 0.28, 0.92, 0.65, 0.28], "articulation": "accent", "shortName": "Afro R&B rim pocket", "description": "Practice this two-bar afro r&b rim pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "melismatic R&B lead in guitar gaps drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "rim", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.5], "shortName": "Afro R&B close", "description": "Close with the last two beats of the afro r&b rim pocket; keep the spaces clear and land the next phrase together."},
        {"name": "melismatic R&B lead in guitar gaps shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
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
    }
  ]
};
