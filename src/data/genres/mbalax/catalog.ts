import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "mbalax",
  "name": "Mbalax",
  "family": "Senegal",
  "color": "#677807",
  "description": "Mbalax is an independent musical world. Senegal idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "guitar", "bass", "sabar", "talking-drum", "shaker"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["sabar", "talking-drum", "shaker"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["mbalax sabar speech accents and bass guitar", "sabar heavy dense drum replies and breaks", "pop mbalax vocal refrain and sabar punctuation", "electronic mbalax sample cuts and sabar accents"],
  "techniques": ["slap", "open-tone", "roll", "pressure-bend", "speech-contour", "staccato", "melisma"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: mbalax sabar speech accents and bass guitar. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["mbalax sabar speech accents and bass guitar"],
      "techniques": ["slap", "open-tone", "roll", "pressure-bend", "speech-contour", "staccato", "melisma", "accent", "legato", "vibrato", "bend", "tone", "ghost"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["sabar", "talking-drum", "shaker"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G"],
        "verse": ["C", "F", "C", "G"],
        "sabar break": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sabar break", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "mbalax sabar speech accents and bass guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mbalax sabar speech accents and bass guitar guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.25, 1.75, 2.5, 3.25, 4, 4.75, 5.25, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.22, 0.2, 0.25, 0.2, 0.3, 0.35, 0.22, 0.25, 0.2, 0.3, 0.25, 0.35], "articulation": "pick", "accents": [0.85, 0.45, 0.65, 0.5, 0.8, 0.55, 0.9, 0.5, 0.65, 0.8, 0.55, 0.7], "pitches": [{"degree": 1, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}], "description": "Pick an interlocking upper line around the sabar conversation. Let the low bass phrase and talking drum answer separately. Original ensemble study, not a recording transcription."},
        {"name": "mbalax sabar speech accents and bass guitar low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "mbalax sabar speech accents and bass guitar sabar pulse", "role": "percussion", "onsets": [0.0, 0.75, 1.25, 1.75, 2.5, 3.25, 3.5, 4.0, 5.25, 5.75, 6.5, 7.25], "instruments": ["sabar"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "slap", "open", "slap", "dum", "slap", "open", "dum", "slap", "open", "slap", "dum"], "accents": [0.85, 0.75, 0.6, 0.8, 0.85, 0.7, 0.65, 0.9, 0.8, 0.7, 0.85, 0.8], "shortName": "Sabar call and answer", "description": "Learn the short low-and-slap call, leave its gap, then answer in a changed grouping across the second bar. Ensemble learning adaptation, not a recording transcription."},
        {"name": "mbalax sabar speech accents and bass guitar talking-drum pulse", "role": "percussion", "onsets": [1.0, 1.5, 3.0, 3.75, 4.75, 5.5, 7.0, 7.5], "instruments": ["talking-drum"], "cycleLength": 2, "articulation": "accent", "hits": ["open", "slap", "dum", "open", "slap", "open", "dum", "slap"], "accents": [0.65, 0.75, 0.8, 0.6, 0.8, 0.65, 0.85, 0.75], "shortName": "Talking drum gaps", "description": "Reply between the sabar calls with short open and slap contacts, rather than doubling the lead drum. Ensemble learning adaptation, not a recording transcription."},
        {"name": "mbalax sabar speech accents and bass guitar shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "bend", "accent", "legato", "vibrato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "sabar": ["tone", "slap", "roll"],
        "talking-drum": ["pressure-bend", "speech-contour", "slap", "roll"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "sabar:percussion": {
          "allowedTechniques": ["tone", "slap", "roll"],
          "defaultTechnique": "tone"
        },
        "talking-drum:percussion": {
          "allowedTechniques": ["pressure-bend", "speech-contour", "slap", "roll"],
          "defaultTechnique": "pressure-bend"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
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
      "id": "sabar-heavy",
      "name": "Sabar-Heavy",
      "description": "Sabar-Heavy: sabar heavy dense drum replies and breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sabar heavy dense drum replies and breaks"],
      "techniques": ["slap", "open-tone", "roll", "pressure-bend", "speech-contour", "staccato", "melisma", "accent", "legato", "vibrato", "bend", "tone", "ghost"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["sabar", "talking-drum", "shaker"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G"],
        "verse": ["C", "F", "C", "G"],
        "sabar break": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sabar break", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sabar heavy dense drum replies and breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sabar heavy dense drum replies and breaks guitar accompaniment", "role": "harmony", "onsets": [0.25, 0.75, 1.5, 2, 2.75, 3.5, 4.25, 5, 5.75, 6.25, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.2, 0.3, 0.2, 0.3, 0.2, 0.35, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3], "articulation": "pick", "accents": [0.5, 0.75, 0.55, 0.8, 0.5, 0.85, 0.55, 0.8, 0.5, 0.85, 0.5, 0.9], "pitches": [{"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 65, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 65, "voicing": "single", "reference": "chord"}], "description": "Place a high repeated guitar response around the sabar calls; let the percussion lead the denser phrase endings. Original ensemble study, not a recording transcription."},
        {"name": "sabar heavy dense drum replies and breaks low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.25, 3, 3.5, 4, 5.25, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.5, 0.4, 0.5, 0.35, 0.3, 0.3, 0.8, 0.5, 0.4, 0.4, 0.3], "accents": [1, 0.55, 0.8, 0.5, 0.75, 0.55, 1, 0.6, 0.8, 0.55, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep the bass phrase interlocked with sabar calls, leaving quiet space between the offbeat replies. Original ensemble study, not a recording transcription."},
        {"name": "sabar heavy dense drum replies and breaks sabar pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["sabar"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sabar heavy dense drum replies and breaks talking-drum pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["talking-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sabar heavy dense drum replies and breaks shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "bend", "accent", "legato", "vibrato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "sabar": ["tone", "slap", "roll"],
        "talking-drum": ["pressure-bend", "speech-contour", "slap", "roll"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "sabar:percussion": {
          "allowedTechniques": ["tone", "slap", "roll"],
          "defaultTechnique": "tone"
        },
        "talking-drum:percussion": {
          "allowedTechniques": ["pressure-bend", "speech-contour", "slap", "roll"],
          "defaultTechnique": "pressure-bend"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
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
      "id": "pop-mbalax",
      "name": "Pop Mbalax",
      "description": "Pop Mbalax: pop mbalax vocal refrain and sabar punctuation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["pop mbalax vocal refrain and sabar punctuation"],
      "techniques": ["slap", "open-tone", "roll", "pressure-bend", "speech-contour", "staccato", "melisma", "accent", "legato", "vibrato", "bend", "tone", "ghost"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["sabar", "talking-drum", "shaker"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G"],
        "verse": ["C", "F", "C", "G"],
        "sabar break": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sabar break", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pop mbalax vocal refrain and sabar punctuation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pop mbalax vocal refrain and sabar punctuation guitar accompaniment", "role": "harmony", "onsets": [0.25, 1, 1.5, 2.25, 3, 3.5, 4.5, 5.25, 6, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.2, 0.3, 0.2, 0.35, 0.2, 0.3, 0.25, 0.3, 0.2, 0.4, 0.4], "articulation": "pick", "accents": [0.55, 0.85, 0.5, 0.75, 0.5, 0.7, 0.6, 0.8, 0.55, 0.75, 0.9], "pitches": [{"degree": 3, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 9, "register": 66, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 66, "voicing": "single", "reference": "chord"}], "description": "Play a compact repeated pop hook with a lifted second-bar tail; keep the sabar accents in the foreground gaps. Original ensemble study, not a recording transcription."},
        {"name": "pop mbalax vocal refrain and sabar punctuation low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "pop mbalax vocal refrain and sabar punctuation sabar pulse", "role": "percussion", "onsets": [0.0, 0.75, 1.5, 2.25, 3.0, 3.5, 4.0, 5.0, 5.75, 6.5, 7.5], "instruments": ["sabar"], "cycleLength": 2, "articulation": "accent", "hits": ["dum", "slap", "open", "slap", "dum", "slap", "dum", "slap", "open", "slap", "dum"], "accents": [0.9, 0.75, 0.65, 0.85, 0.8, 0.7, 0.85, 0.8, 0.65, 0.85, 0.9], "shortName": "Pop sabar response", "description": "Hold a clear dance anchor while the upper-head phrase answers the sung refrain across two bars. Ensemble learning adaptation, not a recording transcription."},
        {"name": "pop mbalax vocal refrain and sabar punctuation talking-drum pulse", "role": "percussion", "onsets": [1.0, 1.75, 3.25, 4.5, 5.25, 6.75, 7.25], "instruments": ["talking-drum"], "cycleLength": 2, "articulation": "accent", "hits": ["open", "slap", "dum", "open", "slap", "dum", "open"], "accents": [0.6, 0.7, 0.75, 0.6, 0.75, 0.8, 0.6], "shortName": "Short drum replies", "description": "Play compact replies in the sabar gaps and leave the beginning of the vocal phrase open. Ensemble learning adaptation, not a recording transcription."},
        {"name": "pop mbalax vocal refrain and sabar punctuation shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "bend", "accent", "legato", "vibrato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "sabar": ["tone", "slap", "roll"],
        "talking-drum": ["pressure-bend", "speech-contour", "slap", "roll"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "sabar:percussion": {
          "allowedTechniques": ["tone", "slap", "roll"],
          "defaultTechnique": "tone"
        },
        "talking-drum:percussion": {
          "allowedTechniques": ["pressure-bend", "speech-contour", "slap", "roll"],
          "defaultTechnique": "pressure-bend"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
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
      "id": "electronic-fusion",
      "name": "Electronic / Fusion",
      "description": "Electronic / Fusion: electronic mbalax sample cuts and sabar accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electronic mbalax sample cuts and sabar accents"],
      "techniques": ["slap", "open-tone", "roll", "pressure-bend", "speech-contour", "staccato", "melisma", "accent", "legato", "vibrato", "bend", "tone", "ghost"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["sabar", "talking-drum", "shaker"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G"],
        "verse": ["C", "F", "C", "G"],
        "sabar break": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sabar break", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electronic mbalax sample cuts and sabar accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electronic mbalax sample cuts and sabar accents guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electronic mbalax sample cuts and sabar accents low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "electronic mbalax sample cuts and sabar accents sabar pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sabar"], "cycleLength": 1, "articulation": "accent"},
        {"name": "electronic mbalax sample cuts and sabar accents talking-drum pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["talking-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "electronic mbalax sample cuts and sabar accents shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "bend", "accent", "legato", "vibrato"],
        "bass": ["staccato", "slap", "accent", "legato"],
        "sabar": ["tone", "slap", "roll"],
        "talking-drum": ["pressure-bend", "speech-contour", "slap", "roll"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "slap", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "sabar:percussion": {
          "allowedTechniques": ["tone", "slap", "roll"],
          "defaultTechnique": "tone"
        },
        "talking-drum:percussion": {
          "allowedTechniques": ["pressure-bend", "speech-contour", "slap", "roll"],
          "defaultTechnique": "pressure-bend"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
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
    }
  ]
}, [
  { instrumentId: 'djembe', role: 'percussion' },
  { instrumentId: 'kora', role: 'harmony' },
  { instrumentId: 'piano', role: 'harmony' },
  { instrumentId: 'balafon', role: 'lead' },
]);
