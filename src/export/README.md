# Export layer

`createExport` is the entry point used by the Download sheet. The song and compiled performance are captured together, and selection is explicit: mute/solo playback state does not remove a checked export part. Bass and percussion selection shortcuts are available.

| Download | Contents / intended use |
| --- | --- |
| MP3 | Stereo 44.1 kHz, 192 kbps mastered mix |
| WAV | Stereo 44.1 kHz, 16-bit mastered mix |
| MIDI (`.mid`) | SMF type 1, 960 PPQ, conductor tempo/meter/section map, named part tracks, General MIDI programs, notes, velocity, CC, bends |
| MusicXML (`.musicxml`) | MusicXML 4 notation with independent polyphonic voices, rests, ties, tempo changes, bass/percussion clefs, technique text |
| MusicXML archive (`.mxl`) | ZIP container with score and META-INF rootfile descriptor |
| Tablature | MusicXML TAB in standard guitar/bass tuning, assigned strings/frets; parts that cannot be played retain labeled standard notation |
| Guitar Pro 5 (`.gp5`) | GP5.00 binary guitar/bass score, string assignments, rests, ties, dynamics, tempo changes, gesture text |
| Performance JSON | Versioned exact compiled performance, selected track metadata, frequencies, gesture names/codes and per-note expression |
| Logic Pro / GarageBand / Ableton bundle | ZIP containing an `export/` directory: multitrack MIDI, individual MIDI files, aligned 32-bit float WAV stems, score, JSON, manifest and application-specific import instructions |

DAW bundles contain portable import assets. They are not native `.logicx`, `.band`, or `.als` projects. All stems start at time zero, preserve their track volume/pan, and bypass bus/master processing. IEEE float WAV keeps headroom without clipping. Silent selected tracks produce silent aligned stems. MIDI uses compatible approximations of instruments; physical synthesis patches do not travel with MIDI. GarageBand and Ableton users should recreate the tempo map from the manifest when importing MIDI, or use the already aligned WAV stems with time stretching disabled.

Notation is quantized to a 1/24-quarter-note grid (40 of 960 ticks), representing straight and triplet subdivisions down to triplet 64ths. It is an editable transcription, not a finished engraved edition. Flamenco rasgueado/golpe and other physical techniques are carried as technique text; percussion includes MIDI instrument mappings and conventional GM drum positions/noteheads. Tablature uses standard six-string guitar or four-string bass tuning and 24 frets. GP5 rejects unplayable selections rather than discarding pitches. Use MusicXML/MIDI/JSON for arbitrary instruments, unusual tunings, microtonality, and performances beyond physical string capacity. Score software can print MusicXML or turn it into PDF; this layer does not engrave PDFs itself.

MIDI bends are channel-wide, so overlapping per-note bends may not match the source. Shared channel 10 is used for percussion. Exact per-note bends and nonstandard frequencies remain in JSON. At most 15 melodic tracks can fit in one MIDI file; export smaller groups for larger ensembles.

## Audio rendering and encoding

- Notes/controllers are grouped by part once, then the SoundFont renderer produces only the selected parts on demand.
- Event-free spans render in batches directly into the current part buffer, preserving the original 64-sample event boundaries. Long browser exports yield to the UI periodically.
- AbortSignal stops track rendering and terminates MP3 workers; a cancelled export cannot trigger a download.
- Browser bus accumulation writes directly into AudioBuffers, eliminating six explicit full-song float-buffer copies.
- MP3 PCM conversion reuses two 18,432-sample Int16 windows, instead of two full-song buffers. Encoding runs in an ES module worker with transferred buffers; Node uses the same encoder without a worker.
- Rendered part buffers are short-lived export inputs; no stem or complete-mix PCM cache is maintained.
- Export implementation loads on demand when the user downloads.

Run `npm run test:exports`. Tests cover selected parts, tempo mapping, score ties/percussion/TAB, archive output, GP5 selection restrictions, cancellation, on-demand sample rendering and MP3 encoding. Fixtures in `/tmp/mix-export-fixtures` can be checked independently with PyGuitarPro, mido, lxml and ffprobe. These are optional validation tools, not application runtime dependencies.

Format references: [MusicXML notation and TAB](https://www.w3.org/2021/06/musicxml40/musicxml-reference/examples/tutorial-tablature/), [Logic MIDI support](https://support.apple.com/en-kw/guide/logicpro/lgcpdf6a3851/mac), [Ableton MIDI interchange](https://help.ableton.com/hc/en-us/articles/209068169-Understanding-MIDI-files), [GP5 binary structure](https://github.com/TadaoYamaoka/gp5_file_format).
