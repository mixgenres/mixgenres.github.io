# Song performance and sound audit

See [the genre reference and study pass](./genre-reference-pass.md) for the 55-folder audio evidence, ownership rules, and pattern-development limits.

The current instrument-level study and technique coverage findings are in the [420-style pedagogy audit](./genre-pedagogy-audit.md).

The audit separates score correctness, instrument mechanism correctness and perceptual authenticity. Passing numerical checks is evidence for the first two; it does not certify a convincing imitation of 420 musical traditions or performances. All example melodies are generated or original study phrases, not transcriptions of the named performers.

## Confirmed faults corrected

| Fault | Resulting correction |
| --- | --- |
| Parts explicitly marked silent acquired a fallback rhythm. Only the first two instruments in a role were selected for full sections. | Rests now remain rests; all intended players enter in full sections. |
| Pianos, organs and electric keyboards inherited bellows performance behavior. | Keyboard and bellows mechanisms are distinguished even though the browsing catalog groups them together. |
| Authored durations equal to one grid step were treated as unspecified; fractional durations were rounded; two-bar event grids were compressed into one bar. | Exact authored note lengths, multi-bar cycles and fractional positions survive compilation. Phrase-final lengthening applies only to unspecified lengths. |
| Explicit bowing/legato could be replaced by a random technique landmark. | Explicit techniques remain intact. Bowed bass sustains; high bow-pressure settings no longer turn a pizzicato bass note into arco. Source-changing gestures drive the physical renderer directly. |
| Swing depended on attack index, so sparse patterns swung the wrong beats. Microtiming was applied twice. | Swing follows metric offbeats and the selected style's subdivision; timing offsets are applied once. |
| Major and dominant chords could use the song's minor scale for their thirds. `root-fifth` did not match the bass dispatcher. | Functional chord-relative pitches use the correct quality; root/fifth motion and slash-chord basses resolve correctly. Modal traditions retain their authored collections. |
| Pitched percussion could become repeated MIDI 60; synth bass parts could become chord blocks. | Pitched percussion has melodic pitches; bass roles are monophonic low-register lines. |
| Authored descending degree phrases wrapped upward on their tonic. Generic melody registers drifted upward through phrases. | Degree contours share a root register, preserving descent and octave information; repeated phrases keep their intended register. |
| Fresh voice frequency and waveguide delay smoothers started at zero. | Cold attacks begin at the intended frequency and string length, with smoothing only for an explicit later glide. |
| Bandoneon used a lower-octave reed, routine wide pitch vibrato, large continuous arrastre bends and knee impacts on ordinary marcato notes. | Dry fundamental 8′ plus upper octave 4′ reeds; restrained pressure variation; explicit bellows vibrato is amplitude modulation; knee impact is restricted to forceful gestures. Opening/closing bellows directions stay distinct and fingering agrees with sounding pitch. |
| Horns had a synthetic half-frequency component; other brass had a 1.5× component. Falls/doits happened only after note-off or were gain changes. | Normal brass uses harmonic partials. Falls/doits traverse pitch during the held note. Ordinary trumpet/sax attacks no longer scoop broadly by default. |
| Piano arrastre bent strings continuously and heavy attacks added unrelated low tones. | Piano approaches belong to discrete score notes; heavy attacks shape excitation rather than adding an unrelated pitch. Physical note-off and damper behavior are verified directly. |
| Celesta/music box used the piano renderer. Marimba, xylophone and steel pan shared identical unshaped-bar modes; their strike was a DC step. | Metal-bar/tine sources route separately from piano. Carved marimba, xylophone and pan have different tuned modes and noise strikes. Vibraphone note-off damping is checked in the physical model. |
| Four pitched instruments had unrestricted MIDI 0–127 ranges. | Concert xylophone F4–C8, tubular bells C4–F5, Low-C lead pan C4–E6 and a declared C4–C7 music-box model. Pitch audits synthesize low, centre and high references directly from each physical model. |

## Tango arrangements

All 17 tango-family examples now have explicit pitch phrases and accompaniment cells. Golden Age/Canaro/D'Arienzo/Di Sarli/Troilo studies use marcato en cuatro with distinct short or sustained melodic treatments. Pugliese has weighted beats one and three with lighter intervening releases; Salgán uses alternating low left-hand notes and right-hand offbeat chords. Milonga/canyengue use a 2/4 habanera cell; vals uses ternary bass/chord accompaniment. Nuevo uses a 3+3+2 ostinato and angular melody; canción leaves breathing and answering space; electronic crossovers retain their percussion parts; chacarera retains compound meter and hemiola.

