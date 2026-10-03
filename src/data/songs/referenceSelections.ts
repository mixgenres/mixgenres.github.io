/** Editorial track choices where the calibration map names a repertoire/scene.
 * These are representative selections, not an objective popularity ranking.
 */
export const REFERENCE_SELECTIONS: Record<string, { artist: string; track: string; source?: string }> = Object.fromEntries(`
tango::canyengue|Francisco Canaro|El Chamuyo
salsa::cumbia-crossover|Wilson Choperena & La Sonora Dinamita|La Pollera Colorá
zouk::zouk-fusion|Disclosure feat. Sam Smith|Latch
bachata::bachata-mambo|Antony Santos|El Baile del Perrito
bachata::fusion|Romeo Santos|Propuesta Indecente
reggaeton::playero-underground|Daddy Yankee & DJ Playero|Yamilet
reggaeton::experimental|Arca feat. Rosalía|KLK
latin::tropical|Víctor Manuelle|Que Suenen los Tambores
latin::latin-fusion|Quantic & His Combo Bárbaro|Un Canto a Mi Tierra
brazilian::partido-alto|Candeia|Testamento de Partideiro
brazilian::samba-de-roda|Samba de Roda de Dona Dalva|Beira Mar
mexican::son-huasteco|Trío Los Camperos de Valles|El Querreque
mexican::tierra-caliente|Beto y sus Canarios|Está Llorando Mi Corazón
andean::huayno|Pastorita Huaracina|Mujer Andina
andean::sanjuanito|Ñanda Mañachi|Pobre Corazón
andean::saya|Los Kjarkas|Llorando Se Fue
andean::tinku|Los Kjarkas|Tuna Papita
andean::carnavalito|Los Incas|El Humahuaqueño
andean::andean-fusion|Chancha Vía Circuito|Ilaló
kizomba::passada|Matias Damásio|Loucos
kizomba::tarraxinha|DJ Znobia|Marimba
kizomba::urban-kiz|DJ Snakes feat. Puto X|Memories
kizomba::fusion-kiz|David Carreira feat. Snoop Dogg|A Força Está em Nós
swing::fusion-swing|Billie Eilish|bad guy
blues::blues-fusion|Marian Hill|Down
amapiano::vocal|DJ Maphorisa & Kabza De Small feat. Samthing Soweto|Amantombazane
amapiano::bacardi|Vigro Deep|Black Power
amapiano::gqom-crossover|Busiswa|Gobisqolo
amapiano::kwaito-crossover|M'Du|Umazola
soukous::sebene|Zaïko Langa Langa|Sentiment Awa
soukous::kwassa-kwassa|Kanda Bongo Man|Sai
mbalax::sabar-heavy|Doudou N'Diaye Rose|Rose Rhythm
mbalax::pop-mbalax|Youssou N'Dour & Neneh Cherry|7 Seconds
mbalax::electronic-fusion|Baaba Maal|Fulani Rock
ethiopian::traditional-modal|Asnakech Worku|Tizita
ethiopian::modern-ethio-jazz|Mulatu Astatke & The Heliocentrics|Cha Cha
desert-blues::acoustic-tuareg|Tinariwen|Imidiwan Ma Tenam
gnawa::traditional|Maâlem Mahmoud Guinia|Bala Matinba
gnawa::lila-trance|Maâlem Hamid El Kasri|Sandiya
gnawa::gnawa-jazz|Majid Bekkas|Aicha
gnawa::gnawa-rock|Hoba Hoba Spirit|Bienvenue à Casa
taarab::classical-orchestra|Culture Musical Club of Zanzibar|Sibadili
taarab::modern-taarab|Mzee Yusuph|Mpenzi Chocolate
taarab::swahili-orchestra|Black Star Musical Club|Chozi Lanitoka
taarab::kidumbak|Makame Faki|Kula Muhogo
indian-classical::hindustani-khayal|Bhimsen Joshi|Raga Miyan ki Todi
indian-classical::dhrupad|Dagar Brothers|Raga Yaman
indian-classical::thumri|Girija Devi|Babul Mora Naihar Chhooto Jaye
indian-classical::ragam-tanam-pallavi|T.N. Krishnan|Ragam Tanam Pallavi (Shankarabharanam, Todi, Kalyani, Atana)
indian-classical::varnam|Lalgudi Jayaraman|Innam En Manam
indian-classical::tillana|Lalgudi Jayaraman|Mohanakalyani Tillana
qawwali::hamd-naat|Nusrat Fateh Ali Khan|Wohi Khuda Hai
qawwali::ghazal-qawwali|Sabri Brothers|Bhar Do Jholi Meri
bollywood::golden-age|Lata Mangeshkar|Pyar Kiya To Darna Kya
bollywood::electronic-club|Vishal-Shekhar|Sheila Ki Jawani
dangdut::electronic-dangdut|Nella Kharisma|Jaran Goyang
chinese::jingju|Mei Lanfang|The Drunken Concubine
chinese::chaozhou|Chaozhou String Ensemble|Han Ya Xi Shui
chinese::suona-chuida|Ren Tongxiang|Bai Niao Chao Feng
korean::pansori|Ahn Sook-sun|Chunhyangga
korean::sanjo|Kim Chuk-p'a|Gayageum Sanjo
arabic::takht|Mohamed Abdel Wahab|Ya Msafer Wahdak
arabic::instrumental-maqam|Munir Bashir|Taqsim Maqam Rast
arabic::modern-arabic-orchestra|Mohamed Abdel Wahab|Al Nahr Al Khalid
persian::dastgah|Mohammad Reza Shajarian|Morgh-e Sahar
persian::radif|Dariush Tala'i|Dastgah-e Shur: Daramad
persian::avaz|Mohammad Reza Shajarian|Avaz-e Abu Ata
persian::modern-persian|Kayhan Kalhor|Silent City
turkish::ottoman-classical|Tanburi Cemil Bey|Hicaz Taksim
turkish::roman-halk|Selim Sesler|Keşan'a Giden Yollar
steppe::morin-khuur|Mongolian State Morin Khuur Ensemble|Jonon Khar
steppe::sygyt|Huun-Huur-Tu|Sygyt
steppe::kargyraa|Kaigal-ool Khovalyg|Khovu Kargyraa
weird::circuit-bent-broken-electronics|Brian Charette Circuit Bent Organ Trio|Doll Fin
`.trim().split('\n').map(line => {
  const [key, artist, track] = line.split('|');
  return [key, { artist, track }];
}));
