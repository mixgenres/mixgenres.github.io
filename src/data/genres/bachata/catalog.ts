import type { GenrePackInput } from '../_shared/genrePack';
import { authorBachataStudies } from './studies';

export const GENRE_PACK: GenrePackInput = authorBachataStudies({
  "id": "bachata",
  "name": "Bachata",
  "family": "Bachata",
  "color": "#eec4ab",
  "description": "Bachata is an independent musical world. Bachata idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Dominican",
  "meter": "4/4",
  "tempo": [124, 140],
  "instruments": ["voice", "requinto", "guitar", "bass", "bongos", "guira", "synth", "drums"],
  "roles": {
    "lead": ["voice", "requinto"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["bongos", "guira"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "C", "G", "Dm", "E7", "Fm", "Db", "Ab", "Eb", "Dbmaj7", "Cm"],
  "harmonicRhythm": "bar",
  "cadences": ["E7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["derecho guitar and bongo martillo", "Dominican: requinto fills", "Dominican: segunda syncopation", "Dominican: bongó martillo", "amargue requinto lament and bass pickup", "Amargue: requinto fills", "Amargue: segunda syncopation", "Amargue: bongó martillo", "bolero-derived arpeggio and long vocal line", "Traditional / Bolero Bachata: requinto fills", "Traditional / Bolero Bachata: segunda syncopation", "Traditional / Bolero Bachata: bongó martillo", "modern muted segunda guitar with requinto hook", "Moderna: requinto fills", "Moderna: segunda syncopation", "Moderna: bongó martillo", "sensual sustained lead and sparse guitar answers", "Sensual: requinto fills", "Sensual: segunda syncopation", "Sensual: bongó martillo", "requinto mambo runs and bongo fills", "Bachata Mambo: requinto fills", "Bachata Mambo: segunda syncopation", "Bachata Mambo: bongó martillo", "urban dembow under requinto syncopation", "Urban: requinto fills", "Urban: segunda syncopation", "Urban: bongó martillo", "fusion extended chords and requinto exchange", "Fusion: requinto fills", "Fusion: segunda syncopation", "Fusion: bongó martillo"],
  "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "dominican",
      "name": "Dominican",
      "description": "Dominican: derecho guitar and bongo martillo. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["derecho guitar and bongo martillo", "Dominican: requinto fills", "Dominican: segunda syncopation", "Dominican: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Dominican: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Dominican: diatonic major/minor", "Dominican: secondary dominants", "Dominican: bolero cadences"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "derecho guitar and bongo martillo voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "derecho guitar and bongo martillo voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "derecho guitar and bongo martillo requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "derecho guitar and bongo martillo requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "derecho guitar and bongo martillo guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "derecho guitar and bongo martillo guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "derecho guitar and bongo martillo low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "derecho guitar and bongo martillo bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "derecho guitar and bongo martillo bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "derecho guitar and bongo martillo bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "derecho guitar and bongo martillo guira pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "derecho guitar and bongo martillo guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "amargue",
      "name": "Amargue",
      "description": "Amargue: amargue requinto lament and bass pickup. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["amargue requinto lament and bass pickup", "Amargue: requinto fills", "Amargue: segunda syncopation", "Amargue: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Amargue: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Amargue: diatonic major/minor", "Amargue: secondary dominants", "Amargue: bolero cadences"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "amargue requinto lament and bass pickup voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "amargue requinto lament and bass pickup voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "amargue requinto lament and bass pickup requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "amargue requinto lament and bass pickup requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "amargue requinto lament and bass pickup guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "amargue requinto lament and bass pickup guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "amargue requinto lament and bass pickup low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "amargue requinto lament and bass pickup bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "amargue requinto lament and bass pickup bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "amargue requinto lament and bass pickup bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "amargue requinto lament and bass pickup guira pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "amargue requinto lament and bass pickup guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "traditional-bolero-bachata",
      "name": "Traditional / Bolero Bachata",
      "description": "Traditional / Bolero Bachata: bolero-derived arpeggio and long vocal line. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["bolero-derived arpeggio and long vocal line", "Traditional / Bolero Bachata: requinto fills", "Traditional / Bolero Bachata: segunda syncopation", "Traditional / Bolero Bachata: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Traditional / Bolero Bachata: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Traditional / Bolero Bachata: diatonic major/minor", "Traditional / Bolero Bachata: secondary dominants", "Traditional / Bolero Bachata: bolero cadences"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
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
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bolero-derived arpeggio and long vocal line voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero-derived arpeggio and long vocal line voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero-derived arpeggio and long vocal line requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero-derived arpeggio and long vocal line requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero-derived arpeggio and long vocal line guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero-derived arpeggio and long vocal line guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero-derived arpeggio and long vocal line low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bolero-derived arpeggio and long vocal line bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero-derived arpeggio and long vocal line bongos pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bolero-derived arpeggio and long vocal line bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "bolero-derived arpeggio and long vocal line guira pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bolero-derived arpeggio and long vocal line guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "moderna",
      "name": "Moderna",
      "description": "Moderna: modern muted segunda guitar with requinto hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern muted segunda guitar with requinto hook", "Moderna: requinto fills", "Moderna: segunda syncopation", "Moderna: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Moderna: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Moderna: diatonic major/minor", "Moderna: secondary dominants", "Moderna: bolero cadences"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira", "drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern muted segunda guitar with requinto hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern muted segunda guitar with requinto hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern muted segunda guitar with requinto hook requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern muted segunda guitar with requinto hook requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern muted segunda guitar with requinto hook guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern muted segunda guitar with requinto hook guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern muted segunda guitar with requinto hook synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern muted segunda guitar with requinto hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern muted segunda guitar with requinto hook low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "modern muted segunda guitar with requinto hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern muted segunda guitar with requinto hook bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern muted segunda guitar with requinto hook bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern muted segunda guitar with requinto hook guira pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern muted segunda guitar with requinto hook guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern muted segunda guitar with requinto hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "modern muted segunda guitar with requinto hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Moderna bass anticipation and turnaround", "role": "bass", "instruments": ["bass"], "onsets": [1.5, 2.5, 3.5], "durations": [0.6, 0.6, 0.5], "articulation": "staccato"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sub-bass"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        },
        "guira:percussion": {
          "allowedTechniques": ["scrape", "short-scrape", "long-scrape", "accent"],
          "defaultTechnique": "scrape"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "sensual",
      "name": "Sensual",
      "description": "Sensual: sensual sustained lead and sparse guitar answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Smooth legato requinto phrasing followed by dramatic bass pause and drop", "sensual sustained lead and sparse guitar answers", "Sensual: requinto fills", "Sensual: segunda syncopation", "Sensual: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Sensual: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "expressive dynamic breaks and pauses", "deep sub-bass frequency support", "fluid requinto passages", "dramatic vocal rubato", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Sensual: diatonic major/minor", "Sensual: secondary dominants", "Sensual: bolero cadences"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Fm", "Db", "Ab", "Eb"],
        "verse": ["Fm", "Db", "Ab", "Eb", "Fm", "Db", "Ab", "Eb"],
        "chorus": ["Dbmaj7", "Eb", "Fm", "Cm", "Dbmaj7", "Eb", "Fm", "Fm"],
        "breakdown": ["Db", "Eb", "Fm", "Fm"],
        "coda": ["Db", "Eb", "Fm", "Fm"]
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
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sensual sustained lead and sparse guitar answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sensual sustained lead and sparse guitar answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sensual sustained lead and sparse guitar answers requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sensual sustained lead and sparse guitar answers requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sensual sustained lead and sparse guitar answers guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "sensual sustained lead and sparse guitar answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sensual sustained lead and sparse guitar answers low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "sensual sustained lead and sparse guitar answers bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sensual sustained lead and sparse guitar answers bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sensual sustained lead and sparse guitar answers bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "sensual sustained lead and sparse guitar answers guira pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sensual sustained lead and sparse guitar answers guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "bachata-mambo",
      "name": "Bachata Mambo",
      "description": "Bachata Mambo: requinto mambo runs and bongo fills. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["requinto mambo runs and bongo fills", "Bachata Mambo: requinto fills", "Bachata Mambo: segunda syncopation", "Bachata Mambo: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Bachata Mambo: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Bachata Mambo: diatonic major/minor", "Bachata Mambo: secondary dominants", "Bachata Mambo: bolero cadences"],
      "meter": "4/4",
      "tempo": [136, 152],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
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
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "requinto mambo runs and bongo fills voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "requinto mambo runs and bongo fills voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "requinto mambo runs and bongo fills requinto statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "requinto mambo runs and bongo fills requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "requinto mambo runs and bongo fills guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "requinto mambo runs and bongo fills guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "requinto mambo runs and bongo fills low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "requinto mambo runs and bongo fills bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "requinto mambo runs and bongo fills bongos pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "requinto mambo runs and bongo fills bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "requinto mambo runs and bongo fills guira pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "requinto mambo runs and bongo fills guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "urban",
      "name": "Urban",
      "description": "Urban: urban dembow under requinto syncopation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["urban dembow under requinto syncopation", "Urban: requinto fills", "Urban: segunda syncopation", "Urban: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Urban: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Urban: diatonic major/minor", "Urban: secondary dominants", "Urban: bolero cadences"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar", "synth"],
        "bass": ["synth"],
        "percussion": ["bongos", "guira", "drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
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
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "urban dembow under requinto syncopation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban dembow under requinto syncopation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban dembow under requinto syncopation requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban dembow under requinto syncopation requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban dembow under requinto syncopation guitar accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "urban dembow under requinto syncopation guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban dembow under requinto syncopation synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "urban dembow under requinto syncopation synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban dembow under requinto syncopation low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "urban dembow under requinto syncopation synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban dembow under requinto syncopation bongos pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban dembow under requinto syncopation bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "urban dembow under requinto syncopation guira pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban dembow under requinto syncopation guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "urban dembow under requinto syncopation kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "urban dembow under requinto syncopation drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sub-bass"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        },
        "guira:percussion": {
          "allowedTechniques": ["scrape", "short-scrape", "long-scrape", "accent"],
          "defaultTechnique": "scrape"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "fusion",
      "name": "Fusion",
      "description": "Fusion: fusion extended chords and requinto exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fusion extended chords and requinto exchange", "Fusion: requinto fills", "Fusion: segunda syncopation", "Fusion: bongó martillo"],
      "techniques": ["arpeggio", "muted-strum", "slide", "hammer-on", "pull-off", "roll", "scrape", "Fusion: guitar slides, hammer-ons, pull-offs, tremolo, arpeggio", "accent", "staccato", "legato", "vibrato", "tremolo", "strum", "open", "slap", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "F", "C", "G", "Dm", "E7", "Fusion: diatonic major/minor", "Fusion: secondary dominants", "Fusion: bolero cadences"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "requinto"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bongos", "guira"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "G", "C", "E7"],
        "coda": ["E7", "Am"]
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
        {"label": "requinto", "bars": 8, "soloInstrumentId": "requinto", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion extended chords and requinto exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion extended chords and requinto exchange voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion extended chords and requinto exchange requinto statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["requinto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion extended chords and requinto exchange requinto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["requinto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion extended chords and requinto exchange guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion extended chords and requinto exchange guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion extended chords and requinto exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "fusion extended chords and requinto exchange bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion extended chords and requinto exchange bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion extended chords and requinto exchange bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "fusion extended chords and requinto exchange guira pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion extended chords and requinto exchange guira cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "requinto": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "requinto:lead": {
          "allowedTechniques": ["tremolo", "slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "hammer-on", "pull-off", "slide", "strum", "arpeggio", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
    }
  ]
});
