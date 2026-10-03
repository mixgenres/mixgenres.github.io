import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "chinese",
  "name": "Chinese",
  "family": "China",
  "color": "#babd29",
  "description": "Chinese is an independent musical world. China idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Jiangnan Sizhu",
  "meter": "4/4",
  "tempo": [80, 96],
  "instruments": ["erhu", "dizi", "pipa", "guzheng", "guqin", "voice", "jinghu", "paigu", "gongs", "gaohu", "suona"],
  "roles": {
    "lead": ["erhu", "dizi"],
    "harmony": ["pipa", "guzheng"]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["jiangnan sizhu heterophonic melody exchange", "shared melody with heterophonic embellishment", "guqin isolated plucks slides and harmonics", "free phrase", "repeated motivic cells", "guzheng tremolo phrase and bending response", "arpeggio/tremolo ostinato", "pipa rapid tremolo and strummed accents", "rapid tremolo, martial ostinato", "jingju vocal line and percussion cues", "percussion cue structures", "flexible speech-song rhythm", "Cantonese gaohu-led ornamented melody", "heterophonic small ensemble", "Chaozhou decorated melody and phrase cadences", "ornamented melody", "elastic timing", "suona chuida piercing melody and gong cues", "loud processional drum/wind cycles"],
  "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "jiangnan-sizhu",
      "name": "Jiangnan Sizhu",
      "description": "Jiangnan Sizhu: jiangnan sizhu heterophonic melody exchange. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["jiangnan sizhu heterophonic melody exchange", "shared melody with heterophonic embellishment"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "ornament, pitch bend, flexible timing", "accent", "staccato", "tenuto", "harmonic", "bend"],
      "harmony": ["D5", "modal/heterophonic", "no chord progression requirement"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["erhu", "dizi"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jiangnan sizhu heterophonic melody exchange erhu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["erhu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jiangnan sizhu heterophonic melody exchange erhu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["erhu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange dizi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["dizi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jiangnan sizhu heterophonic melody exchange dizi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["dizi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jiangnan sizhu heterophonic melody exchange pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jiangnan sizhu heterophonic melody exchange guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jiangnan sizhu heterophonic melody exchange guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "erhu": ["legato", "vibrato", "tremolo", "accent"],
        "dizi": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "erhu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "dizi:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "guqin",
      "name": "Guqin",
      "description": "Guqin: guqin isolated plucks slides and harmonics. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["guqin isolated plucks slides and harmonics", "free phrase", "repeated motivic cells"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "harmonics, sliding, vibrato, left-hand pitch shading", "harmonic", "accent"],
      "harmony": ["D5", "pentatonic/modal single-line texture"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guqin"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "harmonic melody": ["D5", "D5"],
        "sliding variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "harmonic melody", "bars": 8},
        {"label": "sliding variation", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guqin isolated plucks slides and harmonics guqin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guqin"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "guqin isolated plucks slides and harmonics guqin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guqin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "guqin": ["legato", "harmonic", "vibrato", "accent"]
      },
      "instrumentDialects": {
        "guqin:lead": {
          "allowedTechniques": ["legato", "harmonic", "vibrato", "accent"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "guzheng",
      "name": "Guzheng",
      "description": "Guzheng: guzheng tremolo phrase and bending response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["guzheng tremolo phrase and bending response", "arpeggio/tremolo ostinato"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "tremolo, bends, glissando", "bend", "accent", "staccato"],
      "harmony": ["D5", "pentatonic/modal, occasional stacked open fifths"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guzheng tremolo phrase and bending response guzheng statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guzheng tremolo phrase and bending response guzheng cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "guzheng:lead": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "pipa",
      "name": "Pipa",
      "description": "Pipa: pipa rapid tremolo and strummed accents. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["pipa rapid tremolo and strummed accents", "rapid tremolo, martial ostinato"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "wheel tremolo, snaps, percussive strum", "harmonic", "accent", "staccato", "tenuto"],
      "harmony": ["D5", "melodic/modal"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["pipa"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pipa rapid tremolo and strummed accents pipa statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pipa rapid tremolo and strummed accents pipa cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"]
      },
      "instrumentDialects": {
        "pipa:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "jingju",
      "name": "Jingju",
      "description": "Jingju: jingju vocal line and percussion cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["jingju vocal line and percussion cues", "percussion cue structures", "flexible speech-song rhythm"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "stylized vocal ornament", "jinghu slides", "accent", "staccato", "bend", "ghost", "roll"],
      "harmony": ["D5", "modal melodic framework"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice", "jinghu"],
        "percussion": ["paigu", "gongs"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jingju vocal line and percussion cues voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jingju vocal line and percussion cues voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jingju vocal line and percussion cues jinghu statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["jinghu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jingju vocal line and percussion cues jinghu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["jinghu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jingju vocal line and percussion cues paigu pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["paigu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "jingju vocal line and percussion cues paigu cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["paigu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "jingju vocal line and percussion cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "jinghu": ["legato", "vibrato", "bend", "staccato", "accent"],
        "paigu": ["accent", "ghost", "roll"],
        "gongs": ["accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "jinghu:lead": {
          "allowedTechniques": ["legato", "vibrato", "bend", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "paigu:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "gongs:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "cantonese-ensemble",
      "name": "Cantonese Ensemble",
      "description": "Cantonese Ensemble: Cantonese gaohu-led ornamented melody. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Cantonese gaohu-led ornamented melody", "heterophonic small ensemble"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "harmonic", "staccato", "tenuto", "bend"],
      "harmony": ["D5", "modal/pentatonic"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gaohu"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Cantonese gaohu-led ornamented melody gaohu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gaohu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Cantonese gaohu-led ornamented melody gaohu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gaohu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Cantonese gaohu-led ornamented melody pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Cantonese gaohu-led ornamented melody pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Cantonese gaohu-led ornamented melody guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Cantonese gaohu-led ornamented melody guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "gaohu": ["legato", "vibrato", "tremolo", "accent"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "gaohu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "chaozhou",
      "name": "Chaozhou",
      "description": "Chaozhou: Chaozhou decorated melody and phrase cadences. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Chaozhou decorated melody and phrase cadences", "ornamented melody", "elastic timing"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "staccato", "tenuto", "harmonic", "bend"],
      "harmony": ["D5", "modal"],
      "meter": "4/4",
      "tempo": [78, 94],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["erhu", "dizi"],
        "harmony": ["pipa", "guzheng"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Chaozhou decorated melody and phrase cadences erhu statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["erhu"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chaozhou decorated melody and phrase cadences erhu cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["erhu"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences dizi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["dizi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chaozhou decorated melody and phrase cadences dizi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["dizi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences pipa accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["pipa"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chaozhou decorated melody and phrase cadences pipa cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["pipa"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chaozhou decorated melody and phrase cadences guzheng accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guzheng"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chaozhou decorated melody and phrase cadences guzheng cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guzheng"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "erhu": ["legato", "vibrato", "tremolo", "accent"],
        "dizi": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
        "pipa": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
        "guzheng": ["legato", "tremolo", "bend", "accent", "staccato"]
      },
      "instrumentDialects": {
        "erhu:lead": {
          "allowedTechniques": ["legato", "vibrato", "tremolo", "accent"],
          "defaultTechnique": "legato"
        },
        "dizi:lead": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "pipa:harmony": {
          "allowedTechniques": ["legato", "tremolo", "vibrato", "harmonic", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guzheng:harmony": {
          "allowedTechniques": ["legato", "tremolo", "bend", "accent", "staccato"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "suona-chuida",
      "name": "Suona / Chuida",
      "description": "Suona / Chuida: suona chuida piercing melody and gong cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["suona chuida piercing melody and gong cues", "loud processional drum/wind cycles"],
      "techniques": ["ornament", "pitch-bend", "vibrato", "tremolo", "glissando", "harmonics", "legato", "accent", "staccato", "ghost", "roll"],
      "harmony": ["D5", "modal/unison/heterophonic"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["suona"],
        "percussion": ["paigu", "gongs"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow melody": ["D5", "D5"],
        "ornamented variation": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow melody", "bars": 8},
        {"label": "ornamented variation", "bars": 8},
        {"label": "fast variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "suona chuida piercing melody and gong cues suona statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["suona"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "suona chuida piercing melody and gong cues suona cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["suona"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "suona chuida piercing melody and gong cues paigu pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["paigu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "suona chuida piercing melody and gong cues paigu cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["paigu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "suona chuida piercing melody and gong cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "suona": ["legato", "vibrato", "accent", "staccato"],
        "paigu": ["accent", "ghost", "roll"],
        "gongs": ["accent", "roll"]
      },
      "instrumentDialects": {
        "suona:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "paigu:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "gongs:percussion": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    }
  ]
};
