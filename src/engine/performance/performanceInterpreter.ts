import type { MusicalPattern, PatternVariant, SectionEnergy } from '../../types';
import type { PerformanceGrammar } from './performanceGrammar';
import type {
  InterpretedAttack,
  PerformancePhraseMemory,
  DevelopmentStage,
  PerformanceEventKind,
} from './phraseMemory';
import { rand01, seedOf } from '../generators/groove';
import type { ParsedChord } from '../theory/theory';
import { resolveCrossInstrumentArticulation, applyGenreArticulationInfluence } from '../theory/articulation';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { resolveInstrumentArticulation, translateRhythmToInstrument } from './musicSemantics';
import { ArticulationInterpreter } from './articulation';
import { StrummingInterpreter } from './strumming';
import { PhraseDynamicsInterpreter } from './phraseDynamics';

export class PerformanceInterpreter {
  public articulation: ArticulationInterpreter;
  public strumming: StrummingInterpreter;
  public phrasing: PhraseDynamicsInterpreter;

  constructor() {
    this.articulation = new ArticulationInterpreter();
    this.strumming = new StrummingInterpreter();
    this.phrasing = new PhraseDynamicsInterpreter();
  }

  public interpretEventVelocity(event: any, ctx: any): any {
    let dynamicLevel = event.velocity || 70;
    const styleData = event.metadata?.genre;

    if (styleData && styleData.culturalHarmony) {
      const { tensionBoost = 0, dynamicSwell = 0 } = styleData.culturalHarmony;
      dynamicLevel = Math.min(127, dynamicLevel + tensionBoost * 10 + dynamicSwell);
    }

    const rngFloat = ctx?.rng?.float ? ctx.rng.float() : Math.random();
    const dynamicVariation = rngFloat * 10 - 5;
    event = this.phrasing.applyMacroPhrasing(event, ctx);

    return { ...event, velocity: Math.max(1, Math.min(127, Math.round(dynamicLevel + dynamicVariation))) };
  }

