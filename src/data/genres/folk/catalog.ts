import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "folk",
  "name": "Folk",
  "family": "Global folk traditions",
  "color": "#ea678a",
  "description": "Folk is an independent musical world. Global folk traditions idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary Folk",
  "meter": "4/4",
  "tempo": [88, 104],
  "instruments": ["voice", "violin", "guitar", "upright-bass", "banjo", "tin-whistle", "bouzouki", "bodhran"],
  "roles": {
    "lead": ["voice", "violin"],
    "harmony": ["guitar"],
    "bass": ["upright-bass"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major", "mixolydian", "dorian"],
  "chordQualities": ["G", "C", "D", "Em", "A", "E"],
  "harmonicRhythm": "bar",
  "cadences": ["D"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["acoustic contemporary verse and refrain", "old-time shuffle fiddle and banjo drone", "Appalachian modal banjo and fiddle response", "Celtic jig ornaments and fiddle flute unison", "singer songwriter fingerpicked verse with sparse answers", "folk revival strummed chorus and vocal response"],
  "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary-folk",
      "name": "Contemporary Folk",
      "description": "Contemporary Folk: acoustic contemporary verse and refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["acoustic contemporary verse and refrain"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "celtic-ornament", "muted-strum", "tenuto"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D"],
        "verse": ["Em", "C", "G", "D"],
        "coda": ["D", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "acoustic contemporary verse and refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "acoustic contemporary verse and refrain voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acoustic contemporary verse and refrain violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "acoustic contemporary verse and refrain violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acoustic contemporary verse and refrain guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "acoustic contemporary verse and refrain guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acoustic contemporary verse and refrain low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "acoustic contemporary verse and refrain upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
      "id": "old-time",
      "name": "Old-Time",
      "description": "Old-Time: old-time shuffle fiddle and banjo drone. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Clawhammer banjo bump-ditty rhythm locked in unison with droning mountain fiddle", "old-time shuffle fiddle and banjo drone"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "clawhammer \"bump-ditty\" banjo strumming", "fiddle bowing with heavy open-string drones", "communal porch-picking feel", "modal mountain scales", "drone-double-stop", "ornamented-slide", "open-string-drone", "celtic-ornament", "accent", "staccato", "legato", "vibrato", "tenuto", "pick", "open-string", "muted-strum"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["violin"],
        "harmony": ["banjo", "guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["A", "D", "E", "A"],
        "part-a": ["A", "D", "E", "A", "A", "D", "E", "A"],
        "part-b": ["D", "A", "E", "A", "D", "A", "E", "A"],
        "coda": ["D", "E", "A", "A"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "old-time shuffle fiddle and banjo drone violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "old-time shuffle fiddle and banjo drone violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "old-time shuffle fiddle and banjo drone banjo accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["banjo"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "old-time shuffle fiddle and banjo drone banjo cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["banjo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "old-time shuffle fiddle and banjo drone guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "old-time shuffle fiddle and banjo drone guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "old-time shuffle fiddle and banjo drone low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "old-time shuffle fiddle and banjo drone upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "open-string-drone", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "banjo": ["accent", "staccato", "legato", "tenuto"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "pick", "open-string", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "open-string-drone", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "banjo:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "pick", "open-string", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
      "id": "appalachian",
      "name": "Appalachian",
      "description": "Appalachian: Appalachian modal banjo and fiddle response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Appalachian modal banjo and fiddle response"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "celtic-ornament", "tenuto", "muted-strum"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "mixolydian",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["banjo", "guitar"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D"],
        "verse": ["Em", "C", "G", "D"],
        "coda": ["D", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Appalachian modal banjo and fiddle response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Appalachian modal banjo and fiddle response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Appalachian modal banjo and fiddle response violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Appalachian modal banjo and fiddle response violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Appalachian modal banjo and fiddle response banjo accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["banjo"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Appalachian modal banjo and fiddle response banjo cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["banjo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Appalachian modal banjo and fiddle response guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Appalachian modal banjo and fiddle response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "banjo": ["accent", "staccato", "legato", "tenuto"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "banjo:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
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
      "id": "celtic",
      "name": "Celtic",
      "description": "Celtic: Celtic jig ornaments and fiddle flute unison. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Celtic jig ornaments and fiddle flute unison"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "drone-double-stop", "ornamented-slide", "celtic-ornament", "accent", "staccato", "legato", "vibrato", "muted-strum", "tenuto", "roll", "ghost", "open"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "6/8",
      "tempo": [104, 120],
      "scale": "dorian",
      "roles": {
        "lead": ["violin", "tin-whistle"],
        "harmony": ["guitar", "bouzouki"],
        "percussion": ["bodhran"]
      },
      "progressions": {
        "A": ["G", "C", "G", "D"],
        "B": ["Em", "C", "G", "D"],
        "coda": ["D", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "A", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A variation", "bars": 8},
        {"label": "B variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Celtic jig ornaments and fiddle flute unison violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Celtic jig ornaments and fiddle flute unison violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Celtic jig ornaments and fiddle flute unison tin-whistle statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["tin-whistle"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "Celtic jig ornaments and fiddle flute unison tin-whistle cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["tin-whistle"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Celtic jig ornaments and fiddle flute unison guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Celtic jig ornaments and fiddle flute unison guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Celtic jig ornaments and fiddle flute unison bouzouki accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["bouzouki"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Celtic jig ornaments and fiddle flute unison bouzouki cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["bouzouki"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Celtic jig ornaments and fiddle flute unison bodhran pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["bodhran"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Celtic jig ornaments and fiddle flute unison bodhran cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["bodhran"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "tin-whistle": ["accent", "staccato", "legato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bouzouki": ["accent", "staccato", "legato", "tenuto"],
        "bodhran": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "tin-whistle:lead": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "bouzouki:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bodhran:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
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
      "id": "singer-songwriter",
      "name": "Singer-Songwriter",
      "description": "Singer-Songwriter: singer songwriter fingerpicked verse with sparse answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["singer songwriter fingerpicked verse with sparse answers"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "accent", "staccato", "legato", "vibrato", "muted-strum"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D"],
        "verse": ["Em", "C", "G", "D"],
        "coda": ["D", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "singer songwriter fingerpicked verse with sparse answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "singer songwriter fingerpicked verse with sparse answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "singer songwriter fingerpicked verse with sparse answers guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "singer songwriter fingerpicked verse with sparse answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
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
      "id": "folk-revival",
      "name": "Folk Revival",
      "description": "Folk Revival: folk revival strummed chorus and vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["folk revival strummed chorus and vocal response"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "strum", "double-stop", "shuffle-bow", "ornament", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "celtic-ornament", "muted-strum", "tenuto"],
      "harmony": ["G", "C", "D", "Em"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D"],
        "verse": ["Em", "C", "G", "D"],
        "coda": ["D", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "folk revival strummed chorus and vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "folk revival strummed chorus and vocal response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk revival strummed chorus and vocal response violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "folk revival strummed chorus and vocal response violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk revival strummed chorus and vocal response guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "folk revival strummed chorus and vocal response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk revival strummed chorus and vocal response low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "folk revival strummed chorus and vocal response upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "double-stop", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
