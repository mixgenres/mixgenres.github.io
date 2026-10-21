import type { GenrePackInput } from '../_shared/genrePack';
import { addCatalogSupportCells } from '../_shared/catalogSupport';

export const GENRE_PACK: GenrePackInput = addCatalogSupportCells({
  "id": "steppe",
  "name": "Steppe",
  "family": "Central Asia / Mongolia",
  "color": "#694d56",
  "description": "Steppe is an independent musical world. Central Asia / Mongolia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Morin Khuur",
  "meter": "4/4",
  "tempo": [56, 72],
  "instruments": ["morin-khuur", "voice", "dombra", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["morin-khuur"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5", "D", "G", "A", "Bm"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["morin khuur long bowed melody and drone", "khoomei sustained fundamental and overtone melody", "sygyt high overtone line above steady fundamental", "kargyraa low throat drone and resonant overtones", "dombra alternating plucked kui and rapid ornaments", "steppe folk rock bowed hook and band backbeat"],
  "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "morin-khuur",
      "name": "Morin Khuur",
      "description": "Morin Khuur: morin khuur long bowed melody and drone. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["morin khuur long bowed melody and drone"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "legato", "staccato", "tenuto", "accent"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "morin-khuur", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "morin khuur long bowed melody and drone morin-khuur statement", "role": "lead", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "morin-khuur:lead": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "khoomei",
      "name": "Khöömei",
      "description": "Khöömei: khoomei sustained fundamental and overtone melody. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["khoomei sustained fundamental and overtone melody"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "khoomei sustained fundamental and overtone melody voice statement", "role": "lead", "onsets": [0], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "Khoomei alternating fundamental and overtone focus", "shortName": "Khoomei overtone answer", "description": "Hold the home pitch, lift the guide to the fifth, then step down through the third and second before returning to the home pitch. The voice patch marks pitch focus only; it does not reproduce throat-singing timbre or simultaneous vocal harmonics.", "role": "lead", "onsets": [0, 1, 2.5, 3.25, 4, 5.5, 6.5, 7.5], "instruments": ["voice"], "cycleLength": 2, "durations": [1.1, 0.55, 0.62, 0.45, 0.9, 0.58, 0.48, 0.7], "pitches": [{"degree": 1, "register": 62}, {"degree": 4, "register": 62}, {"degree": 3, "register": 62}, {"degree": 2, "register": 62}, {"degree": 1, "register": 62}, {"degree": 4, "register": 62}, {"degree": 2, "register": 62}, {"degree": 1, "register": 62}], "accents": [0.9, 0.82, 0.62, 0.5, 0.86, 0.8, 0.54, 0.92], "articulation": "legato", "sectionUsage": ["response", "variation"], "arrangementVariation": true},
        {"name": "khoomei sustained fundamental and overtone melody morin-khuur accompaniment", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "sygyt",
      "name": "Sygyt",
      "description": "Sygyt: sygyt high overtone line above steady fundamental. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["sygyt high overtone line above steady fundamental"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [54, 70],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Sygyt overtone melody above a steady fundamental", "shortName": "Sygyt overtone phrase", "description": "Keep the morin-khuur's low fundamental steady while the vocal guide traces a clear high overtone path. Rise from the tonic through the fifth, return through the third, and leave a breath gap before the next two-bar phrase.", "role": "lead", "onsets": [0, 1, 1.75, 2.5, 3.25, 4.5, 5.25, 6.25, 7.25], "instruments": ["voice"], "cycleLength": 2, "durations": [0.72, 0.4, 0.4, 0.62, 0.44, 0.62, 0.42, 0.58, 0.52], "pitches": [{"degree": 1, "register": 74}, {"degree": 3, "register": 74}, {"degree": 4, "register": 74}, {"degree": 3, "register": 74}, {"degree": 2, "register": 74}, {"degree": 1, "register": 74}, {"degree": 3, "register": 74}, {"degree": 4, "register": 74}, {"degree": 1, "register": 74}], "accents": [0.9, 0.58, 0.78, 0.82, 0.56, 0.86, 0.58, 0.76, 0.92], "articulation": "legato"},
        {"name": "Sygyt returning overtone variation", "shortName": "Sygyt overtone variation", "description": "Vary the returning whistle phrase with an earlier rise to the fifth and a descending answer. Keep each note separate enough for the high overtone to speak, then resolve to the same tonic over the unchanged drone.", "role": "lead", "onsets": [0, 0.75, 1.5, 2.25, 3, 4, 4.75, 5.5, 6.5, 7.25], "instruments": ["voice"], "cycleLength": 2, "durations": [0.5, 0.38, 0.48, 0.46, 0.68, 0.58, 0.4, 0.48, 0.54, 0.5], "pitches": [{"degree": 1, "register": 74}, {"degree": 3, "register": 74}, {"degree": 4, "register": 74}, {"degree": 3, "register": 74}, {"degree": 1, "register": 74}, {"degree": 4, "register": 74}, {"degree": 3, "register": 74}, {"degree": 2, "register": 74}, {"degree": 3, "register": 74}, {"degree": 1, "register": 74}], "accents": [0.86, 0.58, 0.8, 0.56, 0.92, 0.9, 0.62, 0.54, 0.7, 0.88], "articulation": "legato", "sectionUsage": ["whistle", "variation", "solo"], "arrangementVariation": true},
        {"name": "Sygyt descending phrase release", "shortName": "Sygyt release", "description": "Let the high overtone fall through the fifth and third to the tonic, then release the voice cleanly while the morin-khuur lets the fundamental ring into silence.", "role": "lead", "onsets": [0, 1, 2.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.82, 0.72, 1.05], "pitches": [{"degree": 4, "register": 74}, {"degree": 3, "register": 74}, {"degree": 1, "register": 74}], "accents": [0.82, 0.62, 0.92], "phraseEnd": true, "sectionUsage": ["cadence", "ending", "closing"], "articulation": "legato"},
        {"name": "sygyt high overtone line above steady fundamental morin-khuur accompaniment", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "kargyraa",
      "name": "Kargyraa",
      "description": "Kargyraa: a low throat-sung fundamental with a rough, resonant subharmonic quality. Shape the vowel resonance around the low tone; do not turn it into the high whistle line associated with sygyt. This MIDI voice part is a low-pitch learning guide, not a throat-singing sound model.",
      "patterns": ["kargyraa low throat drone and resonant overtones"],
      "techniques": ["arco", "throat-singing", "overtones", "accent", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kargyraa low throat drone and resonant overtones voice statement", "shortName": "Kargyraa low phrase", "description": "Keep the pitch guide in a low register. Let the fundamental settle, touch the fifth, and return with small breath gaps between long tones. The GM Voice Oohs patch only marks pitch and timing; it does not reproduce Kargyraa subharmonics or vocal roughness.", "role": "lead", "onsets": [0, 2.5, 4.5, 6.75], "instruments": ["voice"], "cycleLength": 2, "durations": [2.1, 1.45, 1.9, 1.0], "pitches": [{"degree": 1, "register": 38}, {"degree": 1, "register": 38}, {"degree": 5, "register": 38}, {"degree": 1, "register": 38}], "accents": [0.92, 0.66, 0.82, 0.94], "microtiming": [0, 14, -7, 20], "articulation": "legato"},
        {"name": "kargyraa low fundamental and returning resonance variation", "shortName": "Kargyraa low variation", "description": "Vary the low line with one measured rise to the fifth and a descending return through the third. Keep the contour in the singer's low register, leave air after the held tones, and avoid a bright, high overtone whistle.", "role": "lead", "onsets": [0, 1.75, 3.5, 5.25, 7], "instruments": ["voice"], "cycleLength": 2, "durations": [1.5, 1.3, 1.25, 1.3, 0.75], "pitches": [{"degree": 1, "register": 38}, {"degree": 5, "register": 38}, {"degree": 3, "register": 38}, {"degree": 5, "register": 38}, {"degree": 1, "register": 38}], "accents": [0.9, 0.74, 0.58, 0.8, 0.96], "microtiming": [0, 12, -9, 16, -3], "articulation": "legato", "sectionUsage": ["return", "variation", "solo"], "arrangementVariation": true},
        {"name": "kargyraa low throat drone and resonant overtones voice cadence fill", "shortName": "Kargyraa close", "description": "Touch the fifth briefly, settle on the low home pitch, then leave the final resonance to ring. The phrase closes through sustained low tones rather than a quick ornamental run.", "role": "lead", "onsets": [0, 2.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.4, 1.8], "pitches": [{"degree": 5, "register": 38}, {"degree": 1, "register": 38}], "accents": [0.78, 1], "phraseEnd": true, "articulation": "legato"},
        {"name": "kargyraa low throat drone and resonant overtones morin-khuur accompaniment", "shortName": "Low morin drone", "description": "Hold the low modal root beneath the voice and let it carry across the bar. The bowed instrument supports the singer; it does not imitate the throat-sung overtones.", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "pitches": [{"degree": 1, "register": 50}], "accents": [0.62], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "legato"],
          "defaultTechnique": "legato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"texture":0},"roleWidth":{"lead":0.16,"texture":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"texture":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.42,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","texture":"harmony"}}
      }
    },
    {
      "id": "dombra",
      "name": "Dombra",
      "description": "Dombra: dombra alternating plucked kui and rapid ornaments. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dombra alternating plucked kui and rapid ornaments"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["dombra"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "dombra", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dombra alternating plucked kui and rapid ornaments dombra statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["dombra"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "dombra": ["tremolo", "accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "dombra:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "folk-rock-fusion",
      "name": "Folk-Rock Fusion",
      "description": "Folk-Rock Fusion: steppe folk rock bowed hook and band backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["steppe folk rock bowed hook and band backbeat"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto", "harmonic", "ghost", "open", "roll"],
      "harmony": ["D", "G", "A", "Bm"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice", "morin-khuur"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "verse": ["D", "G", "D", "A"],
        "chorus": ["Bm", "G", "D", "A"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "morin-khuur", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "steppe folk rock bowed hook and band backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "steppe folk rock bowed hook and band backbeat morin-khuur statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "steppe folk rock bowed hook and band backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5, 4, 5, 5.5, 6.5, 7.5], "instruments": ["guitar"], "cycleLength": 2, "durations": [0.35, 0.25, 0.3, 0.4, 0.2, 0.3, 0.55, 0.3, 0.25, 0.4, 0.35], "articulation": "pick", "accents": [0.9, 0.5, 0.7, 0.85, 0.5, 0.75, 0.95, 0.5, 0.7, 0.85, 0.8], "pitches": [{"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"voicing": "chord", "register": 48}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"voicing": "chord", "register": 48}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"voicing": "chord", "register": 48}, {"register": 48, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"voicing": "chord", "register": 48}], "description": "Keep a low drone-and-fifth guitar figure around the bowed melody, with a lighter chord response in each bar. Original ensemble study, not a recording transcription."},
        {"name": "steppe folk rock bowed hook and band backbeat low anchor", "role": "bass", "onsets": [0, 1.5, 2.5, 3.5, 4, 5.5, 6.5, 7.5], "instruments": ["bass"], "cycleLength": 2, "articulation": "fingerstyle", "durations": [1, 0.65, 0.6, 0.3, 1, 0.65, 0.6, 0.3], "accents": [0.95, 0.65, 0.8, 0.55, 1, 0.65, 0.75, 0.9], "pitches": [{"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 9}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 7}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 4}, {"register": 36, "voicing": "single", "reference": "tonic", "semitoneOffset": 0}], "description": "Keep the modal low drone as the rock anchor and let the fifth and upper answer ring under the bowed line. Original ensemble study, not a recording transcription."},
        {"name": "steppe folk rock bowed hook and band backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 4.5, 5.0, 5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Steppe rock hoofbeat", "description": "Practice this two-bar steppe rock hoofbeat. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "steppe folk rock bowed hook and band backbeat drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Steppe rock close", "description": "Close with the last two beats of the steppe rock hoofbeat; keep the spaces clear and land the next phrase together."}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
        "guitar": ["tremolo", "harmonic", "vibrato", "accent", "staccato", "legato"],
        "bass": ["harmonic", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:lead": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "harmonic", "vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["harmonic", "accent", "staccato", "legato"],
          "defaultTechnique": "harmonic"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
}, [
  { instrumentId: 'flute', role: 'lead' },
  { instrumentId: 'frame-drum', role: 'percussion' },
  { instrumentId: 'khomus', role: 'lead' },
  { instrumentId: 'tovshuur', role: 'lead' },
  { instrumentId: 'yatga', role: 'harmony' },
]);
