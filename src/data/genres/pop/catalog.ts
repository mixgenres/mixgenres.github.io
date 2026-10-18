import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "pop",
  "name": "Pop",
  "family": "Global popular music",
  "color": "#b21afc",
  "description": "Pop is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "guitar", "piano", "bass", "drums", "synth", "sampler", "rhodes", "string-ensemble"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "piano"],
    "bass": ["bass"],
    "percussion": ["drums"],
    "texture": ["synth"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "G", "Am", "F", "Em", "Dm9", "G13", "Cmaj9", "A7b9", "Fmaj7", "Em7", "Dm7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["contemporary verse chorus and vocal response", "dance pop kick and stacked chorus hook", "synth pop sequenced bass and bright chord hook", "city pop jazz chords and melodic electric bass", "indie pop guitar hook and light backbeat", "dream pop sustained guitar and floating vocal", "art pop shifting phrase lengths and color chords", "power pop ringing guitar and driving chorus", "maximal idol pop rap break and layered chorus"],
  "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: contemporary verse chorus and vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["contemporary verse chorus and vocal response"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "contemporary verse chorus and vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary verse chorus and vocal response guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary verse chorus and vocal response piano accompaniment", "role": "harmony", "onsets": [1,3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.28,0.28], "articulation": "staccato", "shortName": "Pop piano backbeat", "accents": [0.5,0.62], "microtiming": [0,0], "description": "Place two compact piano chords on beats two and four. The guitar carries the syncopated chord figure, so keep these attacks supportive and clear."},
        {"name": "contemporary verse chorus and vocal response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "contemporary verse chorus and vocal response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Contemporary pop pocket", "description": "Practice this two-bar contemporary pop pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "contemporary verse chorus and vocal response drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Contemporary pop close", "description": "Close with the last two beats of the contemporary pop pocket; keep the spaces clear and land the next phrase together."},
        {"name": "contemporary verse chorus and vocal response synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "dance-pop",
      "name": "Dance Pop",
      "description": "Dance Pop: dance pop kick and stacked chorus hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["dance pop kick and stacked chorus hook"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dance pop kick and stacked chorus hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dance pop kick and stacked chorus hook synth accompaniment", "role": "harmony", "onsets": [0.5,1.5,2.5,3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.18,0.18,0.18,0.18], "articulation": "staccato", "shortName": "Dance synth offbeats", "accents": [0.68,0.58,0.7,0.6], "microtiming": [-2,-2,-2,-2], "description": "Use clipped synth chords on the offbeats to lift the four-on-the-floor kick. Keep the synth short so the piano backbeat can read."},
        {"name": "dance pop kick and stacked chorus hook piano accompaniment", "role": "harmony", "onsets": [1,3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.24,0.24], "articulation": "staccato", "shortName": "Dance piano backbeat", "accents": [0.55,0.7], "microtiming": [0,0], "description": "Add two bright, compact backbeat chords on beats two and four. Leave the regular offbeat chord motion to the synth."},
        {"name": "dance pop kick and stacked chorus hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "dance pop kick and stacked chorus hook kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "dance pop kick and stacked chorus hook sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dance pop kick and stacked chorus hook synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "synth-pop",
      "name": "Synth-Pop",
      "description": "Synth-Pop: synth pop sequenced bass and bright chord hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["synth pop sequenced bass and bright chord hook"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [110, 126],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "synth pop sequenced bass and bright chord hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "synth pop sequenced bass and bright chord hook synth accompaniment", "role": "harmony", "onsets": [0,1,1.5,2.5,3,3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.16,0.16,0.16,0.16,0.16,0.16], "articulation": "staccato", "shortName": "Synth-pop sequence", "accents": [0.78,0.42,0.68,0.74,0.4,0.66], "microtiming": [0,0,-2,0,0,-2], "description": "Play a clipped, uneven synth sequence that moves around the bass pulse. The piano sustains the larger harmony, so keep this figure bright and rhythmic."},
        {"name": "synth pop sequenced bass and bright chord hook piano accompaniment", "role": "harmony", "onsets": [0,2], "instruments": ["piano"], "cycleLength": 1, "durations": [1.25,1.25], "articulation": "tenuto", "shortName": "Synth-pop piano bed", "accents": [0.42,0.48], "microtiming": [0,0], "description": "Hold two soft piano chords across the bar while the sequenced synth supplies the moving attacks. Let each chord decay naturally before the next entry."},
        {"name": "synth pop sequenced bass and bright chord hook low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "synth pop sequenced bass and bright chord hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Synth-pop machine pocket", "description": "Practice this two-bar synth-pop machine pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "synth pop sequenced bass and bright chord hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Synth-pop machine close", "description": "Close with the last two beats of the synth-pop machine pocket; keep the spaces clear and land the next phrase together."},
        {"name": "synth pop sequenced bass and bright chord hook sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "synth pop sequenced bass and bright chord hook synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "city-pop",
      "name": "City Pop",
      "description": "City Pop: city pop jazz chords and melodic electric bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["city pop jazz chords and melodic electric bass"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "muted-strum", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7b9", "Fmaj7", "Em7", "Dm7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["string-ensemble"]
      },
      "progressions": {
        "verse": ["Dm9", "G13", "Cmaj9", "A7b9"],
        "chorus": ["Fmaj7", "Em7", "Dm7", "G13"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "city pop jazz chords and melodic electric bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "city pop jazz chords and melodic electric bass rhodes accompaniment", "role": "harmony", "onsets": [1,3], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.34,0.34], "articulation": "staccato", "shortName": "City-pop Rhodes reply", "accents": [0.48,0.62], "microtiming": [0,0], "description": "Answer the guitar’s syncopated comp with two warm Rhodes stabs on the backbeat. Keep the voicing compact and leave the bass its melodic space."},
        {"name": "city pop jazz chords and melodic electric bass guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "city pop jazz chords and melodic electric bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "city pop jazz chords and melodic electric bass kit", "role": "percussion", "onsets": [0.0, 0, 0.25, 0.5, 0.75, 0.75, 1.0, 1, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.5, 2.75, 3.0, 3, 3.25, 3.5, 3.75, 4.0, 4, 4.25, 4.5, 4.75, 5.0, 5, 5.25, 5.5, 5.5, 5.75, 6.0, 6.25, 6.5, 6.75, 6.75, 7.0, 7, 7.25, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28, 0.42, 0.28, 0.28, 0.92, 0.28, 0.42, 0.85, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.85, 0.28, 0.28, 0.92, 0.28, 0.42, 0.28, 0.28, 0.28, 0.92, 0.42, 0.85, 0.28, 0.28, 0.28], "articulation": "accent", "shortName": "City-pop sixteenth pocket", "description": "Practice this two-bar city-pop sixteenth pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "city pop jazz chords and melodic electric bass drums cadence fill", "role": "percussion", "onsets": [2.0, 2.25, 2.5, 2.75, 2.75, 3.0, 3, 3.25, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "hat"], "accents": [0.5, 0.5, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.5, 0.5], "shortName": "City-pop sixteenth close", "description": "Close with the last two beats of the city-pop sixteenth pocket; keep the spaces clear and land the next phrase together."},
        {"name": "city pop jazz chords and melodic electric bass string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "string-ensemble": ["legato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "indie-pop",
      "name": "Indie Pop",
      "description": "Indie Pop: indie pop guitar hook and light backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["indie pop guitar hook and light backbeat"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "indie pop guitar hook and light backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "indie pop guitar hook and light backbeat guitar accompaniment", "role": "harmony", "onsets": [0,0.75,1.5,2.5,3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.3,0.22,0.3,0.3,0.22], "articulation": "staccato", "shortName": "Indie guitar jangle", "accents": [0.72,0.45,0.56,0.68,0.46], "microtiming": [0,-3,0,0,-3], "description": "Use an uneven jangle with a light anticipatory stroke; do not turn it into an even strum loop. The piano answers on the backbeat."},
        {"name": "indie pop guitar hook and light backbeat piano accompaniment", "role": "harmony", "onsets": [1,3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.3,0.3], "articulation": "staccato", "shortName": "Indie piano reply", "accents": [0.42,0.58], "microtiming": [0,0], "description": "Add restrained chord answers on beats two and four. Let the guitar hook keep its loose jangle without doubling the same rhythmic attacks."},
        {"name": "indie pop guitar hook and light backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "indie pop guitar hook and light backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Indie pop light pocket", "description": "Practice this two-bar indie pop light pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "indie pop guitar hook and light backbeat drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Indie pop close", "description": "Close with the last two beats of the indie pop light pocket; keep the spaces clear and land the next phrase together."},
        {"name": "indie pop guitar hook and light backbeat synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "dream-pop",
      "name": "Dream Pop",
      "description": "Dream Pop: dream pop sustained guitar and floating vocal. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["dream pop sustained guitar and floating vocal"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dream pop sustained guitar and floating vocal voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dream pop sustained guitar and floating vocal synth accompaniment", "role": "harmony", "onsets": [0.5,2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.15,1.15], "articulation": "tenuto", "shortName": "Dream synth sway", "accents": [0.36,0.42], "microtiming": [0,0], "description": "Let the synth move in two slow, connected chord swells. The piano adds quiet echoes later in the bar; avoid short attacks that break the floating texture."},
        {"name": "dream pop sustained guitar and floating vocal piano accompaniment", "role": "harmony", "onsets": [1,3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.48,0.48], "articulation": "staccato", "shortName": "Dream piano echoes", "accents": [0.25,0.32], "microtiming": [0,-2], "description": "Place two hushed piano echoes after the sustained synth entries. Keep the notes soft and short enough to preserve space around the vocal."},
        {"name": "dream pop sustained guitar and floating vocal low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "dream pop sustained guitar and floating vocal kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 2, 2, 3, 4, 4, 5, 6, 6, 6.75, 7], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "kick", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.42, 0.92, 0.42, 0.85, 0.42, 0.42, 0.92, 0.42, 0.42, 0.85, 0.92, 0.42], "articulation": "accent", "shortName": "Dream-pop half-time", "description": "Practice this two-bar dream-pop half-time. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "dream pop sustained guitar and floating vocal drums cadence fill", "role": "percussion", "onsets": [2, 2, 2.75, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "snare", "kick", "hat"], "accents": [0.5, 0.85, 0.92, 0.5], "shortName": "Dream-pop half-time close", "description": "Close with the last two beats of the dream-pop half-time; keep the spaces clear and land the next phrase together."},
        {"name": "dream pop sustained guitar and floating vocal sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dream pop sustained guitar and floating vocal synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "art-pop",
      "name": "Art Pop",
      "description": "Art Pop: art pop shifting phrase lengths and color chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["art pop shifting phrase lengths and color chords"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "7/8",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "art pop shifting phrase lengths and color chords voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "art pop shifting phrase lengths and color chords guitar accompaniment", "role": "harmony", "onsets": [0,1.5,2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.28,0.22,0.4], "articulation": "staccato", "shortName": "Art-pop guitar cycle", "accents": [0.65,0.42,0.72], "microtiming": [0,-3,0], "description": "Mark the irregular seven-eighth phrase with three clipped guitar color chords. Let the piano answer later in the cycle rather than mirror these placements."},
        {"name": "art pop shifting phrase lengths and color chords piano accompaniment", "role": "harmony", "onsets": [0.5,2,3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.48,0.32,0.22], "articulation": "staccato", "shortName": "Art-pop piano drift", "accents": [0.38,0.55,0.44], "microtiming": [0,-2,0], "description": "Place three uneven piano colors between the guitar attacks. Keep the last chord short so the seven-eighth cycle turns with a little air."},
        {"name": "art pop shifting phrase lengths and color chords low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "art pop shifting phrase lengths and color chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "art pop shifting phrase lengths and color chords synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.5], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "power-pop",
      "name": "Power Pop",
      "description": "Power Pop: power pop ringing guitar and driving chorus. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["power pop ringing guitar and driving chorus"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "power pop ringing guitar and driving chorus voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "power pop ringing guitar and driving chorus guitar accompaniment", "role": "harmony", "onsets": [0,1,2,3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.68,0.52,0.68,0.52], "articulation": "staccato", "shortName": "Power guitar drive", "accents": [0.82,0.52,0.76,0.55], "microtiming": [0,0,0,0], "description": "Drive the chorus with broad quarter-note guitar chords, leaning into beats one and three. The piano supplies shorter offbeat lifts."},
        {"name": "power pop ringing guitar and driving chorus piano accompaniment", "role": "harmony", "onsets": [1.5,3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.24,0.24], "articulation": "staccato", "shortName": "Chorus piano offbeats", "accents": [0.45,0.62], "microtiming": [-2,-2], "description": "Add two short offbeat piano lifts behind the ringing guitar. Keep them lighter than the downstroke chords so the chorus stays guitar-led."},
        {"name": "power pop ringing guitar and driving chorus low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "power pop ringing guitar and driving chorus kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 4.5, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Power-pop driving pocket", "description": "Practice this two-bar power-pop driving pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "power pop ringing guitar and driving chorus drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Power-pop driving close", "description": "Close with the last two beats of the power-pop driving pocket; keep the spaces clear and land the next phrase together."},
        {"name": "power pop ringing guitar and driving chorus synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    },
    {
      "id": "maximal-idol-pop",
      "name": "Maximal Idol Pop",
      "description": "Maximal Idol Pop: maximal idol pop rap break and layered chorus. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["maximal idol pop rap break and layered chorus"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["C", "G", "Am", "F"],
        "chorus": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "rap break", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "dance break", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "maximal idol pop rap break and layered chorus voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "maximal idol pop rap break and layered chorus guitar accompaniment", "role": "harmony", "onsets": [0,1.5,2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.18,0.18,0.18], "articulation": "staccato", "shortName": "Idol guitar stabs", "accents": [0.72,0.48,0.68], "microtiming": [0,-2,0], "description": "Use compact, clipped guitar stabs as a rhythmic layer. Leave the piano and synth to fill different slots in the dense chorus arrangement."},
        {"name": "maximal idol pop rap break and layered chorus piano accompaniment", "role": "harmony", "onsets": [0.5,2,3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.22,0.22,0.22], "articulation": "staccato", "shortName": "Idol piano offbeats", "accents": [0.58,0.4,0.68], "microtiming": [-2,0,-2], "description": "Place bright piano accents in the gaps between guitar stabs. Keep the attacks short so the layered chorus stays articulated."},
        {"name": "maximal idol pop rap break and layered chorus low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "maximal idol pop rap break and layered chorus kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "maximal idol pop rap break and layered chorus synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12,"texture":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion","texture":"harmony"}}
      }
    }
  ]
};
