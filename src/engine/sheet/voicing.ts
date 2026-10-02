import { VOICING_CLASSIFIERS } from '../../data/musicTheory/voicingClassifiers';
import { STANDARD_GUITAR_OPEN_STRING_MIDI } from '../../data/instruments/openStringMidi';
import type { ResolvedStyle } from '../../data/styles/schema';
import { OPEN_MAJOR_SHAPES, OPEN_MINOR_SHAPES, CAGED_OPEN_SHAPE_ROOTS } from '../../data/musicTheory/openVoicingShapes';
import { ParsedChord, nearestPc, pcOf } from './musicTheory.ts';
import { foldToRange } from '../sheet/instrumentRoles.ts';
import type { VoiceProfile } from '../../data/instruments/schema/voice-profile';
import { rand01 } from './random.ts';
import type { RhythmicContext } from './grid.ts';

export type VoicingStyle =
  /** close position, the way a guitarist grabs a shape */
  | 'close'
  /** the second voice from the top dropped an octave — the standard piano/guitar comp */
  | 'drop2'
  /** wide, for pads and string beds */
  | 'spread'
  /** just the notes that define the chord: third and seventh */
  | 'shell'
  /** root and fifth only */
  | 'power'
  /** a single line */
  | 'unison';

export interface VoicingRequest {
  chord: ParsedChord;
  profile: VoiceProfile;
  style: VoicingStyle;
  /** the previous voicing this instrument played, for voice leading */
  previous: number[];
  /** how many notes to aim for */
  size: number;
  /** 0..1 — how big the moment is. Opens the voicing up and adds colour. */
  intensity: number;
  /** true when a bass instrument is covering the root */
  bassCovered: boolean;
  /** midi registers already occupied by other chordal parts this bar */
  avoid?: number[];
  seed: number;
  rhythmicContext?: RhythmicContext;
  /** Contract-resolved behavioral approach. */
  approach?: string;
  styleId?: string;
  genreId?: string;
  previousChord?: ParsedChord;
}

/** The chord tones that matter most, in the order you would give them up. */
function priorityIntervals(
  chord: ParsedChord,
  bassCovered: boolean,
  intensity: number,
  isJazzFunkNeo: boolean
): number[] {
  const iv = chord.intervals;
  const third = iv.find(x => x === 3 || x === 4 || x === 2 || x === 5);
  const seventh = iv.find(x => x === 10 || x === 11 || x === 9);
  const fifth = iv.find(x => x === 6 || x === 7 || x === 8);
  const colours = chord.tensions.slice();

  const out: number[] = [];
  if (third !== undefined) out.push(third);
  if (seventh !== undefined) out.push(seventh);

  // Rootless Voicings for Jazz/Funk: Forcefully delete the root note (0) if bass is covered and style is Jazz/Funk
  const skipRoot = bassCovered && isJazzFunkNeo;

  if (!skipRoot) {
    if (!bassCovered) out.unshift(0);
    else if (chord.isPower || out.length === 0) out.unshift(0);
  }

  if (fifth !== undefined && (fifth !== 7 || out.length < 3 || chord.isPower)) out.push(fifth);

  const colourBudget = intensity > 0.75 ? colours.length : intensity > 0.45 ? Math.min(1, colours.length) : 0;
  for (let i = 0; i < colourBudget; i++) out.push(colours[i]);

  if (!skipRoot && bassCovered && !out.includes(0) && out.length < 3) out.push(0);
  return [...new Set(out)];
}

/**
 * Build a voicing for one chord on one instrument, moving as little as
 * possible from the last one.
 */
