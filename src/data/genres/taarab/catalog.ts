import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "taarab",
  "name": "Taarab",
  "family": "Zanzibar / Swahili coast",
  "color": "#f24f99",
  "description": "Taarab is an independent musical world. Zanzibar / Swahili coast idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Zanzibar",
  "meter": "4/4",
  "tempo": [84, 100],
  "instruments": ["voice", "violin", "oud", "qanun", "upright-bass", "riq", "bass", "bongos", "shaker"],
  "roles": {
    "lead": ["voice", "violin"],
    "harmony": ["oud", "qanun"],
    "bass": ["upright-bass"],
    "percussion": ["riq"]
  },
  "pitchSystem": "maqam / microtonal inflection",
  "scales": ["harmonic-minor"],
  "chordQualities": ["Dm", "Gm", "A7", "F", "C7"],
  "harmonicRhythm": "bar",
  "cadences": ["A7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["Zanzibar oud violin and sung poetic response", "classical taarab orchestral unison and oud answer", "modern taarab keyboard hook and bass dance", "Swahili orchestra string melody and vocal refrain", "kidumbak violin and small percussion dance"],
  "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "zanzibar",
      "name": "Zanzibar",
      "description": "Zanzibar: Zanzibar oud violin and sung poetic response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Zanzibar oud violin and sung poetic response"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll", "accent", "staccato", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "tenuto", "ghost"],
      "harmony": ["Dm", "Gm", "A7", "F", "C7"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["oud", "qanun"],
        "bass": ["upright-bass"],
        "percussion": ["riq"]
      },
      "progressions": {
        "instrumental prelude": ["Dm", "Gm", "A7", "Dm"],
        "verse": ["Dm", "Gm", "A7", "Dm"],
        "instrumental": ["F", "C7", "F", "A7"],
        "coda": ["A7", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental prelude", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Zanzibar oud violin and sung poetic response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Zanzibar oud violin and sung poetic response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zanzibar oud violin and sung poetic response violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Zanzibar oud violin and sung poetic response violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zanzibar oud violin and sung poetic response oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Zanzibar oud violin and sung poetic response oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zanzibar oud violin and sung poetic response qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Zanzibar oud violin and sung poetic response qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zanzibar oud violin and sung poetic response low anchor", "role": "bass", "onsets": [3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "Zanzibar oud violin and sung poetic response upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zanzibar oud violin and sung poetic response riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Zanzibar oud violin and sung poetic response riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
        "oud": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "qanun": ["tremolo", "ornament", "microtonal-inflection"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "riq": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "riq:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "classical-orchestra",
      "name": "Classical Orchestra",
      "description": "Classical Orchestra: classical taarab orchestral unison and oud answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["classical taarab orchestral unison and oud answer"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll", "accent", "staccato", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "tenuto", "ghost"],
      "harmony": ["Dm", "Gm", "A7", "F", "C7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["oud", "qanun"],
        "bass": ["upright-bass"],
        "percussion": ["riq"]
      },
      "progressions": {
        "instrumental prelude": ["Dm", "Gm", "A7", "Dm"],
        "verse": ["Dm", "Gm", "A7", "Dm"],
        "instrumental": ["F", "C7", "F", "A7"],
        "coda": ["A7", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental prelude", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "classical taarab orchestral unison and oud answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classical taarab orchestral unison and oud answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classical taarab orchestral unison and oud answer violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classical taarab orchestral unison and oud answer violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classical taarab orchestral unison and oud answer oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "classical taarab orchestral unison and oud answer oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classical taarab orchestral unison and oud answer qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "classical taarab orchestral unison and oud answer qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classical taarab orchestral unison and oud answer low anchor", "role": "bass", "onsets": [3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "classical taarab orchestral unison and oud answer upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classical taarab orchestral unison and oud answer riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "classical taarab orchestral unison and oud answer riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
        "oud": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "qanun": ["tremolo", "ornament", "microtonal-inflection"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "riq": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "riq:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "modern-taarab",
      "name": "Modern Taarab",
      "description": "Modern Taarab: modern taarab keyboard hook and bass dance. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern taarab keyboard hook and bass dance"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll", "accent", "staccato", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "tenuto", "ghost"],
      "harmony": ["Dm", "Gm", "A7", "F", "C7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["oud", "qanun"],
        "bass": ["upright-bass"],
        "percussion": ["riq"]
      },
      "progressions": {
        "instrumental prelude": ["Dm", "Gm", "A7", "Dm"],
        "verse": ["Dm", "Gm", "A7", "Dm"],
        "instrumental": ["F", "C7", "F", "A7"],
        "coda": ["A7", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental prelude", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern taarab keyboard hook and bass dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern taarab keyboard hook and bass dance voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern taarab keyboard hook and bass dance violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern taarab keyboard hook and bass dance violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern taarab keyboard hook and bass dance oud accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern taarab keyboard hook and bass dance oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern taarab keyboard hook and bass dance qanun accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern taarab keyboard hook and bass dance qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern taarab keyboard hook and bass dance low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "modern taarab keyboard hook and bass dance upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern taarab keyboard hook and bass dance riq pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern taarab keyboard hook and bass dance riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
        "oud": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "qanun": ["tremolo", "ornament", "microtonal-inflection"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "riq": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "riq:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "swahili-orchestra",
      "name": "Swahili Orchestra",
      "description": "Swahili Orchestra: Swahili orchestra string melody and vocal refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Swahili orchestra string melody and vocal refrain"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll", "accent", "staccato", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "tenuto", "ghost"],
      "harmony": ["Dm", "Gm", "A7", "F", "C7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["oud", "qanun"],
        "bass": ["upright-bass"],
        "percussion": ["riq"]
      },
      "progressions": {
        "instrumental prelude": ["Dm", "Gm", "A7", "Dm"],
        "verse": ["Dm", "Gm", "A7", "Dm"],
        "instrumental": ["F", "C7", "F", "A7"],
        "coda": ["A7", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "instrumental prelude", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Swahili orchestra string melody and vocal refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Swahili orchestra string melody and vocal refrain voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Swahili orchestra string melody and vocal refrain violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Swahili orchestra string melody and vocal refrain violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Swahili orchestra string melody and vocal refrain oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Swahili orchestra string melody and vocal refrain oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Swahili orchestra string melody and vocal refrain qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Swahili orchestra string melody and vocal refrain qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Swahili orchestra string melody and vocal refrain low anchor", "role": "bass", "onsets": [3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "Swahili orchestra string melody and vocal refrain upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Swahili orchestra string melody and vocal refrain riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Swahili orchestra string melody and vocal refrain riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
        "oud": ["vibrato", "tremolo", "accent", "staccato", "legato"],
        "qanun": ["tremolo", "ornament", "microtonal-inflection"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "riq": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["vibrato", "tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "riq:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "kidumbak",
      "name": "Kidumbak",
      "description": "Kidumbak: kidumbak violin and small percussion dance. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kidumbak violin and small percussion dance"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "melisma", "vibrato", "roll", "accent", "staccato", "legato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "open", "slap", "ghost"],
      "harmony": ["Dm", "Gm", "A7", "F", "C7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "bass": ["bass"],
        "percussion": ["bongos", "shaker"]
      },
      "progressions": {
        "instrumental prelude": ["Dm", "Gm", "A7", "Dm"],
        "verse": ["Dm", "Gm", "A7", "Dm"],
        "instrumental": ["F", "C7", "F", "A7"],
        "coda": ["A7", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "instrumental prelude", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kidumbak violin and small percussion dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kidumbak violin and small percussion dance voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kidumbak violin and small percussion dance violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kidumbak violin and small percussion dance violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kidumbak violin and small percussion dance low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "kidumbak violin and small percussion dance bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kidumbak violin and small percussion dance bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "kidumbak violin and small percussion dance bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "kidumbak violin and small percussion dance shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "kidumbak violin and small percussion dance shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "shaker": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "ornamented-slide", "folk-vibrato", "celtic-ornament", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
