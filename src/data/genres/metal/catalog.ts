import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

const GENRE_PACK_BASE: GenrePackInput = {
  "id": "metal",
  "name": "Metal",
  "family": "Global popular music",
  "color": "#86094b",
  "description": "Metal is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Heavy Metal",
  "meter": "4/4",
  "tempo": [124, 140],
  "instruments": ["voice", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["voice", "guitar"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["phrygian"],
  "chordQualities": ["Em", "G", "D", "C", "B7", "E5", "F5", "Bb5", "G5", "F#5", "C5", "D5", "Bb", "A", "F", "B5", "Am", "Dm", "Bbmaj7", "Gm7", "A7alt", "Fmaj7", "Em7b5", "Eb", "Gm", "A5"],
  "harmonicRhythm": "bar",
  "cadences": ["B5"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["heavy metal gallop and guitar lead", "thrash palm-muted sixteenths and fast backbeat", "doom slow heavy riff with long sustain", "death metal tremolo riff and blast drive", "black metal high tremolo and continuous blast", "progressive metal asymmetric riff and metric accents", "industrial metal machine chug and stop accents"],
  "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "heavy-metal",
      "name": "Heavy Metal",
      "description": "Heavy Metal: heavy metal gallop and guitar lead. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Galloping bass and drum rhythm powering twin-guitar harmonized heavy metal lead", "heavy metal gallop and guitar lead"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Heavy Metal: across Metal:", "Tony Iommi iconic heavy power-chord riffing", "Steve Harris driving galloping basslines", "twin-guitar harmonized melody leads", "operatic high-vibrato lead vocals (Bruce Dickinson)", "accent", "staccato", "legato", "power-chord", "riff", "pick", "tight-palm-mute", "gallop", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "G", "D", "Em"],
        "verse": ["Em", "G", "D", "Em", "C", "D", "Em", "Em"],
        "chorus": ["C", "D", "G", "Em", "C", "D", "Em", "Em"],
        "solo": ["Em", "C", "D", "Em", "Em", "C", "D", "B7"],
        "coda": ["C", "D", "Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "heavy metal gallop and guitar lead voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "heavy metal gallop and guitar lead guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "heavy metal gallop and guitar lead guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3.25, 3.5, 4, 4.5, 5, 5.75, 6, 6.5, 7, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.25, 0.2, 0.3, 0.2, 0.3, 0.2, 0.12, 0.25, 0.3, 0.2, 0.3, 0.12, 0.3, 0.2, 0.3, 0.3], "articulation": "palm-mute", "accents": [1, 0.5, 0.75, 0.5, 0.9, 0.55, 0.4, 0.8, 1, 0.5, 0.75, 0.4, 0.9, 0.6, 0.8, 0.95], "pitches": [{"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}], "description": "Drive a low pedal riff into fifth and seventh accents. Keep the palm-muted notes short and the larger riff arrivals open. Original ensemble study, not a recording transcription."},
        {"name": "heavy metal gallop and guitar lead low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3.25, 3.5, 4, 4.5, 5, 5.75, 6, 6.5, 7, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [0.25, 0.2, 0.3, 0.2, 0.3, 0.2, 0.12, 0.25, 0.3, 0.2, 0.3, 0.12, 0.3, 0.2, 0.3, 0.3], "accents": [1, 0.5, 0.75, 0.5, 0.9, 0.55, 0.4, 0.8, 1, 0.5, 0.75, 0.4, 0.9, 0.6, 0.8, 0.95], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Reinforce the guitar pedal riff and its upper accents in the bass register; keep the intervening notes lighter. Original ensemble study, not a recording transcription."},
        {"name": "heavy metal gallop and guitar lead kit", "role": "percussion", "onsets": [0, 0.0, 0.5, 0.5, 0.75, 1, 1.0, 1, 1.5, 1.5, 1.75, 2, 2.0, 2.5, 2.5, 2.75, 3, 3.0, 3, 3.5, 3.5, 3.75, 4, 4.0, 4.5, 4.5, 4.75, 5, 5.0, 5, 5.5, 5.5, 5.75, 6, 6.0, 6.5, 6.5, 6.75, 7, 7.0, 7, 7.5, 7.5, 7.75], "instruments": ["drums"], "hits": ["kick", "ride", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick", "kick", "ride", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick", "kick", "ride", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick", "kick", "ride", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick"], "cycleLength": 2, "accents": [0.92, 0.5, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92, 0.92, 0.5, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92, 0.92, 0.5, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92, 0.92, 0.5, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92], "articulation": "accent", "shortName": "Metal gallop kick", "description": "Practice this two-bar metal gallop kick. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "heavy metal gallop and guitar lead drums cadence fill", "role": "percussion", "onsets": [2, 2.0, 2.5, 2.5, 2.75, 3, 3.0, 3, 3.5, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick"], "accents": [0.92, 0.5, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92], "shortName": "Metal gallop close", "description": "Close with the last two beats of the metal gallop kick; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "power-chord", "riff", "pick", "tight-palm-mute", "alternate-picking", "gallop", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "power-chord", "riff", "pick", "tight-palm-mute", "alternate-picking", "gallop", "accent", "staccato", "legato"],
          "defaultTechnique": "pick",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "power-chord", "riff", "pick", "tight-palm-mute", "alternate-picking", "gallop", "accent", "staccato", "legato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "pick"
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
      "id": "thrash",
      "name": "Thrash",
      "description": "Thrash: thrash palm-muted sixteenths and fast backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Machine-gun palm-muted open-E chug erupting into fast skank-beat thrash riff", "thrash palm-muted sixteenths and fast backbeat"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Thrash: across Metal:", "lightning-fast downpicked palm-muted E-string chugs", "skank beats and fast double-kick flurries", "ferocious barking vocal delivery", "chaotic shredding whammy-bar guitar solos", "accent", "staccato", "legato", "pick", "tight-palm-mute", "chug", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [176, 192],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "F5", "E5", "Bb5"],
        "verse": ["E5", "E5", "F5", "E5", "E5", "E5", "G5", "F#5"],
        "chorus": ["C5", "D5", "E5", "E5", "C5", "D5", "E5", "E5"],
        "coda": ["F5", "Bb5", "E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "thrash palm-muted sixteenths and fast backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thrash palm-muted sixteenths and fast backbeat guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thrash palm-muted sixteenths and fast backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 3.75, 4, 4.25, 4.5, 5, 5.25, 5.5, 5.75, 6, 6.5, 6.75, 7, 7.25, 7.5, 7.75], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14], "articulation": "palm-mute", "accents": [1, 0.4, 0.6, 0.45, 0.85, 0.75, 0.45, 0.95, 0.4, 0.6, 0.45, 0.85, 0.75, 0.45, 1, 0.4, 0.6, 0.85, 0.4, 0.75, 0.45, 0.95, 0.8, 0.4, 0.75, 0.5, 0.85, 0.6], "pitches": [{"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 40, "voicing": "single", "reference": "tonic"}], "description": "Keep fast alternate-picked pedal notes in clear groups, with chromatic and fifth accents marking the two-bar riff. The rests and larger accents define the shape. Original ensemble study, not a recording transcription."},
        {"name": "thrash palm-muted sixteenths and fast backbeat low anchor", "role": "bass", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 3.75, 4, 4.25, 4.5, 5, 5.25, 5.5, 5.75, 6, 6.5, 6.75, 7, 7.25, 7.5, 7.75], "instruments": ["bass"], "cycleLength": 2, "articulation": "pick", "durations": [0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14], "accents": [1, 0.4, 0.6, 0.45, 0.85, 0.75, 0.45, 0.95, 0.4, 0.6, 0.45, 0.85, 0.75, 0.45, 1, 0.4, 0.6, 0.85, 0.4, 0.75, 0.45, 0.95, 0.8, 0.4, 0.75, 0.5, 0.85, 0.6], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Keep the fast bass and rhythm-guitar riff together, including repeated low notes, the chromatic neighbor and the spaces between groups. Original ensemble study, not a recording transcription."},
        {"name": "thrash palm-muted sixteenths and fast backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6, 6.5, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.85], "articulation": "accent", "shortName": "Thrash skank beat", "description": "Practice this two-bar thrash skank beat. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "thrash palm-muted sixteenths and fast backbeat drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "snare", "hat", "kick", "hat", "snare"], "accents": [0.5, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.85], "shortName": "Thrash skank close", "description": "Close with the last two beats of the thrash skank beat; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "pick"
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
      "id": "doom",
      "name": "Doom",
      "description": "Doom: doom slow heavy riff with long sustain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Crushing monolithic down-tuned fuzz chord sustaining infinitely over slow thunderous drum strike", "doom slow heavy riff with long sustain"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Doom: across Metal:", "crushing slow monolithic fuzz/distortion riffs", "deep resonant bass rumble", "lugubrious operatic or mournful clean vocals", "monumental weight and catastrophic tempo", "accent", "staccato", "legato", "riff", "pick", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [54, 70],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "Bb", "A", "Em"],
        "verse": ["Em", "Bb", "A", "Em", "G", "F", "Em", "Em"],
        "chorus": ["C", "B7", "Em", "Em", "C", "B7", "Em", "Em"],
        "coda": ["Bb", "A", "Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "doom slow heavy riff with long sustain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "doom slow heavy riff with long sustain guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "doom slow heavy riff with long sustain guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "doom slow heavy riff with long sustain low anchor", "role": "bass", "onsets": [0, 3.5, 4, 6.75], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [2.8, 0.35, 2.2, 0.9], "accents": [0.95, 0.6, 1, 0.7], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Sustain the heavy tonic pedal through the riff and separate the short fifth pickup from the broader return. Original ensemble study, not a recording transcription."},
        {"name": "doom slow heavy riff with long sustain kit", "role": "percussion", "onsets": [0, 0, 1, 2, 2, 3, 3.5, 4, 4, 5, 6, 6, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "ride", "snare", "ride", "kick", "kick", "ride", "ride", "ride", "snare", "ride", "kick"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92, 0.92, 0.5, 0.5, 0.5, 0.85, 0.5, 0.92], "articulation": "accent", "shortName": "Doom half-time weight", "description": "Practice this two-bar doom half-time weight. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "doom slow heavy riff with long sustain drums cadence fill", "role": "percussion", "onsets": [2, 2, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "snare", "ride", "kick"], "accents": [0.5, 0.85, 0.5, 0.92], "shortName": "Doom half-time close", "description": "Close with the last two beats of the doom half-time weight; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "legato"
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
      "id": "death",
      "name": "Death",
      "description": "Death: death metal tremolo riff and blast drive. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Relentless snare blast beat with down-tuned chromatic tremolo guitar riff and guttural growl", "death metal tremolo riff and blast drive"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Death: across Metal:", "deep guttural death growl vocals", "rapid-fire 16th-note blast beats", "down-tuned tremolo-picked chromatic riffs (D/C/B standard)", "diminished and augmented dissonant solos", "accent", "staccato", "legato", "riff", "pick", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [184, 200],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["B5", "C5", "B5", "F5"],
        "verse": ["B5", "B5", "C5", "B5", "B5", "B5", "F5", "E5"],
        "slam": ["B5", "B5", "B5", "B5", "C5", "B5", "F5", "E5"],
        "coda": ["B5", "C5", "B5", "B5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "death metal tremolo riff and blast drive voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "death metal tremolo riff and blast drive guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "death metal tremolo riff and blast drive guitar accompaniment", "role": "harmony", "onsets": [0, 0.25, 0.5, 0.75, 1.25, 1.5, 2, 2.25, 2.5, 2.75, 3.25, 3.5, 4, 4.25, 4.5, 5, 5.25, 5.5, 6, 6.25, 6.5, 7, 7.25, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13], "articulation": "palm-mute", "accents": [1, 0.4, 0.55, 0.8, 0.45, 0.65, 0.95, 0.5, 0.65, 0.4, 0.8, 0.6, 1, 0.4, 0.7, 0.85, 0.5, 0.65, 0.95, 0.5, 0.7, 0.85, 0.5, 0.8], "pitches": [{"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 38, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 38, "voicing": "single", "reference": "tonic"}], "description": "Alternate tight low-note bursts with angular chromatic answers. Keep the gaps between groups audible instead of sustaining one chord across the riff. Original ensemble study, not a recording transcription."},
        {"name": "death metal tremolo riff and blast drive low anchor", "role": "bass", "onsets": [0, 0.25, 0.5, 0.75, 1.25, 1.5, 2, 2.25, 2.5, 2.75, 3.25, 3.5, 4, 4.25, 4.5, 5, 5.25, 5.5, 6, 6.25, 6.5, 7, 7.25, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "pick", "durations": [0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13, 0.13], "accents": [1, 0.4, 0.55, 0.8, 0.45, 0.65, 0.95, 0.5, 0.65, 0.4, 0.8, 0.6, 1, 0.4, 0.7, 0.85, 0.5, 0.65, 0.95, 0.5, 0.7, 0.85, 0.5, 0.8], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Reinforce the tightly grouped low guitar riff and its chromatic answers, preserving every small rest. Original ensemble study, not a recording transcription."},
        {"name": "death metal tremolo riff and blast drive kit", "role": "percussion", "onsets": [0.0, 0.0, 0.25, 0.5, 0.5, 0.75, 1.0, 1.0, 1.25, 1.5, 1.5, 1.75, 2.0, 2.0, 2.25, 2.5, 2.5, 2.75, 3.0, 3.0, 3.25, 3.5, 3.5, 3.75, 4.0, 4.0, 4.25, 4.5, 4.5, 4.75, 5.0, 5.0, 5.25, 5.5, 5.5, 5.75, 6.0, 6.0, 6.25, 6.5, 6.5, 6.75, 7.0, 7.0, 7.25, 7.5, 7.5, 7.75], "instruments": ["drums"], "hits": ["kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare"], "cycleLength": 2, "accents": [0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85], "articulation": "accent", "shortName": "Death alternating blast", "description": "Practice this two-bar death alternating blast. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "death metal tremolo riff and blast drive drums cadence fill", "role": "percussion", "onsets": [2.0, 2.0, 2.25, 2.5, 2.5, 2.75, 3.0, 3.0, 3.25, 3.5, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare", "kick", "ride", "snare"], "accents": [0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85, 0.92, 0.5, 0.85], "shortName": "Death alternating close", "description": "Close with the last two beats of the death alternating blast; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "riff", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "pick"
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
      "id": "black",
      "name": "Black",
      "description": "Black: black metal high tremolo and continuous blast. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Icy cold tremolo-picked minor chord wall flying over continuous blast beat and piercing shriek", "black metal high tremolo and continuous blast"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Black: across Metal:", "continuous wall of sound tremolo-picked minor/diminished chords", "piercing high-pitched shriek vocals", "raw lo-fi necro production aesthetics", "atmospheric melancholic Nordic melodies", "accent", "staccato", "legato", "pick", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [172, 188],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em", "C", "Am", "B7"],
        "verse": ["Em", "C", "Am", "B7", "Em", "G", "D", "Em"],
        "theme": ["C", "Em", "Am", "Em", "C", "D", "Em", "Em"],
        "coda": ["C", "B7", "Em", "Em"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "black metal high tremolo and continuous blast voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "black metal high tremolo and continuous blast guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "black metal high tremolo and continuous blast guitar accompaniment", "role": "harmony", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21, 0.21], "articulation": "tremolo", "accents": [0.8, 0.4, 0.55, 0.4, 0.75, 0.4, 0.55, 0.4, 0.8, 0.4, 0.55, 0.4, 0.75, 0.4, 0.6, 0.5], "pitches": [{"degree": 1, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 6, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 6, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 3, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 3, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 52, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 52, "voicing": "single", "reference": "tonic"}], "description": "Maintain a connected tremolo-picked modal line with larger accents at the harmonic turns. Let the repeated tones form the phrase rather than adding a stock rock chord rhythm. Original ensemble study, not a recording transcription."},
        {"name": "black metal high tremolo and continuous blast low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "pick", "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "accents": [0.9, 0.55, 0.8, 0.55, 0.85, 0.55, 0.9, 0.65], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 6, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 3, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Support the tremolo guitar melody with a slower modal bass contour, keeping the tonic returns grounded. Original ensemble study, not a recording transcription."},
        {"name": "black metal high tremolo and continuous blast kit", "role": "percussion", "onsets": [0, 0.0, 0.5, 0.5, 1, 1.0, 1.5, 1.5, 2, 2.0, 2.5, 2.5, 3, 3.0, 3.5, 3.5, 4, 4.0, 4.5, 4.5, 5, 5.0, 5.5, 5.5, 6, 6.0, 6.5, 6.5, 7, 7.0, 7.5, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare"], "cycleLength": 2, "accents": [0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85], "articulation": "accent", "shortName": "Black metal cymbal blast", "description": "Practice this two-bar black metal cymbal blast. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "black metal high tremolo and continuous blast drums cadence fill", "role": "percussion", "onsets": [2, 2.0, 2.5, 2.5, 3, 3.0, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["kick", "ride", "ride", "snare", "kick", "ride", "ride", "snare"], "accents": [0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.5, 0.85], "shortName": "Black metal close", "description": "Close with the last two beats of the black metal cymbal blast; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "pick"
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
      "id": "progressive-metal",
      "name": "Progressive Metal",
      "description": "Progressive Metal: progressive metal asymmetric riff and metric accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Djent 8-string polyrhythmic chug executing in 7/8 locked with surgical double-bass drumming", "progressive metal asymmetric riff and metric accents"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Progressive Metal: across Metal:", "complex shifting odd-time signatures (7/8, 11/8, 13/8)", "syncopated palm-muted djent polymetric chugging (8-string guitars)", "virtuosic unison guitar/keyboard shred solos", "dramatic contrast between acoustic beauty and extreme metal roar", "accent", "staccato", "legato", "pick", "tight-palm-mute", "chug", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "7/8",
      "tempo": [128, 144],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm", "Bbmaj7", "Gm7", "A7alt"],
        "verse": ["Dm", "Bbmaj7", "Gm7", "A7alt", "Fmaj7", "Em7b5", "A7alt", "Dm"],
        "chorus": ["Bbmaj7", "C", "Dm", "Am", "Bbmaj7", "C", "Dm", "Dm"],
        "solo": ["Dm", "Eb", "Dm", "Eb", "Gm", "A7alt", "Dm", "Dm"],
        "coda": ["Bbmaj7", "A7alt", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "progressive metal asymmetric riff and metric accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "progressive metal asymmetric riff and metric accents guitar statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45], "articulation": "legato"},
        {"name": "progressive metal asymmetric riff and metric accents guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "progressive metal asymmetric riff and metric accents low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "progressive metal asymmetric riff and metric accents kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "chug", "accent", "staccato", "legato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
          "defaultTechnique": "pick"
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
      "id": "industrial-metal",
      "name": "Industrial Metal",
      "description": "Industrial Metal: industrial metal machine chug and stop accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["industrial metal machine chug and stop accents"],
      "techniques": ["palm-mute", "alternate-picking", "tremolo", "bend", "vibrato", "double-stop", "roll", "Industrial Metal: across Metal:", "accent", "staccato", "legato", "pick", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "A5", "F5", "B5"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "G5", "A5", "E5"],
        "riff": ["E5", "G5", "A5", "E5"],
        "chorus": ["E5", "F5", "E5", "B5"],
        "ending": ["B5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "power-riff",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "riff", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "riff", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "industrial metal machine chug and stop accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal machine chug and stop accents guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal machine chug and stop accents guitar accompaniment", "role": "harmony", "onsets": [0, 0.25, 0.75, 1.5, 2, 2.25, 2.75, 3.5, 4, 4.5, 5.25, 5.5, 6, 6.25, 6.75, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.14, 0.14, 0.2, 0.3, 0.14, 0.14, 0.2, 0.3, 0.2, 0.2, 0.14, 0.2, 0.14, 0.14, 0.2, 0.3], "articulation": "palm-mute", "accents": [1, 0.45, 0.65, 0.85, 0.95, 0.45, 0.75, 0.6, 1, 0.6, 0.45, 0.75, 0.95, 0.45, 0.8, 0.9], "pitches": [{"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 39, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 39, "voicing": "single", "reference": "tonic"}], "description": "Lock a precisely grouped low riff to the machine rhythm, using short paired attacks and clear spaces before each answer. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal machine chug and stop accents low anchor", "role": "bass", "onsets": [0, 0.25, 0.75, 1.5, 2, 2.25, 2.75, 3.5, 4, 4.5, 5.25, 5.5, 6, 6.25, 6.75, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "pick", "durations": [0.14, 0.14, 0.2, 0.3, 0.14, 0.14, 0.2, 0.3, 0.2, 0.2, 0.14, 0.2, 0.14, 0.14, 0.2, 0.3], "accents": [1, 0.45, 0.65, 0.85, 0.95, 0.45, 0.75, 0.6, 1, 0.6, 0.45, 0.75, 0.95, 0.45, 0.8, 0.9], "pitches": [{"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 5, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 2, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 7, "register": 36, "voicing": "single", "reference": "tonic"}, {"degree": 1, "register": 36, "voicing": "single", "reference": "tonic"}], "description": "Match the low machine riff precisely while leaving the short gaps and larger phrase accents audible. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal machine chug and stop accents kit", "role": "percussion", "onsets": [0, 0, 0.25, 1, 1, 1, 1.25, 2, 2.5, 2.75, 3, 3, 3.5, 4, 4, 4.25, 5, 5, 5, 5.25, 6, 6.5, 6.75, 7, 7, 7.5], "instruments": ["drums"], "hits": ["kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "kick", "ride", "kick", "kick", "ride", "snare", "kick", "ride", "kick", "kick", "ride", "snare", "kick"], "cycleLength": 2, "accents": [0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92, 0.5, 0.92, 0.92, 0.5, 0.85, 0.92], "articulation": "accent", "shortName": "Metal machine kick", "description": "Practice this two-bar metal machine kick. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "industrial metal machine chug and stop accents drums cadence fill", "role": "percussion", "onsets": [2, 2.5, 2.75, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "kick", "kick", "ride", "snare", "kick"], "accents": [0.5, 0.92, 0.92, 0.5, 0.85, 0.92], "shortName": "Metal machine close", "description": "Close with the last two beats of the metal machine kick; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
        "bass": ["palm-mute", "pick", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:lead": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "palm-mute",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "guitar:harmony": {
          "allowedTechniques": ["palm-mute", "tremolo", "bend", "vibrato", "double-stop", "pick", "tight-palm-mute", "alternate-picking", "accent", "staccato", "legato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "bass:bass": {
          "allowedTechniques": ["palm-mute", "pick", "accent", "staccato", "legato"],
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
};

/** Metal substyles need their own playable attacks, drum language, and silence.
 * These are reusable instrument studies, not note-for-note song riffs. */
const metalTeachingCells: Record<string, AuthoredCell[]> = {
  'heavy-metal': [
    { name: 'Heavy metal eighth plus two sixteenth gallop on guitar', shortName: 'Gallop riff', role: 'lead', instruments: ['guitar'], onsets: [0, 0.5, 0.75, 1, 1.5, 1.75, 2, 2.5, 2.75, 3, 3.5, 3.75], durations: [0.45, 0.18, 0.18, 0.45, 0.18, 0.18, 0.45, 0.18, 0.18, 0.45, 0.18, 0.18], articulation: 'palm-mute', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 2, description: 'Practice the long-short-short gallop on a steady quarter-note pulse; keep the two short pickups even.' },
    { name: 'Heavy metal sustained twin lead harmony', shortName: 'Twin-lead harmony', role: 'harmony', instruments: ['guitar'], onsets: [0, 1, 2, 3], durations: [0.85, 0.85, 0.85, 0.85], articulation: 'legato', sectionUsage: ['riff', 'chorus', 'solo'], difficulty: 3, description: 'Hold the second guitar line under the lead so the harmonized phrase stays clear between riff attacks.' },
    { name: 'Heavy metal bass gallop exercise', shortName: 'Gallop bass', role: 'bass', instruments: ['bass'], onsets: [0, 0.5, 0.75, 1, 1.5, 1.75, 2, 2.5, 2.75, 3, 3.5, 3.75], durations: [0.45, 0.18, 0.18, 0.45, 0.18, 0.18, 0.45, 0.18, 0.18, 0.45, 0.18, 0.18], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 2, description: 'Lock the bass gallop to the kick while keeping each short note distinct.' },
    { name: 'Heavy metal ride cymbal and backbeat', shortName: 'Ride backbeat', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 0.5, 1, 1, 1.5, 2, 2, 2.5, 3, 3, 3.5], hits: ['kick', 'ride', 'ride', 'snare', 'ride', 'ride', 'kick', 'ride', 'ride', 'snare', 'ride', 'ride'], accents: [0.85, 0.5, 0.45, 0.85, 0.5, 0.45, 0.85, 0.5, 0.45, 0.85, 0.5, 0.45], sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 2, description: 'Keep the ride moving in eighth notes while the kick marks one and three and the snare answers on two and four.' },
  ],
  thrash: [
    { name: 'Thrash alternate-picked palm-muted sixteenths', shortName: 'Palm-muted chug', role: 'lead', instruments: ['guitar'], onsets: Array.from({ length: 16 }, (_, i) => i * 0.25), durations: Array.from({ length: 16 }, () => 0.18), accents: [0.95, 0.35, 0.5, 0.35, 0.8, 0.35, 0.5, 0.35, 0.9, 0.35, 0.5, 0.35, 0.8, 0.35, 0.5, 0.35], articulation: 'palm-mute', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 3, description: 'Alternate-pick even sixteenths, then accent the riff groups without letting the muted notes blur.' },
    { name: 'Thrash power chord accents', shortName: 'Power-chord accents', role: 'harmony', instruments: ['guitar'], onsets: [0, 1.5, 2, 3], durations: [0.25, 0.25, 0.25, 0.25], accents: [0.95, 0.7, 0.85, 0.7], articulation: 'staccato', sectionUsage: ['riff', 'chorus', 'breakdown'], difficulty: 2, description: 'Place clipped power-chord hits against the faster palm-muted line; leave the spaces intact.' },
    { name: 'Thrash bass eighth note riff anchor', shortName: 'Thrash bass pulse', role: 'bass', instruments: ['bass'], onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], durations: [0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 2, description: 'Anchor the riff with tight picked eighth notes and follow the guitar accents.' },
    { name: 'Thrash skank beat with ride and backbeat', shortName: 'Skank beat', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 0.5, 1, 1, 1.5, 2, 2, 2.5, 3, 3, 3.5], hits: ['kick', 'ride', 'ride', 'snare', 'ride', 'ride', 'kick', 'ride', 'ride', 'snare', 'ride', 'ride'], accents: [0.95, 0.5, 0.45, 0.95, 0.5, 0.45, 0.9, 0.5, 0.45, 0.95, 0.5, 0.45], sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 3, description: 'Drive the kick on one and three, place the snare on two and four, and keep the ride eighths even.' },
    { name: 'Thrash half time kick snare break', shortName: 'Half-time break', role: 'percussion', instruments: ['drums'], onsets: [0, 2], hits: ['kick', 'snare'], durations: [0.1, 0.1], accents: [0.95, 0.9], sectionUsage: ['breakdown'], difficulty: 2, description: 'Drop to a kick on one and snare on three so the fast riff can breathe before the solo return.' },
  ],
  doom: [
    { name: 'Doom guitar slow power chord sustain', shortName: 'Doom power chord', role: 'lead', instruments: ['guitar'], onsets: [0, 2], durations: [1.8, 1.8], articulation: 'legato', sectionUsage: ['riff', 'verse', 'chorus', 'bridge'], difficulty: 1, description: 'Let each low power chord ring through the bar; mute together before the next weighty attack.' },
    { name: 'Doom upper guitar chord answer', shortName: 'Sustained answer', role: 'harmony', instruments: ['guitar'], onsets: [1, 3], durations: [0.9, 0.9], articulation: 'legato', sectionUsage: ['riff', 'chorus', 'bridge'], difficulty: 2, description: 'Answer the low riff with two held upper-register chords, keeping the slow pulse spacious.' },
    { name: 'Doom bass held root and fifth', shortName: 'Doom bass weight', role: 'bass', instruments: ['bass'], onsets: [0, 2.5], durations: [2.25, 1.1], articulation: 'legato', sectionUsage: ['riff', 'verse', 'chorus', 'bridge'], difficulty: 1, description: 'Hold the low anchor under the guitar and release before the next chord change.' },
    { name: 'Doom half time kick snare and crash', shortName: 'Half-time doom', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 2], hits: ['crash', 'kick', 'snare'], durations: [0.1, 0.1, 0.1], accents: [0.95, 0.85, 0.9], sectionUsage: ['riff', 'verse', 'chorus', 'bridge'], difficulty: 1, description: 'Use a slow kick on beat one and a firm snare on beat three; leave the rest of the bar open.' },
  ],
  death: [
    { name: 'Death metal tremolo picked sixteenth riff', shortName: 'Tremolo riff', role: 'lead', instruments: ['guitar'], onsets: Array.from({ length: 16 }, (_, i) => i * 0.25), durations: Array.from({ length: 16 }, () => 0.2), articulation: 'tremolo', sectionUsage: ['riff', 'verse', 'chorus', 'solo'], difficulty: 4, description: 'Keep the tremolo-picked line continuous across the bar and make each chord-tone change land with the riff.' },
    { name: 'Death metal clipped chromatic guitar support', shortName: 'Chromatic support', role: 'harmony', instruments: ['guitar'], onsets: [0, 1.5, 2.5, 3], durations: [0.25, 0.25, 0.25, 0.25], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 3, description: 'Reinforce the riff with short power-chord attacks and leave room for the lead tremolo line.' },
    { name: 'Death metal picked eighth bass pedal', shortName: 'Low pedal', role: 'bass', instruments: ['bass'], onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], durations: [0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus', 'breakdown'], difficulty: 3, description: 'Keep a picked low-string pulse under the guitar, tightening the note ends with the kick.' },
    { name: 'Death metal alternating kick snare blast beat', shortName: 'Blast beat', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 0.5, 0.5, 1, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3.5, 3.5], hits: ['kick', 'ride', 'snare', 'ride', 'kick', 'ride', 'snare', 'ride', 'kick', 'ride', 'snare', 'ride', 'kick', 'ride', 'snare', 'ride'], accents: [0.9, 0.55, 0.82, 0.5, 0.9, 0.55, 0.82, 0.5, 0.9, 0.55, 0.82, 0.5, 0.9, 0.55, 0.82, 0.5], sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 4, description: 'Alternate kick and snare on eighth notes while the ride marks the same fast pulse.' },
    { name: 'Death metal half time kick snare breakdown', shortName: 'Death half-time', role: 'percussion', instruments: ['drums'], onsets: [0, 2], hits: ['kick', 'snare'], durations: [0.1, 0.1], accents: [0.95, 0.9], sectionUsage: ['breakdown'], difficulty: 2, description: 'Pull the blast back to a half-time kick and snare, then return to the faster attack together.' },
  ],
  black: [
    { name: 'Black metal continuous tremolo picked guitar line', shortName: 'Tremolo wall', role: 'lead', instruments: ['guitar'], onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], durations: [0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42], articulation: 'tremolo', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 3, description: 'Keep the tremolo eighths unbroken so the melody rides over the fast drum pulse.' },
    { name: 'Black metal sustained harmony bed', shortName: 'Frost chord bed', role: 'harmony', instruments: ['guitar'], onsets: [0, 2], durations: [1.8, 1.8], articulation: 'legato', sectionUsage: ['riff', 'verse', 'chorus', 'breakdown'], difficulty: 2, description: 'Hold a second guitar chord under the tremolo line; let the register and sustain create the cold width.' },
    { name: 'Black metal low root pedal', shortName: 'Black bass pedal', role: 'bass', instruments: ['bass'], onsets: [0, 1, 2, 3], durations: [0.8, 0.8, 0.8, 0.8], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 2, description: 'Repeat the low root steadily under the moving guitar line without adding a separate melodic hook.' },
    { name: 'Black metal kick snare and cymbal blast', shortName: 'Cymbal blast', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 0.5, 0.5, 1, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3.5, 3.5], hits: ['kick', 'crash', 'snare', 'ride', 'kick', 'ride', 'snare', 'ride', 'kick', 'crash', 'snare', 'ride', 'kick', 'ride', 'snare', 'ride'], accents: [0.9, 0.7, 0.82, 0.5, 0.9, 0.5, 0.82, 0.5, 0.9, 0.7, 0.82, 0.5, 0.9, 0.5, 0.82, 0.5], sectionUsage: ['riff', 'verse', 'chorus'], difficulty: 4, description: 'Alternate kick and snare rapidly beneath a nearly continuous cymbal pulse; reserve crashes for phrase starts.' },
  ],
  'progressive-metal': [
    { name: 'Progressive metal seven eight grouped guitar chug', shortName: '7/8 chug', role: 'lead', instruments: ['guitar'], onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3], durations: [0.22, 0.22, 0.22, 0.22, 0.22, 0.22, 0.22], accents: [0.95, 0.35, 0.75, 0.35, 0.85, 0.4, 0.4], articulation: 'palm-mute', sectionUsage: ['riff', 'verse', 'chorus', 'build'], difficulty: 4, description: 'Practice the seven eighth notes in a 2+2+3 grouping; accent each group start and keep the other chugs light.' },
    { name: 'Progressive metal seven eight chord groups', shortName: '7/8 chord groups', role: 'harmony', instruments: ['guitar'], onsets: [0, 1, 2], durations: [0.45, 0.45, 0.7], accents: [0.95, 0.72, 0.85], articulation: 'staccato', sectionUsage: ['riff', 'chorus', 'bridge', 'climax'], difficulty: 3, description: 'Mark the 2+2+3 group boundaries with clipped chord attacks; count the final three-eighth group clearly.' },
    { name: 'Progressive metal seven eight bass group accents', shortName: '7/8 bass accents', role: 'bass', instruments: ['bass'], onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3], durations: [0.35, 0.25, 0.35, 0.25, 0.35, 0.25, 0.25], accents: [0.95, 0.35, 0.75, 0.35, 0.85, 0.4, 0.4], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus', 'build'], difficulty: 3, description: 'Double the guitar grouping in the low register and make each shifting accent land with the kick.' },
    { name: 'Progressive metal seven eight drum accent map', shortName: '7/8 drum map', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 0.5, 1, 1, 1.5, 2, 2, 2.5, 3], hits: ['kick', 'ride', 'ride', 'snare', 'ride', 'ride', 'kick', 'ride', 'ride', 'snare'], accents: [0.95, 0.5, 0.4, 0.85, 0.5, 0.4, 0.9, 0.5, 0.4, 0.8], sectionUsage: ['riff', 'verse', 'chorus', 'build'], difficulty: 4, description: 'Keep the ride on all seven eighths while the kick and snare make the 2+2+3 meter audible.' },
  ],
  'industrial-metal': [
    { name: 'Industrial metal synchronized machine chug', shortName: 'Machine chug', role: 'lead', instruments: ['guitar'], onsets: [0, 0.25, 1, 1.25, 2.5, 2.75, 3.5], durations: [0.18, 0.18, 0.18, 0.18, 0.18, 0.18, 0.18], accents: [0.95, 0.45, 0.75, 0.4, 0.9, 0.45, 0.8], articulation: 'palm-mute', sectionUsage: ['riff', 'verse', 'chorus', 'breakdown'], difficulty: 3, description: 'Use short low-string attacks and leave the gaps silent; the clipped starts make the riff feel machine-locked.' },
    { name: 'Industrial metal synchronized stop accents', shortName: 'Machine stop hits', role: 'harmony', instruments: ['guitar'], onsets: [0, 1.5, 2.5], durations: [0.15, 0.15, 0.15], accents: [0.95, 0.8, 0.9], articulation: 'staccato', sectionUsage: ['riff', 'chorus', 'hit'], difficulty: 3, description: 'Land clipped chord hits with the low riff, then mute together to make the following gap audible.' },
    { name: 'Industrial metal single lead hit', shortName: 'Machine lead hit', role: 'lead', instruments: ['guitar'], onsets: [0], durations: [0.15], accents: [1], articulation: 'staccato', sectionUsage: ['hit'], difficulty: 1, description: 'Play one synchronized low-string accent, then stop the sound cleanly.' },
    { name: 'Industrial metal single chord hit', shortName: 'Machine chord hit', role: 'harmony', instruments: ['guitar'], onsets: [0], durations: [0.15], accents: [1], articulation: 'staccato', sectionUsage: ['hit'], difficulty: 1, description: 'Join the lead on one clipped chord accent and mute immediately.' },
    { name: 'Industrial metal bass machine pulse', shortName: 'Machine bass pulse', role: 'bass', instruments: ['bass'], onsets: [0, 0.25, 1, 1.25, 2.5, 2.75, 3.5], durations: [0.18, 0.18, 0.18, 0.18, 0.18, 0.18, 0.18], accents: [0.95, 0.45, 0.75, 0.4, 0.9, 0.45, 0.8], articulation: 'staccato', sectionUsage: ['riff', 'verse', 'chorus', 'breakdown'], difficulty: 3, description: 'Double the guitar rhythm in the low register, with exact shared stops and no extra walking notes.' },
    { name: 'Industrial metal single bass hit', shortName: 'Machine bass hit', role: 'bass', instruments: ['bass'], onsets: [0], durations: [0.15], accents: [1], articulation: 'staccato', sectionUsage: ['hit'], difficulty: 1, description: 'Match the single band accent in the low register, then mute with the guitars.' },
    { name: 'Industrial metal mechanical kick snare stomp', shortName: 'Mechanical stomp', role: 'percussion', instruments: ['drums'], onsets: [0, 0, 1, 1, 2, 2, 3, 3], hits: ['kick', 'crash', 'snare', 'ride', 'kick', 'crash', 'snare', 'ride'], accents: [0.95, 0.7, 0.85, 0.5, 0.9, 0.65, 0.9, 0.5], sectionUsage: ['riff', 'verse', 'chorus', 'hit'], difficulty: 2, description: 'Keep the kick and snare mechanically square, with cymbal attacks only on the marked accent beats.' },
    { name: 'Industrial metal single drum hit', shortName: 'Machine drum hit', role: 'percussion', instruments: ['drums'], onsets: [0, 0], hits: ['kick', 'crash'], accents: [1, 0.85], durations: [0.1, 0.1], sectionUsage: ['hit'], difficulty: 1, description: 'Land one kick and crash together, then leave the whole following bar silent.' },
  ],
};

for (const [styleId, cells] of Object.entries(metalTeachingCells)) {
  const style = GENRE_PACK_BASE.styles.find(candidate => candidate.id === styleId);
  if (!style) throw new Error(`Missing Metal style for teaching cells: ${styleId}`);
  style.cells.push(...cells);
}

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells(GENRE_PACK_BASE, [
  { instrumentId: 'synth', role: 'texture' },
  { instrumentId: 'sampler', role: 'percussion' },
  { instrumentId: 'piano', role: 'harmony' },
  { instrumentId: 'turntable', role: 'percussion' },
  { instrumentId: 'organ', role: 'harmony' },
]);
