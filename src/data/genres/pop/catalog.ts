import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "pop",
  "name": "Pop",
  "family": "Global popular music",
  "color": "#b21afc",
  "description": "Pop is an independent musical world. Global popular music idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "guitar", "piano", "bass", "drums", "synth", "sampler", "rhodes", "string-ensemble"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "piano"],
    "bass": ["bass"],
    "percussion": ["drums"],
    "texture": ["synth"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "G", "Am", "F", "Em", "Dm9", "G13", "Cmaj9", "A7b9", "Fmaj7", "Em7", "Dm7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["contemporary verse chorus and vocal response", "dance pop kick and stacked chorus hook", "synth pop sequenced bass and bright chord hook", "city pop jazz chords and melodic electric bass", "indie pop guitar hook and light backbeat", "dream pop sustained guitar and floating vocal", "art pop shifting phrase lengths and color chords", "power pop ringing guitar and driving chorus", "maximal idol pop rap break and layered chorus"],
  "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary",
      "name": "Contemporary",
      "description": "Contemporary: contemporary verse chorus and vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["contemporary verse chorus and vocal response"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "contemporary verse chorus and vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary verse chorus and vocal response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary verse chorus and vocal response guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary verse chorus and vocal response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary verse chorus and vocal response piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary verse chorus and vocal response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary verse chorus and vocal response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "contemporary verse chorus and vocal response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary verse chorus and vocal response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "contemporary verse chorus and vocal response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "contemporary verse chorus and vocal response synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "dance-pop",
      "name": "Dance Pop",
      "description": "Dance Pop: dance pop kick and stacked chorus hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["dance pop kick and stacked chorus hook"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dance pop kick and stacked chorus hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dance pop kick and stacked chorus hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dance pop kick and stacked chorus hook synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "dance pop kick and stacked chorus hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dance pop kick and stacked chorus hook piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "dance pop kick and stacked chorus hook piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dance pop kick and stacked chorus hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "dance pop kick and stacked chorus hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dance pop kick and stacked chorus hook kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "dance pop kick and stacked chorus hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "dance pop kick and stacked chorus hook sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dance pop kick and stacked chorus hook sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "dance pop kick and stacked chorus hook synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "synth-pop",
      "name": "Synth-Pop",
      "description": "Synth-Pop: synth pop sequenced bass and bright chord hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["synth pop sequenced bass and bright chord hook"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [110, 126],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "synth pop sequenced bass and bright chord hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "synth pop sequenced bass and bright chord hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synth pop sequenced bass and bright chord hook synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "synth pop sequenced bass and bright chord hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synth pop sequenced bass and bright chord hook piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "synth pop sequenced bass and bright chord hook piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synth pop sequenced bass and bright chord hook low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "synth pop sequenced bass and bright chord hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synth pop sequenced bass and bright chord hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "synth pop sequenced bass and bright chord hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "synth pop sequenced bass and bright chord hook sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "synth pop sequenced bass and bright chord hook sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "synth pop sequenced bass and bright chord hook synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "city-pop",
      "name": "City Pop",
      "description": "City Pop: city pop jazz chords and melodic electric bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["city pop jazz chords and melodic electric bass"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "muted-strum", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7b9", "Fmaj7", "Em7", "Dm7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["string-ensemble"]
      },
      "progressions": {
        "verse": ["Dm9", "G13", "Cmaj9", "A7b9"],
        "chorus": ["Fmaj7", "Em7", "Dm7", "G13"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "city pop jazz chords and melodic electric bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "city pop jazz chords and melodic electric bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "city pop jazz chords and melodic electric bass rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "city pop jazz chords and melodic electric bass rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "city pop jazz chords and melodic electric bass guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "city pop jazz chords and melodic electric bass guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "city pop jazz chords and melodic electric bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "city pop jazz chords and melodic electric bass bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "city pop jazz chords and melodic electric bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "city pop jazz chords and melodic electric bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "city pop jazz chords and melodic electric bass string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "string-ensemble": ["legato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
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
      "id": "indie-pop",
      "name": "Indie Pop",
      "description": "Indie Pop: indie pop guitar hook and light backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["indie pop guitar hook and light backbeat"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "indie pop guitar hook and light backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "indie pop guitar hook and light backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "indie pop guitar hook and light backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "indie pop guitar hook and light backbeat guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "indie pop guitar hook and light backbeat piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "indie pop guitar hook and light backbeat piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "indie pop guitar hook and light backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "indie pop guitar hook and light backbeat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "indie pop guitar hook and light backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "indie pop guitar hook and light backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "indie pop guitar hook and light backbeat synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "dream-pop",
      "name": "Dream Pop",
      "description": "Dream Pop: dream pop sustained guitar and floating vocal. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["dream pop sustained guitar and floating vocal"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth", "piano"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dream pop sustained guitar and floating vocal voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dream pop sustained guitar and floating vocal voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dream pop sustained guitar and floating vocal synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "dream pop sustained guitar and floating vocal synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dream pop sustained guitar and floating vocal piano accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "dream pop sustained guitar and floating vocal piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dream pop sustained guitar and floating vocal low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "dream pop sustained guitar and floating vocal synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dream pop sustained guitar and floating vocal kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "dream pop sustained guitar and floating vocal drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "dream pop sustained guitar and floating vocal sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dream pop sustained guitar and floating vocal sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "dream pop sustained guitar and floating vocal synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "synth": ["legato", "vibrato", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "drums": ["ghost", "accent", "open", "roll"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "polysynth"
        },
        "piano:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "art-pop",
      "name": "Art Pop",
      "description": "Art Pop: art pop shifting phrase lengths and color chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["art pop shifting phrase lengths and color chords"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "7/8",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "art pop shifting phrase lengths and color chords voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "art pop shifting phrase lengths and color chords voice cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.25], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "art pop shifting phrase lengths and color chords guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "art pop shifting phrase lengths and color chords guitar cadence fill", "role": "harmony", "onsets": [2.5, 3.0, 3.25], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "art pop shifting phrase lengths and color chords piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "art pop shifting phrase lengths and color chords piano cadence fill", "role": "harmony", "onsets": [2.5, 3.0, 3.25], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "art pop shifting phrase lengths and color chords low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "art pop shifting phrase lengths and color chords bass cadence fill", "role": "bass", "onsets": [2.5, 3.0, 3.25], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "art pop shifting phrase lengths and color chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "art pop shifting phrase lengths and color chords drums cadence fill", "role": "percussion", "onsets": [2.5, 3.0, 3.25], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "art pop shifting phrase lengths and color chords synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.5], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "power-pop",
      "name": "Power Pop",
      "description": "Power Pop: power pop ringing guitar and driving chorus. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["power pop ringing guitar and driving chorus"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "power pop ringing guitar and driving chorus voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "power pop ringing guitar and driving chorus voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "power pop ringing guitar and driving chorus guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "power pop ringing guitar and driving chorus guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "power pop ringing guitar and driving chorus piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "power pop ringing guitar and driving chorus piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "power pop ringing guitar and driving chorus low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "power pop ringing guitar and driving chorus bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "power pop ringing guitar and driving chorus kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "power pop ringing guitar and driving chorus drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "power pop ringing guitar and driving chorus synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
      "id": "maximal-idol-pop",
      "name": "Maximal Idol Pop",
      "description": "Maximal Idol Pop: maximal idol pop rap break and layered chorus. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["maximal idol pop rap break and layered chorus"],
      "techniques": ["legato", "vibrato", "melisma", "strum", "short-chord-stab", "ghost-note", "arpeggio", "accent", "staccato", "legato-single-note", "muted-strum", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C", "G", "Am", "F", "Em"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "major",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "piano"],
        "bass": ["bass"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["C", "G", "Am", "F"],
        "chorus": ["F", "G", "Em", "Am"],
        "outro": ["Am", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "rap break", "bars": 8},
        {"label": "pre-chorus", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "dance break", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "maximal idol pop rap break and layered chorus voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "maximal idol pop rap break and layered chorus voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "maximal idol pop rap break and layered chorus guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "maximal idol pop rap break and layered chorus guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "maximal idol pop rap break and layered chorus piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "maximal idol pop rap break and layered chorus piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "maximal idol pop rap break and layered chorus low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "maximal idol pop rap break and layered chorus bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "maximal idol pop rap break and layered chorus kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "maximal idol pop rap break and layered chorus drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "maximal idol pop rap break and layered chorus synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "guitar": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "synth": ["legato", "vibrato", "accent", "staccato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "piano:harmony": {
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
        "synth:texture": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato",
          "patchId": "synth-strings"
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
