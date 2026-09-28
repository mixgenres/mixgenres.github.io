import type { Performance, PerfNote } from '../sequencing/perform';

export interface InteractionParams {
  rhythmicLockingStrength: number; // 0..1 (how closely bass locks to kick)
  dynamicDuckingDepth: number;     // 0..1 (ducking depth when lead/horns strike)
  energyCoupling: number;          // 0..1 (shared intensity scaling)
}

export const DEFAULT_INTERACTION: InteractionParams = {
  rhythmicLockingStrength: 0.7,
  dynamicDuckingDepth: 0.25,
  energyCoupling: 0.65,
};

/**
 * Applies ensemble cross-listening & interaction:
 * - Bass onsets lock to nearest kick drum onset.
 * - Comping instruments duck slightly during lead/horn stabs to leave harmonic space.
 * - Culturally grounded groove pockets (Flamenco 12-count compás, Salsa Clave, Reggae skank).
 * - Linear drumming, Surdo swing, Afrobeats interlocking guitars, bellows phrasing.
 * - Chorus pushing, Cadence homogenization, Pocket contagion, Hi-hat choking.
 */
export function applyEnsembleInteraction(
  perf: Performance,
  params: InteractionParams = DEFAULT_INTERACTION
): Performance {
  if (!perf.notes || perf.notes.length === 0) return perf;

  let notes = perf.notes.map(n => ({ ...n }));

  const info = perf.trackInfo ?? {};
  const instrumentOf = (n: PerfNote) => info[n.trackId]?.instrumentId ?? n.trackId;
  const roleOf = (n: PerfNote) => info[n.trackId]?.role ?? '';
  const worldId = (perf.worldId ?? '').toLowerCase();

  // 1. Gather actual kick/bass-drum onsets
  const kickNotes = notes.filter(n => roleOf(n) === 'drums' || /kick|bombo|tambor_grave|bass_drum/i.test(instrumentOf(n)));
  const kickTimes = kickNotes.map(k => k.time);

  // 1b. Inter-Band Listening & Cross-Track Interactions (Base Layer Computations)
  // Compute drum fills and vocal belts across tracks
  const drumFillTimes = notes.filter(n => roleOf(n) === 'drums' && (n.articulation === 'fill' || /fill/i.test(n.articulation || ''))).map(n => n.time);
  const vocalBeltNotes = notes.filter(n => (roleOf(n) === 'lead' || roleOf(n) === 'vocals' || /voice|vocal/i.test(instrumentOf(n))) && (n.vel / 127) > 0.85 && n.dur > 1.2);
  const vocalBeltTimes = vocalBeltNotes.map(n => n.time);

  // Apply inter-band adjustments
  for (const note of notes) {
    const role = roleOf(note);
    // Bassist gives the drummer space during drum fills
    if ((role === 'bass' || /bass|guitarron/i.test(instrumentOf(note))) && drumFillTimes.some(t => Math.abs(t - note.time) < 0.4)) {
      note.vel = Math.max(1, Math.round(note.vel * 0.85));
      if (note.dur < 0.25) {
        note.vel = 1; // Muted / silenced
      }
    }
    // Comping instruments duck and darken during vocal belts / peaks
    if ((role === 'chords' || role === 'comp' || role === 'harmony') && vocalBeltTimes.some(t => Math.abs(t - note.time) < 0.4)) {
      note.vel = Math.max(1, Math.round(note.vel * 0.7));
    }
  }

  // 2. Lock Bass Onsets to Kick Transients
  if (kickTimes.length > 0 && params.rhythmicLockingStrength > 0) {
    const bassNotes = notes.filter(n => roleOf(n) === 'bass' || /bass|tuba|guitarron/i.test(instrumentOf(n)));
    for (const bNote of bassNotes) {
      let nearestKickTime = kickTimes[0];
      let minDiff = Math.abs(bNote.time - nearestKickTime);

      for (let i = 1; i < kickTimes.length; i++) {
        const diff = Math.abs(bNote.time - kickTimes[i]);
        if (diff < minDiff) {
          minDiff = diff;
          nearestKickTime = kickTimes[i];
        }
      }

      // Lock if within 30ms window to avoid flattening intentional swing
      if (minDiff <= 0.030) {
        bNote.time = bNote.time + (nearestKickTime - bNote.time) * (params.rhythmicLockingStrength * 0.6);
      }
    }
  }

  // 3. Pocket Contagion (Prompt 20)
  // If the drum track is laid-back (has delay), drag the bass track into the pocket
  const drumNotes = notes.filter(n => roleOf(n) === 'drums');
  const bassNotes = notes.filter(n => roleOf(n) === 'bass');
  for (const b of bassNotes) {
    const nearestDrum = drumNotes.find(d => Math.abs(d.time - b.time) < 0.02);
    if (nearestDrum) {
      const drumDelay = nearestDrum.time - b.time;
      b.time += drumDelay * 0.4; // inherit 40% of delay to avoid rubber-banding
    }
  }

  // 4. Cultural Groove Pocket Alignment & Brazilian Surdo Swing (Prompt 13)
  if (worldId === 'flamenco') {
    // Flamenco Cultural Groove Pocket: snap anchors (3, 6, 8, 10, 12 in Soleá) to 0ms, drift fractional late
    for (const note of notes) {
      const bpm = perf.bars[note.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const beatInCycle = (note.time / secPerBeat) % 12; // 12-beat compás
      const exactBeat = Math.round(beatInCycle);
      
      // Beats 3, 6, 8, 10, 12 map to 0-indexed values 2, 5, 7, 9, 11
      const isAnchor = [2, 5, 7, 9, 11].includes(exactBeat);
      const diff = Math.abs(beatInCycle - exactBeat);
      const isGuitarOrPalmas = /guitar|palmas/i.test(instrumentOf(note)) || /guitar|palmas/i.test(roleOf(note));

      if (isGuitarOrPalmas && diff < 0.15) {
        if (isAnchor) {
          // snap to exact 0ms offset
          note.time = exactBeat * secPerBeat;
          note.vel = Math.min(127, Math.round(note.vel * 1.12));
        } else {
          // fractional beats (e.g. 4, 5, 7 -> indices 3, 4, 6) drift up to +15ms late
          note.time += 0.015;
        }
      } else if (isAnchor && diff < 0.25) {
        note.vel = Math.min(127, Math.round(note.vel * 1.08));
      }
    }
  } else if (worldId === 'salsa' || worldId === 'timba') {
    // Clave alignment boost for piano montuno & congas
    for (const note of notes) {
      if (/piano|conga|timbales/i.test(instrumentOf(note))) {
        note.vel = Math.min(127, Math.round(note.vel * 1.05));
      }
    }
    // Salsa Anti-Flaming: Bass tumbao & Conga open tone synchronization
    const congaNotes = notes.filter(n => /conga/i.test(instrumentOf(n)));
    const sBassNotes = notes.filter(n => roleOf(n) === 'bass' || /bass|guitarron/i.test(instrumentOf(n)));
    for (const b of sBassNotes) {
      const bpm = perf.bars[b.bar]?.bpm ?? 100;
      const secPerBeat = 60 / bpm;
      const beatInBar = (b.time / secPerBeat) % 4;
      
      // beat 4 anticipation is beat 2-and (1.5) or beat 4-and (3.5)
      const isAnticipated4 = Math.abs(beatInBar - 1.5) < 0.15 || Math.abs(beatInBar - 3.5) < 0.15;
      if (isAnticipated4) {
        const nearbyConga = congaNotes.find(c => Math.abs(c.time - b.time) < 0.05);
        if (nearbyConga) {
          b.time = nearbyConga.time; // perfectly snap together to avoid flamming
          b.vel = Math.min(127, Math.round(b.vel * 1.08));
        }
      }
    }

    // Salsa Tumbao Anti-Flam: micro-delay piano by exactly +12ms when simultaneous with bass on beat 2-and or 4
    const pianoNotes = notes.filter(n => /piano/i.test(instrumentOf(n)));
    for (const p of pianoNotes) {
      const bpm = perf.bars[p.bar]?.bpm ?? 100;
      const secPerBeat = 60 / bpm;
      const beatInBar = (p.time / secPerBeat) % 4;

      const isTargetBeat = Math.abs(beatInBar - 1.5) < 0.08 || Math.abs(beatInBar - 3.0) < 0.08;
      if (isTargetBeat) {
        const simultaneousBass = sBassNotes.some(b => Math.abs(b.time - p.time) < 0.02);
        if (simultaneousBass) {
          p.time += 0.012; // micro-delay piano by exactly +12ms
        }
      }
    }
  } else if (worldId === 'reggae' || worldId === 'ska') {
    // Skank offbeat emphasis for guitar & organ
    for (const note of notes) {
      if (/organ|guitar/i.test(instrumentOf(note)) && roleOf(note) === 'comp') {
        note.vel = Math.min(127, Math.round(note.vel * 1.06));
      }
    }
  } else if (/samba|bossa|brazil/i.test(worldId)) {
    // Brazilian Surdo Swing (Prompt 13): asymmetrical swing array [0, +12ms, 0, +5ms]
    for (const note of notes) {
      const bpm = perf.bars[note.bar]?.bpm ?? 120;
      const beatProgress = (note.time * bpm / 60) % 1;
      const sub16th = Math.round(beatProgress * 4) % 4;
      const swingDelaysMs = [0, 12, 0, 5];
      const delaySec = swingDelaysMs[sub16th] / 1000;
      note.time += delaySec;
    }
  }

  // Tango Dynamic Breathing: duck piano and bass by 30% during lead phraseo sustains
  if (worldId?.includes('tango')) {
    const leads = notes.filter(n => /violin|bandoneon/i.test(instrumentOf(n)) && (roleOf(n) === 'lead' || roleOf(n) === 'melody'));
    const compingNotes = notes.filter(n => /piano|bass/i.test(instrumentOf(n)));
    for (const cNote of compingNotes) {
      const bpm = perf.bars[cNote.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const isSustainingLead = leads.some(l => {
        const isSustain = l.dur >= secPerBeat;
        const overlaps = l.time <= cNote.time && l.time + l.dur >= cNote.time + 0.05;
        return isSustain && overlaps;
      });
      if (isSustainingLead) {
        cNote.vel = Math.max(10, Math.round(cNote.vel * 0.7));
      }
    }
  }

  // 5. Afrobeats Interlocking Guitar Patterns (Prompt 13)
  if (/afrobeats|african/i.test(worldId)) {
    const guitar2Notes = notes.filter(n => instrumentOf(n) === 'guitar2' || instrumentOf(n) === 'guitar-2' || instrumentOf(n).includes('guitar_2'));
    for (const g2 of guitar2Notes) {
      const bpm = perf.bars[g2.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const beatInBar = (g2.time / secPerBeat) % 4;
      const isDownbeat = Math.abs(beatInBar - Math.round(beatInBar)) < 0.12;
      if (isDownbeat) {
        g2.time += 0.25 * secPerBeat; // Force to offbeats
      }
    }
  }

  // Kizomba / Zouk / Tarraxo Snare Drag
  if (/kizomba|zouk|tarraxo/i.test(worldId)) {
    const snares = notes.filter(n => roleOf(n) === 'drums' && (n.midi === 38 || n.midi === 39 || n.midi === 40 || n.midi === 37));
    for (const s of snares) {
      s.time += 0.025; // 25ms late snare for heavy sensual swing
    }
  }

  // Afrobeats Log-Drum and Kick Ducking
  if (/afrobeats|amapiano|african/i.test(worldId)) {
    const logDrums = notes.filter(n => /log-drum/i.test(instrumentOf(n)) || roleOf(n) === 'bass');
    for (const ld of logDrums) {
      const simultaneousKick = kickTimes.some(kTime => Math.abs(kTime - ld.time) < 0.05);
      if (simultaneousKick) {
        ld.vel = Math.max(10, Math.round(ld.vel * 0.7)); // Duck log drum to let kick punch
      }
    }
  }

  // Bachata Bongo-Güira Tight Lock
  if (/bachata/i.test(worldId)) {
    const guiras = notes.filter(n => /guiro|guira/i.test(instrumentOf(n)));
    const bongos = notes.filter(n => /bongo/i.test(instrumentOf(n)));
    for (const b of bongos) {
      const nearGuira = guiras.find(g => Math.abs(g.time - b.time) < 0.03);
      if (nearGuira) {
        b.time = nearGuira.time; // Snap bongo to güira for crisp syncopation
      }
    }
  }

  // 6. Bellows Direction Phrasing for Accordion / Bandoneon (Prompt 13)
  for (const n of notes) {
    if (/accordion|bandoneon/i.test(instrumentOf(n))) {
      const isPull = n.bar % 2 === 1;
      if (isPull) {
        n.vel = Math.min(127, Math.round(n.vel * 1.08)); // crescendo on pull
      } else {
        n.vel = Math.max(1, Math.round(n.vel * 0.92));  // decrescendo on push
      }

      // Bandoneon subito-piano & knee-drop marcato logic (Tango)
      if (instrumentOf(n) === 'bandoneon' && worldId?.includes('tango')) {
        if (n.vel < 45) {
          // Slow-attack volume ramp (onsetMs: 250) bellows draw air-sigh
          (n as any).attack = 0.250;
          (n as any).sustain = 0.8;
          (n as any).release = 0.3;
        } else if (n.vel > 110) {
          // Hard marcato bite (onsetMs: 5), instant volume decay (decayMs: 140) knee-drop
          (n as any).attack = 0.005;
          (n as any).decay = 0.140;
          (n as any).sustain = 0.3; // drops immediately to 30% level
        }
      }
    }
  }

  // 7. Pushing the Chorus: -10ms offset during first 2 bars of Chorus/Drop (Prompt 20)
  const chorusOrDropBars = new Set<number>();
  perf.bars.forEach((b, barIdx) => {
    if (/chorus|drop/i.test(b.regionId)) {
      chorusOrDropBars.add(barIdx);
    }
  });
  for (const n of notes) {
    if (chorusOrDropBars.has(n.bar)) {
      let sectionStartBar = n.bar;
      while (sectionStartBar > 0 && perf.bars[sectionStartBar - 1]?.regionId === perf.bars[n.bar]?.regionId) {
        sectionStartBar--;
      }
      if (n.bar - sectionStartBar < 2) {
        n.time -= 0.010; // -10ms temper push
      }
    }
  }

  // 8. Rhythmic Homogenization on Cadences: Final bar of 8-bar phrase snaps to unison (Prompt 20)
  for (const n of notes) {
    const barIn8 = n.bar % 8;
    if (barIn8 === 7) {
      const bpm = perf.bars[n.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const elapsedBeats = n.time / secPerBeat;
      const snappedBeats = Math.round(elapsedBeats * 2) / 2; // snap to 8th note unisons
      n.time = snappedBeats * secPerBeat;
    }
  }

  // Gospel & Soul Vamp Intensity Build
  if (worldId?.includes('gospel') || worldId?.includes('soul')) {
    let currentRegion = '';
    let currentRegionStart = 0;
    const barIndexInRegion: number[] = [];

    perf.bars.forEach((b, idx) => {
      if (b.regionId !== currentRegion) {
        currentRegion = b.regionId;
        currentRegionStart = idx;
      }
      barIndexInRegion.push(idx - currentRegionStart);
    });

    for (const note of notes) {
      const barIdx = note.bar;
      const posInRegion = barIndexInRegion[barIdx] ?? 0;
      const isVamp = /vamp|chorus|outro|verse/i.test(perf.bars[barIdx]?.regionId || '');
      if (isVamp && posInRegion >= 4) {
        const barsBeyond4 = posInRegion - 3;
        const scaleFactor = Math.min(1.25, 1.0 + (barsBeyond4 * 0.015));
        if (/piano|organ|keyboard|rhodes|clav/i.test(instrumentOf(note))) {
          note.vel = Math.min(127, Math.round(note.vel * scaleFactor));
        }
      }
    }
  }

  // 9. Syncopation Clashing: Flam effect delay (Prompt 20)
  const guitars = notes.filter(n => /guitar/i.test(instrumentOf(n)) && roleOf(n) === 'comp');
  const pianos = notes.filter(n => /piano|rhodes|clav|keys/i.test(instrumentOf(n)) && roleOf(n) === 'comp');
  for (const g of guitars) {
    const isClash = pianos.some(p => Math.abs(p.time - g.time) < 0.005);
    if (isClash) {
      g.time += 0.025; // 25ms delay flam
    }
  }

  // 10. Hi-Hat Open/Close choking (Prompt 13)
  const openHats = notes.filter(n => /open_hat|openhat|open-hat/i.test(instrumentOf(n)) || (roleOf(n) === 'drums' && n.midi === 46));
  const closedHats = notes.filter(n => /closed_hat|closedhat|closed-hat|pedal_hat|pedalhat/i.test(instrumentOf(n)) || (roleOf(n) === 'drums' && (n.midi === 42 || n.midi === 44)));
  for (const oh of openHats) {
    const nextCH = closedHats.find(ch => ch.time > oh.time && ch.time < oh.time + 1.5);
    if (nextCH) {
      oh.dur = Math.max(0.05, nextCH.time - oh.time);
    }
  }

  // 11. Dynamic Ducking / Horn Stab & Lead Carving
  if (params.dynamicDuckingDepth > 0) {
    const leadHorns = notes.filter(n => { const id = instrumentOf(n); return roleOf(n) === 'lead' || /horn|trumpet|brass|trombon|sax|vocal|voice/i.test(id); });
    const comping = notes.filter(n => { const id = instrumentOf(n); return /guitar|piano|organ|rhodes|tres|accordion|keys|clav/i.test(id) || roleOf(n) === 'harmony' || roleOf(n) === 'comp'; });

    for (const compNote of comping) {
      const hasOverlappingStab = leadHorns.some(
        h => h.time <= compNote.time + compNote.dur && h.time + h.dur >= compNote.time
      );
      if (hasOverlappingStab) {
        compNote.vel = Math.max(15, Math.round(compNote.vel * (1 - Math.min(0.55, params.dynamicDuckingDepth))));
      }
    }
  }

  // 12. Linear Drumming (Anti-Flaming) (Prompt 13)
  const isFunkOrHipHop = /funk|hip-hop|hip_hop|breakbeat|rnb/i.test(worldId);
  if (isFunkOrHipHop) {
    const drums = notes.filter(n => roleOf(n) === 'drums' || /kick|snare|hat/i.test(instrumentOf(n)));
    const deletedNotes = new Set<PerfNote>();

    for (let i = 0; i < drums.length; i++) {
      for (let j = i + 1; j < drums.length; j++) {
        const d1 = drums[i];
        const d2 = drums[j];
        if (deletedNotes.has(d1) || deletedNotes.has(d2)) continue;

        if (Math.abs(d1.time - d2.time) < 0.005) {
          const inst1 = instrumentOf(d1).toLowerCase();
          const inst2 = instrumentOf(d2).toLowerCase();

          if ((inst1.includes('snare') && d1.vel < 50 && inst2.includes('kick')) ||
              (inst2.includes('snare') && d2.vel < 50 && inst1.includes('kick'))) {
            const hat = drums.find(h => !deletedNotes.has(h) && Math.abs(h.time - d1.time) < 0.005 && /hat/i.test(instrumentOf(h)));
            if (hat) deletedNotes.add(hat);
          }
        }
      }
    }
    notes = notes.filter(n => !deletedNotes.has(n));
  }

  // 13. Tango Percussive Lock: Piano cluster/chapa triggers Bass strappata/golpe simultaneously
  if (/tango/i.test(worldId)) {
    const pianoPerNotes = notes.filter(n =>
      /piano/i.test(instrumentOf(n)) && (n.articulation === 'cluster' || n.articulation === 'chapa')
    );
    const bassNotes = notes.filter(n => roleOf(n) === 'bass' || /bass|upright/i.test(instrumentOf(n)));
    for (const pNote of pianoPerNotes) {
      const nearBass = bassNotes.find(b => Math.abs(b.time - pNote.time) < 0.04);
      if (nearBass) {
        nearBass.time = pNote.time;
        nearBass.articulation = pNote.articulation === 'cluster' ? 'strappata' : 'golpe';
        nearBass.vel = Math.max(nearBass.vel, 110);
      }
    }
  }

  // 14. Flamenco Palmas Alignment: Snap palmas to rasgueado guitar burst transients
  if (/flamenco/i.test(worldId)) {
    const rasgueadoNotes = notes.filter(n =>
      /guitar/i.test(instrumentOf(n)) && (n.articulation === 'rasgueado' || n.articulation === 'abanico' || n.articulation === 'alzapua')
    );
    const palmasNotes = notes.filter(n => /palmas/i.test(instrumentOf(n)));
    for (const rNote of rasgueadoNotes) {
      const nearPalma = palmasNotes.find(p => Math.abs(p.time - rNote.time) < 0.045);
      if (nearPalma) {
        nearPalma.time = rNote.time;
        nearPalma.vel = Math.min(127, Math.round(nearPalma.vel * 1.15));
      }
    }
  }

  // 15. Global Heterophonic Smear (Celtic, Arabic, Chinese, Andean, Folk)
  // When multiple melodic instruments play the exact same note (unison), slight offset avoids phase cancellation
  if (/celtic|arabic|maqam|middle-east|chinese|andean|folk/i.test(worldId)) {
    const melodicNotes = notes.filter(n => roleOf(n) === 'lead' || roleOf(n) === 'melody');
    const processedUnisons = new Set<PerfNote>();
    
    for (let i = 0; i < melodicNotes.length; i++) {
      const n1 = melodicNotes[i];
      if (processedUnisons.has(n1)) continue;
      
      const unisons = melodicNotes.filter(n2 => 
        n1.trackId !== n2.trackId && 
        Math.abs(n1.time - n2.time) < 0.03 &&
        Math.abs(n1.midi - n2.midi) < 1
      );

      if (unisons.length > 0) {
        processedUnisons.add(n1);
        unisons.forEach((u, idx) => {
          processedUnisons.add(u);
          const smearMs = 0.015 + (idx * 0.010) + (Math.random() * 0.010);
          u.time += smearMs;
        });
      }
    }
  }

  // 16. Mix Clarity: Aggressively cull ghost notes if local density is too high (prevents mud)
  for (let i = notes.length - 1; i >= 0; i--) {
    const n = notes[i];
    if (n.articulation === 'ghost' || n.vel < 30) {
      // Check how many notes happen within 200ms of this ghost note
      const overlapping = notes.filter(o => Math.abs(o.time - n.time) < 0.2).length;
      if (overlapping > 8) {
        notes.splice(i, 1);
      }
    }
  }

  // 16. Drummer 'Gasp': Drop the kick drum on beat 4 if a fill is happening, creating tension for the downbeat
  const drumFills = notes.filter(n => roleOf(n) === 'drums' && (n.articulation === 'fill' || n.vel > 110));
  if (drumFills.length > 0) {
    notes = notes.filter(n => {
      if (/kick|bombo/i.test(instrumentOf(n))) {
        const bpm = perf.bars[n.bar]?.bpm ?? 120;
        const secPerBeat = 60 / bpm;
        const beatInBar = (n.time / secPerBeat) % 4;
        // If it's late in the bar (beat 3.5+) and a fill is happening nearby
        if (beatInBar > 3.5 && drumFills.some(f => Math.abs(f.time - n.time) < secPerBeat)) {
          return false; // Drop this kick to create a gasp
        }
      }
      return true;
    });
  }

  // Re-sort notes chronologically
  notes.sort((a, b) => a.time - b.time);

  return {
    ...perf,
    notes,
  };
}
