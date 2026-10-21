import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "electronic",
  "name": "Electronic",
  "family": "Global electronic",
  "color": "#165181",
  "description": "Electronic is an independent musical world. Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Techno",
  "meter": "4/4",
  "tempo": [124, 140],
  "instruments": ["synth", "drums"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["synth"],
    "bass": ["synth"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm", "Bb", "C", "Am", "F", "G", "Ebmaj7", "Cm7", "Abmaj7", "Fm7", "Gm7", "Em"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["techno steady kick and looping synth pulse", "Detroit syncopated machine chords and bass", "electro broken drum machine and robotic bass", "trance arpeggio build and sustained pad release", "IDM displaced drum fragments and rests", "minimal sparse machine clicks and bass", "synthwave eighth-note bass and gated backbeat", "melodic electronic layered arpeggio and hook"],
  "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "techno",
      "name": "Techno",
      "description": "A four-on-the-floor kick anchors a repeating synth ostinato. Build tension with filter movement, sparse accents, and gradual subtraction while keeping harmonic motion restrained.",
      "patterns": ["Pounding 909 kick drum on all 4 beats with driving offbeat open hi-hat sizzle", "techno steady kick and looping synth pulse"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "heavy Roland TR-909 kick drum on every beat", "offbeat open hi-hat sizzle", "hypnotic repetitive modular synth sequence", "industrial tension and release", "bend", "accent", "legato", "vibrato", "open", "ghost"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm", "Dm", "Dm", "Dm"],
        "buildup": ["Dm", "Dm", "Bb", "C"],
        "drop": ["Dm", "Dm", "Dm", "Dm", "Dm", "Dm", "Bb", "C"],
        "coda": ["Dm", "Dm", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "techno steady kick and looping synth pulse synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "lead", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "techno steady kick and looping synth pulse synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "harmony", "onsets": [2.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "techno steady kick and looping synth pulse low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "bass", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "techno steady kick and looping synth pulse kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.98, 0.42, 0.84, 0.68, 0.42, 0.94, 0.45, 0.78, 0.72, 0.5]},
        {"name": "techno steady kick and looping synth pulse drums cadence fill", "role": "percussion", "onsets": [3, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["tom", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["open", "staccato", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "acid-sequencer"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "detroit-techno",
      "name": "Detroit Techno",
      "description": "Syncopated machine chords and a melodic bass figure answer a firm pulse. Warm voicings, offbeat accents, and evolving sequences carry the long arrangement.",
      "patterns": ["Detroit syncopated machine chords and bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Detroit syncopated machine chords and bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "lead", "onsets": [2.75, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "Detroit syncopated machine chords and bass synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 3.25, 4.5, 6.25, 7.5], "instruments": ["synth"], "cycleLength": 2, "durations": [0.55, 0.35, 0.5, 0.6, 0.45, 0.3], "articulation": "staccato", "accents": [0.85, 0.5, 0.7, 0.8, 0.55, 0.75], "pitches": [{"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}], "description": "Let the repeating chord signal cross the four-beat kick grid; change the second-bar spacing and leave the low end clear. Original ensemble study, not a recording transcription."},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "harmony", "onsets": [1.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "Detroit syncopated machine chords and bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "bass", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "Detroit syncopated machine chords and bass kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 2.75, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.98, 0.48, 0.82, 0.72, 0.5, 0.95, 0.48, 0.68, 0.82, 0.72, 0.52]},
        {"name": "Detroit syncopated machine chords and bass drums cadence fill", "role": "percussion", "onsets": [2.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["snare", "openHat"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "electro",
      "name": "Electro",
      "description": "A broken kick-and-snare machine groove supports springy syncopated bass and clipped robotic hooks. Short rests and displaced accents keep the parts interlocked.",
      "patterns": ["electro broken drum machine and robotic bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "electro broken drum machine and robotic bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "lead", "onsets": [2.5, 3.25, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "glide"},
        {"name": "electro broken drum machine and robotic bass synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "electro broken drum machine and robotic bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.75, 2.5, 2.75, 3.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.55, 0.22, 0.22, 0.45, 0.2, 0.2]},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "bass", "onsets": [1.75, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "electro broken drum machine and robotic bass kit", "role": "percussion", "onsets": [0, 0.5, 0.75, 1, 1.5, 1.75, 2, 2.5, 2.75, 3, 3.5, 3.75], "instruments": ["drums"], "hits": ["kick", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "kick", "snare", "hat", "kick"], "cycleLength": 1, "accents": [0.98, 0.46, 0.72, 0.42, 0.92, 0.4, 0.86, 0.46, 0.72, 0.9, 0.44, 0.66]},
        {"name": "electro broken drum machine and robotic bass drums cadence fill", "role": "percussion", "onsets": [2.75, 3.25, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["tom", "snare", "openHat"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "trance",
      "name": "Trance",
      "description": "A steady kick and offbeat bass carry arpeggios and sustained pads through long builds and breakdowns. Leave a clear breath before the hook and low end return.",
      "patterns": ["trance arpeggio build and sustained pad release"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [130, 146],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "trance arpeggio build and sustained pad release synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "arpeggio"},
        {"name": "trance arpeggio build and sustained pad release synth accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5], "instruments": ["synth"], "cycleLength": 2, "durations": [0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35], "articulation": "staccato", "accents": [0.8, 0.45, 0.65, 0.5, 0.75, 0.45, 0.65, 0.5, 0.85, 0.45, 0.7, 0.5, 0.75, 0.45, 0.65, 0.6], "pitches": [{"degree": 1, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 9, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 64, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 64, "voicing": "single", "reference": "chord"}], "description": "Maintain the repeating high synth arpeggio while the low sequence carries the kick pulse; the second-bar upper extension gives the phrase a lift. Original ensemble study, not a recording transcription."},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato"},
        {"name": "trance arpeggio build and sustained pad release low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.42, 0.42, 0.42, 0.38]},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "bass", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "trance arpeggio build and sustained pad release kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.98, 0.44, 0.82, 0.68, 0.44, 0.96, 0.46, 0.8, 0.72, 0.56]},
        {"name": "trance arpeggio build and sustained pad release drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["snare", "snare", "snare", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "idm",
      "name": "IDM",
      "description": "Displaced break fragments and sudden rests offset a warm melodic motif. Change the drum phrase and sample texture in irregular groups instead of laying down a dance backbeat.",
      "patterns": ["Micro-edited 64th-note glitch drum roll juxtaposed with warm melancholic synth chord", "IDM displaced drum fragments and rests"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "micro-edited drum glitching (Amen chop)", "haunting analog synth nostalgia", "irregular rhythmic drill rolls", "unexpected harmonic detuning", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Ebmaj7", "Cm7", "Abmaj7", "Bb"],
        "verse": ["Ebmaj7", "Cm7", "Abmaj7", "Bb", "Fm7", "Gm7", "Abmaj7", "Bb"],
        "coda": ["Abmaj7", "Bb", "Ebmaj7", "Ebmaj7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "IDM displaced drum fragments and rests synth statement", "role": "lead", "onsets": [0, 0.75, 1.75, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.42, 0.2, 0.42, 0.2, 0.35], "articulation": "legato"},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "lead", "onsets": [0.5, 1.75, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "IDM displaced drum fragments and rests synth accompaniment", "role": "harmony", "onsets": [0.25, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.25, 0.4], "articulation": "staccato"},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "harmony", "onsets": [1.25, 3.25], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "IDM displaced drum fragments and rests low anchor", "role": "bass", "onsets": [0, 1.25, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "accent", "durations": [0.8, 0.25, 0.5, 0.25]},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "bass", "onsets": [2.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "IDM displaced drum fragments and rests kit", "role": "percussion", "onsets": [0, 0.25, 0.75, 1.25, 1.5, 2.25, 2.5, 2.75, 3.25, 3.75], "instruments": ["drums"], "hits": ["kick", "hat", "snare", "hat", "kick", "hat", "snare", "tom", "hat", "kick"], "cycleLength": 1, "accents": [0.98, 0.3, 0.76, 0.38, 0.82, 0.35, 0.72, 0.52, 0.34, 0.86]},
        {"name": "IDM displaced drum fragments and rests drums cadence fill", "role": "percussion", "onsets": [0, 0.75, 2.5, 3.25, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["kick", "snare", "hat", "tom", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "minimal",
      "name": "Minimal",
      "description": "A sparse kick, bass tone, and a few dry clicks leave room for silence. Small shifts in placement and timbre create movement; avoid busy fills and constant chord changes.",
      "patterns": ["minimal sparse machine clicks and bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "minimal sparse machine clicks and bass synth statement", "role": "lead", "onsets": [0, 1.75, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 0.75, 0.5], "articulation": "legato"},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "lead", "onsets": [2.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "minimal sparse machine clicks and bass synth accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "minimal sparse machine clicks and bass low anchor", "role": "bass", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "articulation": "legato", "durations": [2]},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "bass", "onsets": [3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "minimal sparse machine clicks and bass kit", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "kick", "hat", "kick", "kick", "hat"], "cycleLength": 1, "accents": [0.98, 0.62, 0.3, 0.92, 0.58, 0.28]},
        {"name": "minimal sparse machine clicks and bass drums cadence fill", "role": "percussion", "onsets": [3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["hat"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "acid-sequencer"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.62,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.5,"reverbSend":0.08,"delaySend":0.03,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "synthwave",
      "name": "Synthwave",
      "description": "A rock-leaning backbeat, pulsing synth bass, and broad lead melody frame the gated snare. Build a verse-to-chorus lift with changing layers and long, controlled tails.",
      "patterns": ["Driving 16th-note analog synth bass arp driving into massive gated reverb snare", "synthwave eighth-note bass and gated backbeat"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "relentless 16th-note bass arpeggios", "gated reverb snare hits", "soaring lead synthesizer melodies", "80s action film nostalgic mood", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "chorus": ["F", "G", "Am", "Em", "F", "G", "Am", "Am"],
        "coda": ["F", "G", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "synthwave eighth-note bass and gated backbeat synth statement", "role": "lead", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.25, 0.55, 0.35, 0.45], "articulation": "legato"},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "lead", "onsets": [2.5, 3, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synthwave eighth-note bass and gated backbeat synth accompaniment", "role": "harmony", "onsets": [0, 1, 2.5, 4, 5.5, 7], "instruments": ["synth"], "cycleLength": 2, "durations": [0.8, 1, 0.9, 1.2, 0.9, 0.75], "articulation": "tenuto", "accents": [0.8, 0.55, 0.7, 0.85, 0.6, 0.75], "pitches": [{"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}, {"voicing": "chord", "register": 61}], "description": "Hold the synth chords over the sequenced bass, changing the second-bar spacing instead of copying the bass pulse. Original ensemble study, not a recording transcription."},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "filter-sweep"},
        {"name": "synthwave eighth-note bass and gated backbeat low anchor", "role": "bass", "onsets": [0, 0.5, 1.5, 2, 3], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.55, 0.35, 0.45, 0.55, 0.3]},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "bass", "onsets": [3], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "synthwave eighth-note bass and gated backbeat kit", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "snare", "hat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.98, 0.9, 0.4, 0.86, 0.92, 0.56]},
        {"name": "synthwave eighth-note bass and gated backbeat drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["kick", "tom", "snare", "snare", "openHat"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "melodic-electronic",
      "name": "Melodic Electronic",
      "description": "Layered hooks and arpeggios develop over a lighter, syncopated club pocket. Let bass and percussion breathe around the melody, then widen the return through arrangement changes.",
      "patterns": ["melodic electronic layered arpeggio and hook"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "melodic electronic layered arpeggio and hook synth statement", "role": "lead", "onsets": [0, 0.5, 1.25, 2, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.35, 0.24, 0.4, 0.5, 0.35, 0.45], "articulation": "legato"},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic electronic layered arpeggio and hook synth accompaniment", "role": "harmony", "onsets": [0, 1.25, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.5, 0.4, 0.5, 0.3], "articulation": "staccato"},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "melodic electronic layered arpeggio and hook low anchor", "role": "bass", "onsets": [0, 1.5, 2.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.55, 0.45, 0.5, 0.3]},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "bass", "onsets": [3.25], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato"},
        {"name": "melodic electronic layered arpeggio and hook kit", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "hat", "snare", "hat", "kick", "hat", "snare", "openHat"], "cycleLength": 1, "accents": [0.98, 0.42, 0.78, 0.38, 0.86, 0.44, 0.82, 0.58]},
        {"name": "melodic electronic layered arpeggio and hook drums cadence fill", "role": "percussion", "onsets": [2.5, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "hits": ["kick", "snare", "openHat"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0.32,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
}, [
  { instrumentId: 'bass', role: 'bass' },
  { instrumentId: 'synth-bass', role: 'bass' },
  { instrumentId: 'sampler', role: 'percussion' },
  { instrumentId: 'turntable', role: 'percussion' },
  { instrumentId: 'rhodes', role: 'harmony' },
  { instrumentId: 'piano', role: 'harmony' },
]);
