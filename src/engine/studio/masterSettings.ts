import type { MixCharacter } from '../style/contracts';
import { contractForGenre } from '../style/contracts';
import { resolveStyle } from '../style';
import { ELECTRONIC_MIX_PATTERN, SALSA_GENRE_PATTERN, TANGO_PATTERN,
  ELECTRONIC_MASTER_SIDECHAIN_DEPTH, SALSA_MASTER_ROOM_DEPTH, TANGO_MASTER_SIDECHAIN_DEPTH } from '../../data/sound/playback/genreMix';
import { DEFAULT_STYLE_MASTER_PROFILE, MASTER_GLUE_PROFILES, MASTER_MIX_DEFAULTS } from '../../data/sound/mix/masterProfiles';

const clamp = (x: number, low: number, high: number) => Math.max(low, Math.min(high, x));

/** Both graph construction and live updates consume the same complete settings. */
export function resolveMasterSettings(char?: MixCharacter, context = '') {
  const bass = char?.bassForward ?? MASTER_MIX_DEFAULTS.bassForward;
  const dry = char?.dryness ?? MASTER_MIX_DEFAULTS.dryness;
  const ratio = char?.compressionRatio ?? MASTER_GLUE_PROFILES.gentle.ratio;
  const salsa = SALSA_GENRE_PATTERN.test(context);
  const glue = salsa ? { ...MASTER_GLUE_PROFILES.salsa }
    : ratio <= 2 ? { ...MASTER_GLUE_PROFILES.gentle, ratio: Math.max(1.1, ratio) }
      : { ...MASTER_GLUE_PROFILES.punchy, ratio, attack: Math.max(0.003, 0.03 * (1 - (char?.transientSnap ?? 0.3))) };
  return {
    lowDb: (bass - 0.5) * 4,
    presenceDb: (dry - 0.5) * 3,
    airDb: ((char?.brightness ?? MASTER_MIX_DEFAULTS.brightness) - 0.5) * 5,
    roomDepth: salsa ? SALSA_MASTER_ROOM_DEPTH : (1 - dry) * MASTER_MIX_DEFAULTS.roomScale,
    springReverbMix: char?.reverbType === 'spring' ? clamp((1 - dry) * 0.38, 0.04, 0.32) : 0,
    delaySend: clamp(char?.delaySend ?? 0, 0, 0.8),
    delayTimeSeconds: clamp(char?.delayTimeSeconds ?? 0.32, 0.04, 1.5),
    delayFeedback: clamp(char?.delayFeedback ?? 0.28, 0, 0.82),
    delayToneHz: clamp(char?.delayToneHz ?? 4200, 500, 12000),
    duckDepth: char?.sidechainDucking !== undefined ? clamp(char.sidechainDucking * .45, 0, .45) : ELECTRONIC_MIX_PATTERN.test(context) ? ELECTRONIC_MASTER_SIDECHAIN_DEPTH
      : TANGO_PATTERN.test(context) ? TANGO_MASTER_SIDECHAIN_DEPTH
        : clamp((char?.sidechainDucking ?? 0.12) * 0.45, 0.08, 0.45),
    drumKnock: clamp((bass - 0.3) * 1.2, 0.05, 0.85),
    saturationType: char?.saturationType ?? 'tape',
    widthGain: clamp(0.2 + (char?.width ?? MASTER_MIX_DEFAULTS.width) * 1.6, 0, 1.8),
    glue,
  };
}

/** Resolve the style overrides and master pocket/lift once for live and export. */
export function resolvePlaybackMix(worldId = '', styleId = '') {
  let mixCharacter = worldId ? contractForGenre(worldId).timbreSpace.mixCharacter : undefined;
  let masterProfile = { ...DEFAULT_STYLE_MASTER_PROFILE };
  if (worldId && styleId) {
    const resolved = resolveStyle({ genreId: worldId, styleId });
    mixCharacter = resolved.contract.timbreSpace.mixCharacter ?? mixCharacter;
    masterProfile = { pocket: resolved.sound.masterProfile?.pocket ?? DEFAULT_STYLE_MASTER_PROFILE.pocket, lift: resolved.sound.masterProfile?.lift ?? DEFAULT_STYLE_MASTER_PROFILE.lift };
  }
  if (mixCharacter) mixCharacter = {
    ...mixCharacter,
    dryness: clamp(mixCharacter.dryness + (masterProfile.pocket - 0.5) * 0.18, 0, 1),
    transientSnap: clamp((mixCharacter.transientSnap ?? 0.3) + (masterProfile.lift - 0.5) * 0.18, 0, 1),
  };
  return { mixCharacter, masterProfile, context: `${worldId} ${styleId}` };
}

export function ensembleHeadroom(trackCount: number, lift = 0.5) {
  return Math.min(1, MASTER_MIX_DEFAULTS.headroomNumerator / Math.sqrt(Math.max(1, trackCount)) * (0.94 + lift * 0.12));
}
