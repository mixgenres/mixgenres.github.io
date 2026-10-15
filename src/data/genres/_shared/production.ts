import type { GenrePackInput } from './genrePack';
import type { MixCharacter } from '../../styles/contracts';

/** Product production targets, not measurements or claims of recording fidelity. */
export const PRODUCTION_PROFILES = {
  natural: { attack: .075, releaseBeats: .7, drive: 0, parallel: 0, kit: 'acoustic-kit', centerBass: false },
  ensemble: { attack: .06, releaseBeats: .6, drive: 0, parallel: .02, kit: 'acoustic-kit', centerBass: false },
  percussion: { attack: .04, releaseBeats: .5, drive: .03, parallel: .02, kit: 'acoustic-kit', centerBass: true },
  band: { attack: .03, releaseBeats: .45, drive: .1, parallel: .08, kit: 'acoustic-kit', centerBass: true },
  punch: { attack: .018, releaseBeats: .35, drive: .18, parallel: .07, kit: 'acoustic-kit', centerBass: true },
  machine: { attack: .02, releaseBeats: .35, drive: .2, parallel: .035, kit: 'electronic-kit', centerBass: true },
  dance: { attack: .022, releaseBeats: .4, drive: .12, parallel: .02, kit: 'dance-kit', centerBass: true },
  sub: { attack: .025, releaseBeats: .4, drive: .1, parallel: .025, kit: '808-kit', centerBass: true },
  distorted: { attack: .012, releaseBeats: .3, drive: .32, parallel: .04, kit: 'electronic-kit', centerBass: true },
  spacious: { attack: .09, releaseBeats: .8, drive: 0, parallel: 0, kit: 'acoustic-kit', centerBass: false },
} as const;
type ProfileId = keyof typeof PRODUCTION_PROFILES;

/** Every public world has an explicit starting point. Style decisions below win. */
export const GENRE_PRODUCTION: Readonly<Record<string, ProfileId>> = {
  afrobeat:'band', afrobeats:'machine', amapiano:'sub', ambient:'spacious', andean:'natural',
  arabic:'ensemble', bachata:'percussion', bass:'sub', blues:'band', bollywood:'ensemble',
  brazilian:'percussion', chinese:'natural', cinematic:'spacious', classical:'ensemble', country:'band',
  dangdut:'percussion', 'desert-blues':'band', electronic:'machine', ethiopian:'band', flamenco:'natural',
  folk:'natural', funk:'punch', gamelan:'natural', gnawa:'natural', gospel:'ensemble', 'hip-hop':'machine',
  house:'dance', 'indian-classical':'natural', industrial:'distorted', japanese:'natural', jazz:'ensemble',
  kizomba:'band', korean:'natural', latin:'percussion', mbalax:'percussion', metal:'punch', mexican:'ensemble',
  persian:'natural', pop:'band', punk:'punch', qawwali:'natural', 'r-and-b':'band', reggae:'band',
  reggaeton:'machine', rock:'band', salsa:'percussion', soukous:'band', steppe:'natural', swing:'band',
  taarab:'ensemble', tango:'ensemble', timba:'punch', turkish:'ensemble', weird:'spacious', zouk:'band',
};

