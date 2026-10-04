import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "brazilian",
  "name": "Brazilian",
  "family": "Brazil",
  "color": "#cd94ad",
  "description": "Brazilian is an independent musical world. Brazil idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Samba",
  "meter": "2/4",
  "tempo": [96, 112],
  "instruments": ["voice", "guitar", "cavaquinho", "bass", "surdo", "pandeiro", "tamborim", "flute", "piano", "upright-bass", "drums", "banjo", "tantan", "accordion", "zabumba", "triangle"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "cavaquinho"],
    "bass": ["bass"],
    "percussion": ["surdo", "pandeiro", "tamborim"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Cmaj7", "A7b9", "Gmaj7", "C7"],
  "harmonicRhythm": "bar",
  "cadences": ["D7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["samba surdo and cavaquinho interlock", "Samba: partido-alto syncopation", "Samba: samba surdo/tamborim/agogo", "Samba: guitar syncopation", "bossa independent thumb bass and chord anticipation", "Bossa Nova: partido-alto syncopation", "Bossa Nova: samba surdo/tamborim/agogo", "Bossa Nova: guitar syncopation", "pagode pandeiro and banjo responses", "Pagode: partido-alto syncopation", "Pagode: samba surdo/tamborim/agogo", "Pagode: guitar syncopation", "partido alto syncopated sung exchange", "Partido Alto: partido-alto syncopation", "Partido Alto: samba surdo/tamborim/agogo", "Partido Alto: guitar syncopation", "samba de roda palmas and responsorial verse", "Samba de Roda: partido-alto syncopation", "Samba de Roda: samba surdo/tamborim/agogo", "Samba de Roda: guitar syncopation", "forró accordion over zabumba and triangle", "Forró: partido-alto syncopation", "Forró: samba surdo/tamborim/agogo", "Forró: guitar syncopation", "baião low and high zabumba alternation", "Baião: partido-alto syncopation", "Baião: samba surdo/tamborim/agogo", "Baião: guitar syncopation", "xote relaxed accordion dance", "Xote: partido-alto syncopation", "Xote: samba surdo/tamborim/agogo", "Xote: guitar syncopation", "MPB guitar extensions and melodic bass", "MPB: partido-alto syncopation", "MPB: samba surdo/tamborim/agogo", "MPB: guitar syncopation", "samba reggae layered surdo accents", "Samba-Reggae: partido-alto syncopation", "Samba-Reggae: samba surdo/tamborim/agogo", "Samba-Reggae: guitar syncopation", "samba rock syncopated guitar backbeat", "Samba-Rock: partido-alto syncopation", "Samba-Rock: samba surdo/tamborim/agogo", "Samba-Rock: guitar syncopation"],
  "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "samba",
      "name": "Samba",
      "description": "Samba: samba surdo and cavaquinho interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["samba surdo and cavaquinho interlock", "Samba: partido-alto syncopation", "Samba: samba surdo/tamborim/agogo", "Samba: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Samba: cavaquinho strum", "Samba: nylon guitar fingerstyle", "Samba: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Samba: extended functional harmony", "Samba: secondary dominants", "Samba: diminished passing"],
      "meter": "2/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "cavaquinho"],
        "bass": ["bass"],
        "percussion": ["surdo", "pandeiro", "tamborim"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "samba surdo and cavaquinho interlock voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "samba surdo and cavaquinho interlock voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba surdo and cavaquinho interlock guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "samba surdo and cavaquinho interlock guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba surdo and cavaquinho interlock cavaquinho accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "samba surdo and cavaquinho interlock cavaquinho cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba surdo and cavaquinho interlock low anchor", "role": "bass", "onsets": [0, 0.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "samba surdo and cavaquinho interlock bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba surdo and cavaquinho interlock surdo pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["surdo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba surdo and cavaquinho interlock surdo cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["surdo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba surdo and cavaquinho interlock pandeiro pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba surdo and cavaquinho interlock pandeiro cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba surdo and cavaquinho interlock tamborim pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["tamborim"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba surdo and cavaquinho interlock tamborim cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tamborim"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "surdo": ["accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tamborim": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "surdo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tamborim:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
      "id": "bossa-nova",
      "name": "Bossa Nova",
      "description": "Bossa Nova: bossa independent thumb bass and chord anticipation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["bossa independent thumb bass and chord anticipation", "Bossa Nova: partido-alto syncopation", "Bossa Nova: samba surdo/tamborim/agogo", "Bossa Nova: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Bossa Nova: cavaquinho strum", "Bossa Nova: nylon guitar fingerstyle", "Bossa Nova: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "tenuto", "strum", "open", "ghost", "roll"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7b9", "Am7", "D7", "Gmaj7", "C7", "Bossa Nova: extended functional harmony", "Bossa Nova: secondary dominants", "Bossa Nova: diminished passing"],
      "meter": "4/4",
      "tempo": [74, 90],
      "scale": "major",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "A": ["Dm7", "G7", "Cmaj7", "A7b9"],
        "B": ["Am7", "D7", "Gmaj7", "C7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "flute", "soloMode": "accompanied"},
        {"label": "A", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bossa independent thumb bass and chord anticipation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bossa independent thumb bass and chord anticipation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bossa independent thumb bass and chord anticipation flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bossa independent thumb bass and chord anticipation flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bossa independent thumb bass and chord anticipation guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bossa independent thumb bass and chord anticipation guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bossa independent thumb bass and chord anticipation piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bossa independent thumb bass and chord anticipation piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bossa independent thumb bass and chord anticipation low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bossa independent thumb bass and chord anticipation upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bossa independent thumb bass and chord anticipation kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "bossa independent thumb bass and chord anticipation drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["slap", "accent", "staccato", "legato", "tenuto"],
        "drums": ["open", "accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "slap"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "accent", "ghost", "roll"],
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
      "id": "pagode",
      "name": "Pagode",
      "description": "Pagode: pagode pandeiro and banjo responses. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["pagode pandeiro and banjo responses", "Pagode: partido-alto syncopation", "Pagode: samba surdo/tamborim/agogo", "Pagode: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Pagode: cavaquinho strum", "Pagode: nylon guitar fingerstyle", "Pagode: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Pagode: extended functional harmony", "Pagode: secondary dominants", "Pagode: diminished passing"],
      "meter": "2/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["cavaquinho", "banjo"],
        "bass": ["bass"],
        "percussion": ["pandeiro", "tantan"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pagode pandeiro and banjo responses voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pagode pandeiro and banjo responses voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pagode pandeiro and banjo responses cavaquinho accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "pagode pandeiro and banjo responses cavaquinho cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pagode pandeiro and banjo responses banjo accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["banjo"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "pagode pandeiro and banjo responses banjo cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["banjo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pagode pandeiro and banjo responses low anchor", "role": "bass", "onsets": [0, 0.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "pagode pandeiro and banjo responses bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pagode pandeiro and banjo responses pandeiro pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pagode pandeiro and banjo responses pandeiro cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "pagode pandeiro and banjo responses tantan pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["tantan"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pagode pandeiro and banjo responses tantan cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tantan"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "banjo": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tantan": ["open", "ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "banjo:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tantan:percussion": {
          "allowedTechniques": ["open", "ghost", "accent", "roll"],
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
      "id": "partido-alto",
      "name": "Partido Alto",
      "description": "Partido Alto: partido alto syncopated sung exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["partido alto syncopated sung exchange", "Partido Alto: partido-alto syncopation", "Partido Alto: samba surdo/tamborim/agogo", "Partido Alto: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Partido Alto: cavaquinho strum", "Partido Alto: nylon guitar fingerstyle", "Partido Alto: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Partido Alto: extended functional harmony", "Partido Alto: secondary dominants", "Partido Alto: diminished passing"],
      "meter": "2/4",
      "tempo": [94, 110],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "cavaquinho"],
        "bass": ["bass"],
        "percussion": ["surdo", "pandeiro", "tamborim"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "partido alto syncopated sung exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "partido alto syncopated sung exchange voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "partido alto syncopated sung exchange guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "partido alto syncopated sung exchange guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "partido alto syncopated sung exchange cavaquinho accompaniment", "role": "harmony", "onsets": [0.25, 1.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "partido alto syncopated sung exchange cavaquinho cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "partido alto syncopated sung exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "partido alto syncopated sung exchange bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "partido alto syncopated sung exchange surdo pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75], "instruments": ["surdo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "partido alto syncopated sung exchange surdo cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["surdo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "partido alto syncopated sung exchange pandeiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "partido alto syncopated sung exchange pandeiro cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "partido alto syncopated sung exchange tamborim pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75], "instruments": ["tamborim"], "cycleLength": 1, "articulation": "accent"},
        {"name": "partido alto syncopated sung exchange tamborim cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tamborim"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "surdo": ["accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tamborim": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "surdo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tamborim:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
      "id": "samba-de-roda",
      "name": "Samba de Roda",
      "description": "Samba de Roda: samba de roda palmas and responsorial verse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["samba de roda palmas and responsorial verse", "Samba de Roda: partido-alto syncopation", "Samba de Roda: samba surdo/tamborim/agogo", "Samba de Roda: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Samba de Roda: cavaquinho strum", "Samba de Roda: nylon guitar fingerstyle", "Samba de Roda: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Samba de Roda: extended functional harmony", "Samba de Roda: secondary dominants", "Samba de Roda: diminished passing"],
      "meter": "2/4",
      "tempo": [92, 108],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "cavaquinho"],
        "bass": ["bass"],
        "percussion": ["surdo", "pandeiro", "tamborim"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "samba de roda palmas and responsorial verse voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "samba de roda palmas and responsorial verse voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba de roda palmas and responsorial verse guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "samba de roda palmas and responsorial verse guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba de roda palmas and responsorial verse cavaquinho accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "samba de roda palmas and responsorial verse cavaquinho cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba de roda palmas and responsorial verse low anchor", "role": "bass", "onsets": [0, 0.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "samba de roda palmas and responsorial verse bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba de roda palmas and responsorial verse surdo pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["surdo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba de roda palmas and responsorial verse surdo cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["surdo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba de roda palmas and responsorial verse pandeiro pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba de roda palmas and responsorial verse pandeiro cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba de roda palmas and responsorial verse tamborim pulse", "role": "percussion", "onsets": [0, 0.75, 1.25], "instruments": ["tamborim"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba de roda palmas and responsorial verse tamborim cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tamborim"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "surdo": ["accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tamborim": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "surdo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tamborim:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
      "id": "forro",
      "name": "Forró",
      "description": "Forró: forró accordion over zabumba and triangle. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["forró accordion over zabumba and triangle", "Forró: partido-alto syncopation", "Forró: samba surdo/tamborim/agogo", "Forró: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Forró: cavaquinho strum", "Forró: nylon guitar fingerstyle", "Forró: pandeiro articulation", "accent", "staccato", "legato", "tenuto", "vibrato", "strum", "ghost", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Forró: extended functional harmony", "Forró: secondary dominants", "Forró: diminished passing"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["accordion", "voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["zabumba", "triangle"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "forró accordion over zabumba and triangle accordion statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "forró accordion over zabumba and triangle accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "forró accordion over zabumba and triangle voice statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "forró accordion over zabumba and triangle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "forró accordion over zabumba and triangle guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "forró accordion over zabumba and triangle guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "forró accordion over zabumba and triangle low anchor", "role": "bass", "onsets": [0, 0.75, 2, 2.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "forró accordion over zabumba and triangle bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "forró accordion over zabumba and triangle zabumba pulse", "role": "percussion", "onsets": [0, 0.75, 1.25, 2, 2.75, 3.25], "instruments": ["zabumba"], "cycleLength": 1, "articulation": "accent"},
        {"name": "forró accordion over zabumba and triangle zabumba cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["zabumba"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "forró accordion over zabumba and triangle triangle pulse", "role": "percussion", "onsets": [0, 0.75, 1.25, 2, 2.75, 3.25], "instruments": ["triangle"], "cycleLength": 1, "articulation": "accent"},
        {"name": "forró accordion over zabumba and triangle triangle cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["triangle"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "accordion": ["accent", "staccato", "legato", "tenuto"],
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "zabumba": ["accent", "ghost", "roll"],
        "triangle": ["accent"]
      },
      "instrumentDialects": {
        "accordion:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "zabumba:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "triangle:percussion": {
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
      "id": "baiao",
      "name": "Baião",
      "description": "Baião: baião low and high zabumba alternation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["baião low and high zabumba alternation", "Baião: partido-alto syncopation", "Baião: samba surdo/tamborim/agogo", "Baião: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Baião: cavaquinho strum", "Baião: nylon guitar fingerstyle", "Baião: pandeiro articulation", "accent", "staccato", "legato", "tenuto", "vibrato", "strum", "ghost", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Baião: extended functional harmony", "Baião: secondary dominants", "Baião: diminished passing"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["accordion", "voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["zabumba", "triangle"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "baião low and high zabumba alternation accordion statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "baião low and high zabumba alternation accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "baião low and high zabumba alternation voice statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "baião low and high zabumba alternation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "baião low and high zabumba alternation guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "baião low and high zabumba alternation guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "baião low and high zabumba alternation low anchor", "role": "bass", "onsets": [0, 0.75, 2, 2.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "baião low and high zabumba alternation bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "baião low and high zabumba alternation zabumba pulse", "role": "percussion", "onsets": [0, 0.75, 1.25, 2, 2.75, 3.25], "instruments": ["zabumba"], "cycleLength": 1, "articulation": "accent"},
        {"name": "baião low and high zabumba alternation zabumba cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["zabumba"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "baião low and high zabumba alternation triangle pulse", "role": "percussion", "onsets": [0, 0.75, 1.25, 2, 2.75, 3.25], "instruments": ["triangle"], "cycleLength": 1, "articulation": "accent"},
        {"name": "baião low and high zabumba alternation triangle cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["triangle"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "accordion": ["accent", "staccato", "legato", "tenuto"],
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "zabumba": ["accent", "ghost", "roll"],
        "triangle": ["accent"]
      },
      "instrumentDialects": {
        "accordion:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "zabumba:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "triangle:percussion": {
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
      "id": "xote",
      "name": "Xote",
      "description": "Xote: xote relaxed accordion dance. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["xote relaxed accordion dance", "Xote: partido-alto syncopation", "Xote: samba surdo/tamborim/agogo", "Xote: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Xote: cavaquinho strum", "Xote: nylon guitar fingerstyle", "Xote: pandeiro articulation", "accent", "staccato", "legato", "tenuto", "vibrato", "strum", "ghost", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Xote: extended functional harmony", "Xote: secondary dominants", "Xote: diminished passing"],
      "meter": "2/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["accordion", "voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["zabumba", "triangle"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "xote relaxed accordion dance accordion statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "xote relaxed accordion dance accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "xote relaxed accordion dance voice statement", "role": "lead", "onsets": [0], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "xote relaxed accordion dance voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "xote relaxed accordion dance guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "xote relaxed accordion dance guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "xote relaxed accordion dance low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "xote relaxed accordion dance bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "xote relaxed accordion dance zabumba pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["zabumba"], "cycleLength": 1, "articulation": "accent"},
        {"name": "xote relaxed accordion dance zabumba cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["zabumba"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "xote relaxed accordion dance triangle pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["triangle"], "cycleLength": 1, "articulation": "accent"},
        {"name": "xote relaxed accordion dance triangle cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["triangle"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "accordion": ["accent", "staccato", "legato", "tenuto"],
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "zabumba": ["accent", "ghost", "roll"],
        "triangle": ["accent"]
      },
      "instrumentDialects": {
        "accordion:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "zabumba:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "triangle:percussion": {
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
      "id": "mpb",
      "name": "MPB",
      "description": "MPB: MPB guitar extensions and melodic bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["MPB guitar extensions and melodic bass", "MPB: partido-alto syncopation", "MPB: samba surdo/tamborim/agogo", "MPB: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "MPB: cavaquinho strum", "MPB: nylon guitar fingerstyle", "MPB: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "tenuto", "open", "ghost", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "MPB: extended functional harmony", "MPB: secondary dominants", "MPB: diminished passing"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums", "pandeiro"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "MPB guitar extensions and melodic bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "MPB guitar extensions and melodic bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "MPB guitar extensions and melodic bass guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "MPB guitar extensions and melodic bass guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "MPB guitar extensions and melodic bass piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "MPB guitar extensions and melodic bass piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "MPB guitar extensions and melodic bass low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "MPB guitar extensions and melodic bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "MPB guitar extensions and melodic bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "MPB guitar extensions and melodic bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "MPB guitar extensions and melodic bass pandeiro pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "MPB guitar extensions and melodic bass pandeiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["open", "accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "accent", "ghost", "roll"],
          "defaultTechnique": "open"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
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
      "id": "samba-reggae",
      "name": "Samba-Reggae",
      "description": "Samba-Reggae: samba reggae layered surdo accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["samba reggae layered surdo accents", "Samba-Reggae: partido-alto syncopation", "Samba-Reggae: samba surdo/tamborim/agogo", "Samba-Reggae: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Samba-Reggae: cavaquinho strum", "Samba-Reggae: nylon guitar fingerstyle", "Samba-Reggae: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Samba-Reggae: extended functional harmony", "Samba-Reggae: secondary dominants", "Samba-Reggae: diminished passing"],
      "meter": "4/4",
      "tempo": [94, 110],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "cavaquinho"],
        "bass": ["bass"],
        "percussion": ["surdo", "pandeiro", "tamborim"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "samba reggae layered surdo accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "samba reggae layered surdo accents voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba reggae layered surdo accents guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "samba reggae layered surdo accents guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba reggae layered surdo accents cavaquinho accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "samba reggae layered surdo accents cavaquinho cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba reggae layered surdo accents low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "samba reggae layered surdo accents bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba reggae layered surdo accents surdo pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["surdo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba reggae layered surdo accents surdo cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["surdo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba reggae layered surdo accents pandeiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba reggae layered surdo accents pandeiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba reggae layered surdo accents tamborim pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["tamborim"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba reggae layered surdo accents tamborim cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tamborim"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "surdo": ["accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tamborim": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "surdo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tamborim:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
      "id": "samba-rock",
      "name": "Samba-Rock",
      "description": "Samba-Rock: samba rock syncopated guitar backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["samba rock syncopated guitar backbeat", "Samba-Rock: partido-alto syncopation", "Samba-Rock: samba surdo/tamborim/agogo", "Samba-Rock: guitar syncopation"],
      "techniques": ["fingerstyle", "muted-strum", "arpeggio", "short-chord-stab", "brush", "open-tone", "slap", "Samba-Rock: cavaquinho strum", "Samba-Rock: nylon guitar fingerstyle", "Samba-Rock: pandeiro articulation", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "roll", "open"],
      "harmony": ["C6", "A7", "Dm7", "G7", "Fmaj7", "E7", "Am7", "D7", "Samba-Rock: extended functional harmony", "Samba-Rock: secondary dominants", "Samba-Rock: diminished passing"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "cavaquinho"],
        "bass": ["bass"],
        "percussion": ["surdo", "pandeiro", "tamborim"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "tema": ["C6", "A7", "Dm7", "G7"],
        "refrain": ["Fmaj7", "E7", "Am7", "D7"],
        "coda": ["D7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "samba rock syncopated guitar backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "samba rock syncopated guitar backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba rock syncopated guitar backbeat guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "samba rock syncopated guitar backbeat guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba rock syncopated guitar backbeat cavaquinho accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["cavaquinho"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "samba rock syncopated guitar backbeat cavaquinho cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["cavaquinho"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba rock syncopated guitar backbeat low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "samba rock syncopated guitar backbeat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "samba rock syncopated guitar backbeat surdo pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["surdo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba rock syncopated guitar backbeat surdo cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["surdo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba rock syncopated guitar backbeat pandeiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["pandeiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba rock syncopated guitar backbeat pandeiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["pandeiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samba rock syncopated guitar backbeat tamborim pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["tamborim"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samba rock syncopated guitar backbeat tamborim cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tamborim"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "cavaquinho": ["accent", "staccato", "legato"],
        "bass": ["slap", "fingerstyle", "accent", "staccato", "legato"],
        "surdo": ["accent", "ghost", "roll"],
        "pandeiro": ["slap", "open", "accent", "ghost", "roll"],
        "tamborim": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["strum", "arpeggio", "fingerstyle", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "strum",
          "variantId": "nylon"
        },
        "cavaquinho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "surdo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "pandeiro:percussion": {
          "allowedTechniques": ["slap", "open", "accent", "ghost", "roll"],
          "defaultTechnique": "slap"
        },
        "tamborim:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
    }
  ]
};