export function voiceChord(req: VoicingRequest): number[] {
  const { chord, profile, previous, intensity, seed } = req;
  const phase = req.rhythmicContext?.cyclePosition ?? 0;
  const energy = req.rhythmicContext?.sectionEnergy ?? 3;
  const cycleLength = req.rhythmicContext?.cycleLength ?? 1;
  const approach = req.approach;

  const styleStr = `${req.genreId || ''} ${req.styleId || ''} ${req.approach || ''}`.toLowerCase();
  const isJazzFunkNeo = VOICING_CLASSIFIERS.jazzFunkNeo.test(styleStr);

  if (approach === 'unison' || approach === 'melodic') {
    const root = nearestPc(chord.rootPc, previous[0] ?? profile.centre);
    return [root];
  }

  if (req.style === 'power' || chord.isPower) {
    const root = nearestPc(chord.rootPc, previous[0] ?? profile.centre - 7);
    return dedupe([root, root + 7, root + 12].map(n => clampRange(n, profile)));
  }

  // Salsa Guajeo Piano Voice Leading (Salsa & Cumbia)
  const isSalsa = VOICING_CLASSIFIERS.salsa.test(styleStr);
  const isPiano = /piano/i.test(profile.id || '');
  if (isSalsa && isPiano && previous.length > 0) {
    const prevSorted = [...previous].sort((a, b) => a - b);
    const prevTopNote = prevSorted[prevSorted.length - 1];

    const wanted = priorityIntervals(chord, req.bassCovered, intensity, isJazzFunkNeo);
    const numNotes = Math.max(3, Math.min(5, req.size));
    const pcs = wanted.slice(0, numNotes).map(iv => pcOf(chord.rootPc + iv));

    let bestVoicing: number[] = [];
    let bestDistance = Infinity;

    for (const topPc of pcs) {
      const topNote = nearestPc(topPc, prevTopNote);
      const otherPcs = pcs.filter(pc => pc !== topPc);
      const otherNotes = otherPcs.map(pc => {
        let note = nearestPc(pc, topNote - 6);
        if (note >= topNote) {
          note -= 12;
        }
        return note;
      });

      const voicingCandidate = [topNote, ...otherNotes].sort((a, b) => a - b);
      const dist = Math.abs(topNote - prevTopNote);

      if (dist < bestDistance) {
        bestDistance = dist;
        bestVoicing = voicingCandidate;
      }
    }

    if (bestVoicing.length > 0) {
      return dedupe(bestVoicing.map(n => clampRange(n, profile)));
    }
  }

  // Strict 4-Part SATB Divisi for Choirs & Vocal Sections (Prompt 22)
  const isChoir = VOICING_CLASSIFIERS.choir.test(profile.id || '') && !/lead/i.test(profile.id || '');
  if (isChoir) {
    const wanted = priorityIntervals(chord, req.bassCovered, intensity, isJazzFunkNeo);
    // Ensure we have exactly 4 notes (Bass, Tenor, Alto, Soprano)
    const rawPcs = wanted.slice(0, 4);
    while (rawPcs.length < 4) {
      rawPcs.push(wanted[rawPcs.length % wanted.length]);
    }
    
    // Distribute into SATB ranges:
    // Bass: C2-E4 (36-64), Tenor: C3-G4 (48-67), Alto: F3-D5 (53-74), Soprano: C4-A5 (60-81)
    const b = nearestPc(pcOf(chord.rootPc + rawPcs[0]), 45); // bass
    const t = nearestPc(pcOf(chord.rootPc + rawPcs[1]), 55); // tenor
    const a = nearestPc(pcOf(chord.rootPc + rawPcs[2]), 64); // alto
    const s = nearestPc(pcOf(chord.rootPc + rawPcs[3]), 72); // soprano
    
    let satb = [b, t, a, s].sort((x, y) => x - y);
    
    // Contrary Motion Voice Leading: Soprano moves contrary to Bass if previous exists
    if (previous.length >= 4) {
      const prevBass = previous[0];
      const prevSop = previous[previous.length - 1];
      const bassDiff = satb[0] - prevBass;
      if (bassDiff > 0) {
        // Bass moved up, Soprano should stay or move down
        if (satb[3] > prevSop) {
          satb[3] -= 12; // Force down
        }
      } else if (bassDiff < 0) {
        // Bass moved down, Soprano should stay or move up
        if (satb[3] < prevSop) {
          satb[3] += 12; // Force up
        }
      }
    }
    
    // Prevent voice crossing
    satb = [
      satb[0],
      Math.max(satb[0], satb[1]),
      Math.max(satb[1], satb[2]),
      Math.max(satb[2], satb[3])
    ];
    return satb.map(n => clampRange(n, profile));
  }

  // Drop-D Tuning for Metal and Grunge (Prompt 10)
  const isGuitar = VOICING_CLASSIFIERS.guitarCue.test(profile.id || '');
  const isMetalOrGrunge = VOICING_CLASSIFIERS.metalOrGrunge.test(styleStr);
  if (isMetalOrGrunge && isGuitar) {
    const effectiveLow = 38; // D2 lowest pitch
    const root = nearestPc(chord.rootPc, Math.max(effectiveLow, previous[0] ?? (effectiveLow + 5)));
    return [root, root + 7, root + 12].map(n => Math.max(effectiveLow, Math.min(profile.high, n)));
  }

  const instId = (profile.id || '').toLowerCase();
  const isElectricGuitar = VOICING_CLASSIFIERS.electricGuitar.test(instId) ||
    (VOICING_CLASSIFIERS.guitarId.test(instId) && !VOICING_CLASSIFIERS.notAcousticGuitar.test(instId));
  const isAcousticGuitar = VOICING_CLASSIFIERS.acousticGuitar.test(instId) ||
    (instId === 'guitar' && VOICING_CLASSIFIERS.folkCountryBluegrass.test(styleStr)) ||
    (VOICING_CLASSIFIERS.guitarId.test(instId) && !VOICING_CLASSIFIERS.notElectricGuitar.test(instId));
  const isPianoOrKeys = VOICING_CLASSIFIERS.pianoOrKeys.test(instId);

  // 1. Reggae & Ska "Skank" Voicings
  // Check if styleStr includes 'reggae', 'dub', or 'ska'
  const isReggaeOrSka = VOICING_CLASSIFIERS.reggaeOrSka.test(styleStr);
  const isSkankRole = profile.role === 'comp' || (profile.role as string) === 'harmony';
  if (isReggaeOrSka && isSkankRole) {
    // Force skipRoot = true; use 3 notes maximum (triads or 3-note 7th shells)
    const third = chord.intervals.find(x => x === 3 || x === 4 || x === 2 || x === 5) ?? 4;
    const seventh = chord.intervals.find(x => x === 10 || x === 11 || x === 9);
    const fifth = chord.intervals.find(x => x === 6 || x === 7 || x === 8) ?? 7;

    const candidateIntervals: number[] = [];
    if (seventh !== undefined) {
      candidateIntervals.push(third, seventh, fifth);
    } else {
      candidateIntervals.push(third, fifth, third + 12);
    }

    const skankPcs = candidateIntervals.slice(0, 3).map(iv => pcOf(chord.rootPc + iv));
    const targetRef = previous.length
      ? Math.max(65, Math.min(81, Math.round(previous.reduce((a, b) => a + b, 0) / previous.length)))
      : 72;

    let skankNotes = skankPcs.map(pc => {
      let n = nearestPc(pc, targetRef);
      while (n < 65) n += 12;
      while (n > 81) n -= 12;
      if (n < 65) n += 12;
      return n;
    }).sort((a, b) => a - b);

    // Restrict strictly between MIDI 65 and 81
    skankNotes = skankNotes.map(n => Math.max(65, Math.min(81, n)));
    return dedupe(skankNotes.slice(0, 3));
  }

  // 2. Funk Guitar "Top-String" Chops
  // Check if styleStr includes 'funk' or 'disco' AND instrument is an electric guitar
  const isFunkOrDisco = VOICING_CLASSIFIERS.funkOrDisco.test(styleStr);
  if (isFunkOrDisco && isElectricGuitar) {
    const allIntervals = [...chord.tensions, ...chord.intervals];
    let highestTensionIv: number | undefined;

    // Check tensions: 13th > 11th > 9th
    const t13 = allIntervals.find(iv => iv === 21 || iv === 20 || (iv === 9 && chord.intervals.includes(10)));
    const t11 = allIntervals.find(iv => iv === 17 || iv === 18 || (iv === 5 && chord.intervals.includes(10)));
    const t9 = allIntervals.find(iv => iv === 14 || iv === 13 || iv === 15 || iv === 2);

    if (t13 !== undefined) {
      highestTensionIv = t13 % 12;
    } else if (t11 !== undefined) {
      highestTensionIv = t11 % 12;
    } else if (t9 !== undefined) {
      highestTensionIv = t9 % 12;
    } else if (chord.quality === 'dominant' || chord.symbol.includes('7')) {
      highestTensionIv = 2; // Classic James Brown E9 style tension
    }

    const third = chord.intervals.find(x => x === 3 || x === 4 || x === 2 || x === 5) ?? 4;
    const seventh = chord.intervals.find(x => x === 10 || x === 11 || x === 9) ?? 10;
    const prevTop = previous.length ? previous[previous.length - 1] : 75;

    if (highestTensionIv !== undefined) {
      const topPc = pcOf(chord.rootPc + highestTensionIv);
      let topNote = nearestPc(topPc, Math.min(78, Math.max(71, prevTop)));
      while (topNote < 71) topNote += 12;
      while (topNote > 79) topNote -= 12;
      if (topNote < 65) topNote += 12;

      // Omit 5th and root, place 3rd and 7th below topNote
      const lowerPcs = [pcOf(chord.rootPc + seventh), pcOf(chord.rootPc + third)];
      if (req.size >= 4 && highestTensionIv !== 2 && (t9 !== undefined || chord.quality === 'dominant')) {
        lowerPcs.unshift(pcOf(chord.rootPc + 2)); // 9th below 13th/11th
      }

      const lowerNotes: number[] = [];
      for (const pc of lowerPcs) {
        let n = nearestPc(pc, topNote - 4);
        while (n >= topNote) n -= 12;
        while (n < 65) n += 12;
        if (n < topNote) lowerNotes.push(n);
      }

      let funkVoicing = [topNote, ...lowerNotes].filter(n => n >= 65 && n <= 79).sort((a, b) => a - b);
      if (funkVoicing.length >= 2 && funkVoicing[funkVoicing.length - 1] === topNote) {
        return dedupe(funkVoicing.slice(-4));
      }
    }

    // Fallback tight 3-note shell in 65-79
    const shellPcs = [pcOf(chord.rootPc + third), pcOf(chord.rootPc + seventh)];
    const notes = shellPcs.map(pc => {
      let n = nearestPc(pc, 72);
      while (n < 65) n += 12;
      while (n > 79) n -= 12;
      return n;
    }).sort((a, b) => a - b);
    return dedupe(notes);
  }

  // 3. Modal Jazz "Quartal" Voicings (Stacked Fourths)
  // Check if styleStr includes 'modal', 'spiritual', 'hard-bop', 'cool', or 'post-bop' AND instrument is piano/keys
  const isModalJazz = VOICING_CLASSIFIERS.modalJazz.test(styleStr);
  const isMinor7 = chord.quality === 'minor' && (chord.intervals.includes(10) || chord.intervals.includes(11) || chord.intervals.includes(9) || chord.symbol.includes('7') || chord.symbol.includes('m') || chord.symbol.includes('min'));
  const isDom7 = chord.quality === 'dominant' || chord.symbol.includes('7');
  const isSus = chord.quality === 'suspended' || /sus/i.test(chord.symbol);

  if (isModalJazz && isPianoOrKeys && (isMinor7 || isDom7 || isSus)) {
    // Pick top note from chord's scale/tensions (e.g. 11th, 9th, root, 5th, b7)
    const candidateOffsets = chord.tensions.length > 0
      ? chord.tensions.map(t => t % 12)
      : (chord.scale.length > 0 ? chord.scale : [5, 2, 0, 10, 7]);

    const preferred = [5, 2, 0, 10, 7].filter(iv => candidateOffsets.includes(iv));
    const topIv = preferred.length > 0 ? preferred[0] : candidateOffsets[0];
    const topPc = pcOf(chord.rootPc + topIv);

    const targetTop = previous.length ? previous[previous.length - 1] : (profile.centre + 7);
    let topNote = nearestPc(topPc, targetTop);
    while (topNote > profile.high) topNote -= 12;
    while (topNote < profile.centre) topNote += 12;

    // Stack 2 or 3 notes beneath it in Perfect Fourths (-5 semitones)
    const quartalCount = req.size >= 4 ? 4 : 3;
    let quartalStack: number[] = [];
    for (let i = 0; i < quartalCount; i++) {
      quartalStack.push(topNote - i * 5);
    }
    quartalStack.sort((a, b) => a - b);

    // Fold into instrument range
    while (quartalStack[0] < profile.low) {
      quartalStack = quartalStack.map(n => n + 12);
    }
    while (quartalStack[quartalStack.length - 1] > profile.high) {
      quartalStack = quartalStack.map(n => n - 12);
    }

    return dedupe(quartalStack.map(n => clampRange(n, profile)));
  }

  // 4. Folk & Country "CAGED" Cowboy Chords
  // Check if styleStr includes 'folk', 'country', 'bluegrass', or 'americana' AND instrument is an acoustic guitar
  const isFolkCountry = VOICING_CLASSIFIERS.folkCountryBluegrass.test(styleStr);
  const hasExtensions = chord.tensions.length > 0 || chord.intervals.some(iv => iv === 10 || iv === 11 || iv === 9 || iv === 14 || iv === 13);
  const isBasicTriad = (chord.quality === 'major' || chord.quality === 'minor') && !hasExtensions && !chord.isPower;

  if (isFolkCountry && isAcousticGuitar && isBasicTriad) {
    // Absolute MIDI standard open guitar chord voicings:
    const isMinor = chord.quality === 'minor';
    const shapeMap = isMinor ? OPEN_MINOR_SHAPES : OPEN_MAJOR_SHAPES;
    const root = chord.rootPc;

    // If one of the open 5 (C, A, G, E, D), return directly
    if (shapeMap[root]) {
      return shapeMap[root].slice();
    }

    // Transpose fixed shapes up the neck using a virtual capo
    const basePcs = CAGED_OPEN_SHAPE_ROOTS; // C, D, E, G, A
    let bestCapo = Infinity;
    let bestShape: number[] = [];

    for (const basePc of basePcs) {
      if (!shapeMap[basePc]) continue;
      const capo = (root - basePc + 12) % 12;
      if (capo > 0 && capo < bestCapo) {
        bestCapo = capo;
        bestShape = shapeMap[basePc];
      }
    }

    if (bestShape.length > 0) {
      return bestShape.map(n => n + bestCapo);
    }
  }

  // 5. Neo-Soul / R&B Top-Down Voicing
  // Check if styleStr includes 'neo-soul' or 'r-and-b' AND instrument is piano/rhodes/organ
  const isNeoSoulOrRnb = VOICING_CLASSIFIERS.neoSoulOrRnb.test(styleStr);
  const isNeoKeys = /piano|rhodes|organ|keys|keyboard|wurlitzer/i.test(profile.id || '');

  if (isNeoSoulOrRnb && isNeoKeys) {
    // 1. Identify highest tension (9, 11, or 13)
    const allIntervals = [...chord.tensions, ...chord.intervals];
    let topTensionIv = 2; // Default to 9th (standard neo-soul colour)

    if (allIntervals.some(iv => iv === 21 || iv === 20 || (iv === 9 && chord.intervals.includes(10)))) {
      topTensionIv = allIntervals.find(iv => iv === 21 || iv === 20 || iv === 9)! % 12;
    } else if (allIntervals.some(iv => iv === 17 || iv === 18 || (iv === 5 && chord.intervals.includes(10)))) {
      topTensionIv = allIntervals.find(iv => iv === 17 || iv === 18 || iv === 5)! % 12;
    } else if (allIntervals.some(iv => iv === 14 || iv === 13 || iv === 15 || iv === 2 || iv === 1 || iv === 3)) {
      topTensionIv = allIntervals.find(iv => iv === 14 || iv === 13 || iv === 15 || iv === 2 || iv === 1 || iv === 3)! % 12;
    }

    // 2. Place highest tension at top of right hand strictly within MIDI 72–80
    const topPc = pcOf(chord.rootPc + topTensionIv);
    let topNote = nearestPc(topPc, previous.length ? previous[previous.length - 1] : 76);
    while (topNote < 72) topNote += 12;
    while (topNote > 80) topNote -= 12;
    if (topNote < 72) topNote += 12;

    // 3. Build right hand downward
    const third = chord.intervals.find(x => x === 3 || x === 4 || x === 2 || x === 5) ?? 4;
    const seventh = chord.intervals.find(x => x === 10 || x === 11 || x === 9) ?? 10;
    const fifth = chord.intervals.find(x => x === 6 || x === 7 || x === 8) ?? 7;

    const rhCandidates = [seventh, third, fifth].filter(iv => (iv % 12) !== topTensionIv);
    const rhNotes: number[] = [topNote];
    let currLowest = topNote;

    for (const iv of rhCandidates) {
      const pc = pcOf(chord.rootPc + iv);
      let n = nearestPc(pc, currLowest - 3);
      while (n >= currLowest) n -= 12;
      if (n >= 58) {
        rhNotes.push(n);
        currLowest = n;
      }
    }

    // 4. Put wide open shell in left hand: Root, 5th, and 10th
    let lhRoot = nearestPc(chord.rootPc, 40);
    while (lhRoot < 36) lhRoot += 12;
    while (lhRoot > 45) lhRoot -= 12;

    const lhFifth = lhRoot + fifth;
    // 10th = octave + third
    const lhTenth = lhRoot + 12 + third;

    const neoSoulVoicing = [lhRoot, lhFifth, lhTenth, ...rhNotes].sort((a, b) => a - b);
    return dedupe(neoSoulVoicing.map(n => clampRange(n, profile)));
  }

  // Dynamic Voicing Expansion for Keyboards (Prompt 9)
  const isKeyboard = VOICING_CLASSIFIERS.piano.test(profile.id || '');
  if (isKeyboard && intensity > 0.8) {
    // Split chord: Root and 5th in LH (low octave), 3rd, 7th, and tensions in RH
    const rootLh = nearestPc(chord.rootPc, profile.centre - 16);
    const fifthLh = nearestPc((chord.rootPc + 7) % 12, rootLh + 7);
    
    const wanted = priorityIntervals(chord, req.bassCovered, intensity, isJazzFunkNeo);
    const rhIntervals = wanted.filter(iv => iv !== 0 && iv !== 7);
    const rhNotes = rhIntervals.map(iv => nearestPc(pcOf(chord.rootPc + iv), profile.centre + 4));
    
    let notes = [rootLh, fifthLh, ...rhNotes].sort((a, b) => a - b);
    return dedupe(notes.map(n => clampRange(n, profile)));
  }

  const wanted = priorityIntervals(chord, req.bassCovered, intensity, isJazzFunkNeo);
  const energySize = energy >= 5 ? 1 : energy <= 1 ? -1 : 0;
  const phaseSize = cycleLength > 1 && phase === cycleLength - 1 ? 0 : 0;
  let requestedSize = Math.max(2, Math.min(12, req.size + energySize + phaseSize));

  const isSoulOrRnb = VOICING_CLASSIFIERS.soulOrRnb.test(styleStr);
  if (isSoulOrRnb && isKeyboard && intensity > 0.5) {
    requestedSize = Math.max(5, requestedSize);
  }

  const chosen = wanted.slice(0, requestedSize);

  while (chosen.length < requestedSize && wanted.length) {
    chosen.push(wanted[chosen.length % wanted.length] + 12 * Math.floor(chosen.length / wanted.length));
  }

  const anchors = previous.length ? previous : defaultAnchors(profile, chosen.length, req.style);
  const pcs = chosen.map(iv => pcOf(chord.rootPc + iv));

  const placed: number[] = [];
  if (anchors.length > 0) {
    // Voice-Leading Cost Function: Match consecutive voices to minimize total finger movement
    const sortedAnchors = [...anchors].sort((a, b) => a - b);
    const remainingPcs = [...pcs];
    const assignments: number[] = [];

    const isFolkOrCountry = VOICING_CLASSIFIERS.folkOrCountry.test(styleStr);

    for (const anchor of sortedAnchors) {
      let bestPcIdx = -1;
      let bestNote = -1;
      let minDistance = Infinity;
      for (let j = 0; j < remainingPcs.length; j++) {
        let cand = nearestPc(remainingPcs[j], anchor);
        
        // Open String Preference for Folk/Country (Prompt 10)
        if (isFolkOrCountry) {
          const matchingOpen = STANDARD_GUITAR_OPEN_STRING_MIDI.find(o => o % 12 === remainingPcs[j] && o >= profile.low && o <= profile.high);
          if (matchingOpen !== undefined) {
            cand = matchingOpen;
          }
        }

        const dist = Math.abs(cand - anchor);
        if (dist < minDistance) {
          minDistance = dist;
          bestPcIdx = j;
          bestNote = cand;
        }
      }
      if (bestPcIdx !== -1) {
        assignments.push(bestNote);
        remainingPcs.splice(bestPcIdx, 1);
      }
    }
    for (const pc of remainingPcs) {
      const ref = assignments.length ? assignments[assignments.length - 1] : profile.centre;
      assignments.push(nearestPc(pc, ref));
    }
    placed.push(...assignments);
  } else {
    for (const pc of pcs) {
      const ref = placed.length ? placed[placed.length - 1] + 4 : profile.centre;
      placed.push(nearestPc(pc, ref));
    }
  }

  let notes = placed.sort((a, b) => a - b);
  notes = spreadOut(notes);

  // Tension Resolution Logic (Prompt 9)
  if (req.previousChord && previous.length > 0) {
    const prevChord = req.previousChord;
    const isPrevAltered = prevChord.tension > 0.6;
    const isCurrResolved = chord.tension < 0.5;
    if (isPrevAltered && isCurrResolved) {
      const altIntervals = [1, 3, 6, 8]; // b9, #9, #11, b13
      const altPcs = altIntervals
        .filter(iv => prevChord.intervals.includes(iv) || prevChord.tensions.includes(iv))
        .map(iv => (prevChord.rootPc + iv) % 12);

      const currChordPcs = chord.intervals.map(iv => (chord.rootPc + iv) % 12);

      for (const pMidi of previous) {
        const pPc = pMidi % 12;
        if (altPcs.includes(pPc)) {
          for (const step of [-1, 1]) {
            const resolvedMidi = pMidi + step;
            const resolvedPc = (resolvedMidi % 12 + 12) % 12;
            if (currChordPcs.includes(resolvedPc)) {
              if (!notes.includes(resolvedMidi)) {
                notes.push(resolvedMidi);
              }
              notes = notes.filter(n => n === resolvedMidi || Math.abs(n - resolvedMidi) > 1);
            }
          }
        }
      }
      notes.sort((a, b) => a - b);
    }
  }

  // Drop-2 & Drop-3 Refinement: Check and avoid minor 9th (13 semitones) between inner voices
  if (req.style === 'drop2' && notes.length >= 3) {
    const idx = notes.length - 2;
    const dropped = notes[idx] - 12;
    let candidate = [...notes.slice(0, idx), ...notes.slice(idx + 1), dropped].sort((a, b) => a - b);
    
    let hasMinor9th = false;
    for (let j = 0; j < candidate.length; j++) {
      for (let k = 0; k < j; k++) {
        if (candidate[j] - candidate[k] === 13) {
          hasMinor9th = true;
          break;
        }
      }
    }
    if (hasMinor9th && notes.length >= 4) {
      // Try drop-3 instead
      const idx3 = notes.length - 3;
      const dropped3 = notes[idx3] - 12;
      candidate = [...notes.slice(0, idx3), ...notes.slice(idx3 + 1), dropped3].sort((a, b) => a - b);
    }
    notes = candidate;
  } else if (req.style === 'spread' && notes.length >= 3) {
    notes = [notes[0] - 12, ...notes.slice(1)];
    if (intensity > 0.7 && notes.length >= 2) notes.push(notes[notes.length - 1] + 12);
  } else if (req.style === 'shell') {
    notes = notes.slice(0, Math.min(3, notes.length));
  }

  notes = notes.map(n => clampRange(n, profile));
  notes = dedupe(notes);

  if (req.avoid?.length) {
    const collision = notes.filter(n => req.avoid!.some(a => Math.abs(a - n) < 2)).length;
    if (collision >= 2) {
      const dir = profile.centre > (req.avoid![0] ?? 60) ? 12 : -12;
      const moved = notes.map(n => clampRange(n + dir, profile));
      if (new Set(moved).size === new Set(notes).size) notes = moved;
    }
  }

  if (notes.length >= 3 && intensity > 0.6 && energy >= 4 && rand01(seed ^ phase) > 0.78) {
    notes[notes.length - 1] = clampRange(notes[notes.length - 1] + 12, profile);
    notes.sort((a, b) => a - b);
  }

  // CAGED System Validation for Guitars (Prompt 10)
  if (isGuitar && notes.length >= 2) {
    const usesOpen = notes.some(n => STANDARD_GUITAR_OPEN_STRING_MIDI.includes(n));
    if (!usesOpen) {
      const minNote = notes[0];
      const maxNote = notes[notes.length - 1];
      if (maxNote - minNote > 5) {
        notes = notes.map((n, idx) => {
          if (idx === 0) return n;
          let temp = n;
          while (temp - minNote > 5) {
            temp -= 12;
          }
          return temp;
        }).sort((a, b) => a - b);
        notes = spreadOut(notes);
      }
    }
  }

  return dedupe(notes);
}

