# Folder-owned genre catalog

Each public genre is an independent folder containing:

- `catalog.ts` — genre identity, the exact mapped style list, the default style, and genre-level source calibration.
- `index.ts` — exports that folder's `GENRE_WORLD` through the shared pack builder.

`src/data/genres/index.ts` discovers only folders that export the current catalog generation marker. Removing a genre folder removes that genre, its styles, and its owned patterns from discovery without changing another folder. Do not add genre IDs to a central registry.

Patterns are authored under one `worldId` and one or more explicit `styleIds`. The style catalog uses only explicitly owned patterns for calibrated styles; semantic fallback is reserved for older catalogs that do not author style ownership. Do not copy or assign another genre's patterns to a style.

Every style calibration supplies role-specific instrument preferences, technique vocabulary and scope, pattern families, pitch/harmony rules, arrangement sections, and a dynamic `MixContract` override. Mix overrides are resolved over `DYNAMIC_MIX_DEFAULTS`; authored leaves must use valid keys and values. Instrument IDs must resolve through `INSTRUMENTS_BY_ID`, and technique selection must intersect the style's vocabulary with the instrument's physical capabilities.
