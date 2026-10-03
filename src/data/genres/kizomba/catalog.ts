import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "Angola / Lusophone Africa",
  "color": "#7d37d2",
  "description": "Kizomba is an independent musical world. Angola / Lusophone Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "4/4",
  "tempo": [84, 100],
  "instruments": ["voice", "guitar", "synth", "bass", "drums", "dikanza"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "synth"],
    "bass": ["bass"],
    "percussion": ["drums", "dikanza"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "C", "G", "Dm", "Bb", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "E7", "Fm", "Db", "Bbm", "C7"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["traditional bass pickup and warm guitar chords", "semba-derived guitar dance and bass movement", "passada relaxed vocal phrase and guitar response", "tarraxinha sparse sub pulse and slow chord space", "urban kiz staccato bass and electronic breaks", "ghetto zouk crossover R&B lead and synth hook", "fusion kiz guitar and electronic call response"],
  "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: traditional bass pickup and warm guitar chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["traditional bass pickup and warm guitar chords"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "traditional bass pickup and warm guitar chords voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "traditional bass pickup and warm guitar chords voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional bass pickup and warm guitar chords guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "traditional bass pickup and warm guitar chords synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "traditional bass pickup and warm guitar chords bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "traditional bass pickup and warm guitar chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "traditional bass pickup and warm guitar chords drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "traditional bass pickup and warm guitar chords dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "traditional bass pickup and warm guitar chords dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "semba-derived",
      "name": "Semba-Derived",
      "description": "Semba-Derived: semba-derived guitar dance and bass movement. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["semba-derived guitar dance and bass movement"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "semba-derived guitar dance and bass movement voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "semba-derived guitar dance and bass movement voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "semba-derived guitar dance and bass movement guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement synth accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "semba-derived guitar dance and bass movement synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "semba-derived guitar dance and bass movement bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "semba-derived guitar dance and bass movement kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "semba-derived guitar dance and bass movement drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "semba-derived guitar dance and bass movement dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "semba-derived guitar dance and bass movement dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "passada",
      "name": "Passada",
      "description": "Passada: passada relaxed vocal phrase and guitar response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gentle acoustic guitar strumming and warm bass accompanying smooth continuous walking step", "passada relaxed vocal phrase and guitar response"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "continuous, smooth, elegant walking steps", "flowing partner connection without sharp breaks", "warm Cabo-Verdean / Angolan melodies", "gentle hip movement in sync with steps", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am7", "Dm7", "G7", "Cmaj7"],
        "verse": ["Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Dm7", "E7", "Am7"],
        "chorus": ["Dm7", "G7", "Cmaj7", "Fmaj7", "Dm7", "E7", "Am7", "Am7"],
        "coda": ["Dm7", "E7", "Am7", "Am7"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "passada relaxed vocal phrase and guitar response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "passada relaxed vocal phrase and guitar response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "passada relaxed vocal phrase and guitar response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "passada relaxed vocal phrase and guitar response synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "passada relaxed vocal phrase and guitar response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "passada relaxed vocal phrase and guitar response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "passada relaxed vocal phrase and guitar response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "passada relaxed vocal phrase and guitar response dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "passada relaxed vocal phrase and guitar response dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "tarraxinha",
      "name": "Tarraxinha",
      "description": "Tarraxinha: tarraxinha sparse sub pulse and slow chord space. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Deep resonant sub-bass pulse dropping on slow pelvic micro-isolation cue", "tarraxinha sparse sub pulse and slow chord space"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "slow, hypnotic, minimal percussive beats", "massive subterranean sub-bass frequencies", "intense static pelvic micro-movements", "minimal melodic distraction", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "loop": ["Fm", "Db", "Bbm", "C7"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tarraxinha sparse sub pulse and slow chord space voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tarraxinha sparse sub pulse and slow chord space voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tarraxinha sparse sub pulse and slow chord space guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tarraxinha sparse sub pulse and slow chord space synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "tarraxinha sparse sub pulse and slow chord space bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarraxinha sparse sub pulse and slow chord space kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "tarraxinha sparse sub pulse and slow chord space drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "tarraxinha sparse sub pulse and slow chord space dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tarraxinha sparse sub pulse and slow chord space dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "urban-kiz",
      "name": "Urban Kiz",
      "description": "Urban Kiz: urban kiz staccato bass and electronic breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Sharp syncopated electronic sub-bass stop followed by instant linear step and sliding synth pad", "urban kiz staccato bass and electronic breaks"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "strict linear geometric footwork and sharp isolations", "electronic Ghetto Zouk beats with sub-bass drops", "sudden dynamic breaks and tempo illusions", "tension-and-release partnering", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "breakdown": ["F", "G", "Am", "Am", "F", "G", "Am", "Am"],
        "coda": ["F", "G", "Am", "Am"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "urban kiz staccato bass and electronic breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban kiz staccato bass and electronic breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "urban kiz staccato bass and electronic breaks guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "urban kiz staccato bass and electronic breaks synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "urban kiz staccato bass and electronic breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban kiz staccato bass and electronic breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "urban kiz staccato bass and electronic breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "urban kiz staccato bass and electronic breaks dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban kiz staccato bass and electronic breaks dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "ghetto-zouk-crossover",
      "name": "Ghetto-Zouk Crossover",
      "description": "Ghetto-Zouk Crossover: ghetto zouk crossover R&B lead and synth hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["ghetto zouk crossover R&B lead and synth hook"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ghetto zouk crossover R&B lead and synth hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ghetto zouk crossover R&B lead and synth hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ghetto zouk crossover R&B lead and synth hook guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ghetto zouk crossover R&B lead and synth hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "ghetto zouk crossover R&B lead and synth hook bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ghetto zouk crossover R&B lead and synth hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "ghetto zouk crossover R&B lead and synth hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "ghetto zouk crossover R&B lead and synth hook dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ghetto zouk crossover R&B lead and synth hook dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
      "id": "fusion-kiz",
      "name": "Fusion Kiz",
      "description": "Fusion Kiz: fusion kiz guitar and electronic call response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fusion kiz guitar and electronic call response"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "slide", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "dikanza"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
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
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion kiz guitar and electronic call response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion kiz guitar and electronic call response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion kiz guitar and electronic call response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion kiz guitar and electronic call response synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "fusion kiz guitar and electronic call response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion kiz guitar and electronic call response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "fusion kiz guitar and electronic call response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "fusion kiz guitar and electronic call response dikanza pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["dikanza"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fusion kiz guitar and electronic call response dikanza cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["dikanza"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "dikanza": ["ghost", "accent", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "slide", "strum", "arpeggio", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "dikanza:percussion": {
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
    }
  ]
};