function defaultAnchors(p: VoiceProfile, n: number, style: VocalStyleShim): number[] {
  const base = style === 'spread' ? p.centre - 10 : p.centre - 5;
  const gap = style === 'spread' ? 7 : 4;
  return Array.from({ length: Math.max(n, 3) }, (_, i) => base + i * gap);
}
type VocalStyleShim = VoicingStyle;

function spreadOut(notes: number[]): number[] {
  let out = notes.slice().sort((a, b) => a - b);
  for (let i = 1; i < out.length; i++) {
    if (out[i] - out[i - 1] < 2) out[i] += 12;
  }
  out.sort((a, b) => a - b);

  // Low-Interval Limit Check (Prompt 9): No notes < C3 (MIDI 48) less than Perfect 4th (5 semitones) apart
  let resolved = false;
  let attempts = 0;
  while (!resolved && attempts < 5) {
    resolved = true;
    for (let i = 1; i < out.length; i++) {
      if (out[i - 1] < 48) {
        const interval = out[i] - out[i - 1];
        if (interval < 5) {
          out[i] += 12;
          resolved = false;
        }
      }
    }
    out.sort((a, b) => a - b);
    attempts++;
  }
  return out;
}

function dedupe(notes: number[]): number[] {
  const seen = new Set<number>();
  const out: number[] = [];
  for (const n of notes.slice().sort((a, b) => a - b)) {
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(n);
  }
  return out;
}

