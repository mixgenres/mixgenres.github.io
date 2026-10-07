import React, { useState } from 'react';
import { Sheet as SongSheet } from '../engine/sheet/index.ts';
import { resolveStyle } from '../engine/style/resolve';
import { getCanonicalStyle } from '../engine/style/registry';
import { Copy, Check, X, Terminal } from 'lucide-react';

interface StyleInspectorProps {
  song: SongSheet;
  onClose?: () => void;
}

export function StyleInspector({ song, onClose }: StyleInspectorProps) {
  const [copied, setCopied] = useState(false);
  const [section, setSection] = useState<'overview' | 'harmony' | 'rhythm' | 'sound' | 'form' | 'json'>('overview');

  const resolved = resolveStyle({
    genreId: song.worldId,
    styleId: song.styleId ?? getCanonicalStyle(song.worldId).id,
    influences: song.styleInfluences,
    userOverrides: song.styleOverrides,
  });

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(resolved, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="dev-style-inspector"
      className="fixed bottom-4 right-4 z-50 w-[460px] max-w-[92vw] max-h-[85vh] flex flex-col rounded-lg shadow-2xl overflow-hidden font-sans border text-xs"
      style={{
        background: 'var(--ground, #f7f6f2)',
        color: 'var(--ink, #1a1a1a)',
        borderColor: 'color-mix(in srgb, var(--ink, #1a1a1a) 25%, transparent)',
        boxShadow: '0 12px 36px rgba(0,0,0,0.25)',
      }}
    >
      {/* Header */}
      <div
        className="px-3.5 py-2.5 flex items-center justify-between border-b select-none"
        style={{
          background: 'var(--tone, #ebe7df)',
          borderColor: 'color-mix(in srgb, var(--ink, #1a1a1a) 15%, transparent)',
        }}
      >
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-amber-600 font-bold" />
          <span className="font-mono font-bold tracking-tight">STYLE INSPECTOR</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-800 dark:text-amber-200">
            ?dev=style
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopyJson}
            className="px-2 py-1 rounded flex items-center gap-1 font-mono hover:opacity-80 transition-opacity border"
            style={{ borderColor: 'color-mix(in srgb, var(--ink) 20%, transparent)' }}
            title="Copy Resolved Style JSON"
          >
            {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'JSON'}</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded hover:opacity-75 transition-opacity"
              title="Close inspector"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex border-b px-2 py-1 gap-1 text-[11px]"
        style={{ borderColor: 'color-mix(in srgb, var(--ink) 12%, transparent)' }}
      >
        {(['overview', 'harmony', 'rhythm', 'sound', 'form', 'json'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setSection(tab)}
            className={`px-2.5 py-1 rounded capitalize font-mono transition-colors ${
              section === tab ? 'bg-amber-500/20 font-bold' : 'opacity-65 hover:opacity-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Body */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3 font-mono">
        {section === 'overview' && (
          <div className="space-y-2.5">
            <div className="p-2.5 rounded bg-black/5 dark:bg-white/5 space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm">{resolved.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-600/20 uppercase font-semibold">
                  {resolved.kind}
                </span>
              </div>
              <div className="text-[11px] opacity-75">{resolved.summary}</div>
              <div className="text-[10px] opacity-60">ID: {resolved.id} · Primary Genre: {resolved.primaryGenre}</div>
              {resolved.signatureTraits && resolved.signatureTraits.length > 0 && (
                <div className="text-[10px] pt-1">
                  <span className="font-semibold">Traits: </span>
                  <span className="opacity-80">{resolved.signatureTraits.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Inheritance Trail */}
            <div className="p-2 rounded border border-dashed border-amber-500/30 space-y-1">
              <div className="text-[10px] font-bold opacity-60 uppercase tracking-wider">Resolution Pipeline</div>
              <div className="text-[11px] flex items-center gap-1 flex-wrap">
                <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5">Genre Defaults ({resolved.primaryGenre})</span>
                <span>→</span>
                {resolved.resolvedFrom.extendsChain.map((ext) => (
                  <React.Fragment key={ext}>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/15 font-semibold">{ext}</span>
                    <span>→</span>
                  </React.Fragment>
                ))}
                <span className="px-1.5 py-0.5 rounded bg-amber-500/30 font-bold">{resolved.id}</span>
              </div>
              {resolved.resolvedFrom.appliedInfluences.length > 0 && (
                <div className="mt-1 pt-1 border-t border-black/10 text-[10px]">
                  <span className="font-semibold">Influences Applied: </span>
                  {resolved.resolvedFrom.appliedInfluences.map(inf => `${inf.source.styleId || inf.source.genreId} (${inf.aspects.join('+')}, ${Math.round(inf.weight * 100)}%)`).join(', ')}
                </div>
              )}
            </div>
          </div>
        )}

        {section === 'harmony' && (
          <div className="space-y-2">
            <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
              <div className="font-bold">Harmonic Model: <span className="font-normal uppercase">{resolved.harmony.model}</span></div>
              <div>Mode Policy: <span className="opacity-75">{resolved.harmony.modePolicy}</span></div>
              {resolved.harmony.harmonicRhythm && <div>Harmonic Rhythm: <span className="opacity-75">{resolved.harmony.harmonicRhythm}</span></div>}
              {resolved.harmony.chordVocabulary && (
                <div>Chord Vocabulary: <span className="opacity-75">{resolved.harmony.chordVocabulary.join(', ')}</span></div>
              )}
            </div>

            {resolved.harmony.progressionTemplates && resolved.harmony.progressionTemplates.length > 0 && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Progression Templates</div>
                {resolved.harmony.progressionTemplates.map((p, i) => (
                  <div key={i} className="text-[11px]">
                    <span className="font-semibold">Progression {i + 1} (w:{p.w}): </span>
                    <span className="opacity-80">{p.value.join(' - ')}</span>
                  </div>
                ))}
              </div>
            )}

            {resolved.harmony.sectionProgressions && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Section Specific Progressions</div>
                {Object.entries(resolved.harmony.sectionProgressions).map(([sec, prog]) => (
                  <div key={sec} className="text-[11px]">
                    <span className="font-semibold">{sec}: </span>
                    <span className="opacity-80">{(prog as string[]).join(' - ')}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {section === 'rhythm' && (
          <div className="space-y-2">
            <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
              <div>Default Meter: <span className="font-bold">{resolved.rhythm.meter ?? '4/4'}</span></div>
              <div>Feel: <span className="font-bold">{resolved.rhythm.feel}</span></div>
              <div>Microtiming Feel: <span className="font-bold">{resolved.rhythm.microtimingFeel}</span></div>
              <div>Swing: <span className="font-bold">{Math.round(resolved.rhythm.swingPercentage * 100)}%</span></div>
              <div>Tempo Range: <span className="font-bold">{resolved.rhythm.tempoRange ? `${resolved.rhythm.tempoRange[0]} - ${resolved.rhythm.tempoRange[1]} (default ${resolved.rhythm.defaultBpm})` : `${resolved.rhythm.defaultBpm}`} BPM</span></div>
              <div>Humanize Jitter: <span className="opacity-75">±{resolved.rhythm.humanizeJitterMs}ms</span></div>
            </div>

            {resolved.rhythm.signatureCell && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Signature Cell</div>
                <div className="text-[11px] opacity-85">{resolved.rhythm.signatureCell}</div>
              </div>
            )}
          </div>
        )}

        {section === 'sound' && (
          <div className="space-y-2">
            <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
              <div>Performance Mode: <span className="font-bold">{resolved.contract.performanceMode ?? 'acoustic-ensemble'}</span></div>
              <div>Pocket: <span className="font-bold">{resolved.sound.masterProfile?.pocket ?? 0.5}</span></div>
              <div>Dynamic Lift: <span className="font-bold">{resolved.sound.masterProfile?.lift ?? 0.5}</span></div>
            </div>

            {resolved.calibration?.referenceAudio && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Local Reference Mix</div>
                <div>{resolved.calibration.referenceAudio.recording}</div>
                <div>Source: <span className="opacity-75">{resolved.calibration.referenceAudio.source === 'separated-accompaniment' ? 'voice-removed accompaniment' : 'original mix with vocals; evidence only'}</span></div>
                <div>Measured windows: <span className="opacity-75">{resolved.calibration.referenceAudio.windowsSeconds.map(value => `${value.toFixed(1)}s`).join(', ')}</span></div>
                <div className="opacity-75">RMS {resolved.calibration.referenceAudio.targets.rmsDbfs} dBFS · crest {resolved.calibration.referenceAudio.targets.crestDb} dB · side/mid {resolved.calibration.referenceAudio.targets.sideMidRmsRatio}</div>
                <div className="opacity-60">Spectral mix cues guide this style's balance; separated-audio level is not used as the song's loudness target.</div>
              </div>
            )}

            {resolved.arrangement.ensemble && resolved.arrangement.ensemble.length > 0 && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Ensemble Configuration</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {resolved.arrangement.ensemble.map((inst, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[10px]">
                      {inst.role}: {inst.instrumentIds.join('/')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {resolved.sound.instrumentPalette && resolved.sound.instrumentPalette.length > 0 && (
              <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
                <div className="font-bold text-[10px] uppercase opacity-60">Instrument Palette</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {resolved.sound.instrumentPalette.map((p, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[10px]">
                      {p.value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {section === 'form' && (
          <div className="space-y-2">
            <div className="p-2 rounded bg-black/5 dark:bg-white/5 space-y-1">
              <div className="font-bold text-[10px] uppercase opacity-60">Form Templates</div>
              {resolved.form.templates && resolved.form.templates.length > 0 ? (
                resolved.form.templates.map((tpl, i) => (
                  <div key={i} className="text-[11px]">
                    <span className="font-semibold">Template {i + 1} (w:{tpl.w}): </span>
                    <span className="opacity-80">{tpl.value.map(s => `${s.label} (${s.bars}b)`).join(' → ')}</span>
                  </div>
                ))
              ) : (
                <div className="opacity-60 italic">Using standard genre form architecture</div>
              )}
            </div>
          </div>
        )}

        {section === 'json' && (
          <pre className="p-2 rounded bg-black/5 dark:bg-white/5 text-[10px] overflow-x-auto whitespace-pre leading-relaxed">
            {JSON.stringify(resolved, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