  public interpretPhrase(phrase: any, context: any): any[] {
    const inst = context?.instrument || { id: context?.instrumentId, family: context?.family };
    const genre = context?.genre || context?.style;
    const style = context?.songStyle;
    const rhythmFeel = style?.rhythmOverride || genre?.rhythm;

    const events: any[] = [];
    const notes = phrase?.notes || [];

    const isElectronic = inst?.nature === 'electronic'
      || inst?.family === 'electronic'
      || inst?.family === 'synth'
      || inst?.family === 'sampler'
      || /synth|808|909|303|lead|pad|sub|sampler|electronic/i.test(inst?.id || '');

    // HUMAN BIOLOGY TRACKER
    const acousticState: any = {
      lungCapacity: 1.0,
      timeSinceLastBreath: 0,
      stamina: 1.0,
      phraseArcPosition: 0.0,
      lastHandPositionPitch: notes[0]?.pitch ?? notes[0]?.midi ?? 60,
      actuationSyncErrorMs: 0,
    };

    // DAW / HARDWARE TRACKER
    const electronicState: any = {
      lastVoltagePitch: notes[0]?.pitch ?? notes[0]?.midi ?? 60,
      thermalAnalogDrift: 0,
      globalSidechainDuckAmount: 0,
    };

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const prevNote = i > 0 ? notes[i - 1] : null;
      const noteTime = note.time ?? 0;
      const noteDur = note.duration ?? note.dur ?? 0.25;
      const notePitch = note.pitch ?? note.midi ?? 60;

      if (!isElectronic) {
        // ACOUSTIC BIOLOGY PHYSICS
        // 1. Phrase Arc Position
        acousticState.phraseArcPosition = i / Math.max(1, notes.length - 1);

        // 2. Breath & Fatigue Physics
        if (prevNote) {
          const prevTime = prevNote.time ?? 0;
          const prevDur = prevNote.duration ?? prevNote.dur ?? 0.25;
          const prevVel = prevNote.velocity ?? prevNote.vel ?? 80;
          const restTime = noteTime - (prevTime + prevDur);

          if (restTime > 0.4) {
            acousticState.lungCapacity = Math.min(1.0, acousticState.lungCapacity + restTime * 0.8);
            acousticState.stamina = Math.min(1.0, acousticState.stamina + restTime * 0.5);
            acousticState.timeSinceLastBreath = 0;
          } else {
            acousticState.lungCapacity = Math.max(0.0, acousticState.lungCapacity - prevDur * 0.15);
            acousticState.stamina = Math.max(0.0, acousticState.stamina - (prevVel / 127) * 0.05);
            acousticState.timeSinceLastBreath += prevDur;
          }

          // 3. Biomechanics: Hand Travel Penalty
          const intervalDistance = Math.abs(notePitch - acousticState.lastHandPositionPitch);
          const travelTimeNeeded = intervalDistance * 0.002;

          if (travelTimeNeeded > restTime && intervalDistance > 5) {
            const timeDeficit = travelTimeNeeded - restTime;
            const lastEvent = events[events.length - 1];
            if (lastEvent) {
              lastEvent.duration = Math.max(0.05, (lastEvent.duration ?? 0.25) - timeDeficit);
            }
            if (timeDeficit > (lastEvent?.duration ?? 0)) {
              note.time = noteTime + (timeDeficit - (lastEvent?.duration ?? 0));
            }
          }

          // 4. Actuation Sync
          if (noteDur < 0.2 && acousticState.stamina < 0.5) {
            acousticState.actuationSyncErrorMs = Math.random() * 15 * (1.0 - acousticState.stamina);
          } else {
            acousticState.actuationSyncErrorMs = 0;
          }
        }
        acousticState.lastHandPositionPitch = notePitch;

      } else {
        // ELECTRONIC HARDWARE PHYSICS
        electronicState.thermalAnalogDrift = Math.sin(noteTime * 0.5) * 5;
        const tempo = context?.tempo || 120;
        const timeSinceBeat = (noteTime % (60 / tempo));
        electronicState.globalSidechainDuckAmount = Math.max(0, 1.0 - (timeSinceBeat * 4));
        electronicState.lastVoltagePitch = notePitch;
      }

      // ABSOLUTE HIERARCHY: Song Style > Genre > Base Instrument
      const rules = style?.performanceRules?.[inst?.id]
                 || style?.performanceRules?.[inst?.family]
                 || genre?.performanceRules?.[inst?.id] 
                 || genre?.performanceRules?.[inst?.family]
                 || inst?.definition?.performanceRules;

      let evaluatedEvents: any[] = [];
      if (rules && typeof rules.evaluateNote === 'function') {
        evaluatedEvents = rules.evaluateNote(phrase, i, acousticState, electronicState);
      } else if (inst?.id === 'trumpet') {
        evaluatedEvents = this.processTrumpet(phrase, i, acousticState);
      } else if (inst?.id === 'bandoneon') {
        evaluatedEvents = this.processBandoneon(phrase, i, acousticState);
      } else if (inst?.id === 'violin' || inst?.id === 'cello' || inst?.family === 'bowed') {
        evaluatedEvents = this.processBowedStrings(phrase, i, inst?.id, acousticState);
      } else if (inst?.family === 'guitar' || inst?.family === 'plucked') {
        evaluatedEvents = this.processGuitar(phrase, i, acousticState);
      } else if (inst?.family === 'keys' || inst?.family === 'bellows-and-keys') {
        evaluatedEvents = this.processKeys(phrase, i, acousticState);
      } else {
        evaluatedEvents = [this.processGeneric(phrase, i)];
      }

      // 5. Expressive Intonation (Only for acoustic instruments that support it)
      if (!isElectronic && rhythmFeel?.intonationSystem === 'expressive_melodic' && prevNote) {
        const prevPitch = prevNote.pitch ?? prevNote.midi ?? 60;
        const pitchDelta = notePitch - prevPitch;
        evaluatedEvents.forEach(e => {
          if (e.timbreControl && !('hammerVelocity' in e.timbreControl)) {
            if (pitchDelta === 1 || pitchDelta === 13) e.timbreControl.intonationOffsetCents = 8;
            else if (pitchDelta === -1 || pitchDelta === -13) e.timbreControl.intonationOffsetCents = -6;
            else e.timbreControl.intonationOffsetCents = 0;
          }
        });
      }

      if (!isElectronic) {
        evaluatedEvents.forEach(e => {
          if (e.timbreControl) e.timbreControl.actuationSyncOffsetMs = acousticState.actuationSyncErrorMs;
        });
      }

      // 6. Micro-timing / The Pocket
      evaluatedEvents = evaluatedEvents.map(e => {
        let timeShift = 0;
        if (isElectronic && rhythmFeel?.quantizeJitterMs) {
          const jitter = rhythmFeel.quantizeJitterMs;
          timeShift = (Math.random() * jitter - (jitter / 2)) / 1000;
        } else if (!isElectronic && rhythmFeel?.pocket) {
          const depthMs = rhythmFeel.pocketDepth ?? 15;
          if (rhythmFeel.pocket === 'behind') timeShift = depthMs / 1000;
          else if (rhythmFeel.pocket === 'ahead') timeShift = -(depthMs / 1000);
          else if (rhythmFeel.pocket === 'drunk') {
            timeShift = (Math.random() * depthMs) / 1000;
          }
        }
        return { ...e, time: (e.time ?? 0) + timeShift };
      });

      events.push(...evaluatedEvents);
    }

