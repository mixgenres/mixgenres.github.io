import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "reggaeton",
  "name": "Reggaeton",
  "family": "Reggaeton",
  "color": "#559acc",
  "description": "Dembow rhythm, bass weight, short hooks, and percussion replies. Explore early underground, classic perreo, melodic crossover, and modern electronic treatments.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [86, 102],
  "instruments": ["voice", "synth", "drums", "sampler"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["synth"],
    "bass": ["synth"],
    "percussion": ["drums", "sampler"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "C", "G", "Dm", "Bb"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["classic dembow kick and snare cell", "Classic: dembow", "Classic: 808/sub", "Classic: syncopated vocal pickup", "Playero underground raw dembow and sample chop", "Playero / Underground: dembow", "Playero / Underground: 808/sub", "Playero / Underground: syncopated vocal pickup", "melodic reggaeton vocal over guitar arpeggio", "Melodic: dembow", "Melodic: 808/sub", "Melodic: syncopated vocal pickup", "neoperreo distorted sparse dembow and synth jab", "Neoperreo: dembow", "Neoperreo: 808/sub", "Neoperreo: syncopated vocal pickup", "Latin trap half-time 808 and hat rolls", "Latin Trap Crossover: dembow", "Latin Trap Crossover: 808/sub", "Latin Trap Crossover: syncopated vocal pickup", "experimental reggaeton displaced dembow fragments", "Experimental: dembow", "Experimental: 808/sub", "Experimental: syncopated vocal pickup"],
  "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Firm dembow, short synth replies, and a centered bass pulse. Keep the kick and snare clear while the lead carries the hook.",
      "patterns": ["classic dembow kick and snare cell", "Classic: dembow", "Classic: 808/sub", "Classic: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Classic: vocal chop", "Classic: pitch correction", "Classic: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Classic: short minor/modal loops", "Classic: i-VI-III-VII", "Classic: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "sub",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "classic dembow kick and snare cell voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classic dembow kick and snare cell voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "classic dembow kick and snare cell synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "classic dembow kick and snare cell synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "classic dembow kick and snare cell drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "classic dembow kick and snare cell sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "classic dembow kick and snare cell sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "variantId": "electronic-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "electronic-kit",
          "samplePalette": [39, 42, 70],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.82,"bassForward":0.68,"width":0.48,"brightness":0.58,"compressionRatio":2.3,"compressionAttackSeconds":0.02,"compressionReleaseSeconds":0.12,"drumSaturation":0.18,"drumParallelCompression":0.07,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.35,"delaySend":0.03,"reverbType":"room","saturationType":"tape","delayTimeSeconds":0.3125,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.48,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.34,"reverbSend":0.045,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.48,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.312},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.56,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.56,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.56,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.56,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.408,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.408,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.336,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.336,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.336,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.336,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "playero-underground",
      "name": "Playero / Underground",
      "description": "Raw, narrow drum-machine grooves with clipped sample replies. Short phrases and dry percussion leave room for a forceful lead.",
      "patterns": ["Playero underground raw dembow and sample chop", "Playero / Underground: dembow", "Playero / Underground: 808/sub", "Playero / Underground: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Playero / Underground: vocal chop", "Playero / Underground: pitch correction", "Playero / Underground: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Playero / Underground: short minor/modal loops", "Playero / Underground: i-VI-III-VII", "Playero / Underground: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {
          "name": "Playero underground raw dembow and sample chop voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Playero underground raw dembow and sample chop voice cadence fill",
          "role": "lead",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "Playero underground raw dembow and sample chop synth accompaniment",
          "role": "harmony",
          "onsets": [
            0.75,
            1.5,
            2.75,
            3.5
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4,
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "Playero underground raw dembow and sample chop synth cadence fill",
          "role": "harmony",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "Playero underground raw dembow and sample chop low anchor",
          "role": "bass",
          "onsets": [
            0,
            1.5,
            2.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.8,
            0.45,
            0.55
          ]
        },
        {
          "name": "Playero underground raw dembow and sample chop synth cadence fill",
          "role": "bass",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "Playero underground raw dembow and sample chop kit",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "drums"
          ],
          "hits": [
            "kick",
            "hat",
            "snare",
            "hat",
            "kick",
            "snare",
            "snare"
          ],
          "cycleLength": 1,
          "accents": [
            0.95,
            0.35,
            0.85,
            0.38,
            0.78,
            0.82,
            0.88
          ]
        },
        {
          "name": "Playero underground raw dembow and sample chop drums cadence fill",
          "role": "percussion",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "drums"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll",
          "hits": [
            "tom",
            "snare",
            "snare"
          ]
        },
        {
          "name": "Playero underground raw dembow and sample chop sampler pulse",
          "role": "percussion",
          "onsets": [
            0.5,
            1.25,
            2.75,
            3.75
          ],
          "instruments": [
            "sampler"
          ],
          "cycleLength": 1,
          "articulation": "staccato"
        },
        {
          "name": "Playero underground raw dembow and sample chop sampler cadence fill",
          "role": "percussion",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "sampler"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "variantId": "808-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "808-kit",
          "samplePalette": [37, 39, 42, 70],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.92,"bassForward":0.65,"width":0.26,"brightness":0.5,"compressionRatio":2.6,"compressionAttackSeconds":0.016,"compressionReleaseSeconds":0.12,"drumSaturation":0.3,"drumParallelCompression":0.08,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.2,"delaySend":0.03,"reverbType":"room","saturationType":"tape","delayTimeSeconds":0.32,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.26,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.26,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.34,"reverbSend":0.045,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.26,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.169},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.34,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.34,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.34,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.34,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.221,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.221,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.182,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.182,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.182,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.182,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "melodic",
      "name": "Melodic",
      "description": "Melodic hooks over a lighter dembow pocket. Wider chord textures and restrained echoes support the lead without covering the drums.",
      "patterns": ["melodic reggaeton vocal over guitar arpeggio", "Melodic: dembow", "Melodic: 808/sub", "Melodic: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Melodic: vocal chop", "Melodic: pitch correction", "Melodic: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Melodic: short minor/modal loops", "Melodic: i-VI-III-VII", "Melodic: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "melodic reggaeton vocal over guitar arpeggio voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "melodic reggaeton vocal over guitar arpeggio voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Melodic reggaeton guitar arpeggio statement", "role": "harmony", "onsets": [0, 1, 2, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.28, 0.28, 0.28, 0.28], "articulation": "arpeggio"},
        {"name": "Melodic reggaeton guitar arpeggio cadence", "role": "harmony", "onsets": [2.5, 3.25, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "arpeggio"},
        {"name": "Melodic reggaeton soft chord bed", "role": "harmony", "onsets": [0, 2], "instruments": ["synth"], "cycleLength": 1, "durations": [1.6, 1.6], "articulation": "legato"},
        {"name": "Melodic reggaeton chord-bed release", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4], "phraseEnd": true, "articulation": "staccato"},
        {"name": "melodic reggaeton vocal over guitar arpeggio low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "melodic reggaeton vocal over guitar arpeggio synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Melodic reggaeton light dembow pocket", "role": "percussion", "onsets": [0, 0.75, 1, 1.5, 2, 3], "instruments": ["drums"], "hits": ["kick", "hat", "snare", "hat", "kick", "snare"], "cycleLength": 1, "accents": [0.9, 0.38, 0.82, 0.4, 0.72, 0.82]},
        {"name": "melodic reggaeton vocal over guitar arpeggio drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "melodic reggaeton vocal over guitar arpeggio sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "melodic reggaeton vocal over guitar arpeggio sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["arpeggio", "fingerstyle", "legato", "staccato", "accent"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["arpeggio", "fingerstyle", "legato", "staccato", "accent"],
          "defaultTechnique": "arpeggio",
          "variantId": "solid-electric"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "variantId": "dance-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "dance-kit",
          "samplePalette": [39, 54, 70, 42],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.68,"bassForward":0.62,"width":0.72,"brightness":0.64,"compressionRatio":2.1,"compressionAttackSeconds":0.025,"compressionReleaseSeconds":0.18,"drumSaturation":0.1,"drumParallelCompression":0.035,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.2,"delaySend":0.03,"reverbType":"room","saturationType":"tape","delayTimeSeconds":0.234375,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.72,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.72,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.38,"foregroundDepthDifference":0.34,"reverbSend":0.09,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.72,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.468},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.8,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.8,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.8,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.8,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.612,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.612,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.504,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.504,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.504,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.504,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "neoperreo",
      "name": "Neoperreo",
      "description": "Sparse dembow, biting synth jabs, and deliberate distortion. Let gaps and sudden texture changes give the groove its tension.",
      "patterns": ["neoperreo distorted sparse dembow and synth jab", "Neoperreo: dembow", "Neoperreo: 808/sub", "Neoperreo: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Neoperreo: vocal chop", "Neoperreo: pitch correction", "Neoperreo: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Neoperreo: short minor/modal loops", "Neoperreo: i-VI-III-VII", "Neoperreo: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {
          "name": "neoperreo distorted sparse dembow and synth jab voice statement",
          "role": "lead",
          "onsets": [
            0,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28
          ],
          "articulation": "staccato"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab voice cadence fill",
          "role": "lead",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab synth accompaniment",
          "role": "harmony",
          "onsets": [
            0.75,
            3.25
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "durations": [
            0.22,
            0.22
          ],
          "articulation": "staccato"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab synth cadence fill",
          "role": "harmony",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab low anchor",
          "role": "bass",
          "onsets": [
            0,
            2.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            1.8,
            0.38
          ]
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab synth cadence fill",
          "role": "bass",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "synth"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "ornament"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab kit",
          "role": "percussion",
          "onsets": [
            0,
            1.5,
            2.75
          ],
          "instruments": [
            "drums"
          ],
          "hits": [
            "kick",
            "snare",
            "kick"
          ],
          "cycleLength": 1,
          "accents": [
            0.98,
            0.84,
            0.76
          ]
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab drums cadence fill",
          "role": "percussion",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "drums"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll",
          "hits": [
            "tom",
            "snare",
            "snare"
          ]
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab sampler pulse",
          "role": "percussion",
          "onsets": [
            0.5,
            2.25,
            3.75
          ],
          "instruments": [
            "sampler"
          ],
          "cycleLength": 1,
          "articulation": "staccato"
        },
        {
          "name": "neoperreo distorted sparse dembow and synth jab sampler cadence fill",
          "role": "percussion",
          "onsets": [
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "sampler"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
        },
        "drums:percussion": {
          "variantId": "electronic-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "electronic-kit",
          "samplePalette": [39, 75, 42],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.92,"bassForward":0.78,"width":0.42,"brightness":0.6,"compressionRatio":2.9,"compressionAttackSeconds":0.015,"compressionReleaseSeconds":0.1,"drumSaturation":0.38,"drumParallelCompression":0.06,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.45,"delaySend":0.03,"reverbType":"room","saturationType":"hard-clip","delayTimeSeconds":0.3,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.42,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.42,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.34,"reverbSend":0.045,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.42,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.273},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.5,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.5,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.5,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.5,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.357,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.357,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.294,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.294,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.294,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.294,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "latin-trap-crossover",
      "name": "Latin Trap Crossover",
      "description": "Half-time backbeats, rapid hats, and sustained low bass. Use a softer chord bed and leave space around lead phrases.",
      "patterns": ["Latin trap half-time 808 and hat rolls", "Latin Trap Crossover: dembow", "Latin Trap Crossover: 808/sub", "Latin Trap Crossover: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Latin Trap Crossover: vocal chop", "Latin Trap Crossover: pitch correction", "Latin Trap Crossover: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Latin Trap Crossover: short minor/modal loops", "Latin Trap Crossover: i-VI-III-VII", "Latin Trap Crossover: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Latin trap half-time 808 and hat rolls voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin trap half-time 808 and hat rolls voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls synth accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Latin trap half-time 808 and hat rolls synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls low anchor", "role": "bass", "onsets": [0, 1.75, 2.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Latin trap half-time 808 and hat rolls synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Latin trap half-time 808 and hat rolls drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Latin trap half-time 808 and hat rolls sampler pulse", "role": "percussion", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.25, 2.5, 2.75, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin trap half-time 808 and hat rolls sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "variantId": "808-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "808-kit",
          "samplePalette": [42, 42, 44, 39],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.86,"bassForward":0.78,"width":0.6,"brightness":0.55,"compressionRatio":2.3,"compressionAttackSeconds":0.025,"compressionReleaseSeconds":0.18,"drumSaturation":0.15,"drumParallelCompression":0.04,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.42,"delaySend":0.03,"reverbType":"room","saturationType":"tube","delayTimeSeconds":0.2273,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.6,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.6,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.34,"reverbSend":0.045,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.6,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.39},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.68,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.68,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.68,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.68,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.51,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.51,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.42,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.42,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.42,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.42,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "experimental",
      "name": "Experimental",
      "description": "Displaced dembow fragments, unstable textures, and abrupt contrasts. Preserve a clear low anchor while percussion and harmony shift around it.",
      "patterns": ["experimental reggaeton displaced dembow fragments", "Experimental: dembow", "Experimental: 808/sub", "Experimental: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Experimental: vocal chop", "Experimental: pitch correction", "Experimental: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Experimental: short minor/modal loops", "Experimental: i-VI-III-VII", "Experimental: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "experimental reggaeton displaced dembow fragments voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "experimental reggaeton displaced dembow fragments voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "experimental reggaeton displaced dembow fragments synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "experimental reggaeton displaced dembow fragments synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "experimental reggaeton displaced dembow fragments drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "experimental reggaeton displaced dembow fragments sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "experimental reggaeton displaced dembow fragments sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "halo-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
        },
        "drums:percussion": {
          "variantId": "electronic-kit",
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "variantId": "electronic-kit",
          "samplePalette": [37, 39, 75, 70, 42],
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.68,"width":0.76,"brightness":0.6,"compressionRatio":2.0,"compressionAttackSeconds":0.025,"compressionReleaseSeconds":0.2,"drumSaturation":0.2,"drumParallelCompression":0.035,"transientSnap":0.65,"subHarmonics":0,"subEnhancement":0,"sidechainDucking":0.32,"delaySend":0.03,"reverbType":"room","saturationType":"tube","delayTimeSeconds":0.3,"delayFeedback":0.2,"delayToneHz":3600},
        "stage": {"width":0.76,"depthRange":0.38,"centerAnchorRoles":["lead","bass","percussion"],"rolePan":{"lead":0,"harmony":-0.1,"bass":0,"percussion":0},"roleWidth":{"lead":0.12,"harmony":0.76,"bass":0,"percussion":0.2},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.28,"foregroundDepthDifference":0.34,"reverbSend":0.045,"delaySend":0.025,"bloom":0.3,"preDelayMs":22},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":1.2,"bodyDb":-0.3,"width":0.12,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.08,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.8,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.6,"bodyDb":-1.2,"width":0.76,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.14,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.18},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.84,"gainDb":-0.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.2,"transientEmphasis":0.45,"maskingPriority":0.85,"ambienceSend":0.025,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1.5,"depth":0.46,"width":0.494},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.6,"width":0.84,"foregroundContrast":1.15},"climax":{"gainDb":0.8,"width":0.84,"foregroundContrast":1.15},"hook":{"gainDb":0.6,"width":0.84,"foregroundContrast":1.15},"drop":{"gainDb":0.6,"width":0.84,"foregroundContrast":1.15},"verse":{"gainDb":-0.3,"width":0.646,"foregroundContrast":1.05},"chant":{"gainDb":-0.3,"width":0.646,"foregroundContrast":1.05},"break":{"gainDb":-1.3,"width":0.532,"ambience":1.08},"bridge":{"gainDb":-1.3,"width":0.532,"ambience":1.08},"rupture":{"gainDb":-1.3,"width":0.532,"ambience":1.08},"fragment":{"gainDb":-1.3,"width":0.532,"ambience":1.08}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