These short original studies illustrate rhythmic models. They do not reproduce an orchestra's repertoire, historical voicing, rubato or expressive nuance. Arrastre is a discrete chromatic approach and pressure gesture; the piano and bandoneon models must not invent a continuous multi-semitone pitch glide to simulate it.

## Review and repeatable verification

- **Score** in the app displays every track, section, bar, note, duration, technique and rest. It includes instrument settings, full-ensemble/individual auditions and a complete JSON download.
- [Local review index](http://127.0.0.1:3000/audit/song-review.html) links all 420 complete scores and contains the before/after tango comparison, full revised study and individual instrument recordings. It requires the local development server. `npm run audit:accuracy` regenerates the index and score files.
- `npm run audit:accuracy` compiles every example, checks physical ranges, sounding frequencies, silent parts, ensemble entries and preservation of authored techniques. It writes `audit/song-accuracy.json` and all 420 complete scores under `audit/complete-scores/`.
- `npm run test:accuracy` checks the known score failures and measures rendered bandoneon/brass pitch spectra, falls before note-off, tuned mallet modes and physical note-off damping.
- `node --import tsx scripts/audit-instrument-pitch.ts` synthesizes and measures low/centre/high references for every pitched instrument at 44.1 kHz. Use `--instrument=<id>` for a focused probe. It retains ambiguous spectra as review findings and measures their attack separately from the decay tail.
- `npm run audit:instrument-render -- --all --details` probes low/soft/high attacks, kit components and physical note-off tails for every catalog instrument.
- `npm run check:audio` runs the normal behavior gates and targeted complete render/export regressions. It uses a representative set of engine mechanisms; it is not a listening review of every complete song.
- `npm run audit:audio-catalog` renders entrance and developed-section excerpts for every example style, checking each audible stem and encoded output for silence, invalid samples and clipping. These excerpts do not establish complete-song or perceptual authenticity.

Pitch audits retain ambiguous decay spectra as review findings and include separate attack windows and relative RMS. A weak decay-window peak must not justify mistuning a correctly pitched attack. All-instrument physical probes report raw isolated overload warnings before ensemble headroom and master processing; final output is checked separately.

## References and evidence limits

[Bandoneon composer's guide](https://www.bandoneon.co.uk/writing-for-bandoneon), [O. A. Bandoneon technical description](https://www.oabandoneon.com/teknikk), and the [Smithsonian Folkways booklet](https://folkways-media.si.edu/docs/folkways/artwork/SFW40431.pdf) support octave reed registration and bellows behavior. [Buenos Aires' Orquesta Típica](https://buenosaires.gob.ar/gcaba_historico/tango/orquesta-tipica) describes the principal ensemble. Tango marking and approach models were cross-checked against [UNLP's study](https://sedici.unlp.edu.ar/bitstream/handle/10915/183577/Documento_completo.pdf-PDFA.pdf?sequence=1), [Argentine musicology research](https://ojs.aamusicologia.ar/index.php/ram/article/download/471/534/2314), and [UCA's tango orchestration study](https://repositorio.uca.edu.ar/bitstream/123456789/8970/1/tango-original-banda-sinfonica.pdf).

[UNSW brass acoustics](https://phys.unsw.edu.au/jw/brassacoustics.html) and [Fletcher's brass research](https://phys.unsw.edu.au/music/people/publications/Fletcher2001.pdf) support harmonic-series excitation and pressure-dependent brightness. Marimba carved-bar tuning is documented in [UNSW's marimba discussion](https://www.phys.unsw.edu.au/~jw/music/conjunction/ConjunctionScore.pdf) and [Illinois physical measurements](https://courses.physics.illinois.edu/phys406/sp2017/NSF_REU_Reports/2011_reu/Heather_Hill/Hhill1_FinalPaper.pdf). VSL describes [xylophone compass and timbre](https://www.vsl.co.at/academy/percussion/xylophone), [vibraphone damping](https://www.vsl.co.at/academy/percussion/vibraphone), and [tubular bell instruments](https://www.vsl.co.at/instruments/synchron/percussion-iii). [Rossing's acoustic presentation](https://apps3.aps.org/aps/meetings/april09/presentations/W7Rossing.pdf) supports pan fundamental/octave/twelfth modes; [KaribPAN's specification](https://www.karibpan.com/blogs/news/karibpan-is-now-offering-low-c-bore-lead-pans) supports the selected lead-pan compass.

The oscillators, formants, attack weights and modal decay amplitudes remain synthesis estimates. The music-box compass and tine model are declared implementation choices, not universal specifications. Traditional bar/metallophone instruments and tubular bells still use an unmeasured shared approximation. Several world instruments share family renderers and lack recorded reference comparisons; non-Western tuning and ornaments require tradition-specific listening and musician review. No automatic test here establishes that those sounds are perceptually authentic.
