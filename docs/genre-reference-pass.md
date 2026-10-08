# Genre reference and study pass

Automatic song arrangement, section randomization and unsilencing now draw only from the selected style's allowed patterns in its own genre folder. A pattern marked for a fill or ending cannot become an ordinary verse groove. If the current role and section have no eligible local cell, the part rests until the catalog supplies one; a cell from an unrelated genre cannot silently fill it.

Folder-authored endings remain separately auditionable. A two-bar phrase can combine a local body cell with its own local cadence cell, with the cadence aligned to the final bar. The existing style pattern keeps its ID for saved arrangements. The recomposed phrase has its own local owner and describes its two parts. Cycles longer than two bars, processes, drones and phrases over 32 events are not chopped to make the catalog look larger.

## Reference audio

`audit/all-samples/inventory.json` maps exact local recording filenames to the catalog. `scripts/calibrate-reference-mixes.py` screens two developed eight-second windows per matched recording. It prefers the matching `voiced/` accompaniment file and records the audio path, byte size, modification time, measurement positions, source type, RMS, crest factor, low and high spectral shares, and side-to-mid level in that style's `referenceMix.ts` inside its genre folder. The compact measurements are retained with the style calibration so the style can be reviewed independently of a runtime cross-genre lookup.

The current inventory has 407 recordings and exact local reference links for 387 styles. Measured voice-removed accompaniment features are available for 314 exact reference links. Those separated references provide bounded evidence for stereo width, low-end weight and brightness. The original-vocal measurements remain marked as review evidence and do not drive instrument-mix values. The pass does not treat Demucs output RMS as an album loudness target: separation changes gain, and one eight-second level is not a whole-song target. Thirty-three styles have no exact local MP3 match; the report lists them instead of assigning a neighboring genre's profile. The current 8-second SoundFont comparison across the exact links is documented in [the implementation audit](./genre-verification-implementation-audit.md); it is a timbre/mix screen, not a transcription or perceptual verdict.

These spectral summaries help compare production shape. They cannot identify instruments, recover a performance, or certify an authentic arrangement. The original bachata lesson cells in `src/data/genres/bachata/studies.ts` distinguish derecho and majao segunda, the low root/fifth tumbao, bongo martillo, güira strokes, requinto answers and a separate mambo study. They are original exercises based on the local bachata reference set, not transcriptions.

## Five-recording reference set for each style

Use **five verified MP3 recordings per song style** as the working reference set. This means five reference recordings used to study and calibrate a style; it does not mean generating five sample songs in the app. Work style by style, and keep each set sufficient to explain that style on its own. Reuse a recording across two styles only when the actual performance clearly belongs to both, and document why; do not fill a gap with a merely neighboring genre.

Choose complementary evidence rather than five near-duplicates. Aim for:

1. **Core example:** a clearly representative performance of the style's characteristic ensemble and groove.
2. **Performer or regional contrast:** a second performer, ensemble, period, or documented regional approach that shows meaningful within-style variation.
3. **Exposed lead technique:** a passage where the central melodic instrument or voice can be heard developing phrases and articulations.
4. **Rhythm-section interaction:** an example that makes the style's accompaniment roles, subdivisions, bass motion, percussion, and interlocking parts legible.
5. **Form and production:** a complete or well-documented performance that exposes section changes, fills, entrances, exits, energy arc, and the relevant ensemble sound.

One recording may support multiple evidence roles, but retain five distinct performances where available. Prefer at least two performers/ensembles. Record when an item is a solo, crossover, orchestral adaptation, live version, modern production, or otherwise limited; do not let it stand in for evidence it does not contain. Five recordings are a practical evidence set, not a claim that a style has only five valid realizations. Where a category is unavailable, record the gap and its next action instead of padding the set with a poor match.

### Download and verify each MP3

1. Check `samples/`, `voiced/`, and `audit/all-samples/inventory.json` first. Reuse an exact verified performance and do not download a duplicate.
2. Identify the exact YouTube performance before downloading: save its URL/video ID, uploader, displayed title, artist/work, version or event, and duration. Verify the performance itself, not just a search-result title.
3. Open the installed **MediaHuman YouTube to MP3** app, paste the verified YouTube URL, choose MP3 output, and download. Confirm the app reports completion and locate the actual output file; move/copy the verified original into `samples/` with a clear `Artist - Title (version).mp3` name. Preserve the original file.
4. Verify the file is nonempty and decodable, and record its duration, channels, sample rate, byte size, and SHA-256. For example:

   ```bash
   ffprobe -v error -show_entries format=duration:stream=codec_name,sample_rate,channels -of json "samples/Artist - Title.mp3"
   shasum -a 256 "samples/Artist - Title.mp3"
   ```

5. Add the source, canonical local path, verification state, performers/version, evidence roles, and known limitations to `docs/genres/<genre-id>/references.json`; update the local inventory when appropriate. Keep the reference's style assignment explicit and retain identifying listening timecodes for every musical claim.
6. If the recording has vocals and accompaniment analysis needs a clearer instrumental view, run the targeted voice-removal command below. Keep the original MP3 and treat the separated file as fallible ensemble evidence; it is not a clean isolated instrument stem. Skip separation for instrumental recordings or when it cannot answer the question.

   ```bash
   ./removeVoiceFromMp3.sh --file "samples/Artist - Title.mp3" --device auto
   ```

   The script writes the matching accompaniment to `voiced/`. Inspect its existing options and environment before use; it can create/install its Demucs environment and dependencies. Existing valid outputs are reused unless `--force` is supplied. Do not run the script's no-file batch mode for a style-specific pass.

Track downloaded originals and separated files against the user's **5 GiB overall reference-pass budget**. Process one style at a time, account for temporary separation files as well as retained MP3s, and stop before exceeding the budget. Keep the original recording as the canonical reference even when a separated accompaniment is available.

## Instrument and technique audit

`scripts/audit-technique-coverage.mjs` audits all 420 styles and 2,078 instrument/style pairs. It checks only patterns owned by that style and naming that instrument, then records body-pattern count, distinct event behavior, difficulty, energy and section scope alongside techniques with an explicit SoundFont route. Phrase endings and recomposed turnarounds do not inflate the body-pattern count.

The shared pack builder now turns each style's own authored cell into a small foundation reduction, a local phrase-answer study and one focused cell for each mapped playable gesture that the source cell does not already demonstrate. The reduced and answer cells reuse the source instrument, meter, accents and pitch material. Styles where an instrument is explicitly listed but had no local cell received folder-specific parts: Flamenco cante/cajón, Atmospheric piano/string layers, and Chacarera crossover piano. No neighboring genre supplies a pattern.

Regenerate the human-readable [420-style audit](./genre-pedagogy-audit.md) and the detailed local JSON with `node --import tsx scripts/audit-technique-coverage.mjs`. The report separates pattern coverage from preset/technique route gaps and lists reference matches and current per-style mix calibration. RMS from a vocal-removed reference is never interpreted as the target loudness of a generated master, and stereo evidence is not used to invent per-instrument fader settings.
