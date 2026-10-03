import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "classical",
  "name": "Classical",
  "family": "European concert tradition",
  "color": "#700e61",
  "description": "Classical is an independent musical world. European concert tradition idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classical Orchestra",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["violin", "flute", "string-ensemble", "cello", "timpani", "harpsichord", "viola"],
  "roles": {
    "lead": ["violin", "flute"],
    "harmony": ["string-ensemble"],
    "bass": ["cello"],
    "percussion": ["timpani"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major", "whole-tone", "chromatic"],
  "chordQualities": ["C", "F", "G7", "Am", "Dm", "Cmaj9", "D9", "E9", "Abmaj7", "Bb9"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["orchestral theme development and cadence", "Baroque running sequence and continuo bass", "Romantic lyrical rubato and string swell", "Impressionist planed color chords and whole tone line", "Modernist displaced accents and chromatic cells", "Minimalist repeated pulse with additive entries", "chamber conversational motifs and bow contrast"],
  "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classical-orchestra",
      "name": "Classical Orchestra",
      "description": "Classical Orchestra: orchestral theme development and cadence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["orchestral theme development and cadence"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"]
      },
      "progressions": {
        "exposition": ["C", "F", "G7", "C"],
        "development": ["C", "F", "G7", "C"],
        "recapitulation": ["Am", "Dm", "G7", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "exposition", "bars": 4},
        {"label": "development", "bars": 8},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "orchestral theme development and cadence violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "orchestral theme development and cadence violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral theme development and cadence flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "orchestral theme development and cadence flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral theme development and cadence string-ensemble accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "orchestral theme development and cadence string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral theme development and cadence low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "orchestral theme development and cadence cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral theme development and cadence timpani pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "orchestral theme development and cadence timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
        "timpani": ["staccato", "accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "accent", "ghost", "open", "roll"],
          "defaultTechnique": "staccato"
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
      "id": "baroque",
      "name": "Baroque",
      "description": "Baroque: Baroque running sequence and continuo bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Baroque running sequence and continuo bass"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["harpsichord"],
        "bass": ["cello"]
      },
      "progressions": {
        "prelude": ["C", "F", "G7", "C"],
        "dance": ["C", "F", "G7", "C"],
        "sequence": ["Am", "Dm", "G7", "C"],
        "cadence": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "dance", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "return", "bars": 8},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Baroque running sequence and continuo bass violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Baroque running sequence and continuo bass violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Baroque running sequence and continuo bass flute statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Baroque running sequence and continuo bass flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Baroque running sequence and continuo bass harpsichord accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["harpsichord"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Baroque running sequence and continuo bass harpsichord cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["harpsichord"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Baroque running sequence and continuo bass low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "Baroque running sequence and continuo bass cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "harpsichord": ["staccato", "legato", "trill", "accent", "tenuto"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "harpsichord:harmony": {
          "allowedTechniques": ["staccato", "legato", "trill", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
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
      "id": "romantic",
      "name": "Romantic",
      "description": "Romantic: Romantic lyrical rubato and string swell. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Romantic lyrical rubato and string swell"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "major",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"]
      },
      "progressions": {
        "exposition": ["C", "F", "G7", "C"],
        "development": ["C", "F", "G7", "C"],
        "recapitulation": ["Am", "Dm", "G7", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "exposition", "bars": 4},
        {"label": "development", "bars": 8},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Romantic lyrical rubato and string swell violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "Romantic lyrical rubato and string swell violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Romantic lyrical rubato and string swell flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "Romantic lyrical rubato and string swell flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Romantic lyrical rubato and string swell string-ensemble accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Romantic lyrical rubato and string swell string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Romantic lyrical rubato and string swell low anchor", "role": "bass", "onsets": [0], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "Romantic lyrical rubato and string swell cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Romantic lyrical rubato and string swell timpani pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Romantic lyrical rubato and string swell timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
        "timpani": ["staccato", "accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "accent", "ghost", "open", "roll"],
          "defaultTechnique": "staccato"
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
      "id": "impressionist",
      "name": "Impressionist",
      "description": "Impressionist: Impressionist planed color chords and whole tone line. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Impressionist planed color chords and whole tone line"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Cmaj9", "D9", "E9", "Abmaj7", "Bb9"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "whole-tone",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"]
      },
      "progressions": {
        "theme": ["Cmaj9", "D9", "E9", "Cmaj9"],
        "development": ["Abmaj7", "Bb9", "Cmaj9", "Cmaj9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "exposition", "bars": 4},
        {"label": "development", "bars": 8},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Impressionist planed color chords and whole tone line violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "Impressionist planed color chords and whole tone line violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Impressionist planed color chords and whole tone line flute statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "Impressionist planed color chords and whole tone line flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Impressionist planed color chords and whole tone line string-ensemble accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Impressionist planed color chords and whole tone line string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Impressionist planed color chords and whole tone line low anchor", "role": "bass", "onsets": [0], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "Impressionist planed color chords and whole tone line cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Impressionist planed color chords and whole tone line timpani pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Impressionist planed color chords and whole tone line timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
        "timpani": ["staccato", "accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "accent", "ghost", "open", "roll"],
          "defaultTechnique": "staccato"
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
      "id": "modernist",
      "name": "Modernist",
      "description": "Modernist: Modernist displaced accents and chromatic cells. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Modernist displaced accents and chromatic cells"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "7/8",
      "tempo": [104, 120],
      "scale": "chromatic",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"]
      },
      "progressions": {
        "exposition": ["C", "F", "G7", "C"],
        "development": ["C", "F", "G7", "C"],
        "recapitulation": ["Am", "Dm", "G7", "C"],
        "coda": ["C"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "exposition", "bars": 4},
        {"label": "development", "bars": 8},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Modernist displaced accents and chromatic cells violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Modernist displaced accents and chromatic cells violin cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.25], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Modernist displaced accents and chromatic cells flute statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45], "articulation": "legato"},
        {"name": "Modernist displaced accents and chromatic cells flute cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.25], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Modernist displaced accents and chromatic cells string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Modernist displaced accents and chromatic cells string-ensemble cadence fill", "role": "harmony", "onsets": [2.5, 3.0, 3.25], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Modernist displaced accents and chromatic cells low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Modernist displaced accents and chromatic cells cello cadence fill", "role": "bass", "onsets": [2.5, 3.0, 3.25], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Modernist displaced accents and chromatic cells timpani pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Modernist displaced accents and chromatic cells timpani cadence fill", "role": "percussion", "onsets": [2.5, 3.0, 3.25], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
        "timpani": ["staccato", "accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "accent", "ghost", "open", "roll"],
          "defaultTechnique": "staccato"
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
      "id": "minimalist",
      "name": "Minimalist",
      "description": "Minimalist: Minimalist repeated pulse with additive entries. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Minimalist repeated pulse with additive entries"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["violin", "flute"],
        "harmony": ["string-ensemble"],
        "bass": ["cello"],
        "percussion": ["timpani"]
      },
      "progressions": {
        "exposition": ["C", "F", "G7", "C"],
        "development": ["C", "F", "G7", "C"],
        "recapitulation": ["Am", "Dm", "G7", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "exposition", "bars": 4},
        {"label": "development", "bars": 8},
        {"label": "recapitulation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Minimalist repeated pulse with additive entries violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Minimalist repeated pulse with additive entries violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minimalist repeated pulse with additive entries flute statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["flute"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Minimalist repeated pulse with additive entries flute cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["flute"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minimalist repeated pulse with additive entries string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Minimalist repeated pulse with additive entries string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minimalist repeated pulse with additive entries low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "Minimalist repeated pulse with additive entries cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minimalist repeated pulse with additive entries timpani pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Minimalist repeated pulse with additive entries timpani cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timpani"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "flute": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "string-ensemble": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
        "timpani": ["staccato", "accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "flute:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "staccato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "timpani:percussion": {
          "allowedTechniques": ["staccato", "accent", "ghost", "open", "roll"],
          "defaultTechnique": "staccato"
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
      "id": "chamber",
      "name": "Chamber",
      "description": "Chamber: chamber conversational motifs and bow contrast. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["chamber conversational motifs and bow contrast"],
      "techniques": ["legato", "staccato", "trill", "tremolo", "pizzicato", "arco", "vibrato", "folk-vibrato", "accent", "tenuto"],
      "harmony": ["C", "F", "G7", "Am", "Dm"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["violin"],
        "harmony": ["viola"],
        "bass": ["cello"]
      },
      "progressions": {
        "theme": ["C", "F", "G7", "C"],
        "dialogue": ["C", "F", "G7", "C"],
        "development": ["Am", "Dm", "G7", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "theme", "bars": 4},
        {"label": "dialogue", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "return", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "chamber conversational motifs and bow contrast violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "chamber conversational motifs and bow contrast violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chamber conversational motifs and bow contrast viola accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["viola"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "chamber conversational motifs and bow contrast viola cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["viola"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chamber conversational motifs and bow contrast low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["cello"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "chamber conversational motifs and bow contrast cello cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["cello"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "violin": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
        "viola": ["legato", "tremolo", "pizzicato", "accent"],
        "cello": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "tremolo", "pizzicato", "vibrato", "arco", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "viola:harmony": {
          "allowedTechniques": ["legato", "tremolo", "pizzicato", "accent"],
          "defaultTechnique": "legato"
        },
        "cello:bass": {
          "allowedTechniques": ["arco", "pizzicato", "legato", "staccato", "tremolo", "vibrato", "tenuto", "accent"],
          "defaultTechnique": "arco"
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
