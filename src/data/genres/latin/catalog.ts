import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "latin",
  "name": "Latin",
  "family": "Latin America / Caribbean",
  "color": "#f4b418",
  "description": "Latin is an independent musical world. Latin America / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Cumbia",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["voice", "accordion", "guitar", "bass", "cumbia-drum", "guiro", "piano", "tambora", "guira", "guacharaca", "bongos", "upright-bass", "maracas", "synth", "drums"],
  "roles": {
    "lead": ["voice", "accordion"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["cumbia-drum", "guiro"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "Dm", "E7", "C", "F", "G7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["cumbia guiro and bass two-beat interlock", "merengue tambora guira and bass drive", "vallenato accordion and guacharaca answer", "bolero sustained vocal with guitar arpeggio", "chicha electric guitar melody and cumbia pulse", "sonidera keyboard hook and cumbia guiro", "tropical horn response over dance percussion", "Latin pop vocal hook and acoustic syncopation", "Latin funk guitar scratch and percussion break", "cumbia villera keyboard riff and clipped bass", "electrocumbia synth hook and electronic cumbia beat", "Latin fusion extended comping and percussion exchange"],
  "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "cumbia",
      "name": "Cumbia",
      "description": "Cumbia: cumbia guiro and bass two-beat interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["cumbia guiro and bass two-beat interlock"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cumbia guiro and bass two-beat interlock voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia guiro and bass two-beat interlock voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia guiro and bass two-beat interlock accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia guiro and bass two-beat interlock accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia guiro and bass two-beat interlock guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cumbia guiro and bass two-beat interlock guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia guiro and bass two-beat interlock low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "cumbia guiro and bass two-beat interlock bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia guiro and bass two-beat interlock cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia guiro and bass two-beat interlock cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "cumbia guiro and bass two-beat interlock guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia guiro and bass two-beat interlock guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "merengue",
      "name": "Merengue",
      "description": "Merengue: merengue tambora guira and bass drive. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["merengue tambora guira and bass drive"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost", "short-scrape", "long-scrape"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "2/4",
      "tempo": [136, 152],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["tambora", "guira"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "merengue tambora guira and bass drive voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue tambora guira and bass drive voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue tambora guira and bass drive accordion statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "merengue tambora guira and bass drive accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue tambora guira and bass drive piano accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "merengue tambora guira and bass drive piano cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue tambora guira and bass drive low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "merengue tambora guira and bass drive bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "merengue tambora guira and bass drive tambora pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["tambora"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue tambora guira and bass drive tambora cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["tambora"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "merengue tambora guira and bass drive guira pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75], "instruments": ["guira"], "cycleLength": 1, "articulation": "accent"},
        {"name": "merengue tambora guira and bass drive guira cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["guira"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "bass": ["accent", "staccato", "legato"],
        "tambora": ["roll", "accent", "ghost"],
        "guira": ["scrape", "short-scrape", "long-scrape", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "tambora:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
          "defaultTechnique": "roll"
        },
        "guira:percussion": {
          "allowedTechniques": ["scrape", "short-scrape", "long-scrape", "accent"],
          "defaultTechnique": "scrape"
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
      "id": "vallenato",
      "name": "Vallenato",
      "description": "Vallenato: vallenato accordion and guacharaca answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["vallenato accordion and guacharaca answer"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost", "open", "slap"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "bass": ["bass"],
        "percussion": ["guacharaca", "bongos"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "vallenato accordion and guacharaca answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vallenato accordion and guacharaca answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vallenato accordion and guacharaca answer accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vallenato accordion and guacharaca answer accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vallenato accordion and guacharaca answer low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "vallenato accordion and guacharaca answer bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vallenato accordion and guacharaca answer guacharaca pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guacharaca"], "cycleLength": 1, "articulation": "accent"},
        {"name": "vallenato accordion and guacharaca answer guacharaca cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guacharaca"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "vallenato accordion and guacharaca answer bongos pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "vallenato accordion and guacharaca answer bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bass": ["accent", "staccato", "legato"],
        "guacharaca": ["roll", "accent", "ghost", "open"],
        "bongos": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guacharaca:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "bolero",
      "name": "Bolero",
      "description": "Bolero: bolero sustained vocal with guitar arpeggio. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["bolero sustained vocal with guitar arpeggio"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "muted-strum", "tenuto", "open", "slap", "ghost"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["bongos", "maracas"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "bolero sustained vocal with guitar arpeggio voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero sustained vocal with guitar arpeggio voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero sustained vocal with guitar arpeggio guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero sustained vocal with guitar arpeggio guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero sustained vocal with guitar arpeggio piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero sustained vocal with guitar arpeggio piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero sustained vocal with guitar arpeggio low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bolero sustained vocal with guitar arpeggio upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero sustained vocal with guitar arpeggio bongos pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["bongos"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bolero sustained vocal with guitar arpeggio bongos cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bongos"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "bolero sustained vocal with guitar arpeggio maracas pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["maracas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bolero sustained vocal with guitar arpeggio maracas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["maracas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "bongos": ["accent", "open", "slap", "ghost"],
        "maracas": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bongos:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
          "defaultTechnique": "accent"
        },
        "maracas:percussion": {
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
      "id": "chicha",
      "name": "Chicha",
      "description": "Chicha: chicha electric guitar melody and cumbia pulse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["chicha electric guitar melody and cumbia pulse"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "muted-strum", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["guitar"],
        "harmony": ["guitar", "organ"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "chicha electric guitar melody and cumbia pulse guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "chicha electric guitar melody and cumbia pulse guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chicha electric guitar melody and cumbia pulse guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "chicha electric guitar melody and cumbia pulse guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chicha electric guitar melody and cumbia pulse low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "chicha electric guitar melody and cumbia pulse bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chicha electric guitar melody and cumbia pulse cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "chicha electric guitar melody and cumbia pulse cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "chicha electric guitar melody and cumbia pulse guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "chicha electric guitar melody and cumbia pulse guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "sonidera",
      "name": "Sonidera",
      "description": "Sonidera: sonidera keyboard hook and cumbia guiro. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sonidera keyboard hook and cumbia guiro"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sonidera keyboard hook and cumbia guiro voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sonidera keyboard hook and cumbia guiro voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sonidera keyboard hook and cumbia guiro synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sonidera keyboard hook and cumbia guiro synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sonidera keyboard hook and cumbia guiro synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "sonidera keyboard hook and cumbia guiro synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sonidera keyboard hook and cumbia guiro low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "sonidera keyboard hook and cumbia guiro bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sonidera keyboard hook and cumbia guiro kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "sonidera keyboard hook and cumbia guiro drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "sonidera keyboard hook and cumbia guiro guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sonidera keyboard hook and cumbia guiro guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "tropical",
      "name": "Tropical",
      "description": "Tropical: tropical horn response over dance percussion. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tropical horn response over dance percussion"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "horn-section"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tropical horn response over dance percussion voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tropical horn response over dance percussion voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tropical horn response over dance percussion accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tropical horn response over dance percussion accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tropical horn response over dance percussion guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tropical horn response over dance percussion guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tropical horn response over dance percussion low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "tropical horn response over dance percussion bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tropical horn response over dance percussion cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tropical horn response over dance percussion cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "tropical horn response over dance percussion guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tropical horn response over dance percussion guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "latin-pop",
      "name": "Latin Pop",
      "description": "Latin Pop: Latin pop vocal hook and acoustic syncopation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin pop vocal hook and acoustic syncopation"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "Latin pop vocal hook and acoustic syncopation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin pop vocal hook and acoustic syncopation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin pop vocal hook and acoustic syncopation accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin pop vocal hook and acoustic syncopation accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin pop vocal hook and acoustic syncopation guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Latin pop vocal hook and acoustic syncopation guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin pop vocal hook and acoustic syncopation low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Latin pop vocal hook and acoustic syncopation bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin pop vocal hook and acoustic syncopation cumbia-drum pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin pop vocal hook and acoustic syncopation cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Latin pop vocal hook and acoustic syncopation guiro pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin pop vocal hook and acoustic syncopation guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "latin-funk",
      "name": "Latin Funk",
      "description": "Latin Funk: Latin funk guitar scratch and percussion break. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin funk guitar scratch and percussion break"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "Latin funk guitar scratch and percussion break voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin funk guitar scratch and percussion break voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin funk guitar scratch and percussion break accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin funk guitar scratch and percussion break accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin funk guitar scratch and percussion break guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Latin funk guitar scratch and percussion break guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin funk guitar scratch and percussion break low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Latin funk guitar scratch and percussion break bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin funk guitar scratch and percussion break cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin funk guitar scratch and percussion break cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Latin funk guitar scratch and percussion break guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin funk guitar scratch and percussion break guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "cumbia-villera",
      "name": "Cumbia Villera",
      "description": "Cumbia Villera: cumbia villera keyboard riff and clipped bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["cumbia villera keyboard riff and clipped bass"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cumbia villera keyboard riff and clipped bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia villera keyboard riff and clipped bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia villera keyboard riff and clipped bass synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cumbia villera keyboard riff and clipped bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia villera keyboard riff and clipped bass synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cumbia villera keyboard riff and clipped bass synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia villera keyboard riff and clipped bass low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "cumbia villera keyboard riff and clipped bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cumbia villera keyboard riff and clipped bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "cumbia villera keyboard riff and clipped bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "cumbia villera keyboard riff and clipped bass guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "cumbia villera keyboard riff and clipped bass guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "electrocumbia",
      "name": "Electrocumbia",
      "description": "Electrocumbia: electrocumbia synth hook and electronic cumbia beat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electrocumbia synth hook and electronic cumbia beat"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "electrocumbia synth hook and electronic cumbia beat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electrocumbia synth hook and electronic cumbia beat synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electrocumbia synth hook and electronic cumbia beat low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "electrocumbia synth hook and electronic cumbia beat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electrocumbia synth hook and electronic cumbia beat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "electrocumbia synth hook and electronic cumbia beat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "electrocumbia synth hook and electronic cumbia beat guiro pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "electrocumbia synth hook and electronic cumbia beat guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "synth:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
      "id": "latin-fusion",
      "name": "Latin Fusion",
      "description": "Latin Fusion: Latin fusion extended comping and percussion exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin fusion extended comping and percussion exchange"],
      "techniques": ["strum", "arpeggio", "tremolo", "roll", "scrape", "short-chord-stab", "melisma", "accent", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "F", "G7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["cumbia-drum", "guiro"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "verse": ["C", "F", "G7", "C"],
        "coda": ["C", "Am"]
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
        {"name": "Latin fusion extended comping and percussion exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin fusion extended comping and percussion exchange voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin fusion extended comping and percussion exchange accordion statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin fusion extended comping and percussion exchange accordion cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin fusion extended comping and percussion exchange guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Latin fusion extended comping and percussion exchange guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin fusion extended comping and percussion exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Latin fusion extended comping and percussion exchange bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin fusion extended comping and percussion exchange cumbia-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cumbia-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin fusion extended comping and percussion exchange cumbia-drum cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cumbia-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Latin fusion extended comping and percussion exchange guiro pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["guiro"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin fusion extended comping and percussion exchange guiro cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["guiro"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "cumbia-drum": ["accent", "ghost", "open"],
        "guiro": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "strum", "arpeggio", "short-chord-stab", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "cumbia-drum:percussion": {
          "allowedTechniques": ["accent", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "guiro:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
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
