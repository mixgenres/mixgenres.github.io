/** Dependency-free ZIP (stored entries), standard CRC32 and UTF-8 paths. */
const table = Uint32Array.from({ length: 256 }, (_, n) => { for (let i = 0; i < 8; i++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1; return n >>> 0; });
function crc32(data: Uint8Array) { let crc = 0xffffffff; for (const n of data) crc = table[(crc ^ n) & 255] ^ (crc >>> 8); return (crc ^ 0xffffffff) >>> 0; }
export interface ArchiveEntry { name: string; data: Uint8Array }
export function zipBytes(entries: ArchiveEntry[]): Uint8Array {
  const parts: Uint8Array[] = [], directory: Uint8Array[] = [];
  let offset = 0, directorySize = 0;
  const names = new Set<string>();
  for (const entry of entries) {
    if (names.has(entry.name) || /(^\/|\.\.)/.test(entry.name)) throw new Error('Invalid archive path.');
    names.add(entry.name);
    const name = new TextEncoder().encode(entry.name), size = entry.data.byteLength;
    const local = new Uint8Array(30 + name.length), v = new DataView(local.buffer), crc = crc32(entry.data);
    v.setUint32(0, 0x04034b50, true); v.setUint16(4, 20, true); v.setUint16(6, 0x800, true);
    v.setUint16(12, 33, true); v.setUint32(14, crc, true); v.setUint32(18, size, true); v.setUint32(22, size, true); v.setUint16(26, name.length, true); local.set(name, 30);
    const central = new Uint8Array(46 + name.length), c = new DataView(central.buffer);
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x800, true); c.setUint16(14, 33, true);
    c.setUint32(16, crc, true); c.setUint32(20, size, true); c.setUint32(24, size, true); c.setUint16(28, name.length, true); c.setUint32(42, offset, true); central.set(name, 46);
    parts.push(local, entry.data); directory.push(central); offset += local.length + size; directorySize += central.length;
  }
  if (offset + directorySize > 0xffffffff || entries.length > 65535) throw new Error('Archive exceeds ZIP limits. Export smaller groups.');
  const end = new Uint8Array(22), v = new DataView(end.buffer);
  v.setUint32(0, 0x06054b50, true); v.setUint16(8, entries.length, true); v.setUint16(10, entries.length, true); v.setUint32(12, directorySize, true); v.setUint32(16, offset, true);
  const result = new Uint8Array(offset + directorySize + end.length);
  let cursor = 0;
  for (const part of [...parts, ...directory, end]) { result.set(part, cursor); cursor += part.length; }
  return result;
}
