import { execFileSync } from 'node:child_process';

/** Loudness of the decoded export, including encoder peak trim. Not a whole-song target. */
export function measureEncodedAudio(bytes: Uint8Array) {
  const metadata = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=codec_name,sample_rate,channels,duration', '-of', 'json', '-i', 'pipe:0'], { input: bytes, maxBuffer: 1024 * 1024 }).toString());
  // Use spawnSync so stderr is captured even on a successful ffmpeg process.
  return { metadata, ...loudness(bytes) };
}
import { spawnSync } from 'node:child_process';
function loudness(bytes: Uint8Array) {
  const result = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', 'pipe:0', '-af', 'ebur128=peak=true', '-f', 'null', '-'], { input: bytes, maxBuffer: 4 * 1024 * 1024 });
  if (result.error || result.status !== 0) throw new Error(`Encoded loudness measurement failed: ${result.error ?? result.stderr.toString().slice(-500)}`);
  const summary = result.stderr.toString().split('Summary:').at(-1) ?? '';
  const integrated = summary.match(/I:\s*(-?[\d.]+)\s*LUFS/);
  const range = summary.match(/LRA:\s*([\d.]+)\s*LU/);
  const peak = summary.match(/Peak:\s*(-?(?:[\d.]+|inf))\s*dBFS/);
  if (!integrated || !range || !peak) throw new Error('ffmpeg did not return a complete EBU R128 summary');
  const truePeak = Number(peak[1]);
  return { integratedLufs: Number(integrated[1]), loudnessRangeLu: Number(range[1]), decodedTruePeakDbfs: Number.isFinite(truePeak) ? truePeak : null,
    method: 'ffmpeg EBU R128 on decoded excerpt export; includes encoder trim; short-excerpt LRA has limited meaning' };
}
