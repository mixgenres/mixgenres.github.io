import assert from 'node:assert/strict';
import { makeSheet, setSectionSolo, duplicateSection, removeVoice, rebuild, getResolvedSectionStyle } from '../src/engine/sheet/sheet';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { soloistAtBar, supportsSolo } from '../src/engine/sheet/solo';
import { GENRE_SOLO_DEFINITIONS } from '../src/data/performance/soloDefinitions';

const base = makeSheet('flamenco');
assert.ok(base.energies, 'generated sheet includes per-region energy settings');
const region = base.regions[1];
const guitar = base.tracks.find(t => t.instrumentId === 'guitar')!;
const secondLead = base.tracks.find(t => t.instrumentId === 'voice')!;
const palmas = base.tracks.find(t => t.instrumentId === 'palmas')!;
assert.ok(guitar && secondLead && palmas);
const inPart = (bar: number) => bar >= region.start && bar < region.end;

const alone = setSectionSolo(base, region.id, { trackIds: [guitar.id], mode: 'unaccompanied' });
const alonePerf = arrangeBand(alone);
const aloneNotes = alonePerf.notes.filter(n => inPart(n.bar));
assert.ok(aloneNotes.length);
assert.ok(aloneNotes.every(n => n.trackId === guitar.id), 'unaccompanied means no backing notes');
assert.ok(alonePerf.notes.some(n => !inPart(n.bar) && n.trackId === secondLead.id), 'backing returns outside the assigned part');
assert.deepEqual(alone.energies, base.energies, 'solo behavior does not overwrite authored energy');

const backed = setSectionSolo(base, region.id, { trackIds: [guitar.id], mode: 'genre' });
const backedNotes = arrangeBand(backed).notes.filter(n => inPart(n.bar));
assert.ok(backedNotes.some(n => n.trackId === guitar.id));
assert.ok(backedNotes.some(n => n.trackId === palmas.id), 'falseta keeps compás support');
assert.ok(backedNotes.every(n => n.trackId !== secondLead.id), 'the explicit rhythm-only policy rests other melodic lines');
assert.equal(backed.arrangementContext?.[region.id].energyByTrack[palmas.id], base.energies![region.id][palmas.id] - 1);

const trading = setSectionSolo(base, region.id, { trackIds: [guitar.id, secondLead.id], mode: 'trading' });
const tradingPerf = arrangeBand(trading);
const plan = trading.arrangementContext![region.id].solo!;
for (const note of tradingPerf.notes.filter(n => inPart(n.bar) && plan.trackIds.includes(n.trackId))) {
  assert.ok(soloistAtBar(plan, region, note.bar, getResolvedSectionStyle(trading, region).contract.cycleLength).includes(note.trackId), 'only the active trading player attacks');
  const boundary = tradingPerf.bars[region.start + 4].start;
  if (note.trackId === guitar.id && note.bar < region.start + 4) {
    assert.ok(note.time + note.dur <= boundary + 0.009, 'sustain ends at the handoff');
  }
}
assert.ok(tradingPerf.notes.some(n => inPart(n.bar) && n.trackId === guitar.id));
assert.ok(tradingPerf.notes.some(n => inPart(n.bar) && n.trackId === secondLead.id));

const renamed = { ...trading, regions: trading.regions.map(r => ({ ...r, name: 'renamed', formLabel: 'renamed', kind: 'renamed' })) };
assert.deepEqual(arrangeBand(renamed).notes, tradingPerf.notes, 'display/form names do not select solos');

const inactive = rebuild({ ...alone, tracks: alone.tracks.map(t => t.id === guitar.id ? { ...t, muted: true } : t) });
assert.equal(inactive.arrangementContext?.[region.id].solo, undefined);
assert.ok(arrangeBand(inactive).notes.some(n => inPart(n.bar) && n.trackId === secondLead.id), 'muting the only soloist does not silence the whole band');
const silent = rebuild({ ...alone, arrangement: { ...alone.arrangement, [region.id]: { ...alone.arrangement[region.id], [guitar.id]: 'silent' } } });
assert.equal(silent.arrangementContext?.[region.id].solo, undefined);

const copied = duplicateSection(trading, region.id);
assert.deepEqual(copied.sheet.regions.find(r => r.id === copied.newRegionId)?.solo, region.solo ?? trading.regions.find(r => r.id === region.id)?.solo);
assert.deepEqual(removeVoice(trading, guitar.id).regions.find(r => r.id === region.id)?.solo?.trackIds, [secondLead.id]);

const custom = makeSheet({ genreId: 'flamenco', overrides: { arrangement: { soloDefinition: GENRE_SOLO_DEFINITIONS.salsa } } });
// The salida is deliberately guitar alone. Exercise an ensemble override in
// the letra, where accompaniment is authored, rather than inventing an intro part.
const customRegion = custom.regions[1];
const customSolo = setSectionSolo(custom, customRegion.id, { trackIds: [guitar.id], mode: 'genre' });
assert.equal(customSolo.arrangementContext?.[customRegion.id].solo?.policy.accompaniment, 'ensemble', 'style overrides may replace genre solo definitions');
assert.ok(arrangeBand(customSolo).notes.some(n => n.bar >= customRegion.start && n.bar < customRegion.end && n.trackId === secondLead.id));

console.log('Solo performance checks passed: genre coverage, accompaniment, trading, names, energy, inactive players, lifecycle and style overrides.');

const drumTrading = { trackIds: ['horn', 'drum'], trackRoles: { horn: 'lead', drum: 'percussion' }, mode: 'trading' as const, policy: GENRE_SOLO_DEFINITIONS.jazz.modes.trading };
const backing = { ...makeSheet('jazz').tracks[0], id: 'piano', role: 'harmony' };
assert.equal(supportsSolo(drumTrading, backing, ['horn']), true);
assert.equal(supportsSolo(drumTrading, backing, ['drum']), false, 'backing rests during a jazz drum trade');

const alegrias = makeSheet({ genreId: 'flamenco', styleId: 'flamenco-alegrias' });
assert.equal(getResolvedSectionStyle(alegrias, alegrias.regions[0]).melody.scaleMode, 'major');
assert.equal(getResolvedSectionStyle(base, base.regions[0]).melody.scaleMode.toLowerCase(), 'phrygian');
