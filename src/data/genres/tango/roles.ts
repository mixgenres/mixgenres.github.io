import type { GenreWorld } from '../../schema';
export const TANGO_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "marcato en 2",
        "marcato en 4",
        "arrastre",
        "bass division",
        "bordoneo",
        "slap pizzicato"
      ],
      "piano": [
        "marcato",
        "yumba",
        "síncopa",
        "campanitas",
        "arrastre",
        "percussive chords"
      ],
      "harmony": [
        "marcato accompaniment",
        "síncopa",
        "arpeggios",
        "bordoneos"
      ],
      "melody": [
        "fraseo",
        "rubato",
        "variation",
        "dialogue",
        "counter-phrase"
      ],
      "lead": [
        "bandoneón variation",
        "violin solo",
        "expressive fraseo"
      ],
      "percussion": [
        "chiche string hits",
        "piano wood knocking",
        "pandeiro/candombe accents"
      ]
    }
};
