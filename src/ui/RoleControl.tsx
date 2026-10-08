import { Activity, AudioLines, Layers, Mic, Music2, Drum, Waves, Star, GitBranch, Users, UserRound, Check, Volume2, VolumeX, type LucideIcon } from 'lucide-react';
import type { GenreSoloDefinition, SoloMode } from '../data/styles/schema';

const roles: Array<{ id: string; label: string; icon: LucideIcon; aliases?: string[] }> = [
  { id: 'melody', label: 'Melody', icon: Music2, aliases: ['melodic-guitar', 'violin', 'brass', 'horn-section'] },
  { id: 'lead', label: 'Lead', icon: Star },
  { id: 'harmony', label: 'Harmony', icon: Layers, aliases: ['comp', 'guitar', 'rhythm-guitar', 'rhythmGuitar', 'piano', 'keyboard', 'bandoneon'] },
  { id: 'bass', label: 'Bass', icon: AudioLines },
  { id: 'pulse', label: 'Pulse', icon: Activity, aliases: ['rhythm'] },
  { id: 'percussion', label: 'Percussion', icon: Drum, aliases: ['drums', 'drum-kit', 'drumKit', 'aux-percussion', 'hand-percussion', 'shaker', 'bell'] },
  { id: 'texture', label: 'Texture', icon: Waves, aliases: ['pad'] },
  { id: 'voice', label: 'Voice', icon: Mic },
  { id: 'counterline', label: 'Counterline', icon: GitBranch, aliases: ['fill'] },
];
const soloModes: Array<{ id: SoloMode | 'genre'; label: string; icon: LucideIcon }> = [
  { id: 'genre', label: 'Genre default', icon: Music2 },
  { id: 'accompanied', label: 'Accompanied', icon: Users },
  { id: 'unaccompanied', label: 'Unaccompanied', icon: UserRound },
  { id: 'trading', label: 'Trading phrases', icon: GitBranch },
];

export function RoleIcon({ instrumentName, role, solo, onClick }: {
  instrumentName: string; role: string; solo: boolean; onClick: () => void;
}) {
  const current = roles.find(r => r.id === role || r.aliases?.includes(role));
  const Icon = current?.icon ?? Music2;
  return <button type="button" onClick={onClick} aria-haspopup="dialog"
    aria-label={`Role for ${instrumentName}: ${current?.label ?? role}${solo ? ', solo in this part' : ''}`}
    title={`Change role · ${current?.label ?? role}`}
    className="relative w-7 h-7 flex items-center justify-center shrink-0 cursor-pointer rounded-sm hover:opacity-70"
    style={{ color: 'var(--ink)', background: solo ? 'color-mix(in srgb, var(--ink) 12%, transparent)' : 'transparent' }}>
    <Icon size={15} aria-hidden="true" />
    {solo && <Star size={8} fill="currentColor" className="absolute right-0 top-0" aria-hidden="true" />}
  </button>;
}

export function RoleSettings({ role, onRole, roleScope, onRoleScope, silentInPart, onTogglePartSilence, solo, soloMode, soloistCount, definition, onSolo, onMode }: {
  role: string;
  onRole: (role: string, scope: 'section' | 'song') => void;
  roleScope: 'section' | 'song';
  onRoleScope: (scope: 'section' | 'song') => void;
  silentInPart: boolean;
  onTogglePartSilence: () => void;
  solo: boolean;
  soloMode: SoloMode | 'genre';
  soloistCount: number;
  definition?: GenreSoloDefinition;
  onSolo: () => void;
  onMode: (mode: SoloMode | 'genre') => void;
}) {
  const current = roles.find(r => r.id === role || r.aliases?.includes(role));
  const selectedPolicy = definition?.modes[soloMode === 'genre' ? definition.defaultMode : soloMode];
  return <div className="mb-5" onKeyDown={event => {
    if (['Space', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.stopPropagation();
  }}>
      <p className="text-xs font-semibold mb-2">Instrument role</p>
      <div className="flex gap-1.5 mb-2">
        {(['section', 'song'] as const).map(scope => <button key={scope} type="button"
          aria-pressed={roleScope === scope} onClick={() => onRoleScope(scope)}
          className="px-2.5 py-1 rounded-sm text-[10px] font-semibold cursor-pointer"
          style={{ background: roleScope === scope ? 'var(--ink)' : 'transparent', color: roleScope === scope ? 'var(--ground)' : 'var(--ink)', boxShadow: roleScope === scope ? 'none' : 'inset 0 0 0 1px color-mix(in srgb, var(--ink) 22%, transparent)' }}>
          {scope === 'section' ? 'This part' : 'Whole song'}
        </button>)}
      </div>
      <div className="grid grid-cols-3 gap-1">
        <button type="button" aria-pressed={silentInPart} onClick={onTogglePartSilence}
          aria-label={silentInPart
            ? `Unmute ${roleScope === 'song' ? 'song' : 'this part'}`
            : `Mute ${roleScope === 'song' ? 'song' : 'this part'}`}
          title={silentInPart
            ? `Unmute ${roleScope === 'song' ? 'song' : 'this part'}`
            : `Mute ${roleScope === 'song' ? 'song' : 'this part'}`}
          className="flex flex-col items-center gap-1 p-2 rounded-sm text-[10px] cursor-pointer hover:opacity-70"
          style={{ background: silentInPart ? 'color-mix(in srgb, var(--ink) 12%, transparent)' : 'transparent' }}>
          {silentInPart ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
          {silentInPart ? 'Unmute' : 'Mute'}
        </button>
        {roles.map(r => <button key={r.id} type="button" aria-pressed={current?.id === r.id}
          onClick={() => onRole(r.id, roleScope)}
          className="flex flex-col items-center gap-1 p-2 rounded-sm text-[10px] cursor-pointer hover:opacity-70"
          style={{ background: current?.id === r.id ? 'color-mix(in srgb, var(--ink) 12%, transparent)' : 'transparent' }}>
          <r.icon size={16} aria-hidden="true" />{r.label}
        </button>)}
      </div>
      {definition && <div className="mt-3 pt-2" style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 20%, transparent)' }}>
        <button type="button" onClick={onSolo} aria-pressed={solo} className="flex items-center gap-2 text-xs py-2 w-full cursor-pointer">
          <Star size={14} fill={solo ? 'currentColor' : 'none'} aria-hidden="true" />Solo{solo && <Check size={12} className="ml-auto" />}
        </button>
        {solo && <>
          {soloModes.map(m => <button key={m.id} type="button" onClick={() => onMode(m.id)} aria-pressed={soloMode === m.id}
            className="flex items-center gap-2 text-xs py-2 px-1 w-full cursor-pointer rounded-sm"
            style={{ background: soloMode === m.id ? 'color-mix(in srgb, var(--ink) 12%, transparent)' : 'transparent' }}>
            <m.icon size={13} aria-hidden="true" />{m.label}{soloMode === m.id && <Check size={12} className="ml-auto" />}
          </button>)}
          <p className="text-[11px] leading-relaxed opacity-70 mt-2">{selectedPolicy?.name}: {selectedPolicy?.description}</p>
          {soloMode === 'trading' && soloistCount < 2 && <p className="text-[11px] leading-relaxed opacity-70 mt-2">Select “Solo in this part” on another instrument to trade turns.</p>}
        </>}
      </div>}
  </div>;
}
