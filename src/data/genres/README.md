# Genre data layout

Rich genre catalogs intentionally use a small number of semantic modules instead of mirroring every schema dimension onto the filesystem.

Each fully modeled genre should normally contain:

- `identity.ts` — genre-wide identity, cultural context, roles, feel, harmony, and other world-level metadata.
- `patterns.ts` — the genre's complete musical-pattern catalog and its stable ordering.
- `styles.ts` — all style definitions and style-specific arrangement metadata for the genre.
- `index.ts` — assembles the public `GenreWorld` export from those modules.

Keep a separate genre-local file only when it contains executable or engine-facing behavior with a real independent responsibility (for example Tango's arrangement constants). Do not create one file per style, pattern category, or schema field.

Small/alias genres that are already represented cleanly by one or two files do not need to adopt the four-file layout artificially.
