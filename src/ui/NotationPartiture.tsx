import { beatFraction, beatValue, formatBeat } from '../engine/score/musicianScore';
import type { NotationCell, WrittenPitch } from '../engine/score/notatedScore';
import { scorePitch } from '../engine/score/musicXml';

const pitch = (value: WrittenPitch, chord: string) => value.kind === 'drum' ? value.drum.name
  : value.kind === 'instruction' ? `${value.instruction} (${chord})`
    : value.value.midi !== undefined ? (Array.isArray(value.value.midi) ? value.value.midi : [value.value.midi]).map(m => scorePitch(m, chord).name).join(' + ')
      : value.value.voicing === 'chord' ? `Voice ${chord}` : `Degree ${value.value.degree ?? 1}${value.value.semitoneOffset !== undefined ? ` · ${value.value.semitoneOffset} semitones from root` : ''}${value.value.register !== undefined ? ` · root register ${value.value.register}` : ''}`;

/** Kit components have distinct lanes and noteheads; simultaneous strikes
 * stay simultaneous. Exact durations and rests are readable in the table. */
function DrumPartiture({ cell, beats }: { cell: NotationCell; beats: number }) {
  const drums = [...new Map(cell.bars.flatMap(bar => bar.attacks.flatMap(a => a.pitch.kind === 'drum' ? [[a.pitch.drum.componentId, a.pitch.drum] as const] : []))).values()];
  const width = Math.max(720, cell.bars.length * 110), height = drums.length * 30 + 42, left = 145, usable = width-left-10;
  return <div className="overflow-x-auto my-3"><svg role="img" aria-label="Drum partiture by kit component" viewBox={`0 0 ${width} ${height}`} style={{ minWidth: width, width: '100%', height }}>
    <title>Drum partiture by kit component; exact beat positions</title>
    {drums.map((drum, index) => <g key={drum.componentId}><text x="0" y={38+index*30} fill="currentColor" fontSize="11">{drum.name}</text><line x1={left} x2={width} y1={34+index*30} y2={34+index*30} stroke="currentColor" opacity=".25"/></g>)}
    {cell.bars.map(bar => <g key={bar.bar}>
      <text x={left+usable*bar.bar/cell.bars.length+3} y="13" fill="currentColor" fontSize="10">{bar.bar+1}</text>
      <line x1={left+usable*bar.bar/cell.bars.length} x2={left+usable*bar.bar/cell.bars.length} y1="18" y2={height} stroke="currentColor" opacity=".25"/>
      {bar.attacks.map((attack,index) => {
        if (attack.pitch.kind !== 'drum') return null;
        const drum = attack.pitch.drum, lane = drums.findIndex(d => d.componentId === drum.componentId), x = left+usable*(bar.bar+beatValue(attack.position)/beats)/cell.bars.length+4, y = 34+lane*30;
        return <g key={index}><title>{drum.name}: beat {formatBeat(beatFraction(beatValue(attack.position)+1))}, {formatBeat(attack.duration)} beats</title>{drum.notehead === 'x' ? <path d={`M${x-3},${y-3}l6,6m0,-6l-6,6`} stroke="currentColor"/> : <circle cx={x} cy={y} r="3" fill="currentColor"/>}</g>;
      })}
    </g>)}
  </svg></div>;
}

export function NotationPartiture({ cell, chords, beats }: { cell: NotationCell; chords: string[]; beats: number }) {
  return <div className="my-3 text-xs" data-notation-section={cell.sectionId}>
    <p>{cell.rules.clef} clef · {cell.rules.staffLines} staff lines · Views: {cell.rules.views.join(', ')}</p>
    {!!cell.rules.vocabulary.length && <p>Playing vocabulary: {cell.rules.vocabulary.join(', ')}</p>}
    {!!cell.openStrings?.length && <p>Open strings: {cell.openStrings.map(s => `${s.name} (${scorePitch(s.midi).name})`).join(', ')}. String and fret directions appear when written.</p>}
    {cell.rules.views.includes('drum-lanes') && <DrumPartiture cell={cell} beats={beats}/>}
    {cell.bars.map(bar => <div key={bar.bar} className="my-3"><p className="font-semibold">Bar {bar.bar+1} · {chords[bar.bar]} · {bar.patternName}{bar.variation ? ` · ${bar.variation} variation` : ''}</p>
      <div className="overflow-x-auto"><table aria-label={`First-pass notation bar ${bar.bar+1}`} className="w-full text-left tabular-nums"><thead><tr><th>Beat</th><th>Notes / instruction</th><th>Length</th><th>Technique / fingering</th></tr></thead><tbody>
        {[...bar.attacks.map(attack => ({ position: beatValue(attack.position), attack, rest: undefined })), ...bar.rests.map(rest => ({ position: beatValue(rest.position), rest, attack: undefined }))].sort((a,b) => a.position-b.position).map(({ position, attack, rest }, index) => <tr key={index}>
          <td>{formatBeat(beatFraction(position+1))}</td><td>{attack ? pitch(attack.pitch, chords[bar.bar]) : 'Rest'}</td><td>{formatBeat(attack?.duration ?? rest!.duration)}</td>
          <td>{attack && [attack.technique, attack.notation?.string ? `string ${attack.notation.string}` : '', attack.notation?.fret !== undefined ? `fret ${attack.notation.fret}` : '', attack.notation?.stroke ? `${attack.notation.stroke} stroke` : '', attack.notation?.fingering, attack.notation?.ornament, attack.notation?.tieToNext ? 'tie to next' : ''].filter(Boolean).join(' · ') || '—'}</td>
        </tr>)}
      </tbody></table></div>
    </div>)}
  </div>;
}
