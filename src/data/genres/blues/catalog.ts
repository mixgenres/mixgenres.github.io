import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "blues",
  "name": "Blues",
  "family": "African American / United States",
  "color": "#3a61b7",
  "description": "Blues is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern Blues",
  "meter": "4/4",
  "tempo": [90, 106],
  "instruments": ["voice", "guitar", "harmonica", "piano", "bass", "drums", "resonator-guitar"],
  "roles": {
    "lead": ["voice", "guitar", "harmonica"],
    "harmony": ["piano"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["blues", "minor-pentatonic"],
  "chordQualities": ["A7", "D7", "E7", "B7", "E9", "G7", "C7", "G9", "C", "F", "Fm", "Am", "Am7", "Dm7"],
  "harmonicRhythm": "bar",
  "cadences": ["E7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["electric blues shuffle and turnaround", "Modern Blues: shuffle", "Modern Blues: straight eighth blues", "Modern Blues: boogie", "Delta alternating-thumb slide response", "Delta: shuffle", "Delta: straight eighth blues", "Delta: boogie", "Chicago amplified guitar and harmonica shuffle", "Chicago: shuffle", "Chicago: straight eighth blues", "Chicago: boogie", "Texas driving guitar shuffle and double stops", "Texas: shuffle", "Texas: straight eighth blues", "Texas: boogie", "Piedmont alternating thumb and syncopated treble", "Piedmont: shuffle", "Piedmont: straight eighth blues", "Piedmont: boogie", "Hill Country one-chord guitar ostinato", "Hill Country: shuffle", "Hill Country: straight eighth blues", "Hill Country: boogie", "slow blues triplet sustain and vocal gaps", "Slow Blues: shuffle", "Slow Blues: straight eighth blues", "Slow Blues: boogie", "blues fusion extended dominant vamp", "Blues Fusion: shuffle", "Blues Fusion: straight eighth blues", "Blues Fusion: boogie"],
  "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "modern-blues",
      "name": "Modern Blues",
      "description": "Modern Blues: electric blues shuffle and turnaround. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electric blues shuffle and turnaround", "Modern Blues: shuffle", "Modern Blues: straight eighth blues", "Modern Blues: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Modern Blues: bends", "Modern Blues: slides", "Modern Blues: vibrato", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["A7", "D7", "E7", "Modern Blues: I7-IV7-V7", "Modern Blues: minor blues", "Modern Blues: quick IV"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"],
        "AAB": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"],
        "solo": ["A7", "D7", "A7", "E7"],
        "turnaround": ["E7", "A7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electric blues shuffle and turnaround voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electric blues shuffle and turnaround voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electric blues shuffle and turnaround guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electric blues shuffle and turnaround guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electric blues shuffle and turnaround harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electric blues shuffle and turnaround harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electric blues shuffle and turnaround piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electric blues shuffle and turnaround piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electric blues shuffle and turnaround low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "electric blues shuffle and turnaround bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electric blues shuffle and turnaround kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "electric blues shuffle and turnaround drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
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
      "id": "delta",
      "name": "Delta",
      "description": "Delta: Delta alternating-thumb slide response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bottleneck slide whine over steady acoustic thumb-bass stomp", "Delta alternating-thumb slide response", "Delta: shuffle", "Delta: straight eighth blues", "Delta: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Delta: bends", "Delta: slides", "Delta: vibrato", "bottleneck glass/metal slide on acoustic guitar", "percussive heel stomping", "haunting falsetto vocal leaps", "elastic polyrhythmic timing", "accent", "staccato", "legato"],
      "harmony": ["A7", "D7", "E7", "Delta: I7-IV7-V7", "Delta: minor blues", "Delta: quick IV"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "resonator-guitar"]
      },
      "progressions": {
        "intro": ["A7", "D7", "A7", "E7"],
        "verse": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"],
        "coda": ["E7", "D7", "A7", "A7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "resonator-guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Delta alternating-thumb slide response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Delta alternating-thumb slide response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Delta alternating-thumb slide response resonator-guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["resonator-guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Delta alternating-thumb slide response resonator-guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["resonator-guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "resonator-guitar": ["slide", "double-stop"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "resonator-guitar:lead": {
          "allowedTechniques": ["slide", "double-stop"],
          "defaultTechnique": "slide"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "chicago",
      "name": "Chicago",
      "description": "Chicago: Chicago amplified guitar and harmonica shuffle. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Electric guitar shuffle riff with answering distorted harmonica cry", "Chicago amplified guitar and harmonica shuffle", "Chicago: shuffle", "Chicago: straight eighth blues", "Chicago: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Chicago: bends", "Chicago: slides", "Chicago: vibrato", "distorted amplified harmonica (bullet mic)", "heavy electric guitar shuffle riffs", "rolling boogie basslines", "deep guttural vocal delivery", "accent", "staccato", "legato", "harmonic", "riff", "ghost", "tenuto", "roll", "open"],
      "harmony": ["A7", "D7", "E7", "Chicago: I7-IV7-V7", "Chicago: minor blues", "Chicago: quick IV"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E7", "A7", "E7", "B7"],
        "verse": ["E7", "E7", "E7", "E7", "A7", "A7", "E7", "E7", "B7", "A7", "E7", "B7"],
        "solo": ["E7", "E7", "E7", "E7", "A7", "A7", "E7", "E7", "B7", "A7", "E7", "B7"],
        "coda": ["B7", "A7", "E7", "E9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Chicago amplified guitar and harmonica shuffle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chicago amplified guitar and harmonica shuffle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago amplified guitar and harmonica shuffle guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chicago amplified guitar and harmonica shuffle guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago amplified guitar and harmonica shuffle harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chicago amplified guitar and harmonica shuffle harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago amplified guitar and harmonica shuffle piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chicago amplified guitar and harmonica shuffle piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago amplified guitar and harmonica shuffle low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "Chicago amplified guitar and harmonica shuffle bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago amplified guitar and harmonica shuffle kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Chicago amplified guitar and harmonica shuffle drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["harmonic", "bend", "vibrato", "slide", "double-stop", "riff", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "harmonic", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "roll", "accent", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["harmonic", "bend", "vibrato", "slide", "double-stop", "riff", "accent", "staccato", "legato"],
          "defaultTechnique": "harmonic",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "harmonic", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
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
      "id": "texas",
      "name": "Texas",
      "description": "Texas: Texas driving guitar shuffle and double stops. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Sharp Texas shuffle snap with rapid ascending pentatonic guitar bend", "Texas driving guitar shuffle and double stops", "Texas: shuffle", "Texas: straight eighth blues", "Texas: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Texas: bends", "Texas: slides", "Texas: vibrato", "blistering single-note lead guitar bending", "heavy Texas shuffle drum groove", "virtuosic turnaround licks", "dynamic power rhythm", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["A7", "D7", "E7", "Texas: I7-IV7-V7", "Texas: minor blues", "Texas: quick IV"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["G7", "C7", "G7", "D7"],
        "verse": ["G7", "G7", "G7", "G7", "C7", "C7", "G7", "G7", "D7", "C7", "G7", "D7"],
        "solo": ["G7", "G7", "G7", "G7", "C7", "C7", "G7", "G7", "D7", "C7", "G7", "D7"],
        "coda": ["D7", "C7", "G7", "G9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Texas driving guitar shuffle and double stops voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Texas driving guitar shuffle and double stops voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Texas driving guitar shuffle and double stops guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Texas driving guitar shuffle and double stops guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Texas driving guitar shuffle and double stops harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Texas driving guitar shuffle and double stops harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Texas driving guitar shuffle and double stops piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Texas driving guitar shuffle and double stops piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Texas driving guitar shuffle and double stops low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "Texas driving guitar shuffle and double stops bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Texas driving guitar shuffle and double stops kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Texas driving guitar shuffle and double stops drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
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
      "id": "piedmont",
      "name": "Piedmont",
      "description": "Piedmont: Piedmont alternating thumb and syncopated treble. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Alternating thumb-bass ragtime arpeggio with bright syncopated treble melody", "Piedmont alternating thumb and syncopated treble", "Piedmont: shuffle", "Piedmont: straight eighth blues", "Piedmont: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Piedmont: bends", "Piedmont: slides", "Piedmont: vibrato", "alternating thumb-bass ragtime picking", "syncopated treble-string melodies", "upbeat cheerful bounce", "clean acoustic articulation", "accent", "staccato", "legato", "pick"],
      "harmony": ["A7", "D7", "E7", "Piedmont: I7-IV7-V7", "Piedmont: minor blues", "Piedmont: quick IV"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "blues",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"]
      },
      "progressions": {
        "intro": ["C", "G7", "C", "G7"],
        "verse": ["C", "C7", "F", "Fm", "C", "A7", "D7", "G7", "C", "E7", "Am", "F", "C", "G7", "C", "G7"],
        "coda": ["C", "A7", "D7", "G7", "C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Piedmont alternating thumb and syncopated treble voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Piedmont alternating thumb and syncopated treble voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Piedmont alternating thumb and syncopated treble guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Piedmont alternating thumb and syncopated treble guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "pick", "accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "steel-acoustic"
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
      "id": "hill-country",
      "name": "Hill Country",
      "description": "Hill Country: Hill Country one-chord guitar ostinato. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Relentless one-chord hypnotic modal guitar vamp locked with raw drum stomp", "Hill Country one-chord guitar ostinato", "Hill Country: shuffle", "Hill Country: straight eighth blues", "Hill Country: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Hill Country: bends", "Hill Country: slides", "Hill Country: vibrato", "hypnotic one-chord drone vamp", "repetitive polyrhythmic guitar grooves", "open-ended modal improvisation", "raw driving drum stomps", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["A7", "Hill Country: I7-IV7-V7", "Hill Country: minor blues", "Hill Country: quick IV"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E7", "E7", "E7", "E7"],
        "verse": ["E7", "E7", "E7", "E7", "E7", "E7", "E7", "E7"],
        "solo": ["E7", "E7", "E7", "E7", "E7", "E7", "E7", "E7"],
        "coda": ["E7", "E7", "E7", "E7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Hill Country one-chord guitar ostinato voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Hill Country one-chord guitar ostinato voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hill Country one-chord guitar ostinato guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Hill Country one-chord guitar ostinato guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hill Country one-chord guitar ostinato harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Hill Country one-chord guitar ostinato harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hill Country one-chord guitar ostinato piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Hill Country one-chord guitar ostinato piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hill Country one-chord guitar ostinato low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Hill Country one-chord guitar ostinato bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hill Country one-chord guitar ostinato kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Hill Country one-chord guitar ostinato drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "open", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "accent", "roll"],
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
      "id": "slow-blues",
      "name": "Slow Blues",
      "description": "Slow Blues: slow blues triplet sustain and vocal gaps. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["slow blues triplet sustain and vocal gaps", "Slow Blues: shuffle", "Slow Blues: straight eighth blues", "Slow Blues: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Slow Blues: bends", "Slow Blues: slides", "Slow Blues: vibrato", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Dm7", "E7", "Slow Blues: I7-IV7-V7", "Slow Blues: minor blues", "Slow Blues: quick IV"],
      "meter": "4/4",
      "tempo": [58, 74],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "verse": ["Am7", "Am7", "Am7", "Am7", "Dm7", "Dm7", "Am7", "Am7", "E7", "Dm7", "Am7", "E7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "slow blues triplet sustain and vocal gaps voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "slow blues triplet sustain and vocal gaps voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow blues triplet sustain and vocal gaps guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "slow blues triplet sustain and vocal gaps guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow blues triplet sustain and vocal gaps harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "slow blues triplet sustain and vocal gaps harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow blues triplet sustain and vocal gaps piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "slow blues triplet sustain and vocal gaps piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow blues triplet sustain and vocal gaps low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "slow blues triplet sustain and vocal gaps bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow blues triplet sustain and vocal gaps kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "slow blues triplet sustain and vocal gaps drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.62,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.5,"reverbSend":0.08,"delaySend":0.03,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "blues-fusion",
      "name": "Blues Fusion",
      "description": "Blues Fusion: blues fusion extended dominant vamp. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["blues fusion extended dominant vamp", "Blues Fusion: shuffle", "Blues Fusion: straight eighth blues", "Blues Fusion: boogie"],
      "techniques": ["bend", "slide", "vibrato", "double-stop", "shuffle", "ghost-note", "call-response", "Blues Fusion: bends", "Blues Fusion: slides", "Blues Fusion: vibrato", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["A7", "D7", "E7", "Blues Fusion: I7-IV7-V7", "Blues Fusion: minor blues", "Blues Fusion: quick IV"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar", "harmonica"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"],
        "AAB": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"],
        "solo": ["A7", "D7", "A7", "E7"],
        "turnaround": ["E7", "A7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "blues-form",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "AAB", "bars": 12},
        {"label": "AAB", "bars": 12},
        {"label": "solo", "bars": 12, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "AAB", "bars": 12},
        {"label": "turnaround", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "blues fusion extended dominant vamp voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "blues fusion extended dominant vamp voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "blues fusion extended dominant vamp guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "blues fusion extended dominant vamp guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "blues fusion extended dominant vamp harmonica statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["harmonica"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "blues fusion extended dominant vamp harmonica cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["harmonica"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "blues fusion extended dominant vamp piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "blues fusion extended dominant vamp piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "blues fusion extended dominant vamp low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "blues fusion extended dominant vamp bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "blues fusion extended dominant vamp kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "blues fusion extended dominant vamp drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
        "harmonica": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["bend", "vibrato", "slide", "double-stop", "accent", "staccato", "legato"],
          "defaultTechnique": "bend",
          "variantId": "solid-electric"
        },
        "harmonica:lead": {
          "allowedTechniques": ["bend", "vibrato", "ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "slide", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
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
