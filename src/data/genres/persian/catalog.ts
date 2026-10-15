import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "persian",
  "name": "Persian",
  "family": "Iran",
  "color": "#40c47a",
  "description": "Persian is an independent musical world. Iran idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Dastgah",
  "meter": "4/4",
  "tempo": [72, 88],
  "instruments": ["voice", "tar", "santur", "tombak", "setar", "kamancheh", "string-ensemble", "cello"],
  "roles": {
    "lead": ["voice", "tar"],
    "harmony": ["santur"],
    "percussion": ["tombak"]
  },
  "pitchSystem": "Persian dastgah and radif: Shur-centered modal study with approximate koron inflection; gushe contour and modal arrival lead the melody, not a Western chord progression.",
  "tuningSystem": "12-tet",
  "scales": ["dastgah-shur", "avaz-dashti"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["Shur daramad motif and rising gushe", "setar radif gushe sequence and forud descent", "Dashti avaz vocal breath and tar reply", "tar chaharmezrab plectrum cycle", "kamancheh and string quartet chamber dialogue"],
  "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "dastgah",
      "name": "Dastgah",
      "description": "Dastgah Shur study: establish the modal center in daramad, climb through contrasting gusheh, then return by forud. Quarter-flat inflection and changing register shape the line; the D5 symbol is only a playback anchor.",
      "patterns": ["Shur daramad motif and rising gushe"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "dastgah-shur",
      "tuningSystem": "persian-shur",
      "roles": {
        "lead": ["voice", "tar"],
        "harmony": ["santur"],
        "percussion": ["tombak"]
      },
      "progressions": {
        "pishdaramad": ["D5", "D5"],
        "daramad": ["D5", "D5"],
        "avaz": ["D5", "D5"],
        "forud": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pishdaramad", "bars": 4},
        {"label": "daramad", "bars": 8},
        {"label": "gushe", "bars": 8},
        {"label": "avaz", "bars": 8, "soloInstrumentId": "voice", "soloMode": "unaccompanied"},
        {"label": "chaharmezrab", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Shur daramad voice breath phrase", "shortName": "Vocal breath line", "description": "Shape a text-led line in long and short breaths, leaving a clear gap before the tar reply. Use the Shur pitch inflections as melodic destinations, not as a repeated beat pattern.", "role": "lead", "onsets": [0, 1.25, 2.75, 5.5], "instruments": ["voice"], "cycleLength": 2, "durations": [1.0, 1.35, 1.7, 1.0], "pitches": [{"degree": 1, "register": 62}, {"degree": 2, "register": 62}, {"degree": 4, "register": 62}, {"degree": 3, "register": 62}], "microtiming": [0, 12, -8, 16], "articulation": "legato", "sectionUsage": ["daramad", "gushe"]},
        {"name": "Shur forud vocal descent", "shortName": "Vocal forud", "description": "Descend toward the modal home in a short, connected forud. Let the last note settle before the next ensemble entrance.", "role": "lead", "onsets": [6, 6.5, 7, 7.5], "instruments": ["voice"], "cycleLength": 2, "durations": [0.4, 0.4, 0.75, 0.4], "pitches": [{"degree": 4, "register": 62}, {"degree": 3, "register": 62}, {"degree": 2, "register": 62}, {"degree": 1, "register": 62}], "articulation": "ornament", "phraseEnd": true, "sectionUsage": ["forud", "ending"]},
        {"name": "Shur tar gushe answer", "shortName": "Tar reply", "description": "Answer the sung motif in a higher register, then leave space rather than shadowing the whole vocal phrase.", "role": "lead", "onsets": [1.5, 3.5, 6.25], "instruments": ["tar"], "cycleLength": 2, "durations": [0.55, 0.75, 0.45], "pitches": [{"degree": 5, "register": 66}, {"degree": 4, "register": 66}, {"degree": 2, "register": 66}], "articulations": ["accent", "legato", "ornament"], "sectionUsage": ["gushe", "response"]},
        {"name": "Shur tar chaharmezrab plectrum cycle", "shortName": "Tar chaharmezrab", "description": "Practice the fast A A V A A V plectrum grouping in a bright rising-and-falling scale figure. Keep the lighter alternate strokes audible but below the down-pick accents.", "role": "lead", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.25], "instruments": ["tar"], "cycleLength": 1, "durations": [0.18, 0.18, 0.18, 0.18, 0.18, 0.18], "accents": [0.96, 0.76, 0.48, 0.88, 0.72, 0.44], "pitches": [{"degree": 1, "register": 66}, {"degree": 2, "register": 66}, {"degree": 3, "register": 66}, {"degree": 4, "register": 66}, {"degree": 3, "register": 66}, {"degree": 2, "register": 66}], "articulations": ["accent", "staccato", "staccato", "accent", "staccato", "staccato"], "sectionUsage": ["chaharmezrab", "solo"]},
        {"name": "Shur santur measured phrase answer", "shortName": "Santur answer", "description": "Use two resonant notes to answer a phrase in the measured opening; do not turn the santur into a constant Western chord strum.", "role": "harmony", "onsets": [1.5, 3], "instruments": ["santur"], "cycleLength": 1, "durations": [0.8, 0.65], "pitches": [{"degree": 5, "register": 70, "voicing": "single"}, {"degree": 3, "register": 70, "voicing": "single"}], "articulation": "tenuto", "sectionUsage": ["pishdaramad", "gushe"]},
        {"name": "Shur tombak measured cycle", "shortName": "Tombak cycle", "description": "Use a weighted low stroke, a light ghost, then a hand-slap answer. Keep the vocal avaz and tar chaharmezrab unaccompanied.", "role": "percussion", "onsets": [0, 1.5, 3], "instruments": ["tombak"], "cycleLength": 1, "durations": [0.3, 0.18, 0.28], "accents": [0.92, 0.42, 0.74], "articulations": ["open", "ghost", "slap"], "sectionUsage": ["pishdaramad", "daramad"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "tar": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "santur": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
        "tombak": ["roll", "accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "tar:lead": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "santur:harmony": {
          "allowedTechniques": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tombak:percussion": {
          "allowedTechniques": ["roll", "accent", "open", "slap", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "radif",
      "name": "Radif on Setar",
      "description": "A Shur radif lesson on setar: learn the daramad, connect distinct gusheh phrases, and hear the forud return. The radif is a repertoire for recall and variation, not a repeating drum-backed song loop.",
      "patterns": ["setar radif gushe sequence and forud descent"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "dastgah-shur",
      "tuningSystem": "persian-shur",
      "roles": {
        "lead": ["setar"]
      },
      "progressions": {
        "daramad": ["D5", "D5"],
        "lower-gusheh": ["D5", "D5"],
        "development": ["D5", "D5"],
        "forud": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "daramad", "bars": 4, "soloInstrumentId": "setar", "soloMode": "unaccompanied"},
        {"label": "lower-gusheh", "bars": 4, "soloInstrumentId": "setar", "soloMode": "unaccompanied"},
        {"label": "gushe-variation", "bars": 4, "soloInstrumentId": "setar", "soloMode": "unaccompanied"},
        {"label": "upper-gusheh", "bars": 4, "soloInstrumentId": "setar", "soloMode": "unaccompanied"},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "setar radif daramad motif", "shortName": "Setar daramad", "description": "State a compact Shur motif, leave a breath, then recall it in a slightly higher register. Keep the motif recognizable while varying its ornament by ear.", "role": "lead", "onsets": [0, 1.25, 3, 5.5], "instruments": ["setar"], "cycleLength": 2, "durations": [0.75, 0.45, 1.1, 0.65], "pitches": [{"degree": 1, "register": 62}, {"degree": 2, "register": 62}, {"degree": 4, "register": 62}, {"degree": 3, "register": 74}], "articulations": ["accent", "ornament", "legato", "vibrato"], "sectionUsage": ["daramad", "lower-gusheh"]},
        {"name": "setar radif gushe answer", "shortName": "Gushe answer", "description": "Connect the remembered motif to a contrasting gushe contour. Move upward, pause on its important tone, and let the ending turn back down.", "role": "lead", "onsets": [0.5, 2, 4.25, 6.5], "instruments": ["setar"], "cycleLength": 2, "durations": [0.45, 0.9, 0.65, 0.75], "pitches": [{"degree": 3, "register": 62}, {"degree": 5, "register": 62}, {"degree": 6, "register": 62}, {"degree": 2, "register": 62}], "articulations": ["legato", "accent", "vibrato", "ornament"], "sectionUsage": ["gushe-variation", "upper-gusheh", "development"]},
        {"name": "setar radif forud descent", "shortName": "Setar forud", "description": "Bring the phrase down through its modal resting tones. Let the final note land alone so the descent, rather than a drum fill, closes the sequence.", "role": "lead", "onsets": [0, 1, 2.5, 3.25], "instruments": ["setar"], "cycleLength": 1, "durations": [0.55, 0.45, 0.75, 0.6], "pitches": [{"degree": 4, "register": 62}, {"degree": 3, "register": 62}, {"degree": 2, "register": 62}, {"degree": 1, "register": 62}], "articulation": "legato", "phraseEnd": true, "sectionUsage": ["forud", "ending"]}
      ],
      "instrumentTechniques": {
        "setar": ["tremolo", "ornament", "microtonal-inflection", "accent", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "setar:lead": {
          "allowedTechniques": ["tremolo", "ornament", "microtonal-inflection", "accent", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"percussion":0.12},"roleWidth":{"lead":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","percussion":"percussion"}}
      }
    },
    {
      "id": "avaz",
      "name": "Avaz-e Dashti",
      "description": "Rubato vocal improvisation in Avaz-e Dashti: begin in the upper register, unfold a text-led phrase with room for breath, and descend toward the lower Shur center. The D5 symbol is a playback reference only.",
      "patterns": ["Dashti avaz vocal breath and tar reply"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "avaz-dashti",
      "tuningSystem": "persian-shur",
      "roles": {
        "lead": ["voice", "tar"]
      },
      "progressions": {
        "daramad": ["D5", "D5"],
        "avaz": ["D5", "D5"],
        "gushe": ["D5", "D5"],
        "forud": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "daramad", "bars": 4},
        {"label": "avaz", "bars": 12, "soloInstrumentId": "voice", "soloMode": "unaccompanied"},
        {"label": "tar answer", "bars": 4, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Dashti avaz upper-register breath phrase", "shortName": "Dashti breath line", "description": "Start above the modal home and shape an uneven vocal phrase with an open breath after its held center. Keep the line elastic; the grid is a practice aid, not a metronomic beat.", "role": "lead", "onsets": [0, 1.5, 3.75, 6.25], "instruments": ["voice"], "cycleLength": 2, "durations": [0.9, 1.15, 1.65, 0.8], "pitches": [{"degree": 5, "register": 69}, {"degree": 4, "register": 69}, {"degree": 3, "register": 69}, {"degree": 2, "register": 69}], "microtiming": [0, 14, -9, 18], "accents": [0.82, 0.64, 0.9, 0.7], "articulation": "legato", "sectionUsage": ["avaz", "gushe"]},
        {"name": "Dashti avaz tar phrase reply", "shortName": "Tar breath reply", "description": "Answer after the vocal breath with a short descending tar phrase. Let the reply finish before the singer returns; avoid continuous doubling.", "role": "lead", "onsets": [0.75, 2.5, 5, 6.75], "instruments": ["tar"], "cycleLength": 2, "durations": [0.4, 0.75, 0.55, 0.65], "pitches": [{"degree": 6, "register": 66}, {"degree": 5, "register": 66}, {"degree": 3, "register": 66}, {"degree": 2, "register": 66}], "microtiming": [-7, 8, -4, 10], "articulations": ["accent", "legato", "ornament", "legato"], "sectionUsage": ["tar answer", "response"]},
        {"name": "Dashti avaz forud descent", "shortName": "Dashti forud", "description": "Descend from the upper register, use the koron-inflected degree as a passing arrival, and resolve on the lower modal center. Leave its last tone open for the next section.", "role": "lead", "onsets": [0, 1.25, 2.25, 3.25], "instruments": ["voice", "tar"], "cycleLength": 1, "durations": [0.55, 0.5, 0.75, 0.65], "pitches": [{"degree": 4, "register": 69}, {"degree": 3, "register": 69}, {"degree": 2, "register": 69}, {"degree": 1, "register": 69}], "articulation": "legato", "phraseEnd": true, "sectionUsage": ["forud", "ending"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "tar": ["vibrato", "tremolo", "accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "tar:lead": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.62,"centerAnchorRoles":[],"rolePan":{"lead":0},"roleWidth":{"lead":0.16},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.5,"reverbSend":0.08,"delaySend":0.03,"bloom":0.56,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic"}}
      }
    },
    {
      "id": "instrumental-ensemble",
      "name": "Persian Instrumental Ensemble",
      "description": "A composed pishdaramad opens into tar and santur gushe phrases, then the tar takes an unaccompanied chaharmezrab before a shared forud. Keep the measured opening, fast plectrum study, and modal return distinct.",
      "patterns": ["tar chaharmezrab plectrum cycle"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "dastgah-shur",
      "tuningSystem": "persian-shur",
      "roles": {
        "lead": ["tar"],
        "harmony": ["santur"],
        "percussion": ["tombak"]
      },
      "progressions": {
        "pishdaramad": ["D5", "D5"],
        "daramad": ["D5", "D5"],
        "avaz": ["D5", "D5"],
        "forud": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pishdaramad", "bars": 4},
        {"label": "daramad", "bars": 8},
        {"label": "gushe", "bars": 8},
        {"label": "chaharmezrab", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pishdaramad tar and santur unison opening", "shortName": "Measured opening", "description": "Play the composed opening in deliberate, aligned gestures. Let the santur reinforce selected tar notes, not fill every subdivision with chord stabs.", "role": "lead", "onsets": [0, 1.5, 3, 5, 6.5], "instruments": ["tar"], "cycleLength": 2, "durations": [1.1, 0.7, 1.3, 0.65, 0.9], "pitches": [{"degree": 1, "register": 62}, {"degree": 3, "register": 62}, {"degree": 4, "register": 62}, {"degree": 5, "register": 62}, {"degree": 3, "register": 62}], "articulation": "legato", "sectionUsage": ["pishdaramad", "daramad"]},
        {"name": "gushe tar modal phrase and return", "shortName": "Tar gushe phrase", "description": "Climb to the gushe's upper resting tone, then turn the contour down. Leave a real phrase gap before repeating or answering it.", "role": "lead", "onsets": [0, 1, 2.75, 4.5, 6.5], "instruments": ["tar"], "cycleLength": 2, "durations": [0.45, 0.65, 1.1, 0.5, 0.8], "pitches": [{"degree": 2, "register": 62}, {"degree": 3, "register": 62}, {"degree": 5, "register": 74}, {"degree": 4, "register": 74}, {"degree": 1, "register": 62}], "articulations": ["accent", "legato", "vibrato", "ornament", "legato"], "sectionUsage": ["gushe", "daramad"]},
        {"name": "tar chaharmezrab sixteenth plectrum pattern", "shortName": "Tar chaharmezrab", "description": "Practice the fast A A V A A V plectrum grouping, with louder down-pick accents and lighter alternate strokes. Keep the repeated rhythmic base clear as the scale figure moves up and down.", "role": "lead", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.25], "instruments": ["tar"], "cycleLength": 1, "durations": [0.18, 0.18, 0.18, 0.18, 0.18, 0.18], "accents": [0.96, 0.76, 0.48, 0.88, 0.72, 0.44], "pitches": [{"degree": 1, "register": 66}, {"degree": 2, "register": 66}, {"degree": 3, "register": 66}, {"degree": 4, "register": 66}, {"degree": 3, "register": 66}, {"degree": 2, "register": 66}], "articulations": ["accent", "staccato", "staccato", "accent", "staccato", "staccato"], "sectionUsage": ["chaharmezrab", "solo"]},
        {"name": "santur pishdaramad phrase reply", "shortName": "Santur reply", "description": "Answer the tar at the end of the measured opening with two ringing notes. Leave the chaharmezrab solo to the tar.", "role": "harmony", "onsets": [1.5, 3], "instruments": ["santur"], "cycleLength": 1, "durations": [0.8, 0.65], "pitches": [{"degree": 5, "register": 70, "voicing": "single"}, {"degree": 3, "register": 70, "voicing": "single"}], "articulation": "tenuto", "sectionUsage": ["pishdaramad", "gushe"]},
        {"name": "tombak pishdaramad measured accompaniment", "shortName": "Tombak measured cycle", "description": "Mark broad points in the slow composed opening with a low stroke, a ghosted lift, and a single slap. Stop when the unaccompanied tar solo begins.", "role": "percussion", "onsets": [0, 1.5, 3], "instruments": ["tombak"], "cycleLength": 1, "durations": [0.3, 0.18, 0.28], "accents": [0.92, 0.42, 0.74], "articulations": ["open", "ghost", "slap"], "sectionUsage": ["pishdaramad", "daramad"]},
        {"name": "tar forud modal descent", "shortName": "Tar forud", "description": "Bring the repeated motif down to the home tone and let it ring; do not append a generic drum fill.", "role": "lead", "onsets": [0, 1, 2.5, 3.25], "instruments": ["tar"], "cycleLength": 1, "durations": [0.55, 0.45, 0.75, 0.7], "pitches": [{"degree": 4, "register": 66}, {"degree": 3, "register": 66}, {"degree": 2, "register": 66}, {"degree": 1, "register": 66}], "articulation": "legato", "phraseEnd": true, "sectionUsage": ["forud", "ending"]}
      ],
      "instrumentTechniques": {
        "tar": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "santur": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
        "tombak": ["roll", "accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "tar:lead": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "santur:harmony": {
          "allowedTechniques": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tombak:percussion": {
          "allowedTechniques": ["roll", "accent", "open", "slap", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    },
    {
      "id": "modern-persian",
      "name": "Contemporary Persian Chamber",
      "description": "Kamancheh and setar trade a long modal line against a string-quartet-like chamber bed. Grow through dialogue, a gradual ensemble build, and a spacious release; keep percussion and pop backbeat out of this adaptation.",
      "patterns": ["kamancheh and string quartet chamber dialogue"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "dastgah-shur",
      "tuningSystem": "persian-shur",
      "roles": {
        "lead": ["kamancheh", "setar"],
        "harmony": ["string-ensemble", "cello"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "lament": ["D5", "D5"],
        "dialogue": ["D5", "D5"],
        "build": ["D5", "D5"],
        "climax": ["D5", "D5"],
        "release": ["D5", "D5"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 8, "intensity": "low"},
        {"label": "lament", "bars": 12, "intensity": "medium"},
        {"label": "dialogue", "bars": 8, "intensity": "medium"},
        {"label": "build", "bars": 12, "intensity": "high"},
        {"label": "climax", "bars": 8, "intensity": "peak"},
        {"label": "release", "bars": 8, "intensity": "low"},
        {"label": "dissolve", "bars": 8, "intensity": "low"}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kamancheh chamber lament line", "shortName": "Kamancheh lament", "description": "Let the bowed line enter alone, sustain through its expressive turn, and leave a breath before the setar responds. Keep the melody in a connected register, with a broad dynamic arc rather than repeated short notes.", "role": "lead", "onsets": [0, 1.5, 3.75, 6.25], "instruments": ["kamancheh"], "cycleLength": 2, "durations": [1.0, 1.2, 1.6, 0.9], "pitches": [{"degree": 1, "register": 62}, {"degree": 3, "register": 62}, {"degree": 5, "register": 62}, {"degree": 4, "register": 62}], "microtiming": [0, 12, -7, 10], "accents": [0.68, 0.82, 0.96, 0.62], "articulations": ["legato", "vibrato", "legato", "portamento"], "sectionUsage": ["opening", "lament", "dialogue", "build", "climax"]},
        {"name": "setar chamber dialogue response", "shortName": "Setar dialogue", "description": "Place four light plucked answers in the breaths after the kamancheh's held tones. Leave the bowed attacks clear instead of doubling the melody throughout the phrase.", "role": "lead", "onsets": [1.05, 2.85, 5.7, 7.45], "instruments": ["setar"], "cycleLength": 2, "durations": [0.35, 0.45, 0.4, 0.35], "pitches": [{"degree": 5, "register": 66}, {"degree": 4, "register": 66}, {"degree": 3, "register": 66}, {"degree": 2, "register": 66}], "microtiming": [-5, 7, -3, 8], "articulations": ["accent", "legato", "ornament", "legato"], "sectionUsage": ["dialogue", "response", "release"]},
        {"name": "string quartet chamber swell", "shortName": "String swell", "description": "Let the quartet-like bed arrive as a slow swell under the lead. Hold each chord across the phrase and change density at the build instead of repeating short staccato stabs.", "role": "harmony", "onsets": [0, 4], "instruments": ["string-ensemble"], "cycleLength": 2, "durations": [3.6, 3.4], "pitches": [{"degree": 1, "register": 50, "voicing": "chord"}, {"degree": 5, "register": 50, "voicing": "chord"}], "articulation": "legato", "sectionUsage": ["opening", "lament", "build", "climax", "release"]},
        {"name": "cello low modal pedal", "shortName": "Cello pedal", "description": "Anchor the lower register on the modal home, then move to its fifth only as the ensemble grows. Keep the bow sustain warm and quiet beneath the chamber parts.", "role": "harmony", "onsets": [0, 4], "instruments": ["cello"], "cycleLength": 2, "durations": [3.7, 3.5], "pitches": [{"degree": 1, "register": 38, "voicing": "single"}, {"degree": 5, "register": 38, "voicing": "single"}], "articulation": "legato", "sectionUsage": ["lament", "dialogue", "build", "climax", "release"]},
        {"name": "kamancheh chamber return and release", "shortName": "Kamancheh return", "description": "Recall the opening contour in the lower register, then let its last note dissolve without a percussion fill or hard rhythmic cutoff.", "role": "lead", "onsets": [0, 1.75, 3.5], "instruments": ["kamancheh"], "cycleLength": 2, "durations": [0.9, 0.8, 1.2], "pitches": [{"degree": 4, "register": 62}, {"degree": 3, "register": 62}, {"degree": 1, "register": 62}], "articulation": "legato", "phraseEnd": true, "sectionUsage": ["release", "dissolve", "ending"]}
      ],
      "instrumentTechniques": {
        "kamancheh": ["vibrato", "portamento", "legato", "microtonal-inflection"],
        "setar": ["tremolo", "ornament", "legato", "microtonal-inflection"],
        "string-ensemble": ["legato", "crescendo", "sustain"],
        "cello": ["vibrato", "legato", "sustain"]
      },
      "instrumentDialects": {
        "kamancheh:lead": {
          "allowedTechniques": ["vibrato", "portamento", "legato", "microtonal-inflection"],
          "defaultTechnique": "vibrato"
        },
        "setar:lead": {
          "allowedTechniques": ["tremolo", "ornament", "legato", "microtonal-inflection"],
          "defaultTechnique": "ornament"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "crescendo", "sustain"],
          "defaultTechnique": "legato"
        },
        "cello:harmony": {
          "allowedTechniques": ["vibrato", "legato", "sustain"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["percussion"],"rolePan":{"lead":0,"harmony":-0.12,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","percussion":"percussion"}}
      }
    }
  ]
};
