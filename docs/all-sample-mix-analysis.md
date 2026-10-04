# Why the generated ensembles sounded small

The strongest common defect was source balance, rather than a lack of master bass boost. Several plucked models retained makeup gains of 30 after their physical excitations changed. A guitar could be 20–30 dB above the horns, bass and drums in the same rendered ensemble. The final peak trim then reduced the entire mix to accommodate that one source. Turning up the playback volume made the guitar louder without recovering the ensemble balance.

The correction has two stages: calibrate instrument sources before assembling the band, then use a modest fixed program lift after mastering. Genre-specific trims restore the intended stage: tango violin and bandoneon in front of its bass, flamenco guitar in front of palmas, and salsa horn entrances above their previous background position. This does not flatten each note or normalize each stem separately.

## Coverage and reproducibility

The inventory matches all **369 local recordings** to **371 catalog styles**. Two recordings have multiple style associations; those associations are retained. **49 of the 420 catalog styles have no matching recording**, and their artist/title names are listed instead of substituting another song.

Every original MP3 was decoded at the opening and approximately 35% and 65% of its duration, with a 12-second window at each position. All 369 originals decoded successfully. Existing files in `voiced/` are also measured when available, and the instrumental comparisons prefer that accompaniment. The original album remains available in the review player because separation can change tone, attacks and space.

The compiled structural survey covers all 371 matched styles and inspects complete authored studies. The audio sweep uses two-second ensemble excerpts, selected from instrumental activity rather than vocal activity. This is enough to screen output, balance and conspicuous spectral defects; it does not establish phrasing or whole-song similarity. Longer six-second controlled gain comparisons cover tango, flamenco, salsa, ambient, Afrobeat, Arabic, rock and country. The four priority defaults also have 20-second separated-reference comparisons.

Run the workflow from the repository root:

```sh
node --import tsx scripts/index-all-reference-samples.ts
.demucs-mps-venv/bin/python scripts/survey-all-reference-audio.py
.demucs-mps-venv/bin/python scripts/survey-reference-accompaniment.py
node --import tsx scripts/audit-all-reference-patterns.ts
node --import tsx scripts/validate-all-reference-audio.ts --jobs=4 --seconds=2 --phase=ensemble --resume
.demucs-mps-venv/bin/python scripts/create-all-reference-review.py
```

The default-song preparation remains independent:

```sh
bash removeVoiceFromMp3.sh 'Aníbal Troilo - Quejas de Bandoneón.mp3'
node --import tsx scripts/prepare-reference-samples.ts --separate --device=mps
node --import tsx scripts/validate-default-reference-audio.ts --jobs=2 --phase=validated --resume
```

There are 49 valid separated default references and six missing default titles. The one-file removal script validates existing outputs, keeps isolated working directories, and writes completed audio atomically. Batch processing continues past missing recordings.

## Source-level defects and changes

The isolated source audit covers **188 instruments, 79 rendering mechanisms and 639 probes**: soft/middle, strong/low, extreme-register techniques, kit components and note-off tails. It found no silent-attack or non-finite errors, but **72 isolated overload warnings**. Representative soft guitar output had RMS around −8.4 dBFS and peaks above full scale; trumpet was around −38.7 dBFS. Those sources could not form a credible ensemble using modest role faders alone.

Static makeup metadata was recalibrated for **105 instruments**. Pitched-source probes account for the 0.3/0.8 velocity difference; the louder normalized probe governs, so a deliberately quiet rattle does not cause a strong hit to be over-amplified. Kits use a median component level with an additional peak guard, preserving differences between kick, snare, hats and other components. Increases are bounded at 12 dB and reductions at 32 dB. Electronic patches and voices are excluded from this fit because they require patch and vocal-expression calibration.

These targets are engineering starting points, not measurements of an instrument's real acoustic sound-pressure level. Contact, body, damping and expressive velocity still determine the source's tone and time evolution. The trims only establish usable digital gain staging. Inherited instrument aliases receive their parent source's gain correction.

After that common calibration, context trims matter. Tango adds 6 dB to violin and 2 dB to bandoneon, and removes 4 dB from upright bass relative to the newly calibrated sources. Flamenco adds 3 dB to guitar. Salsa adds 3 dB to trumpet and trombone. These are ensemble balances, not changes to the instruments' physical definitions.

The complete mastered PCM then receives a **fixed 4 dB program lift**, limited by a **0.98 sample-peak ceiling**. One scalar applies to the complete stereo buffer. It does not ride phrases, change stereo ratios, introduce saturation or add low-frequency energy. Physical stems bypass this stage. A sample-peak ceiling is not a true-peak or LUFS guarantee.

## Weight, prominence and blend are different problems

