import type { FormStepTemplate } from './schema';

/** Authored default song arcs, keyed by canonical style id. Section lengths and dynamics reflect each style's musical form. */
export const STYLE_FORM_TEMPLATES: Record<string, FormStepTemplate[]> = {
  "afrobeats-afro-pop": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-afrobeat": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-amapiano": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-gqom": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-afro-house": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-highlife": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-palm-wine": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "afrobeats-alte": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-urbana": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-tradicional": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "mambo-2",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "verso-3",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "requinto-4",
      "label": "Requinto",
      "kind": "requinto",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "mambo-5",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-sensual": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-2",
      "label": "Pre",
      "kind": "pre",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-6",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-moderna": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-bolero": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-bachatango": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-campestre": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "bachata-merengue-de-guitarra": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "blues-chicago": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-delta": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-texas": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-piedmont": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-jump": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-hill-country": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-swamp": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "blues-soul": [
    {
      "key": "12-bar-head-0",
      "label": "12-Bar Head",
      "kind": "12-bar head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "harmonica-guitar-answer-1",
      "label": "Harmonica/Guitar Answer",
      "kind": "harmonica/guitar answer",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-2",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "turnaround-3",
      "label": "Turnaround",
      "kind": "turnaround",
      "bars": 4,
      "intensity": "medium"
    }
  ],
  "brazilian-bossa-nova": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "theme-1",
      "label": "Theme",
      "kind": "theme",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variation-2",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "brazilian-samba-de-enredo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "theme-1",
      "label": "Theme",
      "kind": "theme",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variation-2",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "brazilian-pagode": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "theme-1",
      "label": "Theme",
      "kind": "theme",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variation-2",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "brazilian-samba-reggae": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "theme-1",
      "label": "Theme",
      "kind": "theme",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variation-2",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-neotraditional": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-outlaw": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-bluegrass": [
    {
      "key": "break-0",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-5",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "instrumental-break-6",
      "label": "Instrumental Break",
      "kind": "instrumental-break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "final-chorus-7",
      "label": "Final Chorus",
      "kind": "final-chorus",
      "bars": 8,
      "intensity": "peak"
    }
  ],
  "country-honky-tonk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-bakersfield": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-americana": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-nashville-sound": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "country-western-swing": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-colombiana": [
    {
      "key": "introducci-n-0",
      "label": "Introducción",
      "kind": "introducción",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "preg-n-2",
      "label": "Pregón",
      "kind": "pregón",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tema-3",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "mambo-4",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-villera": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "keytar-break-3",
      "label": "Keytar Break",
      "kind": "keytar break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-chicha": [
    {
      "key": "intro-riff-0",
      "label": "Intro Riff",
      "kind": "intro riff",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "guitar-solo-3",
      "label": "Guitar Solo",
      "kind": "guitar solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-sonora": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "brass-mambo-3",
      "label": "Brass Mambo",
      "kind": "brass-mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "tema-4",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-5",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-rebajada": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "preg-n-2",
      "label": "Pregón",
      "kind": "pregón",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tema-3",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-dub-4",
      "label": "Instrumental Dub",
      "kind": "instrumental-dub",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "tema-5",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-digitale": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verso-2",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-3",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-santafesina": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verso-2",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-3",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "cumbia-porro": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verso-2",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-3",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-p-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-deep-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-synth-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-disco": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-go-go": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-boogie": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-afrobeat": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "disco-funk-carioca": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-6",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-7",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-downtempo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-trip-hop": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-idm": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-dubstep": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-garage": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-synthwave": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-ambient": [
    {
      "key": "intro-texture-0",
      "label": "Intro Texture",
      "kind": "intro-texture",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drone-1",
      "label": "Drone",
      "kind": "drone",
      "bars": 8,
      "intensity": "low"
    },
    {
      "key": "harmonic-drift-2",
      "label": "Harmonic Drift",
      "kind": "harmonic-drift",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "texture-bloom-3",
      "label": "Texture Bloom",
      "kind": "texture-bloom",
      "bars": 8,
      "intensity": "low"
    },
    {
      "key": "release-4",
      "label": "Release",
      "kind": "release",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "electronic-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-indie-folk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-old-time": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-protest": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-psychedelic-folk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-anti-folk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-bluegrass": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-neo-traditional": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "folk-chamber-folk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-p-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-deep-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-synth-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-disco": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-go-go": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-boogie": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-afrobeat": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "funk-carioca": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "gospel-traditional": [
    {
      "key": "verse-0",
      "label": "Verse",
      "kind": "verse",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "build-1",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "vamp-2",
      "label": "Vamp",
      "kind": "vamp",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "shout-3",
      "label": "Shout",
      "kind": "shout",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-4",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "gospel-contemporary": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-6",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "vamp-7",
      "label": "Vamp",
      "kind": "vamp",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-8",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "gospel-southern": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "gospel-choir": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "build-2",
      "label": "Build",
      "kind": "build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "vamp-3",
      "label": "Vamp",
      "kind": "vamp",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "shout-4",
      "label": "Shout",
      "kind": "shout",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-boom-bap": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-trap": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-lo-fi": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-drill": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-g-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-experimental": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-cloud-rap": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "hip-hop-jazz-rap": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-peak-time": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-minimal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-dub-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-detroit-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-acid-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "303-groove-1",
      "label": "303 Groove",
      "kind": "303-groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "filter-build-2",
      "label": "Filter Build",
      "kind": "filter-build",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "303-groove-5",
      "label": "303 Groove",
      "kind": "303-groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-6",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-hard-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-melodic-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "house-ebm": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-bebop": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-cool-jazz": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-hard-bop": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-free-jazz": [
    {
      "key": "statement-0",
      "label": "Statement",
      "kind": "statement",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "collective-improvisation-1",
      "label": "Collective Improvisation",
      "kind": "collective-improvisation",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "open-solo-2",
      "label": "Open Solo",
      "kind": "open-solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "texture-shift-3",
      "label": "Texture Shift",
      "kind": "texture-shift",
      "bars": 8,
      "intensity": "low"
    },
    {
      "key": "collective-climax-4",
      "label": "Collective Climax",
      "kind": "collective-climax",
      "bars": 16,
      "intensity": "peak"
    },
    {
      "key": "release-5",
      "label": "Release",
      "kind": "release",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-gypsy-jazz": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-fusion": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-spiritual-jazz": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-1",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "trading-2",
      "label": "Trading",
      "kind": "trading",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "jazz-ragtime": [
    {
      "key": "strain-a-0",
      "label": "Strain A",
      "kind": "strain-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "strain-a-1",
      "label": "Strain A",
      "kind": "strain-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "strain-b-2",
      "label": "Strain B",
      "kind": "strain-b",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "strain-a-3",
      "label": "Strain A",
      "kind": "strain-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "strain-c-4",
      "label": "Strain C",
      "kind": "strain-c",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "strain-d-5",
      "label": "Strain D",
      "kind": "strain-d",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "final-strain-6",
      "label": "Final Strain",
      "kind": "final-strain",
      "bars": 8,
      "intensity": "medium"
    }
  ],
  "kizomba-tradicional": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "chorus-5",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-semba-playful": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-3",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-5",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-6",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-urbankiz": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "hook-2",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 16,
      "intensity": "peak"
    },
    {
      "key": "hook-4",
      "label": "Hook",
      "kind": "hook",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-5",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-6",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-tarraxinha": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-tarraxo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-3",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-5",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-6",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-passada": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-4",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-5",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "outro-6",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-ghetto-zouk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-3",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-5",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-6",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "kizomba-semba-lento": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-3",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-5",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-6",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "tango-tango-tradicional": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "a-1",
      "label": "A",
      "kind": "A",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "b-2",
      "label": "B",
      "kind": "B",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "a-3",
      "label": "A",
      "kind": "A",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variaci-n-4",
      "label": "Variación",
      "kind": "variación",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "tango-tango-nuevo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "development-2",
      "label": "Development",
      "kind": "development",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "3-3-2-ostinato-3",
      "label": "3+3+2 Ostinato",
      "kind": "3+3+2 ostinato",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "lyrical-section-4",
      "label": "Lyrical Section",
      "kind": "lyrical section",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "tango-milonga": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "milonga-a-1",
      "label": "Milonga A",
      "kind": "milonga-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "milonga-b-2",
      "label": "Milonga B",
      "kind": "milonga-b",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "milonga-a-3",
      "label": "Milonga A",
      "kind": "milonga-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variaci-n-4",
      "label": "Variación",
      "kind": "variación",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "tango-tango-vals": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "vals-a-1",
      "label": "Vals A",
      "kind": "vals-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "vals-b-2",
      "label": "Vals B",
      "kind": "vals-b",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "vals-a-3",
      "label": "Vals A",
      "kind": "vals-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variaci-n-4",
      "label": "Variación",
      "kind": "variación",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "tango-tango-electronico": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "a-1",
      "label": "A",
      "kind": "A",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "b-2",
      "label": "B",
      "kind": "B",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "a-3",
      "label": "A",
      "kind": "A",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "variaci-n-4",
      "label": "Variación",
      "kind": "variación",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-solea-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-4",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-buleria-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-1",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "escobilla-2",
      "label": "Escobilla",
      "kind": "escobilla",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "jaleo-3",
      "label": "Jaleo",
      "kind": "jaleo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-alegrias-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-1",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "silencio-2",
      "label": "Silencio",
      "kind": "silencio",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "escobilla-3",
      "label": "Escobilla",
      "kind": "escobilla",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "letra-4",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "canti-a-5",
      "label": "Cantiña",
      "kind": "cantiña",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-tangos-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-seguiriya-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-tientos-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-fandango-style": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "flamenco-rumba": [
    {
      "key": "salida-0",
      "label": "Salida",
      "kind": "salida",
      "bars": 4,
      "intensity": "medium"
    },
    {
      "key": "llamada-1",
      "label": "Llamada",
      "kind": "llamada",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "letra-2",
      "label": "Letra",
      "kind": "letra",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "falseta-3",
      "label": "Falseta",
      "kind": "falseta",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "remate-4",
      "label": "Remate",
      "kind": "remate",
      "bars": 4,
      "intensity": "peak"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-heavy-metal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-thrash": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-death-metal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-black-metal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-power-metal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-doom-metal": [
    {
      "key": "intro-drone-0",
      "label": "Intro Drone",
      "kind": "intro-drone",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "riff-3",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "slow-breakdown-5",
      "label": "Slow Breakdown",
      "kind": "slow-breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-reprise-6",
      "label": "Riff Reprise",
      "kind": "riff-reprise",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-7",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-sludge": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "metal-progressive-metal": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "riff-1",
      "label": "Riff",
      "kind": "riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "breakdown-4",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "solo-5",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-p-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-deep-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-synth-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-disco": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-go-go": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-boogie": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-afrobeat": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "r-and-b-funk-carioca": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-chorus-2",
      "label": "Pre-Chorus",
      "kind": "pre-chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-4",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-roots-reggae": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-dub": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-dancehall": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-lovers-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-rocksteady": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-ragga": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-ska": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggae-calypso": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "dub-break-3",
      "label": "Dub Break",
      "kind": "dub break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-perreo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-melodic": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-neoperreo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-dancehall": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-pop-reggaeton": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-trap": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-playero": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "reggaeton-bachata": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "puente-3",
      "label": "Puente",
      "kind": "puente",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-4",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-hard-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-grunge": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-progressive-rock": [
    {
      "key": "overture-0",
      "label": "Overture",
      "kind": "overture",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "movement-a-1",
      "label": "Movement A",
      "kind": "movement-a",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "movement-b-2",
      "label": "Movement B",
      "kind": "movement-b",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-suite-3",
      "label": "Instrumental Suite",
      "kind": "instrumental-suite",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "reprise-4",
      "label": "Reprise",
      "kind": "reprise",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coda-5",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-punk-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-garage-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-psychedelic": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-post-rock": [
    {
      "key": "quiet-intro-0",
      "label": "Quiet Intro",
      "kind": "quiet-intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "motif-1",
      "label": "Motif",
      "kind": "motif",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "build-i-2",
      "label": "Build I",
      "kind": "build-i",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "build-ii-3",
      "label": "Build Ii",
      "kind": "build-ii",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "climax-4",
      "label": "Climax",
      "kind": "climax",
      "bars": 16,
      "intensity": "peak"
    },
    {
      "key": "decay-5",
      "label": "Decay",
      "kind": "decay",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "coda-6",
      "label": "Coda",
      "kind": "coda",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "rock-shoegaze": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "salsa-mambo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "son-1",
      "label": "Son",
      "kind": "son",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "mambo-5",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "salsa-salsa-dura": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "montuno-2",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "montuno-4",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "descarga-5",
      "label": "Descarga",
      "kind": "descarga",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "salsa-son-montuno": [
    {
      "key": "tema-0",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "montuno-1",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "horn-mambo-2",
      "label": "Horn-Mambo",
      "kind": "horn-mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "montuno-3",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "solo-4",
      "label": "Solo",
      "kind": "solo",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "salsa-cha-cha-cha": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "tema-1",
      "label": "Tema",
      "kind": "tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "montuno-3",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-5",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "salsa-salsa-romantica": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-tema-1",
      "label": "Verso/Tema",
      "kind": "verso/tema",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "montuno-2",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "mambo-3",
      "label": "Mambo",
      "kind": "mambo",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "montuno-4",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "cierre-5",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "ska-trad-ska": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "ska-two-tone": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "ska-ska-punk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "instrumental-3",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-p-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-deep-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-synth-funk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-disco": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-go-go": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-boogie": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-afrobeat": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "soul-funk-carioca": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "bridge-3",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "instrumental-4",
      "label": "Instrumental",
      "kind": "instrumental",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "swing-big-band-swing": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "ensemble-riff-1",
      "label": "Ensemble Riff",
      "kind": "ensemble riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "shout-chorus-2",
      "label": "Shout Chorus",
      "kind": "shout chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "swing-gypsy-jazz": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "ensemble-riff-1",
      "label": "Ensemble Riff",
      "kind": "ensemble riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "shout-chorus-2",
      "label": "Shout Chorus",
      "kind": "shout chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "swing-jump-blues": [
    {
      "key": "head-0",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "ensemble-riff-1",
      "label": "Ensemble Riff",
      "kind": "ensemble riff",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "shout-chorus-2",
      "label": "Shout Chorus",
      "kind": "shout chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "solo-3",
      "label": "Solo",
      "kind": "solo",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "head-4",
      "label": "Head",
      "kind": "head",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "tag-5",
      "label": "Tag",
      "kind": "tag",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "timba-timba-habanera": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "marcha-1",
      "label": "Marcha",
      "kind": "marcha",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-3",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "montuno-4",
      "label": "Montuno",
      "kind": "montuno",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "gear-shift-5",
      "label": "Gear Shift",
      "kind": "gear-shift",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-6",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "cierre-7",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "timba-songo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verso-1",
      "label": "Verso",
      "kind": "verso",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "coro-2",
      "label": "Coro",
      "kind": "coro",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "marcha-3",
      "label": "Marcha",
      "kind": "marcha",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "gear-4",
      "label": "Gear",
      "kind": "gear",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-5",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "cierre-6",
      "label": "Cierre",
      "kind": "cierre",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "zouk-zouk-beton": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "refrain-4",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "zouk-zouk-love": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "pre-2",
      "label": "Pre",
      "kind": "pre",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-3",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-4",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "bridge-5",
      "label": "Bridge",
      "kind": "bridge",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-6",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "zouk-ghetto-zouk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "refrain-4",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "zouk-neo-zouk": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "refrain-2",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "refrain-4",
      "label": "Refrain",
      "kind": "refrain",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-downtempo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-trip-hop": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-idm": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-dubstep": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-garage": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-synthwave": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-ambient": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "drum-and-bass-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-1",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "variation-4",
      "label": "Variation",
      "kind": "variation",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "industrial-ebm": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "machine-1",
      "label": "Machine",
      "kind": "machine",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "verse-2",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "machine-4",
      "label": "Machine",
      "kind": "machine",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "industrial-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 8,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "medium"
    },
    {
      "key": "breakdown-2",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 8,
      "intensity": "low"
    },
    {
      "key": "drop-3",
      "label": "Drop",
      "kind": "drop",
      "bars": 16,
      "intensity": "peak"
    },
    {
      "key": "groove-4",
      "label": "Groove",
      "kind": "groove",
      "bars": 16,
      "intensity": "high"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 8,
      "intensity": "low"
    }
  ],
  "industrial-noise": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "machine-1",
      "label": "Machine",
      "kind": "machine",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "break-2",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "machine-3",
      "label": "Machine",
      "kind": "machine",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "outro-4",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "industrial-dark": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "verse-3",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-5",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-6",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-7",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-hard-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-grunge": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-progressive-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-punk-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-garage-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-psychedelic": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-post-rock": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "punk-hardcore-shoegaze": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "verse-1",
      "label": "Verse",
      "kind": "verse",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "chorus-2",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "break-3",
      "label": "Break",
      "kind": "break",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "chorus-4",
      "label": "Chorus",
      "kind": "chorus",
      "bars": 8,
      "intensity": "high"
    },
    {
      "key": "ending-5",
      "label": "Ending",
      "kind": "ending",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-downtempo": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-trip-hop": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-idm": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-dubstep": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-garage": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-synthwave": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-ambient": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ],
  "uk-bass-techno": [
    {
      "key": "intro-0",
      "label": "Intro",
      "kind": "intro",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "groove-1",
      "label": "Groove",
      "kind": "groove",
      "bars": 8,
      "intensity": "medium"
    },
    {
      "key": "drop-2",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "breakdown-3",
      "label": "Breakdown",
      "kind": "breakdown",
      "bars": 4,
      "intensity": "low"
    },
    {
      "key": "drop-4",
      "label": "Drop",
      "kind": "drop",
      "bars": 8,
      "intensity": "peak"
    },
    {
      "key": "outro-5",
      "label": "Outro",
      "kind": "outro",
      "bars": 4,
      "intensity": "low"
    }
  ]
,
  "afrobeats-west-african-highlife-guitar": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "afrobeats-afro-fusion-burna-boy": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "afrobeats-afropop-guitar-groove": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "afrobeats-afrobeats-percussive-minimalism": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "bachata-dominican-guitar-tradition": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "bachata-romantic-requinto": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "bachata-modern-urban-bachata": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "bachata-dominican-haitian-caribbean-bachata-fusion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "blues-memphis-electric-blues": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 12,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Answer",
    "kind": "chorus",
    "bars": 12,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Solo",
    "kind": "solo",
    "bars": 12,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Turnaround",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "blues-west-coast-jump-blues": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 12,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Answer",
    "kind": "chorus",
    "bars": 12,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Solo",
    "kind": "solo",
    "bars": 12,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Turnaround",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "blues-new-orleans-blues": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 12,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Answer",
    "kind": "chorus",
    "bars": 12,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Solo",
    "kind": "solo",
    "bars": 12,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Turnaround",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "blues-british-blues-revival": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 12,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Answer",
    "kind": "chorus",
    "bars": 12,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Solo",
    "kind": "solo",
    "bars": 12,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Turnaround",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "brazilian-choro-brazilian-chamber-groove": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "brazilian-baiao-northeastern-brazilian": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "brazilian-forro": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "brazilian-tropicalia": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "brazilian-mpb": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "country-appalachian-old-time": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "country-nashville-country-pop": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "country-country-rock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "country-alt-country-roots-rock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "country-country-gospel": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "cumbia-traditional-coastal-cumbia": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "cumbia-cumbia-orchestral": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "cumbia-cumbia-peruana": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "cumbia-cumbia-digital-global-bass": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "disco-salsoul-latin-disco": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "disco-cosmic-disco": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "disco-studio-54-orchestral-disco": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "disco-italo-hi-energy": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "drum-and-bass-ragga-jungle": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "drum-and-bass-darkstep": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "drum-and-bass-minimal-autonomic": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "drum-and-bass-jazzstep": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "electronic-electro": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "electronic-detroit-techno": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "electronic-chicago-acid-house": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "electronic-ambient-techno": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "electronic-breakbeat-hardcore": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "flamenco-solea-por-medio": [
  {
    "key": "intro-0",
    "label": "Salida",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Letra",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "solo-2",
    "label": "Falseta",
    "kind": "solo",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-3",
    "label": "Letra / Jaleo",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Remate / Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "flamenco-flamenco-fusion": [
  {
    "key": "intro-0",
    "label": "Salida",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Letra",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "solo-2",
    "label": "Falseta",
    "kind": "solo",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-3",
    "label": "Letra / Jaleo",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Remate / Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "flamenco-nuevo-flamenco": [
  {
    "key": "intro-0",
    "label": "Salida",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Letra",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "solo-2",
    "label": "Falseta",
    "kind": "solo",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-3",
    "label": "Letra / Jaleo",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Remate / Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "flamenco-cante-jondo": [
  {
    "key": "intro-0",
    "label": "Salida",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Letra",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "solo-2",
    "label": "Falseta",
    "kind": "solo",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-3",
    "label": "Letra / Jaleo",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Remate / Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "folk-celtic-traditional": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "folk-british-ballad-tradition": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "folk-appalachian-string-band": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "folk-nordic-folk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "folk-eastern-european-balkan-folk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "funk-one-pocket-funk-james-brown": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "funk-minneapolis-funk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "funk-jazz-funk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "funk-p-funk-cosmic": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "gospel-black-gospel-quartet": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Response",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Vamp",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Shout / Solo",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "gospel-gospel-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Response",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Vamp",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Shout / Solo",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "gospel-gospel-choir-massed-voices": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Response",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Vamp",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Shout / Solo",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "gospel-modern-gospel-r-b": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Response",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Vamp",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Shout / Solo",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "hip-hop-old-school-breakbeat": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "hip-hop-golden-age-sample-collage": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "hip-hop-west-coast-g-funk-expansion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "hip-hop-memphis-southern-rap": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "hip-hop-jersey-club-rap": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "house-chicago-house": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "house-deep-house": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "house-acid-house": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "house-minimal-techno": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "industrial-industrial-rock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "industrial-industrial-metal": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "industrial-power-electronics": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "industrial-industrial-ambient": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-swing-era": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-modal-jazz": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-post-bop": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-jazz-funk": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-avant-garde-free-improvisation": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "jazz-brazilian-jazz": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "kizomba-classic-angolan-kizomba": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "kizomba-semba-to-kizomba-transition": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "kizomba-cape-verdean-ghetto-zouk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "kizomba-minimal-tarraxinha": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "kizomba-tarraxo-club": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "metal-nwobhm": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "metal-groove-metal": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "metal-metalcore": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "metal-deathcore": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "metal-blackgaze": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "punk-hardcore-proto-punk-garage-punk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "punk-hardcore-anarcho-punk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "punk-hardcore-oi": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "punk-hardcore-screamo": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-4",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 4,
    "intensity": "low"
  }
],
  "r-and-b-motown-r-b": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "r-and-b-memphis-r-b": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "r-and-b-90s-contemporary-r-b": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "r-and-b-uk-neo-r-b": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggae-one-drop-roots": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggae-nyabinghi-rastafari-percussion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggae-digital-dancehall": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggae-dubwise-reggae": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggaeton-early-puerto-rican-reggaeton": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggaeton-underground-playero": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggaeton-dembow-dominicano": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "reggaeton-experimental-neoperreo": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-rock-roll": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-british-invasion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-southern-rock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-krautrock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-math-rock": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "rock-dream-pop": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "salsa-son-cubano-foundation": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "salsa-salsa-brava-1970s-new-york": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "salsa-salsa-conjunto": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "salsa-salsa-jazz-fusion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "salsa-boogaloo-latin-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "ska-jamaican-first-wave-ska": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "ska-rocksteady": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "ska-jamaican-ska-jazz": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "ska-third-wave-ska": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "soul-stax-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "soul-muscle-shoals-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "soul-psychedelic-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "soul-quiet-funk-boogie-soul": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "swing-new-orleans-trad-jazz": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "swing-kansas-city-swing": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "swing-chicago-swing": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "swing-vocal-swing": [
  {
    "key": "intro-0",
    "label": "Head",
    "kind": "intro",
    "bars": 4,
    "intensity": "medium"
  },
  {
    "key": "verse-1",
    "label": "Head / A",
    "kind": "verse",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-2",
    "label": "Solo",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "bridge-3",
    "label": "Trading / Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "chorus-4",
    "label": "Head Return",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-song-centered-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-guardia-nueva-modernism": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-rhythmic-drive-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-elegant-cantabile-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-elastic-golden-age-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-dramatic-yumba-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-harmonic-modernism-tango": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "tango-rio-de-la-plata-fusion": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "A",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "B",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-3",
    "label": "Variación",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-4",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "timba-son-montuno-timba": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "timba-los-van-van-songo": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "timba-timba-aggression": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "timba-timba-piano-tumbao": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verso",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Coro",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Mambo / Gear",
    "kind": "bridge",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "solo-4",
    "label": "Montuno",
    "kind": "solo",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Cierre",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "uk-bass-jungle-hardcore-continuum": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "uk-bass-dark-garage": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "uk-bass-breakstep": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "uk-bass-uk-funky": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "uk-bass-grime-instrumental": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Groove",
    "kind": "verse",
    "bars": 16,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Main Groove",
    "kind": "chorus",
    "bars": 16,
    "intensity": "high"
  },
  {
    "key": "breakdown-3",
    "label": "Breakdown",
    "kind": "breakdown",
    "bars": 8,
    "intensity": "low"
  },
  {
    "key": "bridge-4",
    "label": "Return",
    "kind": "bridge",
    "bars": 16,
    "intensity": "peak"
  },
  {
    "key": "outro-5",
    "label": "Outro",
    "kind": "outro",
    "bars": 8,
    "intensity": "low"
  }
],
  "zouk-kassav-zouk-beton": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "zouk-antillean-big-band-zouk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "zouk-cabo-zouk": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
  "zouk-zouk-kizomba-bridge": [
  {
    "key": "intro-0",
    "label": "Intro",
    "kind": "intro",
    "bars": 4,
    "intensity": "low"
  },
  {
    "key": "verse-1",
    "label": "Verse",
    "kind": "verse",
    "bars": 8,
    "intensity": "medium"
  },
  {
    "key": "chorus-2",
    "label": "Chorus",
    "kind": "chorus",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "bridge-3",
    "label": "Bridge",
    "kind": "bridge",
    "bars": 8,
    "intensity": "high"
  },
  {
    "key": "solo-4",
    "label": "Instrumental",
    "kind": "solo",
    "bars": 8,
    "intensity": "peak"
  },
  {
    "key": "coda-5",
    "label": "Coda",
    "kind": "coda",
    "bars": 4,
    "intensity": "low"
  }
],
};

// New canonical style ids explicitly reuse the closest established form until
// their arrangements receive independently authored section templates.
const STYLE_FORM_ALIASES: Record<string, string> = {
  'disco-classic': 'disco-disco', 'disco-hi-nrg': 'disco-disco',
  'disco-philadelphia': 'disco-deep-funk', 'disco-italo': 'disco-synth-funk',
  'disco-euro': 'disco-disco', 'disco-post-disco': 'disco-boogie', 'disco-nu-disco': 'disco-synth-funk',
  'drum-and-bass-jungle': 'drum-and-bass-techno', 'drum-and-bass-techstep': 'drum-and-bass-idm', 'drum-and-bass-liquid': 'drum-and-bass-trip-hop',
  'drum-and-bass-neurofunk': 'drum-and-bass-idm', 'drum-and-bass-dancefloor': 'drum-and-bass-dubstep',
  'drum-and-bass-jump-up': 'drum-and-bass-garage', 'drum-and-bass-atmospheric': 'drum-and-bass-ambient',
  'drum-and-bass-drumfunk': 'drum-and-bass-techno',
  'uk-bass-funky': 'uk-bass-garage', 'uk-bass-future-garage': 'uk-bass-garage',
  'uk-bass-bassline': 'uk-bass-dubstep', 'uk-bass-grime': 'uk-bass-techno',
  'punk-hardcore-hardcore-punk': 'punk-hardcore-punk-rock', 'punk-hardcore-skate-punk': 'punk-hardcore-punk-rock',
  'punk-hardcore-pop-punk': 'punk-hardcore-punk-rock', 'punk-hardcore-melodic-hardcore': 'punk-hardcore-punk-rock',
  'punk-hardcore-post-hardcore': 'punk-hardcore-post-rock', 'punk-hardcore-crust-punk': 'punk-hardcore-hard-rock',
  'punk-hardcore-d-beat': 'punk-hardcore-garage-rock',
  'r-and-b-doo-wop': 'r-and-b-boogie', 'r-and-b-quiet-storm': 'r-and-b-deep-funk',
  'r-and-b-new-jack-swing': 'r-and-b-synth-funk', 'r-and-b-classic-blues-rnb': 'r-and-b-boogie',
  'r-and-b-alternative': 'r-and-b-synth-funk', 'soul-memphis': 'soul-synth-funk', 'soul-deep-soul': 'soul-deep-funk',
  'uk-bass-2-step': 'uk-bass-garage', 'uk-bass-speed-garage': 'uk-bass-garage',
  'soul-philly': 'soul-p-funk', 'soul-northern': 'soul-p-funk', 'soul-neo-soul': 'soul-synth-funk',
};
for (const [styleId, templateId] of Object.entries(STYLE_FORM_ALIASES)) {
  const template = STYLE_FORM_TEMPLATES[templateId];
  if (!template) throw new Error(`Missing form template alias target ${templateId} for ${styleId}`);
  STYLE_FORM_TEMPLATES[styleId] = template;
}

// Remove copied templates whose style IDs no longer exist in the catalog.
// Active styles above already received explicit aliases before these are pruned.
const RETIRED_STYLE_FORM_IDS = [
  'disco-p-funk', 'disco-deep-funk', 'disco-synth-funk', 'disco-disco', 'disco-go-go', 'disco-afrobeat', 'disco-funk-carioca',
  'r-and-b-p-funk', 'r-and-b-disco', 'r-and-b-go-go', 'r-and-b-afrobeat', 'r-and-b-funk-carioca',
  'soul-disco', 'soul-go-go', 'soul-boogie', 'soul-afrobeat', 'soul-funk-carioca',
  'drum-and-bass-downtempo', 'drum-and-bass-trip-hop', 'drum-and-bass-idm', 'drum-and-bass-dubstep', 'drum-and-bass-garage', 'drum-and-bass-synthwave', 'drum-and-bass-ambient', 'drum-and-bass-techno',
  'punk-hardcore-hard-rock', 'punk-hardcore-grunge', 'punk-hardcore-progressive-rock', 'punk-hardcore-garage-rock', 'punk-hardcore-psychedelic', 'punk-hardcore-post-rock', 'punk-hardcore-shoegaze',
  'uk-bass-downtempo', 'uk-bass-trip-hop', 'uk-bass-idm', 'uk-bass-synthwave', 'uk-bass-ambient', 'uk-bass-techno',
];
for (const id of RETIRED_STYLE_FORM_IDS) delete STYLE_FORM_TEMPLATES[id];

export const CATALOG_EXPANSION_STYLE_IDS = [
  "afrobeats-west-african-highlife-guitar",
  "afrobeats-afro-fusion-burna-boy",
  "afrobeats-afropop-guitar-groove",
  "afrobeats-afrobeats-percussive-minimalism",
  "bachata-dominican-guitar-tradition",
  "bachata-romantic-requinto",
  "bachata-modern-urban-bachata",
  "bachata-dominican-haitian-caribbean-bachata-fusion",
  "blues-memphis-electric-blues",
  "blues-west-coast-jump-blues",
  "blues-new-orleans-blues",
  "blues-british-blues-revival",
  "brazilian-choro-brazilian-chamber-groove",
  "brazilian-baiao-northeastern-brazilian",
  "brazilian-forro",
  "brazilian-tropicalia",
  "brazilian-mpb",
  "country-appalachian-old-time",
  "country-nashville-country-pop",
  "country-country-rock",
  "country-alt-country-roots-rock",
  "country-country-gospel",
  "cumbia-traditional-coastal-cumbia",
  "cumbia-cumbia-orchestral",
  "cumbia-cumbia-peruana",
  "cumbia-cumbia-digital-global-bass",
  "disco-salsoul-latin-disco",
  "disco-cosmic-disco",
  "disco-studio-54-orchestral-disco",
  "disco-italo-hi-energy",
  "drum-and-bass-ragga-jungle",
  "drum-and-bass-darkstep",
  "drum-and-bass-minimal-autonomic",
  "drum-and-bass-jazzstep",
  "electronic-electro",
  "electronic-detroit-techno",
  "electronic-chicago-acid-house",
  "electronic-ambient-techno",
  "electronic-breakbeat-hardcore",
  "flamenco-solea-por-medio",
  "flamenco-flamenco-fusion",
  "flamenco-nuevo-flamenco",
  "flamenco-cante-jondo",
  "folk-celtic-traditional",
  "folk-british-ballad-tradition",
  "folk-appalachian-string-band",
  "folk-nordic-folk",
  "folk-eastern-european-balkan-folk",
  "funk-one-pocket-funk-james-brown",
  "funk-minneapolis-funk",
  "funk-jazz-funk",
  "funk-p-funk-cosmic",
  "gospel-black-gospel-quartet",
  "gospel-gospel-soul",
  "gospel-gospel-choir-massed-voices",
  "gospel-modern-gospel-r-b",
  "hip-hop-old-school-breakbeat",
  "hip-hop-golden-age-sample-collage",
  "hip-hop-west-coast-g-funk-expansion",
  "hip-hop-memphis-southern-rap",
  "hip-hop-jersey-club-rap",
  "house-chicago-house",
  "house-deep-house",
  "house-acid-house",
  "house-minimal-techno",
  "industrial-industrial-rock",
  "industrial-industrial-metal",
  "industrial-power-electronics",
  "industrial-industrial-ambient",
  "jazz-swing-era",
  "jazz-modal-jazz",
  "jazz-post-bop",
  "jazz-jazz-funk",
  "jazz-avant-garde-free-improvisation",
  "jazz-brazilian-jazz",
  "kizomba-classic-angolan-kizomba",
  "kizomba-semba-to-kizomba-transition",
  "kizomba-cape-verdean-ghetto-zouk",
  "kizomba-minimal-tarraxinha",
  "kizomba-tarraxo-club",
  "metal-nwobhm",
  "metal-groove-metal",
  "metal-metalcore",
  "metal-deathcore",
  "metal-blackgaze",
  "punk-hardcore-proto-punk-garage-punk",
  "punk-hardcore-anarcho-punk",
  "punk-hardcore-oi",
  "punk-hardcore-screamo",
  "r-and-b-motown-r-b",
  "r-and-b-memphis-r-b",
  "r-and-b-90s-contemporary-r-b",
  "r-and-b-uk-neo-r-b",
  "reggae-one-drop-roots",
  "reggae-nyabinghi-rastafari-percussion",
  "reggae-digital-dancehall",
  "reggae-dubwise-reggae",
  "reggaeton-early-puerto-rican-reggaeton",
  "reggaeton-underground-playero",
  "reggaeton-dembow-dominicano",
  "reggaeton-experimental-neoperreo",
  "rock-rock-roll",
  "rock-british-invasion",
  "rock-southern-rock",
  "rock-krautrock",
  "rock-math-rock",
  "rock-dream-pop",
  "salsa-son-cubano-foundation",
  "salsa-salsa-brava-1970s-new-york",
  "salsa-salsa-conjunto",
  "salsa-salsa-jazz-fusion",
  "salsa-boogaloo-latin-soul",
  "ska-jamaican-first-wave-ska",
  "ska-rocksteady",
  "ska-jamaican-ska-jazz",
  "ska-third-wave-ska",
  "soul-stax-soul",
  "soul-muscle-shoals-soul",
  "soul-psychedelic-soul",
  "soul-quiet-funk-boogie-soul",
  "swing-new-orleans-trad-jazz",
  "swing-kansas-city-swing",
  "swing-chicago-swing",
  "swing-vocal-swing",
  "tango-song-centered-tango",
  "tango-guardia-nueva-modernism",
  "tango-rhythmic-drive-tango",
  "tango-elegant-cantabile-tango",
  "tango-elastic-golden-age-tango",
  "tango-dramatic-yumba-tango",
  "tango-harmonic-modernism-tango",
  "tango-rio-de-la-plata-fusion",
  "timba-son-montuno-timba",
  "timba-los-van-van-songo",
  "timba-timba-aggression",
  "timba-timba-piano-tumbao",
  "uk-bass-jungle-hardcore-continuum",
  "uk-bass-dark-garage",
  "uk-bass-breakstep",
  "uk-bass-uk-funky",
  "uk-bass-grime-instrumental",
  "zouk-kassav-zouk-beton",
  "zouk-antillean-big-band-zouk",
  "zouk-cabo-zouk",
  "zouk-zouk-kizomba-bridge"
] as const;