    return events;
  }

  public processTrumpet(phrase: any, index: number, _state?: any): any[] {
    const note = phrase.notes[index];
    const prev = phrase.notes[index - 1];
    const next = phrase.notes[index + 1];

    let articulation = 'tongued';
    const noteTime = note.time ?? 0;
    const noteDur = note.duration ?? note.dur ?? 0.25;
    const noteVel = note.velocity ?? note.vel ?? 80;
    const notePitch = note.pitch ?? note.midi ?? 60;
    const prevTime = prev ? (prev.time ?? 0) : 0;
    const prevDur = prev ? (prev.duration ?? prev.dur ?? 0.25) : 0;
    const prevPitch = prev ? (prev.pitch ?? prev.midi ?? 60) : 60;

    const isLegato = prev && (noteTime - (prevTime + prevDur) < 0.05);

    if (isLegato) {
      articulation = Math.abs(notePitch - prevPitch) <= 2 ? 'lip_slur' : 'legato';
    } else if (noteVel > 85) {
      articulation = 'marcato';
    }

    if (!next || ((next.time ?? 0) - (noteTime + noteDur) > 0.5)) {
      if (noteVel > 75) articulation = 'fall';
    }

    return [{
      ...note,
      type: 'continuous',
      articulation,
      timbreControl: { 
        breathPressure: noteVel, 
        vibratoAmount: noteDur > 0.3 ? 0.6 : 0.0,
        embouchureTension: notePitch / 127 
      }
    }];
  }

  public processBandoneon(phrase: any, index: number, _state?: any): any[] {
    const note = phrase.notes[index];
    const prev = phrase.notes[index - 1];
    const noteTime = note.time ?? 0;
    const noteVel = note.velocity ?? note.vel ?? 80;
    const prevTime = prev ? (prev.time ?? 0) : 0;
    const prevDur = prev ? (prev.duration ?? prev.dur ?? 0.25) : 0;

    let articulation = 'staccato';
    const bellowsDirection = Math.floor(noteTime / 2) % 2 === 0 ? 'opening' : 'closing';

    if (noteVel > 85) {
      articulation = 'marcato';
    } else if (prev && (noteTime - (prevTime + prevDur) < 0.03)) {
      articulation = 'legato_squeeze';
    }

    if (note.isAnticipation || note.anticipated) {
      articulation = 'arrastre';
    }

    return [{
      ...note,
      type: 'bellows',
      articulation,
      bellowsDirection,
      timbreControl: { 
        bellowsDirection, 
        bellowsPressure: noteVel 
      }
    }];
  }

  public processBowedStrings(phrase: any, index: number, _instrumentId?: string, _state?: any): any[] {
    const note = phrase.notes[index];
    const prev = phrase.notes[index - 1];
    const noteTime = note.time ?? 0;
    const noteDur = note.duration ?? note.dur ?? 0.25;
    const noteVel = note.velocity ?? note.vel ?? 80;
    const notePitch = note.pitch ?? note.midi ?? 60;
    const prevTime = prev ? (prev.time ?? 0) : 0;
    const prevDur = prev ? (prev.duration ?? prev.dur ?? 0.25) : 0;
    const prevPitch = prev ? (prev.pitch ?? prev.midi ?? 60) : 60;

    let bowDirection = index % 2 === 0 ? 'downbow' : 'upbow';
    let articulation = 'detache';

    if (noteDur < 0.12) {
      articulation = 'spiccato';
    } else if (prev && (noteTime - (prevTime + prevDur) < 0.05)) {
      articulation = 'legato';
      bowDirection = prev.timbreControl?.bowDirection || bowDirection;

      if (Math.abs(notePitch - prevPitch) > 3 && noteVel > 70) {
        articulation = 'portamento';
      }
    }

    return [{
      ...note,
      type: 'bowed',
      articulation,
      timbreControl: { 
        bowDirection, 
        bowPressure: noteVel, 
        vibratoAmount: noteDur > 0.4 ? Math.min((noteDur - 0.4) * 1.5, 1.0) : 0 
      }
    }];
  }

  public processGuitar(phrase: any, index: number, _state?: any): any[] {
    const note = phrase.notes[index];
    const noteVel = note.velocity ?? note.vel ?? 80;
    const noteDur = note.duration ?? note.dur ?? 0.25;
    const articulation = noteVel > 95 ? 'accent' : (noteDur < 0.15 ? 'staccato' : 'pluck');
    return [{
      ...note,
      type: 'plucked',
      articulation,
      timbreControl: { pluckVelocity: noteVel }
    }];
  }

  public processKeys(phrase: any, index: number, _state?: any): any[] {
    const note = phrase.notes[index];
    const noteVel = note.velocity ?? note.vel ?? 80;
    const noteDur = note.duration ?? note.dur ?? 0.25;
    const articulation = noteVel > 95 ? 'marcato' : (noteDur < 0.15 ? 'staccato' : 'tenuto');
    return [{
      ...note,
      type: 'struck',
      articulation,
      timbreControl: { hammerVelocity: noteVel }
    }];
  }

  public processGeneric(phrase: any, index: number): any {
    const note = phrase.notes[index];
    return {
      ...note,
      type: 'standard',
      articulation: note.articulation || 'standard',
      timbreControl: {}
    };
  }
}

export function applyArticulationDynamics(_baseVelocity: number, articulation: string): number {
  switch (articulation) {
    case 'bartok-pizzicato':
    case 'sfz-accent':
    case 'slap':
    case 'pop':
    case 'golpe':
    case 'noise-burst':
    case 'fm-bite':
      return 25; // Heavy emphasis
    case 'ghost-note':
    case 'muted-key-thump':
    case 'con-sordino':
    case 'high-register-pp':
      return -30; // De-emphasis
    default:
      return 0;
  }
}

