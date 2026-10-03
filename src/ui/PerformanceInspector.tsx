import { useEffect, useMemo, useRef, useState } from 'react';
import { Sheet } from './Sheet';
import type { Sheet as SongSheet } from '../engine/sheet/sheet';
import { compileWholeSong } from '../engine/band/arrangeBand';
import { GESTURE_NAMES } from '../engine/band/gestures';
import { INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../engine/lookup/instruments';
import { PATTERNS_BY_ID } from '../data/genres';
import { resolveTrackSound } from '../engine/playback/trackSound';
import { getInstrumentModule } from '../engine/playback/instrumentRegistry';
import { SongPlayer } from '../engine/playback/songPlayer';

const pitchName = (midi: number) => `${['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B'][Math.round(midi) % 12]}${Math.floor(midi / 12) - 1}`;
const number = (value: number) => Number(value.toFixed(3));

/** The complete compiled score, including quiet bars and actual articulations. */
export function PerformanceInspector({ song, onClose }: { song: SongSheet; onClose: () => void }) {
  const performance = useMemo(() => compileWholeSong(song), [song]);
  const [status, setStatus] = useState('Choose the ensemble or an instrument to audition.');
  const audition = useRef<SongPlayer | null>(null);
  useEffect(() => {
    const player = new SongPlayer(state => setStatus(state.error ?? state.status), () => {});
    audition.current = player;
    return () => { player.dispose(); audition.current = null; };
  }, []);
  const play = (trackId?: string) => {
    const player = audition.current;
    if (!player) return;
    player.pause();
    player.configure({ ...song, tracks: song.tracks.map(track => ({ ...track, muted: false, solo: trackId === track.id })) });
    player.locate(0);
    void player.play().catch(error => setStatus(String(error)));
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({ song, performance }, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `${song.styleId ?? song.worldId}-complete-score.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <Sheet open onClose={onClose} title="Complete score" kicker={`${song.worldId} · ${song.styleId ?? ''}`}>
    <div className="text-sm leading-relaxed" id="performance-inspector">
      <p>{song.timeSignature} · {song.bpm} BPM · {performance.bars.length} bars · {performance.notes.length} notes · {number(performance.duration)} seconds</p>
      <div className="flex flex-wrap gap-2 my-3">
        <button className="btn-pill" onClick={() => play()}>Play ensemble</button>
        <button className="btn-pill" onClick={() => audition.current?.pause()}>Pause</button>
        <button className="btn-pill" onClick={download}>Download full score</button>
      </div>
      <p role="status" className="text-xs mb-4">{status}</p>
      <p className="text-xs mb-4">Every bar is included below. Beat positions and lengths use quarter-note beats; simultaneous pitches form a chord. These are synthesized study arrangements.</p>
      {song.tracks.map(track => {
        const instrument = INSTRUMENTS_BY_ID[track.instrumentId ?? ''];
        const notes = performance.notes.filter(note => note.trackId === track.id);
        if (!instrument) return null;
        const params = resolveTrackSound(instrument.id, song.worldId, song.styleId, track.role);
        return <details key={track.id} className="border-t py-3" style={{ borderColor: 'color-mix(in srgb,var(--ink) 20%,transparent)' }}>
          <summary className="cursor-pointer font-semibold">{instrument.name} · {track.role} · {notes.length} notes</summary>
          <button className="btn-pill my-2" onClick={() => play(track.id)}>Play {instrument.name} alone</button>
          <p className="text-xs">{instrument.acousticProfile && <>Range {pitchName(instrument.acousticProfile.low)}–{pitchName(instrument.acousticProfile.high)} · </>}Techniques: {genreTechniquesForInstrument(instrument.id, song.styleId ?? song.worldId).join(', ')}</p>
          <details className="text-xs my-2"><summary className="cursor-pointer">Instrument sound setup</summary><pre className="whitespace-pre-wrap break-all">{JSON.stringify({ synthesis: getInstrumentModule(instrument.id).id, acoustic: instrument.acousticProfile,
            mechanism: instrument.luthierPhysics, tuning: instrument.tuningAndMechanics, articulations: instrument.performanceArticulations,
            resolvedSound: params }, null, 2)}</pre></details>
          {song.regions.map(region => <details key={region.id} className="my-3">
            <summary className="cursor-pointer">{region.kind} · bars {region.start + 1}–{region.end}</summary>
            {performance.bars.filter(bar => bar.regionId === region.id).map(bar => {
              const barNotes = notes.filter(note => note.bar === bar.index);
              const measure = song.measures[bar.index];
              const patternId = measure.patternByTrack?.[track.id] ?? song.arrangement[region.id]?.[track.id];
              const pattern = PATTERNS_BY_ID[patternId ?? ''];
              return <div key={bar.index} className="my-3">
                <p className="font-semibold text-xs">Bar {bar.index + 1} · {measure.chord || 'no chord'} · {pattern?.name ?? (patternId === 'silent' ? 'Silent' : 'No pattern')}</p>
                {!barNotes.length ? <p className="text-xs opacity-60">Rest for the whole bar</p> : <div className="overflow-x-auto"><table className="w-full text-xs text-left tabular-nums">
                  <thead><tr><th>Beat</th><th>Pitch</th><th>Length</th><th>Technique</th><th>Velocity</th></tr></thead>
                  <tbody>{barNotes.map((note, i) => <tr key={i}><td>{number((note.time - bar.start) * bar.bpm / 60 + 1)}</td><td>{pitchName(note.midi)}</td><td>{number(note.dur * bar.bpm / 60)}</td><td>{GESTURE_NAMES[note.gestureCode] ?? note.gestureCode}</td><td>{note.vel}</td></tr>)}</tbody>
                </table></div>}
              </div>;
            })}
          </details>)}
        </details>;
      })}
    </div>
  </Sheet>;
}
