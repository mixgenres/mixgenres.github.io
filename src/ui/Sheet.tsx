import React, { useState, useEffect, useRef } from 'react';
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
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setIsEditingTitle(false);
      return;
    }

    // The old backdrop was a full-screen button. That meant a click on an
    // underlying control (notably Play) was consumed by the backdrop: the
    // sheet closed, but the control never received the click. Keep the
    // backdrop visual-only and dismiss from document-level outside detection
    // instead. This lets the original pointer event continue to the control
    // underneath, so clicking Play can both dismiss the sheet and start audio.
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!sheetRef.current?.contains(target)) onClose();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            aria-hidden="true"
            className="fixed inset-0 z-40 pointer-events-none"
            style={{ background: 'color-mix(in srgb, var(--ink) 35%, transparent)' }}
          />
          <motion.div
            ref={sheetRef}
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
