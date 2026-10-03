import type { GenrePackInput } from '../_shared/genrePack';
import { authorTangoArrangements } from './arrangements';

export const GENRE_PACK: GenrePackInput = authorTangoArrangements({
  "id": "tango",
  "name": "Tango",
  "family": "Río de la Plata / Argentina",
  "color": "#e252a5",
  "description": "Tango is an independent musical world. Río de la Plata / Argentina idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Golden Age",
  "meter": "4/4",
  "tempo": [112, 128],
  "instruments": ["bandoneon", "violin", "piano", "upright-bass", "voice", "guitar", "synth", "drums", "sampler", "bass", "bombo-leguero"],
  "roles": {
    "lead": ["bandoneon", "violin"],
    "harmony": ["piano"],
    "bass": ["upright-bass"]
  },
  "pitchSystem": "12-tet",
  "scales": ["harmonic-minor"],
  "chordQualities": ["Am", "Dm", "E7", "C", "G7", "D", "A7", "G"],
  "harmonicRhythm": "bar",
  "cadences": ["E7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["Golden Age marcato four and violin answer", "balanced marcato/síncopa", "regular 4/8-bar phrases", "moderate fills", "canyengue heavy two-beat and clipped bandoneon", "habanera-derived bass", "2/4 bounce", "short repeated accompaniment cells", "De Caro contrapuntal violin and flexible phrasing", "independent countermelodies", "contrapuntal piano/bandoneón/violin movement", "Canaro simple dance marcato and melodic refrain", "direct marcato", "predictable phrase cadences", "vocal-supporting accompaniment", "D Arienzo urgent piano and staccato bandoneon", "hard four-beat marcato", "short síncopa cells", "rhythmic piano fills", "Di Sarli lyrical violin over steady piano bass", "stable pulse under long lyrical melody", "rolling piano transitions", "Troilo singing bandoneon and vocal space", "flexible bandoneón responses", "mixed marcato/síncopa", "melodic countermotion", "Pugliese yumba bass with dramatic rests", "yumba", "delayed bass attacks", "long crescendos", "large silences", "syncopated ensemble blocks", "Salgan syncopated piano and rich countermelody", "contrapuntal ostinati", "irregular accent layering", "independent inner figures", "tango cancion slow voice and bandoneon reply", "sparse accompaniment under voice", "instrumental answering phrase", "milonga habanera bass and short guitar chords", "habanera", "fast 2/4", "repeated bass cells", "light syncopation", "vals flowing ternary violin and bandoneon", "3/4 rotational bass", "1–2–3 sweeping accompaniment", "cross-bar melody", "nuevo tango angular 3 plus 3 plus 2 and chromatic line", "ostinati", "asymmetric meters", "additive rhythms", "contrapuntal bass", "Gotan electrotango loop and bandoneon hook", "downtempo breakbeat", "electronic kick/snare", "looped tango cells", "Bajofondo electronic rock groove and bandoneon answer", "rock backbeat + tango syncopation", "distorted bass ostinati", "modern orquesta alternating ensemble attacks and lyrical lines", "Golden-Age vocabulary with much larger dynamic blocks", "chacarera six-eight guitar and bombo cross accents", "6/8 against 3/4", "bombo accents", "guitar hemiola"],
  "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: Golden Age marcato four and violin answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Golden Age marcato four and violin answer", "balanced marcato/síncopa", "regular 4/8-bar phrases", "moderate fills"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "clean staccato/legato contrast", "controlled rubato", "ensemble crescendos", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "functional tonal harmony", "sevenths", "diminished passing chords", "moderate chromaticism"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Golden Age marcato four and violin answer bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age marcato four and violin answer bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age marcato four and violin answer violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age marcato four and violin answer violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age marcato four and violin answer piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Golden Age marcato four and violin answer piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age marcato four and violin answer low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Golden Age marcato four and violin answer upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "canyengue",
      "name": "Canyengue",
      "description": "Canyengue: canyengue heavy two-beat and clipped bandoneon. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["canyengue heavy two-beat and clipped bandoneon", "habanera-derived bass", "2/4 bounce", "short repeated accompaniment cells"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "dry staccato", "lighter ensemble attacks", "minimal sustained strings", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "simpler tonic/dominant/subdominant motion", "fewer extensions", "modal/habanera color"],
      "meter": "2/4",
      "tempo": [104, 120],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "canyengue heavy two-beat and clipped bandoneon bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "canyengue heavy two-beat and clipped bandoneon bandoneon cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "canyengue heavy two-beat and clipped bandoneon violin statement", "role": "lead", "onsets": [0], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "canyengue heavy two-beat and clipped bandoneon violin cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "canyengue heavy two-beat and clipped bandoneon piano accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "canyengue heavy two-beat and clipped bandoneon piano cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "canyengue heavy two-beat and clipped bandoneon low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.5]},
        {"name": "canyengue heavy two-beat and clipped bandoneon upright-bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "guardia-nueva-de-caro",
      "name": "Guardia Nueva / De Caro",
      "description": "Guardia Nueva / De Caro: De Caro contrapuntal violin and flexible phrasing. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["De Caro contrapuntal violin and flexible phrasing", "independent countermelodies", "contrapuntal piano/bandoneón/violin movement"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "expressive portamento", "ornamental inner voices", "chamber-style interaction", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "richer chromaticism", "tonicizations", "diminished links", "altered dominant colors"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "De Caro contrapuntal violin and flexible phrasing bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "De Caro contrapuntal violin and flexible phrasing bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "De Caro contrapuntal violin and flexible phrasing violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "De Caro contrapuntal violin and flexible phrasing violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "De Caro contrapuntal violin and flexible phrasing piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "De Caro contrapuntal violin and flexible phrasing piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "De Caro contrapuntal violin and flexible phrasing low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "De Caro contrapuntal violin and flexible phrasing upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "canaro",
      "name": "Canaro",
      "description": "Canaro: Canaro simple dance marcato and melodic refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Canaro simple dance marcato and melodic refrain", "direct marcato", "predictable phrase cadences", "vocal-supporting accompaniment"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "economical ornament", "restrained accents", "clear sectional endings", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "mostly direct tonal progressions", "light chromatic passing harmony"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Canaro simple dance marcato and melodic refrain bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Canaro simple dance marcato and melodic refrain bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Canaro simple dance marcato and melodic refrain violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Canaro simple dance marcato and melodic refrain violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Canaro simple dance marcato and melodic refrain piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Canaro simple dance marcato and melodic refrain piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Canaro simple dance marcato and melodic refrain low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Canaro simple dance marcato and melodic refrain upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "darienzo",
      "name": "D'Arienzo",
      "description": "D'Arienzo: D Arienzo urgent piano and staccato bandoneon. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["D Arienzo urgent piano and staccato bandoneon", "hard four-beat marcato", "short síncopa cells", "rhythmic piano fills"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "sharp staccato", "aggressive piano accents", "short violin attacks", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "relatively direct", "quicker functional cadence", "avoid excessive sustained color chords"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "D Arienzo urgent piano and staccato bandoneon bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "D Arienzo urgent piano and staccato bandoneon bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "D Arienzo urgent piano and staccato bandoneon violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "D Arienzo urgent piano and staccato bandoneon violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "D Arienzo urgent piano and staccato bandoneon piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "D Arienzo urgent piano and staccato bandoneon piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "D Arienzo urgent piano and staccato bandoneon low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "D Arienzo urgent piano and staccato bandoneon upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "di-sarli",
      "name": "Di Sarli",
      "description": "Di Sarli: Di Sarli lyrical violin over steady piano bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Di Sarli lyrical violin over steady piano bass", "stable pulse under long lyrical melody", "rolling piano transitions"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "legato strings", "broad bowing", "softer bandoneón attack", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "richer inner voice leading", "sixths/sevenths", "chromatic approach chords used elegantly"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Di Sarli lyrical violin over steady piano bass bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Di Sarli lyrical violin over steady piano bass bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Di Sarli lyrical violin over steady piano bass violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Di Sarli lyrical violin over steady piano bass violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Di Sarli lyrical violin over steady piano bass piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Di Sarli lyrical violin over steady piano bass piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Di Sarli lyrical violin over steady piano bass low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Di Sarli lyrical violin over steady piano bass upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "troilo",
      "name": "Troilo",
      "description": "Troilo: Troilo singing bandoneon and vocal space. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Troilo singing bandoneon and vocal space", "flexible bandoneón responses", "mixed marcato/síncopa", "melodic countermotion"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "expressive bellows", "rubato endings", "lyrical violin responses", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "moderate chromaticism", "secondary dominants", "suspended resolutions"],
      "meter": "4/4",
      "tempo": [110, 126],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Troilo singing bandoneon and vocal space bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Troilo singing bandoneon and vocal space bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Troilo singing bandoneon and vocal space violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Troilo singing bandoneon and vocal space violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Troilo singing bandoneon and vocal space piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Troilo singing bandoneon and vocal space piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Troilo singing bandoneon and vocal space low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Troilo singing bandoneon and vocal space upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "pugliese",
      "name": "Pugliese",
      "description": "Pugliese: Pugliese yumba bass with dramatic rests. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Pugliese yumba bass with dramatic rests", "yumba", "delayed bass attacks", "long crescendos", "large silences", "syncopated ensemble blocks"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "exaggerated accent", "elastic timing", "heavy piano/bass", "extreme dynamic contrast", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "dense dominant tension", "diminished passing harmony", "chromatic bass", "delayed resolution", "altered dominants"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Pugliese yumba bass with dramatic rests bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Pugliese yumba bass with dramatic rests bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Pugliese yumba bass with dramatic rests violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Pugliese yumba bass with dramatic rests violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Pugliese yumba bass with dramatic rests piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Pugliese yumba bass with dramatic rests piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Pugliese yumba bass with dramatic rests low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Pugliese yumba bass with dramatic rests upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "salgan",
      "name": "Salgán",
      "description": "Salgán: Salgan syncopated piano and rich countermelody. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Salgan syncopated piano and rich countermelody", "contrapuntal ostinati", "irregular accent layering", "independent inner figures"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "highly articulated piano", "chamber-like interplay", "fast ornamental figures", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "extended chords", "altered dominants", "chromatic substitutions", "contrapuntal voice leading", "quartal colors"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Salgan syncopated piano and rich countermelody bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Salgan syncopated piano and rich countermelody bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Salgan syncopated piano and rich countermelody violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Salgan syncopated piano and rich countermelody violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Salgan syncopated piano and rich countermelody piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Salgan syncopated piano and rich countermelody piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Salgan syncopated piano and rich countermelody low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Salgan syncopated piano and rich countermelody upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "tango-cancion",
      "name": "Tango Canción",
      "description": "Tango Canción: tango cancion slow voice and bandoneon reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tango cancion slow voice and bandoneon reply", "sparse accompaniment under voice", "instrumental answering phrase"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "singer-led rubato", "long legato melody", "expressive portamento", "accent", "vibrato", "legato_squeeze", "tenuto", "legato-single-note"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "richer cadential delay", "chromatic approach", "romantic sevenths/ninths"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "bandoneon"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tango cancion slow voice and bandoneon reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "tango cancion slow voice and bandoneon reply voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tango cancion slow voice and bandoneon reply bandoneon statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "tango cancion slow voice and bandoneon reply bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tango cancion slow voice and bandoneon reply piano accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tango cancion slow voice and bandoneon reply piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tango cancion slow voice and bandoneon reply guitar accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tango cancion slow voice and bandoneon reply guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tango cancion slow voice and bandoneon reply low anchor", "role": "bass", "onsets": [0], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "tango cancion slow voice and bandoneon reply upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "guitar": ["accent", "staccato", "legato", "legato-single-note", "vibrato"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "legato-single-note", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "milonga",
      "name": "Milonga",
      "description": "Milonga: milonga habanera bass and short guitar chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Crisp 2/4 habanera milonga syncopation on piano and bandoneon with traspie violin leap", "milonga habanera bass and short guitar chords", "habanera", "fast 2/4", "repeated bass cells", "light syncopation"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "short dry articulation", "minimal rubato", "habanera / milonga syncopated rhythm", "snappy high-speed footwork (traspié)", "bright staccato bandoneón chords", "joyful urban spirit", "accent", "legato_squeeze", "tenuto", "vibrato", "legato-single-note"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "simpler functional cycles", "tonic/dominant focus", "occasional chromatic passing chord"],
      "meter": "2/4",
      "tempo": [130, 146],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["D", "A7", "D", "A7"],
        "verse": ["D", "A7", "D", "A7", "D", "G", "A7", "D"],
        "coda": ["A7", "A7", "D", "D"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "milonga habanera bass and short guitar chords bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "milonga habanera bass and short guitar chords bandoneon cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "milonga habanera bass and short guitar chords violin statement", "role": "lead", "onsets": [0], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "milonga habanera bass and short guitar chords violin cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "milonga habanera bass and short guitar chords guitar accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "milonga habanera bass and short guitar chords guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "milonga habanera bass and short guitar chords piano accompaniment", "role": "harmony", "onsets": [0, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "milonga habanera bass and short guitar chords piano cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "milonga habanera bass and short guitar chords low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.5]},
        {"name": "milonga habanera bass and short guitar chords upright-bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "guitar": ["accent", "staccato", "legato", "legato-single-note", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "legato-single-note", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "vals",
      "name": "Vals",
      "description": "Vals: vals flowing ternary violin and bandoneon. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["vals flowing ternary violin and bandoneon", "3/4 rotational bass", "1–2–3 sweeping accompaniment", "cross-bar melody"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "circular phrasing", "lighter accents", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "functional waltz progressions", "secondary dominants", "smooth inversions"],
      "meter": "3/4",
      "tempo": [160, 176],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "vals flowing ternary violin and bandoneon bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vals flowing ternary violin and bandoneon bandoneon cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vals flowing ternary violin and bandoneon violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "vals flowing ternary violin and bandoneon violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vals flowing ternary violin and bandoneon piano accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "vals flowing ternary violin and bandoneon piano cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vals flowing ternary violin and bandoneon low anchor", "role": "bass", "onsets": [0], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "vals flowing ternary violin and bandoneon upright-bass cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "piazzolla-nuevo-tango",
      "name": "Piazzolla / Nuevo Tango",
      "description": "Piazzolla / Nuevo Tango: nuevo tango angular 3 plus 3 plus 2 and chromatic line. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["nuevo tango angular 3 plus 3 plus 2 and chromatic line", "ostinati", "asymmetric meters", "additive rhythms", "contrapuntal bass"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "extended string effects", "aggressive bandoneón", "glissando", "percussive piano", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "ninths/elevenths/thirteenths", "altered dominants", "quartal harmony", "pedal points", "nonfunctional chromaticism"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "nuevo tango angular 3 plus 3 plus 2 and chromatic line upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "electrotango-gotan",
      "name": "Electrotango / Gotan",
      "description": "Electrotango / Gotan: Gotan electrotango loop and bandoneon hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gotan electrotango loop and bandoneon hook", "downtempo breakbeat", "electronic kick/snare", "looped tango cells"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "sampled bandoneón", "filtered strings", "sidechain", "texture chopping", "accent", "legato_squeeze", "tenuto", "vibrato", "ghost", "open", "roll"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "minor/modal loops", "suspended chords", "extended pads", "static harmony"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon"],
        "harmony": ["piano", "synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Gotan electrotango loop and bandoneon hook bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gotan electrotango loop and bandoneon hook bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gotan electrotango loop and bandoneon hook piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Gotan electrotango loop and bandoneon hook piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gotan electrotango loop and bandoneon hook synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Gotan electrotango loop and bandoneon hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gotan electrotango loop and bandoneon hook low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "Gotan electrotango loop and bandoneon hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gotan electrotango loop and bandoneon hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Gotan electrotango loop and bandoneon hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Gotan electrotango loop and bandoneon hook sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Gotan electrotango loop and bandoneon hook sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "synth": ["accent", "staccato", "legato", "portamento", "vibrato"],
        "drums": ["accent", "staccato", "ghost", "open", "roll"],
        "sampler": ["accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "portamento", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "portamento", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "staccato", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "sampler:percussion": {
          "allowedTechniques": ["accent", "staccato", "legato"],
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
      "id": "electro-rock-bajofondo",
      "name": "Electro-Rock / Bajofondo",
      "description": "Electro-Rock / Bajofondo: Bajofondo electronic rock groove and bandoneon answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bajofondo electronic rock groove and bandoneon answer", "rock backbeat + tango syncopation", "distorted bass ostinati"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "distortion", "aggressive bowing", "electronic drops", "accent", "legato_squeeze", "tenuto", "vibrato", "ghost", "open", "roll"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "modal/minor riffs", "power-chord layers", "chromatic tango cadences"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon"],
        "harmony": ["piano", "synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Bajofondo electronic rock groove and bandoneon answer bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Bajofondo electronic rock groove and bandoneon answer synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Bajofondo electronic rock groove and bandoneon answer drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Bajofondo electronic rock groove and bandoneon answer sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bajofondo electronic rock groove and bandoneon answer sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "synth": ["accent", "staccato", "legato", "portamento", "vibrato"],
        "drums": ["accent", "staccato", "ghost", "open", "roll"],
        "sampler": ["accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "synth:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "portamento", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "portamento", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "staccato", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "sampler:percussion": {
          "allowedTechniques": ["accent", "staccato", "legato"],
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
      "id": "modern-orquesta",
      "name": "Modern Orquesta",
      "description": "Modern Orquesta: modern orquesta alternating ensemble attacks and lyrical lines. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern orquesta alternating ensemble attacks and lyrical lines", "Golden-Age vocabulary with much larger dynamic blocks"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "exaggerated attack", "raw ensemble unison", "harsh bow/bellows accents", "accent", "legato_squeeze", "tenuto", "vibrato"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "traditional tango harmony with denser voicings and modern dissonance"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["bandoneon", "violin"],
        "harmony": ["piano"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines bandoneon statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["bandoneon"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines bandoneon cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bandoneon"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "modern orquesta alternating ensemble attacks and lyrical lines upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "bandoneon": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "piano": ["accent", "staccato", "legato", "marcato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"]
      },
      "instrumentDialects": {
        "bandoneon:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "legato_squeeze", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "marcato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "tenuto"],
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
      "id": "chacarera-crossover",
      "name": "Chacarera Crossover",
      "description": "Chacarera Crossover: chacarera six-eight guitar and bombo cross accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["chacarera six-eight guitar and bombo cross accents", "6/8 against 3/4", "bombo accents", "guitar hemiola"],
      "techniques": ["marcato", "staccato", "legato", "pizzicato", "arco", "bellows-accent", "portamento", "rubato", "folk strumming", "bombo rim/body differentiation", "accent", "vibrato", "strum", "legato-single-note", "ghost", "roll", "open"],
      "harmony": ["Am", "Dm", "E7", "C", "G7", "modal/diatonic folk progressions", "pedal tones", "thirds/sixths"],
      "meter": "6/8",
      "tempo": [112, 128],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["bombo-leguero"]
      },
      "progressions": {
        "intro": ["Am", "Dm", "E7", "Am"],
        "A": ["C", "G7", "C", "E7"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "A", "bars": 8},
        {"label": "B", "bars": 8},
        {"label": "A", "bars": 8},
        {"label": "variacion", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "chacarera six-eight guitar and bombo cross accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "chacarera six-eight guitar and bombo cross accents voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chacarera six-eight guitar and bombo cross accents violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "chacarera six-eight guitar and bombo cross accents violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chacarera six-eight guitar and bombo cross accents guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "chacarera six-eight guitar and bombo cross accents guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chacarera six-eight guitar and bombo cross accents low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "chacarera six-eight guitar and bombo cross accents bass cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chacarera six-eight guitar and bombo cross accents bombo-leguero pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["bombo-leguero"], "cycleLength": 1, "articulation": "accent"},
        {"name": "chacarera six-eight guitar and bombo cross accents bombo-leguero cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["bombo-leguero"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
        "guitar": ["accent", "staccato", "legato", "strum", "legato-single-note", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "bombo-leguero": ["accent", "staccato", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "pizzicato", "arco", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "strum", "legato-single-note", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "bombo-leguero:percussion": {
          "allowedTechniques": ["accent", "staccato", "ghost", "roll", "open"],
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
    }
  ]
});
