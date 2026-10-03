import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban / Afro-Cuban",
  "color": "#266417",
  "description": "Timba is an independent musical world. Cuban / Afro-Cuban idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic Timba",
  "meter": "4/4",
  "tempo": [100, 116],
  "instruments": ["voice", "trumpet", "trombone", "piano", "bass", "congas", "timbales", "drums", "cowbell"],
  "roles": {
    "lead": ["voice", "trumpet", "trombone"],
    "harmony": ["piano"],
    "bass": ["bass"],
    "percussion": ["congas", "timbales", "drums", "cowbell"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "D7"],
  "harmonicRhythm": "bar",
  "cadences": ["Dm7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["timba piano tumbao and bass gear changes", "full gear vocabulary", "multiple piano/bass patterns per section", "songo drum conga interlock and bass displacement", "kit + conga groove", "more continuous pocket", "Irakere jazz funk horns and piano montuno", "Afro-Cuban jazz/funk", "complex odd accents", "NG La Banda dense horn bloques and bass tumbao", "aggressive horn bloques", "dense piano", "Charanga Habanera synth piano and explosive breaks", "extreme gear contrast", "sudden bombas", "displaced bass", "Bamboleo funk bass and female vocal response", "smoother pocket", "R&B-oriented vocal sections", "Paulito FG coro development and gear shifts", "lyrical verse, complex montuno escalation", "Manolin chant coro and percussion breaks", "hook-heavy coro repetition", "direct street groove", "Havana D Primera melodic trumpet and vocal coro", "polished modern tumbao", "controlled gears", "Maykel Blanco percussive piano and sharp bloques", "dancer-focused breaks", "frequent bloques", "timba funk slap bass and syncopated horn hits", "funk pocket + clave-aware percussion", "modern timba layered coro and band breaks", "International / Modern Timba: gear change", "International / Modern Timba: bomba", "International / Modern Timba: presión"],
  "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic-timba",
      "name": "Classic Timba",
      "description": "Classic Timba: timba piano tumbao and bass gear changes. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["timba piano tumbao and bass gear changes", "full gear vocabulary", "multiple piano/bass patterns per section"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "sudden breakdowns", "high-energy horn blocks", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "extended dominants", "chromatic passing harmony", "modal gears"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "timba piano tumbao and bass gear changes voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba piano tumbao and bass gear changes voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba piano tumbao and bass gear changes trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba piano tumbao and bass gear changes trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba piano tumbao and bass gear changes trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba piano tumbao and bass gear changes trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba piano tumbao and bass gear changes piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "timba piano tumbao and bass gear changes piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba piano tumbao and bass gear changes low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "timba piano tumbao and bass gear changes bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba piano tumbao and bass gear changes congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba piano tumbao and bass gear changes congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "timba piano tumbao and bass gear changes timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba piano tumbao and bass gear changes timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "timba piano tumbao and bass gear changes kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "timba piano tumbao and bass gear changes drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "timba piano tumbao and bass gear changes cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba piano tumbao and bass gear changes cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "songo",
      "name": "Songo",
      "description": "Songo: songo drum conga interlock and bass displacement. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Changuito songo drum-kit groove locking with syncopated electric bass and charanga flute", "songo drum conga interlock and bass displacement", "kit + conga groove", "more continuous pocket"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "ghosted snare", "syncopated kick", "funk bass", "Changuito innovative hybrid drum kit and timbale rhythm", "linear cowbell and woodblock patterns", "syncopated electric bass playing around the downbeat", "charanga flute blending with brass and electronics", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "jazz-funk sevenths/ninths", "smoother cycling"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Gm7", "C7", "Gm7", "C7"],
        "groove": ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "A7", "D7"],
        "coda": ["Gm7", "C7", "Gm7", "Gm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "songo drum conga interlock and bass displacement voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "songo drum conga interlock and bass displacement trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "songo drum conga interlock and bass displacement trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "songo drum conga interlock and bass displacement piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "songo drum conga interlock and bass displacement piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "songo drum conga interlock and bass displacement low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "songo drum conga interlock and bass displacement bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "songo drum conga interlock and bass displacement congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "songo drum conga interlock and bass displacement congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "songo drum conga interlock and bass displacement timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "songo drum conga interlock and bass displacement timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "songo drum conga interlock and bass displacement kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "songo drum conga interlock and bass displacement drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "songo drum conga interlock and bass displacement cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "songo drum conga interlock and bass displacement cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "irakere-jazz-funk-precursor",
      "name": "Irakere / Jazz-Funk Precursor",
      "description": "Irakere / Jazz-Funk Precursor: Irakere jazz funk horns and piano montuno. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Irakere jazz funk horns and piano montuno", "Afro-Cuban jazz/funk", "complex odd accents"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "virtuosic horn lines", "jazz solo articulation", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "modal jazz", "altered dominants", "quartal voicings"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Irakere jazz funk horns and piano montuno voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Irakere jazz funk horns and piano montuno trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Irakere jazz funk horns and piano montuno trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Irakere jazz funk horns and piano montuno piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Irakere jazz funk horns and piano montuno piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Irakere jazz funk horns and piano montuno low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Irakere jazz funk horns and piano montuno bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Irakere jazz funk horns and piano montuno congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Irakere jazz funk horns and piano montuno congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Irakere jazz funk horns and piano montuno timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Irakere jazz funk horns and piano montuno timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Irakere jazz funk horns and piano montuno kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Irakere jazz funk horns and piano montuno drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Irakere jazz funk horns and piano montuno cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Irakere jazz funk horns and piano montuno cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "ng-la-banda-early-timba",
      "name": "NG La Banda / Early Timba",
      "description": "NG La Banda / Early Timba: NG La Banda dense horn bloques and bass tumbao. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["NG La Banda dense horn bloques and bass tumbao", "aggressive horn bloques", "dense piano"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "very sharp brass attacks", "virtuosic rhythm-section interplay", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "sophisticated jazz-derived extensions"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "NG La Banda dense horn bloques and bass tumbao voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "NG La Banda dense horn bloques and bass tumbao voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "NG La Banda dense horn bloques and bass tumbao trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "NG La Banda dense horn bloques and bass tumbao trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "NG La Banda dense horn bloques and bass tumbao trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "NG La Banda dense horn bloques and bass tumbao trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "NG La Banda dense horn bloques and bass tumbao piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "NG La Banda dense horn bloques and bass tumbao piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "NG La Banda dense horn bloques and bass tumbao low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "NG La Banda dense horn bloques and bass tumbao bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "NG La Banda dense horn bloques and bass tumbao congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "NG La Banda dense horn bloques and bass tumbao congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "NG La Banda dense horn bloques and bass tumbao timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "NG La Banda dense horn bloques and bass tumbao timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "NG La Banda dense horn bloques and bass tumbao kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "NG La Banda dense horn bloques and bass tumbao drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "NG La Banda dense horn bloques and bass tumbao cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "NG La Banda dense horn bloques and bass tumbao cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "charanga-habanera",
      "name": "Charanga Habanera",
      "description": "Charanga Habanera: Charanga Habanera synth piano and explosive breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Charanga Habanera synth piano and explosive breaks", "extreme gear contrast", "sudden bombas", "displaced bass"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "hard mute/unmute, explosive percussion", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "simpler vamps during high-energy gears, richer harmony elsewhere"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Charanga Habanera synth piano and explosive breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charanga Habanera synth piano and explosive breaks trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charanga Habanera synth piano and explosive breaks trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charanga Habanera synth piano and explosive breaks piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Charanga Habanera synth piano and explosive breaks piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charanga Habanera synth piano and explosive breaks low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Charanga Habanera synth piano and explosive breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Charanga Habanera synth piano and explosive breaks congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Charanga Habanera synth piano and explosive breaks congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Charanga Habanera synth piano and explosive breaks timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Charanga Habanera synth piano and explosive breaks timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Charanga Habanera synth piano and explosive breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Charanga Habanera synth piano and explosive breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Charanga Habanera synth piano and explosive breaks cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Charanga Habanera synth piano and explosive breaks cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "bamboleo",
      "name": "Bamboleo",
      "description": "Bamboleo: Bamboleo funk bass and female vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bamboleo funk bass and female vocal response", "smoother pocket", "R&B-oriented vocal sections"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "legato vocal backing", "polished keyboard voicings", "legato", "accent", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "R&B/jazz sevenths/ninths"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Bamboleo funk bass and female vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bamboleo funk bass and female vocal response trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bamboleo funk bass and female vocal response trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bamboleo funk bass and female vocal response piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bamboleo funk bass and female vocal response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bamboleo funk bass and female vocal response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Bamboleo funk bass and female vocal response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bamboleo funk bass and female vocal response congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bamboleo funk bass and female vocal response congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Bamboleo funk bass and female vocal response timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bamboleo funk bass and female vocal response timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Bamboleo funk bass and female vocal response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Bamboleo funk bass and female vocal response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Bamboleo funk bass and female vocal response cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bamboleo funk bass and female vocal response cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "legato", "accent", "vibrato"],
        "trumpet": ["staccato", "legato", "accent", "tenuto", "vibrato"],
        "trombone": ["staccato", "legato", "accent"],
        "piano": ["staccato", "legato", "montuno", "accent", "tenuto"],
        "bass": ["staccato", "legato", "ghost-note", "slap", "ghost", "accent"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "montuno", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost-note", "slap", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "paulito-fg",
      "name": "Paulito FG",
      "description": "Paulito FG: Paulito FG coro development and gear shifts. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Paulito FG coro development and gear shifts", "lyrical verse, complex montuno escalation"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "restrained verse articulation", "hard coro gear", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "romantic extended harmony + timba dominant vamps"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Paulito FG coro development and gear shifts voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Paulito FG coro development and gear shifts voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Paulito FG coro development and gear shifts trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Paulito FG coro development and gear shifts trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Paulito FG coro development and gear shifts trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Paulito FG coro development and gear shifts trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Paulito FG coro development and gear shifts piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Paulito FG coro development and gear shifts piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Paulito FG coro development and gear shifts low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "Paulito FG coro development and gear shifts bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Paulito FG coro development and gear shifts congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Paulito FG coro development and gear shifts congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Paulito FG coro development and gear shifts timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Paulito FG coro development and gear shifts timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Paulito FG coro development and gear shifts kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Paulito FG coro development and gear shifts drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Paulito FG coro development and gear shifts cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Paulito FG coro development and gear shifts cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "manolin",
      "name": "Manolín",
      "description": "Manolín: Manolin chant coro and percussion breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Manolin chant coro and percussion breaks", "hook-heavy coro repetition", "direct street groove"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "shouted response", "aggressive percussion", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "simpler repetitive harmony"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Manolin chant coro and percussion breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Manolin chant coro and percussion breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Manolin chant coro and percussion breaks trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Manolin chant coro and percussion breaks trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Manolin chant coro and percussion breaks trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Manolin chant coro and percussion breaks trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Manolin chant coro and percussion breaks piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Manolin chant coro and percussion breaks piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Manolin chant coro and percussion breaks low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "Manolin chant coro and percussion breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Manolin chant coro and percussion breaks congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Manolin chant coro and percussion breaks congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Manolin chant coro and percussion breaks timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Manolin chant coro and percussion breaks timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Manolin chant coro and percussion breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Manolin chant coro and percussion breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Manolin chant coro and percussion breaks cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Manolin chant coro and percussion breaks cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "havana-dprimera",
      "name": "Havana D'Primera",
      "description": "Havana D'Primera: Havana D Primera melodic trumpet and vocal coro. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Havana D Primera melodic trumpet and vocal coro", "polished modern tumbao", "controlled gears"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "tight brass", "clean piano articulation", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "balanced jazz/salsa vocabulary"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Havana D Primera melodic trumpet and vocal coro voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Havana D Primera melodic trumpet and vocal coro voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Havana D Primera melodic trumpet and vocal coro trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Havana D Primera melodic trumpet and vocal coro trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Havana D Primera melodic trumpet and vocal coro trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Havana D Primera melodic trumpet and vocal coro trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Havana D Primera melodic trumpet and vocal coro piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Havana D Primera melodic trumpet and vocal coro piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Havana D Primera melodic trumpet and vocal coro low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "Havana D Primera melodic trumpet and vocal coro bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Havana D Primera melodic trumpet and vocal coro congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Havana D Primera melodic trumpet and vocal coro congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Havana D Primera melodic trumpet and vocal coro timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Havana D Primera melodic trumpet and vocal coro timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Havana D Primera melodic trumpet and vocal coro kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Havana D Primera melodic trumpet and vocal coro drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Havana D Primera melodic trumpet and vocal coro cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Havana D Primera melodic trumpet and vocal coro cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "maykel-blanco",
      "name": "Maykel Blanco",
      "description": "Maykel Blanco: Maykel Blanco percussive piano and sharp bloques. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Maykel Blanco percussive piano and sharp bloques", "dancer-focused breaks", "frequent bloques"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "percussion showmanship", "sharp horn hits", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "functional timba with clear tension/release"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Maykel Blanco percussive piano and sharp bloques voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Maykel Blanco percussive piano and sharp bloques voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Maykel Blanco percussive piano and sharp bloques trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Maykel Blanco percussive piano and sharp bloques trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Maykel Blanco percussive piano and sharp bloques trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Maykel Blanco percussive piano and sharp bloques trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Maykel Blanco percussive piano and sharp bloques piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Maykel Blanco percussive piano and sharp bloques piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Maykel Blanco percussive piano and sharp bloques low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "Maykel Blanco percussive piano and sharp bloques bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Maykel Blanco percussive piano and sharp bloques congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Maykel Blanco percussive piano and sharp bloques congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Maykel Blanco percussive piano and sharp bloques timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Maykel Blanco percussive piano and sharp bloques timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Maykel Blanco percussive piano and sharp bloques kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Maykel Blanco percussive piano and sharp bloques drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Maykel Blanco percussive piano and sharp bloques cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Maykel Blanco percussive piano and sharp bloques cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "timba-funk",
      "name": "Timba-Funk",
      "description": "Timba-Funk: timba funk slap bass and syncopated horn hits. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["timba funk slap bass and syncopated horn hits", "funk pocket + clave-aware percussion"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "guitar muting", "slap/finger bass", "syncopated vocals", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "funk dominant/minor-seventh vamps"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "guitar"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "timba funk slap bass and syncopated horn hits voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba funk slap bass and syncopated horn hits trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba funk slap bass and syncopated horn hits trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba funk slap bass and syncopated horn hits piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "timba funk slap bass and syncopated horn hits piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba funk slap bass and syncopated horn hits low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "timba funk slap bass and syncopated horn hits bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "timba funk slap bass and syncopated horn hits congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba funk slap bass and syncopated horn hits congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "timba funk slap bass and syncopated horn hits timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba funk slap bass and syncopated horn hits timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "timba funk slap bass and syncopated horn hits kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "timba funk slap bass and syncopated horn hits drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "timba funk slap bass and syncopated horn hits cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba funk slap bass and syncopated horn hits cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "international-modern-timba",
      "name": "International / Modern Timba",
      "description": "International / Modern Timba: modern timba layered coro and band breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern timba layered coro and band breaks", "International / Modern Timba: gear change", "International / Modern Timba: bomba", "International / Modern Timba: presión"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "International / Modern Timba: gears", "International / Modern Timba: bloque unison", "International / Modern Timba: presión", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "International / Modern Timba: salsa-derived functional harmony", "International / Modern Timba: extended jazz harmony", "International / Modern Timba: modal montuno"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern timba layered coro and band breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern timba layered coro and band breaks voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern timba layered coro and band breaks trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern timba layered coro and band breaks trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern timba layered coro and band breaks trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern timba layered coro and band breaks trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern timba layered coro and band breaks piano accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern timba layered coro and band breaks piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern timba layered coro and band breaks low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "modern timba layered coro and band breaks bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern timba layered coro and band breaks congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern timba layered coro and band breaks congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern timba layered coro and band breaks timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern timba layered coro and band breaks timbales cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["timbales"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern timba layered coro and band breaks kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "modern timba layered coro and band breaks drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "modern timba layered coro and band breaks cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern timba layered coro and band breaks cowbell cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cowbell"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
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
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    }
  ]
};
