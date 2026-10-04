import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "japanese",
  "name": "Japanese",
  "family": "Japan",
  "color": "#817546",
  "description": "Japanese is an independent musical world. Japan idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Gagaku",
  "meter": "4/4",
  "tempo": [56, 72],
  "instruments": ["hichiriki", "ryuteki", "sho", "taiko", "kane", "shakuhachi", "voice", "shamisen", "koto"],
  "roles": {
    "lead": ["hichiriki", "ryuteki"],
    "harmony": ["sho"],
    "percussion": ["taiko", "kane"]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["gagaku sustained sho and hichiriki heterophony", "slow cyclic percussion", "heterophonic winds", "shō clusters", "shakuhachi breath-led honkyoku with silence", "free breathing phrases", "shamisen minyo strum and vocal answer", "percussive strum", "repeated folk accompaniment", "koto sankyoku plucked theme and shakuhachi reply", "arpeggiation", "heterophonic chamber interplay", "taiko alternating ensemble strokes and kiai break", "kuchi-shōga-derived rhythmic cells", "ensemble unison/canon"],
  "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "gagaku",
      "name": "Gagaku",
      "description": "Gagaku: gagaku sustained sho and hichiriki heterophony. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["gagaku sustained sho and hichiriki heterophony", "slow cyclic percussion", "heterophonic winds", "shō clusters"],
      "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics", "sustained hichiriki", "breath-shaped phrase", "shō aitake clusters", "bend", "accent", "legato", "tenuto", "breath", "staccato", "roll", "open", "ghost"],
      "harmony": ["D5", "modal pitch organization + characteristic shō sonorities"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["hichiriki", "ryuteki"],
        "harmony": ["sho"],
        "percussion": ["taiko", "kane"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "gagaku sustained sho and hichiriki heterophony hichiriki statement", "role": "lead", "onsets": [0], "instruments": ["hichiriki"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "gagaku sustained sho and hichiriki heterophony hichiriki cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["hichiriki"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gagaku sustained sho and hichiriki heterophony ryuteki statement", "role": "lead", "onsets": [0], "instruments": ["ryuteki"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "gagaku sustained sho and hichiriki heterophony ryuteki cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["ryuteki"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gagaku sustained sho and hichiriki heterophony sho accompaniment", "role": "harmony", "onsets": [0], "instruments": ["sho"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "gagaku sustained sho and hichiriki heterophony taiko pulse", "role": "percussion", "onsets": [0], "instruments": ["taiko"], "cycleLength": 1, "articulation": "accent"},
        {"name": "gagaku sustained sho and hichiriki heterophony taiko cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["taiko"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "gagaku sustained sho and hichiriki heterophony kane pulse", "role": "percussion", "onsets": [0], "instruments": ["kane"], "cycleLength": 1, "articulation": "accent"},
        {"name": "gagaku sustained sho and hichiriki heterophony kane cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kane"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "hichiriki": ["bend", "vibrato", "accent", "legato", "tenuto"],
        "ryuteki": ["vibrato", "breath", "accent", "staccato", "legato"],
        "sho": ["accent", "staccato", "legato", "tenuto"],
        "taiko": ["accent", "roll"],
        "kane": ["accent", "open", "ghost"]
      },
      "instrumentDialects": {
        "hichiriki:lead": {
          "allowedTechniques": ["bend", "vibrato", "accent", "legato", "tenuto"],
          "defaultTechnique": "bend"
        },
        "ryuteki:lead": {
          "allowedTechniques": ["vibrato", "breath", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "sho:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "taiko:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        },
        "kane:percussion": {
          "allowedTechniques": ["accent", "open", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "shakuhachi",
      "name": "Shakuhachi",
      "description": "Shakuhachi: shakuhachi breath-led honkyoku with silence. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["shakuhachi breath-led honkyoku with silence", "free breathing phrases"],
      "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics", "meri/kari pitch bending", "breath noise", "muraiki", "breath", "accent", "legato"],
      "harmony": ["D5", "melodic/modal, no fixed chords"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["shakuhachi"]
      },
      "progressions": {
        "opening breath": ["D5", "D5"],
        "honkyoku": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing breath": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening breath", "bars": 4},
        {"label": "honkyoku", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "closing breath", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "shakuhachi breath-led honkyoku with silence shakuhachi statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["shakuhachi"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "shakuhachi breath-led honkyoku with silence shakuhachi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["shakuhachi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "shakuhachi": ["vibrato", "breath", "accent", "legato"]
      },
      "instrumentDialects": {
        "shakuhachi:lead": {
          "allowedTechniques": ["vibrato", "breath", "accent", "legato"],
          "defaultTechnique": "vibrato"
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
      "id": "shamisen-minyo",
      "name": "Shamisen / Min'yō",
      "description": "Shamisen / Min'yō: shamisen minyo strum and vocal answer. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["shamisen minyo strum and vocal answer", "percussive strum", "repeated folk accompaniment"],
      "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics", "sawari, hard bachi attack, slides", "accent", "staccato", "legato", "roll"],
      "harmony": ["D5", "modal/pentatonic"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice", "shamisen"],
        "percussion": ["taiko"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "shamisen minyo strum and vocal answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shamisen minyo strum and vocal answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shamisen minyo strum and vocal answer shamisen statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["shamisen"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shamisen minyo strum and vocal answer shamisen cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["shamisen"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shamisen minyo strum and vocal answer taiko pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["taiko"], "cycleLength": 1, "articulation": "accent"},
        {"name": "shamisen minyo strum and vocal answer taiko cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["taiko"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "shamisen": ["tremolo", "accent", "staccato", "legato"],
        "taiko": ["accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "shamisen:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "taiko:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
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
      "id": "koto-sankyoku",
      "name": "Koto / Sankyoku",
      "description": "Koto / Sankyoku: koto sankyoku plucked theme and shakuhachi reply. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["koto sankyoku plucked theme and shakuhachi reply", "arpeggiation", "heterophonic chamber interplay"],
      "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics", "pitch bends, tremolo, glissandi", "bend", "accent", "staccato", "legato", "breath"],
      "harmony": ["D5", "tuning-specific modal framework"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["koto", "shakuhachi"],
        "harmony": ["shamisen"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "koto sankyoku plucked theme and shakuhachi reply koto statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["koto"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koto sankyoku plucked theme and shakuhachi reply koto cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["koto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koto sankyoku plucked theme and shakuhachi reply shakuhachi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["shakuhachi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koto sankyoku plucked theme and shakuhachi reply shakuhachi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["shakuhachi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koto sankyoku plucked theme and shakuhachi reply shamisen accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["shamisen"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "koto sankyoku plucked theme and shakuhachi reply shamisen cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["shamisen"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "koto": ["tremolo", "bend", "accent", "staccato", "legato"],
        "shakuhachi": ["vibrato", "breath", "accent", "legato"],
        "shamisen": ["tremolo", "accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "koto:lead": {
          "allowedTechniques": ["tremolo", "bend", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "shakuhachi:lead": {
          "allowedTechniques": ["vibrato", "breath", "accent", "legato"],
          "defaultTechnique": "vibrato"
        },
        "shamisen:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.78,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":[],"rolePan":{"lead":0,"harmony":-0.12},"roleWidth":{"lead":0.16,"harmony":0.62},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.24,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony"}}
      }
    },
    {
      "id": "taiko",
      "name": "Taiko",
      "description": "Taiko: taiko alternating ensemble strokes and kiai break. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["taiko alternating ensemble strokes and kiai break", "kuchi-shōga-derived rhythmic cells", "ensemble unison/canon"],
      "techniques": ["breath-phrase", "ornament", "pitch-bend", "vibrato", "glissando", "tremolo", "harmonics", "rim hit, full-body stroke, dynamic crescendo", "accent", "roll", "open", "ghost"],
      "harmony": ["D5", "percussion-only unless fused"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["taiko"],
        "percussion": ["taiko", "kane"]
      },
      "progressions": {
        "opening strokes": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "break": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening strokes", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "exchange", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "full ensemble", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "taiko alternating ensemble strokes and kiai break taiko statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["taiko"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "taiko alternating ensemble strokes and kiai break taiko cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["taiko"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "taiko alternating ensemble strokes and kiai break taiko pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["taiko"], "cycleLength": 1, "articulation": "accent"},
        {"name": "taiko alternating ensemble strokes and kiai break taiko cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["taiko"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "taiko alternating ensemble strokes and kiai break kane pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["kane"], "cycleLength": 1, "articulation": "accent"},
        {"name": "taiko alternating ensemble strokes and kiai break kane cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kane"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "taiko": ["accent", "roll"],
        "kane": ["accent", "open", "ghost"]
      },
      "instrumentDialects": {
        "taiko:lead": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        },
        "taiko:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        },
        "kane:percussion": {
          "allowedTechniques": ["accent", "open", "ghost"],
          "defaultTechnique": "accent"
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
    }
  ]
};
