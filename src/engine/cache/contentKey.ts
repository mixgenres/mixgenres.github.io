/** Stable content identity for compilation artifacts; UI object identity and
 * insertion order must not decide whether musical work is reused. */
export function contentKey(value: unknown): string {
  const json = JSON.stringify(value, (_key, item) => item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.keys(item).sort().map(key => [key, item[key]])) : item);
  let a = 0x811c9dc5, b = 0x9e3779b9;
  for (let i = 0; i < json.length; i++) { a = Math.imul(a ^ json.charCodeAt(i), 0x01000193); b = Math.imul(b ^ json.charCodeAt(i), 0x27d4eb2d); }
  return `${(a >>> 0).toString(16).padStart(8, '0')}${(b >>> 0).toString(16).padStart(8, '0')}`;
}