export const STYLE_PRODUCTION: Readonly<Record<string, ProfileId>> = {
  'afrobeat-palm-wine':'natural', 'afrobeat-highlife':'band', 'afrobeat-funk-heavy-afrobeat':'punch',
  'afrobeat-jazz-heavy-afrobeat':'ensemble', 'afrobeats-randb-afrobeats':'sub', 'afrobeats-alte':'sub',
  'amapiano-private-school':'dance', 'amapiano-bacardi':'machine', 'amapiano-gqom-crossover':'distorted',
  'amapiano-kwaito-crossover':'machine', 'andean-andean-fusion':'band',
  'arabic-instrumental-maqam':'natural', 'arabic-takht':'natural',
  'bachata-traditional-bolero-bachata':'natural', 'bachata-amargue':'natural', 'bachata-urban':'machine',
  'bass-jungle':'machine', 'bass-neurofunk':'distorted', 'bass-breakbeat':'machine', 'bass-grime':'distorted',
  'bass-liquid':'dance', 'bass-uk-garage':'dance', 'bass-2-step':'dance',
  'blues-delta':'natural', 'blues-piedmont':'natural', 'blues-hill-country':'percussion', 'blues-blues-fusion':'punch',
  'bollywood-disco-bollywood':'band', 'bollywood-electronic-club':'dance', 'bollywood-romantic':'spacious',
  'brazilian-bossa-nova':'natural', 'brazilian-mpb':'ensemble', 'brazilian-samba-rock':'band',
  'cinematic-hybrid':'machine', 'cinematic-epic':'ensemble', 'cinematic-minimal-tension':'natural',
  'classical-chamber':'natural', 'classical-baroque':'natural', 'classical-minimalist':'natural',
  'country-honky-tonk':'ensemble', 'country-bluegrass':'natural', 'country-bakersfield':'band',
  'country-outlaw':'natural', 'country-western-swing':'ensemble', 'country-americana':'natural', 'country-country-pop':'punch',
  'dangdut-electronic-dangdut':'dance', 'dangdut-rock-dangdut':'punch', 'dangdut-koplo':'punch',
  'desert-blues-acoustic-tuareg':'natural', 'desert-blues-psychedelic-desert':'spacious',
  'electronic-trance':'dance', 'electronic-melodic-electronic':'dance', 'electronic-synthwave':'machine',
  'electronic-idm':'machine', 'ethiopian-tizita':'natural', 'ethiopian-traditional-modal':'natural',
  'folk-contemporary-folk':'ensemble', 'folk-folk-revival':'ensemble',
  'funk-disco':'punch', 'funk-philly-disco':'ensemble', 'funk-boogie':'machine', 'funk-hi-nrg':'dance',
  'funk-minneapolis':'machine', 'funk-jazz-funk':'band', 'gnawa-gnawa-jazz':'ensemble', 'gnawa-gnawa-rock':'band',
  'gospel-quartet':'natural', 'gospel-gospel-soul':'band', 'gospel-contemporary':'punch',
  'hip-hop-trap':'sub', 'hip-hop-drill':'sub', 'hip-hop-g-funk':'sub', 'hip-hop-southern':'sub',
  'hip-hop-jazz-rap':'band', 'hip-hop-lo-fi':'machine', 'house-acid-house':'machine', 'house-tech-house':'machine',
  'industrial-industrial-rock':'punch', 'industrial-industrial-metal':'punch',
  'jazz-gypsy-jazz':'natural', 'jazz-cool':'natural', 'jazz-jazz-fusion':'band', 'jazz-free-jazz':'natural',
  'kizomba-tarraxinha':'sub', 'kizomba-urban-kiz':'sub', 'kizomba-ghetto-zouk-crossover':'machine',
  'kizomba-fusion-kiz':'machine', 'latin-bolero':'natural', 'latin-latin-pop':'band',
  'latin-electrocumbia':'dance', 'latin-sonidera':'machine', 'latin-cumbia-villera':'machine',
  'mbalax-electronic-fusion':'machine', 'metal-doom':'band', 'metal-industrial-metal':'distorted',
  'mexican-mariachi':'ensemble', 'mexican-ranchera':'band', 'mexican-norteno':'band',
  'mexican-banda':'punch', 'mexican-son-jarocho':'natural', 'mexican-son-huasteco':'natural',
  'mexican-corrido':'band', 'mexican-tierra-caliente':'percussion', 'mexican-conjunto':'band',
  'mexican-bolero-ranchero':'natural', 'persian-avaz':'natural',
  'pop-dance-pop':'dance', 'pop-synth-pop':'machine', 'pop-maximal-idol-pop':'dance',
  'pop-power-pop':'punch', 'pop-dream-pop':'spacious', 'pop-art-pop':'spacious',
  'punk-post-hardcore':'band', 'qawwali-contemporary-fusion':'band',
  'r-and-b-new-jack-swing':'machine', 'r-and-b-contemporary-randb':'sub', 'r-and-b-alternative-randb':'sub',
  'r-and-b-quiet-storm':'spacious', 'reggae-dancehall':'machine', 'reggae-dub':'band',
  'rock-alternative':'punch', 'rock-rock-and-roll':'ensemble', 'rock-classic-rock':'band',
  'rock-hard-rock':'punch', 'rock-psychedelic':'spacious', 'rock-progressive':'ensemble',
  'rock-indie':'band', 'rock-shoegaze':'spacious', 'rock-post-rock':'spacious',
  'rock-japanese-melodic-rock':'punch',
  'salsa-son':'ensemble', 'salsa-charanga':'ensemble', 'salsa-salsa-romantica':'ensemble', 'salsa-descarga':'punch',
  'steppe-folk-rock-fusion':'band', 'swing-electro-swing':'dance', 'swing-slow-swing':'ensemble',
  'taarab-kidumbak':'percussion', 'taarab-modern-taarab':'band',
  'tango-electrotango-gotan':'machine', 'tango-electro-rock-bajofondo':'punch', 'tango-tango-cancion':'natural',
  'turkish-anatolian-rock':'band', 'turkish-turkish-folk':'natural', 'turkish-roman-halk':'percussion',
  'weird-no-wave':'band', 'weird-zeuhl':'band', 'weird-glitch':'machine',
  'weird-circuit-bent-broken-electronics':'distorted', 'weird-noise':'distorted',
  'zouk-ghetto-zouk':'sub', 'zouk-zouk-randb':'sub', 'zouk-afro-zouk':'machine', 'zouk-zouk-beton':'punch',
  'flamenco-flamenco-rock':'band', 'flamenco-flamenco-jazz':'ensemble', 'flamenco-urban-experimental':'machine',
};

