export const GESTURE_CODES: Record<string, number> = {};
export const GESTURE_NAMES: Record<number, string> = {};

export function codeForGesture(id: string): number {
  const existing = GESTURE_CODES[id];
  if (existing !== undefined) return existing;
  const base = Array.from(id).reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
  const code = 1000 + (base % 50000);
  const collision = GESTURE_NAMES[code];
  if (collision !== undefined && collision !== id) {
    throw new Error(`Gesture code collision: ${JSON.stringify(id)} and ${JSON.stringify(collision)} both resolve to ${code}`);
  }
  GESTURE_CODES[id] = code;
  GESTURE_NAMES[code] = id;
  return code;
}

/** Each worker has its own module registry. Restore only names carried by the
 * compiled score, verifying the stable code before playback or score export. */
export function registerGestureNames(names?: Record<number, string>): void {
  for (const [rawCode, name] of Object.entries(names ?? {})) {
    const code = Number(rawCode);
    if (!Number.isInteger(code) || typeof name !== 'string' || !name.trim()
      || GESTURE_NAMES[code] !== undefined && GESTURE_NAMES[code] !== name
      || codeForGesture(name) !== code) throw new Error(`Invalid compiled gesture identity: ${rawCode}`);
    GESTURE_NAMES[code] = name;
  }
}

for (const id of [
  'tone','accent','staccato','legato','ghost','open','mute','slap','pizzicato','arco',
  'marcato','arrastre','strappata','lija','tambor','chicharra','heel','toe','quinto-slap',
  'conga-open','tumba-open','rasgueado','golpe','fall','doit','shake','tremolo','vibrato',
  'hammer','pluck','bow','tongue','sustain','chapa','cluster','bubble','tenuto','fingerstyle',
  'flatpick','slur','spiccato','detache','portato','yumba','campana','pesada','octave-stabs',
  'bellows-slap','golpe-caja','legato_squeeze'
]) codeForGesture(id);
