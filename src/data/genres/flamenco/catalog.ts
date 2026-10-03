import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "flamenco",
  "name": "Flamenco",
  "family": "Andalusia / Iberian",
  "color": "#31632f",
  "description": "Flamenco is an independent musical world. Andalusia / Iberian idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Soleá",
  "meter": "12/8",
  "tempo": [76, 92],
  "instruments": ["voice", "guitar", "palmas", "cajon", "tenor-sax", "piano", "upright-bass", "bass", "drums", "synth", "sampler"],
  "roles": {
    "lead": ["voice", "guitar"],
    "percussion": ["palmas", "cajon"]
  },
  "pitchSystem": "flamenco Phrygian",
  "scales": ["phrygian", "major", "minor"],
  "chordQualities": ["Am", "G", "F", "E", "C", "Bb", "A", "Dm", "Gm", "B7", "E7", "G7"],
  "harmonicRhythm": "bar",
  "cadences": ["A"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["soleá twelve-count accents and falseta", "canonical 12-count accents", "spacious compás", "slow rasgueado", "bulerías fast compás with remate", "fast 12-count", "displaced accents", "short llamadas", "dense palmas", "alegrías major-key compás and bright llamada", "bright 12-count", "escobilla-compatible pulse", "tangos flamencos duple guitar and palmas", "4/4", "strong beat 2/4 feel", "syncopated palmas", "seguiriya asymmetric five-accent compás", "asymmetrical 12-count accent feel", "sparse accompaniment", "tientos slow tangos pulse and cante", "slow 4/4", "heavy accents", "often transitions into Tangos", "fandangos ternary cante and guitar response", "freer verse rhythm", "optional regular compás", "rumba percussive strum and bass syncopation", "binary strum", "Latin percussion", "syncopated bass", "tonás unaccompanied cante and breathing space", "voice-led free rhythm", "taranta free guitar arpeggios and cante", "free meter", "long guitar responses", "granaína free melisma and guitar cadence", "free vocal phrases", "guajira bright major compound compás", "12-count Cuban-derived feel", "farruca minor duple guitar and closing accent", "firm downbeat", "repeated guitar ostinato", "sevillanas four coplas and ternary cierre", "fixed copla sections", "triple-feel accompaniment", "nuevo flamenco guitar hook and cajon groove", "pop/rock backbeat layered with flamenco cells", "flamenco jazz compás with extended comping", "compás + swing/Latin jazz phrasing", "flamenco rock riff and palmas accent", "rock backbeat + palmas/rasgueado", "urban flamenco fragmented compás and electronic low end", "fragmented palmas", "electronic hits", "sparse sub pulse"],
  "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "solea",
      "name": "Soleá",
      "description": "Soleá: soleá twelve-count accents and falseta. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence", "soleá twelve-count accents and falseta", "canonical 12-count accents", "spacious compás", "slow rasgueado"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "restrained picado", "deep cante melisma", "strong cierres", "12-beat compás", "falseta", "llamada", "letra", "cierre", "remate", "palmas sordas", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "Phrygian cadence", "tonicized III", "dominant-to-Phrygian resolution"],
      "meter": "12/8",
      "tempo": [76, 92],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E"],
        "verse": ["Am", "G", "F", "E"],
        "chorus": ["C", "F", "G", "E"],
        "solo": ["Am", "G", "F", "E"],
        "coda": ["E", "E", "E", "E"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "soleá twelve-count accents and falseta voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soleá twelve-count accents and falseta voice cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soleá twelve-count accents and falseta guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soleá twelve-count accents and falseta guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soleá twelve-count accents and falseta palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "soleá twelve-count accents and falseta palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "soleá twelve-count accents and falseta cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "soleá twelve-count accents and falseta cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "bulerias",
      "name": "Bulerías",
      "description": "Bulerías: bulerías fast compás with remate. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Blazing 12-beat compás with contratiempo palmas and alzapúa thumb engine", "bulerías fast compás with remate", "fast 12-count", "displaced accents", "short llamadas", "dense palmas"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "rapid rasgueado", "picado bursts", "abrupt remates", "remate", "jaleo", "alzapúa", "contratiempo", "cajón syncopation", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "faster chord rhythm", "Phrygian/major alternation", "compact cadences"],
      "meter": "12/8",
      "tempo": [124, 140],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "intro": ["Bb", "F", "Bb", "A"],
        "verse": ["Dm", "C", "Bb", "A"],
        "chorus": ["Gm", "A", "Gm", "A"],
        "solo": ["Dm", "C", "Bb", "A"],
        "coda": ["A", "A", "A", "A"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bulerías fast compás with remate voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bulerías fast compás with remate voice cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bulerías fast compás with remate guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bulerías fast compás with remate guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bulerías fast compás with remate palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bulerías fast compás with remate palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "bulerías fast compás with remate cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "bulerías fast compás with remate cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "alegrias",
      "name": "Alegrías",
      "description": "Alegrías: alegrías major-key compás and bright llamada. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["12-beat cantiñas compás with major-key brightness and clear dance punctuation.", "alegrías major-key compás and bright llamada", "bright 12-count", "escobilla-compatible pulse"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "lighter rasgueado", "crisp palmas", "lyrical falsetas", "cantiñas", "silencio", "escobilla", "subida", "tirititrán", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["C", "F", "G7", "Am", "Dm", "major-key emphasis", "secondary dominants", "bright cadences"],
      "meter": "12/8",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "intro": ["E", "B7", "E", "B7"],
        "verse": ["E", "A", "B7", "E"],
        "falseta": ["E", "B7", "A", "E"],
        "cierre": ["B7", "E"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "alegrías major-key compás and bright llamada voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "alegrías major-key compás and bright llamada voice cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alegrías major-key compás and bright llamada guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "alegrías major-key compás and bright llamada guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alegrías major-key compás and bright llamada palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "alegrías major-key compás and bright llamada palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "alegrías major-key compás and bright llamada cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "alegrías major-key compás and bright llamada cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "tangos",
      "name": "Tangos",
      "description": "Tangos: tangos flamencos duple guitar and palmas. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["4/4 flamenco tangos with a breathing downbeat and weighted 2–3–4.", "tangos flamencos duple guitar and palmas", "4/4", "strong beat 2/4 feel", "syncopated palmas"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "groove-based rasgueado", "short vocal melisma", "binary compás", "2-3-4 weight", "por medio", "por arriba", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "Phrygian loops", "simple repeated progressions"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "intro": ["Bb", "A", "Bb", "A"],
        "verse": ["Dm", "C", "Bb", "A"],
        "chorus": ["F", "Bb", "A", "A"],
        "coda": ["A", "A", "A", "A"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tangos flamencos duple guitar and palmas voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tangos flamencos duple guitar and palmas voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tangos flamencos duple guitar and palmas guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tangos flamencos duple guitar and palmas guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tangos flamencos duple guitar and palmas palmas pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tangos flamencos duple guitar and palmas palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "tangos flamencos duple guitar and palmas cajon pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tangos flamencos duple guitar and palmas cajon cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "seguiriya",
      "name": "Seguiriya",
      "description": "Seguiriya: seguiriya asymmetric five-accent compás. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["2+2+3+3+2 asymmetry rather than the standard Soleá-family accent map.", "seguiriya asymmetric five-accent compás", "asymmetrical 12-count accent feel", "sparse accompaniment"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "extreme cante ornament", "dramatic pauses", "quejío", "jondo", "2+2+3+3+2", "corte", "remate", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "dark Phrygian", "dissonant suspensions", "slow cadence"],
      "meter": "12/8",
      "tempo": [74, 90],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "seguiriya asymmetric five-accent compás voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "seguiriya asymmetric five-accent compás voice cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "seguiriya asymmetric five-accent compás guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "seguiriya asymmetric five-accent compás guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "seguiriya asymmetric five-accent compás palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "seguiriya asymmetric five-accent compás palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "seguiriya asymmetric five-accent compás cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "seguiriya asymmetric five-accent compás cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "tientos",
      "name": "Tientos",
      "description": "Tientos: tientos slow tangos pulse and cante. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Slow binary compás with heavy space and a path toward Tangos.", "tientos slow tangos pulse and cante", "slow 4/4", "heavy accents", "often transitions into Tangos"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "deep rasgueado", "vocal rubato", "slow binary", "jondo", "subida", "tangos ending", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "dark Phrygian loops", "slower harmonic rhythm"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tientos slow tangos pulse and cante voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tientos slow tangos pulse and cante voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tientos slow tangos pulse and cante guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tientos slow tangos pulse and cante guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tientos slow tangos pulse and cante palmas pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tientos slow tangos pulse and cante palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "tientos slow tangos pulse and cante cajon pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tientos slow tangos pulse and cante cajon cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "fandangos",
      "name": "Fandangos",
      "description": "Fandangos: fandangos ternary cante and guitar response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Four 3/4 phrases with modal opening and major/minor melodic turns.", "fandangos ternary cante and guitar response", "freer verse rhythm", "optional regular compás"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "singer-following guitar", "decorative falsetas", "four 3-beat phrases", "copla", "modal opening", "major/minor turn", "staccato", "legato", "vibrato", "open", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "major/Phrygian switching", "characteristic Andalusian resolutions"],
      "meter": "3/4",
      "tempo": [106, 122],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fandangos ternary cante and guitar response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fandangos ternary cante and guitar response voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fandangos ternary cante and guitar response guitar statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "fandangos ternary cante and guitar response guitar cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fandangos ternary cante and guitar response palmas pulse", "role": "percussion", "onsets": [0, 1, 2], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fandangos ternary cante and guitar response palmas cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "fandangos ternary cante and guitar response cajon pulse", "role": "percussion", "onsets": [0, 1, 2], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fandangos ternary cante and guitar response cajon cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "open", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost"],
        "cajon": ["accent", "golpe", "open", "slap", "ghost", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "open", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "open", "slap", "ghost", "roll"],
          "defaultTechnique": "accent"
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
      "id": "rumba",
      "name": "Rumba",
      "description": "Rumba: rumba percussive strum and bass syncopation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Abanico continuous fan strum with body golpe and lively cajón slap", "rumba percussive strum and bass syncopation", "binary strum", "Latin percussion", "syncopated bass"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "fast rasgueado", "muted strum", "percussive guitar", "abanico fan strum", "golpe on beat 2 & 4", "cajón slap", "rumba bass movement", "staccato", "legato", "vibrato", "strum", "abanico", "muted-strum", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "bass", "mute", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "pop-functional loops", "modal color", "seventh chords"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "bass": ["bass"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "intro": ["Am", "G", "F", "E"],
        "verse": ["Am", "Dm", "G", "C"],
        "chorus": ["F", "E7", "Am", "E7"],
        "solo": ["Am", "G", "F", "E"],
        "coda": ["E", "E", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "rumba percussive strum and bass syncopation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rumba percussive strum and bass syncopation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rumba percussive strum and bass syncopation guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "rumba percussive strum and bass syncopation guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "rumba percussive strum and bass syncopation palmas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "rumba percussive strum and bass syncopation palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "rumba percussive strum and bass syncopation cajon pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "rumba percussive strum and bass syncopation cajon cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Rumba bass syncopation", "role": "bass", "instruments": ["bass"], "onsets": [0, 1.5, 2.5, 3.5], "durations": [0.65, 0.4, 0.4, 0.35], "articulation": "staccato"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "strum", "abanico", "muted-strum", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "slap", "golpe", "bass", "mute", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "strum", "abanico", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "slap", "golpe", "bass", "mute", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "tonas-martinetes",
      "name": "Tonás / Martinetes",
      "description": "Tonás / Martinetes: tonás unaccompanied cante and breathing space. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tonás unaccompanied cante and breathing space", "voice-led free rhythm"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "a cappella ornament", "dramatic vocal attack", "staccato", "legato", "vibrato"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "modal melodic center", "no required chord progression"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Am", "G", "F", "E"],
        "letra variation": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "letra variation", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tonás unaccompanied cante and breathing space voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "tonás unaccompanied cante and breathing space voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
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
      "id": "taranta",
      "name": "Taranta",
      "description": "Taranta: taranta free guitar arpeggios and cante. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["taranta free guitar arpeggios and cante", "free meter", "long guitar responses"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "sustained resonance", "rubato", "staccato", "legato", "vibrato"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "mining-song modal colors", "unusual open-string voicings"],
      "meter": "4/4",
      "tempo": [60, 76],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Am", "G", "F", "E"],
        "guitar response": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "guitar response", "bars": 8},
        {"label": "letra", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "taranta free guitar arpeggios and cante voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "taranta free guitar arpeggios and cante voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "taranta free guitar arpeggios and cante guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "taranta free guitar arpeggios and cante guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
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
      "id": "granaina-malaguena",
      "name": "Granaína / Malagueña",
      "description": "Granaína / Malagueña: granaína free melisma and guitar cadence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["granaína free melisma and guitar cadence", "free vocal phrases"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "elaborate melisma", "responsive guitar arpeggiation", "staccato", "legato", "vibrato"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "rich Phrygian/major ambiguity"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Am", "G", "F", "E"],
        "guitar response": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "guitar response", "bars": 8},
        {"label": "letra", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "granaína free melisma and guitar cadence voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "granaína free melisma and guitar cadence voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "granaína free melisma and guitar cadence guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "granaína free melisma and guitar cadence guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
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
      "id": "guajira",
      "name": "Guajira",
      "description": "Guajira: guajira bright major compound compás. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["guajira bright major compound compás", "12-count Cuban-derived feel"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "flowing arpeggio", "lighter rasgueado", "staccato", "legato", "vibrato", "arpeggio", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["C", "G7", "F", "major-key", "dominant sevenths", "brighter functional progressions"],
      "meter": "12/8",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "letra": ["C", "G7", "C", "F"],
        "cierre": ["G7", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guajira bright major compound compás voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guajira bright major compound compás voice cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guajira bright major compound compás guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guajira bright major compound compás guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guajira bright major compound compás palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "guajira bright major compound compás palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "guajira bright major compound compás cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "guajira bright major compound compás cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "arpeggio", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "arpeggio", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "farruca",
      "name": "Farruca",
      "description": "Farruca: farruca minor duple guitar and closing accent. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["farruca minor duple guitar and closing accent", "4/4", "firm downbeat", "repeated guitar ostinato"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "powerful footwork support", "staccato guitar", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "E7", "Dm", "minor/modal", "clear tonal cadence"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "letra": ["Am", "E7", "Am", "Dm"],
        "cierre": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "farruca minor duple guitar and closing accent voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "farruca minor duple guitar and closing accent voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "farruca minor duple guitar and closing accent guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "farruca minor duple guitar and closing accent guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "farruca minor duple guitar and closing accent palmas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "farruca minor duple guitar and closing accent palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "farruca minor duple guitar and closing accent cajon pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "farruca minor duple guitar and closing accent cajon cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "staccato", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "legato", "vibrato"],
        "palmas": ["accent", "staccato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "staccato", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "staccato", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "staccato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "staccato", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "sevillanas",
      "name": "Sevillanas",
      "description": "Sevillanas: sevillanas four coplas and ternary cierre. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sevillanas four coplas and ternary cierre", "fixed copla sections", "triple-feel accompaniment"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "regular rasgueado", "phrase-ending cierre", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["C", "F", "G7", "simple functional major/minor progression"],
      "meter": "3/4",
      "tempo": [118, 134],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "letra": ["C", "F", "G7", "C"],
        "cierre": ["G7", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sevillanas four coplas and ternary cierre voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sevillanas four coplas and ternary cierre voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sevillanas four coplas and ternary cierre guitar statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "sevillanas four coplas and ternary cierre guitar cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sevillanas four coplas and ternary cierre palmas pulse", "role": "percussion", "onsets": [0, 1, 2], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sevillanas four coplas and ternary cierre palmas cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "sevillanas four coplas and ternary cierre cajon pulse", "role": "percussion", "onsets": [0, 1, 2], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sevillanas four coplas and ternary cierre cajon cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "nuevo-flamenco",
      "name": "Nuevo Flamenco",
      "description": "Nuevo Flamenco: nuevo flamenco guitar hook and cajon groove. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["nuevo flamenco guitar hook and cajon groove", "pop/rock backbeat layered with flamenco cells"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "traditional guitar + electric/synth effects", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "broader pop/jazz chord vocabulary"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "nuevo flamenco guitar hook and cajon groove voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nuevo flamenco guitar hook and cajon groove voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nuevo flamenco guitar hook and cajon groove guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nuevo flamenco guitar hook and cajon groove guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nuevo flamenco guitar hook and cajon groove palmas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "nuevo flamenco guitar hook and cajon groove palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "nuevo flamenco guitar hook and cajon groove cajon pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "nuevo flamenco guitar hook and cajon groove cajon cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "flamenco-jazz",
      "name": "Flamenco Jazz",
      "description": "Flamenco Jazz: flamenco jazz compás with extended comping. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["flamenco jazz compás with extended comping", "compás + swing/Latin jazz phrasing"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "extended improvisation", "jazz articulation", "staccato", "legato", "vibrato", "tenuto", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "slap", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "altered dominants", "ii-V", "modal interchange", "extended voicings"],
      "meter": "12/8",
      "tempo": [104, 120],
      "scale": "phrygian",
      "roles": {
        "lead": ["guitar", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["palmas", "cajon"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "flamenco jazz compás with extended comping guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "flamenco jazz compás with extended comping guitar cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco jazz compás with extended comping tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "flamenco jazz compás with extended comping tenor-sax cadence fill", "role": "lead", "onsets": [5.0, 5.5, 5.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco jazz compás with extended comping piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "flamenco jazz compás with extended comping piano cadence fill", "role": "harmony", "onsets": [5.0, 5.5, 5.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco jazz compás with extended comping low anchor", "role": "bass", "onsets": [0, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "flamenco jazz compás with extended comping upright-bass cadence fill", "role": "bass", "onsets": [5.0, 5.5, 5.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco jazz compás with extended comping palmas pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "flamenco jazz compás with extended comping palmas cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "flamenco jazz compás with extended comping cajon pulse", "role": "percussion", "onsets": [0, 1.5, 3, 4, 5], "instruments": ["cajon"], "cycleLength": 1, "articulation": "accent"},
        {"name": "flamenco jazz compás with extended comping cajon cadence fill", "role": "percussion", "onsets": [5.0, 5.5, 5.75], "instruments": ["cajon"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "tenor-sax": ["accent", "staccato", "legato", "tenuto", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "cajon": ["accent", "golpe", "slap", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "cajon:percussion": {
          "allowedTechniques": ["accent", "golpe", "slap", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "flamenco-rock",
      "name": "Flamenco Rock",
      "description": "Flamenco Rock: flamenco rock riff and palmas accent. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["flamenco rock riff and palmas accent", "rock backbeat + palmas/rasgueado"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "distortion", "bends", "palm mute + flamenco attack", "staccato", "legato", "vibrato", "palm-mute", "bend", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "blues/rock harmony with Phrygian cadences"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "bass": ["bass"],
        "percussion": ["palmas", "drums"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "flamenco rock riff and palmas accent voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "flamenco rock riff and palmas accent voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco rock riff and palmas accent guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "flamenco rock riff and palmas accent guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco rock riff and palmas accent low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "flamenco rock riff and palmas accent bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "flamenco rock riff and palmas accent palmas pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "flamenco rock riff and palmas accent palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "flamenco rock riff and palmas accent kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "flamenco rock riff and palmas accent drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "palm-mute", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "bend", "staccato", "legato", "vibrato"],
        "bass": ["accent", "palm-mute", "staccato", "legato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "palm-mute", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "bend", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "palm-mute", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
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
      "id": "urban-experimental",
      "name": "Urban / Experimental",
      "description": "Urban / Experimental: urban flamenco fragmented compás and electronic low end. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["urban flamenco fragmented compás and electronic low end", "fragmented palmas", "electronic hits", "sparse sub pulse"],
      "techniques": ["rasgueado", "picado", "alzapua", "golpe", "tremolo", "melisma", "palmas", "accent", "chopped vocals", "processed claps", "pitch manipulation", "staccato", "legato", "vibrato", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open", "roll"],
      "harmony": ["Am", "G", "F", "E", "Dm", "C", "Bb", "A", "minimal loops", "modal drones", "bass-centered harmony"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "phrygian",
      "roles": {
        "lead": ["voice", "guitar"],
        "bass": ["synth"],
        "percussion": ["palmas", "drums", "sampler"]
      },
      "progressions": {
        "salida": ["Am", "G", "F", "E"],
        "letra": ["Dm", "C", "Bb", "A"],
        "cierre": ["A", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "salida", "bars": 4},
        {"label": "letra", "bars": 8},
        {"label": "falseta", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "letra", "bars": 8},
        {"label": "remate", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "urban flamenco fragmented compás and electronic low end voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban flamenco fragmented compás and electronic low end voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban flamenco fragmented compás and electronic low end guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "urban flamenco fragmented compás and electronic low end guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban flamenco fragmented compás and electronic low end low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "urban flamenco fragmented compás and electronic low end synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "urban flamenco fragmented compás and electronic low end palmas pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["palmas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban flamenco fragmented compás and electronic low end palmas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["palmas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "urban flamenco fragmented compás and electronic low end kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "urban flamenco fragmented compás and electronic low end drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "urban flamenco fragmented compás and electronic low end sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "urban flamenco fragmented compás and electronic low end sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
        "synth": ["accent", "staccato", "legato", "vibrato"],
        "palmas": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
        "drums": ["accent", "ghost", "open", "roll"],
        "sampler": ["accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "rasgueado", "golpe", "picado", "alzapua", "tremolo", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "synth:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sub-bass"
        },
        "palmas:percussion": {
          "allowedTechniques": ["accent", "palmas-sordas", "palmas-claras", "palmas-fuertes", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "sampler:percussion": {
          "allowedTechniques": ["accent"],
          "defaultTechnique": "accent"
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
