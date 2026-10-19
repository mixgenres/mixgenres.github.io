import { SAMPLE_RELEASE_PROFILES } from './bankIdentity';
import type { Performance, PerfNote } from '../../band/performanceData';
import type { Mp3RenderOptions } from '../mp3Export';
import { INSTRUMENTS_BY_ID } from '../../lookup/instruments';
import { resolveTrackSound } from '../trackSound';
import { resolveSampleGesture } from './gestures';
import { codeForGesture } from '../../band/gestures';
import { patchForInstrument, electronicKitPatch, SYNTH_SAMPLE_PROGRAMS, NYLON_PATCH, STEEL_PATCH, SAMPLED_KIT_KEYS, type BankId, type SamplePatch } from './presets';
import { SOUNDFONT_RELEASE_RESERVE } from './release';
import { PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_PATCHES, recordedPercussionKey, recordedPercussionTake } from './percussion';

export { SOUNDFONT_RELEASE_RESERVE as SAMPLE_RELEASE_RESERVE } from './release';

export type SampleEvent =
  | { time: number; type: 'on'; channel: number; key: number; velocity: number; patch: SamplePatch; gain: number; cents: number }
  | { time: number; type: 'off'; channel: number; key: number }
  | { time: number; type: 'bend'; channel: number; key: number; cents: number }
  | { time: number; type: 'cc'; channels: number[]; cc: number; value: number };
export interface SampleTrack { id: string; instrumentId: string; gain: number; channels: number[]; pan: number }
export interface SamplePlan {
  tracks: SampleTrack[];
  events: SampleEvent[];
  banks: BankId[];
  duration: number;
  channels: number;
  origin: number;
  noteLifetimes: Array<{ note: PerfNote; end: number }>;
  /** Expected simultaneous SF2 sample zones; used to size the synth before audio starts. */
  voiceDemand: Array<{ start: number; end: number; patch: SamplePatch; key: number; velocity: number }>;
}
interface KeyReservation { holdEnd: number; soundingEnd: number; cents: number; pitchMotion: boolean; expression?: string }
const pitch = (note: PerfNote) => note.frequencyHz !== undefined
  ? 1200 * Math.log2(note.frequencyHz / (440 * 2 ** ((note.midi - 69) / 12))) : note.tuningCents ?? 0;

/** This consumes compiled musician decisions. Strums/rolls/ornaments are already
 * separate score events; a simultaneous body contact adds only its own sample. */
