/** Explicit harmonic plans for the detailed recording arrangements.
 * Chords are score reductions; drone labels are pitch anchors, not Western
 * progressions imposed on modal, percussion-only or free-meter traditions.
 */
export const RECORDING_HARMONIES: Record<string, Record<string, string[]>> = Object.fromEntries(`
tango::golden-age|_=Am,Dm,E7,Am;B=C,F,G7,C;variacion=Am,Dm,E7,Am,E7,Am
tango::troilo|_=Am,Dm,E7,Am;B=C,F,G7,C;variacion=Am,Dm,E7,Am,E7,Am
tango::canyengue|_=G,C,D7,G;trio=C,G7,C,C
tango::guardia-nueva-de-caro|_=Gm,Cm,D7,Gm;B=Bb,Eb,F7,Bb;trio=Eb,Cm,D7,Gm
tango::canaro|_=Fm,Bbm,C7,Fm;B=Ab,Db,Eb7,Ab;verse=Fm,Db,C7,Fm
tango::d-arienzo|_=Gm,Cm,D7,Gm;B=Bb,Eb,F7,Bb;trio=G,C,D7,G
tango::di-sarli|_=Dm,Gm,A7,Dm;B=F,Bb,C7,F
tango::pugliese|_=Gm,Cm,D7,Gm;B=Eb,Bb,F7,Bb;variacion=Gm,Eb,D7,Gm
tango::salgan|_=Dm,Gm,A7,Dm;B=Fmaj7,Bb7,Em7b5,A7b9;solo=Dm9,Gm9,A7b9,Dm9
tango::tango-cancion|_=A,D,E7,A;chorus=A,F#7,Bm,E7;interlude=D,B7,E7,A
tango::milonga|_=Am,Dm,E7,Am;B=C,G7,C,E7
tango::vals|_=Am,Dm,E7,Am;B=C,F,G7,C
tango::electrotango-gotan|_=Am,Dm,E7,Am;B=C,G,Am,E7
tango::electro-rock-bajofondo|_=Dm,Bb,C,Dm;chorus=Dm,F,C,Bb
rock::classic-rock|intro=E,A,E,A;verse=E,A,E,A;chorus=E,F#m,A,B;solo=E,A,E,A;outro=E,F#m,A,B
rock::alternative|_=C,Ab,Eb,F;verse=Am,G,F,C;chorus=C,Ab,Eb,F;bridge=Em,C,G,B7;solo=C,Ab,Eb,F
rock::progressive|_=Em,C,D,Em;B=Am,C,G,D;bridge=Em,D,C,B7;solo=Em,G,A,Em
rock::indie|_=C,F,G,C;chorus=F,G,C,Am;solo=C,F,G,C
rock::shoegaze|_=D,F#m,E,B;B=A,E,B,D;bridge=D,D,A,A
rock::post-rock|_=D5,A5,D5,D5;build=D,G,D,A;climax=D,Bm,G,A;evolution=F#m,D,A,E
metal::heavy-metal|_=B5,D5,E5,G5,F#5,E5;bridge=E5,D5,B5,B5;solo=B5,A5,G5,F#5
metal::thrash|_=E5,F5,E5,D5;prechorus=E5,D5,C5,B5;chorus=E5,G5,A5,E5;bridge=Em,C,Am,B7;solo=Em,C,Am,B7;build=E5,F#5,G5,A5
punk::punk|_=A5,D5,E5,A5;chorus=D5,A5,E5,A5
punk::hardcore|_=A5,G5,D5,A5;chorus=D5,E5,A5,A5
punk::post-hardcore|_=F#5,D5,E5,F#5;bridge=B5,D5,E5,F#5
pop::power-pop|_=D,G,A,D;chorus=G,A,D,Bm;solo=D,G,A,D
hip-hop::boom-bap|_=Dm7,Dm7,Gm7,Dm7
hip-hop::golden-age|_=C,Am,F,G
r-and-b::alternative-r-b|_=Fm,Ab,Eb,Bb;B=Ebmaj7,Cm7,Abmaj7,Bb;solo=Ebmaj7,Cm7,Abmaj7,Bb
r-and-b::southern-soul|_=G,Em,C,D7;bridge=C,Cm,G,E7;chorus=G,Em,C,D7
funk::james-brown-the-one|_=Dm7,Dm7,Dm7,Dm7;B=G7,G7,C7,C7
jazz::hard-bop|_=Fm7,Bbm7,C7,Fm7;head=Fm7,Fm7,Fm7,Fm7,Bbm7,Bbm7,Fm7,Fm7,C7,Bbm7,Fm7,C7;solo=Fm7,Fm7,Fm7,Fm7,Bbm7,Bbm7,Fm7,Fm7,C7,Bbm7,Fm7,C7
jazz::post-bop|_=Cm7,Cm7,Cm7,Cm7,Fm7,Fm7,Cm7,Cm7,F#7,F7,Cm7,Cm7
salsa::salsa-dura|_=Bb,Eb,F7,Bb;montuno=Bb,F7,Bb,F7;coro=Bb,F7,Bb,F7
salsa::salsa-jazz|_=Cm7,Fm7,G7,Cm7;solo=Cm9,F13,Bbmaj7,Ebmaj7,Am7b5,D7b9,Gm7,G7
reggaeton::classic|_=Fm,Db,Eb,Fm
reggaeton::melodic|_=Dmaj7,Bm7,Em7,A7
bachata::moderna|_=E,B,A,B
reggae::dub|_=Dm,Gm,Dm,A7
afrobeat::classic-afrobeat|_=Fm7,Fm7,Eb7,Fm7
afrobeat::funk-heavy-afrobeat|_=Dm7,Dm7,Dm7,Dm7
mbalax::sabar-heavy|_=D5,D5,D5,D5
qawwali::contemporary-fusion|_=D5,D5,D5,D5
cinematic::hybrid|_=Dm,Dm,Bb,Dm
cinematic::ambient-score|_=Cm7,Fm7,Cm7,Gm7
ambient::generative-ambient|_=D5,D5,A5,D5
weird::process-generative|_=D5,D5,A5,D5
indian-classical::instrumental-gat|_=D5,D5,D5,D5
indian-classical::dhrupad|_=D5,D5,D5,D5
gamelan::javanese|_=D5,D5,D5,D5
`.trim().split('\n').map(line => {
  const [key, cells] = line.split('|');
  return [key, parseHarmonicCells(cells)];
}));

export function parseHarmonicCells(cells: string): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const cell of cells.split(';')) {
    const [kind, chordText, extra] = cell.split('=');
    const chords = chordText?.split(',');
    if (!kind || extra !== undefined || !chords?.length || chords.some(chord => !chord.trim()) || Object.hasOwn(result, kind)) {
      throw new Error(`Invalid recording harmony: ${cell}`);
    }
    result[kind] = chords;
  }
  return result;
}
