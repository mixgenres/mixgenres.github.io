import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "amapiano",
  "name": "Amapiano",
  "family": "South Africa",
  "color": "#8ba99a",
  "description": "Amapiano is an independent musical world. South Africa idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["synth", "piano", "rhodes", "log-drum", "drums", "shaker", "voice", "sampler"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["piano", "rhodes"],
    "bass": ["log-drum"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["log-drum call after piano stabs", "jazzy Rhodes chords with restrained log drum", "vocal response above rolling log drum", "pitched log-drum pickup clusters", "Bacardi percussion and whistle response", "Gqom broken kick and dark sparse bass", "kwaito offbeat chant and bass hook"],
  "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: log-drum call after piano stabs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["log-drum call after piano stabs"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "log-drum call after piano stabs synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "log-drum call after piano stabs synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "log-drum call after piano stabs piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "log-drum call after piano stabs piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "log-drum call after piano stabs rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "log-drum call after piano stabs rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "log-drum call after piano stabs low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "log-drum call after piano stabs log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "log-drum call after piano stabs kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "log-drum call after piano stabs drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "log-drum call after piano stabs shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "log-drum call after piano stabs shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "private-school",
      "name": "Private School",
      "description": "Private School: jazzy Rhodes chords with restrained log drum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["jazzy Rhodes chords with restrained log drum"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "jazzy Rhodes chords with restrained log drum synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "jazzy Rhodes chords with restrained log drum synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazzy Rhodes chords with restrained log drum piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "jazzy Rhodes chords with restrained log drum piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazzy Rhodes chords with restrained log drum rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "jazzy Rhodes chords with restrained log drum rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazzy Rhodes chords with restrained log drum low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "jazzy Rhodes chords with restrained log drum log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jazzy Rhodes chords with restrained log drum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "jazzy Rhodes chords with restrained log drum drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "jazzy Rhodes chords with restrained log drum shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "jazzy Rhodes chords with restrained log drum shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "vocal",
      "name": "Vocal",
      "description": "Vocal: vocal response above rolling log drum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["vocal response above rolling log drum"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["piano", "synth"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "vocal response above rolling log drum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "vocal response above rolling log drum voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vocal response above rolling log drum piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "vocal response above rolling log drum piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vocal response above rolling log drum synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "vocal response above rolling log drum synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vocal response above rolling log drum low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "vocal response above rolling log drum log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "vocal response above rolling log drum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "vocal response above rolling log drum drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "vocal response above rolling log drum shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "vocal response above rolling log drum shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "log-drum-heavy",
      "name": "Log-Drum Heavy",
      "description": "Log-Drum Heavy: pitched log-drum pickup clusters. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["pitched log-drum pickup clusters"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "pitched log-drum pickup clusters synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pitched log-drum pickup clusters synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pitched log-drum pickup clusters piano accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "pitched log-drum pickup clusters piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pitched log-drum pickup clusters rhodes accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "pitched log-drum pickup clusters rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pitched log-drum pickup clusters low anchor", "role": "bass", "onsets": [0, 1.75, 2.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "pitched log-drum pickup clusters log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pitched log-drum pickup clusters kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "pitched log-drum pickup clusters drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "pitched log-drum pickup clusters shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pitched log-drum pickup clusters shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "bacardi",
      "name": "Bacardi",
      "description": "Bacardi: Bacardi percussion and whistle response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bacardi percussion and whistle response"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Bacardi percussion and whistle response synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bacardi percussion and whistle response synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bacardi percussion and whistle response piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bacardi percussion and whistle response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bacardi percussion and whistle response rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bacardi percussion and whistle response rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bacardi percussion and whistle response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Bacardi percussion and whistle response log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bacardi percussion and whistle response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Bacardi percussion and whistle response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Bacardi percussion and whistle response shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bacardi percussion and whistle response shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "gqom-crossover",
      "name": "Gqom Crossover",
      "description": "Gqom Crossover: Gqom broken kick and dark sparse bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gqom broken kick and dark sparse bass"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Gqom broken kick and dark sparse bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gqom broken kick and dark sparse bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gqom broken kick and dark sparse bass low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "Gqom broken kick and dark sparse bass synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gqom broken kick and dark sparse bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Gqom broken kick and dark sparse bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Gqom broken kick and dark sparse bass sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Gqom broken kick and dark sparse bass sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "kwaito-crossover",
      "name": "Kwaito Crossover",
      "description": "Kwaito Crossover: kwaito offbeat chant and bass hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kwaito offbeat chant and bass hook"],
      "techniques": ["short-chord-stab", "glide", "ghost-note", "roll", "legato", "accent", "staccato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "G", "Fmaj7", "Dm7", "C", "Bb"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["piano", "rhodes"],
        "bass": ["log-drum"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "G", "Fmaj7", "G"],
        "groove": ["Am7", "G", "Fmaj7", "G"],
        "breakdown": ["Dm7", "C", "Bb", "C"],
        "outro": ["C", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "vocal", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "kwaito offbeat chant and bass hook synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kwaito offbeat chant and bass hook synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwaito offbeat chant and bass hook piano accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "kwaito offbeat chant and bass hook piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwaito offbeat chant and bass hook rhodes accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "kwaito offbeat chant and bass hook rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwaito offbeat chant and bass hook low anchor", "role": "bass", "onsets": [0.5, 1.75, 2.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.25]},
        {"name": "kwaito offbeat chant and bass hook log-drum cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["log-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwaito offbeat chant and bass hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "kwaito offbeat chant and bass hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "kwaito offbeat chant and bass hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "kwaito offbeat chant and bass hook shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "log-drum": ["ghost", "roll", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "saw-lead"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "log-drum:bass": {
          "allowedTechniques": ["ghost", "roll", "accent", "staccato"],
          "defaultTechnique": "ghost"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