export function compileSamplePlan(performance: Performance, options: Mp3RenderOptions): SamplePlan {
  const trackIds = options.selectedTrackIds ?? [...options.trackInstruments.keys()];
  const worldId = options.worldId ?? performance.worldId;
  if (trackIds.length && !worldId) throw new Error('Sample playback requires an authored genre context.');
  const events: SampleEvent[] = [], banks = new Set<BankId>();
  const noteLifetimes: SamplePlan['noteLifetimes'] = [];
  const voiceDemand: SamplePlan['voiceDemand'] = [];
  const synthFilterSweeps: Array<{ channel: number; start: number; end: number }> = [];
  const steelVolumeSwells = new Set<string>();
  const tracks: SampleTrack[] = [];
  let channels = 1;
  let soundingEnd=Math.max(.1,performance.duration+(performance.tail??0));
  trackIds.forEach((id, index) => {
    const instrumentId = options.trackInstruments.get(id) ?? performance.trackInfo?.[id]?.instrumentId ?? id;
    const def = INSTRUMENTS_BY_ID[instrumentId];
    if (!def) throw new Error(`Unknown sampled instrument: ${instrumentId}`);
    const trackRole = options.trackRoles?.get(id) ?? performance.trackInfo?.[id]?.role;
    const params = resolveTrackSound(instrumentId, worldId!, options.styleId, trackRole);
    const percussion = instrumentId !== 'timpani' && (!!def.kit || !!def.drum || def.voicing === 'unpitched');
    const base = patchForInstrument(instrumentId, percussion);
    const contextSounds = new Map<string, ReturnType<typeof resolveTrackSound>>();
    const soundFor = (worldId: string, styleId: string, role?: string) => {
      const key = `${worldId}\0${styleId}\0${role ?? ''}`;
      let sound = contextSounds.get(key);
      if (!sound) { sound = resolveTrackSound(instrumentId, worldId, styleId, role); contextSounds.set(key, sound); }
      return sound;
    };
    const occupied: Array<Map<number,KeyReservation[]>> = [];
    const expressiveLanes = new Set<number>();
    const track: SampleTrack = { id, instrumentId, gain: params.roleGain ?? .7, channels: [], pan: params.pan };
    const controls=performance.ccs.filter(cc=>cc.trackId===id).sort((a,b)=>a.time-b.time);
    const pedal=controls.filter(cc=>cc.cc===64);
    // SpessaSynth does not implement CC66. Compile its selective latch into
    // note-offs in the shared plan so live audio, seeking and export agree.
    const sostenuto=controls.filter(cc=>cc.cc===66);
    const captures=sostenuto.filter((cc,i)=>cc.value>=64 && (sostenuto[i-1]?.value ?? 0)<64);
    const physicalEnd=(note:PerfNote)=> {
      const end=note.time+note.dur;
      return captures.filter(cc=>cc.time>note.time && cc.time<end)
        .reduce((held,cc)=>Math.max(held,sostenuto.find(next=>next.time>cc.time&&next.value<64)?.time ?? performance.duration),end);
    };
    const notes = performance.notes.filter(note => note.trackId === id).flatMap(note => {
      if (!note.bodyAttack || note.pitchIdentity === 'unpitched') return [note];
      const technique = note.musicianNotation?.bodyTechnique;
      if (!technique) throw new Error(`Missing simultaneous body technique for ${note.attackId ?? note.trackId}`);
      // A combined string/body stroke owns one extra recorded contact. Keep
      // the pitched voicing intact and route the contact through the same
      // articulation, lifetime and voice-allocation path as a standalone tap.
      const contact: PerfNote = { ...note, bodyAttack: false, pitchIdentity: 'unpitched',
        gestureCode: codeForGesture(technique), attackId: `${note.attackId ?? note.time}:body`,
        midi: 60, frequencyHz: undefined, tuningCents: undefined, pitchBend: undefined, percussion: undefined };
      return [note, contact];
    }).sort((a,b) => a.time-b.time || a.midi-b.midi);
    // Hi-hat exclusivity is channel-local in SF2. Reserve one hat channel so
    // a closed/pedal hit chokes an open hat even while its release is ringing.
    const hatChannel = instrumentId==='sampler' || !!def.kit && instrumentId !== 'timpani' && notes.some(note=>[42,44,46].includes(Math.round(note.midi)));
    if(hatChannel)occupied.push(new Map());
    for (const note of notes) {
      // Do not repair malformed score events at the SoundFont boundary. MIDI
      // key clamping and skipped bends make a bad upstream event sound like a
      // different note or a missing articulation, which is much harder to
      // diagnose than a compile error. Negative times remain valid here: an
      // excerpt can retain the age of an attack that began before its window.
      if (!Number.isFinite(note.time) || !Number.isFinite(note.dur) || note.dur <= 0
        || !Number.isFinite(note.midi) || note.midi < 0 || note.midi > 127
        || !Number.isFinite(note.vel) || note.vel < 1 || note.vel > 127) {
        throw new Error(`Invalid sample note event for ${note.trackId}: time, duration, MIDI key, or velocity is out of range.`);
      }
      for (const bend of note.pitchBend ?? []) {
        if (!Number.isFinite(bend.offset) || bend.offset < 0 || bend.offset >= note.dur
          || !Number.isFinite(bend.value) || bend.value < 0 || bend.value > 16383) {
          throw new Error(`Invalid pitch bend for ${note.trackId}: offset or value is out of range.`);
        }
      }
      const gesture = resolveSampleGesture(instrumentId, note.gestureCode, note.vel, note.pitchIdentity);
      const action = gesture.action;
      const context = note.soundContext;
      const sound = context && (context.worldId !== (worldId ?? '')
        || context.styleId !== (options.styleId ?? '') || context.role !== trackRole)
        ? soundFor(context.worldId, context.styleId, context.role)
        : params;
      let patch = base;
      let key = Math.round(note.midi);
      if(instrumentId==='bandoneon')patch={...patch,bank:note.bellowsDirectionCode===2?74:73,pack:'bandoneon'};
      if(instrumentId==='upright-bass') {
        const arco=/bow|arco|arrastre|lija/.test(action);
        patch={bank:64,program:(arco?4:0)+stableTake(note)%(arco?2:4),drum:false,pack:'upright'};
      }
      const world = note.soundContext?.worldId ?? options.worldId ?? performance.worldId ?? '';
      const soundStyle = note.soundContext?.styleId ?? options.styleId ?? '';
      if (instrumentId === 'violin' && /country|bluegrass|folk|western-swing|old-time/i.test(`${world} ${soundStyle}`)) {
        // Use the source bank's folk-fiddle variation where the arrangement
        // calls for a country/folk fiddle; classical and orchestral violin keep
        // the standard violin patch.
        patch = patchForProgram(110, 'strings');
      }
      const guitar = /^(guitar|requinto|resonator-guitar|bajo-sexto|pedal-steel|lap-steel)$/.test(instrumentId);
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
      if (instrumentId==='sampler') {
        // Sampler notes select from the packaged one-shot palette. Fold any
        // authored MIDI pitch onto a real sample key so it stays playable in
        // every role and genre, including scores authored outside drum range.
        patch=electronicKitPatch(sound.variantId) ?? {bank:67,program:stableTake(note)%3,drum:false,pack:'drumkit'};
        const palette=sound.samplePalette ?? SAMPLED_KIT_KEYS;
        if (!palette.length || palette.some(key=>!Number.isInteger(key)||key<0||key>127)) throw new Error('Invalid sampler palette.');
        key=palette[((Math.round(note.midi)-36)%palette.length+palette.length)%palette.length];
      } else if (instrumentId==='synth'||instrumentId==='synth-bass') {
        const name=sound.synthPatchId??sound.synthPatch?.id??'';
        if(SYNTH_SAMPLE_PROGRAMS[name]!==undefined)patch={bank:75,program:SYNTH_SAMPLE_PROGRAMS[name],drum:false,pack:'electronic'};
        else if(/sub|bass|acid/.test(name))patch=patchForProgram(38,'guitars');
        else if(/square/.test(name))patch=patchForProgram(80,'electronic');
        else if(/noise/.test(name))patch=patchForProgram(121,'electronic');
        else if(/halo/.test(name))patch=patchForProgram(89,'electronic');
        else if(/pad|drone/.test(name))patch=patchForProgram(88,'electronic');
        else if(/strings/.test(name))patch=patchForProgram(49,'strings');
        else if(/brass/.test(name))patch=patchForProgram(61,'brass');
      }
      // Compiled body contacts on pitched instruments must not turn back into
      // string/wind notes. Scraped contacts use a friction approximation.
      if (instrumentId !== 'timpani' && instrumentId !== 'sampler' && !percussion && gesture.pitchIdentity === 'unpitched') {
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
          key=recordedPercussionKey(instrumentId,note.midi,def.drum,action);
          patch={bank:66,program:recorded.program+recordedPercussionTake(instrumentId,key,stableTake(note)),drum:false,pack:'percussion'};
        } else key=percussionKey(instrumentId, note.midi, def.drum, action);
      }
      if(instrumentId==='palmas') {patch={bank:66,program:1,drum:false,pack:'percussion'};key=38+stableTake(note)%3;}
      if(instrumentId==='cajon') {patch={bank:66,program:0,drum:false,pack:'percussion'};key=/slap|rim|tip/.test(action)?37:key===36?35:36;}
      if(def.kit && instrumentId !== 'timpani') {
        if(key===42&&action==='open')key=46;
        if(key===38&&/rimshot/.test(action))key=40;
        const electronic=electronicKitPatch(sound.variantId);
        if(sound.variantId==='brush-kit')patch={bank:67,program:3,drum:false,pack:'drumkit'};
        else if(electronic)patch=electronic;
        else if((SAMPLED_KIT_KEYS as readonly number[]).includes(key))patch={bank:/choke/.test(action)?68:67,program:stableTake(note)%3,drum:false,pack:'drumkit'};
      }
      banks.add(patch.pack);
      // Selecting a MIDI sample key must not quantize a fractional written
      // pitch. Percussion/sampler keys select contacts, rather than pitches.
      const keyRoundingCents = !percussion && instrumentId !== 'sampler'
        && gesture.pitchIdentity !== 'unpitched' ? (note.midi - Math.round(note.midi)) * 100 : 0;
      const cents = patch.drum ? 0 : pitch(note) + keyRoundingCents;
      if (!Number.isFinite(cents)) throw new Error('Invalid sampled note tuning.');
      const initialBend = instrumentId==='pedal-steel' && action==='chordal-glissando' && !note.pitchBend?.length ? -200 : 0;
      const onsetCents=cents+initialBend;
      const hasGestureBend=!patch.drum&&(/fall|doit|slide|arrastre|vibrato|shake/.test(action)
        ||instrumentId==='pedal-steel'&&['pedal-bend','knee-lever-bend','chordal-glissando'].includes(action));
      const hasPitchMotion=!patch.drum&&(!!note.pitchBend?.length||hasGestureBend);
      const volumeSwell = instrumentId === 'pedal-steel' && action === 'volume-swell';
      const filterSweep = (instrumentId === 'synth' || instrumentId === 'synth-bass') && action === 'filter-sweep';
      const expression = volumeSwell || filterSweep ? `${action}:${note.time}:${note.dur}` : undefined;
      const hat = hatChannel && [42,44,46].includes(key);
      let lane = hat ? 0 : occupied.findIndex((keys,lane) => {
        if(hatChannel&&lane===0)return false;
        // CC11/74 affect every key on their channel, including release tails.
        // Only tones sharing the same envelope may share an expressive lane;
        // another ringing key must not be ducked or filtered by this attack.
        if (expression !== undefined || expressiveLanes.has(lane)) {
          for (const [reservedKey, previous] of keys) {
            const active = previous.filter(reservation => reservation.soundingEnd > note.time);
            if (active.length) keys.set(reservedKey, active); else keys.delete(reservedKey);
            if (active.some(reservation => reservation.expression !== expression
              && (reservation.expression !== undefined || expression !== undefined))) return false;
          }
        }
        const reservations=(keys.get(key)??[]).filter(reservation=>reservation.soundingEnd>note.time);
        keys.set(key,reservations);
        return reservations.every(reservation=>reservation.holdEnd<=note.time
          &&!reservation.pitchMotion&&!hasPitchMotion&&Math.abs(reservation.cents-onsetCents)<.01);
      });
      if (lane < 0) lane = occupied.length;
      // Share a channel with an already-released same-key voice only when both
      // attacks keep the same pitch and neither bends. Held notes and notes
      // with pitch motion retain independent same-key ownership.
      const channel = index + lane * Math.max(1, trackIds.length);
      occupied[lane] ??= new Map();
      const end=physicalEnd(note);
      const down=pedal.filter(cc=>cc.time<=end).at(-1)?.value ?? 0;
      const pedalEnd=down>=64 ? pedal.find(cc=>cc.time>end&&cc.value<64)?.time ?? performance.duration : end;
      const releaseStart=Math.max(end,pedalEnd);
      const profile=SAMPLE_RELEASE_PROFILES[`${patch.pack}:${patch.bank}:${patch.program}:${patch.drum}:${key}`];
      // CC72 adds up to 3600 bipolar timecents to the volume release. Retain
      // the largest setting observed while this voice is held: using only
      // the packaged default clipped controller-extended releases in export
      // and freed their channel/voice reservations too early.
      const releaseAtOnset=controls.filter(cc=>cc.cc===72&&cc.time<=note.time).at(-1)?.value ?? 64;
      const maxRelease=controls.filter(cc=>cc.cc===72&&cc.time>note.time&&cc.time<=releaseStart)
        .reduce((value,cc)=>Math.max(value,cc.value),Math.max(64,releaseAtOnset));
      const releaseScale=2**(3*(maxRelease-64)/64);
      const loopTail=profile&&profile[2]>.0011?Math.max(.015625,profile[2]*releaseScale):0;
      const estimatedTail=profile
        ?Math.max(loopTail,Math.min(Math.max(.015625,profile[0]*releaseScale),Math.max(0,profile[1]-(releaseStart-note.time))))
        // Patch-wide release is the maximum across every key and velocity.
        // It is not a safe estimate for a missing key profile: drum presets in
        // particular contain very long release values on unrelated zones.
        :SOUNDFONT_RELEASE_RESERVE;
      const releaseEnd=releaseStart+estimatedTail;
      const reservations=(occupied[lane].get(key)??[]).filter(reservation=>reservation.soundingEnd>note.time);
      reservations.push({holdEnd:releaseStart,soundingEnd:releaseEnd,cents:onsetCents,pitchMotion:hasPitchMotion,expression});
      occupied[lane].set(key,reservations);soundingEnd=Math.max(soundingEnd,releaseEnd);
      if (expression !== undefined) expressiveLanes.add(lane);
      if (!track.channels.includes(channel)) track.channels.push(channel);
      channels = Math.max(channels, channel + 1);
      // PerfNote.dur is the compiled musical gate. Pattern authoring and the
      // performer have already applied instrument-aware articulation; a fixed
      // wall-clock staccato cap here clipped slow notes and ignored tempo.
      const hold = note.dur;
      // SoundFont velocity often selects a different recorded dynamic layer as
      // well as level. Apply the small authored timbre bias here, after gesture
      // dynamics, so a bright/dark instrument setup reaches its recorded layer
      // without flattening the player's accent and ghost-note range.
      const timbreVelocity = Math.max(1, Math.min(127, Math.round(
        gesture.velocity * Math.max(0.88, Math.min(1.12, 1 + (sound.brightnessMultiplier - 1) * 0.2)),
      )));
      noteLifetimes.push({note,end:releaseEnd});
      voiceDemand.push({start:note.time,end:releaseEnd,patch,key,velocity:timbreVelocity});
      events.push({ time: note.time, type: 'on', channel, key, velocity: timbreVelocity,
        patch, gain: sound.roleGain, cents:cents+initialBend });
      events.push({ time: end, type: 'off', channel, key });
      // Filter sweep is a real synth gesture, not a note-length hint. CC 74 is
      // bipolar in the shipped SoundFont engine: 64 leaves the authored patch
      // cutoff unchanged, while lower and higher values move it down/up.
      // Defer the envelope until channel allocation is complete so a chord
      // shares one sweep instead of sending a controller ramp per chord tone.
      if (filterSweep) {
        synthFilterSweeps.push({ channel, start: note.time, end: note.time + hold });
      }
      for (const bend of note.pitchBend ?? []) if (bend.offset >= 0 && bend.offset < hold) {
        events.push({ time: note.time + bend.offset, type: 'bend', channel, key, cents: cents + (bend.value-8192)/8192*200 });
      }
      if (/fall|doit|slide|arrastre/.test(action) && !note.pitchBend?.length && !patch.drum) {
        const direction = /fall/.test(action) ? -1 : 1;
        for (let point=0;point<=12;point++) events.push({ time: note.time+hold*(.65+.34*point/12), type:'bend', channel, key, cents:cents+direction*200*point/12 });
      }
      if (instrumentId==='pedal-steel' && !note.pitchBend?.length && !patch.drum) {
        const gestureBend = action==='pedal-bend' ? {from:0,to:200,shape:'return'}
          : action==='knee-lever-bend' ? {from:0,to:-100,shape:'return'}
            : action==='chordal-glissando' ? {from:-200,to:0,shape:'land'} : undefined;
        if (gestureBend) {
          const start = gestureBend.shape==='land' ? gestureBend.from : 0;
          for (let point=0;point<=12;point++) {
            const t=point/12;
            const offset=gestureBend.shape==='land' ? hold*(.02+.72*t) : hold*(.2+.42*t);
            events.push({time:note.time+offset,type:'bend',channel,key,cents:cents+start+(gestureBend.to-start)*t});
          }
          if (gestureBend.shape==='return') for (let point=1;point<=8;point++) {
            const t=point/8;
            events.push({time:note.time+hold*(.72+.25*t),type:'bend',channel,key,cents:cents+gestureBend.to*(1-t)});
          }
        }
      }
      const swellKey = `${channel}:${note.time}:${hold}`;
      if (volumeSwell && !steelVolumeSwells.has(swellKey)) {
        steelVolumeSwells.add(swellKey);
        for (let point=0;point<=10;point++) {
          const t=point/10;
          events.push({time:note.time+hold*.62*t,type:'cc',channels:[channel],cc:11,value:Math.round(16+111*t)});
        }
        events.push({time:note.time+hold,type:'cc',channels:[channel],cc:11,value:127});
      }
      if (/vibrato|shake/.test(action) && !note.pitchBend?.length && !patch.drum) {
        for (let t=.12;t<hold;t+=.025) events.push({ time:note.time+t,type:'bend',channel,key,cents:cents+Math.sin(t*Math.PI*10)*(/shake/.test(action)?65:18) });
      }
    }
    for (const cc of performance.ccs.filter(cc => cc.trackId === id)) {
      if (!Number.isFinite(cc.time) || !Number.isInteger(cc.cc) || cc.cc < 0 || cc.cc > 127
        || !Number.isFinite(cc.value) || cc.value < 0 || cc.value > 127) {
        throw new Error(`Invalid controller event for ${id}: time, controller, or value is out of range.`);
      }
      // Physical custom CCs must not accidentally become unrelated GM controls.
      const mapped = cc.cc === 18 ? 74 : cc.cc === 24 ? 11 : cc.cc;
      if (![1,7,10,11,64,67,71,72,73,74].includes(mapped)) continue;
      events.push({ time:cc.time,type:'cc',channels:track.channels,cc:mapped,value:Math.max(0,Math.min(127,cc.cc===18?127-cc.value:cc.value)) });
    }
    tracks.push(track);
  });
  const sweepsByChannel = new Map<number, Array<{ start: number; end: number }>>();
  for (const { channel, start, end } of synthFilterSweeps) {
    const sweeps = sweepsByChannel.get(channel) ?? [];
    sweeps.push({ start, end });
    sweepsByChannel.set(channel, sweeps);
  }
  for (const [channel, rawSweeps] of sweepsByChannel) {
    const byStart = new Map<number, number>();
    for (const sweep of rawSweeps) byStart.set(sweep.start, Math.max(byStart.get(sweep.start) ?? sweep.end, sweep.end));
    const sweeps = [...byStart].map(([start, end]) => ({ start, end })).sort((a, b) => a.start - b.start);
    sweeps.forEach((sweep, index) => {
      const nextStart = sweeps[index + 1]?.start ?? Infinity;
      const end = Math.min(sweep.end, nextStart);
      const span = Math.max(0, end - sweep.start);
      const channels = [channel];
      events.push({ time: sweep.start, type: 'cc', channels, cc: 74, value: 52 });
      if (span > 0.015) events.push({ time: sweep.start + span * 0.68, type: 'cc', channels, cc: 74, value: 78 });
      if (nextStart >= sweep.end) events.push({ time: sweep.end, type: 'cc', channels, cc: 74, value: 64 });
    });
  }
  if (channels > 2048) throw new Error('This score exceeds the sample channel budget. Reduce overlapping sustained notes.');
  const order = { cc: 0, off: 1, on: 2, bend: 3 };
  events.sort((a,b)=>a.time-b.time || order[a.type]-order[b.type]);
  const origin = performance.notes.reduce((from,n)=>trackIds.includes(n.trackId)?Math.min(from,n.time):from,0);
  for (const event of events) event.time -= origin;
  for (const demand of voiceDemand) { demand.start -= origin; demand.end -= origin; }
  return { tracks, events, banks:[...banks], duration:soundingEnd-origin, channels, origin, noteLifetimes, voiceDemand };
}

function patchForProgram(program: number, pack: BankId): SamplePatch { return { bank:0, program, drum:false, pack }; }
function percussionKey(id: string, midi: number, source: {low:number;mid:number;high:number}, action: string) {
  const keys = PERCUSSION_SAMPLE_KEYS[id];
  if (!keys) throw new Error(`No explicit SoundFont rhythm mapping for ${id}`);
  if (id==='congas') return /slap|mute|heel/.test(action) ? 62 : /tumba/.test(action) ? 64 : 63;
  return keys[midi===source.low ? 0 : midi===source.high ? 2 : 1];
}

function stableTake(note:PerfNote) {return Array.from(note.attackId ?? note.notationEventId ?? `${note.time}:${note.bar}`).reduce((hash,c)=>Math.imul(hash^c.charCodeAt(0),16777619)>>>0,2166136261);}
