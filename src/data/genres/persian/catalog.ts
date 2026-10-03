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
  "instruments": ["voice", "tar", "santur", "tombak", "setar"],
  "roles": {
    "lead": ["voice", "tar"],
    "harmony": ["santur"],
    "percussion": ["tombak"]
  },
  "pitchSystem": "dastgah / radif modal tuning",
  "scales": ["harmonic-minor"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["dastgah daramad and gushe melodic ascent", "radif motif exposition and forud return", "avaz free vocal phrase and instrumental answer", "instrumental chaharmezrab tremolo and tombak cycle", "modern Persian arranged melody and instrumental refrain"],
  "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "dastgah",
      "name": "Dastgah",
      "description": "Dastgah: dastgah daramad and gushe melodic ascent. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dastgah daramad and gushe melodic ascent"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "harmonic-minor",
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
        {"label": "avaz", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "chaharmezrab", "bars": 8},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dastgah daramad and gushe melodic ascent voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dastgah daramad and gushe melodic ascent voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dastgah daramad and gushe melodic ascent tar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dastgah daramad and gushe melodic ascent tar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dastgah daramad and gushe melodic ascent santur accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["santur"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "dastgah daramad and gushe melodic ascent santur cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["santur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dastgah daramad and gushe melodic ascent tombak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tombak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dastgah daramad and gushe melodic ascent tombak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tombak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
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
      "id": "radif",
      "name": "Radif",
      "description": "Radif: radif motif exposition and forud return. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["radif motif exposition and forud return"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["setar", "santur"],
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
        {"label": "avaz", "bars": 8, "soloInstrumentId": "setar", "soloMode": "unaccompanied"},
        {"label": "chaharmezrab", "bars": 8},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "radif motif exposition and forud return setar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["setar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "radif motif exposition and forud return setar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["setar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "radif motif exposition and forud return santur statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["santur"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "radif motif exposition and forud return santur cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["santur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "radif motif exposition and forud return tombak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tombak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "radif motif exposition and forud return tombak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tombak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "setar": ["tremolo", "accent", "staccato", "legato"],
        "santur": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
        "tombak": ["roll", "accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "setar:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "santur:lead": {
          "allowedTechniques": ["tremolo", "roll", "accent", "staccato", "tenuto", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tombak:percussion": {
          "allowedTechniques": ["roll", "accent", "open", "slap", "ghost"],
          "defaultTechnique": "roll"
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
      "id": "avaz",
      "name": "Avaz",
      "description": "Avaz: avaz free vocal phrase and instrumental answer. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["avaz free vocal phrase and instrumental answer"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "harmonic-minor",
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
        {"label": "avaz", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "gushe", "bars": 8},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "avaz free vocal phrase and instrumental answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "avaz free vocal phrase and instrumental answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "avaz free vocal phrase and instrumental answer tar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tar"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "avaz free vocal phrase and instrumental answer tar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
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
      "id": "instrumental-ensemble",
      "name": "Instrumental Ensemble",
      "description": "Instrumental Ensemble: instrumental chaharmezrab tremolo and tombak cycle. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["instrumental chaharmezrab tremolo and tombak cycle"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "harmonic-minor",
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
        {"label": "avaz", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "chaharmezrab", "bars": 8},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "instrumental chaharmezrab tremolo and tombak cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle tar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["tar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle tar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle santur accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["santur"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle santur cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["santur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle tombak pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["tombak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "instrumental chaharmezrab tremolo and tombak cycle tombak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tombak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
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
      "id": "modern-persian",
      "name": "Modern Persian",
      "description": "Modern Persian: modern Persian arranged melody and instrumental refrain. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["modern Persian arranged melody and instrumental refrain"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "vibrato", "roll", "accent", "staccato", "legato", "tenuto", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "harmonic-minor",
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
        {"label": "avaz", "bars": 8, "soloInstrumentId": "tar", "soloMode": "unaccompanied"},
        {"label": "chaharmezrab", "bars": 8},
        {"label": "forud", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern Persian arranged melody and instrumental refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern Persian arranged melody and instrumental refrain voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Persian arranged melody and instrumental refrain tar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern Persian arranged melody and instrumental refrain tar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Persian arranged melody and instrumental refrain santur accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["santur"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern Persian arranged melody and instrumental refrain santur cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["santur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern Persian arranged melody and instrumental refrain tombak pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tombak"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern Persian arranged melody and instrumental refrain tombak cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tombak"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
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
