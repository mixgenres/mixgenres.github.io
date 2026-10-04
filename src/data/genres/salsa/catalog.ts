import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "salsa",
  "name": "Salsa",
  "family": "Afro-Cuban / Caribbean",
  "color": "#0143c1",
  "description": "Salsa is an independent musical world. Afro-Cuban / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Salsa Dura",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["voice", "trumpet", "trombone", "piano", "tres", "bass", "congas", "bongos", "timbales", "claves", "cowbell", "maracas", "flute", "guiro", "violin", "tambora", "guira", "accordion", "cumbia-drum"],
  "roles": {
    "lead": ["voice", "trumpet", "trombone"],
    "harmony": ["piano", "tres"],
    "bass": ["bass"],
    "percussion": ["congas", "bongos", "timbales", "claves", "cowbell"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["Dm", "A7", "Gm", "C", "F", "Bb", "Dm7", "G7", "C6", "D7", "Cm", "Am", "G", "E7", "Dm9", "G13", "Cmaj9", "A7alt", "Cmaj7", "A7b9"],
  "harmonicRhythm": "bar",
  "cadences": ["C6"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["salsa dura brass punches over son clave", "hard 2-3/3-2 clave", "aggressive montuno", "trombone mambo", "son tres guajeo and bass anticipation", "tres guajeo", "simpler clave", "sparse bongó/maracas", "extended montuno", "bass anticipation", "repeated coro", "son montuno coro and piano guajeo", "mambo brass riffs and bell drive", "big-band horn syncopation", "timbal-forward sections", "cha cha cha even eighths and guiro scrape", "steady cha-cha pulse", "lighter tumbao", "charanga flute violin and piano interlock", "flute melody + violin counterlines", "pachanga flute hop and lively bass", "buoyant charanga-like groove", "boogaloo backbeat and piano vocal response", "R&B backbeat + Latin percussion", "descarga improvised chorus and percussion exchange", "open vamp", "rotating soloist", "guaguanco salsa rumba accents over montuno", "rumba clave", "guaguancó percussion", "coro", "salsa romantica sustained lead and restrained horns", "softened percussion", "more regular pop sections", "Puerto Rican salsa brass response and piano montuno", "polished piano/bass/clave", "clean horn blocks", "Caleña salsa fast percussion and brass breaks", "faster pulse", "active bass/piano", "salsa jazz extensions and improvised horn chorus", "extended montuno + jazz solo sections", "merengue crossover tambora drive and horn break", "tambora/güira", "fast straight bass", "cumbia crossover guiro pulse and accordion reply", "binary cumbia bass/percussion", "less dense clave interaction"],
  "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "salsa-dura",
      "name": "Salsa Dura",
      "description": "Salsa Dura: salsa dura brass punches over son clave. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Aggressive dual trombone fanfare over thunderous campana bell and piano guajeo", "salsa dura brass punches over son clave", "hard 2-3/3-2 clave", "aggressive montuno", "trombone mambo", "mambo horn blocks", "coro/pregón over the montuno", "campana bell enters for montuno and mambo sections"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "brass stabs/falls", "strong cowbell", "dense percussion fills", "aggressive dual-trombone arrangements", "driving 3-2 / 2-3 son clave and bongo campana bell", "percussive piano guajeos", "gritty barrio storytelling", "fall", "accent", "legato", "vibrato", "tenuto", "campana", "guajeo", "open", "slap-tapao", "quinto-slap", "ghost", "cowbell open and damped strokes", "brass shakes, falls and doits", "vocal soneo and coro response"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "dominant sevenths/ninths", "chromatic turnarounds", "modal vamp sections"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm", "A7", "Dm", "A7"],
        "canto": ["Dm", "Gm", "C", "F", "Bb", "Gm", "A7", "Dm"],
        "montuno": ["Gm", "A7", "Dm", "Dm"],
        "coda": ["Gm", "A7", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "salsa dura brass punches over son clave voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa dura brass punches over son clave voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa dura brass punches over son clave trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa dura brass punches over son clave trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa dura brass punches over son clave piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa dura brass punches over son clave tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "salsa dura brass punches over son clave bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa dura brass punches over son clave congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa dura brass punches over son clave congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa dura brass punches over son clave bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa dura brass punches over son clave bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa dura brass punches over son clave timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa dura brass punches over son clave timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa dura brass punches over son clave claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Salsa dura campana pulse over the two-bar clave", "role": "percussion", "instruments": ["cowbell"], "cycleLength": 2, "onsets": [0, 1, 2, 3, 4, 5, 6, 7], "hits": ["bell", "bell", "bell", "bell", "bell", "bell", "bell", "bell"], "accents": [0.8, 0.5, 0.8, 0.5, 0.8, 0.5, 0.8, 0.5], "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "fall", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "fall", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "fall", "accent", "legato"],
        "piano": ["staccato", "campana", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "guajeo", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "accent"],
        "cowbell": ["open", "damped", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "fall", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "fall", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "fall", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "campana", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "guajeo", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "son",
      "name": "Son",
      "description": "Son: son tres guajeo and bass anticipation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["son tres guajeo and bass anticipation", "tres guajeo", "simpler clave", "sparse bongó/maracas", "extended montuno", "bass anticipation", "repeated coro"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "tres arpeggio", "vocal call-response", "sharper tres/piano guajeo", "trumpet punctuations", "accent", "legato", "vibrato", "tenuto", "guajeo", "open", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simpler I-IV-V", "dominant sevenths", "modal tonic/dominant cycles", "vamp-centered", "dominant tension", "repeated tonic-dominant motion"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["tres"],
        "bass": ["bass"],
        "percussion": ["bongos", "claves", "maracas"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son tres guajeo and bass anticipation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son tres guajeo and bass anticipation voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son tres guajeo and bass anticipation trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son tres guajeo and bass anticipation trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son tres guajeo and bass anticipation tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son tres guajeo and bass anticipation tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son tres guajeo and bass anticipation low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "son tres guajeo and bass anticipation bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son tres guajeo and bass anticipation bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son tres guajeo and bass anticipation bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "son tres guajeo and bass anticipation claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son tres guajeo and bass anticipation maracas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["maracas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son tres guajeo and bass anticipation maracas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["maracas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "tres": ["staccato", "guajeo", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "claves": ["staccato", "open", "accent"],
        "maracas": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "guajeo", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        },
        "maracas:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "son-montuno",
      "name": "Son Montuno",
      "description": "Son Montuno: son montuno coro and piano guajeo. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Tres cubano guajeo pattern locking with bongo martillo and 2-3 son clave", "son montuno coro and piano guajeo", "tres guajeo", "simpler clave", "sparse bongó/maracas", "extended montuno", "bass anticipation", "repeated coro"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "tres arpeggio", "vocal call-response", "sharper tres/piano guajeo", "trumpet punctuations", "tres cubano syncopated arpeggiated guajeos", "bongo martillo rhythm and bongo bell", "contratiempo acoustic bass pulse", "call-and-response montuno", "accent", "legato", "vibrato", "tenuto", "guajeo", "martillo", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simpler I-IV-V", "dominant sevenths", "modal tonic/dominant cycles", "vamp-centered", "dominant tension", "repeated tonic-dominant motion"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["C", "G7", "C", "G7"],
        "canto": ["C", "G7", "C", "G7", "F", "C", "G7", "C"],
        "montuno": ["F", "G7", "C", "C"],
        "coda": ["F", "G7", "C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son montuno coro and piano guajeo voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son montuno coro and piano guajeo voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son montuno coro and piano guajeo trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son montuno coro and piano guajeo trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son montuno coro and piano guajeo piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son montuno coro and piano guajeo tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "son montuno coro and piano guajeo bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son montuno coro and piano guajeo congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son montuno coro and piano guajeo congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "son montuno coro and piano guajeo bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son montuno coro and piano guajeo bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "son montuno coro and piano guajeo timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "son montuno coro and piano guajeo timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "son montuno coro and piano guajeo claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "guajeo", "martillo", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "guajeo", "martillo", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "mambo",
      "name": "Mambo",
      "description": "Mambo: mambo brass riffs and bell drive. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Tito Puente timbale abanico roll into explosive big band mambo brass counter-riff", "mambo brass riffs and bell drive", "big-band horn syncopation", "timbal-forward sections"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "trumpet/trombone shakes", "falls", "unison hits", "flamboyant brass section riffs", "Tito Puente virtuosic timbales", "driving tumbao conga and bass lock", "On2 New York dancer timing", "fall", "accent", "legato", "vibrato", "shake", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "jazzier dominants", "chromatic horn voice leading"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Gm", "D7", "Gm", "D7"],
        "mambo": ["Gm", "Cm", "D7", "Gm", "Gm", "Cm", "D7", "Gm"],
        "coda": ["D7", "D7", "Gm", "Gm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "mambo brass riffs and bell drive voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mambo brass riffs and bell drive voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mambo brass riffs and bell drive trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mambo brass riffs and bell drive trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "mambo brass riffs and bell drive piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "mambo brass riffs and bell drive tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "mambo brass riffs and bell drive bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mambo brass riffs and bell drive congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "mambo brass riffs and bell drive congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "mambo brass riffs and bell drive bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "mambo brass riffs and bell drive bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "mambo brass riffs and bell drive timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "mambo brass riffs and bell drive timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "mambo brass riffs and bell drive claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "fall", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "fall", "shake", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "fall", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "fall", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "fall", "shake", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "fall", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "cha-cha-cha",
      "name": "Cha-Cha-Chá",
      "description": "Cha-Cha-Chá: cha cha cha even eighths and guiro scrape. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Wooden flute trill floating over crisp güiro triple scrape \"cha-cha-chá\"", "cha cha cha even eighths and guiro scrape", "steady cha-cha pulse", "lighter tumbao"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "güiro consistency", "flute/violin articulation", "charanga instrumentation (flute and violins)", "güiro triple stroke rhythm on beats 4-and-1", "crisp piano montunos in major keys", "clear ballroom syncopation", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simpler major/minor functional progressions"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "guiro", "timbales"]
      },
      "progressions": {
        "intro": ["C", "G7", "C", "G7"],
        "verse": ["C", "G7", "C", "G7", "F", "C", "G7", "C"],
        "chorus": ["F", "G7", "C", "Am", "Dm", "G7", "C", "C"],
        "coda": ["F", "G7", "C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "flute", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cha cha cha even eighths and guiro scrape voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cha cha cha even eighths and guiro scrape voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cha cha cha even eighths and guiro scrape flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cha cha cha even eighths and guiro scrape flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cha cha cha even eighths and guiro scrape piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cha cha cha even eighths and guiro scrape piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cha cha cha even eighths and guiro scrape low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "cha cha cha even eighths and guiro scrape bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cha cha cha even eighths and guiro scrape congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cha cha cha even eighths and guiro scrape congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "cha cha cha even eighths and guiro scrape guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cha cha cha even eighths and guiro scrape guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "cha cha cha even eighths and guiro scrape timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cha cha cha even eighths and guiro scrape timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "flute": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "guiro": ["staccato", "roll", "open", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "guiro:percussion": {
          "allowedTechniques": ["staccato", "roll", "open", "accent", "ghost"],
          "defaultTechnique": "staccato"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "charanga",
      "name": "Charanga",
      "description": "Charanga: charanga flute violin and piano interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["charanga flute violin and piano interlock", "flute melody + violin counterlines"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "flute ornament", "light string staccato", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "diatonic with sevenths", "elegant voice leading"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "major",
      "roles": {
        "lead": ["voice", "flute", "violin"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "guiro"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "flute", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "charanga flute violin and piano interlock voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "charanga flute violin and piano interlock voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "charanga flute violin and piano interlock flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "charanga flute violin and piano interlock flute cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["flute"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "charanga flute violin and piano interlock violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "charanga flute violin and piano interlock violin cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["violin"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "charanga flute violin and piano interlock piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "charanga flute violin and piano interlock piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "charanga flute violin and piano interlock low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "charanga flute violin and piano interlock bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "charanga flute violin and piano interlock congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "charanga flute violin and piano interlock congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "charanga flute violin and piano interlock timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "charanga flute violin and piano interlock timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "charanga flute violin and piano interlock guiro pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["guiro"], "cycleLength": 2, "articulation": "accent"},
        {"name": "charanga flute violin and piano interlock guiro cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["guiro"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "flute": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "violin": ["staccato", "accent", "legato", "vibrato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "guiro": ["staccato", "roll", "open", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "violin:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "guiro:percussion": {
          "allowedTechniques": ["staccato", "roll", "open", "accent", "ghost"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "pachanga",
      "name": "Pachanga",
      "description": "Pachanga: pachanga flute hop and lively bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["pachanga flute hop and lively bass", "buoyant charanga-like groove"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "bright staccato", "short flute/violin riffs", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simple repetitive dance harmony"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "flute", "violin"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "guiro"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "flute", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pachanga flute hop and lively bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pachanga flute hop and lively bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pachanga flute hop and lively bass flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pachanga flute hop and lively bass flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pachanga flute hop and lively bass violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pachanga flute hop and lively bass violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pachanga flute hop and lively bass piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "pachanga flute hop and lively bass piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pachanga flute hop and lively bass low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "pachanga flute hop and lively bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pachanga flute hop and lively bass congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pachanga flute hop and lively bass congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "pachanga flute hop and lively bass timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pachanga flute hop and lively bass timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "pachanga flute hop and lively bass guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pachanga flute hop and lively bass guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "flute": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "violin": ["staccato", "accent", "legato", "vibrato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "guiro": ["staccato", "roll", "open", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "violin:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "guiro:percussion": {
          "allowedTechniques": ["staccato", "roll", "open", "accent", "ghost"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "boogaloo",
      "name": "Boogaloo",
      "description": "Boogaloo: boogaloo backbeat and piano vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["boogaloo backbeat and piano vocal response", "R&B backbeat + Latin percussion"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "handclaps", "shouted hooks", "bluesy horns", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "blues/soul dominant chords", "simple vamp"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "boogaloo backbeat and piano vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "boogaloo backbeat and piano vocal response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "boogaloo backbeat and piano vocal response trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "boogaloo backbeat and piano vocal response trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "boogaloo backbeat and piano vocal response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response tres accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["tres"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "boogaloo backbeat and piano vocal response tres cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["tres"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "boogaloo backbeat and piano vocal response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogaloo backbeat and piano vocal response congas pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "boogaloo backbeat and piano vocal response congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "boogaloo backbeat and piano vocal response bongos pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "boogaloo backbeat and piano vocal response bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "boogaloo backbeat and piano vocal response timbales pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "boogaloo backbeat and piano vocal response timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "boogaloo backbeat and piano vocal response claves pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["claves"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "descarga",
      "name": "Descarga",
      "description": "Descarga: descarga improvised chorus and percussion exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["descarga improvised chorus and percussion exchange", "open vamp", "rotating soloist"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "extended improvisation", "percussion exchanges", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "static dominant/modal vamp", "occasional cycle changes"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "head": ["Dm7", "G7", "C6", "A7"],
        "percussion exchange": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "percussion exchange", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "descarga improvised chorus and percussion exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "descarga improvised chorus and percussion exchange voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "descarga improvised chorus and percussion exchange trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "descarga improvised chorus and percussion exchange trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "descarga improvised chorus and percussion exchange piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "descarga improvised chorus and percussion exchange tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "descarga improvised chorus and percussion exchange bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "descarga improvised chorus and percussion exchange congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "descarga improvised chorus and percussion exchange congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "descarga improvised chorus and percussion exchange bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "descarga improvised chorus and percussion exchange bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "descarga improvised chorus and percussion exchange timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "descarga improvised chorus and percussion exchange timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "descarga improvised chorus and percussion exchange claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "guaguanco-salsa",
      "name": "Guaguancó Salsa",
      "description": "Guaguancó Salsa: guaguanco salsa rumba accents over montuno. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["guaguanco salsa rumba accents over montuno", "rumba clave", "guaguancó percussion", "coro"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "quinto-like improvisation", "vocal pregón", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "modal vamp", "minimal chord movement"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guaguanco salsa rumba accents over montuno voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guaguanco salsa rumba accents over montuno voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guaguanco salsa rumba accents over montuno trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guaguanco salsa rumba accents over montuno trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "guaguanco salsa rumba accents over montuno piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "guaguanco salsa rumba accents over montuno tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "guaguanco salsa rumba accents over montuno bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guaguanco salsa rumba accents over montuno congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "guaguanco salsa rumba accents over montuno congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "guaguanco salsa rumba accents over montuno bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "guaguanco salsa rumba accents over montuno bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "guaguanco salsa rumba accents over montuno timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "guaguanco salsa rumba accents over montuno timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "guaguanco salsa rumba accents over montuno claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "salsa-romantica",
      "name": "Salsa Romántica",
      "description": "Salsa Romántica: salsa romantica sustained lead and restrained horns. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Smooth crooner vocal melody over synthesizer string pad and warm congas", "salsa romantica sustained lead and restrained horns", "softened percussion", "more regular pop sections"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "smoother brass", "legato keys", "sensual romantic crooner vocal deliveries", "lush synthesizer pad layers", "restrained percussion dynamics", "refined melodic horn arrangements", "legato", "accent", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "pop-ballad progressions", "maj7/min7/add9"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "G", "C"],
        "verse": ["Am", "Dm", "G", "C", "F", "Dm", "E7", "Am"],
        "chorus": ["Dm", "G", "C", "Am", "Dm", "E7", "Am", "Am"],
        "coda": ["Dm", "E7", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "salsa romantica sustained lead and restrained horns voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa romantica sustained lead and restrained horns voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa romantica sustained lead and restrained horns trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa romantica sustained lead and restrained horns trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa romantica sustained lead and restrained horns piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa romantica sustained lead and restrained horns tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "salsa romantica sustained lead and restrained horns bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa romantica sustained lead and restrained horns congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa romantica sustained lead and restrained horns congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa romantica sustained lead and restrained horns bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa romantica sustained lead and restrained horns bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa romantica sustained lead and restrained horns timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa romantica sustained lead and restrained horns timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa romantica sustained lead and restrained horns claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "legato", "accent", "vibrato"],
        "trumpet": ["staccato", "legato", "accent", "tenuto", "vibrato"],
        "trombone": ["staccato", "legato", "accent"],
        "piano": ["staccato", "legato", "montuno", "accent", "tenuto"],
        "tres": ["staccato", "legato", "accent"],
        "bass": ["staccato", "legato", "slap", "accent"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "montuno", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "legato", "slap", "accent"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "puerto-rican-salsa",
      "name": "Puerto Rican Salsa",
      "description": "Puerto Rican Salsa: Puerto Rican salsa brass response and piano montuno. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Puerto Rican salsa brass response and piano montuno", "polished piano/bass/clave", "clean horn blocks"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "tight ensemble articulation", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "functional salsa harmony with clean voice leading"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Puerto Rican salsa brass response and piano montuno voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Puerto Rican salsa brass response and piano montuno voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Puerto Rican salsa brass response and piano montuno trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Puerto Rican salsa brass response and piano montuno trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Puerto Rican salsa brass response and piano montuno piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Puerto Rican salsa brass response and piano montuno tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Puerto Rican salsa brass response and piano montuno bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Puerto Rican salsa brass response and piano montuno congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Puerto Rican salsa brass response and piano montuno congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Puerto Rican salsa brass response and piano montuno bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Puerto Rican salsa brass response and piano montuno bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Puerto Rican salsa brass response and piano montuno timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Puerto Rican salsa brass response and piano montuno timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Puerto Rican salsa brass response and piano montuno claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "salsa-calena",
      "name": "Salsa Caleña",
      "description": "Salsa Caleña: Caleña salsa fast percussion and brass breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Caleña salsa fast percussion and brass breaks", "faster pulse", "active bass/piano"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "crisp horn punctuation", "energetic fills", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "frequent dominant movement", "bright major centers"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Caleña salsa fast percussion and brass breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Caleña salsa fast percussion and brass breaks voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Caleña salsa fast percussion and brass breaks trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Caleña salsa fast percussion and brass breaks trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Caleña salsa fast percussion and brass breaks piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Caleña salsa fast percussion and brass breaks tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Caleña salsa fast percussion and brass breaks bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Caleña salsa fast percussion and brass breaks congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Caleña salsa fast percussion and brass breaks congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Caleña salsa fast percussion and brass breaks bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Caleña salsa fast percussion and brass breaks bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Caleña salsa fast percussion and brass breaks timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "Caleña salsa fast percussion and brass breaks timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "Caleña salsa fast percussion and brass breaks claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "salsa-jazz",
      "name": "Salsa Jazz",
      "description": "Salsa Jazz: salsa jazz extensions and improvised horn chorus. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["salsa jazz extensions and improvised horn chorus", "extended montuno + jazz solo sections"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "improvisation", "complex horn voicing", "accent", "legato", "vibrato", "tenuto", "open", "slap-tapao", "quinto-slap", "ghost"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7alt", "Dm7", "G7", "Cmaj7", "A7b9", "altered dominants", "ii-V", "modal interchange", "upper structures"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "tres"],
        "bass": ["bass"],
        "percussion": ["congas", "bongos", "timbales", "claves"]
      },
      "progressions": {
        "tema": ["Dm9", "G13", "Cmaj9", "A7alt"],
        "montuno": ["Dm7", "G7", "Cmaj7", "A7b9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "salsa jazz extensions and improvised horn chorus voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa jazz extensions and improvised horn chorus voice cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["voice"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa jazz extensions and improvised horn chorus trumpet cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trumpet"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 2, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "salsa jazz extensions and improvised horn chorus trombone cadence fill", "role": "lead", "onsets": [7.0, 7.5, 7.75], "instruments": ["trombone"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["piano"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa jazz extensions and improvised horn chorus piano cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["piano"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus tres accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4.5, 5.25, 6, 7.5], "instruments": ["tres"], "cycleLength": 2, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "salsa jazz extensions and improvised horn chorus tres cadence fill", "role": "harmony", "onsets": [7.0, 7.5, 7.75], "instruments": ["tres"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus low anchor", "role": "bass", "onsets": [1.5, 3.5, 5.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "salsa jazz extensions and improvised horn chorus bass cadence fill", "role": "bass", "onsets": [7.0, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "phraseEnd": true, "articulation": "ornament"},
        {"name": "salsa jazz extensions and improvised horn chorus congas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["congas"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa jazz extensions and improvised horn chorus congas cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["congas"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa jazz extensions and improvised horn chorus bongos pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["bongos"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa jazz extensions and improvised horn chorus bongos cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["bongos"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa jazz extensions and improvised horn chorus timbales pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["timbales"], "cycleLength": 2, "articulation": "accent"},
        {"name": "salsa jazz extensions and improvised horn chorus timbales cadence fill", "role": "percussion", "onsets": [7.0, 7.5, 7.75], "instruments": ["timbales"], "cycleLength": 2, "phraseEnd": true, "articulation": "roll"},
        {"name": "salsa jazz extensions and improvised horn chorus claves pulse", "role": "percussion", "onsets": [0, 1.5, 3, 5, 6], "instruments": ["claves"], "cycleLength": 2, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "tres": ["staccato", "accent", "legato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
        "bongos": ["open", "slap", "staccato", "accent", "ghost"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "claves": ["staccato", "open", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tres:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "bongos:percussion": {
          "allowedTechniques": ["open", "slap", "staccato", "accent", "ghost"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "claves:percussion": {
          "allowedTechniques": ["staccato", "open", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "merengue-crossover",
      "name": "Merengue Crossover",
      "description": "Merengue Crossover: merengue crossover tambora drive and horn break. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["merengue crossover tambora drive and horn break", "tambora/güira", "fast straight bass"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "rapid horn stabs", "güira rolls", "accent", "legato", "vibrato", "tenuto", "ghost", "short-scrape", "long-scrape", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simple tonic/dominant cycles"],
      "meter": "2/4",
      "tempo": [132, 148],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["tambora", "guira", "congas"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "merengue crossover tambora drive and horn break voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue crossover tambora drive and horn break voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue crossover tambora drive and horn break trumpet statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue crossover tambora drive and horn break trumpet cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue crossover tambora drive and horn break piano accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "merengue crossover tambora drive and horn break piano cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue crossover tambora drive and horn break low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "merengue crossover tambora drive and horn break bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue crossover tambora drive and horn break tambora pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["tambora"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue crossover tambora drive and horn break tambora cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tambora"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "merengue crossover tambora drive and horn break guira pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue crossover tambora drive and horn break guira cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "merengue crossover tambora drive and horn break congas pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue crossover tambora drive and horn break congas cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "tambora": ["roll", "accent", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "tambora:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        },
        "guira:percussion": {
          "allowedTechniques": ["scrape", "short-scrape", "long-scrape", "accent"],
          "defaultTechnique": "scrape"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "cumbia-crossover",
      "name": "Cumbia Crossover",
      "description": "Cumbia Crossover: cumbia crossover guiro pulse and accordion reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["cumbia crossover guiro pulse and accordion reply", "binary cumbia bass/percussion", "less dense clave interaction"],
      "techniques": ["montuno", "short-chord-stab", "open-tone", "slap", "roll", "scrape", "staccato", "accordion/keyboard/flute riffs", "accent", "legato", "vibrato", "tenuto", "open", "ghost", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "C6", "A7", "F", "simple functional loops"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "major",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro", "congas"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "C6", "A7"],
        "tema": ["Dm7", "G7", "C6", "A7"],
        "mambo": ["F", "G7", "C6", "C6"],
        "cierre": ["C6", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "montuno", "bars": 8},
        {"label": "mambo", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "accordion", "soloMode": "accompanied"},
        {"label": "montuno", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cumbia crossover guiro pulse and accordion reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia crossover guiro pulse and accordion reply voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia crossover guiro pulse and accordion reply accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia crossover guiro pulse and accordion reply accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia crossover guiro pulse and accordion reply piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cumbia crossover guiro pulse and accordion reply piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia crossover guiro pulse and accordion reply low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "cumbia crossover guiro pulse and accordion reply bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia crossover guiro pulse and accordion reply cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia crossover guiro pulse and accordion reply cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "cumbia crossover guiro pulse and accordion reply guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia crossover guiro pulse and accordion reply guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "cumbia crossover guiro pulse and accordion reply congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia crossover guiro pulse and accordion reply congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "accordion": ["staccato", "accent", "legato", "tenuto"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "cumbia-drum": ["staccato", "open", "accent", "ghost"],
        "guiro": ["staccato", "roll", "open", "accent", "ghost"],
        "congas": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "accordion:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["staccato", "open", "accent", "ghost"],
          "defaultTechnique": "staccato"
        },
        "guiro:percussion": {
          "allowedTechniques": ["staccato", "roll", "open", "accent", "ghost"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "slap-tapao", "quinto-slap", "accent", "ghost"],
          "defaultTechnique": "open"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
