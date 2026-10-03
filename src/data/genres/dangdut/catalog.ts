import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "dangdut",
  "name": "Dangdut",
  "family": "Indonesia",
  "color": "#e2044b",
  "description": "Dangdut is an independent musical world. Indonesia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "flute", "guitar", "bass", "kendang", "drums"],
  "roles": {
    "lead": ["voice", "flute"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["kendang", "drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["harmonic-minor"],
  "chordQualities": ["Am", "G", "F", "E7", "Dm"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["kendang syncopation and suling answers", "koplo rapid kendang fills and dance accents", "rock dangdut guitar over kendang cycle", "electronic dangdut kick and kendang breaks"],
  "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: kendang syncopation and suling answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kendang syncopation and suling answers"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kendang syncopation and suling answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kendang syncopation and suling answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kendang syncopation and suling answers flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kendang syncopation and suling answers flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kendang syncopation and suling answers guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "kendang syncopation and suling answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kendang syncopation and suling answers low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "kendang syncopation and suling answers bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kendang syncopation and suling answers kendang pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "kendang syncopation and suling answers kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "kendang syncopation and suling answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "kendang syncopation and suling answers drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "koplo",
      "name": "Koplo",
      "description": "Koplo: koplo rapid kendang fills and dance accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["koplo rapid kendang fills and dance accents"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [140, 156],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "koplo rapid kendang fills and dance accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koplo rapid kendang fills and dance accents voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koplo rapid kendang fills and dance accents flute statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "koplo rapid kendang fills and dance accents flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koplo rapid kendang fills and dance accents guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "koplo rapid kendang fills and dance accents guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koplo rapid kendang fills and dance accents low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "koplo rapid kendang fills and dance accents bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "koplo rapid kendang fills and dance accents kendang pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "koplo rapid kendang fills and dance accents kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "koplo rapid kendang fills and dance accents kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "koplo rapid kendang fills and dance accents drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "rock-dangdut",
      "name": "Rock Dangdut",
      "description": "Rock Dangdut: rock dangdut guitar over kendang cycle. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["rock dangdut guitar over kendang cycle"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "rock dangdut guitar over kendang cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock dangdut guitar over kendang cycle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rock dangdut guitar over kendang cycle flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rock dangdut guitar over kendang cycle flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rock dangdut guitar over kendang cycle guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "rock dangdut guitar over kendang cycle guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rock dangdut guitar over kendang cycle low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "rock dangdut guitar over kendang cycle bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rock dangdut guitar over kendang cycle kendang pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "rock dangdut guitar over kendang cycle kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "rock dangdut guitar over kendang cycle kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "rock dangdut guitar over kendang cycle drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "electronic-dangdut",
      "name": "Electronic Dangdut",
      "description": "Electronic Dangdut: electronic dangdut kick and kendang breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electronic dangdut kick and kendang breaks"],
      "techniques": ["melisma", "trill", "roll", "slap", "open-tone", "glissando", "accent", "staccato", "legato", "vibrato", "tenuto", "open", "ghost"],
      "harmony": ["Am", "G", "F", "E7", "Dm"],
      "meter": "4/4",
      "tempo": [122, 138],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "flute"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["kendang", "drums"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E7"],
        "verse": ["Am", "G", "F", "E7"],
        "interlude": ["Dm", "Am", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "interlude", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electronic dangdut kick and kendang breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electronic dangdut kick and kendang breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electronic dangdut kick and kendang breaks flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electronic dangdut kick and kendang breaks flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electronic dangdut kick and kendang breaks guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electronic dangdut kick and kendang breaks guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electronic dangdut kick and kendang breaks low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "electronic dangdut kick and kendang breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electronic dangdut kick and kendang breaks kendang pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "electronic dangdut kick and kendang breaks kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "electronic dangdut kick and kendang breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "electronic dangdut kick and kendang breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "flute": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "guitar": ["glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slap", "accent", "staccato", "legato"],
        "kendang": ["open-tone", "slap", "roll"],
        "drums": ["open", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "flute:lead": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "glissando"
        },
        "guitar:harmony": {
          "allowedTechniques": ["glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "glissando",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["slap", "accent", "staccato", "legato"],
          "defaultTechnique": "slap"
        },
        "kendang:percussion": {
          "allowedTechniques": ["open-tone", "slap", "roll"],
          "defaultTechnique": "open-tone"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
