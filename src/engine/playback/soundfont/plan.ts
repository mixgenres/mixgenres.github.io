import { SAMPLE_RELEASES } from './bankIdentity';
import type { Performance, PerfNote } from '../../band/performanceData';
import type { Mp3RenderOptions } from '../mp3Export';
import { INSTRUMENTS_BY_ID } from '../../lookup/instruments';
import { resolveTrackSound } from '../trackSound';
import { resolveSampleGesture } from './gestures';
import { patchForInstrument, NYLON_PATCH, STEEL_PATCH, SAMPLED_KIT_KEYS, type BankId, type SamplePatch } from './presets';
import { SOUNDFONT_RELEASE_RESERVE } from './release';
import { PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_PATCHES, recordedPercussionKey } from './percussion';

export { SOUNDFONT_RELEASE_RESERVE as SAMPLE_RELEASE_RESERVE } from './release';

export type SampleEvent =
  | { time: number; type: 'on'; channel: number; key: number; velocity: number; patch: SamplePatch; gain: number; cents: number }
  | { time: number; type: 'off'; channel: number; key: number }
  | { time: number; type: 'bend'; channel: number; key: number; cents: number }
  | { time: number; type: 'cc'; channels: number[]; cc: number; value: number };
export interface SampleTrack { id: string; instrumentId: string; gain: number; channels: number[]; pan: number }
export interface SamplePlan { tracks: SampleTrack[]; events: SampleEvent[]; banks: BankId[]; duration: number; channels: number; origin: number }
const pitch = (note: PerfNote) => note.frequencyHz !== undefined
  ? 1200 * Math.log2(note.frequencyHz / (440 * 2 ** ((note.midi - 69) / 12))) : note.tuningCents ?? 0;

/** This consumes compiled musician decisions. Strums/rolls/ornaments are already
 * separate score events; adding another burst here would double their rhythm. */