/** Audible production contrasts for styles previously sharing one character. */
const CHARACTERS: Readonly<Record<string, Partial<MixCharacter>>> = {
  'classical-chamber':{compressionRatio:1.15,dryness:.72,width:.42},
  'classical-romantic':{compressionRatio:1.25,dryness:.5,width:.7},
  'classical-impressionist':{compressionRatio:1.2,dryness:.44,width:.68},
  'jazz-cool':{compressionRatio:1.25,dryness:.76,width:.42},
  'jazz-big-band':{compressionRatio:1.65,dryness:.58,width:.7},
  'jazz-jazz-fusion':{compressionRatio:2.1,dryness:.74,bassForward:.58},
  'blues-delta':{compressionRatio:1.3,dryness:.84,width:.3},
  'blues-chicago':{compressionRatio:2.1,dryness:.7,width:.48},
  'country-honky-tonk':{compressionRatio:1.5,dryness:.68,width:.56,bassForward:.56,brightness:.57,transientSnap:.66},
  'country-bluegrass':{compressionRatio:1.25,dryness:.82,width:.62,bassForward:.5,brightness:.64,transientSnap:.82},
  'country-bakersfield':{compressionRatio:1.8,dryness:.76,width:.56,bassForward:.56,brightness:.68,transientSnap:.82},
  'country-outlaw':{compressionRatio:1.35,dryness:.68,width:.55,bassForward:.59,brightness:.54,transientSnap:.56},
  'country-western-swing':{compressionRatio:1.5,dryness:.74,width:.63,bassForward:.54,brightness:.62,transientSnap:.72},
  'country-americana':{compressionRatio:1.3,dryness:.72,width:.60,bassForward:.55,brightness:.57,transientSnap:.62},
  'country-country-pop':{compressionRatio:2.3,dryness:.72,width:.65},
  // Mexican regional styles need different dynamics: a broad but unforced
  // mariachi section, a lyric-first ranchera/bolero, and tighter dance-band
  // transients for banda, norteño, conjunto and Tierra Caliente.
  'mexican-mariachi':{compressionRatio:1.7,dryness:.72,width:.62,bassForward:.54,brightness:.63,transientSnap:.68},
  'mexican-ranchera':{compressionRatio:1.45,dryness:.60,width:.54,bassForward:.52,brightness:.56,transientSnap:.48},
  'mexican-norteno':{compressionRatio:2.2,dryness:.82,width:.46,bassForward:.62,brightness:.64,transientSnap:.84},
  'mexican-banda':{compressionRatio:2.6,dryness:.86,width:.58,bassForward:.64,brightness:.66,transientSnap:.9},
  'mexican-son-jarocho':{compressionRatio:1.35,dryness:.76,width:.52,bassForward:.48,brightness:.62,transientSnap:.72},
  'mexican-son-huasteco':{compressionRatio:1.25,dryness:.82,width:.44,bassForward:.46,brightness:.62,transientSnap:.74},
  'mexican-corrido':{compressionRatio:1.8,dryness:.78,width:.5,bassForward:.58,brightness:.58,transientSnap:.68},
  'mexican-tierra-caliente':{compressionRatio:2.1,dryness:.76,width:.6,bassForward:.58,brightness:.68,transientSnap:.84},
  'mexican-conjunto':{compressionRatio:2.2,dryness:.84,width:.46,bassForward:.66,brightness:.63,transientSnap:.88},
  'mexican-bolero-ranchero':{compressionRatio:1.3,dryness:.5,width:.56,bassForward:.46,brightness:.54,transientSnap:.42},
  'brazilian-bossa-nova':{compressionRatio:1.35,dryness:.82,width:.4,bassForward:.46},
  'brazilian-samba-reggae':{compressionRatio:2,dryness:.76,bassForward:.64},
  'reggae-dub':{dryness:.58,bassForward:.72,delaySend:.18,delayTimeSeconds:.42,delayFeedback:.48,delayToneHz:2300},
  'reggae-rocksteady':{compressionRatio:1.8,dryness:.8,width:.4},
  'hip-hop-lo-fi':{brightness:.38,dryness:.8,width:.35,compressionRatio:2.2},
  'hip-hop-jazz-rap':{dryness:.7,compressionRatio:1.9,width:.5},
  'hip-hop-trap':{dryness:.88,bassForward:.76,sidechainDucking:.32},
  'hip-hop-drill':{dryness:.9,bassForward:.78,sidechainDucking:.35},
  'bass-liquid':{dryness:.64,width:.72,compressionRatio:2.3},
  'bass-neurofunk':{dryness:.88,compressionRatio:3.1,sidechainDucking:.45},
  'bass-future-garage':{dryness:.58,width:.7,delaySend:.09},
  'house-deep-house':{dryness:.7,compressionRatio:2.2,sidechainDucking:.35},
  'house-tech-house':{dryness:.9,compressionRatio:2.6,sidechainDucking:.45},
  'house-progressive-house':{dryness:.6,width:.76,sidechainDucking:.42},
  'electronic-minimal':{dryness:.92,width:.44,compressionRatio:2.1},
  'electronic-trance':{dryness:.62,width:.78,compressionRatio:2.5,sidechainDucking:.45},
  'amapiano-private-school':{dryness:.68,compressionRatio:2.1,width:.65},
  'amapiano-log-drum-heavy':{dryness:.86,bassForward:.74,compressionRatio:2.3},
  'amapiano-gqom-crossover':{dryness:.94,width:.4,compressionRatio:2.8},
  'rock-hard-rock':{dryness:.76,bassForward:.64,width:.62,brightness:.62,compressionRatio:2.5,transientSnap:.84},
  'rock-progressive':{dryness:.58,bassForward:.54,width:.66,brightness:.58,compressionRatio:1.6,transientSnap:.62},
  'rock-indie':{dryness:.74,bassForward:.53,width:.56,brightness:.57,compressionRatio:1.55,transientSnap:.7},
  'rock-shoegaze':{dryness:.38,width:.78,compressionRatio:2},
  'rock-post-rock':{dryness:.48,width:.74,compressionRatio:1.8},
  'metal-doom':{dryness:.6,compressionRatio:2.2,width:.62},
  'metal-thrash':{dryness:.85,compressionRatio:2.7,width:.6},
  'ambient-drone':{compressionRatio:1.1,dryness:.3,width:.72},
  'ambient-organic-ambient':{compressionRatio:1.2,dryness:.5,width:.58},
  'ambient-glitch-ambient':{compressionRatio:1.5,dryness:.66,width:.65},
  'cinematic-minimal-tension':{compressionRatio:1.15,dryness:.66,width:.45},
  'cinematic-epic':{compressionRatio:1.7,dryness:.42,width:.78},
};

