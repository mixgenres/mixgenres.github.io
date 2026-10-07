# Shipped sample-song pattern usage audit

Generated 2026-10-07T16:14:45.714Z. This audit inspected 420 catalog songs and 2190 instrument lanes. It measures the selected pattern IDs in every score measure; it does not judge authenticity or audio quality.

- Compiled songs: 420/420; errors: 0.
- Lanes using one or zero selected pattern IDs: 63/2190.
- Lanes with one pattern selected in at least 80% of measures (at least 16 measures): 158.
- Mean selected pattern IDs per lane: 4.78.

A pattern ID change is only a screening signal: it can be a cadence or generated study, and multiple IDs can still sound like the same pattern. Review this alongside authored-cell coverage in [`genre-pedagogy-audit.md`](genre-pedagogy-audit.md).

## Highest rates of a dominant song pattern

| Genre | Songs | Lanes | One-pattern lanes | ≥80% dominant | Dominant rate |
|---|---:|---:|---:|---:|---:|
| weird | 16 | 39 | 17 | 22 | 56% |
| classical | 7 | 32 | 9 | 18 | 56% |
| ambient | 9 | 28 | 12 | 14 | 50% |
| cinematic | 6 | 36 | 4 | 16 | 44% |
| indian-classical | 8 | 31 | 4 | 11 | 35% |
| electronic | 8 | 32 | 0 | 10 | 31% |
| industrial | 5 | 24 | 1 | 6 | 25% |
| persian | 5 | 17 | 0 | 4 | 24% |
| steppe | 6 | 13 | 2 | 3 | 23% |
| jazz | 9 | 47 | 1 | 8 | 17% |
| soukous | 5 | 30 | 0 | 5 | 17% |
| pop | 9 | 57 | 7 | 9 | 16% |
| gamelan | 4 | 20 | 3 | 3 | 15% |
| taarab | 5 | 29 | 0 | 3 | 10% |
| latin | 12 | 72 | 0 | 7 | 10% |

## Per-genre song use

| Genre | Songs | Lanes | One-pattern lanes | Dominant lanes | Compile failures |
|---|---:|---:|---:|---:|---:|
| afrobeat | 7 | 52 | 0 | 0 | 0 |
| afrobeats | 5 | 29 | 0 | 0 | 0 |
| amapiano | 7 | 40 | 0 | 0 | 0 |
| ambient | 9 | 28 | 12 | 14 | 0 |
| andean | 7 | 36 | 0 | 0 | 0 |
| arabic | 5 | 25 | 0 | 1 | 0 |
| bachata | 8 | 52 | 0 | 0 | 0 |
| bass | 10 | 50 | 0 | 1 | 0 |
| blues | 8 | 40 | 0 | 1 | 0 |
| bollywood | 6 | 42 | 0 | 0 | 0 |
| brazilian | 11 | 71 | 0 | 0 | 0 |
| chinese | 8 | 21 | 0 | 0 | 0 |
| cinematic | 6 | 36 | 4 | 16 | 0 |
| classical | 7 | 32 | 9 | 18 | 0 |
| country | 7 | 38 | 0 | 0 | 0 |
| dangdut | 4 | 24 | 0 | 0 | 0 |
| desert-blues | 4 | 21 | 0 | 0 | 0 |
| electronic | 8 | 32 | 0 | 10 | 0 |
| ethiopian | 5 | 26 | 0 | 0 | 0 |
| flamenco | 18 | 70 | 0 | 5 | 0 |
| folk | 6 | 23 | 0 | 0 | 0 |
| funk | 9 | 53 | 0 | 1 | 0 |
| gamelan | 4 | 20 | 3 | 3 | 0 |
| gnawa | 4 | 16 | 0 | 0 | 0 |
| gospel | 5 | 33 | 0 | 2 | 0 |
| hip-hop | 9 | 46 | 0 | 0 | 0 |
| house | 7 | 32 | 0 | 2 | 0 |
| indian-classical | 8 | 31 | 4 | 11 | 0 |
| industrial | 5 | 24 | 1 | 6 | 0 |
| japanese | 5 | 15 | 1 | 1 | 0 |
| jazz | 9 | 47 | 1 | 8 | 0 |
| kizomba | 7 | 42 | 0 | 0 | 0 |
| korean | 5 | 14 | 1 | 1 | 0 |
| latin | 12 | 72 | 0 | 7 | 0 |
| mbalax | 4 | 24 | 0 | 0 | 0 |
| metal | 7 | 35 | 0 | 0 | 0 |
| mexican | 10 | 52 | 0 | 1 | 0 |
| persian | 5 | 17 | 0 | 4 | 0 |
| pop | 9 | 57 | 7 | 9 | 0 |
| punk | 5 | 25 | 0 | 0 | 0 |
| qawwali | 4 | 17 | 0 | 0 | 0 |
| r-and-b | 9 | 45 | 0 | 0 | 0 |
| reggae | 7 | 42 | 0 | 0 | 0 |
| reggaeton | 6 | 30 | 0 | 0 | 0 |
| rock | 10 | 50 | 0 | 1 | 0 |
| salsa | 16 | 145 | 0 | 1 | 0 |
| soukous | 5 | 30 | 0 | 5 | 0 |
| steppe | 6 | 13 | 2 | 3 | 0 |
| swing | 7 | 41 | 0 | 0 | 0 |
| taarab | 5 | 29 | 0 | 3 | 0 |
| tango | 17 | 76 | 1 | 1 | 0 |
| timba | 12 | 109 | 0 | 0 | 0 |
| turkish | 5 | 20 | 0 | 0 | 0 |
| weird | 16 | 39 | 17 | 22 | 0 |
| zouk | 10 | 61 | 0 | 0 | 0 |

Song-by-song lane counts and selected pattern IDs are in [`audit/catalog-pattern-usage/report.json`](../audit/catalog-pattern-usage/report.json).
