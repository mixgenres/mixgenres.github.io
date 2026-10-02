import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_5: GenreStyleDefinition = {
        "id": "bachata-bachatango",
        "worldId": "bachata",
        "name": "Bachatango",
        "origin": "Buenos Aires / Dominican Republic / Europe",
        "era": "2000s–Present",
        "description": "Dramatic • Bandoneón • Fusion\nTango strings",
        "characteristicInstruments": ["bandoneon", "violin", "guitar", "bass", "bongos"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          118,
          130
        ],
        "keySubstyles": [
          "Tango-Bachata Crossover",
          "Dramatic Bachatango"
        ],
        "coreConcepts": [
          "bandoneón dramatic fraseo & arrastres",
          "staccato violin fills",
          "bachata derecho bongo rhythm",
          "minor harmonic progressions"
        ],
        "rhythmicGrammar": [
          "tango staccato accents layered over driving 4-beat bachata bongo/güira groove"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Dramatic bandoneón drag resolving into driving bachata bongo beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "A7",
            "Dm",
            "A7"
          ],
          "verse": [
            "Dm",
            "Gm",
            "A7",
            "Dm",
            "Bb",
            "E7",
            "A7",
            "Dm"
          ],
          "chorus": [
            "F",
            "C7",
            "F",
            "A7",
            "Dm",
            "Gm",
            "A7",
            "Dm"
          ],
          "coda": [
            "A7",
            "A7",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "bachata-bolero",
        "worldId": "bachata",
        "name": "Bolero Bachata",
        "origin": "Santo Domingo, Dominican Republic",
        "era": "1950s–1960s",
        "description": "Slow • Vintage • Lyrical\n50s romantic",
        "characteristicInstruments": ["guitar", "upright-bass", "bongos", "maracas", "requinto"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          96,
          114
        ],
        "keySubstyles": [
          "Bolero Campesino",
          "Early Bachata"
        ],
        "coreConcepts": [
          "nylon string guitar fingerpicking",
          "warm acoustic upright bass",
          "romantic sentimental lyrical themes",
          "soft wooden bongo accompaniment"
        ],
        "rhythmicGrammar": [
          "gentle bolero syncopation with delicate bongo martillo and soft maraca shimmer"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Romantic nylon-string guitar arpeggios over soft acoustic bolero pulse",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "B7",
            "Em",
            "B7"
          ],
          "verse": [
            "Em",
            "Am",
            "D7",
            "G",
            "C",
            "F#7",
            "B7",
            "Em"
          ],
          "chorus": [
            "Am",
            "D7",
            "G",
            "C",
            "Am",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Am",
            "B7",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "bachata-campestre",
        "worldId": "bachata",
        "name": "Campestre",
        "origin": "Rural Cibao, Dominican Republic",
        "era": "1970s–1980s",
        "description": "Raw • Unpolished • Folk\nHinterland Dominican",
        "characteristicInstruments": ["guitar", "bass", "bongos", "guiro", "requinto"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          125,
          142
        ],
        "keySubstyles": [
          "Música de Guardia",
          "Bachata Rural"
        ],
        "coreConcepts": [
          "unfiltered acoustic guitar bite",
          "intense amargue emotion",
          "relentless guira scraping",
          "folk storytelling lyrics"
        ],
        "rhythmicGrammar": [
          "fast earthy derecho and energetic mambo guitar picados"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sharp rustic requinto picados over earthy driving Cibao percussion",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "verse": [
            "Am",
            "Dm",
            "E7",
            "Am",
            "Dm",
            "G",
            "C",
            "E7"
          ],
          "chorus": [
            "Dm",
            "G",
            "C",
            "Am",
            "Dm",
            "E7",
            "Am",
            "Am"
          ],
          "coda": [
            "E7",
            "E7",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "bachata-merengue-de-guitarra",
        "worldId": "bachata",
        "name": "Merengue de Guitarra",
        "origin": "Dominican Republic",
        "era": "1970s–Present",
        "description": "Fast • Driving Tambora • Guitar-led\nHigh-tempo",
        "characteristicInstruments": ["guitar", "bass", "drums", "guiro", "requinto"],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          140,
          165
        ],
        "keySubstyles": [
          "Guitar Merengue",
          "Merengue Campesino"
        ],
        "coreConcepts": [
          "rapid 16th-note requinto lead riffs",
          "driving tambora repique patterns",
          "energetic bass walking lines",
          "fiesta party atmosphere"
        ],
        "rhythmicGrammar": [
          "fast 2/4 tambora galloping rhythm with high-speed guitar ostinatos"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "High-speed requinto arpeggio over fast galloping tambora drum groove",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "verse": [
            "C",
            "G7",
            "C",
            "G7",
            "F",
            "C",
            "G7",
            "C"
          ],
          "mambo": [
            "C",
            "F",
            "G7",
            "C",
            "C",
            "F",
            "G7",
            "C"
          ],
          "coda": [
            "G7",
            "G7",
            "C",
            "C"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "bachata-moderna",
        "worldId": "bachata",
        "name": "Bachata Moderna",
        "origin": "Dominican Republic / USA",
        "era": "2000s–2010s",
        "description": "Balanced • Pop-infused • Clear Syncopation\nVersatile",
        "characteristicInstruments": ["guitar", "bass", "bongos", "guiro", "synth"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          122,
          134
        ],
        "keySubstyles": [
          "Pop Bachata",
          "Turn-Pattern Bachata"
        ],
        "coreConcepts": [
          "clean modern studio production",
          "balanced derecho/majao transitions",
          "catchy pop hooks",
          "crisp metal güira accents"
        ],
        "rhythmicGrammar": [
          "clear 4-beat pulse with defined syncopation on beat 4 and bright requinto ornamentation"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crisp pop guitar hooks blending with tight modern bongo-güira groove",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G",
            "Am",
            "F"
          ],
          "verse": [
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F"
          ],
          "chorus": [
            "F",
            "G",
            "Em",
            "Am",
            "F",
            "G",
            "C",
            "C"
          ],
          "coda": [
            "Am",
            "F",
            "G",
            "C"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "bachata-sensual",
        "worldId": "bachata",
        "name": "Sensual",
        "origin": "Cadiz, Spain / European Social Circuit",
        "era": "2005–Present",
        "description": "Slow • Expressive • Body rolls\nModern",
        "characteristicInstruments": ["guitar", "bass", "synth", "bongos", "guiro"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          115,
          126
        ],
        "keySubstyles": [
          "Bachata Sensual",
          "European Social Bachata",
          "Remix Sensual"
        ],
        "coreConcepts": [
          "expressive dynamic breaks and pauses",
          "deep sub-bass frequency support",
          "fluid requinto passages",
          "dramatic vocal rubato"
        ],
        "rhythmicGrammar": [
          "smooth continuous 4-beat pulse with dramatic silence cuts and body-roll rhythm cues"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Smooth legato requinto phrasing followed by dramatic bass pause and drop",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Fm",
            "Db",
            "Ab",
            "Eb"
          ],
          "verse": [
            "Fm",
            "Db",
            "Ab",
            "Eb",
            "Fm",
            "Db",
            "Ab",
            "Eb"
          ],
          "chorus": [
            "Dbmaj7",
            "Eb",
            "Fm",
            "Cm",
            "Dbmaj7",
            "Eb",
            "Fm",
            "Fm"
          ],
          "breakdown": [
            "Db",
            "Eb",
            "Fm",
            "Fm"
          ],
          "coda": [
            "Db",
            "Eb",
            "Fm",
            "Fm"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "bachata-tradicional",
        "worldId": "bachata",
        "name": "Tradicional",
        "origin": "Dominican Republic (Campesino Roots)",
        "era": "1960s–1980s",
        "description": "Fast • Arpeggiated • Raw\nAcoustic guitar",
        "characteristicInstruments": ["guitar", "bass", "bongos", "guiro", "requinto"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          130,
          148
        ],
        "keySubstyles": [
          "Bachata Clásica",
          "Amargue",
          "Guitarra y Bongó"
        ],
        "coreConcepts": [
          "acoustic requinto with thumb-pick punch",
          "driving wooden güira rhythm",
          "raw amargue vocal delivery",
          "fast syncopated basslines"
        ],
        "rhythmicGrammar": [
          "fast derecho to majao shifts with high-tempo martillo and bongo repiques"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Punchy acoustic requinto syncopations over fast wooden güiro scraping",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "A7",
            "Dm",
            "A7"
          ],
          "derecho": [
            "Dm",
            "Gm",
            "A7",
            "Dm",
            "Gm",
            "C7",
            "F",
            "A7"
          ],
          "majao": [
            "Gm",
            "C7",
            "F",
            "Dm",
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ],
          "mambo": [
            "A7",
            "A7",
            "Dm",
            "Dm",
            "A7",
            "A7",
            "Dm",
            "Dm"
          ],
          "coda": [
            "A7",
            "A7",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "bachata-urbana",
        "worldId": "bachata",
        "name": "Urbana",
        "origin": "Bronx, New York / Dominican Republic",
        "era": "1999–Present",
        "description": "Smooth • 4/4 • Guitar-driven\nPop and",
        "characteristicInstruments": ["guitar", "bass", "bongos", "guiro", "requinto"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          124,
          136
        ],
        "keySubstyles": [
          "Urban Bachata",
          "Bachata Pop",
          "Bachata R&B"
        ],
        "coreConcepts": [
          "high-register requinto arpeggiations with chorus FX",
          "melodic 5-string electric bass runs",
          "bongó martillo patterns",
          "poignant bilingual vocals"
        ],
        "rhythmicGrammar": [
          "requinto continuous 16th-note arpeggiation over syncopated bass on beat 4 and martillo bongo accent on 4"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Requinto chorus-effect arpeggio dancing over syncopated bongo martillo",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "C",
            "G"
          ],
          "derecho": [
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G"
          ],
          "majao": [
            "Dm",
            "G",
            "C",
            "Am",
            "Dm",
            "E7",
            "Am",
            "Am"
          ],
          "mambo": [
            "F",
            "G",
            "Em",
            "Am",
            "F",
            "G",
            "Am",
            "Am"
          ],
          "coda": [
            "Am",
            "F",
            "C",
            "G"
          ]
        }
      };

export const BACHATA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
