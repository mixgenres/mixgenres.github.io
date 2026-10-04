import { useEffect, useMemo, useState } from 'react';
import { Sheet, NoteCard } from './Sheet';
import { getStylesForGenre } from '../engine/style/registry';
import type { SongStyle } from '../data/styles/schema';
import { genreIdsForCategory } from '../data/genreCategories';
import { plateFor } from './worlds';

/**
 * Song style — the flavour of the current genre (Pugliese-school, Vals, Electrotango…).
 *
 * Song length is intentionally controlled at the app level. This panel only
 * changes style, so choosing a style cannot accidentally imply a particular
 * recording or switch between sample/full modes.
 */
export function StyleSheetModal({
  open,
  onClose,
  currentGenreId,
  currentStyleId,
  onPickStyle,
}: {
  open: boolean;
  onClose: () => void;
  currentGenreId: string;
  currentStyleId?: string;
  onPickStyle: (styleId: string) => void;
}) {
  const [note, setNote] = useState<{ title: string; body: string; tags: string[] } | null>(null);

  useEffect(() => {
    if (!open) setNote(null);
  }, [open]);

  const plate = plateFor(currentGenreId);

  // The genre's usual style leads; the rest keep the catalogue's own order.
  const styles = useMemo(() => {
    const all = genreIdsForCategory(currentGenreId).flatMap(getStylesForGenre);
    return [...all.filter(s => s.canonical), ...all.filter(s => !s.canonical)];
  }, [currentGenreId]);

  const openNote = (s: SongStyle) => {
    const tempo = s.rhythm?.tempoRange ? `${s.rhythm.tempoRange[0]}–${s.rhythm.tempoRange[1]} bpm` : null;
    const reference = s.reference
      ? `${s.reference.credit}${s.reference.recording ? ` — ${s.reference.recording}` : ''}`
      : null;
    const parts = (s.arrangement?.ensemble ?? []).flatMap(part => part.instrumentIds.map(id => `${part.role}: ${id}`));
    const mix = s.calibration?.mix?.character;
    const mixSummary = mix ? [
      (mix.dryness ?? 0.5) >= 0.68 ? 'dry room' : (mix.dryness ?? 0.5) <= 0.4 ? 'roomy ambience' : 'moderate room',
      (mix.bassForward ?? 0.5) >= 0.68 ? 'bass-forward' : (mix.bassForward ?? 0.5) <= 0.4 ? 'lighter low end' : 'balanced low end',
      (mix.width ?? 0.5) >= 0.68 ? 'wide stereo' : (mix.width ?? 0.5) <= 0.4 ? 'compact stereo' : 'natural stereo width',
      (mix.brightness ?? 0.5) >= 0.68 ? 'bright transients' : (mix.brightness ?? 0.5) <= 0.4 ? 'warm/dark tone' : 'balanced tone',
    ].join(' · ') : null;
    setNote({
      title: s.name,
      body: [
        reference ? `Reference: ${reference}` : null,
        s.calibrationQualities?.length ? `Sonic cues: ${s.calibrationQualities.join('; ')}` : s.summary,
        parts.length ? `Ensemble parts: ${parts.join('; ')}` : null,
        mixSummary ? `Mix: ${mixSummary}` : null,
      ].filter((line): line is string => !!line).join('\n\n'),
      tags: [s.rhythm?.meter, tempo, s.region].filter((t): t is string => !!t),
    });
  };

  return (
    <>
      <Sheet open={open} onClose={onClose} title="Song style" kicker={plate.short}>
        {styles.length === 0 && (
          <div className="micro py-4">No styles for this genre yet.</div>
        )}

        <div className="flex flex-col">
          {styles.map((s, i) => {
            const active = s.id === currentStyleId || (!currentStyleId && !!s.canonical);
            return (
              <div
                key={s.id}
                className="flex items-stretch"
                style={{ borderTop: i === 0 ? 'none' : '1px solid color-mix(in srgb, var(--ink) 12%, transparent)' }}
              >
                <button
                  type="button"
                  onClick={() => { onPickStyle(s.id); onClose(); }}
                  aria-pressed={active}
                  className="text-left py-2.5 flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0"
                >
                  <span
                    style={{
                      width: 4,
                      alignSelf: 'stretch',
                      background: 'var(--signal)',
                      opacity: active ? 1 : 0.45,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <span className="flex items-baseline gap-1.5">
                      <span
                        className="truncate"
                        style={{ fontSize: 14, fontWeight: active ? 600 : 400, lineHeight: 1.2 }}
                      >
                        {s.name}
                      </span>
                      {s.canonical && <span className="micro shrink-0">· usual</span>}
                    </span>
                    <span className="micro block opacity-75 leading-snug line-clamp-2 mt-0.5">
                      {s.summary}
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => openNote(s)}
                  aria-label={`About ${s.name}`}
                  className="slab shrink-0 px-3 opacity-50 hover:opacity-100 transition-opacity"
                  style={{ fontSize: 24 }}
                >
                  °
                </button>
              </div>
            );
          })}
        </div>
      </Sheet>

      <NoteCard
        open={!!note}
        onClose={() => setNote(null)}
        title={note?.title ?? ''}
        body={note?.body ?? ''}
        tags={note?.tags}
      />
    </>
  );
}
