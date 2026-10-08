# Genre reference and study pass

Automatic song arrangement, section randomization and unsilencing now draw only from the selected style's allowed patterns in its own genre folder. A pattern marked for a fill or ending cannot become an ordinary verse groove. If the current role and section have no eligible local cell, the part rests until the catalog supplies one; a cell from an unrelated genre cannot silently fill it.

Folder-authored endings remain separately auditionable. A two-bar phrase can combine a local body cell with its own local cadence cell, with the cadence aligned to the final bar. The existing style pattern keeps its ID for saved arrangements. The recomposed phrase has its own local owner and describes its two parts. Cycles longer than two bars, processes, drones and phrases over 32 events are not chopped to make the catalog look larger.

## Reference audio

`audit/all-samples/inventory.json` maps exact local recording filenames to the catalog. `scripts/calibrate-reference-mixes.py` screens two developed eight-second windows per matched recording. It prefers a matching `voiced/` accompaniment file when one exists, otherwise measures the original, then records the canonical `samples/` source path, measurement positions, source type, RMS, crest factor, low and high spectral shares, and side-to-mid level in that style's `referenceMix.ts` inside its genre folder. Temporary separated audio is removed after its measurements and provenance are saved; the compact measurements remain with the style calibration.

The current inventory maps 436 local reference files across 413 styles; seven catalog styles have no local MP3 and five files do not map to a sample-song entry. The full 3-per-style backlog is in [the reference coverage report](./genre-reference-coverage.md). Measurements from voice-removed accompaniment remain available for 317 style links, but the 315 derived `voiced/` MP3s were deleted after measurement. The canonical originals remain in `samples/`; regenerate a separated file only when a new analysis needs it. These measurements provide bounded evidence for stereo width, low-end weight and brightness. They do not treat Demucs output RMS as an album loudness target: separation changes gain, and one eight-second level is not a whole-song target. The current 8-second SoundFont comparison is documented in [the implementation audit](./genre-verification-implementation-audit.md); it is a timbre/mix screen, not a transcription or perceptual verdict.

These spectral summaries help compare production shape. They cannot identify instruments, recover a performance, or certify an authentic arrangement. The original bachata lesson cells in `src/data/genres/bachata/studies.ts` distinguish derecho and majao segunda, the low root/fifth tumbao, bongo martillo, güira strokes, requinto answers and a separate mambo study. They are original exercises based on the local bachata reference set, not transcriptions.

## Three-recording reference set for each style

Use **three verified MP3 recordings per song style** as the working reference set. Choose distinct performances that expose the style’s core sound, a performer or regional contrast, and a lead/rhythm interaction. This means three recordings used to study and calibrate a style; it does not mean generating three sample songs in the app. Work style by style, and keep each set sufficient to explain that style on its own. Reuse a recording across two styles only when the actual performance clearly belongs to both, and document why; do not fill a gap with a merely neighboring genre.

Choose complementary evidence rather than near-duplicates. Aim for:

1. **Core performance:** a clearly representative ensemble and groove.
2. **Style contrast:** another performer, region, period, or ensemble that shows meaningful variation.
3. **Technique and interaction:** a performance with exposed lead phrasing and legible accompaniment handoffs; use complete form when possible.

One recording may support multiple evidence roles, but retain three distinct performances per style. Prefer at least two performers/ensembles. Record when an item is a solo, crossover, orchestral adaptation, live version, modern production, or otherwise limited; do not let it stand in for evidence it does not contain. Three recordings are a practical baseline, not a claim that a style has only three valid realizations. Where a category is unavailable, record the gap and its next action instead of padding the set with a poor match.

### Download and verify each MP3

1. Check `samples/`, `voiced/`, and `audit/all-samples/inventory.json` first. Reuse an exact verified performance and do not download a duplicate.
2. Resolve and inspect the YouTube row before downloading. Record its displayed title and duration; reject playlists, compilations, full albums, continuous/non-stop mixes, and hour-mix titles. The default maximum is 15 minutes. A longer single composition requires a specific documented reason, and anything at least one hour is blocked.
3. Run the gate with the resolved metadata before clicking download. It fails closed if the title or duration is missing:

   ```bash
   npm run check:reference-candidate -- --title="Alegrías. Chano Lobato. 1990" --duration-seconds=490
   ```

   For a genuine single work over 15 minutes, provide `--longform-reason="..."`; titles that identify mixes or collections and items at least one hour remain blocked.

4. Verify the exact performance itself, not just a search-result title, and save its URL/video ID, uploader, artist/work, version or event, and source evidence.
5. Open the installed **MediaHuman YouTube to MP3** app, paste the verified YouTube URL, choose MP3 output, and download only after the duration gate passes. Confirm the app reports completion and locate the actual output file; move/copy the verified original into `samples/` with a clear `Artist - Title (version).mp3` name. Preserve the original file.
6. Verify the file is nonempty and decodable, and record its duration, channels, sample rate, byte size, and SHA-256. For example:

   ```bash
   ffprobe -v error -show_entries format=duration:stream=codec_name,sample_rate,channels -of json "samples/Artist - Title.mp3"
   shasum -a 256 "samples/Artist - Title.mp3"
   ```

7. Add the source, canonical local path, verification state, performers/version, evidence roles, and known limitations to `docs/genres/<genre-id>/references.json`; update the local inventory when appropriate. Keep the reference's style assignment explicit and retain identifying listening timecodes for every musical claim.
8. If the recording has vocals and accompaniment analysis needs a clearer instrumental view, run the targeted voice-removal command below. Keep the original MP3 and treat the separated file as fallible ensemble evidence; it is not a clean isolated instrument stem. Skip separation for instrumental recordings or when it cannot answer the question.

   ```bash
   ./removeVoiceFromMp3.sh --file "samples/Artist - Title.mp3" --device auto
   ```

   The script writes the matching accompaniment to `voiced/`. Inspect its existing options and environment before use; it can create/install its Demucs environment and dependencies. Existing valid outputs are reused unless `--force` is supplied. Do not run the script's no-file batch mode for a style-specific pass. Keep a derived file while actively inspecting or measuring it; after its measurements and provenance are saved, it can be deleted and recreated from the canonical original if needed.

Track downloaded originals and separated files against the user's **5 GiB overall reference-pass budget**. Process one style at a time, account for temporary separation files as well as retained MP3s, and stop before exceeding the budget. Keep the original recording as the canonical reference even when a separated accompaniment is available.

## Instrument and technique audit

`scripts/audit-technique-coverage.mjs` audits all 420 styles and 2,078 instrument/style pairs. It checks only patterns owned by that style and naming that instrument, then records body-pattern count, distinct event behavior, difficulty, energy and section scope alongside techniques with an explicit SoundFont route. Phrase endings and recomposed turnarounds do not inflate the body-pattern count.

The shared pack builder now turns each style's own authored cell into a small foundation reduction, a local phrase-answer study and one focused cell for each mapped playable gesture that the source cell does not already demonstrate. The reduced and answer cells reuse the source instrument, meter, accents and pitch material. Styles where an instrument is explicitly listed but had no local cell received folder-specific parts: Flamenco cante/cajón, Atmospheric piano/string layers, and Chacarera crossover piano. No neighboring genre supplies a pattern.

Regenerate the human-readable [420-style audit](./genre-pedagogy-audit.md) and the detailed local JSON with `node --import tsx scripts/audit-technique-coverage.mjs`. The report separates pattern coverage from preset/technique route gaps and lists reference matches and current per-style mix calibration. RMS from a vocal-removed reference is never interpreted as the target loudness of a generated master, and stereo evidence is not used to invent per-instrument fader settings.
