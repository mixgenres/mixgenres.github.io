# Instrument and Genre Data Audit

Date: 2026-10-02

## Coverage and automated results

- 179 catalog instruments and 32 default genre worlds were inspected.
- 645 patterns load across those worlds; 212 style definitions are registered.
- Instrument IDs and playback modules resolve. The existing path audit reports no failures; its one warning is the drum kit's intentional shared MIDI note 38 for center and ghost snare variants.
- All 179 instruments produced finite, non-silent offline renders and passed the note-off tail check. This verifies the render path, not perceptual tone matching against recordings.
- Instrument open-string metadata, ranges, and authored technique references were internally consistent in the machine checks. The Tres uses octave-paired courses, so its slash-separated course tunings are valid rather than a single-note tuning string.
- Pattern world IDs, style IDs, and variant parent IDs now resolve within the active genre catalog.

## Corrections made

- Repaired 10 pattern-variant parent references that named a different pattern.
- Repaired stale pattern style references across the genre catalog, and removed style assignments that had no suitable local style.
- Removed two Cumbia patterns that were being exported as Bachata patterns (`cumbia-bass-groove` and `cumbia-guiro`).
- Stopped truncating pattern and variant descriptions to six words at the genre and style catalog boundaries, preserving the full authored text where it exists.
- Corrected the instrument-authenticity audit so authored physical models and luthier physics count as valid model data alongside a dedicated DSP profile. The previous predicate caused all seven probe instruments to fail despite authored physical models.

## Content issues that still need correction

The catalog is structurally linked, but it is not yet safe to call every genre definition musically correct. I found repeated, high-confidence copied material:

- `disco`, `r-and-b`, and `soul` each reuse Funk's eight style definitions (P-Funk, Deep Funk, Synth Funk, Disco, Go-Go, Boogie, Afrobeat, and Funk Carioca), including the same descriptions and core concepts with only IDs/world labels changed.
- `drum-and-bass` and `uk-bass` reuse Electronic's eight styles (Downtempo, Trip-Hop, IDM, Dubstep, Garage, Synthwave, Ambient, and Techno). The DnB and UK Bass style catalogs therefore omit defining substyles of those genres.
- `punk-hardcore` reuses Rock's eight style definitions, including Progressive Rock, Shoegaze, and Post-Rock, rather than a dedicated punk/hardcore taxonomy.
- Twelve Funk pattern names and grids are repeated in each of Disco, R&B, and Soul; twelve Electronic patterns are repeated in both Drum and Bass and UK Bass. These may be usable cross-genre vocabulary, but their source ownership and genre-specific teaching purpose are not represented clearly.
- 135 active pattern descriptions end in a dangling grammatical fragment (for example, “A repeating anchor that locks the” and “Short-long bass anticipation that leaves the”). The loader truncation has been removed, but these source strings need editorial repair rather than a guessed generic ending.

These findings are grounded in direct comparison of the authored data objects, not just their IDs. Fixing them requires genre-specific replacement style descriptions and pattern definitions; blindly relabeling the copied material would preserve the underlying musical errors.

## Limits of this pass

The render audit establishes that instruments produce audio and release correctly, but it does not compare timbre to reference recordings. The structural checks do not certify every onset grid as an idiomatic performance. A broader musical review should compare each style and representative pattern against primary recordings and specialist teaching materials. For spot checks, the audit consulted the [Marshall University swing rhythm-section guide](https://www.marshall.edu/music/files/Rhythm-Section-Roles-in-standard-swing.pdf), the [Smithsonian Folklife reggae overview](https://folklife.si.edu/magazine/black-history-in-roots-reggae-music), and the [Grinnell College Cuban tres collection](https://omeka-s.grinnell.edu/s/MusicalInstruments/item/1810).
