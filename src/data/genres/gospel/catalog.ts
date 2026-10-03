import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gospel",
  "name": "Gospel",
  "family": "African American / United States",
  "color": "#0b7346",
  "description": "Gospel is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Choir Gospel",
  "meter": "4/4",
  "tempo": [92, 108],
  "instruments": ["voice", "choir", "piano", "organ", "bass", "drums", "tambourine", "guitar", "hand-percussion"],
  "roles": {
    "lead": ["voice", "choir"],
    "harmony": ["piano", "organ"],
    "bass": ["bass"],
    "percussion": ["drums", "tambourine"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G7", "Am", "Dm7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["choir response and organ shout vamp", "traditional gospel piano and handclap response", "quartet lead and stacked vocal reply", "gospel soul backbeat with organ answers", "contemporary gospel syncopated band and choir lift"],
  "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "choir-gospel",
      "name": "Choir Gospel",
      "description": "Choir Gospel: choir response and organ shout vamp. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["choir response and organ shout vamp"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
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
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "choir response and organ shout vamp voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "choir response and organ shout vamp voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "choir response and organ shout vamp choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "choir response and organ shout vamp choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "choir response and organ shout vamp piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "choir response and organ shout vamp piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "choir response and organ shout vamp organ accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "choir response and organ shout vamp organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "choir response and organ shout vamp low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "choir response and organ shout vamp bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "choir response and organ shout vamp kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "choir response and organ shout vamp drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "choir response and organ shout vamp tambourine pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"},
        {"name": "choir response and organ shout vamp tambourine cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tambourine"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: traditional gospel piano and handclap response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["traditional gospel piano and handclap response"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
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
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "traditional gospel piano and handclap response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional gospel piano and handclap response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional gospel piano and handclap response choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional gospel piano and handclap response choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional gospel piano and handclap response piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional gospel piano and handclap response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional gospel piano and handclap response organ accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional gospel piano and handclap response organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional gospel piano and handclap response low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "traditional gospel piano and handclap response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional gospel piano and handclap response kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "traditional gospel piano and handclap response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "traditional gospel piano and handclap response tambourine pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"},
        {"name": "traditional gospel piano and handclap response tambourine cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tambourine"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "quartet",
      "name": "Quartet",
      "description": "Quartet: quartet lead and stacked vocal reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["quartet lead and stacked vocal reply"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "legato-single-note", "ghost", "roll", "open"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["hand-percussion"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
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
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "quartet lead and stacked vocal reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "quartet lead and stacked vocal reply voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quartet lead and stacked vocal reply choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "quartet lead and stacked vocal reply choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quartet lead and stacked vocal reply guitar accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "quartet lead and stacked vocal reply guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quartet lead and stacked vocal reply low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "quartet lead and stacked vocal reply bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quartet lead and stacked vocal reply hand-percussion pulse", "role": "percussion", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 2.6666666666666665, 3, 3.6666666666666665], "instruments": ["hand-percussion"], "cycleLength": 1, "articulation": "accent"},
        {"name": "quartet lead and stacked vocal reply hand-percussion cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["hand-percussion"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "guitar": ["legato", "vibrato", "glissando", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "hand-percussion": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "glissando", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "hand-percussion:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll", "open"],
          "defaultTechnique": "ghost"
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
      "id": "gospel-soul",
      "name": "Gospel-Soul",
      "description": "Gospel-Soul: gospel soul backbeat with organ answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["gospel soul backbeat with organ answers"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
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
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "gospel soul backbeat with organ answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gospel soul backbeat with organ answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gospel soul backbeat with organ answers choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gospel soul backbeat with organ answers choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gospel soul backbeat with organ answers piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "gospel soul backbeat with organ answers piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gospel soul backbeat with organ answers organ accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "gospel soul backbeat with organ answers organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gospel soul backbeat with organ answers low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "gospel soul backbeat with organ answers bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gospel soul backbeat with organ answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "gospel soul backbeat with organ answers drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "gospel soul backbeat with organ answers tambourine pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"},
        {"name": "gospel soul backbeat with organ answers tambourine cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tambourine"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: contemporary gospel syncopated band and choir lift. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["contemporary gospel syncopated band and choir lift"],
      "techniques": ["melisma", "vibrato", "call-response", "short-chord-stab", "glissando", "ghost-note", "legato", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "choir"],
        "harmony": ["piano", "organ"],
        "bass": ["bass"],
        "percussion": ["drums", "tambourine"]
      },
      "progressions": {
        "intro": ["C", "F", "C", "G7"],
        "verse": ["Am", "Dm7", "G7", "C"],
        "amen": ["C", "C"]
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
        {"label": "shout vamp", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "amen", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "contemporary gospel syncopated band and choir lift voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary gospel syncopated band and choir lift voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary gospel syncopated band and choir lift choir statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["choir"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary gospel syncopated band and choir lift choir cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["choir"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary gospel syncopated band and choir lift piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary gospel syncopated band and choir lift piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary gospel syncopated band and choir lift organ accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary gospel syncopated band and choir lift organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary gospel syncopated band and choir lift low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "contemporary gospel syncopated band and choir lift bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary gospel syncopated band and choir lift kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "contemporary gospel syncopated band and choir lift drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "contemporary gospel syncopated band and choir lift tambourine pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["tambourine"], "cycleLength": 1, "articulation": "accent"},
        {"name": "contemporary gospel syncopated band and choir lift tambourine cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tambourine"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "choir": ["legato", "tenuto", "accent"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "organ": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "tambourine": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "choir:lead": {
          "allowedTechniques": ["legato", "tenuto", "accent"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "organ:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "tambourine:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
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
