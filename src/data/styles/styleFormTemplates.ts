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
};
