# Genre catalog

Genre folders contain `catalog.ts` metadata and `index.ts` pack exports. `src/data/genres/index.ts` registers these exports explicitly for both Vite and Node. Adding or removing a folder requires updating that registry. Public categories are defined separately in `src/data/genreCategories.ts`; Afrobeat combines two internal catalogs without changing their style or pattern identities.

Patterns have one `worldId` and may declare explicit `styleIds`. Style selection uses all enabled patterns with that explicit owner, preserving their events and descriptions. Unscoped genre patterns remain reusable material for deliberate exploration. Unknown or cross-world ownership is an error; there is no semantic ownership fallback or near-duplicate filter.

Every style supplies calibration, an authored form, section progressions and role-specific instrument preferences. Repeated instruments in different ensemble entries are distinct parts. Instrument IDs must resolve through `INSTRUMENTS_BY_ID`. Calibration cues and original reference labels are preserved in full; concise UI summaries do not replace source metadata.

Mix overrides resolve over declared shared defaults. Technique preferences are bounded by instrument capabilities. An authored technique name or a complete metadata record does not certify acoustic realism. Recording-specific forms and harmony belong in `src/data/songs`, independently of the short sample form.
