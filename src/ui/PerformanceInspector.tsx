import { useEffect, useMemo, useRef, useState } from 'react';
import { Sheet } from './Sheet';
import type { Sheet as SongSheet } from '../engine/sheet/sheet';
import { compileSongPipeline } from '../engine/pipeline/compileSong';
import { NotationPartiture } from './NotationPartiture';
import { beatFraction, beatValue, formatBeat, scoreNoteSegments } from '../engine/score/musicianScore';
import { exportMusicXml, scorePitch, scoreTuningCents } from '../engine/score/musicXml';
import { INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../engine/lookup/instruments';
import { PATTERNS_BY_ID } from '../data/genres';
import { resolveTrackSound } from '../engine/playback/trackSound';
import { getInstrumentModule } from '../engine/playback/instrumentRegistry';
import { SongPlayer } from '../engine/playback/songPlayer';
import { preparedAudioStats } from '../engine/cache/preparedAudio';

const pitchName = (midi: number) => scorePitch(midi).name;
const number = (value: number) => Number(value.toFixed(3));

/** Written musical decisions, before expressive timing and instrument rendering. */
export function PerformanceInspector({ song, onClose }: { song: SongSheet; onClose: () => void }) {
  const pipeline = useMemo(() => compileSongPipeline(song), [song]);
  const score = pipeline.interpretation;
  const [layer, setLayer] = useState<'notation' | 'interpretation' | 'sound' | 'mix'>('notation');
  const segments = useMemo(() => scoreNoteSegments(score), [score]);
  const [status, setStatus] = useState('Choose the ensemble or an instrument to audition.');
  const audition = useRef<SongPlayer | null>(null);
  useEffect(() => {
    const player = new SongPlayer(state => setStatus(state.error ??
      (state.status === 'rendering' || state.status === 'starting' ? `Preparing audio · ${Math.round(state.progress*100)}%` : state.status)), () => {});
    audition.current = player;
    return () => { player.dispose(); audition.current = null; };
  }, []);
  useEffect(() => { audition.current?.configure(song); }, [song]);
  const play = (trackId?: string) => {
    const player = audition.current;
    if (!player) return;
    player.pause();
    player.configure({ ...song, tracks: song.tracks.map(track => ({ ...track, muted: false, solo: trackId === track.id })) });
    player.locate(0);
    void player.play().catch(error => setStatus(String(error)));
  };
  const download = (format: 'json' | 'musicxml') => {
    const content = format === 'json' ? JSON.stringify({ notation: pipeline.notation, interpretation: score, transitions: pipeline.trace.transitions, sound: pipeline.sound.cells, mix: pipeline.mix }, null, 2) : exportMusicXml(score);
    const url = URL.createObjectURL(new Blob([content], { type: format === 'json' ? 'application/json' : 'application/vnd.recordare.musicxml+xml' }));
    const link = document.createElement('a'); link.href = url; link.download = `${song.styleId ?? song.worldId}-complete-score.${format}`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <Sheet open onClose={onClose} title="Complete score" kicker={`${song.worldId} · ${song.styleId ?? ''}`}>
    <div className="text-sm leading-relaxed" id="performance-inspector">
      <p>{score.meter} · {song.bpm} BPM · {score.bars.length} bars · {score.notes.length} notes · {number(score.duration)} seconds · Concert pitch</p>
      <div className="flex flex-wrap gap-2 my-3">
        <button className="btn-pill" onClick={() => play()}>Play ensemble</button>
        <button className="btn-pill" onClick={() => audition.current?.pause()}>Pause</button>
        <button className="btn-pill" onClick={() => download('musicxml')}>Download MusicXML</button>
        <button className="btn-pill" onClick={() => download('json')}>Download score JSON</button>
      </div>
      <p role="status" className="text-xs mb-4">{status}</p>
      <p className="text-xs mb-4">Audio is prepared after edits. Play, pause and seek use the prepared mix. Cached instrument audio: {number(preparedAudioStats().bytes/1024/1024)} MB.</p>
      <div className="flex flex-wrap gap-2 my-3" role="tablist" aria-label="Music engine layers">{(['notation','interpretation','sound','mix'] as const).map((item,index) => <button key={item} role="tab" aria-selected={layer === item} className="btn-pill" onClick={() => setLayer(item)}>{index+1}. {item === 'notation' ? 'Written notation' : item === 'interpretation' ? 'Band interpretation' : item === 'sound' ? 'Instrument physics' : 'Audio mix'}</button>)}</div>
      <p className="text-xs mb-4">Exact quarter-note fractions preserve written rhythms. Improvisation and chord instructions are resolved by the band. These are original study arrangements.</p>
      {layer === 'mix' ? <div>{pipeline.mix.scenes.map((scene,index) => <details key={index} className="my-3"><summary>{scene.sectionId} · beats {scene.startBeat}–{scene.endBeat} · {scene.styleId}</summary><pre className="text-xs whitespace-pre-wrap">{JSON.stringify({ foreground: scene.foregroundTrackIds, tracks: scene.tracks, masking: scene.masking, mix: scene.resolvedMix.trace }, null, 2)}</pre></details>)}</div> : song.tracks.map((track, partIndex) => {
        const instrument = INSTRUMENTS_BY_ID[track.instrumentId ?? ''];
        const notes = score.notes.filter(note => note.trackId === track.id);
        const percussion = score.parts.find(part => part.id === track.id)?.percussion;
        if (!instrument) return null;
        const params = resolveTrackSound(instrument.id, song.worldId, song.styleId, track.role);
        return <details key={track.id} open={partIndex === 0} className="border-t py-3" style={{ borderColor: 'color-mix(in srgb,var(--ink) 20%,transparent)' }}>
          <summary className="cursor-pointer font-semibold">{instrument.name} · {track.role} · {notes.length} notes</summary>
          <button className="btn-pill my-2" onClick={() => play(track.id)}>Play {instrument.name} alone</button>
          <p className="text-xs">{instrument.acousticProfile && <>Range {pitchName(instrument.acousticProfile.low)}–{pitchName(instrument.acousticProfile.high)} · </>}Techniques: {genreTechniquesForInstrument(instrument.id, song.styleId ?? song.worldId).join(', ')}</p>
          <p className="text-xs">{notes.filter(note => note.source.pitch === 'written').length} pitches resolved from written patterns · {notes.filter(note => note.source.pitch === 'composed').length} composed pitches</p>
          <details className="text-xs my-2"><summary className="cursor-pointer">Instrument sound setup</summary><pre className="whitespace-pre-wrap break-all">{JSON.stringify({ synthesis: getInstrumentModule(instrument.id).id, acoustic: instrument.acousticProfile,
            mechanism: instrument.luthierPhysics, tuning: instrument.tuningAndMechanics, articulations: instrument.performanceArticulations,
            resolvedSound: params }, null, 2)}</pre></details>
          {song.regions.map((region, regionIndex) => <details key={region.id} open={regionIndex === 0} className="my-3">
            <summary className="cursor-pointer">{region.kind} · bars {region.start + 1}–{region.end}</summary>
            {layer === 'notation' ? <NotationPartiture cell={pipeline.notation.sections[regionIndex].cells[track.id]} chords={pipeline.notation.sections[regionIndex].chords} beats={score.bars[region.start].beatsPerBar}/>
              : layer === 'sound' ? <details open><summary>Prepared mechanics and sound controls</summary><pre className="text-xs whitespace-pre-wrap break-all">{JSON.stringify(pipeline.sound.cells.find(cell => cell.trackId === track.id && cell.sectionId === region.id), null, 2)}</pre></details>
              : score.bars.filter(bar => bar.regionId === region.id).map(bar => {
              const barSegments = segments.filter(segment => segment.note.trackId === track.id && segment.bar === bar.index);
              const rests = score.rests.filter(rest => rest.trackId === track.id && rest.bar === bar.index);
              const rows = [...barSegments.map(segment => ({ position: segment.position, segment, rest: undefined })),
                ...rests.map(rest => ({ position: beatValue(rest.position), rest, segment: undefined }))].sort((a, b) => a.position - b.position);
              const measure = song.measures[bar.index];
              const patternId = measure.patternByTrack?.[track.id] ?? song.arrangement[region.id]?.[track.id];
              const pattern = PATTERNS_BY_ID[patternId ?? ''];
              return <div key={bar.index} className="my-3">
                <p className="font-semibold text-xs">Bar {bar.index + 1} · {measure.chord || 'no chord'} · {pattern?.name ?? (patternId === 'silent' ? 'Silent' : 'No pattern')}</p>
                <div className="overflow-x-auto"><table aria-label={`${instrument.name}, bar ${bar.index + 1}, written score`} className="w-full text-xs text-left tabular-nums">
                  <thead><tr><th>Beat</th><th>Pitch / rest</th><th>Length</th><th>Technique</th><th>Velocity</th><th>Expression</th><th>Pitch source</th></tr></thead>
                  <tbody>{rows.map(({ position, segment, rest }, i) => {
                    if (rest) return <tr key={`rest-${i}`} className="opacity-60"><td>{formatBeat(beatFraction(position + 1))}</td><td>Rest</td><td>{formatBeat(rest.duration)}</td><td colSpan={4}>—</td></tr>;
                    const note = segment!.note, cents = scoreTuningCents(note.midi, note.frequencyHz);
                    return <tr key={`${note.id}-${bar.index}`}><td>{formatBeat(beatFraction(position + 1))}</td>
                      <td>{percussion ? note.playback.percussion?.name ?? `Hit ${note.midi}` : scorePitch(note.midi, bar.chord).name}{!percussion && <span className="opacity-60"> · {number(note.frequencyHz)} Hz{Math.abs(cents) > .05 ? ` (${number(cents)}¢)` : ''}</span>}{segment!.tieIn ? ' · tied in' : ''}{segment!.tieOut ? ' · tie →' : ''}</td>
                      <td>{formatBeat(beatFraction(segment!.duration))}</td><td>{note.technique}</td><td>{note.velocity}</td>
                      <td>{number(note.expression.offsetSeconds * 1000)} ms · {number(note.expression.gateRatio)}× gate</td><td>{note.source.pitch}{note.source.derived ? ' · fill' : ''}</td></tr>;
                  })}</tbody>
                </table></div>
              </div>;
            })}
          </details>)}
        </details>;
      })}
      <details className="my-4 text-xs"><summary>Part transitions and preparation identities</summary><pre className="whitespace-pre-wrap break-all">{JSON.stringify(pipeline.trace, null, 2)}</pre></details>
    </div>
  </Sheet>;
}
