import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "funk",
  "name": "Funk",
  "family": "African American / United States",
  "color": "#e8916f",
  "description": "Funk is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Funk",
  "meter": "4/4",
  "tempo": [96, 112],
  "instruments": ["voice", "trumpet", "guitar", "clavinet", "bass", "drums", "synth", "rhodes", "piano", "string-ensemble"],
  "roles": {
    "lead": ["voice", "trumpet"],
    "harmony": ["guitar", "clavinet"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["dorian"],
  "chordQualities": ["Em7", "Am7", "B7", "E7#9", "A7", "Cmaj7", "Bm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "C7", "Eb", "Ab"],
  "harmonicRhythm": "bar",
  "cadences": ["Em7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["sixteenth-note scratch guitar and bass pocket", "James Brown downbeat hits and interlocking rests", "P-Funk elastic bass and synth response", "jazz funk Rhodes extensions and horn exchange", "Minneapolis drum machine and clipped synth guitar", "disco kick with octave bass and string stabs", "Philly disco lush strings over dance rhythm", "boogie synth bass and electric piano stabs", "Hi-NRG driving octave synth bass"],
  "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "funk",
      "name": "Funk",
      "description": "Funk: sixteenth-note scratch guitar and bass pocket. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sixteenth-note scratch guitar and bass pocket"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["guitar", "clavinet"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sixteenth-note scratch guitar and bass pocket voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sixteenth-note scratch guitar and bass pocket voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sixteenth-note scratch guitar and bass pocket trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sixteenth-note scratch guitar and bass pocket trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sixteenth-note scratch guitar and bass pocket guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "sixteenth-note scratch guitar and bass pocket guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sixteenth-note scratch guitar and bass pocket clavinet accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["clavinet"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "sixteenth-note scratch guitar and bass pocket clavinet cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["clavinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sixteenth-note scratch guitar and bass pocket low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "sixteenth-note scratch guitar and bass pocket bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sixteenth-note scratch guitar and bass pocket kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "sixteenth-note scratch guitar and bass pocket drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "clavinet": ["staccato", "ghost", "accent"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "clavinet:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "james-brown-the-one",
      "name": "James Brown / The One",
      "description": "James Brown / The One: James Brown downbeat hits and interlocking rests. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["James Brown downbeat hits and interlocking rests"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["guitar", "clavinet"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "James Brown downbeat hits and interlocking rests voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "James Brown downbeat hits and interlocking rests voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "James Brown downbeat hits and interlocking rests trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "James Brown downbeat hits and interlocking rests trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "James Brown downbeat hits and interlocking rests guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "James Brown downbeat hits and interlocking rests guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "James Brown downbeat hits and interlocking rests clavinet accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["clavinet"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "James Brown downbeat hits and interlocking rests clavinet cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["clavinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "James Brown downbeat hits and interlocking rests low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "James Brown downbeat hits and interlocking rests bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "James Brown downbeat hits and interlocking rests kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "James Brown downbeat hits and interlocking rests drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "clavinet": ["staccato", "ghost", "accent"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "clavinet:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "p-funk",
      "name": "P-Funk",
      "description": "P-Funk: P-Funk elastic bass and synth response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Massive downbeat \"ONE\" followed by Bootsy envelope-filter bass bubble and synth squelch", "P-Funk elastic bass and synth response"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "absolute emphasis on \"The One\"", "Mu-Tron envelope filtered bass (Bootsy Collins)", "Bernie Worrell Minimoog squelches", "layered humorous party chants", "accent", "legato", "vibrato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [94, 110],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E7#9", "E7#9", "E7#9", "E7#9"],
        "groove": ["E7#9", "E7#9", "A7", "E7#9", "E7#9", "E7#9", "B7", "E7#9"],
        "break": ["A7", "A7", "E7#9", "E7#9", "B7", "A7", "E7#9", "E7#9"],
        "coda": ["E7#9", "E7#9", "E7#9", "E7#9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "synth", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "P-Funk elastic bass and synth response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "P-Funk elastic bass and synth response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "P-Funk elastic bass and synth response synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "P-Funk elastic bass and synth response synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "P-Funk elastic bass and synth response guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "P-Funk elastic bass and synth response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "P-Funk elastic bass and synth response rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "P-Funk elastic bass and synth response rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "P-Funk elastic bass and synth response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "P-Funk elastic bass and synth response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "P-Funk elastic bass and synth response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "P-Funk elastic bass and synth response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "ghost", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "jazz-funk",
      "name": "Jazz-Funk",
      "description": "Jazz-Funk: jazz funk Rhodes extensions and horn exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["jazz funk Rhodes extensions and horn exchange"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "tenuto", "strum", "ghost", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "trumpet"],
        "harmony": ["guitar", "clavinet"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jazz funk Rhodes extensions and horn exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazz funk Rhodes extensions and horn exchange voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazz funk Rhodes extensions and horn exchange trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazz funk Rhodes extensions and horn exchange trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazz funk Rhodes extensions and horn exchange guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jazz funk Rhodes extensions and horn exchange guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazz funk Rhodes extensions and horn exchange clavinet accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["clavinet"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "jazz funk Rhodes extensions and horn exchange clavinet cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["clavinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazz funk Rhodes extensions and horn exchange low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "jazz funk Rhodes extensions and horn exchange bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazz funk Rhodes extensions and horn exchange kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "jazz funk Rhodes extensions and horn exchange drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "clavinet": ["staccato", "ghost", "accent"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "clavinet:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "minneapolis",
      "name": "Minneapolis",
      "description": "Minneapolis: Minneapolis drum machine and clipped synth guitar. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Minneapolis drum machine and clipped synth guitar"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [110, 126],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "synth", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Minneapolis drum machine and clipped synth guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Minneapolis drum machine and clipped synth guitar voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minneapolis drum machine and clipped synth guitar synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Minneapolis drum machine and clipped synth guitar synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minneapolis drum machine and clipped synth guitar guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Minneapolis drum machine and clipped synth guitar guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minneapolis drum machine and clipped synth guitar rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Minneapolis drum machine and clipped synth guitar rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minneapolis drum machine and clipped synth guitar low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Minneapolis drum machine and clipped synth guitar bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Minneapolis drum machine and clipped synth guitar kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Minneapolis drum machine and clipped synth guitar drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "ghost", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "disco",
      "name": "Disco",
      "description": "Disco: disco kick with octave bass and string stabs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Nile Rodgers 16th-note chucking guitar rhythm locked with driving octave disco bassline", "disco kick with octave bass and string stabs"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "Nile Rodgers \"chucking\" rhythm guitar style", "Bernard Edwards driving octave slap/finger bass", "four-on-the-floor kick with open hi-hat on every upbeat", "sweeping string orchestra lines", "accent", "legato", "vibrato", "strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["string-ensemble"]
      },
      "progressions": {
        "intro": ["Em7", "A7", "Em7", "A7"],
        "verse": ["Em7", "A7", "Em7", "A7", "Em7", "A7", "Em7", "A7"],
        "chorus": ["Cmaj7", "Bm7", "Am7", "Bm7", "Cmaj7", "Bm7", "Em7", "Em7"],
        "coda": ["Cmaj7", "Bm7", "Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "disco kick with octave bass and string stabs voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "disco kick with octave bass and string stabs voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco kick with octave bass and string stabs guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "disco kick with octave bass and string stabs guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco kick with octave bass and string stabs piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "disco kick with octave bass and string stabs piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco kick with octave bass and string stabs low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "disco kick with octave bass and string stabs bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco kick with octave bass and string stabs kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "disco kick with octave bass and string stabs drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "disco kick with octave bass and string stabs string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "open", "staccato", "accent", "roll"],
        "string-ensemble": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "accent", "roll"],
          "defaultTechnique": "ghost"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
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
      "id": "philly-disco",
      "name": "Philly Disco",
      "description": "Philly Disco: Philly disco lush strings over dance rhythm. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Philly disco lush strings over dance rhythm"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["string-ensemble"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Philly disco lush strings over dance rhythm voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Philly disco lush strings over dance rhythm voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly disco lush strings over dance rhythm guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Philly disco lush strings over dance rhythm guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly disco lush strings over dance rhythm piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Philly disco lush strings over dance rhythm piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly disco lush strings over dance rhythm low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Philly disco lush strings over dance rhythm bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly disco lush strings over dance rhythm kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "Philly disco lush strings over dance rhythm drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Philly disco lush strings over dance rhythm string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"],
        "string-ensemble": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
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
      "id": "boogie",
      "name": "Boogie",
      "description": "Boogie: boogie synth bass and electric piano stabs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Fat analog synth bass bounce driving under crisp handclap backbeat and bright Rhodes chords", "boogie synth bass and electric piano stabs"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "heavy Minimoog/Pro-One synth basslines", "handclap and snare backbeats", "shimmering electric piano chords", "smooth soulful vocal hooks", "accent", "legato", "vibrato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Fm7", "Bbm7", "Eb7", "Abmaj7"],
        "verse": ["Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Bbm7", "C7", "C7"],
        "chorus": ["Dbmaj7", "Eb", "Fm7", "Ab", "Dbmaj7", "Eb", "Fm7", "Fm7"],
        "coda": ["Dbmaj7", "Eb", "Fm7", "Fm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "synth", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "boogie synth bass and electric piano stabs voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "boogie synth bass and electric piano stabs voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogie synth bass and electric piano stabs synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "boogie synth bass and electric piano stabs synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogie synth bass and electric piano stabs guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "boogie synth bass and electric piano stabs guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogie synth bass and electric piano stabs rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "boogie synth bass and electric piano stabs rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogie synth bass and electric piano stabs low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "boogie synth bass and electric piano stabs bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "boogie synth bass and electric piano stabs kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "boogie synth bass and electric piano stabs drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "ghost", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "hi-nrg",
      "name": "Hi-NRG",
      "description": "Hi-NRG: Hi-NRG driving octave synth bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Hi-NRG driving octave synth bass"],
      "techniques": ["muted-strum", "short-chord-stab", "slap", "pop", "ghost-note", "staccato", "call-response", "accent", "legato", "vibrato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Em7", "Am7", "B7"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "dorian",
      "roles": {
        "lead": ["voice", "synth"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Em7", "Em7"],
        "groove": ["Em7", "Em7"],
        "break": ["Am7", "B7", "Em7", "Em7"],
        "outro": ["Em7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "synth", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Hi-NRG driving octave synth bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Hi-NRG driving octave synth bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hi-NRG driving octave synth bass synth statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Hi-NRG driving octave synth bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hi-NRG driving octave synth bass guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Hi-NRG driving octave synth bass guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hi-NRG driving octave synth bass rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Hi-NRG driving octave synth bass rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hi-NRG driving octave synth bass low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Hi-NRG driving octave synth bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Hi-NRG driving octave synth bass kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "Hi-NRG driving octave synth bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "ghost", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "strum", "short-chord-stab", "muted-strum", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "ghost", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "pop", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
