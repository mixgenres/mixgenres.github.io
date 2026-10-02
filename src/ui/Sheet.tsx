import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pencil } from 'lucide-react';

/** Everything that isn't the song happens on a sheet that slides over it. */
export function Sheet({
  open, onClose, title, kicker, onTitleChange, onStartEditingTitle, children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  kicker?: string;
  onTitleChange?: (newTitle: string) => void;
  onStartEditingTitle?: () => void;
  children: React.ReactNode;
}) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  useEffect(() => {
    if (!open) setIsEditingTitle(false);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} aria-label="Close"
            className="fixed inset-0 z-40"
            style={{ background: 'color-mix(in srgb, var(--ink) 35%, transparent)' }}
          />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 420, damping: 38 }}
            className="fixed inset-x-0 bottom-0 z-50 flex flex-col mx-auto max-w-[580px] w-full"
            style={{ background: 'var(--tone)', maxHeight: '86vh' }}
          >
            <div style={{ height: 4, background: 'var(--signal)' }} />
            <div className="flex items-end justify-between px-6 sm:px-7 pt-4 pb-3">
              <div className="min-w-0 flex-1 mr-3">
                {kicker && <div className="micro">{kicker}</div>}
                {onTitleChange ? (
                  isEditingTitle ? (
                    <input
                      autoFocus
                      className="slab truncate bg-transparent outline-none"
                      style={{ fontSize: 22, lineHeight: 1.1, borderBottom: '1px solid var(--ink)', width: '100%', minWidth: 50 }}
                      value={title}
                      onChange={e => onTitleChange(e.target.value)}
                      onBlur={() => setIsEditingTitle(false)}
                      onKeyDown={e => e.key === 'Enter' && setIsEditingTitle(false)}
                    />
                  ) : (
                    <div
                      className="slab truncate cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
                      style={{ fontSize: 22, lineHeight: 1.1 }}
                      onClick={() => {
                        onStartEditingTitle?.();
                        setIsEditingTitle(true);
                      }}
                      title="Click to rename"
                    >
                      <span className="truncate">{title}</span>
                      <Pencil size={15} strokeWidth={2} style={{ opacity: 0.45, flexShrink: 0 }} />
                    </div>
                  )
                ) : (
                  <div className="slab" style={{ fontSize: 22, lineHeight: 1.1 }}>{title}</div>
                )}
              </div>
              <button onClick={onClose} className="slab shrink-0" style={{ fontSize: 20, opacity: 0.6 }} aria-label="Close">×</button>
            </div>
            <div className="overflow-y-auto hide-scrollbar px-6 sm:px-7 pb-10">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * A note. The theory lives here and nowhere else — a mark you can turn over,
 * not a paragraph sitting on the page waiting to be skipped.
 */
export function NoteCard({
  open, onClose, title, body, tags,
}: {
  open: boolean; onClose: () => void; title: string; body: string; tags?: string[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} aria-label="Close note"
            className="fixed inset-0"
            style={{ background: 'color-mix(in srgb, var(--ink) 30%, transparent)' }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 6 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            onClick={onClose}
            className="relative z-10 w-full max-w-[min(20rem,88vw)] px-5 py-4 cursor-pointer"
            style={{
              background: 'var(--ground)',
              boxShadow: '6px 7px 0 0 color-mix(in srgb, var(--ink) 80%, transparent)',
            }}
          >
            <div className="slab" style={{ fontSize: 18, lineHeight: 1.15 }}>{title}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.5, marginTop: 8, opacity: 0.82 }}>{body}</p>
            {!!tags?.length && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {tags.map(t => <span key={t} className="micro">{t}</span>)}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/** The footnote mark itself. */
export function NoteMark({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Read the note"
      className="align-super"
      style={{ fontSize: 11, opacity: 0.5, padding: '0 3px', fontFamily: 'var(--slab)' }}
    >
      °
    </button>
  );
}

type ChipProps = React.ComponentPropsWithoutRef<'button'> & { active?: boolean; muted?: boolean };

export function Chip({ children, onClick, active = false, muted = false, className = '', ...rest }: ChipProps) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`cursor-pointer select-none transition-colors ${className}`}
      style={{
        fontSize: 12.5,
        fontWeight: 500,
        padding: '6px 12px',
        lineHeight: 1.25,
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--ground)' : 'var(--ink)',
        boxShadow: active ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 25%, transparent)',
        opacity: muted ? 0.4 : 1,
        whiteSpace: 'nowrap',
        borderRadius: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </button>
  );
}