The original album survey's median window RMS is approximately −16.6 dBFS, median crest factor 14.7 dB, and median energy share below 200 Hz 36%. Those numbers are not universal targets. Median low-frequency shares are roughly 43% for rock, 31% for salsa, 25% for tango, 22% for flamenco, and 9% for Arabic recordings in this collection. An indiscriminate bass shelf would therefore damage some of the references the system is supposed to approach.

**Weight** comes first from fundamental-bearing excitation, appropriate register and note length. The electric bass previously depended too heavily on noise excitation: the revised source includes a pluck displacement and a longer string decay, with contact noise retained as a separate component. A louder filtered click cannot stand in for a sustained bass fundamental. Likewise, body impacts and string attacks must remain distinct; the physical companion golpe should not be replicated once for every pitch of a strummed chord.

**Prominence** is a relationship between sources and their musical roles. A solo violin phrase must be allowed to lead; a bass floor must remain audible without owning the whole midrange. Ensemble gain and foreground policies are the appropriate controls after source calibration. Long-window RMS can nevertheless call a horn response “buried” simply because it rests between entrances. The review therefore reports stem activity separately and treats a large RMS gap as a warning, not an automatic fader command.

**Blend** depends on complementary registers, source envelopes, synchronized or deliberately offset attacks, and shared space. Salsa piano and tres now use broken-note montuno motion rather than repeated full chord blocks; bass anticipations address the next chord's root without moving the entire band off the written clave. Soleá has a guitar-only opening, low thumb notes, rasgueado accents, body golpe, and a complete written p-i-a-m-i tremolo/alzapúa closing figure. Ambient uses independent overlapping pad registers and entrances rather than several tracks retriggering one low modal root.

The synth unison implementation also needed a physical/DSP correction: selected sine patches were receiving an added sawtooth regardless of waveform. Unison now preserves the chosen waveform and count, and explicit patches own their envelope, filter and release rather than receiving a second generic ADSR. Stereo width now has independent content to distribute in the atmospheric study.

## How to read the findings

`audit/all-samples/analysis.md` contains the final screening counts; `findings.json` retains each style's individual warnings and source metadata. The searchable `listen.html` provides original album windows, separated accompaniment where available, generated ensemble snippets and the longer controlled gain examples. The 49 missing reference titles are listed there as well.

The analyzer separates normalized spectral distributions from output level. A simple volume increase cannot improve its spectral distance or low-frequency energy ratio. It also examines crest, envelope range, attack-density proxies and stereo correlation/side-to-mid energy. Warnings repeated across at least two reference positions are prioritized over a single opening-window disagreement.

The dataset still has substantial mismatches after the gain corrections: some studies lack the reference's low register, some sound too dark or too bright, others have different envelope density or stereo space. These are useful pointers to inspect source spectra, authored registers, note overlap, instrument choice and arrangement. A frequency fingerprint cannot tell whether a bass groove is correct, a singer's melisma is idiomatic, or a tango bow attack has the right friction and timing.

The engine's full-song catalog supplies authored arrangements associated with recordings. It does not contain transcribed album notes, stems, microphone responses or measured instrument impulse responses. Relating a template to an album title must not be presented as reproducing that recording. The changes here remove common engineering defects and improve recognizable playing behavior; they do not complete a recording-specific imitation for every style.

The Node path and browser path also differ after the physical stems: the browser uses native Web Audio bus compression and mastering, while Node uses the portable mix runtime. Their comparisons are labeled accordingly. Native browser checks test actual playback/export buffers independently. The portable measurements must not be described as proof that the complete browser master has matched an album.

Loudness, dynamics and peaks are separate descriptors; the EBU's [R 128 resources](https://tech.ebu.ch/publications/r128) explain this distinction. This project reports RMS and sample peaks rather than claiming compliance with R 128 or measuring LUFS/true peak. Pluck displacement is grounded in the initial-condition model described in Julius O. Smith's [Ideal Plucked String](https://www.dsprelated.com/freebooks/pasp/Ideal_Plucked_String.html); the current source remains a practical approximation of that physics.

## Verification and acceptance

The regression tests render guitar against trumpet and upright bass against violin, checking usable relative levels and absence of overload. A soft/strong guitar comparison checks that static trims retain dynamic response. The final-buffer test checks one stereo gain, preserved silence and the peak ceiling. Existing waveform/unison, release allocation, soleá opening, written tremolo and salsa anticipation tests remain in the system gate.

A useful listening decision is to compare at similar loudness, then inspect instrument identity, low-frequency body, foreground entrances, compás/clave, phrase timing and spatial blend separately. The player leaves album levels intact so their production remains audible; use its volume controls for tone comparisons. Numerical results remain marked `needs-musical-review` and never automatically certify authenticity.
