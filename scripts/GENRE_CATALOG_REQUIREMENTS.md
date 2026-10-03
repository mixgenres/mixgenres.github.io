# Genre catalog requirements

## Ownership and discovery

- The 55-folder map under `src/data/genres/*/catalog.ts` is the public taxonomy and contains 420 styles with an explicit default for each genre.
- Each folder exports one `GENRE_WORLD` with `catalogGeneration: 'genre-style-map-v1'`.
- `src/data/genres/index.ts` discovers folder-owned worlds. Do not maintain a second handwritten genre registry.
- Deleting a genre folder removes only that genre, its styles, and its patterns. Avoid cross-folder imports of genre-owned data.

## Styles, instruments, techniques, and patterns

- Keep each style's calibration in its genre folder: role/instrument preferences, register and mix function, scoped technique vocabulary, rhythm/pattern grammar, style-specific harmony, and authored form.
- Instruments referenced by a style must resolve through `INSTRUMENTS_BY_ID`. Add a physical definition or an explicitly modeled alias when required.
- Expose a technique only when the style supports it and the instrument has the corresponding physical capability. Keep phrase and section techniques scoped to their proper musical context.
- Each calibrated pattern has exactly one owning genre and explicit style ownership. Pattern selection for that style is a closed set; do not borrow another genre's pattern or use a generic cross-genre fallback.
- Use rich pattern events for rests, ties, durations, accents, probability, microtiming, tuplets, polyrhythm, and phrase/section conditions where the source grammar needs them. Legacy onset grids may be projections for renderers that require them.
- Chord and voicing size follows the selected style and instrument. Do not impose a global four-note ceiling.

## Harmony, arrangement, and mix

- Calibrate pitch systems, scales, chord vocabulary, progression examples, harmonic rhythm, cadences, and bass/harmony interaction per style.
- Author role-first arrangements and style-specific section forms; keep meter, tempo, and personnel consistent with each style's calibration.
- Every style enables the dynamic mixer and authors its character, stage, dynamics, masking, ambience, role, section, transition, and bus settings. Resolve partial overrides over `DYNAMIC_MIX_DEFAULTS`; do not leave required runtime attributes unset.
- Preserve folder independence in theory and contract lookup. Unknown or deleted genres must fail explicitly rather than silently use another genre's profile.

## Maintenance

- Keep legacy catalog code only when it remains reachable and useful to the mapped public worlds.
- Update starter song genre/style IDs when the public map changes.
- Run TypeScript static validation after schema or catalog changes. Do not replace missing genre data with another genre's catalog.
