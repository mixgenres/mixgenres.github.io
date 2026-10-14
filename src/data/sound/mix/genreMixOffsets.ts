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
  // Developed Dominican reference/render: the bongo formerly exceeded bass
  // by 17 dB and güira by 22 dB. Restore the low floor and continuous rasp.
  bachata: { bass: 8, guira: 10, bongos: -5, guitar: 1.5 },
  // Keep the bass and fiddle clear in the ensemble. Section/lead automation
  // carries fiddle breaks, while a shared static lift used to bury the chops.
  country: { 'upright-bass': 1.5, violin: 1.5 },
  tango: { violin: 6, bandoneon: 2, 'upright-bass': -4 },
  flamenco: { guitar: 3 },
  // The VCSL one-shot conga, clave and bell recordings sit well below the
  // melodic bank at the same MIDI velocity. These salsa-only trims put the
  // timekeeping and hand-drum attacks back in the pocket without affecting
  // the separate, already balanced bachata calibration above.
  salsa: { trumpet: 3, trombone: 3, congas: 18, bongos: 10, timbales: 10, claves: 12, cowbell: 10, guiro: 8, guira: 8 },
};

/** Track trims backed by source-level audits of the named sample arrangements. */
export const STYLE_INSTRUMENT_MIX_OFFSETS: Record<string, Record<string, number>> = {
  // Upright-bass attacks were 14 dB below guitar peaks in the Bluegrass
  // sample, and 29 dB below the big-band horns in this low, soft walk.
  'country-bluegrass': { 'upright-bass': 8 },
  'jazz-big-band': { 'upright-bass': 15 },
  // The banda tuba anchors the ensemble; its recorded bank sat about 12 dB
  // below the trumpet in the same passage.
  'mexican-banda': { tuba: 8 },
};
