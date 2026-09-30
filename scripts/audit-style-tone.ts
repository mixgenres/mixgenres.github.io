import { ALL_STYLES } from '../src/engine/style/registry.ts';
import { resolveStyle } from '../src/engine/style/resolve.ts';
import { contractForGenre } from '../src/engine/style/contracts.ts';
import { STYLE_PATCHES } from '../src/data/styles/contracts.ts';
import { masterToneSettings } from '../src/engine/studio/mixer.ts';

const errors: string[] = [];
const rows = ALL_STYLES.map(style => {
  const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
  const mix = contractForGenre(style.primaryGenre, resolved).timbreSpace.mixCharacter;
  if (!mix) {
    errors.push(`${style.id}: no resolved mix character`);
    return undefined;
  }
  for (const [name, value] of Object.entries({
    dryness: mix.dryness,
    brightness: mix.brightness,
    bassForward: mix.bassForward,
    width: mix.width,
  })) {
    if (!Number.isFinite(value) || value < 0 || value > 1) errors.push(`${style.id}: ${name} outside 0..1 (${value})`);
  }
  const tone = masterToneSettings(mix, style.primaryGenre);
  for (const [name, value] of Object.entries(tone)) {
    if (!Number.isFinite(value)) errors.push(`${style.id}: non-finite resolved ${name}`);
  }
  if (tone.roomDepth < 0 || tone.roomDepth > 0.08 || tone.roomRt60 < 0.2 || tone.roomRt60 > 0.8) {
    errors.push(`${style.id}: room send/tail outside safe range (${tone.roomDepth}/${tone.roomRt60})`);
  }
  return {
    styleId: style.id,
    genreId: style.primaryGenre,
    roomDepth: tone.roomDepth,
    roomRt60: tone.roomRt60,
    presenceGainDb: tone.presenceGainDb,
    airGainDb: tone.airGainDb,
    widthGain: tone.widthGain,
    hasStyleOverride: Boolean(STYLE_PATCHES[style.id]?.timbreSpace?.mixCharacter),
  };
}).filter((row): row is NonNullable<typeof row> => Boolean(row));

const styleIds = new Set(ALL_STYLES.map(style => style.id));
for (const id of Object.keys(STYLE_PATCHES)) {
  if (!styleIds.has(id)) errors.push(`tone/style patch references unknown style ${id}`);
}

console.log(JSON.stringify({
  status: errors.length ? 'FAIL' : 'PASS',
  genres: new Set(rows.map(row => row.genreId)).size,
  styles: rows.length,
  styleOverrides: rows.filter(row => row.hasStyleOverride).length,
  roomSendRange: [Math.min(...rows.map(row => row.roomDepth)), Math.max(...rows.map(row => row.roomDepth))],
  roomTailRangeSeconds: [Math.min(...rows.map(row => row.roomRt60)), Math.max(...rows.map(row => row.roomRt60))],
  errors,
}, null, 2));
if (errors.length) process.exitCode = 1;
