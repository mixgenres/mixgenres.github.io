import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "mexican",
  "name": "Mexican",
  "family": "Mexico",
  "color": "#0195df",
  "description": "Mexican is an independent musical world. Mexico idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Mariachi",
  "meter": "3/4",
  "tempo": [104, 120],
  "instruments": ["voice", "trumpet", "violin", "guitar", "vihuela", "guitarron", "accordion", "bajo-sexto", "bass", "drums", "clarinet", "trombone", "tuba", "harp", "jarana", "foot-stomp", "bombo"],
  "roles": {
    "lead": ["voice", "trumpet", "violin"],
    "harmony": ["guitar", "vihuela"],
    "bass": ["guitarron"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["G", "C", "D7", "Em", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["G"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["mariachi son jalisciense violin and trumpet calls", "ranchera three-beat vocal sway", "norteño accordion polka and bajo sexto chop", "banda brass blocks over tuba pulse", "son jarocho sesquialtera and jarana strum", "son huasteco huapango falsetto and violin", "norteño corrido narrative verse", "Tierra Caliente fiddle dance and bombo", "border conjunto accordion and bajo sexto", "bolero ranchero lyrical guitar and mariachi reply"],
  "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "mariachi",
      "name": "Mariachi",
      "description": "A son jalisciense teaching arrangement: violins carry the melody, trumpets answer in short ensemble phrases, and guitar with vihuela supplies the clipped strummed pulse. The guitarrón anchors each chord change; let the repeated strains grow into a coordinated cierre.",
      "patterns": ["son jalisciense triple feel with violin melody and trumpet reply", "vihuela and guitar rasgueado pulse", "guitarrón bass root and fifth", "short ensemble cadences between repeated strains"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "3/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "mariachi violin trumpet answer and vihuela strum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum trumpet statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum trumpet cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum guitar accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "mariachi violin trumpet answer and vihuela strum guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum vihuela accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "mariachi violin trumpet answer and vihuela strum vihuela cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum low anchor", "role": "bass", "onsets": [0], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "mariachi violin trumpet answer and vihuela strum guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor"}}
      }
    },
    {
      "id": "ranchera",
      "name": "Ranchera",
      "description": "A voice-led ranchera in a three-beat sway: keep the lyric in front, let guitarrón mark the bass motion, and use guitar or vihuela strokes to make the pulse audible. Trumpet and violin answer in the gaps, then widen the estribillo before the final close.",
      "patterns": ["ranchera waltz bass and strum", "vocal copla with trumpet or violin reply", "guitarrón root-to-fifth motion", "estribillo lift and cadential ensemble hit"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "3/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ranchera vocal phrase and guitarron waltz voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz trumpet statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz trumpet cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz guitar accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ranchera vocal phrase and guitarron waltz guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz vihuela accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ranchera vocal phrase and guitarron waltz vihuela cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz low anchor", "role": "bass", "onsets": [0], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "ranchera vocal phrase and guitarron waltz guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor"}}
      }
    },
    {
      "id": "norteno",
      "name": "Norteño",
      "description": "Norteño moves with a brisk two-beat polka: accordion carries the tune and its compact turnarounds, while bajo sexto strikes the rhythmic chords. Keep bass and drum attacks tight beneath the narrative vocal; lift the interlude with accordion instead of adding a heavy rock backbeat.",
      "patterns": ["two-beat norteño polka", "accordion melody and turnaround", "bajo-sexto rhythmic chord strokes", "bass and drum two-step lock"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "norteño accordion and bajo sexto polka voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "norteño accordion and bajo sexto polka voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka accordion statement", "role": "lead", "onsets": [0], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "norteño accordion and bajo sexto polka accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "norteño accordion and bajo sexto polka bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "norteño accordion and bajo sexto polka bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "norteño accordion and bajo sexto polka drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
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
      "id": "banda",
      "name": "Banda",
      "description": "Banda Sinaloense is a brassy dance ensemble: tuba gives the low pulse, trumpets and clarinets trade bold melodic blocks, and trombone fills the harmony. Keep the drum part crisp, use short breaks to reset the groove, and let the returning chorus hit with more weight.",
      "patterns": ["banda brass block melody", "trumpet and clarinet response", "tuba two-beat bass pulse", "drum punctuation and chorus break"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "clarinet"],
        "harmony": ["trombone"],
        "bass": ["tuba"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "banda brass response and tuba bass dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance trumpet statement", "role": "lead", "onsets": [0], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance trumpet cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance clarinet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["clarinet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance clarinet cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["clarinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance trombone accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "banda brass response and tuba bass dance trombone cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance low anchor", "role": "bass", "onsets": [0], "instruments": ["tuba"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "banda brass response and tuba bass dance tuba cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["tuba"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "banda brass response and tuba bass dance drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "clarinet": ["vibrato", "trill", "accent", "staccato", "legato", "tenuto"],
        "trombone": ["accent", "staccato", "legato"],
        "tuba": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "clarinet:lead": {
          "allowedTechniques": ["vibrato", "trill", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "trombone:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "tuba:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
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
      "id": "son-jarocho",
      "name": "Son Jarocho",
      "description": "Son Jarocho turns through sesquialtera: the caller shapes improvised coplas, jarana provides the rhythmic and harmonic body, and harp or requinto answers between lines. Bring the foot-stomp layer forward in instrumental passages, then thin it under the sung verse so the words remain clear.",
      "patterns": ["sesquialtera 6/8 son jarocho cycle", "jarana down-up strum", "caller with harp or requinto answer", "zapateado interlude and ensemble stop"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "ghost"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["voice", "harp", "requinto"],
        "harmony": ["jarana"],
        "bass": ["guitarron"],
        "percussion": ["foot-stomp"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son jarocho sesquialtera jarana and harp exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange harp statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["harp"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange harp cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["harp"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange jarana accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["jarana"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange jarana cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["jarana"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "son jarocho sesquialtera jarana and harp exchange guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange foot-stomp pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["foot-stomp"], "cycleLength": 1, "articulation": "accent"},
        {"name": "son jarocho sesquialtera jarana and harp exchange foot-stomp cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["foot-stomp"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Son jarocho requinto answer in the sesquialtera cycle", "role": "lead", "instruments": ["requinto"], "onsets": [1.5, 2, 2.5], "durations": [0.4, 0.4, 0.4], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "harp": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "jarana": ["accent", "staccato", "legato", "tenuto"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"],
        "foot-stomp": ["accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "harp:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "jarana:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "foot-stomp:percussion": {
          "allowedTechniques": ["accent", "ghost"],
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
      "id": "son-huasteco",
      "name": "Son Huasteco",
      "description": "Son Huasteco follows a huapango pulse: falsetto voice calls against a high violin melody, while the lower guitar and jarana keep the strummed foundation moving. Let the violin flourish between vocal lines and return to a shared cadence at the end of each verse.",
      "patterns": ["huapango 6/8 hemiola", "falsetto call and violin answer", "rapid jarana and low-guitar strum", "violin flourish into shared cadence"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "drone-double-stop", "folk-vibrato", "muted-strum", "tenuto"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar", "jarana"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son huasteco violin flourishes and vocal falsetto voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son huasteco violin flourishes and vocal falsetto voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "son huasteco violin flourishes and vocal falsetto violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son huasteco violin flourishes and vocal falsetto guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto jarana accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["jarana"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son huasteco violin flourishes and vocal falsetto jarana cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["jarana"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "jarana": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "jarana:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"harmony":-0.12},"roleWidth":{"lead":0.16,"harmony":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony"}}
      }
    },
    {
      "id": "corrido",
      "name": "Corrido",
      "description": "This norteño corrido teaching arrangement keeps the story in the verse: accordion and bajo sexto frame the vocal lines with brief answers, and the rhythm section stays steady enough for the words to read clearly. Use the interlude for an accordion turnaround, then return directly to the next narrative stanza.",
      "patterns": ["norteño corrido narrative verse", "accordion line-end answer", "bajo-sexto polka accompaniment", "stanza cadence and turnaround"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "corrido narrative verse and accordion turnaround voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "corrido narrative verse and accordion turnaround voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround accordion statement", "role": "lead", "onsets": [0], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "corrido narrative verse and accordion turnaround accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "corrido narrative verse and accordion turnaround bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "corrido narrative verse and accordion turnaround bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor"}}
      }
    },
    {
      "id": "tierra-caliente",
      "name": "Tierra Caliente",
      "description": "Tierra Caliente centers a buoyant regional dance pulse with a bright fiddle hook, guitar support, and a grounded low part. Keep the melody clear over the bombo accents; the solo section can vary the fiddle phrase before the returning chorus reaches its peak.",
      "patterns": ["Tierra Caliente 6/8 dance pulse", "fiddle hook and instrumental solo", "guitar chord support", "guitarrón and bombo dance foundation"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "drone-double-stop", "folk-vibrato", "muted-strum", "tenuto", "ghost", "roll", "open"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [124, 140],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar"],
        "bass": ["guitarron"],
        "percussion": ["bombo"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tierra caliente fiddle and guitar dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tierra caliente fiddle and guitar dance voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "tierra caliente fiddle and guitar dance violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tierra caliente fiddle and guitar dance guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "tierra caliente fiddle and guitar dance guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance bombo pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["bombo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tierra caliente fiddle and guitar dance bombo cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["bombo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"],
        "bombo": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bombo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "conjunto",
      "name": "Conjunto",
      "description": "Border conjunto runs on the button accordion and bajo sexto: the accordion leads the polka tune, while the bajo sexto supplies sharply articulated rhythm chords. Bass and drum set keep the two-step grounded; trade concise solo phrases and return together to the A section.",
      "patterns": ["border conjunto two-beat polka", "button accordion melody and solo", "bajo-sexto rhythm chord strokes", "bass and drum two-step foundation"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "conjunto accordion polka and bajo sexto accordion statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "conjunto accordion polka and bajo sexto accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "conjunto accordion polka and bajo sexto bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "conjunto accordion polka and bajo sexto bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "conjunto accordion polka and bajo sexto drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
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
      "id": "bolero-ranchero",
      "name": "Bolero Ranchero",
      "description": "Bolero Ranchero keeps the vocal close over a slow, gently swaying accompaniment. Guitar arpeggios carry the harmony, guitarrón gives the bass a soft anchor, and trumpet or violin replies add a measured mariachi color. Save the fullest ensemble statement for the bridge and final verse.",
      "patterns": ["slow bolero ranchero pulse", "intimate vocal verse", "guitar arpeggio and soft guitarrón anchor", "measured trumpet or violin reply"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bolero ranchero intimate guitar and trumpet answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer vihuela accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer vihuela cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitarron cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor"}}
      }
    }
  ]
};
