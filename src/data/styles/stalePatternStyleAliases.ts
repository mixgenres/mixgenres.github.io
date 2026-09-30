/** Explicit migrations for style ids retained by older authored pattern catalogs. */
export const STALE_PATTERN_STYLE_ALIASES: Record<string, Record<string, string>> = {
  'reggae-dub': {
    dub: 'reggae-dub-dub', 'reggae-dub': 'reggae-dub-dub',
    'reggae-roots': 'reggae-dub-roots-reggae', 'reggae-steppers': 'reggae-dub-roots-reggae',
  },
  flamenco: {
    'flamenco-bulerias': 'flamenco-buleria-style',
    'flamenco-tangos-tientos': 'flamenco-tangos-style',
    'flamenco-remate': 'flamenco-tangos-style',
  },
  kizomba: { 'kizomba-semba': 'kizomba-semba-playful', 'kizomba-urban-kiz': 'kizomba-urbankiz' },
  timba: { 'timba-havana-modern': 'timba-timba-habanera' },
  'house-techno': {
    'techno-detroit': 'house-techno-detroit-techno', 'house-deep': 'house-techno-minimal',
    'house-chicago-deep': 'house-techno-minimal', 'house-techno-detroit': 'house-techno-detroit-techno',
    'house-techno-acid': 'house-techno-acid-techno',
  },
  swing: { 'swing-big-band': 'swing-big-band-swing', 'swing-small-group': 'swing-jump-blues' },
  zouk: { 'zouk-beton': 'zouk-zouk-beton', 'zouk-love': 'zouk-zouk-love' },
  tango: { 'tango-nuevo': 'tango-tango-nuevo' },
  electronic: { 'electronic-house': 'electronic-garage', 'electronic-bass': 'electronic-dubstep' },
  'samba-bossa': {
    'bossa-nova': 'samba-bossa-bossa-nova', 'samba-batucada': 'samba-bossa-samba-de-enredo',
    'samba-pagode': 'samba-bossa-pagode',
  },
  ska: { 'ska-first-wave': 'ska-trad-ska', 'ska-rocksteady-bridge': 'ska-two-tone' },
  'reggaeton-dembow': { 'reggaeton-modern': 'reggaeton-dembow-pop-reggaeton', 'reggaeton-dembow': 'reggaeton-dembow-playero' },
  folk: { 'folk-singer-songwriter': 'folk-indie-folk' },
  bachata: { 'latin-bachata': 'bachata-moderna', 'latin-cumbia': 'bachata-campestre' },
  funk: { 'funk-pfunk-neworleans': 'funk-p-funk', 'soul-motown-neosoul': 'funk-deep-funk' },
  jazz: { 'jazz-swing-bebop': 'jazz-bebop', 'jazz-modal-contemporary': 'jazz-spiritual-jazz' },
};
