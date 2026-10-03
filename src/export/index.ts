import { GESTURE_NAMES } from '../engine/band/gestures';
import { renderPerformanceToMp3 } from '../engine/playback/mp3Export';
import { renderPlaybackPart } from '../engine/playback/renderPlaybackPart';
import { renderPreparedMix } from '../engine/playback/renderSongMix';
import { checkAbort, yieldToUI, encodeMp3, wavBlob } from './audioEncoding';
import { filename, selectedTracks, type ExportContext } from './model';
import { midiBytes } from './midi';
import { musicXml } from './musicxml';
import { gp5Bytes } from './gp5';
import { zipBytes, type ArchiveEntry } from './zip';
import { type ExportFormat } from './formats';
export { EXPORT_FORMATS, type ExportFormat } from './formats';
const utf8 = (s: string) => new TextEncoder().encode(s);
function performanceJson(ctx: ExportContext) {
  const tracks = selectedTracks(ctx), ids = new Set(tracks.map(t => t.id));
  return JSON.stringify({ format: 'mixgenres-performance', version: 1, title: ctx.song.title, timeSignature: ctx.song.timeSignature, tracks, regions: ctx.song.regions, gestureEncoding: 'stable MixGenres gesture codes', gestures: Object.fromEntries([...new Set(ctx.performance.notes.filter(n => ids.has(n.trackId)).map(n => n.gestureCode))].map(code => [code, GESTURE_NAMES[code] ?? 'unknown'])), ...ctx.performance, notes: ctx.performance.notes.filter(n => ids.has(n.trackId)), ccs: ctx.performance.ccs.filter(c => ids.has(c.trackId)), trackInfo: Object.fromEntries(Object.entries(ctx.performance.trackInfo ?? {}).filter(([id]) => ids.has(id))) }, null, 2);
}
async function audio(ctx: ExportContext, format: 'mp3' | 'wav', progress?: (fraction: number) => void, signal?: AbortSignal, rawStem = false) {
  const tracks = selectedTracks(ctx);
  const options = {
    selectedTrackIds: tracks.map(t => t.id), trackInstruments: new Map(tracks.map(t => [t.id, t.instrumentId ?? t.instrument])), trackRoles: new Map(tracks.map(t => [t.id, t.role])),
    worldId: ctx.performance.worldId, styleId: (ctx.song as ExportContext['song'] & { styleId?: string }).styleId,
    signal, format, rawStem, bypassWebAudioMaster: rawStem,
    // Explicit export selection is authoritative, including a currently muted part.
    mixState: { volume: Object.fromEntries(tracks.map(t => [t.id, t.volume])), pan: Object.fromEntries(tracks.filter(t => t.pan !== undefined).map(t => [t.id, t.pan!])) },
  };
  if(!rawStem) {
    const mixed=await renderPreparedMix(ctx.performance,options,signal ?? new AbortController().signal,() => 2,
      fraction => progress?.(fraction*.85));
    checkAbort(signal);
    if(format==='wav') {progress?.(1);return wavBlob(mixed.left,mixed.right,mixed.sampleRate);}
    return encodeMp3(mixed.left,mixed.right,mixed.sampleRate,fraction => progress?.(.85+fraction*.15),signal);
  }
  const preparationProgress = new Map<string,number>();
  const preparedStems = new Map(await Promise.all(tracks.map(async track => {
    const part = await renderPlaybackPart(ctx.performance, { ...options, selectedTrackIds:[track.id], rawStem:true }, fraction => {
      preparationProgress.set(track.id,fraction);
      progress?.([...preparationProgress.values()].reduce((a,b) => a+b,0)/tracks.length*.75);
    });
    preparationProgress.set(track.id,1);
    progress?.([...preparationProgress.values()].reduce((a,b) => a+b,0)/tracks.length*.75);
    return [track.id,part] as const;
  })));
  checkAbort(signal);
  return renderPerformanceToMp3(ctx.performance, { ...options, preparedStems }, fraction => progress?.(.75+fraction*.25));
}
export async function createExport(ctx: ExportContext, format: ExportFormat, progress?: (fraction: number) => void, signal?: AbortSignal): Promise<{ blob: Blob; name: string }> {
  checkAbort(signal); selectedTracks(ctx);
  const base = filename(ctx.song.title);
  if (format === 'mp3' || format === 'wav') return { blob: await audio(ctx, format, progress, signal), name: `${base}.${format}` };
  let data: Uint8Array | string, type = 'application/octet-stream', extension: string = format;
  if (format === 'midi') { data = midiBytes(ctx); type = 'audio/midi'; extension = 'mid'; }
  else if (format === 'gp5') data = gp5Bytes(ctx);
  else if (format === 'json') { data = performanceJson(ctx); type = 'application/json'; }
  else if (format === 'musicxml' || format === 'tablature') { data = musicXml(ctx, format === 'tablature'); type = 'application/vnd.recordare.musicxml+xml'; extension = 'musicxml'; }
  else if (format === 'mxl') {
    data = zipBytes([{ name: 'META-INF/container.xml', data: utf8('<?xml version="1.0"?><container><rootfiles><rootfile full-path="score.musicxml" media-type="application/vnd.recordare.musicxml+xml"/></rootfiles></container>') }, { name: 'score.musicxml', data: utf8(musicXml(ctx)) }]);
    type = 'application/vnd.recordare.musicxml';
  } else {
    const tracks = selectedTracks(ctx);
    const entries: ArchiveEntry[] = [
      { name: 'export/song.mid', data: midiBytes(ctx) },
      { name: 'export/score.musicxml', data: utf8(musicXml(ctx)) },
      { name: 'export/performance.json', data: utf8(performanceJson(ctx)) },
    ];
    const partFiles: { id: string; name: string; stem: string; midi: string }[] = [];
    for (const [i, track] of tracks.entries()) {
      checkAbort(signal); await yieldToUI();
      const stem = `${String(i + 1).padStart(2, '0')}-${filename(track.name)}`;
      const part = { ...ctx, selectedTrackIds: [track.id] };
      entries.push({ name: `export/midi/${stem}.mid`, data: midiBytes(part) });
      const wav = await audio(part, 'wav', frac => progress?.((i + frac) / tracks.length * 0.95), signal, true);
      entries.push({ name: `export/stems/${stem}.wav`, data: new Uint8Array(await wav.arrayBuffer()) });
      partFiles.push({ id: track.id, name: track.name, stem: `stems/${stem}.wav`, midi: `midi/${stem}.mid` });
    }
    const engine = format === 'logic' ? 'Logic Pro' : format === 'garageband' ? 'GarageBand' : 'Ableton Live';
    const instruction = format === 'logic' ? 'Open song.mid as a new Logic Pro project to import the tempo map and separate instrument tracks. Drag WAV stems into audio tracks at the start of the project.' : format === 'garageband' ? 'Drag song.mid into the Tracks area of a new GarageBand project, or import the individual MIDI parts. Set project tempo to the first tempo in manifest.json. For section tempo changes, add tempo automation manually; aligned WAV stems preserve the rendered timing.' : 'Drag song.mid into Arrangement View to split its type-1 tracks, or import individual MIDI parts. Set the tempo and recreate section tempo changes from manifest.json. Drag WAV stems to arrangement time zero and disable Warp to preserve timing.';
    entries.push({ name: 'export/README.txt', data: utf8(`${ctx.song.title} — ${engine} import bundle\n\n${instruction}\n\nAll WAV stems start at time zero and share the same duration (including tail). Stems contain instrument volume/pan but omit bus/master processing; leave track faders at unity initially. Stems use 32-bit float WAV to preserve headroom without clipping. These are portable import assets, not native DAW project files.\n\nMIDI uses General MIDI approximations. Pitch bends are channel-wide: overlapping bent notes may differ from the original. Non-GM percussion and physical techniques require instrument remapping. Exact frequencies and per-note expression are preserved in performance.json. Notation is quantized and technique text may require editorial engraving; TAB uses standard tuning and suggested positions. Import MusicXML into a score editor to print sheet music or save a PDF.\n`) });
    entries.push({ name: 'export/manifest.json', data: utf8(JSON.stringify({ version: 1, target: engine, sampleRate: 44100, bitDepth: 32, encoding: 'IEEE float', startSeconds: 0, durationSeconds: Math.max(1, ctx.performance.duration + (ctx.performance.tail || 3)), timeSignature: ctx.song.timeSignature, bars: ctx.performance.bars, parts: partFiles }, null, 2)) });
    checkAbort(signal); data = zipBytes(entries); type = 'application/zip'; extension = `${format}.zip`;
  }
  checkAbort(signal); progress?.(1);
  return { blob: new Blob([data], { type }), name: `${base}${format === 'tablature' ? '-tab' : ''}.${extension}` };
}
export function downloadExport(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = name; a.rel = 'noopener'; a.style.display = 'none';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
export type { ExportContext } from './model';
