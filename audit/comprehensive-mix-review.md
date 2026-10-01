# Comprehensive Mix Review — All Genres

Static-only review. No Node execution and no MP3 generation. Existing instrument-render audit data was used as the measured source for intrinsic loudness calibration.

## Reference lineage

- `afrobeats` — Essence — Wizkid feat. Tems
- `bachata` — Obsesión — Aventura
- `blues` — Sweet Home Chicago — Robert Johnson / blues standard
- `brazilian` — Chega de Saudade — Antônio Carlos Jobim
- `country` — Folsom Prison Blues — Johnny Cash
- `cumbia` — La Pollera Colorá — Colombian cumbia standard
- `disco` — Stayin' Alive — Bee Gees
- `drum-and-bass` — Inner City Life — Goldie
- `electronic` — Blue Monday — New Order
- `flamenco` — Entre Dos Aguas — Paco de Lucía
- `folk` — The Times They Are a-Changin\
- `funk` — Superstition — Stevie Wonder
- `gospel` — Oh Happy Day — Edwin Hawkins Singers
- `hip-hop` — The Message — Grandmaster Flash and the Furious Five
- `house` — Show Me Love — Robin S.
- `industrial` — Head Like a Hole — Nine Inch Nails
- `jazz` — Autumn Leaves — standard
- `kizomba` — Saudade — Kizomba repertoire example
- `metal` — Paranoid — Black Sabbath
- `punk-hardcore` — Blitzkrieg Bop — Ramones
- `r-and-b` — No Diggity — Blackstreet
- `reggae` — Three Little Birds — Bob Marley & The Wailers
- `reggaeton` — Gasolina — Daddy Yankee
- `rock` — Back in Black — AC/DC
- `salsa` — Pedro Navaja — Rubén Blades
- `ska` — A Message to You, Rudy — The Specials
- `soul` — Ain't No Sunshine — Bill Withers
- `swing` — Sing, Sing, Sing — Benny Goodman
- `tango` — La Cumparsita — Gerardo Matos Rodríguez
- `timba` — La Sandunguita — Cuban timba repertoire example
- `uk-bass` — Flowers — Sweet Female Attitude
- `zouk` — Zouk la sé sèl médikaman nou ni — Kassav\

## Canonical default post-calibration ranges

| Genre | Min peak | Max peak | Spread |
|---|---:|---:|---:|
| `afrobeats` | -18.1 | -9.1 | 9.0 |
| `bachata` | -17.1 | -9.0 | 8.1 |
| `blues` | -17.0 | -8.2 | 8.9 |
| `brazilian` | -16.6 | -9.9 | 6.7 |
| `country` | -18.0 | -9.0 | 9.0 |
| `cumbia` | -18.0 | -9.9 | 8.1 |
| `disco` | -17.9 | -9.2 | 8.7 |
| `drum-and-bass` | -17.0 | -7.6 | 9.4 |
| `electronic` | -17.1 | -8.2 | 8.8 |
| `flamenco` | -17.0 | -9.9 | 7.1 |
| `folk` | -17.1 | -9.0 | 8.1 |
| `funk` | -17.0 | -9.2 | 7.8 |
| `gospel` | -17.0 | -8.9 | 8.1 |
| `hip-hop` | -17.0 | -8.1 | 8.9 |
| `house` | -23.0 | -7.6 | 15.5 |
| `industrial` | -23.0 | -8.6 | 14.5 |
| `jazz` | -17.0 | -8.2 | 8.8 |
| `kizomba` | -17.1 | -8.6 | 8.5 |
| `metal` | -25.5 | -9.0 | 16.5 |
| `punk-hardcore` | -25.5 | -9.7 | 15.8 |
| `r-and-b` | -17.0 | -9.2 | 7.8 |
| `reggae` | -17.0 | -8.1 | 9.0 |
| `reggaeton` | -17.0 | -7.6 | 9.5 |
| `rock` | -25.5 | -9.2 | 16.3 |
| `salsa` | -17.0 | -9.7 | 7.3 |
| `ska` | -17.0 | -9.0 | 8.0 |
| `soul` | -17.0 | -9.2 | 7.8 |
| `swing` | -17.0 | -8.7 | 8.3 |
| `tango` | -20.2 | -11.4 | 8.8 |
| `timba` | -17.0 | -9.0 | 8.0 |
| `uk-bass` | -17.0 | -7.6 | 9.4 |
| `zouk` | -17.0 | -8.6 | 8.4 |

## Contract checks

- Instrument calibration is applied at the instrument makeup layer.
- Genre offsets are applied once inside `getRoleGainLinear`.
- Authored track volume remains a scalar and is not substituted for instrument calibration.
- Live and export use the same `makeupGain × roleGain × trackVolume` effective gain model.
- Electronic family and engine electronic-key membership are exact.
