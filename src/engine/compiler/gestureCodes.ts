export const GESTURE_CODES: Record<string, number> = {};
export const GESTURE_NAMES: Record<number, string> = {};

function register(id: string): void {
  if (GESTURE_CODES[id] !== undefined) return;
  const base = Array.from(id).reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
  const code = 1000 + (base % 50000);
  GESTURE_CODES[id] = code;
  GESTURE_NAMES[code] = id;
}

for (const id of [
  'tone','accent','staccato','legato','ghost','open','mute','slap','pizzicato','arco',
  'marcato','arrastre','strappata','lija','tambor','chicharra','heel','toe','quinto-slap',
  'conga-open','tumba-open','rasgueado','golpe','fall','doit','shake','tremolo','vibrato',
  'hammer','pluck','bow','tongue','sustain','chapa','cluster','bubble','tenuto','fingerstyle',
  'flatpick','slur','spiccato','detache','portato','yumba','campana','pesada','octave-stabs',
  'bellows-slap','golpe-caja','legato_squeeze'
]) register(id);
