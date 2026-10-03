import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "swing",
  "name": "Swing",
  "family": "United States / Jazz dance",
  "color": "#ce04e5",
  "description": "Swing is an independent musical world. United States / Jazz dance idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "West Coast Swing",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["trumpet", "tenor-sax", "piano", "guitar", "upright-bass", "drums", "sampler", "synth"],
  "roles": {
    "lead": ["trumpet", "tenor-sax"],
    "harmony": ["piano", "guitar"],
    "bass": ["upright-bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C6", "A7", "Dm7", "G7", "F6", "Fm6"],
  "harmonicRhythm": "bar",
  "cadences": ["G7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["West Coast swung pocket with blues answers", "West Coast Swing: swung eighths", "West Coast Swing: walking bass", "West Coast Swing: ride pattern", "Lindy Hop ride swing and horn riff", "Lindy Hop: swung eighths", "Lindy Hop: walking bass", "Lindy Hop: ride pattern", "Balboa close brisk swing and bass quarters", "Balboa: swung eighths", "Balboa: walking bass", "Balboa: ride pattern", "Charleston syncopated two-beat horn cell", "Charleston: swung eighths", "Charleston: walking bass", "Charleston: ride pattern", "slow swing spacious horn and brushes", "Slow Swing: swung eighths", "Slow Swing: walking bass", "Slow Swing: ride pattern", "electro swing sampled horn over dance kick", "Electro-Swing: swung eighths", "Electro-Swing: walking bass", "Electro-Swing: ride pattern", "fusion swing swung drums and electric harmony", "Fusion Swing: swung eighths", "Fusion Swing: walking bass", "Fusion Swing: ride pattern"],
  "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "west-coast-swing",
      "name": "West Coast Swing",
      "description": "West Coast Swing: West Coast swung pocket with blues answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["West Coast swung pocket with blues answers", "West Coast Swing: swung eighths", "West Coast Swing: walking bass", "West Coast Swing: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "West Coast Swing: horn falls", "West Coast Swing: scoops", "West Coast Swing: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "West Coast Swing: dominant sevenths", "West Coast Swing: ii-V", "West Coast Swing: rhythm changes"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "West Coast swung pocket with blues answers trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "West Coast swung pocket with blues answers trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "West Coast swung pocket with blues answers tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "West Coast swung pocket with blues answers tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "West Coast swung pocket with blues answers piano accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "West Coast swung pocket with blues answers piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "West Coast swung pocket with blues answers guitar accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "West Coast swung pocket with blues answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "West Coast swung pocket with blues answers low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "West Coast swung pocket with blues answers upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "West Coast swung pocket with blues answers kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "West Coast swung pocket with blues answers drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
      "id": "lindy-hop",
      "name": "Lindy Hop",
      "description": "Lindy Hop: Lindy Hop ride swing and horn riff. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Lindy Hop ride swing and horn riff", "Lindy Hop: swung eighths", "Lindy Hop: walking bass", "Lindy Hop: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Lindy Hop: horn falls", "Lindy Hop: scoops", "Lindy Hop: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Lindy Hop: dominant sevenths", "Lindy Hop: ii-V", "Lindy Hop: rhythm changes"],
      "meter": "4/4",
      "tempo": [160, 176],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Lindy Hop ride swing and horn riff trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Lindy Hop ride swing and horn riff trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Lindy Hop ride swing and horn riff tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Lindy Hop ride swing and horn riff tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Lindy Hop ride swing and horn riff piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Lindy Hop ride swing and horn riff piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Lindy Hop ride swing and horn riff guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Lindy Hop ride swing and horn riff guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Lindy Hop ride swing and horn riff low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "Lindy Hop ride swing and horn riff upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Lindy Hop ride swing and horn riff kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "Lindy Hop ride swing and horn riff drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
      "id": "balboa",
      "name": "Balboa",
      "description": "Balboa: Balboa close brisk swing and bass quarters. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Balboa close brisk swing and bass quarters", "Balboa: swung eighths", "Balboa: walking bass", "Balboa: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Balboa: horn falls", "Balboa: scoops", "Balboa: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Balboa: dominant sevenths", "Balboa: ii-V", "Balboa: rhythm changes"],
      "meter": "4/4",
      "tempo": [184, 200],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Balboa close brisk swing and bass quarters trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Balboa close brisk swing and bass quarters trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balboa close brisk swing and bass quarters tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Balboa close brisk swing and bass quarters tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balboa close brisk swing and bass quarters piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Balboa close brisk swing and bass quarters piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balboa close brisk swing and bass quarters guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Balboa close brisk swing and bass quarters guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balboa close brisk swing and bass quarters low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "Balboa close brisk swing and bass quarters upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balboa close brisk swing and bass quarters kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "Balboa close brisk swing and bass quarters drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
      "id": "charleston",
      "name": "Charleston",
      "description": "Charleston: Charleston syncopated two-beat horn cell. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Charleston syncopated two-beat horn cell", "Charleston: swung eighths", "Charleston: walking bass", "Charleston: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Charleston: horn falls", "Charleston: scoops", "Charleston: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Charleston: dominant sevenths", "Charleston: ii-V", "Charleston: rhythm changes"],
      "meter": "4/4",
      "tempo": [176, 192],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Charleston syncopated two-beat horn cell trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charleston syncopated two-beat horn cell trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charleston syncopated two-beat horn cell tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charleston syncopated two-beat horn cell tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charleston syncopated two-beat horn cell piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Charleston syncopated two-beat horn cell piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charleston syncopated two-beat horn cell guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Charleston syncopated two-beat horn cell guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charleston syncopated two-beat horn cell low anchor", "role": "bass", "onsets": [0, 1.5, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Charleston syncopated two-beat horn cell upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charleston syncopated two-beat horn cell kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Charleston syncopated two-beat horn cell drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
      "id": "slow-swing",
      "name": "Slow Swing",
      "description": "Slow Swing: slow swing spacious horn and brushes. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["slow swing spacious horn and brushes", "Slow Swing: swung eighths", "Slow Swing: walking bass", "Slow Swing: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Slow Swing: horn falls", "Slow Swing: scoops", "Slow Swing: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Slow Swing: dominant sevenths", "Slow Swing: ii-V", "Slow Swing: rhythm changes"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "slow swing spacious horn and brushes trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "slow swing spacious horn and brushes trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow swing spacious horn and brushes tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "slow swing spacious horn and brushes tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow swing spacious horn and brushes piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "slow swing spacious horn and brushes piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow swing spacious horn and brushes guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "slow swing spacious horn and brushes guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow swing spacious horn and brushes low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "slow swing spacious horn and brushes upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow swing spacious horn and brushes kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "slow swing spacious horn and brushes drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
      "id": "electro-swing",
      "name": "Electro-Swing",
      "description": "Electro-Swing: electro swing sampled horn over dance kick. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electro swing sampled horn over dance kick", "Electro-Swing: swung eighths", "Electro-Swing: walking bass", "Electro-Swing: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Electro-Swing: horn falls", "Electro-Swing: scoops", "Electro-Swing: shakes", "fall", "shake", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Electro-Swing: dominant sevenths", "Electro-Swing: ii-V", "Electro-Swing: rhythm changes"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["trumpet"],
        "harmony": ["piano", "sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "electro swing sampled horn over dance kick trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electro swing sampled horn over dance kick trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro swing sampled horn over dance kick piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electro swing sampled horn over dance kick piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro swing sampled horn over dance kick sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electro swing sampled horn over dance kick sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro swing sampled horn over dance kick low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "electro swing sampled horn over dance kick synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro swing sampled horn over dance kick kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "electro swing sampled horn over dance kick drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "sampler": ["staccato", "legato", "accent"],
        "synth": ["staccato", "legato", "vibrato", "accent"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
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
      "id": "fusion-swing",
      "name": "Fusion Swing",
      "description": "Fusion Swing: fusion swing swung drums and electric harmony. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fusion swing swung drums and electric harmony", "Fusion Swing: swung eighths", "Fusion Swing: walking bass", "Fusion Swing: ride pattern"],
      "techniques": ["staccato", "legato", "walking", "comping", "ghost-note", "vibrato", "double-stop", "Fusion Swing: horn falls", "Fusion Swing: scoops", "Fusion Swing: shakes", "fall", "shake", "accent", "tenuto", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["C6", "A7", "Dm7", "G7", "F6", "Fm6", "Fusion Swing: dominant sevenths", "Fusion Swing: ii-V", "Fusion Swing: rhythm changes"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C6", "A7", "Dm7", "G7"],
        "head": ["C6", "A7", "Dm7", "G7"],
        "solo": ["F6", "Fm6", "C6", "G7"],
        "tag": ["G7", "C6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion swing swung drums and electric harmony trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion swing swung drums and electric harmony trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion swing swung drums and electric harmony tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion swing swung drums and electric harmony tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion swing swung drums and electric harmony piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion swing swung drums and electric harmony piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion swing swung drums and electric harmony guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion swing swung drums and electric harmony guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion swing swung drums and electric harmony low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "fusion swing swung drums and electric harmony upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion swing swung drums and electric harmony kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "fusion swing swung drums and electric harmony drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "fall", "shake", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "double-stop", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
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
