import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "Angola / Lusophone Africa",
  "color": "#7d37d2",
  "description": "Kizomba is an independent musical world. Angola / Lusophone Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [84, 100],
  "instruments": ["voice", "guitar", "synth", "bass", "drums", "dikanza"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "synth"],
    "bass": ["bass"],
    "percussion": ["drums", "dikanza"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "C", "G", "Dm", "Bb", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "E7", "Fm", "Db", "Bbm", "C7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["traditional bass pickup and warm guitar chords", "semba-derived guitar dance and bass movement", "passada relaxed vocal phrase and guitar response", "tarraxinha sparse sub pulse and slow chord space", "urban kiz staccato bass and electronic breaks", "ghetto zouk crossover R&B lead and synth hook", "fusion kiz guitar and electronic call response"],
  "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: traditional bass pickup and warm guitar chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["traditional bass pickup and warm guitar chords"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
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
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "traditional bass pickup and warm guitar chords voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional bass pickup and warm guitar chords voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.55, 0.48], "articulation": "staccato", "shortName": "Traditional guitar chords", "description": "Place two warm chord strikes in the bar and leave room for the vocal phrase and bass pickup.", "accents": [0.76, 0.62]},
        {"name": "traditional bass pickup and warm guitar chords guitar cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Guitar phrase close", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.5, 0.7], "accents": [0.68, 0.88]},
        {"name": "traditional bass pickup and warm guitar chords synth accompaniment", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.6], "articulation": "legato", "shortName": "Soft synth bed", "description": "Hold one quiet chord under the guitar; let the harmony connect the bar without adding another repeated rhythm.", "accents": [0.44], "pitches": [{"degree": 1, "register": 64, "voicing": "chord"}]},
        {"name": "traditional bass pickup and warm guitar chords synth cadence fill", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato", "shortName": "Synth chord tail", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [3.7], "accents": [0.42], "pitches": [{"degree": 1, "register": 64, "voicing": "chord"}]},
        {"name": "traditional bass pickup and warm guitar chords low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "traditional bass pickup and warm guitar chords bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "traditional bass pickup and warm guitar chords drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "traditional bass pickup and warm guitar chords dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "traditional bass pickup and warm guitar chords dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
      "id": "semba-derived",
      "name": "Semba-Derived",
      "description": "Semba-Derived: semba-derived guitar dance and bass movement. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["semba-derived guitar dance and bass movement"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "semba-derived guitar dance and bass movement voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "semba-derived guitar dance and bass movement voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.34, 0.24, 0.32, 0.36, 0.24, 0.3], "articulation": "staccato", "shortName": "Semba guitar dance", "description": "Play the active chord figure with a light pickup and a lifted last attack; keep the bass movement audible underneath.", "accents": [0.9, 0.5, 0.72, 0.82, 0.48, 0.88]},
        {"name": "semba-derived guitar dance and bass movement guitar cadence fill", "role": "harmony", "onsets": [2.5, 3, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Semba guitar tag", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.3, 0.24, 0.3, 0.42], "accents": [0.76, 0.5, 0.8, 0.96]},
        {"name": "semba-derived guitar dance and bass movement synth accompaniment", "role": "harmony", "onsets": [1, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.32, 0.32], "articulation": "legato", "shortName": "Semba key replies", "description": "Answer the animated guitar on beats two and four with short, lighter chord hits; do not double its running figure.", "accents": [0.52, 0.64]},
        {"name": "semba-derived guitar dance and bass movement synth cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Semba key tag", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.3, 0.42], "accents": [0.52, 0.74], "pitches": [{"degree": 5, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "semba-derived guitar dance and bass movement low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "semba-derived guitar dance and bass movement bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "semba-derived guitar dance and bass movement drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "semba-derived guitar dance and bass movement dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "semba-derived guitar dance and bass movement dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
      "id": "passada",
      "name": "Passada",
      "description": "Passada: passada relaxed vocal phrase and guitar response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gentle acoustic guitar strumming and warm bass accompanying smooth continuous walking step", "passada relaxed vocal phrase and guitar response"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "continuous, smooth, elegant walking steps", "flowing partner connection without sharp breaks", "warm Cabo-Verdean / Angolan melodies", "gentle hip movement in sync with steps", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7", "G7", "Cmaj7"],
        "verse": ["Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Dm7", "E7", "Am7"],
        "chorus": ["Dm7", "G7", "Cmaj7", "Fmaj7", "Dm7", "E7", "Am7", "Am7"],
        "coda": ["Dm7", "E7", "Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "passada relaxed vocal phrase and guitar response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "passada relaxed vocal phrase and guitar response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.55, 0.48], "articulation": "staccato", "shortName": "Passada guitar comp", "description": "Keep the relaxed chord pulse between vocal phrases; let the bass pickup lead into the next change.", "accents": [0.72, 0.64]},
        {"name": "passada relaxed vocal phrase and guitar response guitar cadence fill", "role": "harmony", "onsets": [1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Passada guitar release", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.5, 0.72], "accents": [0.62, 0.86]},
        {"name": "passada relaxed vocal phrase and guitar response synth accompaniment", "role": "harmony", "onsets": [1.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.32, 0.38], "articulation": "staccato", "shortName": "Passada synth reply", "description": "Answer the guitar in the vocal gap with two quiet upper chord tones, then leave the next entrance clear.", "accents": [0.54, 0.66], "pitches": [{"degree": 5, "register": 64, "voicing": "single"}, {"degree": 3, "register": 64, "voicing": "single"}]},
        {"name": "passada relaxed vocal phrase and guitar response synth cadence fill", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Passada reply close", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.28, 0.42], "accents": [0.56, 0.72], "pitches": [{"degree": 3, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "passada relaxed vocal phrase and guitar response low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "passada relaxed vocal phrase and guitar response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "passada relaxed vocal phrase and guitar response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "passada relaxed vocal phrase and guitar response dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "passada relaxed vocal phrase and guitar response dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
      "id": "tarraxinha",
      "name": "Tarraxinha",
      "description": "Tarraxinha: tarraxinha sparse sub pulse and slow chord space. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Deep resonant sub-bass pulse dropping on slow pelvic micro-isolation cue", "tarraxinha sparse sub pulse and slow chord space"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "slow, hypnotic, minimal percussive beats", "massive subterranean sub-bass frequencies", "intense static pelvic micro-movements", "minimal melodic distraction", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "loop": ["Fm", "Db", "Bbm", "C7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tarraxinha sparse sub pulse and slow chord space voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tarraxinha sparse sub pulse and slow chord space voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.42, 0.42], "articulation": "staccato", "shortName": "Tarraxinha guitar chops", "description": "Use two soft, short chord attacks around the spacious low pulse; keep the spaces open.", "accents": [0.68, 0.6]},
        {"name": "tarraxinha sparse sub pulse and slow chord space guitar cadence fill", "role": "harmony", "onsets": [2.5], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Tarraxinha release", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [1.0], "accents": [0.62]},
        {"name": "tarraxinha sparse sub pulse and slow chord space synth accompaniment", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.65], "articulation": "legato", "shortName": "Tarraxinha synth pad", "description": "Sustain one low, restrained chord through the bar so the sub pulse and vocal remain in front.", "accents": [0.4], "pitches": [{"degree": 1, "register": 64, "voicing": "chord"}]},
        {"name": "tarraxinha sparse sub pulse and slow chord space synth cadence fill", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "legato", "shortName": "Tarraxinha pad tail", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [3.75], "accents": [0.38], "pitches": [{"degree": 1, "register": 64, "voicing": "chord"}]},
        {"name": "tarraxinha sparse sub pulse and slow chord space low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "tarraxinha sparse sub pulse and slow chord space bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "tarraxinha sparse sub pulse and slow chord space drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "tarraxinha sparse sub pulse and slow chord space dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tarraxinha sparse sub pulse and slow chord space dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
      "id": "urban-kiz",
      "name": "Urban Kiz",
      "description": "Urban Kiz: urban kiz staccato bass and electronic breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Sharp syncopated electronic sub-bass stop followed by instant linear step and sliding synth pad", "urban kiz staccato bass and electronic breaks"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "strict linear geometric footwork and sharp isolations", "electronic Ghetto Zouk beats with sub-bass drops", "sudden dynamic breaks and tempo illusions", "tension-and-release partnering", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "breakdown": ["F", "G", "Am", "Am", "F", "G", "Am", "Am"],
        "coda": ["F", "G", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "urban kiz staccato bass and electronic breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban kiz staccato bass and electronic breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.25, 0.25], "articulation": "staccato", "shortName": "Urban guitar chops", "description": "Use two clipped chord accents to frame the programmed groove; leave the drop space open for the synth hook.", "accents": [0.82, 0.7]},
        {"name": "urban kiz staccato bass and electronic breaks guitar cadence fill", "role": "harmony", "onsets": [2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Urban guitar cut", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.25, 0.32], "accents": [0.82, 0.92]},
        {"name": "urban kiz staccato bass and electronic breaks synth accompaniment", "role": "harmony", "onsets": [1, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.28, 0.34], "articulation": "staccato", "shortName": "Urban synth hook", "description": "Answer the guitar with two short upper chord tones; keep the hook separate from the bass and percussion pulse.", "accents": [0.64, 0.78], "pitches": [{"degree": 5, "register": 64, "voicing": "single"}, {"degree": 3, "register": 64, "voicing": "single"}]},
        {"name": "urban kiz staccato bass and electronic breaks synth cadence fill", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Urban hook pickup", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.24, 0.38], "accents": [0.64, 0.82], "pitches": [{"degree": 3, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "urban kiz staccato bass and electronic breaks low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "urban kiz staccato bass and electronic breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "urban kiz staccato bass and electronic breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "urban kiz staccato bass and electronic breaks dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban kiz staccato bass and electronic breaks dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
      "id": "ghetto-zouk-crossover",
      "name": "Ghetto-Zouk Crossover",
      "description": "Ghetto-Zouk Crossover: ghetto zouk crossover R&B lead and synth hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["ghetto zouk crossover R&B lead and synth hook"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
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
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ghetto zouk crossover R&B lead and synth hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ghetto zouk crossover R&B lead and synth hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.32, 0.32], "articulation": "staccato", "shortName": "Ghetto guitar chops", "description": "Keep the guitar as a short chord counter-rhythm beneath the electronic bass; do not compete with the lead hook.", "accents": [0.8, 0.68]},
        {"name": "ghetto zouk crossover R&B lead and synth hook guitar cadence fill", "role": "harmony", "onsets": [2, 3.5], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Ghetto guitar tag", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.38, 0.52], "accents": [0.66, 0.88]},
        {"name": "ghetto zouk crossover R&B lead and synth hook synth accompaniment", "role": "harmony", "onsets": [1, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.28, 0.26, 0.38], "articulation": "staccato", "shortName": "Ghetto synth answer", "description": "Trace three upper chord tones between guitar attacks; hand the foreground back to the vocal after the answer.", "accents": [0.68, 0.5, 0.78], "pitches": [{"degree": 5, "register": 64, "voicing": "single"}, {"degree": 3, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "ghetto zouk crossover R&B lead and synth hook synth cadence fill", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Ghetto hook close", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.28, 0.4], "accents": [0.6, 0.82], "pitches": [{"degree": 3, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "ghetto zouk crossover R&B lead and synth hook low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "ghetto zouk crossover R&B lead and synth hook bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "ghetto zouk crossover R&B lead and synth hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "ghetto zouk crossover R&B lead and synth hook dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ghetto zouk crossover R&B lead and synth hook dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
          "defaultTechnique": "ghost"
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
    },
    {
      "id": "fusion-kiz",
      "name": "Fusion Kiz",
      "description": "Fusion Kiz: fusion kiz guitar and electronic call response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fusion kiz guitar and electronic call response"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
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
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion kiz guitar and electronic call response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion kiz guitar and electronic call response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.42, 0.38], "articulation": "staccato", "shortName": "Fusion guitar comp", "description": "Keep a clear two-hit guitar pulse, then leave a pocket for the electronic response.", "accents": [0.82, 0.68]},
        {"name": "fusion kiz guitar and electronic call response guitar cadence fill", "role": "harmony", "onsets": [2.5, 3, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament", "shortName": "Fusion guitar tag", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.34, 0.26, 0.44], "accents": [0.74, 0.52, 0.94]},
        {"name": "fusion kiz guitar and electronic call response synth accompaniment", "role": "harmony", "onsets": [1.25, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.3, 0.38], "articulation": "staccato", "shortName": "Fusion synth reply", "description": "Place two upper chord-tone answers in the guitar gaps; keep the handoff audible instead of stacking both parts.", "accents": [0.62, 0.8], "pitches": [{"degree": 5, "register": 64, "voicing": "single"}, {"degree": 3, "register": 64, "voicing": "single"}]},
        {"name": "fusion kiz guitar and electronic call response synth cadence fill", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "staccato", "shortName": "Fusion synth pickup", "description": "Shape a short, local phrase ending, then leave the next section entrance clear.", "durations": [0.26, 0.4], "accents": [0.64, 0.82], "pitches": [{"degree": 3, "register": 64, "voicing": "single"}, {"degree": 1, "register": 64, "voicing": "single"}]},
        {"name": "fusion kiz guitar and electronic call response low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "fusion kiz guitar and electronic call response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "fusion kiz guitar and electronic call response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "fusion kiz guitar and electronic call response dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion kiz guitar and electronic call response dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
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
