import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "rock",
  "name": "Rock",
  "family": "Global popular music",
  "color": "#9a1f30",
  "description": "Rock is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Alternative",
  "meter": "4/4",
  "tempo": [116, 132],
  "instruments": ["voice", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["voice", "guitar"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor", "blues", "dorian"],
  "chordQualities": ["Em", "C", "G", "D", "Am", "A7", "D7", "E7", "A5", "G5", "D5", "C5", "E5", "E7#9", "A", "B7", "Em9", "Cmaj7", "Bm7", "Am7", "Gmaj7", "D/C", "Dmaj7", "F"],
  "harmonicRhythm": "bar",
  "cadences": ["Em"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["alternative guitar hook and verse chorus contrast", "rock and roll shuffle bass and guitar answer", "classic rock riff and bent guitar solo", "hard rock power riff and heavy backbeat", "psychedelic modal vamp and echo guitar", "progressive odd-meter riff and sectional development", "indie interlocking guitar and melodic bass", "shoegaze sustained guitar wall and floating lead", "post rock sparse motif building to full band", "Japanese melodic rock rapid chords and singing guitar line"],
  "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "alternative",
      "name": "Alternative",
      "description": "Alternative: alternative guitar hook and verse chorus contrast. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["alternative guitar hook and verse chorus contrast"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "C", "G", "D"],
        "verse": ["Am", "C", "D", "Em"],
        "outro": ["Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "alternative guitar hook and verse chorus contrast voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "alternative guitar hook and verse chorus contrast guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "alternative guitar hook and verse chorus contrast guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.5, 2.25, 3.5, 4, 5.25, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.4, 0.25, 0.45, 0.35, 0.3, 0.6, 0.35, 0.4, 0.3, 0.4], "articulation": "strum", "accents": [0.9, 0.5, 0.75, 0.55, 0.8, 0.95, 0.55, 0.8, 0.5, 0.85], "pitches": [{"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}, {"voicing": "chord", "register": 52}], "description": "Contrast grounded chord attacks and displaced upstrokes; let the longer second-bar chord ring under the lead. Original ensemble study, not a recording transcription."},
        {"name": "alternative guitar hook and verse chorus contrast low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.5, 4, 5.25, 6, 7, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.55, 0.3, 0.65, 0.55, 0.3, 0.9, 0.5, 0.65, 0.3, 0.3], "accents": [0.95, 0.5, 0.8, 0.65, 0.8, 1, 0.55, 0.8, 0.5, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Follow the guitar anchors with longer roots and a separate short upper answer on the second return. Original ensemble study, not a recording transcription."},
        {"name": "alternative guitar hook and verse chorus contrast kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Alternative broken pocket", "description": "Practice this two-bar alternative broken pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "alternative guitar hook and verse chorus contrast drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Alternative broken close", "description": "Close with the last two beats of the alternative broken pocket; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "rock-and-roll",
      "name": "Rock & Roll",
      "description": "Rock & Roll: rock and roll shuffle bass and guitar answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["rock and roll shuffle bass and guitar answer"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["A7", "D7", "E7"],
      "meter": "4/4",
      "tempo": [136, 152],
      "scale": "blues",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "verse": ["A7", "A7", "A7", "A7", "D7", "D7", "A7", "A7", "E7", "D7", "A7", "E7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "rock and roll shuffle bass and guitar answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock and roll shuffle bass and guitar answer guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock and roll shuffle bass and guitar answer guitar accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "rock and roll shuffle bass and guitar answer low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "rock and roll shuffle bass and guitar answer kit", "role": "percussion", "onsets": [0, 0, 0.666667, 1, 1, 1.666667, 2, 2, 2.666667, 3, 3, 3.666667, 4, 4, 4.666667, 5, 5, 5.666667, 6, 6, 6.666667, 7, 7, 7.666667], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5], "articulation": "accent", "shortName": "Rock and roll shuffle", "description": "Practice this two-bar rock and roll shuffle. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "rock and roll shuffle bass and guitar answer drums cadence fill", "role": "percussion", "onsets": [2, 2, 2.666667, 3, 3, 3.666667], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "ride", "ride", "snare", "ride"], "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5], "shortName": "Rock and close", "description": "Close with the last two beats of the rock and roll shuffle; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "classic-rock",
      "name": "Classic Rock",
      "description": "Classic Rock: classic rock riff and bent guitar solo. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["classic rock riff and bent guitar solo"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [110, 126],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "C", "G", "D"],
        "verse": ["Am", "C", "D", "Em"],
        "outro": ["Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "classic rock riff and bent guitar solo voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classic rock riff and bent guitar solo guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classic rock riff and bent guitar solo guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.75, 3.5, 4, 4.5, 5.5, 6, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.35, 0.2, 0.3, 0.2, 0.4, 0.25, 0.3, 0.4, 0.2, 0.3, 0.4, 0.25, 0.3], "articulation": "pick", "accents": [0.95, 0.5, 0.8, 0.5, 0.9, 0.6, 0.8, 1, 0.5, 0.8, 0.9, 0.6, 0.85], "pitches": [{"degree": 1, "register": 48, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 48, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 48}, {"degree": 5, "register": 48, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 48, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 48}, {"degree": 5, "register": 48, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 48, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 48, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 48}, {"degree": 1, "register": 48, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 48}, {"degree": 5, "register": 48, "voicing": "single", "reference": "chord"}], "description": "Combine a low root-and-fifth riff with short power-chord answers. Keep the riff independent of the sung melody. Original ensemble study, not a recording transcription."},
        {"name": "classic rock riff and bent guitar solo low anchor", "role": "bass", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5, 4, 4.5, 5.25, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.4, 0.3, 0.3, 0.45, 0.35, 0.3, 0.45, 0.3, 0.4, 0.45, 0.35, 0.3], "accents": [1, 0.5, 0.75, 0.9, 0.6, 0.8, 1, 0.5, 0.7, 0.85, 0.6, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep a low root-led riff beneath the chords and answer with chord tones near the end of the second bar. Original ensemble study, not a recording transcription."},
        {"name": "classic rock riff and bent guitar solo kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Classic rock kick answers", "description": "Practice this two-bar classic rock kick answers. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "classic rock riff and bent guitar solo drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Classic rock close", "description": "Close with the last two beats of the classic rock kick answers; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "hard-rock",
      "name": "Hard Rock",
      "description": "Hard Rock: hard rock power riff and heavy backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Thunderous Marshall stack power chord riff ringing out over driving open-hi-hat drum beat", "hard rock power riff and heavy backbeat"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "cranking Marshall valve overdrive guitar power chords", "driving straight-ahead drum groove with huge snare on 2 and 4", "screaming blues-based high-tenor lead vocals", "virtuosic pentatonic guitar solos", "accent", "staccato", "legato", "power-chord", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["A5", "G5", "D5", "A5"],
        "verse": ["A5", "G5", "D5", "A5", "A5", "G5", "D5", "A5"],
        "chorus": ["D5", "C5", "G5", "A5", "D5", "C5", "G5", "A5"],
        "solo": ["A5", "G5", "D5", "A5"],
        "coda": ["D5", "E5", "A5", "A5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "hard rock power riff and heavy backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hard rock power riff and heavy backbeat guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hard rock power riff and heavy backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 0.75, 1.5, 2, 2.5, 3.25, 3.5, 4, 4.75, 5.5, 6, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.25, 0.15, 0.15, 0.3, 0.25, 0.25, 0.15, 0.25, 0.3, 0.25, 0.3, 0.25, 0.3, 0.4], "articulation": "palm-mute", "accents": [1, 0.45, 0.6, 0.85, 0.95, 0.6, 0.5, 0.85, 1, 0.6, 0.85, 0.95, 0.6, 0.9], "pitches": [{"degree": 1, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 45, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 45}, {"degree": 1, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 45, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 45}, {"degree": 1, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 45, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 45}, {"degree": 1, "register": 45, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 45, "voicing": "single", "reference": "chord"}, {"voicing": "chord", "register": 45}], "description": "Drive muted low notes into broader power-chord answers; keep the short pickups light and the riff arrivals strong. Original ensemble study, not a recording transcription."},
        {"name": "hard rock power riff and heavy backbeat low anchor", "role": "bass", "onsets": [0, 0.5, 0.75, 1.5, 2, 2.5, 3.25, 3.5, 4, 4.75, 5.5, 6, 6.5, 7.25], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.25, 0.15, 0.15, 0.3, 0.25, 0.25, 0.15, 0.25, 0.3, 0.25, 0.3, 0.25, 0.3, 0.4], "accents": [1, 0.45, 0.6, 0.85, 0.95, 0.6, 0.5, 0.85, 1, 0.6, 0.85, 0.95, 0.6, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Lock the low bass riff to the guitar groups, keeping the smaller connecting notes below the main accents. Original ensemble study, not a recording transcription."},
        {"name": "hard rock power riff and heavy backbeat kit", "role": "percussion", "onsets": [0, 0.0, 0.5, 0.5, 1.0, 1, 1.5, 2, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4, 4.0, 4.5, 4.5, 5.0, 5, 5.5, 6, 6.0, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "kick", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "kick", "ride", "snare", "ride", "kick", "ride", "kick", "ride", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "kick", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.92, 0.5], "articulation": "accent", "shortName": "Hard rock doubled kick", "description": "Practice this two-bar hard rock doubled kick. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "hard rock power riff and heavy backbeat drums cadence fill", "role": "percussion", "onsets": [2, 2.0, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "ride", "ride", "snare", "kick", "ride"], "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.92, 0.5], "shortName": "Hard rock close", "description": "Close with the last two beats of the hard rock doubled kick; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "power-chord", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "power-chord", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "power-chord", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "psychedelic",
      "name": "Psychedelic",
      "description": "Psychedelic: psychedelic modal vamp and echo guitar. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Wah-wah pedal sweep over overdriven fuzz 7#9 Hendrix chord with swirling tape flanger", "psychedelic modal vamp and echo guitar"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "Jimi Hendrix Uni-Vibe, Fuzz Face, and Cry Baby wah-wah manipulation", "modal Indian raga scale improvisations", "swirling Vox Continental / Farfisa organ chords", "surrealistic poetic stream-of-consciousness", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em7", "A7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E7#9", "G", "A", "E7#9"],
        "verse": ["E7#9", "G", "A", "E7#9", "C", "D", "E7#9", "E7#9"],
        "solo": ["E7#9", "A7", "E7#9", "B7", "C", "D", "E7#9", "E7#9"],
        "coda": ["C", "D", "E7#9", "E7#9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "vamp", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "psychedelic modal vamp and echo guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "psychedelic modal vamp and echo guitar guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "psychedelic modal vamp and echo guitar guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.5, 2.75, 4, 5, 6.5, 7.25], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.4, 0.65, 0.8, 0.8, 0.7, 1, 0.45, 0.6], "articulation": "pick", "accents": [0.85, 0.5, 0.7, 0.6, 0.9, 0.55, 0.65, 0.8], "pitches": [{"degree": 1, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 3, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 57, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 57, "voicing": "single", "reference": "tonic"}], "description": "Let a droning guitar figure ring through changing upper harmony; vary the second-bar descent rather than adding identical chord stabs. Original ensemble study, not a recording transcription."},
        {"name": "psychedelic modal vamp and echo guitar low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "psychedelic modal vamp and echo guitar kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 2.5, 2.5, 3, 3.5, 4, 4, 5, 5, 5.75, 6.5, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "snare", "ride", "kick", "ride", "snare", "ride", "kick", "ride", "ride", "snare", "kick", "ride", "snare", "ride"], "cycleLength": 2, "accents": [0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.85, 0.5], "articulation": "accent", "shortName": "Psychedelic tom space", "description": "Practice this two-bar psychedelic tom space. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "psychedelic modal vamp and echo guitar drums cadence fill", "role": "percussion", "onsets": [2.5, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "snare", "ride"], "accents": [0.5, 0.85, 0.5], "shortName": "Psychedelic tom close", "description": "Close with the last two beats of the psychedelic tom space; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "progressive",
      "name": "Progressive",
      "description": "Progressive: progressive odd-meter riff and sectional development. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Haunting Mellotron string  swelling behind soaring Gilmour-esque melodic guitar bend", "progressive odd-meter riff and sectional development"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "epic multi-movement conceptual song structures", "Mellotron string and flute s and Hammond organs", "unusual time signatures and classical counterpoint", "philosophical and fantastical lyrics", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "7/8",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em9", "A7", "Em9", "A7"],
        "movement1": ["Em9", "A7", "Cmaj7", "Bm7", "Am7", "D7", "Gmaj7", "B7"],
        "movement2": ["Cmaj7", "D/C", "Bm7", "Em", "Am7", "B7", "Em", "Em"],
        "coda": ["Cmaj7", "D", "Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "overture", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "progressive odd-meter riff and sectional development voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "progressive odd-meter riff and sectional development guitar statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45], "articulation": "legato"},
        {"name": "progressive odd-meter riff and sectional development guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "progressive odd-meter riff and sectional development low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "progressive odd-meter riff and sectional development kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "indie",
      "name": "Indie",
      "description": "Indie: indie interlocking guitar and melodic bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["indie interlocking guitar and melodic bass"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "C", "G", "D"],
        "verse": ["Am", "C", "D", "Em"],
        "outro": ["Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "indie interlocking guitar and melodic bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "indie interlocking guitar and melodic bass guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "indie interlocking guitar and melodic bass guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.25, 2, 2.75, 3.5, 4.25, 5, 5.5, 6.25, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.35, 0.3, 0.35, 0.45, 0.3, 0.35, 0.4, 0.3, 0.3, 0.45, 0.3, 0.4], "articulation": "pick", "accents": [0.8, 0.5, 0.65, 0.85, 0.5, 0.6, 0.75, 0.5, 0.65, 0.9, 0.55, 0.75], "pitches": [{"degree": 1, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 8, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 60, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 60, "voicing": "single", "reference": "chord"}], "description": "Pick an open chord-tone figure with ringing high notes; change the descending tail on the second bar. Original ensemble study, not a recording transcription."},
        {"name": "indie interlocking guitar and melodic bass low anchor", "role": "bass", "onsets": [0, 1.25, 2, 3, 3.5, 4.25, 5, 6, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.8, 0.45, 0.65, 0.3, 0.3, 0.6, 0.7, 0.45, 0.5, 0.3], "accents": [0.9, 0.55, 0.75, 0.5, 0.65, 0.85, 0.6, 0.8, 0.5, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Let the bass counterline move between the guitar arpeggio accents while the roots remain the phrase anchors. Original ensemble study, not a recording transcription."},
        {"name": "indie interlocking guitar and melodic bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 7.0, 7, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.42, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Indie offbeat pocket", "description": "Practice this two-bar indie offbeat pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "indie interlocking guitar and melodic bass drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 3.0, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "hat", "kick", "snare", "hat"], "accents": [0.5, 0.5, 0.5, 0.92, 0.85, 0.5], "shortName": "Indie offbeat close", "description": "Close with the last two beats of the indie offbeat pocket; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "shoegaze",
      "name": "Shoegaze",
      "description": "Shoegaze: shoegaze sustained guitar wall and floating lead. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Glide-guitar chord bent with tremolo arm while drowning in reverse reverb and roaring fuzz", "shoegaze sustained guitar wall and floating lead"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "Kevin Shields \"glide guitar\" (strumming while riding the Jaguar tremolo arm)", "Alesis/Yamaha reverse reverb into fuzz distortion", "whispering androgynous buried vocal harmonies", "dense shimmering harmonic overtones", "accent", "staccato", "legato", "tremolo", "harmonic", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dmaj7", "Gmaj7", "Dmaj7", "Gmaj7"],
        "verse": ["Dmaj7", "Gmaj7", "Dmaj7", "Gmaj7", "Bm7", "A", "Gmaj7", "Gmaj7"],
        "chorus": ["Gmaj7", "A", "Bm7", "D", "Gmaj7", "A", "D", "D"],
        "coda": ["Gmaj7", "A", "D", "D"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "shoegaze sustained guitar wall and floating lead voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shoegaze sustained guitar wall and floating lead guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shoegaze sustained guitar wall and floating lead guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "shoegaze sustained guitar wall and floating lead low anchor", "role": "bass", "onsets": [0, 1.5, 3.5, 4, 6, 7.25], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [1.1, 1, 0.35, 1.5, 0.9, 0.6], "accents": [0.9, 0.6, 0.75, 0.95, 0.65, 0.85], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep broad bass anchors under the sustained guitar texture while leaving the two-bar phrase a clear returning shape. Original ensemble study, not a recording transcription."},
        {"name": "shoegaze sustained guitar wall and floating lead kit", "role": "percussion", "onsets": [0, 0, 1, 1, 1.5, 2, 2.75, 3, 3, 4, 4, 5, 5, 5.5, 6, 6.75, 7, 7], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "snare", "kick", "ride", "kick", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "kick", "ride", "snare"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.92, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.92, 0.5, 0.85], "articulation": "accent", "shortName": "Shoegaze cymbal wash", "description": "Practice this two-bar shoegaze cymbal wash. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "shoegaze sustained guitar wall and floating lead drums cadence fill", "role": "percussion", "onsets": [2, 2.75, 3, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "kick", "ride", "snare"], "accents": [0.5, 0.92, 0.5, 0.85], "shortName": "Shoegaze cymbal close", "description": "Close with the last two beats of the shoegaze cymbal wash; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "harmonic", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "harmonic", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "harmonic", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "harmonic", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "harmonic", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.28,"bassForward":0.46,"width":0.78,"brightness":0.44,"compressionRatio":1.45,"transientSnap":0.46,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.28,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.78,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.72,"foregroundDepthDifference":0.34,"reverbSend":0.3,"delaySend":0.28,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "post-rock",
      "name": "Post-Rock",
      "description": "Post-Rock: post rock sparse motif building to full band. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Whispering tremolo-picked delay guitar slowly swelling into monumental wall of crashing sound", "post rock sparse motif building to full band"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "massive ten-minute dynamic builds from whispering delay to roaring crescendos", "bowed guitars and shimmering glockenspiels", "absence of standard verse/chorus lyrics", "sublime emotional catharsis", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "build": ["Am", "F", "C", "G", "Am", "F", "C", "Em"],
        "climax": ["F", "G", "Am", "Em", "F", "G", "Am", "Am"],
        "coda": ["F", "G", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "motif", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "climax", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "post rock sparse motif building to full band voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "post rock sparse motif building to full band guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "post rock sparse motif building to full band guitar accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "post rock sparse motif building to full band low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "post rock sparse motif building to full band kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 2, 2, 3, 4, 4, 5, 5.5, 6, 6, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "kick", "ride", "snare", "ride", "kick", "ride", "ride", "kick", "ride", "snare", "ride", "kick"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92], "articulation": "accent", "shortName": "Post-rock half-time space", "description": "Practice this two-bar post-rock half-time space. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "post rock sparse motif building to full band drums cadence fill", "role": "percussion", "onsets": [2, 2, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "snare", "ride", "kick"], "accents": [0.5, 0.85, 0.5, 0.92], "shortName": "Post-rock half-time close", "description": "Close with the last two beats of the post-rock half-time space; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
      "id": "japanese-melodic-rock",
      "name": "Japanese Melodic Rock",
      "description": "Japanese Melodic Rock: Japanese melodic rock rapid chords and singing guitar line. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Japanese melodic rock rapid chords and singing guitar line"],
      "techniques": ["palm-mute", "bend", "vibrato", "slide", "double-stop", "strum", "roll", "accent", "staccato", "legato", "tight-palm-mute", "muted-strum", "ghost", "open"],
      "harmony": ["Em", "C", "G", "D", "Am"],
      "meter": "4/4",
      "tempo": [148, 164],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "C", "G", "D"],
        "verse": ["Am", "C", "D", "Em"],
        "outro": ["Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Japanese melodic rock rapid chords and singing guitar line voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Japanese melodic rock rapid chords and singing guitar line guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Japanese melodic rock rapid chords and singing guitar line guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.75, 6, 6.5, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.3, 0.2, 0.3, 0.2, 0.35, 0.2, 0.3, 0.2, 0.35, 0.2, 0.3, 0.12, 0.3, 0.2, 0.3, 0.3], "articulation": "strum", "accents": [0.9, 0.45, 0.7, 0.5, 0.85, 0.5, 0.75, 0.5, 0.95, 0.45, 0.7, 0.4, 0.85, 0.5, 0.75, 0.85], "pitches": [{"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}, {"voicing": "chord", "register": 54}], "description": "Keep a bright eighth-note rhythm under the long melodic line; lift into the second-bar answer without copying the lead pitches. Original ensemble study, not a recording transcription."},
        {"name": "Japanese melodic rock rapid chords and singing guitar line low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3.25, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.15, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3], "accents": [1, 0.5, 0.7, 0.55, 0.95, 0.5, 0.6, 0.75, 1, 0.5, 0.7, 0.6, 0.95, 0.55, 0.8, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 6, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "chord"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "chord"}], "description": "Keep the bright eighth-note bass drive beneath the long lead line, using a stepwise second-bar turn to return to the refrain. Original ensemble study, not a recording transcription."},
        {"name": "Japanese melodic rock rapid chords and singing guitar line kit", "role": "percussion", "onsets": [0, 0.0, 0.5, 0.75, 1.0, 1, 1.5, 2, 2.0, 2.5, 3.0, 3, 3.5, 3.5, 4, 4.0, 4.5, 5.0, 5, 5.5, 5.5, 6, 6.0, 6.5, 7.0, 7, 7.5, 7.75], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "kick", "ride", "snare", "ride", "kick", "ride", "ride", "ride", "snare", "kick", "ride", "kick", "ride", "ride", "ride", "snare", "kick", "ride", "kick", "ride", "ride", "ride", "snare", "ride", "kick"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.92, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.92, 0.5, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92], "articulation": "accent", "shortName": "Melodic rock drive", "description": "Practice this two-bar melodic rock drive. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Japanese melodic rock rapid chords and singing guitar line drums cadence fill", "role": "percussion", "onsets": [2, 2.0, 2.5, 3.0, 3, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "ride", "ride", "snare", "ride", "kick"], "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Melodic rock close", "description": "Close with the last two beats of the melodic rock drive; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "slide", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "bend", "vibrato", "slide", "strum", "double-stop", "tight-palm-mute", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.65
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "slide", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute"
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
}, [
  { instrumentId: 'piano', role: 'harmony' },
  { instrumentId: 'organ', role: 'harmony' },
  { instrumentId: 'synth', role: 'texture' },
  { instrumentId: 'sampler', role: 'percussion' },
  { instrumentId: 'rhodes', role: 'harmony' },
]);