function getTargetInstrumentFamily(instrumentId?: string, role?: string): string {
  const inst = (instrumentId || '').toLowerCase();
  const r = (role || '').toLowerCase();
  const def = instrumentId ? INSTRUMENTS_BY_ID[instrumentId] : undefined;
  if (def) {
    if (def.family === 'hand-drums' || def.family === 'metal-and-wood' || def.family === 'body-percussion' || def.family === 'kit') return 'percussion';
    if (def.family === 'electronic') return 'synth';
    if (def.family === 'plucked' || def.family === 'plucked-string') return /bass|bajo|contrabajo|guitarron/i.test(inst) || r === 'bass' ? 'bass' : 'guitar';
    if (def.family === 'bowed') return 'strings';
    if (def.family === 'brass') return 'brass';
    if (def.family === 'winds' || def.family === 'free-reed') return 'winds';
    if (def.family === 'bellows-and-keys') return 'piano';
  }
  if (inst.includes('piano') || inst.includes('rhodes') || inst.includes('clavinet') || inst.includes('organ') || inst.includes('harpsichord') || inst.includes('celeste') || r === 'piano' || r === 'keyboard') return 'piano';
  if (inst.includes('synth') || inst.includes('lead') || inst.includes('pad') || inst.includes('303') || inst.includes('polysynth') || inst.includes('saw')) return 'synth';
  if (inst.includes('guitar') || inst.includes('tres') || inst.includes('cuatro') || inst.includes('cavaquinho') || inst.includes('requinto') || inst.includes('banjo') || inst.includes('mandolin') || inst.includes('oud') || inst.includes('sitar') || inst.includes('ukulele')) return 'guitar';
  if (inst.includes('bass') || r === 'bass') return 'bass';
  if (inst.includes('violin') || inst.includes('viola') || inst.includes('cello') || inst.includes('strings') || inst.includes('fiddle') || inst.includes('erhu') || r === 'strings') return 'strings';
  if (inst.includes('trumpet') || inst.includes('trombone') || inst.includes('sax') || inst.includes('horn') || inst.includes('brass') || inst.includes('tuba')) return 'brass';
  if (inst.includes('flute') || inst.includes('clarinet') || inst.includes('oboe') || inst.includes('pipe') || r === 'woodwinds') return 'winds';
  return 'piano';
}

export interface PerformanceExplanation {
  trackId: string;
  role: string;
  patternId: string;
  variantId?: string;
  developmentStage: DevelopmentStage;
  authoredCount: number;
  derivedCount: number;
  restCount: number;
  interactionCount: number;
  summary: string;
}

export interface EnsembleContext {
  kickTimesInBar?: number[];
  leadActiveBeats?: [number, number][]; // [startBeat, endBeat] intervals where lead/soloist plays
  otherAccentsInBar?: number[];
  occupiedSubdivisions?: number[];
  activeTrackIds?: string[];
  trackRoleMap?: Record<string, string>;
}

export interface InteractionDirective {
  targetTrackId: string;
  relationship:
    | 'reinforce'
    | 'answer'
    | 'avoid'
    | 'anticipate'
    | 'follow'
    | 'mirror'
    | 'complement'
    | 'accentWith'
    | 'leaveSpace';
  strength?: number;
}

export interface InterpretPatternOptions {
  trackId: string;
  role: string;
  instrumentId: string;
  pattern: MusicalPattern;
  selectedVariant?: PatternVariant;
  grammar: PerformanceGrammar;
  chord: ParsedChord;
  nextChord?: ParsedChord;
  sectionEnergy: SectionEnergy;
  beatsPerBar: number;
  barIndex: number;
  barInPhrase: number;
  phraseBars: number;
  isPhraseStart: boolean;
  isPhraseEnd: boolean;
  isCadenceBar: boolean;
  isSectionStart?: boolean;
  isSectionEnd?: boolean;
  isTransitionBar?: boolean;
  transitionDirection?: 'build' | 'drop';
  sectionKind?: string;
  memory: PerformancePhraseMemory;
  seed: number;
  ensembleContext?: EnsembleContext;
  interactions?: InteractionDirective[];
}

export interface InterpretationResult {
  attacks: InterpretedAttack[];
  explanation: PerformanceExplanation;
}

/**
 * Dynamically escalates authored articulation contextually based on cadence/phrase position
 * and role vocabulary in the active performance grammar.
 */
function contextualArticulation(
  authored: string | undefined,
  isCadenceBar: boolean,
  isStructural: boolean,
  grammar: PerformanceGrammar,
  role: string,
  instrumentId?: string,
  sectionKind?: string,
  beat?: number,
  stepDuration?: number,
  seed?: number,
  isPhraseEnd?: boolean,
): string | undefined {
  const vocab = grammar.articulationVocabulary?.[role] ?? [];
  const inst = (instrumentId || '').toLowerCase();
  const kind = (sectionKind || '').toLowerCase();
  const isTango = inst.includes('tango') || kind.includes('tango') || grammar.worldId?.includes('tango') || grammar.styleId?.includes('tango');
  const isFlamenco = inst.includes('flamenco') || kind.includes('flamenco') || grammar.worldId?.includes('flamenco') || grammar.styleId?.includes('flamenco');

  // Culturally Grounded Articulations
  // 1. Tango Bass: On strong downbeats, upgrade accent to strappata (prob 0.15); otherwise arrastre on non-structural or cadence
  if ((inst.includes('upright') || inst.includes('contrabajo') || role === 'bass') && (vocab.includes('strappata') || vocab.includes('arrastre') || isTango)) {
    if (isTango && isStructural) {
      const roll = seed !== undefined ? rand01(seed ^ 0x7a91) : 0;
      if (roll < 0.15) return 'strappata';
    }
    if (isCadenceBar || !isStructural) return 'arrastre';
  }

  // 2. Tango Violin: On weak offbeats (e.g. upbeat of 4), upgrade staccato to chicharra
  if ((inst.includes('violin') || role === 'violin' || role === 'melody' || role === 'lead') && isTango) {
    const isWeakOffbeat = beat !== undefined && Math.abs(beat % 1 - 0.5) < 0.15;
    if (isWeakOffbeat || (beat !== undefined && beat >= 3.4 && !isStructural)) {
      return 'chicharra';
    }
  }

  // 3. Tango Piano: On the final beat of a heavy yumba / cadence phrase, upgrade accent to cluster
  if ((inst.includes('piano') || role === 'piano' || role === 'comp') && isTango) {
    if ((isCadenceBar || isPhraseEnd || (beat !== undefined && beat >= 3.0)) && (kind.includes('yumba') || isStructural)) {
      return 'cluster';
    }
  }

  // 4. Flamenco Spanish Guitar: On fast 16th note bass/comp runs, convert to alzapúa
  if ((inst.includes('spanish-guitar') || inst.includes('guitar') || role === 'harmony' || role === 'bass') && isFlamenco) {
    if (stepDuration !== undefined && stepDuration <= 1 && (role === 'bass' || !isStructural)) {
      return 'alzapua';
    }
    if (vocab.includes('rasgueado') && isStructural) return 'rasgueado';
    if (vocab.includes('golpe')) return 'golpe';
  }

  if (authored) return authored;

  // 5. Bachata patterns dictate apagado right-hand palm mute
  if ((inst.includes('requinto') || inst.includes('bachata') || inst.includes('guitar')) && (vocab.includes('apagado') || inst.includes('requinto'))) {
    if (!isStructural) return 'apagado';
  }
  // 6. Reggae Hammond patterns execute syncopated double-handed bubble
  if ((inst.includes('organ') || inst.includes('hammond')) && (vocab.includes('bubble') || vocab.includes('staccato') || inst.includes('reggae'))) {
    if (!isStructural) return 'bubble';
  }
  // 7. Salsa patterns trigger montuno / tumbao
  if (inst.includes('piano') && (vocab.includes('montuno') || inst.includes('salsa') || inst.includes('timba'))) {
    return 'montuno';
  }
  if (inst.includes('conga') && (vocab.includes('tumbao') || inst.includes('salsa') || inst.includes('timba'))) {
    return 'tumbao';
  }

  if (isCadenceBar && vocab.includes('pesante') && !isStructural) return 'pesante';
  if (isCadenceBar && vocab.includes('arrastre')) return 'arrastre';
  return authored;
}

