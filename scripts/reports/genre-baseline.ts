// REPORT: default-starter baseline per genre (32 genres, one default style each).
// Replaces three scripts that each re-compiled every genre and re-derived the same per-track stats:
//   audit-default-genres.ts, audit-genre-dialects.ts, gain-calibration.ts
//
// For every genre it records: reference song, default style, tempo/duration/notes, the dialect target,
// and per track -> note stats (shared lib/trackStats), instrument evidence/range/scope, authored track
// volume, plus heuristic warnings (root-heavy / over-low / forward bass, missing physical evidence,
// non-idiomatic instrument for the genre).
//
// Output: audit/genre-baseline.json      Run: npm run report:genres
// Never fails the build; it is a report. (The old `calibrate --apply` flag never applied anything.)
import { GENRE_NAMES } from '../../src/data/genres';
import { getCanonicalStyle } from '../../src/engine/style';
import { getResolvedSectionStyle, makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { contractForGenre } from '../../src/engine/style/contracts';
import { genreDialectTarget, getInstrumentPerformanceProfile } from '../../src/engine/lookup/performance';
import type { Sheet } from '../../src/engine/sheet/sheet.ts';
import type { Region } from '../../src/types';
import { round, writeReport } from '../lib/io.ts';
import { trackStats } from '../lib/trackStats.ts';


const REFERENCES: Record<string, string> = {
  afrobeats:'Essence — Wizkid feat. Tems', bachata:'Obsesión — Aventura', blues:'Sweet Home Chicago — Robert Johnson / Blues standard',
  brazilian:'Chega de Saudade — Antônio Carlos Jobim', country:'Folsom Prison Blues — Johnny Cash', cumbia:'La Pollera Colorá — Colombian cumbia standard',
  disco:'Stayin\' Alive — Bee Gees', electronic:'Blue Monday — New Order', folk:'The Times They Are a-Changin\' — Bob Dylan', funk:'Superstition — Stevie Wonder', 'hip-hop':'The Message — Grandmaster Flash and the Furious Five', house:'Show Me Love — Robin S.',
  jazz:'Autumn Leaves — standard', kizomba:'Saudade — Kizomba standard/repertoire example', tango:'La Cumparsita — Gerardo Matos Rodríguez',
  flamenco:'Entre Dos Aguas — Paco de Lucía', metal:'Paranoid — Black Sabbath', 'r-and-b':'No Diggity — Blackstreet', reggae:'Three Little Birds — Bob Marley & The Wailers',
  reggaeton:'Gasolina — Daddy Yankee', rock:'Back in Black — AC/DC', salsa:'Pedro Navaja — Rubén Blades', ska:'A Message to You, Rudy — The Specials',
  soul:'Ain\'t No Sunshine — Bill Withers', swing:'Sing, Sing, Sing — Benny Goodman', timba:'La Sandunguita — Cuban timba repertoire example',
  zouk:'Zouk la sé sèl médikaman nou ni — Kassav\'', 'drum-and-bass':'Inner City Life — Goldie', industrial:'Head Like a Hole — Nine Inch Nails',
  'punk-hardcore':'Blitzkrieg Bop — Ramones', 'uk-bass':'Flowers — Sweet Female Attitude',
};

function phraseBars(sheet: Sheet, region: Region) {
  const style = getResolvedSectionStyle(sheet, region);
  const cycle = Math.max(1, Number(style.contract?.cycleLength ?? 1));
  const candidates = (style.melody?.phraseLengthsBars ?? []).filter((x: number) => x % cycle === 0);
  return Math.max(cycle, Number(candidates[0] ?? cycle));
}

const genres = Object.keys(GENRE_NAMES);
const report: { generatedAt: string; referenceMethod: string; genres: Array<Record<string, unknown>> } = {
  generatedAt: new Date().toISOString(),
  referenceMethod: 'structural/sonic proxy targets; no reference audio is embedded',
  genres: [],
};

for (const genre of genres) {
  const sheet = makeSheet(genre);
  const perf = compileWholeSong(sheet);
  const style = getCanonicalStyle(genre);
  const contract = contractForGenre(genre, style);
  const dialectTarget = genreDialectTarget(genre);

  const tracks = sheet.tracks.map(t => {
    const profile = getInstrumentPerformanceProfile(t.instrumentId ?? t.instrument);
    const stats = trackStats(sheet, perf, t.id);
    const role = String(t.role ?? '');
    const isBass = role === 'bass';
    const warnings: string[] = [];
    if (!profile.evidence.physical || profile.evidence.physical === 'missing') warnings.push('missing physical evidence');
    if (isBass && stats.rootRatio > 0.82) warnings.push('bass remains root-heavy');
    if (isBass && stats.lowRegisterRatio > 0.72) warnings.push('bass has excessive low-register density');
    if (isBass && stats.meanVelocity > 82) warnings.push('bass velocity remains forward');
    if (role && profile.genreProfiles[genre] && !profile.genreProfiles[genre].idiomatic) warnings.push('instrument genre profile marked non-idiomatic');
    return {
      trackId: t.id, instrumentId: t.instrumentId, role, trackVolume: t.volume,
      noteCount: stats.noteCount, meanVelocity: round(stats.meanVelocity),
      rootRatio: round(stats.rootRatio, 3), lowRegisterRatio: round(stats.lowRegisterRatio, 3),
      gestureDiversity: stats.gestures.length,
      evidence: profile.evidence, scope: profile.scope,
      physicalRange: [profile.capabilities.lowMidi, profile.capabilities.highMidi],
      warnings,
    };
  });

  report.genres.push({
    genre, name: GENRE_NAMES[genre], defaultStyleId: style.id,
    reference: REFERENCES[genre] ?? null, dialectTarget,
    bpm: perf.bars[0]?.bpm, durationSec: round(perf.duration), notes: perf.notes.length,
    phraseBars: Math.max(...sheet.regions.map(r => phraseBars(sheet, r))), cycleLength: contract.cycleLength,
    bassForward: contract.timbreSpace.mixCharacter?.bassForward,
    tracks,
    warnings: tracks.flatMap(t => t.warnings.map(w => `${t.instrumentId}: ${w}`)),
  });
}

console.log(`wrote ${writeReport('genre-baseline.json', report)} (${report.genres.length} genres)`);
