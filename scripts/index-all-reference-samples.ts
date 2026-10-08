/** Inventory every local recording, retaining all exact catalog matches. */
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { songCatalog } from '../src/data/songs/catalog';
const clean = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
// Preserve the source's Chinese title in the filename while matching the
// catalog's English transliteration to the same reference recording.
const localAliases = new Map<string, string[]>([
  [clean('上海音乐学院教授丝竹研究组 - 欢乐歌'), ['chinese-jiangnan-sizhu_song']],
  [clean('Fernanda de Utrera - Soleá (Fiesta de la Bulería 1991)'), ['flamenco-solea_song']],
  [clean('Manuel Agujetas - Soleares de Joaquín el de la Paula y El Mellizo (La Soleá 1997)'), ['flamenco-solea_song']],
  [clean('Paco de Lucía - Soleá Niño Ricardo (Solo De Guitarra)'), ['flamenco-solea_song']],
  [clean('Vigro Deep - Black Power (feat. Techno Deep)'), ['amapiano-bacardi_song']],
  [clean('Bhizer - Gobisiqolo (feat. Busiswa, S.C Gorna & Trigger Bhepepe)'), ['amapiano-gqom-crossover_song']],
  [clean('Brian Eno - Discreet Music (Remastered 2004)'), ['ambient-generative-ambient_song','weird-process-generative_song']],
  [clean('Mohamed Abd El Wahab - El Nahr El Khaled _ النهر الخالد - محمد عبد الوهاب'), ['arabic-modern-arabic-orchestra_song']],
  [clean('UK Apachi with Shy FX - Original Nuttah (Drum Intro)'), ['bass-jungle_song']],
  [clean("Mozart's Symphony No. 40 (first movement) – performed live by the London Mozart Players"), ['classical-classical-orchestra_song']],
  [clean('Tchaikovsky - Sixth Symphony - First Movement'), ['classical-romantic_song']],
  [clean('Debussy - La Mer _ Alan Gilbert _ NDR Elbphilharmonie Orchester'), ['classical-impressionist_song']],
  [clean('MFSB - Love Is the Message (feat. The Three Degrees)'), ['funk-philly-disco_song']],
  [clean('MF DOOM - Doomsday (feat. Pebbles The Invisible Girl)'), ['hip-hop-abstract_song']],
  [clean('Pt Bhimsen Joshi - Raga _Miyan Ki Todi 1962 in Teentaal Khayal Eri Maai Aaj'), ['indian-classical-hindustani-khayal_song']],
  [clean('Dhrupad _ Raag Yaman _ Sr. Dagar Brothers _'), ['indian-classical-dhrupad_song']],
  [clean('Front 242 - Headhunter (V1.0)'), ['industrial-ebm_song']],
  [clean('Juan Luis Guerra & 4.40 - La Bilirrubina'), ['latin-merengue_song']],
  [clean('Hossein Alizadeh _ Ney Nava _ Original _ نی نوا حسین علیزاده _'), ['persian-instrumental-ensemble_song']],
  [clean('Adai - Kurmangazy (Адай - Құрманғазы)'), ['steppe-dombra_song']],
  [clean('Steve Reich & Double Edge - Piano Phase'), ['weird-phase_song']],
  [clean('Ben Johnston _ String Quartet 7'), ['weird-microtonal_song']],
  [clean('Gerard Grisey. Partiels - Ukho Ensemble Kyiv'), ['weird-spectral_song']],
  [clean('Fally Ipupa - Original (Video Officielle)'), ['zouk-afro-zouk_song']],
  // Supplemental performances acquired to study the same styles across more
  // than one recording, not to replace the catalog's primary song examples.
  [clean('Weather Report - Teen Town'), ['jazz-jazz-fusion_song']],
  [clean('Rush - YYZ'), ['rock-progressive_song']],
  [clean('BANKS - Waiting Game'), ['r-and-b-alternative-randb_song']],
  [clean('Sevdaliza - Shahmaran'), ['r-and-b-alternative-randb_song']],
  [clean('Marian Hill - One Time'), ['r-and-b-alternative-randb_song']],
  [clean("Oliver N'Goma - Bane"), ['zouk-zouk-love_song']],
  [clean('Fanny J - Ancrée à ton port'), ['zouk-zouk-love_song']],
  [clean('Kaysha - Bien plus fort que mes mots'), ['zouk-zouk-randb_song']],
  // These source filenames differ from the normalized catalog spellings.
  [clean('Igor Stravinsky - The Rite of Spring'), ['classical-modernist_song']],
  [clean('Steve Reich Ensemble - Music for 18 Musicians'), ['classical-minimalist_song']],
  [clean('Beethoven - String Quartet No. 14 Op. 131'), ['classical-chamber_song']],
  [clean('T. N. Krishnan - Ragam Tanam Pallavi'), ['indian-classical-ragam-tanam-pallavi_song']],
]);
const files = readdirSync('samples').filter(file => /\.(mp3|wav|flac|m4a|ogg|aiff?)$/i.test(file)).sort();
const entries = files.map(file => {
  const name = file.slice(0, -extname(file).length);
  const aliasSongIds = localAliases.get(clean(name));
  return { file: resolve('samples', file), name,
    matches: songCatalog.filter(song => aliasSongIds ? aliasSongIds.includes(song.id)
      : clean(`${song.artist} - ${song.track}`) === clean(name))
      .map(song => ({ genre: song.genreId, styleId: song.styleId, songId: song.id, name: song.name })) };
});
const missing = songCatalog.filter(song => !entries.some(entry => entry.matches.some(match => match.songId === song.id)))
  .map(song => ({ genre: song.genreId, styleId: song.styleId, name: song.name }));
mkdirSync('audit/all-samples', { recursive: true });
writeFileSync('audit/all-samples/inventory.json', JSON.stringify({ entries, missing }, null, 2) + '\n');
for (const song of missing) console.log(`MISSING ${song.genre}/${song.styleId}: ${song.name}`);
console.log(JSON.stringify({ files: entries.length, matchedFiles: entries.filter(e => e.matches.length).length,
  matchedStyles: entries.reduce((sum, e) => sum + e.matches.length, 0), unmatchedFiles: entries.filter(e => !e.matches.length).length, missingStyles: missing.length }));