export function authorGenreProduction(pack: GenrePackInput): GenrePackInput {
  const base = GENRE_PRODUCTION[pack.id];
  if (!base) throw new Error(`Missing production profile: ${pack.id}`);
  return {...pack, styles:pack.styles.map(style=>{
    const id=`${pack.id}-${style.id}`, profile=PRODUCTION_PROFILES[STYLE_PRODUCTION[id]??base];
    const authored=style.mix.character??{}, tempo=(style.tempo[0]+style.tempo[1])/2;
    const character={...authored,...CHARACTERS[id],
      compressionAttackSeconds:authored.compressionAttackSeconds??profile.attack,
      compressionReleaseSeconds:authored.compressionReleaseSeconds??Math.min(.8,Math.max(.04,60/tempo*profile.releaseBeats)),
      drumSaturation:authored.drumSaturation??profile.drive,
      drumParallelCompression:authored.drumParallelCompression??profile.parallel,
      subEnhancement:authored.subEnhancement??0,
    };
    const instrumentDialects=structuredClone(style.instrumentDialects);
    for(const [role,instruments] of Object.entries(style.roles))for(const instrument of instruments) {
      const key=`${instrument}:${role}`, dialect=instrumentDialects[key]??{};
      if(instrument==='drums'&&!dialect.variantId)instrumentDialects[key]={...dialect,variantId:profile.kit};
      if(instrument==='sampler'&&!dialect.variantId&&profile.kit!=='acoustic-kit') {
        instrumentDialects[key]={...dialect,variantId:profile.kit,samplePalette:dialect.samplePalette??[37,39,42,46,70]};
      }
    }
    const stage=structuredClone(style.mix.stage??{}), roles=structuredClone(style.mix.roles??{});
    if(profile.centerBass) {
      stage.rolePan={...stage.rolePan,bass:0}; stage.roleWidth={...stage.roleWidth,bass:0};
      roles.bass={...roles.bass,width:0,ambienceSend:0};
    }
    return {...style,instrumentDialects,mix:{...style.mix,character,stage,roles}};
  })};
}
