import { SongPlayer } from '../src/engine/playback/songPlayer';
import { makeSheet } from '../src/engine/sheet/sheet';
import type { Sheet } from '../src/engine/sheet/sheet';

const report = document.querySelector<HTMLPreElement>('#report')!;
let song: Sheet | undefined, started = 0, preparedMs: number | undefined;
const player = new SongPlayer(() => update(), () => update());
function update() {
  if (player.preparedDuration && preparedMs === undefined) preparedMs = Math.round(performance.now() - started);
  report.textContent = JSON.stringify({ status: player.snapshot.status, preparedSeconds: player.preparedDuration,
    backgroundPreparationMs: preparedMs, position: Number(player.position().toFixed(2)), error: player.snapshot.error ?? null }, null, 2);
}
document.querySelector<HTMLButtonElement>('#prepare')!.onclick = () => {
  song = makeSheet('tango', 'tango-golden-age'); started = performance.now(); preparedMs = undefined; player.configure(song); update();
};
document.querySelector<HTMLButtonElement>('#play')!.onclick = () => { void player.play(); };
document.querySelector<HTMLButtonElement>('#pause')!.onclick = () => { player.pause(); };
document.querySelector<HTMLButtonElement>('#seek')!.onclick = () => { player.locate(20); };
document.querySelector<HTMLButtonElement>('#rename')!.onclick = () => {
  if (song) { song = { ...song, title: 'Renamed' }; player.configure(song); update(); }
};
window.addEventListener('pagehide', () => player.dispose(), { once: true });
