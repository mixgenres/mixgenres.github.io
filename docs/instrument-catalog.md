# Instrument catalog rules

The resolved `SongStyle` owns musical behavior. The instrument catalog describes a physical instrument or a distinct sound-producing system. A new catalog ID should pass this test:

> Would a competent player need a meaningfully different physical instrument or setup, rather than playing the same instrument differently or processing it differently?

If not, put the distinction in another layer:

| Layer | Describes | Example |
| --- | --- | --- |
| Instrument | Physical source and capabilities | Guitar, Bass, Violin |
| Variant | A physical construction or setup | Guitar / nylon, Bass / fretless-electric |
| Technique | A gesture available to the player | Guitar / rasgueado, Bass / slap |
| Style dialect | Which gestures and roles a style favors | Flamenco Guitar / rasgueado; Funk Bass / slap |
| Patch | An electronic timbre | Synth / saw-lead or sub-bass |
| Processing | Mix and production treatment | Dub delay send, room reverb, distortion |
| Role | The part in the arrangement | lead, backing, call, response |
| Kit component | A voice inside a larger instrument | Drums / kick, snare, ride |

For example, a track remains `guitar` in Flamenco, Funk, Jazz, Rock, and Metal. Its resolved style supplies the idiomatic vocabulary and variant, while the guitar definition limits that vocabulary to physically possible techniques. The `physicalTechniques` list is the hard boundary; weighted `techniquePreferences` let multiple style influences contribute without allowing a low-weight influence to replace the dominant style.

Use the existing `InstrumentDef.variants` and `InstrumentDef.patches` for setup and synth timbre choices. Put delays and other production behavior in `MixCharacter` or the sound signal chain. Put kit hits inside `drums.kitComponents` and pattern kit-voice data rather than adding a top-level instrument for each drum.

Keep culturally distinct instruments when their tuning, geometry, excitation, gesture, range, resonance, or ensemble mechanics create new performance behavior. A family resemblance or a different genre alone is not enough to merge or add an instrument.
