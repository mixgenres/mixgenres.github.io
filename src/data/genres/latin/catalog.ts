import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "latin",
  "name": "Latin",
  "family": "Latin America / Caribbean",
  "color": "#f4b418",
  "description": "Latin is an independent musical world. Latin America / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Cumbia",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["voice", "accordion", "guitar", "bass", "cumbia-drum", "guiro", "piano", "tambora", "guira", "guacharaca", "bongos", "upright-bass", "maracas", "synth", "drums"],
  "roles": {
    "lead": ["voice", "accordion"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["cumbia-drum", "guiro"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "Dm", "E7", "C", "F", "G7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["cumbia guiro and bass two-beat interlock", "merengue tambora guira and bass drive", "vallenato accordion and guacharaca answer", "bolero sustained vocal with guitar arpeggio", "chicha electric guitar melody and cumbia pulse", "sonidera keyboard hook and cumbia guiro", "tropical horn response over dance percussion", "Latin pop vocal hook and acoustic syncopation", "Latin funk guitar scratch and percussion break", "cumbia villera keyboard riff and clipped bass", "electrocumbia synth hook and electronic cumbia beat", "Latin fusion extended comping and percussion exchange"],
  "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "cumbia",
      "name": "Cumbia",
      "description": "Cumbia: cumbia guiro and bass two-beat interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["cumbia guiro and bass two-beat interlock"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cumbia guiro and bass two-beat interlock voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia guiro and bass two-beat interlock accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia guiro and bass two-beat interlock guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cumbia guiro and bass two-beat interlock low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "cumbia guiro and bass two-beat interlock cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.5, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "ghost", "slap", "dum", "ghost", "open"], "accents": [0.9, 0.3, 0.7, 0.85, 0.3, 0.8], "description": "Anchor the two-beat dance with low strokes and answer on the upper head; keep the light strokes between them small. Original ensemble lesson; not a recording transcription."},
        {"name": "cumbia guiro and bass two-beat interlock guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "ghost", "open", "open", "ghost", "ghost", "open"], "accents": [0.8, 0.35, 0.45, 0.65, 0.85, 0.35, 0.45, 0.7], "durations": [0.32, 0.12, 0.12, 0.2, 0.32, 0.12, 0.12, 0.2], "description": "Alternate a longer scrape with two light returns and a short answering scrape; do not give every stroke the same weight. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "merengue",
      "name": "Merengue",
      "description": "Merengue: merengue tambora guira and bass drive. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["merengue tambora guira and bass drive"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "2/4",
      "tempo": [136, 152],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["tambora", "guira"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "merengue tambora guira and bass drive voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue tambora guira and bass drive accordion statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue tambora guira and bass drive piano accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "merengue tambora guira and bass drive low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "merengue tambora guira and bass drive tambora pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["tambora"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue tambora guira and bass drive guira pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["accent", "staccato", "legato"],
        "tambora": ["roll", "accent", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "tambora:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        },
        "guira:percussion": {
          "allowedTechniques": ["scrape", "short-scrape", "long-scrape", "accent"],
          "defaultTechnique": "scrape"
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
      "id": "vallenato",
      "name": "Vallenato",
      "description": "Vallenato: vallenato accordion and guacharaca answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["vallenato accordion and guacharaca answer"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost", "open", "slap"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "bass": ["bass"],
        "percussion": ["guacharaca", "bongos"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "vallenato accordion and guacharaca answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vallenato accordion and guacharaca answer accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vallenato accordion and guacharaca answer low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "vallenato accordion and guacharaca answer guacharaca pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guacharaca"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "open", "ghost", "open", "ghost", "open", "ghost"], "accents": [0.9, 0.35, 0.65, 0.4, 0.85, 0.35, 0.7, 0.45], "durations": [0.3, 0.12, 0.25, 0.12, 0.3, 0.12, 0.25, 0.12], "description": "Keep an even scraping hand with grounded long strokes and short quiet returns; leave the accordion pickup free. Original ensemble lesson; not a recording transcription."},
        {"name": "vallenato accordion and guacharaca answer bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent", "hits": ["ghost", "edge", "slap", "edge", "ghost", "edge", "open", "open"], "accents": [0.35, 0.5, 0.75, 0.5, 0.35, 0.5, 0.85, 0.65], "description": "Learn a martillo-shaped hand exchange: light fingertips and rim contacts lead into two open tones. Keep the scrape pattern independent. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bass": ["accent", "staccato", "legato"],
        "guacharaca": ["roll", "accent", "ghost", "open"],
        "bongos": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guacharaca:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
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
      "id": "bolero",
      "name": "Bolero",
      "description": "Bolero: bolero sustained vocal with guitar arpeggio. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["bolero sustained vocal with guitar arpeggio"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "muted-strum", "tenuto", "open", "slap", "ghost"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["bongos", "maracas"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bolero sustained vocal with guitar arpeggio voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero sustained vocal with guitar arpeggio guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero sustained vocal with guitar arpeggio piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero sustained vocal with guitar arpeggio low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bolero sustained vocal with guitar arpeggio bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent", "hits": ["ghost", "edge", "slap", "edge", "ghost", "edge", "open", "open"], "accents": [0.3, 0.5, 0.7, 0.45, 0.3, 0.5, 0.8, 0.65], "description": "Keep a soft martillo hand exchange under the long vocal line, bringing out the open tones while fingertips stay light. Original ensemble lesson; not a recording transcription."},
        {"name": "bolero sustained vocal with guitar arpeggio maracas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["maracas"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "open", "ghost", "open", "ghost", "open", "ghost"], "accents": [0.65, 0.3, 0.5, 0.3, 0.7, 0.3, 0.55, 0.35], "description": "Keep the maraca hand moving softly; make the forward strokes clearer than the short returns beneath the vocal. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "maracas": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        },
        "maracas:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
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
      "id": "chicha",
      "name": "Chicha",
      "description": "Chicha: chicha electric guitar melody and cumbia pulse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["chicha electric guitar melody and cumbia pulse"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "muted-strum", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["guitar"],
        "harmony": ["guitar", "organ"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "chicha electric guitar melody and cumbia pulse guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "chicha electric guitar melody and cumbia pulse guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "chicha electric guitar melody and cumbia pulse low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "chicha electric guitar melody and cumbia pulse cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.75, 1.5, 2, 2.75, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "ghost", "slap", "dum", "ghost", "open"], "accents": [0.9, 0.35, 0.75, 0.85, 0.3, 0.8], "description": "Keep the cumbia low anchors while placing the upper answer later around the electric guitar line. Original ensemble lesson; not a recording transcription."},
        {"name": "chicha electric guitar melody and cumbia pulse guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "open", "ghost", "open", "ghost", "ghost", "open"], "accents": [0.8, 0.35, 0.65, 0.35, 0.85, 0.4, 0.35, 0.75], "durations": [0.3, 0.12, 0.25, 0.12, 0.3, 0.12, 0.12, 0.25], "description": "Let the long scrapes lead and the short returns stay quiet; leave the melodic guitar distinct from the scrape pulse. Original ensemble lesson; not a recording transcription."},
        {"name": "Chicha organ offbeat chord support", "role": "harmony", "instruments": ["organ"], "onsets": [0.5, 1.5, 2.5, 3.5], "durations": [0.3, 0.3, 0.3, 0.3], "articulation": "staccato"}
      ],
      "instrumentTechniques": {
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "sonidera",
      "name": "Sonidera",
      "description": "Sonidera: sonidera keyboard hook and cumbia guiro. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sonidera keyboard hook and cumbia guiro"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sonidera keyboard hook and cumbia guiro voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sonidera keyboard hook and cumbia guiro synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sonidera keyboard hook and cumbia guiro synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "sonidera keyboard hook and cumbia guiro low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "sonidera keyboard hook and cumbia guiro kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28], "articulation": "accent", "shortName": "Sonidera cumbia kit", "description": "Practice this two-bar sonidera cumbia kit. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "sonidera keyboard hook and cumbia guiro drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "rim", "hat"], "accents": [0.5, 0.92, 0.5, 0.5, 0.5, 0.5], "shortName": "Sonidera cumbia close", "description": "Close with the last two beats of the sonidera cumbia kit; keep the spaces clear and land the next phrase together."},
        {"name": "sonidera keyboard hook and cumbia guiro guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "open", "ghost", "open", "ghost", "ghost", "open"], "accents": [0.9, 0.35, 0.6, 0.35, 0.85, 0.4, 0.35, 0.75], "durations": [0.35, 0.12, 0.25, 0.12, 0.35, 0.12, 0.12, 0.25], "description": "Make the long scrape the dance anchor and use short returns to answer the electronic bass. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "tropical",
      "name": "Tropical",
      "description": "Tropical: brass answers trade with the vocal call over congas, timbales and guiro. A strummed guitar and tambor llamador enter for the lifted refrain and mambo, then leave room for the coda.",
      "patterns": ["tropical horn response over dance percussion"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "horn-section"],
        "harmony": ["piano", "guitar"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "guiro", "cumbia-drum"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tropical horn response over dance percussion voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tropical horn response over dance percussion accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tropical horn response over dance percussion guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tropical horn response over dance percussion low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "tropical horn response over dance percussion cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent", "hits": ["dum", "ghost", "open", "dum", "slap", "open"], "accents": [0.9, 0.3, 0.7, 0.85, 0.65, 0.8], "description": "Play the low dance anchors and a compact open-slap answer; the groove stays clear beneath the brass response. Original ensemble lesson; not a recording transcription."},
        {"name": "tropical horn response over dance percussion guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "ghost", "open", "open", "ghost", "open", "ghost"], "accents": [0.85, 0.35, 0.4, 0.65, 0.85, 0.35, 0.7, 0.35], "durations": [0.32, 0.12, 0.12, 0.2, 0.32, 0.12, 0.25, 0.12], "description": "Keep a long scrape followed by short returns; make the second half answer the first without raising every stroke. Original ensemble lesson; not a recording transcription."},
        {"name": "Tropical horn answer after the vocal call", "role": "lead", "instruments": ["horn-section"], "onsets": [2, 2.75, 3.5], "durations": [0.4, 0.4, 0.35], "articulation": "staccato"},
        {"name": "Tropical piano syncopated chord support", "role": "harmony", "instruments": ["piano"], "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "durations": [0.35, 0.35, 0.35, 0.35, 0.2, 0.35], "articulation": "staccato"},
        {"name": "Tropical conga open tones and slap", "role": "percussion", "instruments": ["congas"], "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "hits": ["mute", "mute", "slap", "mute", "mute", "mute", "open", "open"], "articulation": "accent"},
        {"name": "Tropical timbales cascara support", "role": "percussion", "instruments": ["timbales"], "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "hits": ["rim", "rim", "rim", "rim", "rim", "rim", "rim", "rim"], "accents": [0.8, 0.4, 0.6, 0.4, 0.8, 0.4, 0.6, 0.4], "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "latin-pop",
      "name": "Latin Pop",
      "description": "Latin Pop: Latin pop vocal hook and acoustic syncopation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin pop vocal hook and acoustic syncopation"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Latin pop vocal hook and acoustic syncopation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin pop vocal hook and acoustic syncopation accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin pop vocal hook and acoustic syncopation guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.25, 3.5, 4.5, 5.25, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.2, 0.3, 0.25, 0.3, 0.35, 0.2, 0.35, 0.25, 0.3], "articulation": "strum", "accents": [0.85, 0.45, 0.7, 0.5, 0.8, 0.6, 0.45, 0.8, 0.5, 0.9], "pitches": [{"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}, {"voicing": "chord", "register": 60}], "description": "Keep the guitar strum syncopated beneath the vocal hook and answer the first bar with a lifted second-bar chord. Original ensemble study, not a recording transcription."},
        {"name": "Latin pop vocal hook and acoustic syncopation low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.75, 3.5, 4.5, 5.25, 6.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.55, 0.35, 0.65, 0.45, 0.3, 0.75, 0.45, 0.65, 0.3], "accents": [0.95, 0.5, 0.8, 0.6, 0.75, 0.9, 0.55, 0.8, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Play a syncopated pop bass phrase under the vocal hook, keeping the longer roots separate from the guitar upstrokes. Original ensemble study, not a recording transcription."},
        {"name": "Latin pop vocal hook and acoustic syncopation cumbia-drum pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin pop vocal hook and acoustic syncopation guiro pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "latin-funk",
      "name": "Latin Funk",
      "description": "Latin Funk: Latin funk guitar scratch and percussion break. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin funk guitar scratch and percussion break"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Latin funk guitar scratch and percussion break voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin funk guitar scratch and percussion break accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin funk guitar scratch and percussion break guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.25, 2, 2.75, 3.5, 4.25, 5, 5.75, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.15, 0.15, 0.2, 0.18, 0.15, 0.2, 0.18, 0.25, 0.15, 0.25, 0.3], "articulation": "muted-strum", "accents": [0.9, 0.45, 0.65, 0.75, 0.5, 0.8, 0.55, 0.85, 0.4, 0.7, 0.9], "pitches": [{"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}, {"voicing": "chord", "register": 63}], "description": "Interlock dry chord scratches with the bass riff and conga strokes; keep the second-bar answer light. Original ensemble study, not a recording transcription."},
        {"name": "Latin funk guitar scratch and percussion break low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Latin funk guitar scratch and percussion break cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin funk guitar scratch and percussion break guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "cumbia-villera",
      "name": "Cumbia Villera",
      "description": "Cumbia Villera: cumbia villera keyboard riff and clipped bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["cumbia villera keyboard riff and clipped bass"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cumbia villera keyboard riff and clipped bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia villera keyboard riff and clipped bass synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia villera keyboard riff and clipped bass synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cumbia villera keyboard riff and clipped bass low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "cumbia villera keyboard riff and clipped bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Villera dance kit", "description": "Practice this two-bar villera dance kit. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "cumbia villera keyboard riff and clipped bass drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Villera dance close", "description": "Close with the last two beats of the villera dance kit; keep the spaces clear and land the next phrase together."},
        {"name": "cumbia villera keyboard riff and clipped bass guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent", "hits": ["open", "ghost", "ghost", "open", "open", "ghost", "open", "ghost"], "accents": [0.85, 0.4, 0.35, 0.65, 0.9, 0.35, 0.7, 0.35], "durations": [0.28, 0.1, 0.1, 0.2, 0.28, 0.1, 0.2, 0.1], "description": "Keep a dry long-short scrape cycle above the bass riff, with the quick return strokes deliberately lighter. Original ensemble lesson; not a recording transcription."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "electrocumbia",
      "name": "Electrocumbia",
      "description": "Electrocumbia: electrocumbia synth hook and electronic cumbia beat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electrocumbia synth hook and electronic cumbia beat"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electrocumbia synth hook and electronic cumbia beat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "electrocumbia synth hook and electronic cumbia beat kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5, 4, 4.5, 5, 5, 5.5, 6, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat", "kick", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28, 0.92, 0.28, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Electrocumbia machine pulse", "description": "Practice this two-bar electrocumbia machine pulse. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "electrocumbia synth hook and electronic cumbia beat drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "hat", "kick", "snare", "hat"], "accents": [0.92, 0.5, 0.92, 0.85, 0.5], "shortName": "Electrocumbia machine close", "description": "Close with the last two beats of the electrocumbia machine pulse; keep the spaces clear and land the next phrase together."},
        {"name": "electrocumbia synth hook and electronic cumbia beat guiro pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "latin-fusion",
      "name": "Latin Fusion",
      "description": "Latin Fusion: Latin fusion extended comping and percussion exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin fusion extended comping and percussion exchange"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Latin fusion extended comping and percussion exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin fusion extended comping and percussion exchange accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin fusion extended comping and percussion exchange guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2.5, 3.25, 4.5, 5.75, 6.25, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.65, 0.3, 0.5, 0.7, 0.3, 0.65, 0.35], "articulation": "pick", "accents": [0.55, 0.8, 0.5, 0.75, 0.85, 0.5, 0.7, 0.9], "pitches": [{"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 9, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 65, "voicing": "single", "reference": "chord"}], "description": "Use a picked chord-tone answer instead of constant chord attacks; let the piano and percussion keep their own syncopations. Original ensemble study, not a recording transcription."},
        {"name": "Latin fusion extended comping and percussion exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Latin fusion extended comping and percussion exchange cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin fusion extended comping and percussion exchange guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
