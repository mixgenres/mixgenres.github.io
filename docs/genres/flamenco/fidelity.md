# Flamenco sample audit

Updated 2026-10-08. This is an evidence dossier, not an authenticity certificate. `references.json` holds source identity, local media metadata, and unresolved checks. `coverage.json` tracks implementation coverage. Counts alone do not certify musical fit.

## Current status

The local set has 33 performances mapped across 18 Flamenco styles. Four styles meet the requested three-reference baseline; 14 remain below it, with 21 additional style-reference slots outstanding. The manifest has 10 source-verified items, 16 local files whose exact source still needs verification, and 7 items awaiting source-identity review. Listening maps remain pending for the newly acquired recordings.

| Style | Local refs | Status and next musical check |
| --- | ---: | --- |
| Soleá | 4 | Compare cante/guitar/palmas ensemble passages; solo guitar is technique-only evidence. |
| Bulerías | 4 | Check performer contrast, contratiempo, llamadas, jaleos, and remates. |
| Alegrías | 3 | Check Cádiz major color, llamada, escobilla, and cierre. |
| Tangos | 2 | Add one distinct performance; compare groove density with Tientos. |
| Seguiriya | 1 | Add two distinct cante/guitar contexts; verify the long-short accent and breath pattern. |
| Tientos | 2 | Add one reference; check heavy slow pulse and transition into tangos. |
| Fandangos | 3 | Replace neither count nor tradition: inspect the two Toronjo items for overlap and map Huelva copla/response. |
| Rumba | 1 | Add two ensemble or guitar-led contexts; check abanico, bass, and version-specific percussion. |
| Tonás / Martinetes | 2 | Add one cante source; preserve free breathing and avoid a forced accompaniment pulse. |
| Taranta | 2 | Add one source; audit free guitar/cante exchange and the local harmonic center. |
| Granaína / Malagueña | 1 | Add two references; keep the two guitar cadences distinct within the combined catalog style. |
| Guajira | 1 | Add two sources; audit the Cuban-derived lilt and major-key refrain. |
| Farruca | 2 | Add one source; compare Sabicas studio and 1986 Bienal guitar phrasing and dance pulse. |
| Sevillanas | 1 | Add two dance/cante sources; verify four coplas and 3/4 accompaniment. |
| Nuevo Flamenco | 1 | Add two sources; document pop/fusion boundaries and keep compás audible. |
| Flamenco Jazz | 1 | Add two sources; separate jazz harmony and solo phrasing from palo cells. |
| Flamenco Rock | 1 | Add two ensemble references; verify riff, backbeat, palmas, and guitar-solo roles. |
| Urban / Experimental | 1 | Add two sources; verify the particular cante, rhythm, and electronic palette before generalizing. |

## Score and UX findings

The 18 catalog songs compile, use 5–8 instruments, and keep pattern selections inside their own style. Tango is also structurally sound: all 17 examples compile with bandoneon. The 5–8 instrument rule is user-directed; quiet score-backed support parts in sparse Flamenco forms are catalog scaffolding and are not claims about a historical ensemble roster.

The sample-song form layer is already differentiated: Soleá uses temple/letra/falseta/llamada/remate; Bulerías includes compás returns and multiple falsetas; Alegrías has an escobilla and bulería section; Tientos rises into tangos; Sevillanas has four coplas; and the fusion styles use pop, jazz, rock, or electronic forms. The separate style-template layer previously reused generic descriptions and overlong pattern names. It now has concise style notes and compact student-facing rhythm labels while retaining technique details in each cell's description.

Granaína and Malagueña still share one style ID despite distinct harmonic colors and cadence behavior. The pattern vocabulary now names both cadences, but their song grammar and harmony should be separated in a later catalog migration.

## Playback and mix evidence

The SoundFont sweep rendered all 18 sample songs. Existing comparisons use one short excerpt and one reference per style, so they are useful for flagging gross spectral or level mismatch, not for calibrating a robust mix. Current Flamenco mix targets do not aggregate multiple verified recordings. The new Sabicas 1986 Farruca is an instrumental technique reference and is not used as ensemble-balance evidence.

For each verified recording, the next evidence step is to mark an exposed entrance, developed phrase, role handoff, and ending when present. Compare cante, guitar technique, compás, palmas/cajón, register, density, and intentional space. For mix calibration, compare separated accompaniment only where useful and keep the original master for phrasing and production. Voice separation is not an instrument stem; don't treat it as clean solo guitar or percussion ground truth.

## Acceptance conditions

A style closes only after the source and performance are identified, useful timecodes are recorded, the generated score exposes its defining gestures in the right sections, and the SoundFont rendering is compared against the same musical role and phrase at matched listening level. Automated waveform fingerprints are prompts for review; they cannot certify that the mix sounds right. The 21 outstanding references, source-identity checks, phrase maps, and human listening decisions remain open.
