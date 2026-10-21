import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "amapiano",
  "name": "Amapiano",
  "family": "South Africa",
  "color": "#8ba99a",
  "description": "Amapiano is an independent musical world. South Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["synth", "piano", "rhodes", "log-drum", "drums", "shaker", "voice", "sampler"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["piano", "rhodes"],
    "bass": ["log-drum"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["log-drum call after piano stabs", "jazzy Rhodes chords with restrained log drum", "vocal response above rolling log drum", "pitched log-drum pickup clusters", "Bacardi percussion and whistle response", "Gqom broken kick and dark sparse bass", "kwaito offbeat chant and bass hook"],
  "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: log-drum call after piano stabs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["log-drum call after piano stabs"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "log-drum call after piano stabs synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "log-drum call after piano stabs piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.28, 0.28], "articulation": "staccato", "shortName": "Classic piano stabs", "description": "Strike two clipped chords, then leave the log-drum phrase a clear answer space.", "accents": [0.92, 0.78]},
        {"name": "log-drum call after piano stabs piano cadence fill", "role": "harmony", "onsets": [3, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Piano log tag", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.28, 0.42], "accents": [0.8, 0.98]},
        {"name": "log-drum call after piano stabs rhodes accompaniment", "role": "harmony", "onsets": [1.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.28, 0.32], "articulation": "staccato", "shortName": "Classic Rhodes reply", "description": "Add two light upper chord tones after the piano stabs; keep the log-drum call unobstructed.", "accents": [0.6, 0.74], "pitches": [{"degree": 5, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}]},
        {"name": "log-drum call after piano stabs rhodes cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Rhodes log tail", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.3, 0.42], "accents": [0.64, 0.86], "pitches": [{"degree": 3, "register": 68, "voicing": "single"}, {"degree": 1, "register": 68, "voicing": "single"}]},
        {"name": "log-drum call after piano stabs low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.75, 3.5, 4.5, 5.25, 6, 6.75, 7.5], "instruments": ["log-drum"], "cycleLength": 2, "articulation": "accent", "durations": [0.4, 0.3, 0.6, 0.35, 0.3, 0.5, 0.3, 0.6, 0.35, 0.3], "accents": [0.95, 0.5, 0.75, 0.6, 0.85, 0.9, 0.5, 0.75, 0.6, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Separate deep log-drum anchors from higher answering notes; keep the syncopated holes around the kick and piano. Original ensemble study, not a recording transcription."},
        {"name": "log-drum call after piano stabs kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "log-drum call after piano stabs shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
      "id": "private-school",
      "name": "Private School",
      "description": "Private School: jazzy Rhodes chords with restrained log drum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["jazzy Rhodes chords with restrained log drum"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "jazzy Rhodes chords with restrained log drum synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazzy Rhodes chords with restrained log drum piano accompaniment", "role": "harmony", "onsets": [1.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.3, 0.36], "articulation": "staccato", "shortName": "Private piano answers", "description": "Place two single chord-tone answers between the richer Rhodes voicings; keep the log drum restrained.", "accents": [0.58, 0.7], "pitches": [{"degree": 5, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}]},
        {"name": "jazzy Rhodes chords with restrained log drum piano cadence fill", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Private piano close", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.28, 0.42], "accents": [0.66, 0.92], "pitches": [{"degree": 3, "register": 68, "voicing": "single"}, {"degree": 1, "register": 68, "voicing": "single"}]},
        {"name": "jazzy Rhodes chords with restrained log drum rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.82, 0.72], "articulation": "legato", "shortName": "Jazzy Rhodes chords", "description": "Play warm, connected jazz chord voicings at the spaced chord landmarks; let each sonority breathe.", "accents": [0.8, 0.68]},
        {"name": "jazzy Rhodes chords with restrained log drum rhodes cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato", "shortName": "Rhodes upper answer", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.55, 0.68], "accents": [0.72, 0.9]},
        {"name": "jazzy Rhodes chords with restrained log drum Rhodes solo line", "shortName": "Rhodes solo line", "description": "Play this two-bar chord-tone guide as a connected upper-register solo phrase. Give each note room to ring, shape the second bar as an answer, and leave the next handoff clear; this is a lesson phrase, not a recording transcription.", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 4, 4.75, 6, 7], "instruments": ["rhodes"], "cycleLength": 2, "durations": [0.55, 0.38, 0.6, 0.68, 0.55, 0.38, 0.6, 0.8], "pitches": [{"degree": 1, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}, {"degree": 5, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}, {"degree": 5, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}, {"degree": 2, "register": 68, "voicing": "single"}, {"degree": 1, "register": 68, "voicing": "single"}], "accents": [0.9, 0.56, 0.78, 0.62, 0.86, 0.54, 0.72, 0.96], "articulation": "legato", "sectionUsage": ["solo"], "difficulty": 3, "supportedEnergy": [2, 3, 4], "arrangementVariation": true},
        {"name": "jazzy Rhodes chords with restrained log drum low anchor", "role": "bass", "onsets": [0, 1.5, 2.75, 3.5, 4.25, 5.75, 6.5, 7.5], "instruments": ["log-drum"], "cycleLength": 2, "articulation": "accent", "durations": [0.75, 0.6, 0.4, 0.3, 0.8, 0.45, 0.6, 0.3], "accents": [0.9, 0.65, 0.5, 0.8, 0.95, 0.55, 0.75, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep a spacious low log-drum phrase beneath extended piano harmony, answering more gently in the second bar. Original ensemble study, not a recording transcription."},
        {"name": "jazzy Rhodes chords with restrained log drum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "jazzy Rhodes chords with restrained log drum shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
      "id": "vocal",
      "name": "Vocal",
      "description": "Vocal: vocal response above rolling log drum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["vocal response above rolling log drum"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["piano", "synth"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "vocal response above rolling log drum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vocal response above rolling log drum piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "vocal response above rolling log drum synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "vocal response above rolling log drum low anchor", "role": "bass", "onsets": [0, 0.75, 2, 3.25, 4.5, 5.25, 6.5, 7.5], "instruments": ["log-drum"], "cycleLength": 2, "articulation": "accent", "durations": [0.6, 0.35, 0.65, 0.5, 0.7, 0.4, 0.6, 0.3], "accents": [0.95, 0.5, 0.75, 0.8, 0.9, 0.5, 0.75, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Anchor the sung refrain with separated log-drum roots and a short higher reply at the phrase end. Original ensemble study, not a recording transcription."},
        {"name": "vocal response above rolling log drum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "vocal response above rolling log drum shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
      "id": "log-drum-heavy",
      "name": "Log-Drum Heavy",
      "description": "Log-Drum Heavy: pitched log-drum pickup clusters. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["pitched log-drum pickup clusters"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "pitched log-drum pickup clusters synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pitched log-drum pickup clusters piano accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["piano"], "cycleLength": 1, "durations": [0.3, 0.3], "articulation": "staccato", "shortName": "Heavy piano stabs", "description": "Use two short chord marks around the log-drum pickups; keep the kick clear and the low end uncluttered.", "accents": [0.9, 0.76]},
        {"name": "pitched log-drum pickup clusters piano cadence fill", "role": "harmony", "onsets": [3], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Piano pickup tag", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.38], "accents": [0.94]},
        {"name": "pitched log-drum pickup clusters rhodes accompaniment", "role": "harmony", "onsets": [1], "instruments": ["rhodes"], "cycleLength": 1, "durations": [2.8], "articulation": "legato", "shortName": "Log-drum Rhodes bed", "description": "Hold one quiet midrange chord after the piano hit; leave the pitched log-drum cluster to own the low register.", "accents": [0.42], "pitches": [{"degree": 1, "register": 68, "voicing": "chord"}]},
        {"name": "pitched log-drum pickup clusters rhodes cadence fill", "role": "harmony", "onsets": [1], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato", "shortName": "Log-drum chord tail", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [2.85], "accents": [0.4], "pitches": [{"degree": 1, "register": 68, "voicing": "chord"}]},
        {"name": "pitched log-drum pickup clusters low anchor", "role": "bass", "onsets": [0, 1.75, 2.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "pitched log-drum pickup clusters kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "pitched log-drum pickup clusters shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
      "id": "bacardi",
      "name": "Bacardi",
      "description": "Bacardi: Bacardi percussion and whistle response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bacardi percussion and whistle response"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Bacardi percussion and whistle response synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bacardi percussion and whistle response piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.28, 0.28, 0.26, 0.32], "articulation": "staccato", "shortName": "Bacardi piano bounce", "description": "Keep bright chord accents between the busy percussion figures; preserve a clean pocket for the whistle-like lead.", "accents": [0.94, 0.58, 0.82, 0.64]},
        {"name": "Bacardi percussion and whistle response piano cadence fill", "role": "harmony", "onsets": [2.75, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Bacardi piano tag", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.26, 0.28, 0.42], "accents": [0.8, 0.9, 0.98]},
        {"name": "Bacardi percussion and whistle response rhodes accompaniment", "role": "harmony", "onsets": [1, 3], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.28, 0.32], "articulation": "staccato", "shortName": "Bacardi Rhodes reply", "description": "Use two quiet chord-tone replies in the gaps; let the percussion and whistle carry the busiest motion.", "accents": [0.56, 0.68], "pitches": [{"degree": 5, "register": 68, "voicing": "single"}, {"degree": 3, "register": 68, "voicing": "single"}]},
        {"name": "Bacardi percussion and whistle response rhodes cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Rhodes whistle gap", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.28, 0.38], "accents": [0.58, 0.78], "pitches": [{"degree": 3, "register": 68, "voicing": "single"}, {"degree": 1, "register": 68, "voicing": "single"}]},
        {"name": "Bacardi percussion and whistle response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Bacardi percussion and whistle response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Bacardi percussion and whistle response shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
      "id": "gqom-crossover",
      "name": "Gqom Crossover",
      "description": "Gqom Crossover: Gqom broken kick and dark sparse bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gqom broken kick and dark sparse bass"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Gqom broken kick and dark sparse bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gqom broken kick and dark sparse bass low anchor", "role": "bass", "onsets": [0, 1.25, 2.5, 3.5, 4.75, 6, 7.25], "instruments": ["synth"], "cycleLength": 2, "articulation": "legato", "durations": [0.65, 0.45, 0.6, 0.3, 0.75, 0.7, 0.6], "accents": [1, 0.6, 0.75, 0.85, 0.95, 0.7, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Use broken low synth groups with an octave and a dark upper answer; leave the gaps as part of the crossover groove. Original ensemble study, not a recording transcription."},
        {"name": "Gqom broken kick and dark sparse bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Gqom broken kick and dark sparse bass sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "kwaito-crossover",
      "name": "Kwaito Crossover",
      "description": "Kwaito Crossover: kwaito offbeat chant and bass hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kwaito offbeat chant and bass hook"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "kwaito offbeat chant and bass hook synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kwaito offbeat chant and bass hook piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.32, 0.32, 0.32, 0.36], "articulation": "staccato", "shortName": "Kwaito piano offbeats", "description": "Keep the piano on the offbeat chant accents; leave the warm bass line to carry the downbeat.", "accents": [0.86, 0.58, 0.78, 0.6]},
        {"name": "kwaito offbeat chant and bass hook piano cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Kwaito piano tag", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [0.32, 0.48], "accents": [0.76, 0.94]},
        {"name": "kwaito offbeat chant and bass hook rhodes accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["rhodes"], "cycleLength": 1, "durations": [1.7, 1.7], "articulation": "legato", "shortName": "Kwaito Rhodes bed", "description": "Sustain two soft midrange chords beneath the chant and bass; avoid repeating the piano offbeat rhythm.", "accents": [0.6, 0.52], "pitches": [{"degree": 1, "register": 68, "voicing": "chord"}, {"degree": 5, "register": 68, "voicing": "chord"}]},
        {"name": "kwaito offbeat chant and bass hook rhodes cadence fill", "role": "harmony", "onsets": [0, 2], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato", "shortName": "Kwaito Rhodes tail", "description": "Shape a local phrase ending without filling the following beat; leave the next log-drum or vocal entrance audible.", "durations": [1.8, 1.75], "accents": [0.56, 0.48], "pitches": [{"degree": 1, "register": 68, "voicing": "chord"}, {"degree": 5, "register": 68, "voicing": "chord"}]},
        {"name": "kwaito offbeat chant and bass hook low anchor", "role": "bass", "onsets": [0.5, 1.75, 2.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.25]},
        {"name": "kwaito offbeat chant and bass hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "kwaito offbeat chant and bass hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.74,"width":0.66,"brightness":0.6,"compressionRatio":2.4,"transientSnap":0.72,"subHarmonics":0.24,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.66,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":false},
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
