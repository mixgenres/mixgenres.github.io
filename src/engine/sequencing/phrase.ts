import type { Performance, PerfNote, PerfCC, PitchBendPoint } from './perform';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { voiceProfile } from '../theory/instrumentProfile';

export interface MusicalPhrase {
  notes: PerfNote[];
  startTime: number;
  endTime: number;
  trackId: string;
  averagePitch: number;
  minPitch: number;
  maxPitch: number;
  duration: number;
}

/**
 * PHRASE-BASED EXPRESSIVE COMPILER
 * ================================
 * Transforms a raw, note-by-note Performance into a cohesive, phrase-modeled
 * acoustic performance with phrase dynamics, legato slurs, sympathetic resonance,
 * and natural wind/bellows breath curves.
 */
export function compilePhrasePerformance(perf: Performance): Performance {
  if (!perf.notes || perf.notes.length === 0) return perf;

  // 1. Group notes by track
  const notesByTrack = new Map<string, PerfNote[]>();
  for (const n of perf.notes) {
    let list = notesByTrack.get(n.trackId);
    if (!list) {
      list = [];
      notesByTrack.set(n.trackId, list);
    }
    list.push(n);
  }

  const processedNotes: PerfNote[] = [];
  const phraseCCs: PerfCC[] = [];

  // 2. Process each track independently to form phrases
  for (const [trackId, trackNotes] of notesByTrack.entries()) {
    // Sort notes by onset time
    trackNotes.sort((a, b) => a.time - b.time);

    // Get instrument characteristics
    const instId = perf.trackInfo?.[trackId]?.instrumentId ?? 'guitar';
    const def = INSTRUMENTS_BY_ID[instId];
    const prof = voiceProfile(instId);
    const isDrum = !!(def?.kit || def?.drum || String(prof?.role) === 'drums');

    if (isDrum) {
      // Drums do not form continuous melodic phrases, just copy them through
      processedNotes.push(...trackNotes);
      continue;
    }

    // Determine segmentation parameters based on instrument role and sustain type
    const isSustained = prof.sustain === 'sustained' || prof.sustain === 'blown';
    const isBowed = prof.role === 'lead' && /violin|cello|viola|erhu|fiddle/i.test(instId);
    const isWindOrBellows = prof.sustain === 'blown' || /flute|accordion|bandoneon|harmonium|trumpet|sax|oboe|trumpet/i.test(instId);
    const isSynthOrPad = String(prof?.role) === 'pad' || String(prof?.role) === 'synth';

    // A gap of 0.8 seconds (or a change in section) indicates a new phrase
    const gapThreshold = isSustained ? 1.0 : 0.8;
    const maxPhraseDuration = 8.0; // split very long streams into multiple phrases for breathing

    const phrases: MusicalPhrase[] = [];
    let currentPhraseNotes: PerfNote[] = [];

    for (let i = 0; i < trackNotes.length; i++) {
      const note = trackNotes[i];
      if (currentPhraseNotes.length === 0) {
        currentPhraseNotes.push(note);
        continue;
      }

      const prevNote = currentPhraseNotes[currentPhraseNotes.length - 1];
      const silenceGap = note.time - (prevNote.time + prevNote.dur);
      const phraseDuration = note.time - currentPhraseNotes[0].time;

      if (silenceGap > gapThreshold || phraseDuration > maxPhraseDuration || note.bar - prevNote.bar > 2) {
        // Complete current phrase
        phrases.push(buildPhrase(currentPhraseNotes, trackId));
        currentPhraseNotes = [note];
      } else {
        currentPhraseNotes.push(note);
      }
    }
    if (currentPhraseNotes.length > 0) {
      phrases.push(buildPhrase(currentPhraseNotes, trackId));
    }

    // 3. Process each phrase to apply dynamics, legato transitions, and sympathetic resonance
    for (const phrase of phrases) {
      const pNotes = phrase.notes;
      const numNotes = pNotes.length;
      if (numNotes === 0) continue;

      const phraseDur = phrase.duration;
      const pStart = phrase.startTime;

      // Apply dynamic arch (human expression)
      // Notes rise in intensity towards 60-70% of the phrase, then taper down
      const climaxT = 0.65;
      const velocitySwellMax = 0.18; // swell up to 18% louder

      for (let i = 0; i < numNotes; i++) {
        const n = pNotes[i];
        const tNorm = phraseDur > 0 ? (n.time - pStart) / phraseDur : 0.5;

        // Arch shape: 1.0 at start/end, peaking at climaxT
        let swellFactor = 0;
        if (tNorm < climaxT) {
          swellFactor = Math.sin((tNorm / climaxT) * (Math.PI / 2));
        } else {
          swellFactor = Math.cos(((tNorm - climaxT) / (1 - climaxT)) * (Math.PI / 2));
        }

        const initialVel = n.vel;
        const adjustedVel = Math.round(initialVel * (1.0 + swellFactor * velocitySwellMax));
        n.vel = Math.max(1, Math.min(127, adjustedVel));

        // --- RICH INSTRUMENT SPECIFIC PERFORMANCE ARTICULATION EXECUTIONS ---
        const perfArt = def?.performanceArticulations;

        // 1. Rasgueado Fan Burst Execution (Spanish/Flamenco/Acoustic Guitars, Tres, Cavaquinho)
        if (perfArt?.rasgueado && (n.articulation === 'rasgueado' || (n.vel > 88 && (instId.includes('guitar') || instId.includes('tres') || instId.includes('cavaquinho'))))) {
          const rasg = perfArt.rasgueado;
          const burstCount = rasg.burstNotes || 5;
          const spreadSec = (rasg.spreadMs || 32) / 1000;
          const stepTime = spreadSec / Math.max(1, burstCount - 1);
          const pattern = rasg.directionPattern || ['down', 'down', 'down', 'down', 'up'];

          for (let bi = 1; bi < burstCount; bi++) {
            const burstTime = n.time + bi * stepTime;
            const dir = pattern[bi % pattern.length];
            const velMult = dir === 'up' ? 1.08 : 0.88;
            processedNotes.push({
              ...n,
              time: burstTime,
              dur: Math.max(0.04, n.dur - bi * stepTime),
              vel: Math.max(1, Math.min(127, Math.round(n.vel * velMult))),
              articulation: 'rasgueado-stroke',
            });
          }
        }

        // 2. Arrastre Drag & Scoop Execution (Bandoneón, Upright Bass, Cello)
        if (perfArt?.arrastre && (n.articulation === 'arrastre' || (n.vel > 82 && (instId === 'bandoneon' || instId.includes('bass'))))) {
          const arrast = perfArt.arrastre;
          const preOffset = (arrast.preBeatOffsetMs || -80) / 1000;
          const dragSemitones = arrast.pitchDragSemitones || -3;

          const bendPoints: PitchBendPoint[] = [
            { offset: preOffset, value: Math.max(0, Math.round(8192 + (dragSemitones / 2.0) * 8192)) },
            { offset: 0, value: 8192 },
          ];
          n.pitchBend = bendPoints;
          if (preOffset < 0) {
            n.time = Math.max(0, n.time + preOffset);
            n.dur -= preOffset;
          }
        }

        // 3. Golpe Body Tap Strike (Flamenco Guitar, Bandoneón, Cajón)
        if (perfArt?.golpe && (n.articulation === 'golpe' || (n.vel > 92 && (instId.includes('guitar') || instId === 'bandoneon' || instId === 'cajon')))) {
          const golpe = perfArt.golpe;
          const tapHz = golpe.bodyTapPitchHz || 185;
          const tapDecay = (golpe.transientDecayMs || 35) / 1000;

          processedNotes.push({
            time: n.time,
            dur: tapDecay,
            midi: 36, // Body impact
            frequencyHz: tapHz,
            vel: Math.min(127, Math.round(n.vel * 0.88)),
            trackId: n.trackId,
            bar: n.bar,
            articulation: 'golpe-tap',
          });
        }

        // 4. Percussive Kinematics (Hand Variance & Limb Timing Jitter)
        const kines = def?.biomechanicsAndKinematics?.percussiveKinematics;
        if (kines?.limbVariance && isDrum) {
          const isOffBeat = (n.time * 4) % 1 !== 0;
          if (isOffBeat) {
            const jitterSec = (kines.limbVariance.timingJitterMs || 8) / 1000;
            n.time += (Math.random() * 2 - 1) * jitterSec;
            n.vel = Math.max(1, Math.round(n.vel * (1 - (kines.limbVariance.velocityDropFactor || 0.15))));
          }
        }

        // Let's implement Legato Slur connectivity and Gap-Filling Performance Ornaments
        if (i < numNotes - 1) {
          const nextN = pNotes[i + 1];
          const gap = nextN.time - (n.time + n.dur);

          // Check Finite Exciters (Bow Reversals & Respiration Direction Reversal Gap)
          const exciter = def?.biomechanicsAndKinematics?.finiteExciters;
          if (exciter?.directionReversalGapMs && gap <= 0) {
            const gapSec = exciter.directionReversalGapMs / 1000;
            n.dur = Math.max(0.02, n.dur - gapSec); // Insert microscopic bow/bellows direction reversal gap
          }

          // If note ends very close to next note, make them connect/slur smoothly
          if (gap < 0.18) {
            // Overlap notes slightly
            const overlapAmount = Math.max(0.04, 0.12 - gap);
            n.dur += overlapAmount;

            // Mark next note as legato to notify synthesis engine
            if (!nextN.articulation) {
              nextN.articulation = 'legato';
            }

            // Create pitch slide (glide/portamento) from previous note to next note
            const pitchDiff = nextN.midi - n.midi;
            if (Math.abs(pitchDiff) > 0 && Math.abs(pitchDiff) <= 12 && (isBowed || isWindOrBellows || isSynthOrPad || instId.includes('guitar'))) {
              const bendPoints: PitchBendPoint[] = [];
              const slideDuration = Math.min(0.15, nextN.dur * 0.4);

              // Smooth cosine slide curve starting from previous pitch offset
              const numPoints = 6;
              for (let pi = 0; pi < numPoints; pi++) {
                const fraction = pi / (numPoints - 1);
                const offset = fraction * slideDuration;
                // Cosine interpolation from pitchDiff to 0 semitones
                const slideSemitones = pitchDiff * (1.0 - (1.0 - Math.cos(fraction * Math.PI)) / 2);
                // Convert semitones to MIDI Pitch Bend value (8192 is center, 2 semitones range is standard)
                const bendValue = Math.max(0, Math.min(16383, Math.round(8192 + (slideSemitones / 2.0) * 8192)));
                bendPoints.push({ offset, value: bendValue });
              }
              // Restore back to center at end of slide
              bendPoints.push({ offset: slideDuration + 0.01, value: 8192 });

              nextN.pitchBend = bendPoints;
            }
          } else {
            // --- MUSICAL GAP FILLING ---
            // 1. Voice Leading Passing Notes (Walk-ups / Walk-downs in melodic gaps)
            if (gap >= 0.28 && gap <= 1.30) {
              const pitchDiff = nextN.midi - n.midi;
              if (Math.abs(pitchDiff) >= 2 && Math.abs(pitchDiff) <= 9 && !isDrum) {
                const fillTime = n.time + n.dur + gap * 0.42;
                const fillPitch = Math.round((n.midi + nextN.midi) / 2);
                const fillVel = Math.max(20, Math.round(n.vel * 0.58)); // ghosted passing note
                const fillDur = Math.min(0.18, gap * 0.35);

                processedNotes.push({
                  time: fillTime,
                  dur: fillDur,
                  midi: fillPitch,
                  vel: fillVel,
                  trackId: n.trackId,
                  bar: n.bar,
                  articulation: 'passing',
                });
              } else if (gap >= 0.45 && gap <= 1.5 && (prof.role === 'bass' || prof.role === 'comp' || instId.includes('guitar') || instId.includes('piano'))) {
                // 2. Rhythm Section Ghost Fillers / Muted Dead-Note Taps in Larger Gaps
                const fillTime = n.time + n.dur + gap * 0.5;
                const fillVel = Math.max(18, Math.round(n.vel * 0.38));
                processedNotes.push({
                  time: fillTime,
                  dur: 0.08,
                  midi: n.midi,
                  vel: fillVel,
                  trackId: n.trackId,
                  bar: n.bar,
                  articulation: 'ghost',
                });
              }
            }

            // 3. Pickup Grace Notes (Acciaccaturas / Hammer-ons)
            // Leading into structural target notes after a rest
            if (gap >= 0.25 && (isBowed || isWindOrBellows || prof.role === 'lead' || instId.includes('guitar'))) {
              const pickupTime = Math.max(n.time + n.dur + 0.01, nextN.time - 0.06);
              const pickupPitch = nextN.midi > n.midi ? nextN.midi - 1 : nextN.midi + 1;
              const pickupVel = Math.max(22, Math.round(nextN.vel * 0.52));

              processedNotes.push({
                time: pickupTime,
                dur: 0.04,
                midi: pickupPitch,
                vel: pickupVel,
                trackId: nextN.trackId,
                bar: nextN.bar,
                articulation: 'grace',
              });
            }
          }
        }

        // Apply progressive sympathetic phrase resonance
        // Notes within a phrase accumulate resonance/sustain depth
        if (isSustained || instId.includes('guitar') || instId.includes('piano') || instId.includes('harp') || instId.includes('koto')) {
          const resonanceScale = 0.3 * tNorm; // build up to 30% extra decay/sustain
          n.dur = n.dur * (1.0 + resonanceScale);
        }

        // Beautiful cadence decay: Extend release of final note of the phrase
        if (i === numNotes - 1) {
          n.dur = Math.max(n.dur, n.dur * 1.35 + 0.15); // let the cadence ring out!
        }

        // Sustained note vibrato onset using exact instrument definition parameters
        if (n.dur > 0.45 && !isDrum && (isBowed || isWindOrBellows || isSynthOrPad || instId.includes('guitar') || instId.includes('erhu'))) {
          const vibDef = perfArt?.vibrato;
          const startVibratoTime = (vibDef?.onsetDelayMs || 200) / 1000;
          const vibratoRate = vibDef?.rateHz || 5.6; // Hz
          const vibratoDepthCents = vibDef?.depthCents || (isBowed ? 12 : 8); // pitch sweep depth
          const vibratoSecs = n.dur - startVibratoTime;

          if (vibratoSecs > 0.1) {
            const bendPoints = n.pitchBend ? [...n.pitchBend] : [{ offset: 0, value: 8192 }];
            const step = 0.04; // 25 times per second
            for (let vt = startVibratoTime; vt < n.dur; vt += step) {
              const elapsedVibrato = vt - startVibratoTime;
              const fade = Math.min(1.0, elapsedVibrato / 0.35); // fade vibrato in gracefully
              const sinVal = Math.sin(elapsedVibrato * 2.0 * Math.PI * vibratoRate);
              const centsOffset = sinVal * vibratoDepthCents * fade;
              // 2 semitones (200 cents) = 8192 pitch bend units
              const bendOffset = (centsOffset / 200) * 8192;
              bendPoints.push({ offset: vt, value: Math.max(0, Math.min(16383, Math.round(8192 + bendOffset))) });
            }
            // Return to center
            bendPoints.push({ offset: n.dur + 0.01, value: 8192 });
            n.pitchBend = bendPoints;
          }
        }

        processedNotes.push(n);
      }

      // 4. Generate continuous parameter curves for phrase physical controls
      // Generate CC curves (e.g. bellows/wind pressure, bow pressure, sympathetic resonance, soundboard excitation)
      const numCCSteps = Math.max(3, Math.round(phraseDur * 12)); // 12 CC points per second
      const ccStepSec = phraseDur / (numCCSteps - 1);

      for (let step = 0; vtRange() && step < numCCSteps; step++) {
        const timeOffset = step * ccStepSec;
        const curTime = pStart + timeOffset;
        const tNorm = phraseDur > 0 ? timeOffset / phraseDur : 0.5;

        // Shape 1: Expression / Breath / Bellows Pressure Swell (CC 11 / CC 24)
        // Starts soft, swells up, tapers off
        const breathShape = Math.sin(tNorm * Math.PI);
        const breathVal = Math.round(45 + breathShape * 70); // 45..115 range

        if (isWindOrBellows) {
          // Send CC 24 (Physical Pressure)
          phraseCCs.push({ time: curTime, trackId, cc: 24, value: breathVal });
          // Send CC 74 (Timbral Brightness)
          phraseCCs.push({ time: curTime, trackId, cc: 74, value: Math.round(50 + breathShape * 45) });
        } else if (isBowed) {
          // Send CC 19 (Bow Pressure) - slightly heavier in the middle of the phrase
          phraseCCs.push({ time: curTime, trackId, cc: 19, value: Math.round(55 + breathShape * 35) });
          // Send CC 20 (Bow Velocity)
          phraseCCs.push({ time: curTime, trackId, cc: 20, value: Math.round(50 + breathShape * 40) });
        } else if (isSynthOrPad || instId.includes('piano') || instId.includes('guitar')) {
          // Modulate CC 25 (Resonance) to build sympathetic decay over the phrase
          const resVal = Math.round(40 + tNorm * 50); // accumulates towards end of phrase
          phraseCCs.push({ time: curTime, trackId, cc: 25, value: resVal });
        }
      }

      function vtRange() {
        return phraseDur > 0.15;
      }
    }
  }

  // 5. Combine processed notes, original performance CCs and our new phrase CCs
  const combinedCCs = [...perf.ccs, ...phraseCCs];
  combinedCCs.sort((a, b) => a.time - b.time);

  // Return enhanced phrase-based Performance
  return {
    ...perf,
    notes: processedNotes.sort((a, b) => a.time - b.time),
    ccs: combinedCCs,
  };
}

function buildPhrase(notes: PerfNote[], trackId: string): MusicalPhrase {
  let minP = 127;
  let maxP = 0;
  let sumP = 0;

  for (const n of notes) {
    if (n.midi < minP) minP = n.midi;
    if (n.midi > maxP) maxP = n.midi;
    sumP += n.midi;
  }

  const startTime = notes[0].time;
  const lastNote = notes[notes.length - 1];
  const endTime = lastNote.time + lastNote.dur;

  return {
    notes,
    startTime,
    endTime,
    trackId,
    averagePitch: sumP / notes.length,
    minPitch: minP,
    maxPitch: maxP,
    duration: endTime - startTime,
  };
}