export function compileSamplePlan(performance: Performance, options: Mp3RenderOptions): SamplePlan {
  const trackIds = options.selectedTrackIds ?? [...options.trackInstruments.keys()];
  const events: SampleEvent[] = [], banks = new Set<BankId>();
  const tracks: SampleTrack[] = [];
  let channels = 1;
  let soundingEnd=Math.max(.1,performance.duration+(performance.tail??0));
  trackIds.forEach((id, index) => {
    const instrumentId = options.trackInstruments.get(id) ?? performance.trackInfo?.[id]?.instrumentId ?? id;
    const def = INSTRUMENTS_BY_ID[instrumentId];
    if (!def) throw new Error(`Unknown sampled instrument: ${instrumentId}`);
    const params = resolveTrackSound(instrumentId, options.worldId ?? performance.worldId, options.styleId, options.trackRoles?.get(id));
    const percussion = instrumentId !== 'timpani' && (!!def.kit || !!def.drum || def.voicing === 'unpitched');
    const base = patchForInstrument(instrumentId, percussion);
    const contextSounds = new Map<string, ReturnType<typeof resolveTrackSound>>();
    const soundFor = (worldId: string, styleId: string, role?: string) => {
      const key = `${worldId}\0${styleId}\0${role ?? ''}`;
      let sound = contextSounds.get(key);
      if (!sound) { sound = resolveTrackSound(instrumentId, worldId, styleId, role); contextSounds.set(key, sound); }
      return sound;
    };
    const occupied: Array<Map<number,number>> = [];
    const track: SampleTrack = { id, instrumentId, gain: params.roleGain ?? .7, channels: [], pan: params.pan };
    const pedal=performance.ccs.filter(cc=>cc.trackId===id&&cc.cc===64).sort((a,b)=>a.time-b.time);
    const notes = performance.notes.filter(note => note.trackId === id).sort((a,b) => a.time-b.time || a.midi-b.midi);
    const hasReleaseController = performance.ccs.some(cc => cc.trackId === id && cc.cc === 72);
    // Hi-hat exclusivity is channel-local in SF2. Reserve one hat channel so
    // a closed/pedal hit chokes an open hat even while its release is ringing.
    const hatChannel = !!def.kit && instrumentId !== 'timpani' && notes.some(note=>[42,44,46].includes(Math.round(note.midi)));
    if(hatChannel)occupied.push(new Map());
    for (const note of notes) {
      if (!Number.isFinite(note.time + note.dur + note.vel + note.midi) || note.dur <= 0) throw new Error('Invalid sample note timing or velocity.');
      const gesture = resolveSampleGesture(instrumentId, note.gestureCode, note.vel, note.pitchIdentity);
      const action = gesture.action;
      const context = note.soundContext;
      const sound = context && (context.worldId !== (options.worldId ?? performance.worldId ?? '')
        || context.styleId !== (options.styleId ?? '') || context.role !== (options.trackRoles?.get(id) ?? performance.trackInfo?.[id]?.role))
        ? soundFor(context.worldId, context.styleId, context.role)
        : params;
      let patch = base;
      let key = Math.max(0, Math.min(127, Math.round(note.midi)));
      if(instrumentId==='bandoneon')patch={...patch,bank:note.bellowsDirectionCode===2?74:73,pack:'bandoneon'};
      if(instrumentId==='upright-bass') {
        const arco=/bow|arco|arrastre|lija/.test(action);
        patch={bank:64,program:(arco?4:0)+stableTake(note)%(arco?2:4),drum:false,pack:'upright'};
      }
      const world = note.soundContext?.worldId ?? options.worldId ?? performance.worldId ?? '';
      const guitar = /^(guitar|requinto|resonator-guitar|bajo-sexto)$/.test(instrumentId);
      if (guitar) {
        const electric = sound.bodyConstruction === 'solid-electric' || /electric|distort|overdrive/.test(sound.variantId ?? '');
        if (electric) patch = /archtop/.test(sound.variantId??'') ? patchForProgram(26,'guitars') : {bank:sound.drive>.4?71:69,program:stableTake(note)%3,drum:false,pack:sound.drive>.4?'electricDrive':'electricClean'};
        else patch = sound.variantId==='nylon' || sound.variantId!=='steel-acoustic'&&(/flamenco|tango|bossa|samba|bolero|fado|latin|son|rumba/.test(world) || instrumentId === 'requinto') ? NYLON_PATCH : STEEL_PATCH;
        if (/mute|palm|apagado|seco|choke|chapa/.test(action) || sound.mute > .5) {
          patch = electric ? patch.pack==='guitars'?patchForProgram(28,'guitars'):{...patch,bank:patch.bank+1} : { ...patch, bank: 65 };
        }
        if (/harmonic|flageolet/.test(action)) patch = patch.pack==='nylon' ? {...NYLON_PATCH,bank:66} : patchForProgram(31, 'guitars');
      }
      if (def.family === 'bowed' && /pluck|pizz/.test(action)) patch = patchForProgram(45, 'strings');
      if (instrumentId === 'trumpet' && /mute/.test(action)) patch = patchForProgram(59, 'brass');
      if (instrumentId === 'bass' && /slap|pop/.test(action)) patch = patchForProgram(36, 'guitars');
      else if(instrumentId==='bass'&&/fretless/.test(sound.variantId??''))patch=patchForProgram(35,'guitars');
      else if(instrumentId==='bass'&&/pick/.test(sound.excitationType??''))patch={bank:64,program:34,drum:false,pack:'bass'};
      if(instrumentId==='organ'&&/pipe|church/.test(sound.variantId??''))patch=patchForProgram(19,'keys');
      if (instrumentId==='synth'||instrumentId==='sampler'||instrumentId==='synth-bass') {
        const name=sound.synthPatchId??sound.synthPatch?.id??'';
        if(/sub|bass|acid/.test(name))patch=patchForProgram(38,'guitars');
        else if(/square/.test(name))patch=patchForProgram(80,'electronic');
        else if(/noise/.test(name))patch=patchForProgram(121,'electronic');
        else if(/halo/.test(name))patch=patchForProgram(89,'electronic');
        else if(/pad|drone/.test(name))patch=patchForProgram(88,'electronic');
        else if(/strings/.test(name))patch=patchForProgram(49,'strings');
        else if(/brass/.test(name))patch=patchForProgram(61,'brass');
      }
      // Compiled body contacts on pitched instruments must not turn back into
      // string/wind notes. Scraped contacts use a friction approximation.
      if (instrumentId !== 'timpani' && !percussion && gesture.pitchIdentity === 'unpitched') {
        patch = /scrap|chicharra|friction/.test(action)
          ? {bank:0,program:0,drum:true,pack:'percussion'}
          : { bank: 66, program: 0, drum: false, pack: 'percussion' };
        key=patch.drum?73:/golpe|tap|tambor|strike|hit/.test(action)?37:36;
      }
      // Kit score pitches already identify individual GM components. Applying
      // the three-contact mapping here turns kicks/snares/hats into toms.
      if (percussion && def.drum && !def.kit) {
        const canonical=RECORDED_PERCUSSION_ALIASES[instrumentId]??instrumentId;
        const recorded=RECORDED_PERCUSSION_PATCHES[canonical];
        if(recorded) {
          patch={bank:66,program:recorded.program+stableTake(note)%recorded.takes,drum:false,pack:'percussion'};
          key=recordedPercussionKey(instrumentId,note.midi,def.drum,action);
        } else key=percussionKey(instrumentId, note.midi, def.drum, action);
      }
      if(instrumentId==='palmas') {patch={bank:66,program:1,drum:false,pack:'percussion'};key=38+stableTake(note)%3;}
      if(instrumentId==='cajon') {patch={bank:66,program:0,drum:false,pack:'percussion'};key=/slap|rim|tip/.test(action)?37:key===36?35:36;}
      if(def.kit && instrumentId !== 'timpani') {
        if(key===42&&action==='open')key=46;
        if(key===38&&/rimshot/.test(action))key=40;
        if((SAMPLED_KIT_KEYS as readonly number[]).includes(key))patch={bank:/choke/.test(action)?68:67,program:stableTake(note)%3,drum:false,pack:'drumkit'};
      }
      banks.add(patch.pack);
      const hat = hatChannel && [42,44,46].includes(key);
      let lane = hat ? 0 : occupied.findIndex((keys,lane) => (!hatChannel||lane>0) && (keys.get(key) ?? -Infinity) <= note.time);
      if (lane < 0) lane = occupied.length;
      // Independent channels isolate simultaneous bends/tuning, same-key note
      // ownership and instrument changes through release tails.
      const channel = index + lane * Math.max(1, trackIds.length);
      occupied[lane] ??= new Map();
      const end=note.time+note.dur;
      const down=pedal.filter(cc=>cc.time<=end).at(-1)?.value ?? 0;
      const pedalEnd=down>=64 ? pedal.find(cc=>cc.time>end&&cc.value<64)?.time ?? performance.duration : end;
      const releaseEnd=Math.max(end,pedalEnd)+(hasReleaseController ? SOUNDFONT_RELEASE_RESERVE
        : SAMPLE_RELEASES[`${patch.bank}:${patch.program}:${patch.drum}`] ?? SOUNDFONT_RELEASE_RESERVE);
      occupied[lane].set(key,releaseEnd);soundingEnd=Math.max(soundingEnd,releaseEnd);
      if (!track.channels.includes(channel)) track.channels.push(channel);
      channels = Math.max(channels, channel + 1);
      const shortened = /staccato|spiccato|seco|choke|chapa/.test(action);
      const hold = shortened ? Math.min(note.dur, .12) : note.dur;
      const cents = patch.drum ? 0 : pitch(note);
      if (!Number.isFinite(cents)) throw new Error('Invalid sampled note tuning.');
      events.push({ time: note.time, type: 'on', channel, key, velocity: gesture.velocity,
        patch, gain: track.gain, cents });
      events.push({ time: note.time + hold, type: 'off', channel, key });
      for (const bend of note.pitchBend ?? []) if (bend.offset >= 0 && bend.offset < hold) {
        events.push({ time: note.time + bend.offset, type: 'bend', channel, key, cents: cents + (bend.value-8192)/8192*200 });
      }
      if (/fall|doit|slide|arrastre/.test(action) && !note.pitchBend?.length && !patch.drum) {
        const direction = /fall/.test(action) ? -1 : 1;
        for (let point=0;point<=12;point++) events.push({ time: note.time+hold*(.65+.34*point/12), type:'bend', channel, key, cents:cents+direction*200*point/12 });
      }
      if (/vibrato|shake/.test(action) && !note.pitchBend?.length && !patch.drum) {
        for (let t=.12;t<hold;t+=.025) events.push({ time:note.time+t,type:'bend',channel,key,cents:cents+Math.sin(t*Math.PI*10)*(/shake/.test(action)?65:18) });
      }
    }
    for (const cc of performance.ccs.filter(cc => cc.trackId === id)) {
      // Physical custom CCs must not accidentally become unrelated GM controls.
      const mapped = cc.cc === 18 ? 74 : cc.cc === 24 ? 11 : cc.cc;
      if (![1,7,10,11,64,66,67,71,72,73,74].includes(mapped)) continue;
      events.push({ time:cc.time,type:'cc',channels:track.channels,cc:mapped,value:Math.max(0,Math.min(127,cc.cc===18?127-cc.value:cc.value)) });
    }
    tracks.push(track);
  });
  if (channels > 2048) throw new Error('This score exceeds the sample channel budget. Reduce overlapping sustained notes.');
  const order = { cc: 0, off: 1, on: 2, bend: 3 };
  events.sort((a,b)=>a.time-b.time || order[a.type]-order[b.type]);
  const origin = performance.notes.reduce((from,n)=>trackIds.includes(n.trackId)?Math.min(from,n.time):from,0);
  for (const event of events) event.time -= origin;
  return { tracks, events, banks:[...banks], duration:soundingEnd-origin, channels, origin };
}

function patchForProgram(program: number, pack: BankId): SamplePatch { return { bank:0, program, drum:false, pack }; }
function percussionKey(id: string, midi: number, source: {low:number;mid:number;high:number}, action: string) {
  const keys = PERCUSSION_SAMPLE_KEYS[id];
  if (!keys) throw new Error(`No explicit SoundFont rhythm mapping for ${id}`);
  if (id==='congas') return /slap|mute|heel/.test(action) ? 62 : /tumba/.test(action) ? 64 : 63;
  return keys[midi===source.low ? 0 : midi===source.high ? 2 : 1];
}

function stableTake(note:PerfNote) {return Array.from(note.attackId ?? note.notationEventId ?? `${note.time}:${note.bar}`).reduce((hash,c)=>Math.imul(hash^c.charCodeAt(0),16777619)>>>0,2166136261);}