function clampRange(n: number, p: VoiceProfile): number {
  return foldToRange(n, p);
}

export function styleFor(
  profile: VoiceProfile,
  instrumentId: string,
  chord: ParsedChord,
  intensity: number,
  resolved: ResolvedStyle,
): { style: VoicingStyle; size: number } {
  if (chord.isPower) return { style: 'power', size: 3 };

  const id = instrumentId;
  if (profile.role === 'pad' || VOICING_CLASSIFIERS.pad.test(id)) {
    return { style: 'spread', size: intensity > 0.6 ? 5 : 4 };
  }
  if (VOICING_CLASSIFIERS.organ.test(id)) {
    return { style: 'close', size: intensity > 0.6 ? 4 : 3 };
  }
  if (VOICING_CLASSIFIERS.powerAmp.test(id)) {
    return { style: 'power', size: 3 };
  }
  if (VOICING_CLASSIFIERS.guitarFamily.test(id)) {
    return { style: intensity > 0.55 ? 'close' : 'shell', size: intensity > 0.55 ? 4 : 3 };
  }
  if (VOICING_CLASSIFIERS.pianoInstrument.test(id)) {
    const jazzy = resolved.contract.harmonyModel === 'functional' && VOICING_CLASSIFIERS.salsaFunk.test(resolved.name + ' ' + resolved.contract.harmonyVocabulary.join(' '));
    if (jazzy && intensity < 0.55) return { style: 'shell', size: 3 };
    if (jazzy && intensity > 0.82) return { style: 'spread', size: 8 };
    return { style: 'drop2', size: jazzy ? 5 : (intensity > 0.7 ? 4 : 3) };
  }
  if (VOICING_CLASSIFIERS.horn.test(id)) {
    return { style: 'close', size: intensity > 0.6 ? 4 : 3 };
  }
  return { style: 'close', size: 3 };
}
