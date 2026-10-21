import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "industrial",
  "name": "Industrial",
  "family": "United Kingdom / Germany / Global",
  "color": "#eb2a26",
  "description": "Industrial is an independent musical world. United Kingdom / Germany / Global idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "EBM",
  "meter": "4/4",
  "tempo": [120, 136],
  "instruments": ["synth", "sampler", "drums", "voice", "guitar", "bass"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["sampler"],
    "bass": ["synth"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["E5", "G5", "F5"],
  "harmonicRhythm": "bar",
  "cadences": ["E5"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["EBM rigid sequenced bass and drum machine", "early industrial metallic pulses and tape interruptions", "industrial dance hard machine kick and stab", "industrial rock distorted riff and machine backbeat", "industrial metal chug and mechanical double kick"],
  "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "ebm",
      "name": "EBM",
      "description": "EBM builds its force from a locked kick, dry sequenced bass, and short machine chords beneath a repeated chant. Keep the pulse precise, then create movement with clipped accents, held gaps, and changes in layer density.",
      "patterns": ["EBM rigid sequenced bass and drum machine"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "EBM rigid sequenced bass and drum machine synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "EBM rigid sequenced bass and drum machine sampler accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 4, 5, 5.75, 6.5, 7.5], "instruments": ["sampler"], "cycleLength": 2, "durations": [0.2, 0.2, 0.3, 0.2, 0.25, 0.3, 0.2, 0.25, 0.3, 0.3], "articulation": "staccato", "accents": [0.95, 0.5, 0.8, 0.55, 0.75, 1, 0.5, 0.75, 0.6, 0.9], "pitches": [{"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 8, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 8, "register": 60, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}, {"register": 60, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 60, "voicing": "single", "reference": "tonic"}], "description": "Keep a sharply separated machine counterline against the sequenced bass, with a different second-bar grouping. Original ensemble study, not a recording transcription."},
        {"name": "EBM rigid sequenced bass and drum machine low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2.25, 2.75, 3.5, 4, 4.5, 5.25, 5.75, 6.5, 7, 7.5], "instruments": ["synth"], "cycleLength": 2, "articulation": "legato", "durations": [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], "accents": [1, 0.5, 0.75, 0.55, 0.85, 0.5, 0.8, 1, 0.5, 0.75, 0.6, 0.85, 0.55, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 8, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 8, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Keep a dry repeating bass sequence with changed note groups and explicit upper replies against the machine beat. Original ensemble study, not a recording transcription."},
        {"name": "EBM rigid sequenced bass and drum machine kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5, 4, 4.5, 5, 5, 5.5, 6, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "EBM machine stomp", "description": "Practice this two-bar ebm machine stomp. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "EBM rigid sequenced bass and drum machine drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "hat", "kick", "snare", "hat"], "accents": [0.92, 0.5, 0.92, 0.85, 0.5], "shortName": "EBM machine close", "description": "Close with the last two beats of the ebm machine stomp; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "early-industrial",
      "name": "Early Industrial",
      "description": "Early Industrial makes form from scraped metal, tape noise, and unstable low pulses. Let interruptions, rough recording space, and sudden texture changes carry the phrase instead of filling every gap with a steady dance beat.",
      "patterns": ["early industrial metallic pulses and tape interruptions"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "early industrial metallic pulses and tape interruptions synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "early industrial metallic pulses and tape interruptions sampler accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "early industrial metallic pulses and tape interruptions low anchor", "role": "bass", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "early industrial metallic pulses and tape interruptions kit", "role": "percussion", "onsets": [0, 0.5, 1.75, 2.5, 3.25, 4, 4.75, 5.75, 6.5, 7.5], "instruments": ["drums"], "hits": ["kick", "hat", "kick", "snare", "hat", "kick", "hat", "snare", "kick", "hat"], "cycleLength": 2, "accents": [0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.85, 0.92, 0.28], "articulation": "accent", "shortName": "Industrial broken strikes", "description": "Practice this two-bar industrial broken strikes. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "early industrial metallic pulses and tape interruptions drums cadence fill", "role": "percussion", "onsets": [2.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "hat"], "accents": [0.92, 0.5], "shortName": "Industrial broken close", "description": "Close with the last two beats of the industrial broken strikes; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "industrial-dance",
      "name": "Industrial Dance",
      "description": "Industrial Dance drives a hard four-on-the-floor kick and syncopated bass through riff and stab cycles. Change the repeated groove with noise or sample breaks, short hook phrases, and decisive drops.",
      "patterns": ["industrial dance hard machine kick and stab"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial dance hard machine kick and stab synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial dance hard machine kick and stab sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "industrial dance hard machine kick and stab low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "industrial dance hard machine kick and stab kit", "role": "percussion", "onsets": [0.0, 0, 0.25, 0.5, 0.75, 1.0, 1, 1, 1.25, 1.5, 1.75, 2.0, 2, 2.25, 2.5, 2.75, 3.0, 3, 3, 3.25, 3.5, 3.75, 4.0, 4, 4.25, 4.5, 4.75, 5.0, 5, 5, 5.25, 5.5, 5.75, 6.0, 6, 6.25, 6.5, 6.75, 7.0, 7, 7, 7.25, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "hat", "hat", "kick", "hat", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.92, 0.85, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.92, 0.85, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.92, 0.85, 0.28, 0.28, 0.28, 0.42, 0.92, 0.28, 0.28, 0.28, 0.42, 0.92, 0.85, 0.28, 0.28, 0.28], "articulation": "accent", "shortName": "Industrial dance sequence", "description": "Practice this two-bar industrial dance sequence. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "industrial dance hard machine kick and stab drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.25, 2.5, 2.75, 3.0, 3, 3, 3.25, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "hat"], "accents": [0.5, 0.92, 0.5, 0.5, 0.5, 0.5, 0.92, 0.85, 0.5, 0.5, 0.5], "shortName": "Industrial dance close", "description": "Close with the last two beats of the industrial dance sequence; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "industrial-rock",
      "name": "Industrial Rock",
      "description": "Industrial Rock pairs a distorted guitar-and-bass riff with a forceful kit and machine percussion. Alternate clipped stop-start figures with wider sustained hooks, using vocal gaps for mechanical fills and responses.",
      "patterns": ["industrial rock distorted riff and machine backbeat"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "accent", "legato", "vibrato", "bend", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial rock distorted riff and machine backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial rock distorted riff and machine backbeat guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial rock distorted riff and machine backbeat synth accompaniment", "role": "harmony", "onsets": [0.5, 2, 3.25, 4.5, 6.25, 7.5], "instruments": ["synth"], "cycleLength": 2, "durations": [0.4, 0.5, 0.3, 0.65, 0.4, 0.3], "articulation": "staccato", "accents": [0.7, 0.85, 0.55, 0.9, 0.65, 0.8], "pitches": [{"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"register": 49, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}], "description": "Use a low repeated machine figure with separated accents; let distorted guitar and kit define the main backbeat. Original ensemble study, not a recording transcription."},
        {"name": "industrial rock distorted riff and machine backbeat low anchor", "role": "bass", "onsets": [0, 0.5, 1.25, 2, 2.75, 3.5, 4, 4.75, 5.5, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.3, 0.3, 0.45, 0.3, 0.45, 0.3, 0.3, 0.45, 0.3, 0.3, 0.45, 0.3], "accents": [1, 0.5, 0.65, 0.9, 0.55, 0.8, 1, 0.6, 0.8, 0.95, 0.6, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Keep the bass machine figure in short groups with explicit chromatic neighbors; leave spaces around the guitar attacks. Original ensemble study, not a recording transcription."},
        {"name": "industrial rock distorted riff and machine backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.25, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.25, 4.5, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Industrial rock syncopation", "description": "Practice this two-bar industrial rock syncopation. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "industrial rock distorted riff and machine backbeat drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Industrial rock close", "description": "Close with the last two beats of the industrial rock syncopation; keep the spaces clear and land the next phrase together."},
        {"name": "industrial rock distorted riff and machine backbeat sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "bass": ["staccato", "palm-mute", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:lead": {
          "allowedTechniques": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "palm-mute", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "industrial-metal",
      "name": "Industrial Metal",
      "description": "Industrial Metal locks palm-muted guitar and bass to a forceful kick and mechanical double-kick drive. Vary the chug with stops, unison accents, and riff changes; use synth and noise as pressure and texture rather than a constant melody loop.",
      "patterns": ["industrial metal chug and mechanical double kick"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "accent", "legato", "vibrato", "bend", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [130, 146],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial metal chug and mechanical double kick voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal chug and mechanical double kick guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal chug and mechanical double kick synth accompaniment", "role": "harmony", "onsets": [0, 1.25, 2.5, 3.5, 4.5, 5.75, 6.5, 7.25], "instruments": ["synth"], "cycleLength": 2, "durations": [0.4, 0.55, 0.4, 0.3, 0.6, 0.4, 0.3, 0.5], "articulation": "staccato", "accents": [0.9, 0.55, 0.8, 0.6, 0.95, 0.55, 0.7, 0.85], "pitches": [{"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"register": 49, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}, {"degree": 8, "register": 49, "voicing": "single", "reference": "tonic"}, {"register": 49, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 49, "voicing": "single", "reference": "tonic"}], "description": "Use low synth punctuations between the guitar riff groups; preserve the chromatic neighbor and its release. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal chug and mechanical double kick low anchor", "role": "bass", "onsets": [0, 0.25, 0.75, 1.5, 2, 2.25, 2.75, 3.5, 4, 4.5, 5.25, 5.5, 6, 6.25, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.14, 0.14, 0.2, 0.3, 0.14, 0.14, 0.2, 0.3, 0.2, 0.2, 0.14, 0.2, 0.14, 0.14, 0.2, 0.3], "accents": [1, 0.45, 0.65, 0.85, 0.95, 0.45, 0.75, 0.6, 1, 0.6, 0.45, 0.75, 0.95, 0.45, 0.8, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 1}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Lock the low bass to the machine-guitar groups and preserve the short gaps between paired attacks. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal chug and mechanical double kick kit", "role": "percussion", "onsets": [0, 0, 0.25, 1, 1, 1.5, 2, 2.5, 3, 3, 4, 4, 4.25, 5, 5, 5.5, 6, 7, 7, 7], "instruments": ["drums"], "hits": ["hat", "kick", "kick", "hat", "snare", "kick", "hat", "kick", "hat", "snare", "hat", "kick", "kick", "hat", "snare", "kick", "hat", "hat", "kick", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.92, 0.42, 0.85, 0.92, 0.42, 0.92, 0.42, 0.85, 0.42, 0.92, 0.92, 0.42, 0.85, 0.92, 0.42, 0.42, 0.92, 0.85], "articulation": "accent", "shortName": "Industrial metal machine stops", "description": "Practice this two-bar industrial metal machine stops. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal chug and mechanical double kick drums cadence fill", "role": "percussion", "onsets": [2, 3, 3, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "snare"], "accents": [0.5, 0.5, 0.92, 0.85], "shortName": "Industrial metal close", "description": "Close with the last two beats of the industrial metal machine stops; keep the spaces clear and land the next phrase together."},
        {"name": "industrial metal chug and mechanical double kick sampler pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "bass": ["staccato", "palm-mute", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:lead": {
          "allowedTechniques": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "palm-mute", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
  { instrumentId: 'turntable', role: 'percussion' },
  { instrumentId: 'rhodes', role: 'harmony' },
  { instrumentId: 'piano', role: 'harmony' },
  { instrumentId: 'guitar', role: 'lead' },
]);