/**
 * Deterministic, musically expressive pattern interpreter:
 * Evaluates authored patterns as vocabulary rather than static loops.
 * Employs phrase memory, role-aware attack filtering, staggered section entries,
 * ensemble interaction, and an anti-drone safeguard.
 */
export function interpretPattern(options: InterpretPatternOptions): InterpretationResult {
  const {
    trackId,
    role,
    instrumentId,
    pattern,
    selectedVariant,
    grammar,
    chord,
    nextChord,
    sectionEnergy,
    beatsPerBar,
    barIndex,
    barInPhrase,
    phraseBars: _phraseBars,
    isPhraseStart,
    isPhraseEnd,
    isCadenceBar,
    isSectionStart = false,
    isSectionEnd: _isSectionEnd = false,
    isTransitionBar = false,
    transitionDirection,
    sectionKind,
    memory,
    seed,
    ensembleContext,
    interactions = [],
  } = options;

  const stage = memory.developmentStage;
  const sub = pattern.subdivisions || 16;
  const cycleBars = Math.max(1, pattern.cycleLength || 1);
  const barInCycle = barIndex % cycleBars;

  let authoredCount = 0;
  let derivedCount = 0;
  let restCount = 0;
  let interactionCount = 0;

  // 1. Staggered Section Entrances:
  // Prevent every instrument from blasting on step 0 at the start of a section.
  // Groove foundation (bass, kick, percussion anchor) establishes first;
  // melody, lead, and secondary texture/comp enter organically.
  const isIntroOrVerse = sectionKind === 'intro' || sectionKind === 'verse' || sectionKind === 'breakdown';
  const isMelodicLead = role === 'lead' || role === 'melody';
  const isTexture = role === 'texture' || role === 'pad';

  if (isSectionStart && barInPhrase === 0) {
    if (isMelodicLead && isIntroOrVerse && sectionEnergy <= 3) {
      // Lead rests on the very first bar of the section to let rhythm section establish groove
      const delayedLeadRoll = rand01(seedOf(seed, barIndex, 'staggered-lead-start'));
      if (delayedLeadRoll < 0.65) {
        memory.lastEvents = [];
        memory.lastDensity = 0;
        memory.lastAccentPositions = [];
        return {
          attacks: [],
          explanation: {
            trackId,
            role,
            patternId: pattern.id,
            developmentStage: 'rest',
            authoredCount: 0,
            derivedCount: 0,
            restCount: 1,
            interactionCount: 0,
            summary: `staggered entrance rest (bar 0)`,
          },
        };
      }
    } else if (isTexture && sectionEnergy <= 2 && isIntroOrVerse) {
      // Texture rests at start of quiet sections, enters on bar 2
      memory.lastEvents = [];
      memory.lastDensity = 0;
      memory.lastAccentPositions = [];
      return {
        attacks: [],
        explanation: {
          trackId,
          role,
          patternId: pattern.id,
          developmentStage: 'rest',
          authoredCount: 0,
          derivedCount: 0,
          restCount: 1,
          interactionCount: 0,
          summary: `texture delayed entry`,
        },
      };
    }
  }

  // 2. Complete Rest Stage Handling
  if (stage === 'rest') {
    // If resting, instrument is completely silent for intentional musical space
    memory.lastEvents = [];
    memory.lastDensity = 0;
    memory.lastAccentPositions = [];
    return {
      attacks: [],
      explanation: {
        trackId,
        role,
        patternId: pattern.id,
        variantId: selectedVariant?.id,
        developmentStage: 'rest',
        authoredCount: 0,
        derivedCount: 0,
        restCount: 1,
        interactionCount: 0,
        summary: `intentional musical rest`,
      },
    };
  }

  // 3. Select pattern variant matching phrase development stage
  let activeVariant = selectedVariant;
  if (!activeVariant && pattern.variants && pattern.variants.length > 0) {
    if (stage === 'cadence' || isCadenceBar || isPhraseEnd) {
      activeVariant = pattern.variants.find(v =>
        v.variationType === 'cadence' || v.variationType === 'phraseEnd' || v.variationType === 'fill'
      );
    } else if (stage === 'transition' || isPhraseStart) {
      activeVariant = pattern.variants.find(v => v.variationType === 'phraseStart' || v.variationType === 'transition');
    } else if (stage === 'vary') {
      activeVariant = pattern.variants.find(v =>
        v.variationType === 'syncopated' || v.variationType === 'dense' || v.variationType === 'sparse' || v.variationType === 'ornamented'
      );
    } else if (stage === 'answer') {
      activeVariant = pattern.variants.find(v => v.variationType === 'sparse' || v.variationType === 'syncopated');
    } else if (sectionEnergy <= 2) {
      activeVariant = pattern.variants.find(v => v.variationType === 'sparse' || v.variationType === 'breakdown');
    } else if (sectionEnergy >= 4) {
      activeVariant = pattern.variants.find(v => v.variationType === 'dense' || v.variationType === 'syncopated');
    }
  }

  const rawOnsets = activeVariant?.onsetGrid ?? pattern.onsetGrid ?? [];
  const rawAccents = activeVariant?.accentProfile ?? pattern.accentProfile ?? [];
  const rawDurations = activeVariant?.durationGrid ?? pattern.durationGrid ?? [];
  const rawHitTypes = activeVariant?.hitGrid ?? pattern.hitGrid ?? [];

  // Filter onsets belonging to this bar in multi-bar cycles
  const barOnsets: { step: number; accent: number; duration: number; hitType?: string; originalIdx: number }[] = [];
  const stepsPerMeasure = sub;
  const cycleStartStep = barInCycle * stepsPerMeasure;
  const cycleEndStep = cycleStartStep + stepsPerMeasure;

  for (let i = 0; i < rawOnsets.length; i++) {
    const step = rawOnsets[i];
    if (step >= cycleStartStep && step < cycleEndStep) {
      barOnsets.push({
        step: step - cycleStartStep,
        accent: rawAccents[i] ?? 0.75,
        duration: rawDurations[i] ?? 1,
        hitType: rawHitTypes[i],
        originalIdx: i,
      });
    }
  }

  // Fallback if no hits in this bar of cycle
  if (barOnsets.length === 0 && rawOnsets.length > 0 && barInCycle === 0) {
    for (let i = 0; i < rawOnsets.length; i++) {
      barOnsets.push({
        step: rawOnsets[i] % stepsPerMeasure,
        accent: rawAccents[i] ?? 0.75,
        duration: rawDurations[i] ?? 1,
        hitType: rawHitTypes[i],
        originalIdx: i,
      });
    }
  }

  const attacks: InterpretedAttack[] = [];

  // 4. Process authored onsets into base attacks with role and harmonic awareness
  for (let i = 0; i < barOnsets.length; i++) {
    const o = barOnsets[i];
    const beat = (o.step / stepsPerMeasure) * beatsPerBar;
    const isDownbeat = beat < 0.12;
    const isStrongBeat = Math.abs(beat - Math.round(beat)) < 0.12;
    const isLooseFeel = grammar.microtiming?.tendency === 'rubato' || grammar.microtiming?.tendency === 'drunk' || grammar.microtiming?.tendency === 'laid-back';
    const structuralThreshold = isLooseFeel ? 0.92 : 0.82;
    const isStructural = isDownbeat
      ? (isLooseFeel && role !== 'bass' ? o.accent >= 0.88 : true)
      : (o.accent >= structuralThreshold || (isStrongBeat && o.accent >= 0.78) || grammar.preserveAuthoredRhythm >= 0.95);

    // Pitch intent determination
    let pitchIntent: InterpretedAttack['pitchIntent'] = 'written';
    let registerOffset = 0;

    if (role === 'bass') {
      if (isTransitionBar && transitionDirection === 'build') {
        // Parametric walk-up: bias pitchIntent toward 'approach' across transition bars
        pitchIntent = 'approach';
      } else if (isDownbeat) {
        pitchIntent = 'root';
      } else if (i === barOnsets.length - 1 && nextChord && nextChord.rootPc !== chord.rootPc) {
        pitchIntent = 'approach';
      } else if (stage === 'vary' && o.accent > 0.7 && rand01(seedOf(seed, barIndex, i, 'bass-vary')) > 0.5) {
        pitchIntent = (i % 2 === 1) ? 'fifth' : 'octave';
      } else if (o.accent > 0.78 && grammar.allowDerivedPitch > 0.3) {
        pitchIntent = (i % 2 === 1) ? 'fifth' : 'root';
      } else {
        pitchIntent = 'root';
      }
    } else if (role === 'comp' || role === 'harmony' || role === 'keyboard' || role === 'piano' || role === 'guitar') {
      pitchIntent = 'chord-tone';
      if (stage === 'vary' && memory.repetitionCount >= 2) {
        registerOffset = (memory.repetitionCount % 2 === 1) ? 12 : 0;
      }
    } else if (role === 'lead' || role === 'melody') {
      pitchIntent = isDownbeat ? 'chord-tone' : 'scale-neighbor';
    }

    const baseKind: PerformanceEventKind = (stage === 'repeat') ? 'repeat' : (stage === 'vary' ? 'variation' : 'written');

    // Dynamic velocity scaling based on stage and expression
    let velocityMultiplier = 1.0;
    if (stage === 'repeat') {
      // Subtle micro-dynamics so repetitions don't sound mechanical
      const dynamicNudge = (rand01(seedOf(seed, barIndex, i, 'dyn-nudge')) - 0.5) * 0.06;
      velocityMultiplier += dynamicNudge;
    } else if (stage === 'vary') {
      velocityMultiplier += (o.accent > 0.75 ? 0.08 : -0.06);
    } else if (stage === 'answer') {
      velocityMultiplier -= 0.12;
    }

    // Parametric transition shaping for accompaniment
    if (isTransitionBar && (role === 'harmony' || role === 'comp' || role === 'pad' || role === 'texture' || role === 'keyboard')) {
      const barProgress = Math.max(0, Math.min(1, o.step / sub));
      if (transitionDirection === 'build') {
        velocityMultiplier *= (0.8 + 0.45 * barProgress); // crescendo
      } else if (transitionDirection === 'drop') {
        velocityMultiplier *= (1.15 - 0.45 * barProgress); // decrescendo
      }
    }

    const calculatedVelocity = Math.max(20, Math.min(127, Math.round(o.accent * 100 * velocityMultiplier)));

    const targetFamily = getTargetInstrumentFamily(instrumentId, role);
    const genreContext = grammar.styleId || (grammar as any).genre || (options as any).genre || 'default';
    const rawArticulation = contextualArticulation(
      activeVariant?.articulation,
      isCadenceBar,
      isStructural,
      grammar,
      role,
      instrumentId,
      sectionKind,
      beat,
      o.duration,
      seedOf(seed, barIndex, i, 'articulation'),
      isPhraseEnd
    );
    const genreArticulation = rawArticulation ? applyGenreArticulationInfluence(rawArticulation, genreContext) : undefined;
    const shouldTranslateRhythm = Boolean(o.hitType || genreArticulation || /^(bass|comp|harmony|stab|percussion|perc|drums?)$/.test(role));
    const rhythmTranslation = shouldTranslateRhythm
      ? translateRhythmToInstrument({
          instrumentId,
          sourceHitType: o.hitType,
          sourceArticulation: genreArticulation,
          accent: o.accent,
          beatInBar: beat,
          beatsPerBar,
          styleId: grammar.styleId,
          genreId: genreContext,
          seed: seedOf(seed, barIndex, i, 'rhythm-translation'),
        })
      : { intent: 'offbeat' as const };
    const translatedCandidate = rhythmTranslation.articulation
      || (genreArticulation ? resolveCrossInstrumentArticulation(genreArticulation, targetFamily) : undefined);
    const supportedArticulation = translatedCandidate
      ? resolveInstrumentArticulation(instrumentId, translatedCandidate)?.id
      : undefined;
    const fusedArticulation = supportedArticulation;
    const translatedHitType = rhythmTranslation.hitType || o.hitType;
    const dynamicOffset = fusedArticulation ? applyArticulationDynamics(calculatedVelocity, fusedArticulation) : 0;
    const finalVelocity = Math.max(1, Math.min(127, calculatedVelocity + dynamicOffset));

    attacks.push({
      beat,
      durationSteps: o.duration,
      accent: o.accent,
      velocity: finalVelocity,
      source: 'authored',
      kind: baseKind,
      pitchIntent,
      structural: isStructural,
      hitType: translatedHitType,
      articulation: fusedArticulation,
      onsetIndex: o.originalIdx,
      registerOffset,
    });
    authoredCount++;
  }

  // Cadence/phrase-end fallback: ensure phrase boundaries feel intentional even when no authored variant exists
  if (!activeVariant && (isCadenceBar || isPhraseEnd) && attacks.length > 0) {
    const last = attacks[attacks.length - 1];
    last.accent = Math.min(1, last.accent * 1.12);
    last.velocity = Math.min(127, Math.round(last.velocity * 1.1));
    last.structural = true; // protect it from the thinning pass below
  }

  // 5. Attack-Level Rejection / Thinning / Space Decision Making:
  // Allow the interpreter to prune non-essential attacks according to role, stage, and repetition
  if (attacks.length > 2) {
    if (stage === 'answer') {
      // Answering instruments drop non-structural attacks in the first half of the bar
      for (let i = attacks.length - 1; i >= 0; i--) {
        const atk = attacks[i];
        if (!atk.structural && atk.beat < beatsPerBar / 2) {
          attacks.splice(i, 1);
          restCount++;
        }
      }
    } else if (sectionEnergy <= 2 && attacks.length > 4 && role !== 'bass') {
      // Thin dense accompaniment during low-energy sections
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural && i % 2 === 1) {
          attacks.splice(i, 1);
          restCount++;
        }
      }
    }
  }

  // 6. Subdivision & Derived Pickup Attacks (where permitted by grammar)
  const isPostDropLead = (role === 'lead' || role === 'melody') && isSectionStart && transitionDirection === 'drop';
  const canSubdivide = !isPostDropLead && grammar.allowDerivedAttacks > 0.15 &&
    (stage === 'vary' || stage === 'transition' || sectionEnergy >= 4) &&
    !(grammar.forbiddenInterpretations?.includes('dense-subdivision'));

  if (canSubdivide && attacks.length > 0 && attacks.length < 10) {
    const subdivideRoll = rand01(seedOf(seed, barIndex, 'subdiv'));
    if (subdivideRoll < grammar.allowDerivedAttacks) {
      for (let i = 0; i < attacks.length - 1; i++) {
        const cur = attacks[i];
        const nxt = attacks[i + 1];
        const gap = nxt.beat - cur.beat;
        if (gap >= 0.75 && gap <= 1.5) {
          const midBeat = cur.beat + gap / 2;
          const ghostHit: InterpretedAttack = {
            beat: midBeat,
            durationSteps: 1,
            accent: cur.accent * 0.62,
            velocity: Math.round(cur.velocity * 0.6),
            source: 'derived',
            kind: (stage === 'transition') ? 'pickup' : 'subdivision',
            pitchIntent: cur.pitchIntent === 'root' ? 'fifth' : cur.pitchIntent,
            structural: false,
            hitType: role === 'drums' ? 'hat' : cur.hitType,
            articulation: 'ghost',
          };
          attacks.splice(i + 1, 0, ghostHit);
          derivedCount++;
          break;
        }
      }
    }
  }

  // 7. Cadence / Boundary Fill or Pickup
  if ((isCadenceBar || isPhraseEnd) && grammar.phraseDevelopment?.cadenceProbability) {
    const cadenceRoll = rand01(seedOf(seed, barIndex, 'phrase-cadence'));
    if (cadenceRoll < (grammar.phraseDevelopment.cadenceProbability * 3 + 0.09)) {
      const lastAtk = attacks[attacks.length - 1];
      if (lastAtk && lastAtk.beat < beatsPerBar - 0.75) {
        attacks.push({
          beat: beatsPerBar - 0.5,
          durationSteps: 1,
          accent: 0.85,
          velocity: Math.round(lastAtk.velocity * 0.95),
          source: 'derived',
          kind: 'pickup',
          pitchIntent: role === 'bass' ? 'approach' : lastAtk.pitchIntent,
          structural: false,
          hitType: role === 'drums' ? 'snare' : lastAtk.hitType,
          articulation: 'accent',
        });
        derivedCount++;
      }
    }
  }

  // 8. Ensemble Listening & Interactions
  if (ensembleContext?.leadActiveBeats && (role === 'comp' || role === 'harmony' || role === 'texture')) {
    // Duck and thin comping hits when lead vocalist/soloist is active
    for (let i = attacks.length - 1; i >= 0; i--) {
      const atk = attacks[i];
      const overlaps = ensembleContext.leadActiveBeats.some(
        ([start, end]) => atk.beat >= start - 0.1 && atk.beat <= end + 0.1
      );
      if (overlaps) {
        if (!atk.structural && rand01(seedOf(seed, barIndex, i, 'comp-lead-duck')) > 0.4) {
          attacks.splice(i, 1);
          restCount++;
          interactionCount++;
        } else {
          atk.velocity = Math.round(atk.velocity * 0.7);
          atk.accent = atk.accent * 0.75;
          interactionCount++;
        }
      }
    }
  }

  if (role === 'bass' && ensembleContext?.kickTimesInBar && ensembleContext.kickTimesInBar.length > 0) {
    // Bass listens to kick drum: aligns syncopated attacks to kick accents
    for (const atk of attacks) {
      const matchingKick = ensembleContext.kickTimesInBar.find(k => Math.abs(k - atk.beat) < 0.2);
      if (matchingKick !== undefined) {
        atk.accent = Math.min(1.0, atk.accent * 1.1);
        atk.velocity = Math.min(127, Math.round(atk.velocity * 1.08));
        interactionCount++;
      }
    }
  }

  for (const inter of interactions) {
    if (inter.relationship === 'leaveSpace') {
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural) {
          attacks.splice(i, 1);
          interactionCount++;
          restCount++;
        }
      }
    } else if (inter.relationship === 'accentWith' && ensembleContext?.otherAccentsInBar) {
      for (const atk of attacks) {
        const matchesAccent = ensembleContext.otherAccentsInBar.some(
          b => Math.abs(b - atk.beat) < 0.15
        );
        if (matchesAccent) {
          atk.accent = Math.min(1.0, atk.accent * 1.15);
          atk.velocity = Math.min(127, Math.round(atk.velocity * 1.15));
          interactionCount++;
        }
      }
    }
  }

  attacks.sort((a, b) => a.beat - b.beat);
  const currentSignature = attacks.map(a => `${a.beat.toFixed(2)}:${a.kind}:${a.pitchIntent ?? 'w'}`).join('|');

  memory.motifSignature = currentSignature;
  memory.consecutiveIdenticalCount = 0;

  // Update memory state
  memory.lastEvents = attacks;
  memory.lastDensity = attacks.length;
  memory.lastAccentPositions = attacks.map(a => a.beat);
  memory.phraseHistory.push({
    stage,
    density: attacks.length,
    signature: currentSignature,
    onsets: attacks.map(a => a.beat),
  });
  if (memory.phraseHistory.length > 8) {
    memory.phraseHistory.shift();
  }

  const explanation: PerformanceExplanation = {
    trackId,
    role,
    patternId: pattern.id,
    variantId: activeVariant?.id,
    developmentStage: stage,
    authoredCount,
    derivedCount,
    restCount,
    interactionCount,
    summary: `${stage} (${authoredCount} authored, ${derivedCount} derived, ${restCount} rests)`,
  };

  return { attacks, explanation };
}
