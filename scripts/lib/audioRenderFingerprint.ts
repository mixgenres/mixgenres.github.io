import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Fingerprint the offline render/data pipeline. UI/transport edits in another
 * working session must not invalidate an unchanged offline MP3. */
export function audioRenderFingerprint(): string {
  const hash = createHash('sha256');
  const visit = (directory: string) => {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = join(directory, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (/\.(tsx?|json)$/.test(file) && file !== 'src/engine/playback/songPlayer.ts') {
        hash.update(file); hash.update(readFileSync(file));
      }
    }
  };
  for (const directory of ['src/data', 'src/engine', 'src/export']) visit(directory);
  for (const file of ['scripts/render-song.ts', 'scripts/lib/audioExcerpt.ts', 'scripts/lib/audioRenderFingerprint.ts', 'package.json', 'package-lock.json']) {
    hash.update(file); hash.update(readFileSync(file));
  }
  return hash.digest('hex');
}
