/** Inventory every local recording, retaining all exact catalog matches. */
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { songCatalog } from '../src/data/songs/catalog';
const clean = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
// Preserve the source's Chinese title in the filename while matching the
// catalog's English transliteration to the same reference recording.
const localAliases = new Map([
  [clean('上海音乐学院教授丝竹研究组 - 欢乐歌'), 'chinese-jiangnan-sizhu_song'],
  [clean('Fernanda de Utrera - Soleá (Fiesta de la Bulería 1991)'), 'flamenco-solea_song'],
  [clean('Manuel Agujetas - Soleares de Joaquín el de la Paula y El Mellizo (La Soleá 1997)'), 'flamenco-solea_song'],
  [clean('Paco de Lucía - Soleá Niño Ricardo (Solo De Guitarra)'), 'flamenco-solea_song'],
]);
const files = readdirSync('samples').filter(file => /\.(mp3|wav|flac|m4a|ogg|aiff?)$/i.test(file)).sort();
const entries = files.map(file => {
  const name = file.slice(0, -extname(file).length);
  const aliasSongId = localAliases.get(clean(name));
  return { file: resolve('samples', file), name,
    matches: songCatalog.filter(song => aliasSongId ? song.id === aliasSongId
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
