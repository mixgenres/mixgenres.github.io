export const GENRE_MIX_OFFSETS: Record<string, Record<string, number>> = {
  salsa: { bass: 8, percussion: -2 },
  flamenco: { lead: 1.5, comp: 2.0, bass: -2.5, pad: -4.0 },
  electronic: { bass: 3.0, lead: 0.0, comp: -1.5, pad: 1.0 },
  jazz: { lead: 1.0, bass: 1.0, comp: -0.5, pad: -3.0 },
  rock: { comp: 2.0, bass: 1.5, lead: 1.0, pad: -2.0 },
  // Let country bass anchor the pulse without the extra 3 dB role lift; the
  // recorded upright-bass source and bass-role profile already provide weight.
  country: { bass: 1.0 },
  orchestral: { pad: 2.0, lead: 0.0, comp: 0.0, bass: 0.0 },
};

/** Context trims after shared source calibration: stage prominence belongs to the ensemble. */
export const GENRE_INSTRUMENT_MIX_OFFSETS: Record<string, Record<string, number>> = {
  // The rendered bachata bongo and güira anchors sat 18–27 dB below the
  // requinto/bass in active passages. Restore a readable dance pulse.
  bachata: { bass: 8, bongos: -1, guitar: 1.5 },
  // Keep the bass and fiddle clear in the ensemble. Section/lead automation
  // carries fiddle breaks, while a shared static lift used to bury the chops.
  country: { 'upright-bass': 1.5, violin: 1.5 },
  tango: { violin: 6, bandoneon: 2, 'upright-bass': 22 },
  flamenco: { guitar: 3 },
  // Four-second ensemble renders put the recorded scrape/shake sources
  // 40–50 dB below the guitar and the bass 8–14 dB below it. Restore a readable
  // Angolan rhythm section without lifting drum-kit transients with them.
  kizomba: { bass: 5, guitar: -1.5, shaker: 4 },
  // Residual stage balance after shared source compensation. Keep the
  // established salsa levels while making the same recorded contacts readable
  // in worlds that previously received no source makeup.
  salsa: { trumpet: 3, trombone: 3, congas: 8, bongos: -2, timbales: 10, claves: -4, cowbell: -6, guiro: -12, guira: -12 },
};

/** Track trims backed by source-level audits of the named sample arrangements. */
export const STYLE_INSTRUMENT_MIX_OFFSETS: Record<string, Record<string, number>> = {
  // With distinct muted/open contacts restored, the boogaloo conga stem sat
  // 4 dB above its horn foreground in the measured ensemble window.
  'salsa-boogaloo': { congas: -4 },
  // The exposed martinete guide has no band to balance against. Its existing
  // ensemble vocal trim rendered the entire study around -35 dBFS RMS. Restore
  // the solo line here without lifting sustained vowel guides in other songs.
  'flamenco-tonas-martinetes': { voice: 10 },
  'kizomba-semba-derived': { synth: 5 },
  'kizomba-passada': { synth: 5 },
  'kizomba-urban-kiz': { synth: 8 },
  'kizomba-ghetto-zouk-crossover': { synth: 6 },
  'kizomba-fusion-kiz': { synth: 6 },
  // Upright-bass attacks were 14 dB below guitar peaks in the Bluegrass
  // sample, and 29 dB below the big-band horns in this low, soft walk.
  'country-bluegrass': { 'upright-bass': 8 },
  // The western-swing walking line remained far below the band in the stem audit.
  'country-western-swing': { 'upright-bass': 10 },
  // Restore the walking pulse under the horns in these quieter small-combo styles.
  'jazz-hard-bop': { 'upright-bass': 22 },
  'jazz-bebop': { 'upright-bass': 22 },
  'jazz-big-band': { 'upright-bass': 15 },
  // The log drum is the defining pitched low-end voice of this amapiano sample.
  'amapiano-private-school': { 'log-drum': 18 },
  // The darbuka carries the phrase pulse in this tarab arrangement.
  'arabic-tarab': { darbuka: 12 },
  // The banda tuba anchors the ensemble; its recorded bank sat about 12 dB
  // below the trumpet in the same passage.
  'mexican-banda': { tuba: 8 },
};
