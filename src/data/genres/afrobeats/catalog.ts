import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West Africa / Global pop",
  "color": "#9194aa",
  "description": "Afrobeats is an independent musical world. West Africa / Global pop idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary Afrobeats",
  "meter": "4/4",
  "tempo": [98, 114],
  "instruments": ["voice", "guitar", "rhodes", "bass", "drums", "shaker", "synth", "sampler"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "rhodes"],
    "bass": ["bass"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "Em7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Gbmaj7", "Fm7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["shaker-led offbeat guitar hook", "bright refrain and syncopated bass", "Afrofusion cross-rhythm hook", "sparse alté displaced backbeat", "melismatic R&B lead in guitar gaps"],
  "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary-afrobeats",
      "name": "Contemporary Afrobeats",
      "description": "Contemporary Afrobeats: shaker-led offbeat guitar hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["shaker-led offbeat guitar hook"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "shaker-led offbeat guitar hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "shaker-led offbeat guitar hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shaker-led offbeat guitar hook guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "shaker-led offbeat guitar hook guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shaker-led offbeat guitar hook rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "shaker-led offbeat guitar hook rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shaker-led offbeat guitar hook low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "shaker-led offbeat guitar hook bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "shaker-led offbeat guitar hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "shaker-led offbeat guitar hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "shaker-led offbeat guitar hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "shaker-led offbeat guitar hook shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
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
      "id": "afropop",
      "name": "Afropop",
      "description": "Afropop: bright refrain and syncopated bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap", "bright refrain and syncopated bass"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "syncopated kick/clap pocket", "clean guitar chops", "infectious melody hooks", "shaker perpetual motion", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Fmaj7", "G", "Em7", "Am7"],
        "verse": ["Fmaj7", "G", "Em7", "Am7"],
        "chorus": ["Dm7", "Em7", "Fmaj7", "G"],
        "coda": ["Am7", "G", "Fmaj7", "Em7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bright refrain and syncopated bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bright refrain and syncopated bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bright refrain and syncopated bass guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bright refrain and syncopated bass guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bright refrain and syncopated bass rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bright refrain and syncopated bass rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bright refrain and syncopated bass low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "bright refrain and syncopated bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bright refrain and syncopated bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "bright refrain and syncopated bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "bright refrain and syncopated bass shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bright refrain and syncopated bass shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
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
      "id": "afrofusion",
      "name": "Afrofusion",
      "description": "Afrofusion: Afrofusion cross-rhythm hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Afrofusion cross-rhythm hook"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Afrofusion cross-rhythm hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Afrofusion cross-rhythm hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afrofusion cross-rhythm hook guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Afrofusion cross-rhythm hook guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afrofusion cross-rhythm hook rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Afrofusion cross-rhythm hook rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afrofusion cross-rhythm hook low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Afrofusion cross-rhythm hook bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afrofusion cross-rhythm hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Afrofusion cross-rhythm hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Afrofusion cross-rhythm hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Afrofusion cross-rhythm hook shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
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
      "id": "alte",
      "name": "Alté",
      "description": "Alté: sparse alté displaced backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Lo-fi filtered Rhodes chords over relaxed half-time kick/snare and dreamy vocals", "sparse alté displaced backbeat"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "lo-fi filtered keys", "laid-back drum pockets", "atmospheric autotuned vocals", "indie R&B textures", "accent", "staccato", "legato", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Dbmaj7", "Bbm7", "Ebm7", "Ab7"],
        "verse": ["Dbmaj7", "Bbm7", "Ebm7", "Ab7"],
        "chorus": ["Gbmaj7", "Fm7", "Ebm7", "Ab7"],
        "coda": ["Dbmaj7", "Bbm7", "Gbmaj7", "Ab7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sparse alté displaced backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sparse alté displaced backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sparse alté displaced backbeat rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "sparse alté displaced backbeat rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sparse alté displaced backbeat low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "sparse alté displaced backbeat synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sparse alté displaced backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "sparse alté displaced backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "sparse alté displaced backbeat sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sparse alté displaced backbeat sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "synth": ["vibrato", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "synth:bass": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["accent"],
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
      "id": "randb-afrobeats",
      "name": "R&B Afrobeats",
      "description": "R&B Afrobeats: melismatic R&B lead in guitar gaps. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["melismatic R&B lead in guitar gaps"],
      "techniques": ["muted-strum", "pluck", "ghost-note", "vibrato", "melisma", "call-response", "accent", "staccato", "legato", "strum", "ghost", "tenuto", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "rhodes"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "melismatic R&B lead in guitar gaps voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "melismatic R&B lead in guitar gaps voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melismatic R&B lead in guitar gaps guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "melismatic R&B lead in guitar gaps guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melismatic R&B lead in guitar gaps rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "melismatic R&B lead in guitar gaps rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melismatic R&B lead in guitar gaps low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "melismatic R&B lead in guitar gaps bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melismatic R&B lead in guitar gaps kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "melismatic R&B lead in guitar gaps drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "melismatic R&B lead in guitar gaps shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "melismatic R&B lead in guitar gaps shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "guitar": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
        "rhodes": ["ghost", "accent", "staccato", "legato", "tenuto"],
        "bass": ["ghost-note", "ghost", "accent", "staccato", "legato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["vibrato", "strum", "muted-strum", "pluck", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato",
          "variantId": "solid-electric"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["ghost", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "ghost"
        },
        "bass:bass": {
          "allowedTechniques": ["ghost-note", "ghost", "accent", "staccato", "legato"],
          "defaultTechnique": "ghost-note"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
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
