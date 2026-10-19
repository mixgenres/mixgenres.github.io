import { INSTRUMENTS_BY_ID } from '../../instruments';
import type { AuthoredCell, GenrePackInput } from './genrePack';

export type CatalogSupportSpec = {
  instrumentId: string;
  role: string;
};

const labelFor = (instrumentId: string) => instrumentId.split('-').map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');

function supportCells(styleName: string, spec: CatalogSupportSpec, sourceCells: readonly AuthoredCell[]): AuthoredCell[] {
  const instrument = INSTRUMENTS_BY_ID[spec.instrumentId];
  const label = labelFor(spec.instrumentId);
  // Texture and harmony are both pitched support jobs. All other roles must
  // have a written source in this exact style; an absent part is not a reason
  // to invent a stock backbeat or turn a melody into a percussion pattern.
  const sourceRoles = spec.role === 'texture' ? ['texture', 'harmony'] : [spec.role];
  const sources = sourceCells.filter(cell => sourceRoles.includes(cell.role)
    && cell.onsets.length && !cell.phraseEnd
    && !cell.instruments?.includes(spec.instrumentId))
    .sort((a, b) => {
      const affinity = (cell: AuthoredCell) => (cell.role === spec.role ? 2 : 0)
        + Number(cell.instruments?.some(id => INSTRUMENTS_BY_ID[id]?.family === instrument?.family));
      return affinity(b) - affinity(a);
    });
  if (!sources.length) return [];
  // A second section or phrase is meaningful development. A duplicate of the
  // same written source is a practice alias, not a new arrangement variation.
  const source = sources[0];
  const different = sources.slice(1).find(cell => JSON.stringify([
    cell.onsets, cell.durations, cell.pitches, cell.hits, cell.accents, cell.microtiming,
  ]) !== JSON.stringify([
    source.onsets, source.durations, source.pitches, source.hits, source.accents, source.microtiming,
  ]));
  return [source, ...(different ? [different] : [])].map((cell, index) => {
    const pitches = spec.role === 'percussion' ? undefined : cell.pitches?.map(pitch => {
      if (!pitch || instrument?.voicing !== 'single') return pitch ? { ...pitch } : pitch;
      // A flute or horn can follow the written contour, but cannot inherit
      // a keyboard chord. Keep absolute source pitches when one is written.
      const midi = Array.isArray(pitch.midi) ? Math.max(...pitch.midi) : pitch.midi;
      return { ...pitch, ...(midi !== undefined ? { midi } : {}), voicing: 'single' as const };
    });
    const notations = cell.notations?.map(notation => {
      if (!notation) return notation;
      // Frets, strings and bow directions belong to the original player.
      // Tuplets, grace-note identity and ties belong to the musical phrase.
      const { tuplet, grace, tieToNext } = notation;
      return { ...(tuplet ? { tuplet: { ...tuplet } } : {}),
        ...(grace !== undefined ? { grace } : {}), ...(tieToNext !== undefined ? { tieToNext } : {}) };
    });
    return {
      ...cell,
      name: `${styleName} ${label} support ${index ? 'reply' : 'pocket'}`,
      shortName: `${label} ${index ? 'reply' : 'pocket'}`,
      role: spec.role, instruments: [spec.instrumentId],
      onsets: [...cell.onsets], durations: cell.durations ? [...cell.durations] : undefined,
      accents: cell.accents ? [...cell.accents] : undefined,
      velocities: cell.velocities ? [...cell.velocities] : undefined,
      probabilities: cell.probabilities ? [...cell.probabilities] : undefined,
      microtiming: cell.microtiming ? [...cell.microtiming] : undefined,
      articulations: cell.articulations ? [...cell.articulations] : undefined,
      hits: spec.role === 'percussion' && cell.hits ? [...cell.hits] : undefined,
      pitches, notations,
      arrangementVariation: index === 1 && !!different,
      description: `Play the ${styleName} ${cell.shortName ?? cell.name} phrase on ${label}. Keep its written rhythm, dynamics and spaces; this is an optional teaching adaptation.`,
    };
  });
}

/** Adapt written, local role phrases for optional teaching players. No neutral
 * rhythm is inserted when a style has not authored that musical job. */
export function addCatalogSupportCells(
  pack: GenrePackInput,
  specs: readonly CatalogSupportSpec[],
): GenrePackInput {
  return {
    ...pack,
    styles: pack.styles.map(style => {
      const existing = new Set(style.cells.flatMap(cell =>
        (cell.instruments ?? []).map(instrumentId => `${instrumentId}:${cell.role}`)));
      const additions = specs
        .filter(spec => !existing.has(`${spec.instrumentId}:${spec.role}`))
        .flatMap(spec => supportCells(style.name, spec, style.cells));
      if (!additions.length) return style;
      const instrumentTechniques = { ...style.instrumentTechniques };
      const instrumentDialects = { ...style.instrumentDialects };
      for (const spec of specs) {
        if (existing.has(`${spec.instrumentId}:${spec.role}`)
          || !additions.some(cell => cell.instruments?.includes(spec.instrumentId) && cell.role === spec.role)) continue;
        instrumentTechniques[spec.instrumentId] ??= spec.role === 'percussion'
          ? ['staccato', 'accent', 'ghost', 'open']
          : ['staccato', 'legato', 'accent', 'tenuto'];
        instrumentDialects[`${spec.instrumentId}:${spec.role}`] ??= {
          allowedTechniques: instrumentTechniques[spec.instrumentId],
          defaultTechnique: 'staccato',
        };
      }
      return {
        ...style,
        cells: [...style.cells, ...additions],
        patterns: [...new Set([...style.patterns, ...additions.map(cell => cell.name)])],
        instrumentTechniques,
        instrumentDialects,
      };
    }),
  };
}
