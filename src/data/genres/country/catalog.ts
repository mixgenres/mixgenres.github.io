import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "country",
  "name": "Country",
  "family": "United States / Appalachia",
  "color": "#b7792f",
  "description": "Country is an independent musical world. United States / Appalachia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Honky-Tonk",
  "meter": "4/4",
  "tempo": [100, 116],
  "instruments": ["voice", "pedal-steel", "guitar", "bass", "drums", "violin", "banjo", "mandolin", "upright-bass", "piano", "resonator-guitar"],
  "roles": {
    "lead": ["voice", "pedal-steel"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G7", "G", "D", "Em", "E", "A", "B7", "E7", "A7", "D7", "G#dim", "Am7", "C#dim", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["D7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["honky-tonk boom chick and steel answers", "bluegrass banjo roll and mandolin chop", "Bakersfield twang guitar and crisp backbeat", "outlaw Telecaster pulse and spacious steel replies", "Western Swing fiddle line and walking bass", "Americana fingerpicked verse and fiddle response", "country pop chorus lift and acoustic strum"],
  "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "honky-tonk",
      "name": "Honky-Tonk",
      "description": "Honky-Tonk pairs a buoyant two-step with clipped piano and guitar, a vocal or fiddle pickup, and answering fiddle or steel phrases. Short instrumental breaks hand the foreground between fiddle and steel.",
      "patterns": ["Honky-tonk piano offbeat comp with two-step bass and steel answers", "honky-tonk boom chick and steel answers", "honky-tonk fiddle pickups and vocal-gap answers"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "twin fiddle leads", "steely weeping slide licks", "honky-tonk upright piano tinkle", "unflinching heartbreak lyricism", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel", "violin"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C", "F", "G7", "C"],
        "verse": ["C", "C", "F", "C", "C", "C", "G7", "G7", "C", "C", "F", "C", "C", "G7", "C", "C"],
        "coda": ["F", "G7", "C", "C"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 58, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "honky-tonk boom chick and steel answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "honky-tonk boom chick and steel answers pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "honky-tonk fiddle vocal-gap answer", "role": "lead", "onsets": [3, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.3, 0.3], "articulation": "shuffle-bow"},
        {"name": "honky-tonk fiddle phrase pickup", "role": "lead", "onsets": [2.5, 3, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.25, 0.3, 0.3], "articulation": "shuffle-bow"},
        {"name": "honky-tonk boom chick and steel answers guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "honky-tonk boom chick and steel answers low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "honky-tonk boom chick and steel answers kit", "role": "percussion", "onsets": [0, 0, 0.666667, 1, 1, 1.666667, 2, 2, 2.333333, 2.666667, 3, 3, 3.666667, 4, 4, 4.666667, 5, 5, 5.666667, 6, 6, 6.333333, 6.666667, 7, 7, 7.666667], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "ghost", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "ghost", "hat", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.28, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Honky-tonk shuffle", "description": "Practice this two-bar honky-tonk shuffle. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "honky-tonk boom chick and steel answers drums cadence fill", "role": "percussion", "onsets": [2, 2, 2.333333, 2.666667, 3, 3, 3.666667], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "ghost", "hat", "hat", "snare", "hat"], "accents": [0.5, 0.92, 0.32, 0.5, 0.5, 0.85, 0.5], "shortName": "Honky-tonk shuffle close", "description": "Close with the last two beats of the honky-tonk shuffle; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
        "violin": ["shuffle-bow", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "upright-bass": ["fingerstyle", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "steel-acoustic"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["fingerstyle", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "fingerstyle"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "staccato"
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
      "id": "bluegrass",
      "name": "Bluegrass",
      "description": "Bluegrass centers a forward three-finger banjo roll over alternating-bass guitar, short mandolin chops on beats two and four, and upright bass on one and three. Vocal lines hand phrases to fiddle and banjo breaks.",
      "patterns": ["Rapid 3-finger banjo roll erupting into syncopated mandolin chop on the backbeat", "bluegrass banjo roll and mandolin chop"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "three-finger Scruggs banjo rolls", "percussive mandolin backbeat chop", "high lonesome tenor harmonies", "blistering acoustic solo trades", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [140, 156],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin", "banjo"],
        "harmony": ["guitar", "mandolin"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["G", "C", "D", "G"],
        "verse": ["G", "G", "C", "G", "G", "Em", "D", "G"],
        "chorus": ["C", "G", "D", "G", "C", "G", "D", "G"],
        "solo": ["G", "C", "D", "G"],
        "coda": ["C", "D", "G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "banjo break", "bars": 8, "soloInstrumentId": "banjo", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "fiddle break", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "refrain", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bluegrass banjo roll and mandolin chop voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass banjo roll and mandolin chop violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass banjo roll and mandolin chop banjo statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["banjo"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass alternating-bass guitar strum", "shortName": "Alternating-bass guitar", "role": "harmony", "onsets": [0, 1, 2, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.38, 0.24, 0.38, 0.24], "accents": [0.9, 0.56, 0.82, 0.56], "articulation": "flatpick", "description": "Strike bass strings on beats one and three, then answer with short chord strokes on beats two and four."},
        {"name": "bluegrass guitar chord-change run", "shortName": "Guitar chord-change run", "role": "harmony", "onsets": [2.5, 3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.2, 0.2, 0.16, 0.12], "accents": [0.58, 0.72, 0.84, 0.94], "phraseEnd": true, "sectionUsage": ["banjo-break", "fiddle-break"], "articulation": "flatpick", "description": "Use a short picked walk into the next chord at the phrase edge; keep it out of the middle of the break so the featured banjo or fiddle stays clear."},
        {"name": "bluegrass mandolin backbeat chop", "shortName": "Mandolin chop", "role": "harmony", "onsets": [1, 3], "instruments": ["mandolin"], "cycleLength": 1, "durations": [0.16, 0.16], "accents": [0.58, 0.7], "articulation": "staccato", "description": "Mute each compact chord immediately after beats two and four; the short chop supplies the backbeat without masking the roll."},
        {"name": "bluegrass upright two-beat anchor", "shortName": "Upright two-beat", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "accents": [0.9, 0.78], "articulation": "accent", "durations": [0.72, 0.72], "description": "Alternate root and fifth on beats one and three; let each pizzicato note ring through its written length."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "banjo": ["fingerstyle", "roll", "slide", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "mandolin": ["accent", "staccato", "legato"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "banjo:lead": {
          "allowedTechniques": ["fingerstyle", "roll", "slide", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "fingerstyle"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "steel-acoustic"
        },
        "mandolin:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
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
      "id": "bakersfield",
      "name": "Bakersfield",
      "description": "Bakersfield: Bakersfield twang guitar and crisp backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Treble-heavy Telecaster twang lick backed by snappy drum rimshots", "Bakersfield twang guitar and crisp backbeat"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "snappy treble-boosted Fender Telecaster twang", "driving rock-influenced drum backbeat", "pedal steel harmony fills", "punchy straightforward vocal delivery", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E", "A", "B7", "E"],
        "verse": ["E", "E", "A", "E", "E", "E", "B7", "B7", "E", "E", "A", "E", "E", "B7", "E", "E"],
        "chorus": ["A", "A", "E", "E", "B7", "B7", "E", "E"],
        "coda": ["A", "B7", "E", "E"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Bakersfield twang guitar and crisp backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bakersfield twang guitar and crisp backbeat pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bakersfield twang guitar and crisp backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.3, 0.18, 0.25, 0.18, 0.3, 0.18, 0.25, 0.18], "articulation": "pick", "accents": [0.9, 0.5, 0.65, 0.5, 0.85, 0.5, 0.65, 0.55], "pitches": [{"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}, {"degree": 1, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}, {"degree": 5, "register": 50, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 50}], "description": "Alternate low picked root and fifth with clipped upper chords. Keep the bright two-step drive under the Telecaster answer. Original ensemble study, not a recording transcription."},
        {"name": "Bakersfield twang guitar and crisp backbeat low anchor", "role": "bass", "onsets": [0, 2, 4, 6, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.65, 0.55, 0.65, 0.55, 0.25], "accents": [0.95, 0.75, 0.95, 0.75, 0.5], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep a firm two-beat root-and-fifth foundation. The final light pickup leads back to the guitar downbeat. Original ensemble study, not a recording transcription."},
        {"name": "Bakersfield twang guitar and crisp backbeat kit", "role": "percussion", "onsets": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6.5, 7, 7], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "kick", "hat", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.42, 0.85, 0.42, 0.92, 0.42, 0.85, 0.42, 0.92, 0.42, 0.85, 0.42, 0.92, 0.92, 0.42, 0.85], "articulation": "accent", "shortName": "Twang two-step", "description": "Practice this two-bar twang two-step. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Bakersfield twang guitar and crisp backbeat drums cadence fill", "role": "percussion", "onsets": [2, 2, 2.5, 3, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "kick", "hat", "snare"], "accents": [0.5, 0.92, 0.92, 0.5, 0.85], "shortName": "Twang two-step close", "description": "Close with the last two beats of the twang two-step; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "solid-electric",
          "bodyConstruction": "solid-electric",
          "excitationType": "hard-pick",
          "drive": 0.18
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "fingerstyle"
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
      "id": "outlaw",
      "name": "Outlaw",
      "description": "Outlaw: a conversational lead, picked electric-guitar pulse and relaxed kit leave room for long pedal-steel replies.",
      "patterns": ["Picked electric-guitar pulse with spacious pedal-steel replies", "Laid-back country-rock backbeat"],
      "techniques": ["flatpicked electric-guitar pulse", "pedal-steel vibrato", "double-stop", "slide", "hammer-on", "pull-off", "conversational vocal phrasing", "laid-back backbeat", "root-fifth bass", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["A", "D", "E", "A"],
        "verse": ["A", "A", "D", "A", "A", "A", "E", "A"],
        "chorus": ["D", "D", "A", "A", "E", "E", "A", "A"],
        "coda": ["D", "E", "A", "A"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "laid-back", "humanizeJitterMs": 9},
      "cells": [
        {"name": "outlaw Telecaster pulse and steel replies voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "outlaw Telecaster pulse and steel replies pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "outlaw Telecaster pulse and steel replies guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5, 4, 5, 5.5, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.45, 0.25, 0.3, 0.45, 0.3, 0.3, 0.6, 0.35, 0.25, 0.4, 0.5], "articulation": "pick", "accents": [0.9, 0.5, 0.65, 0.85, 0.5, 0.7, 0.95, 0.55, 0.45, 0.8, 0.6], "pitches": [{"degree": 1, "register": 49, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 49}, {"voicing": "chord", "register": 49}, {"degree": 5, "register": 49, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 49}, {"voicing": "chord", "register": 49}, {"degree": 1, "register": 49, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 49}, {"voicing": "chord", "register": 49}, {"degree": 5, "register": 49, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 49}], "description": "Keep a relaxed bass-and-chord strum with a longer downbeat and a changed second-bar answer. Original ensemble study, not a recording transcription."},
        {"name": "outlaw Telecaster pulse and steel replies low anchor", "role": "bass", "onsets": [0, 2, 4, 6, 7], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.95, 0.75, 1.05, 0.55, 0.65], "accents": [0.9, 0.65, 0.95, 0.7, 0.55], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Let the roots settle with a relaxed two-beat weight, then answer through the third before the next verse. Original ensemble study, not a recording transcription."},
        {"name": "outlaw Telecaster pulse and steel replies kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.5, 2, 2.5, 2.5, 3, 3.5, 4, 4, 4.5, 5, 5.5, 6, 6, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "snare", "hat", "hat", "hat", "kick", "snare", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.85, 0.28, 0.42, 0.28, 0.92, 0.85, 0.28, 0.42, 0.92, 0.28, 0.85, 0.28, 0.42, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Laid-back country pocket", "description": "Practice this two-bar laid-back country pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "outlaw Telecaster pulse and steel replies drums cadence fill", "role": "percussion", "onsets": [2, 2, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "snare", "hat"], "accents": [0.5, 0.92, 0.85, 0.5], "shortName": "Laid-back country close", "description": "Close with the last two beats of the laid-back country pocket; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "flatpick", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "solid-electric",
          "bodyConstruction": "solid-electric",
          "excitationType": "hard-pick",
          "drive": 0.16
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "fingerstyle"
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
      "id": "western-swing",
      "name": "Western Swing",
      "description": "Western Swing: Western Swing fiddle line and walking bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Triple fiddle swinging harmonization over walking bass and hot steel guitar riff", "Western Swing fiddle line and walking bass"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "twin and triple fiddle jazz harmonies", "swinging lap steel improvisation", "jazz chord substitutions (diminished/augmented)", "driving 4-beat swing rhythm", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto", "ghost", "open", "roll", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [128, 144],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin", "pedal-steel"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["G", "E7", "A7", "D7"],
        "verse": ["G", "G#dim", "Am7", "D7", "G", "G#dim", "Am7", "D7", "G", "G7", "C", "C#dim", "G", "E7", "A7", "D7"],
        "chorus": ["C", "C#dim", "G", "E7", "A7", "D7", "G", "G"],
        "coda": ["G", "E7", "A7", "D7", "G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Western Swing fiddle line and walking bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass pedal-steel statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Western Swing fiddle line and walking bass piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Western Swing fiddle line and walking bass low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "Western Swing fiddle line and walking bass kit", "role": "percussion", "onsets": [0, 0, 1, 1, 1.666667, 2, 3, 3, 3.666667, 4, 4, 5, 5, 5.666667, 6, 7, 7, 7.666667], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "snare", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "snare", "ride", "ride", "ride", "snare", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.85, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.5, 0.5, 0.85, 0.5], "articulation": "accent", "shortName": "Dance-band ride", "description": "Practice this two-bar dance-band ride. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Western Swing fiddle line and walking bass drums cadence fill", "role": "percussion", "onsets": [2, 3, 3, 3.666667], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "ride", "snare", "ride"], "accents": [0.5, 0.5, 0.85, 0.5], "shortName": "Dance-band ride close", "description": "Close with the last two beats of the dance-band ride; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "archtop-electric",
          "bodyConstruction": "wood-box",
          "excitationType": "plectrum"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
      "id": "americana",
      "name": "Americana",
      "description": "Americana: Americana fingerpicked verse and fiddle response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Warm fingerpicked acoustic guitar paired with plaintive close-harmony vocals", "Americana fingerpicked verse and fiddle response"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "intimate acoustic songwriting", "rich close-harmony vocals", "organic analog production", "literary introspective lyricism", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar", "resonator-guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "chorus": ["F", "C", "G", "Am", "F", "C", "G", "G"],
        "coda": ["F", "G", "C", "C"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "laid-back", "humanizeJitterMs": 9},
      "cells": [
        {"name": "Americana fingerpicked verse and fiddle response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Americana fingerpicked verse and fiddle response violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Americana fingerpicked verse and fiddle response guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Americana fingerpicked verse and fiddle response resonator-guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["resonator-guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Americana fingerpicked verse and fiddle response low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "resonator-guitar": ["slide", "fingerstyle", "double-stop"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "fingerstyle",
          "variantId": "steel-acoustic"
        },
        "resonator-guitar:harmony": {
          "allowedTechniques": ["slide", "fingerstyle", "double-stop"],
          "defaultTechnique": "slide"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
      "id": "country-pop",
      "name": "Country Pop",
      "description": "Country Pop: country pop chorus lift and acoustic strum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["country pop chorus lift and acoustic strum"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll", "pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D7"],
        "verse": ["G", "Em", "C", "D7"],
        "tag": ["D7", "G"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "country pop chorus lift and acoustic strum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "country pop chorus lift and acoustic strum pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "country pop chorus lift and acoustic strum guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2, 2.5, 3.5, 4.25, 5, 5.75, 6.5, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.45, 0.25, 0.3, 0.4, 0.25, 0.3, 0.4, 0.3, 0.25, 0.4, 0.3], "articulation": "strum", "accents": [0.85, 0.45, 0.6, 0.8, 0.45, 0.7, 0.65, 0.8, 0.45, 0.6, 0.9], "pitches": [{"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}, {"voicing": "chord", "register": 58}], "description": "Let the acoustic strum lift into the vocal refrain, keeping lighter upstrokes between the backbeat anchors. Original ensemble study, not a recording transcription."},
        {"name": "country pop chorus lift and acoustic strum low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5, 4, 5, 6, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.7, 0.3, 0.7, 0.3, 0.65, 0.4, 0.7, 0.3], "accents": [0.95, 0.55, 0.8, 0.6, 1, 0.5, 0.8, 0.85], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Support the acoustic backbeat with root and fifth, adding a light pickup and a short second-bar passing tone. Original ensemble study, not a recording transcription."},
        {"name": "country pop chorus lift and acoustic strum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 4.75, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Country chorus lift", "description": "Practice this two-bar country chorus lift. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "country pop chorus lift and acoustic strum drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Country chorus close", "description": "Close with the last two beats of the country chorus lift; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
        "guitar": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["pedal-bend", "knee-lever-bend", "chordal-glissando", "volume-swell", "vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["flatpick", "hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "flatpick",
          "variantId": "steel-acoustic"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "fingerstyle"
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
    }
  ]
};
