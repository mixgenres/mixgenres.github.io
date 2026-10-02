# Genre Catalog Requirements

## Scope

- Supported genres are the 33 canonical leaves in `data/genres/index.ts`.
- Unsupported legacy genres must not appear in the public catalog.
- The instrument catalog is authoritative and must remain unchanged.

## Genre hierarchy

- Use one canonical genre ID per public genre.
- Default style is the first listed style.
- Keep 6–8 styles per genre.
- Style names describe reusable musical identities.
- Do not clone individual artist or song styles.

## Pattern catalog

- Patterns are reusable musical definitions.
- Reuse shared pattern objects across genres when valid.
- Never add trivial rhythmic duplicates.
- Prefer one pattern per distinct musical job.
- Pattern descriptions use six words maximum.
- Keep authored onset, accent, velocity, and articulation data.
- Patterns must be reachable through the active style contract.
- Songs must select patterns from this catalog.
- Do not define song-specific pattern cells.

## Four-chord catalog

- Every reusable chord cell contains exactly four chords.
- Chord cells live in `data/chordPalette.ts`.
- Reuse cells across genres where musically appropriate.
- Remove exact or trivial progression duplicates.
- Chord descriptions use six words maximum.
- Songs must choose chord cells from this catalog.
- Do not define song-specific progression arrays.

## Starter songs

- Starter songs use exactly five instruments.
- Instrument choices should reflect genre identity.
- Do not modify the instrument catalog to satisfy this rule.
- Song structures must use existing engine section kinds.
- Forms must be representable by `GenreForm` and `FormStep`.
- Use genre-appropriate BPM ranges and meters.
- Use authored groove mechanics for timing and velocity feel.
- Density should follow section intensity and genre expectations.
- Avoid uniformly busy arrangements.

## Cleanup

- Remove obsolete genre packs from the active registry.
- Do not retain compatibility aliases for deleted public genres.
- Keep source musical definitions only when reachable from supported genres.
- Prefer shared references over cloned catalog entries.
- Validate TypeScript before shipping catalog changes.
