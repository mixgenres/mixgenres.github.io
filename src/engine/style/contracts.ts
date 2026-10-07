import type { SongStyle } from '../../data/styles/schema';
import { GENRE_CONTRACTS } from '../../data/styles/contracts';
import type { WorldContract, BassDialect } from '../../data/styles/contracts';
import { GENRE_WORLDS_BY_ID } from '../../data/genres';
export type { InteractionModel, PulseModel, PocketSpec, PercussionDialect, BassDialect, ApproachSpec, EnergyMapping, EnergyDelta, TransitionType, TransitionGrammar, DragProfile, PerformanceIdioms, MixCharacter, WorldContract, InstrumentDialect, PerformanceMode } from '../../data/styles/contracts';

function cloneDeep<T>(v: T): T {
  return structuredClone(v);
}

export function contractForGenre(genreId: string, style?: SongStyle): WorldContract {
  const ownerWorld = GENRE_WORLDS_BY_ID[genreId];
  if (!ownerWorld) throw new Error(`No Genre Contract for ${genreId}; no genre folder exports this world.`);
  const baseContract = GENRE_CONTRACTS[genreId];
  if (!baseContract) throw new Error(`Missing authored genre contract: ${genreId}`);
  let out = cloneDeep(baseContract);
  const world = ownerWorld;
  const seed = world?.styleDefinitions.find(item => item.id === style?.id)
    ?? world?.styleDefinitions.find(item => item.id === world.homeStyleId)
    ?? world?.styleDefinitions[0];
  const calibration = style?.calibration ?? seed?.calibration;
  if (seed && calibration) {
    const meter = style?.rhythm?.meter ?? seed.preferredMeters[0] ?? out.meter;
    const isMachine = out.performanceMode === 'programmed-electronic';
    out.meter = meter;
    out.subdivision = /12\/8|12-count/i.test(meter) ? 12 : /2\/4/.test(meter) ? 8 : 16;
    out.form = seed.arrangementSections?.map(section => section.label) ?? out.form;
    out.timeline = seed.signatureCell ?? out.timeline;
    out.timelineRequired = /clave|compás|compas|timeline|tala|gamelan|cycle/i.test(out.timeline);
    out.timelineGrid = out.timelineRequired ? Array.from({ length: out.subdivision }, (_, index) => index)
      .filter(index => index === 0 || index % 3 === 0) : [];
    out.harmonyModel = calibration.harmony.requiresChords === false ? 'modal-drone'
      : /heterophonic|raga|maqam|dastgah/i.test(calibration.harmony.pitchSystem) ? 'heterophonic'
        : /power.?chord|riff/i.test(calibration.harmony.chordQualities.join(' ')) ? 'power-riff' : 'functional';
    out.harmonyVocabulary = [...calibration.harmony.chordQualities];
    out.harmonicRhythm = calibration.harmony.harmonicRhythm;
    out.pitchModel = calibration.harmony.scales.join(' / ') || seed.scaleMode || 'style-defined';
    out.tuningSystem = calibration.harmony.pitchSystem || seed.tuningSystem || world?.tuningSystem || out.tuningSystem;
    out.bass = { ...out.bass,
      style: /tumbao|clave|tumbao/i.test(calibration.harmony.bassChordInteraction) ? 'tumbao'
        : /dembow/i.test(calibration.harmony.bassChordInteraction) ? 'dembow'
          : /house/i.test(`${genreId} ${seed.name}`) ? 'house'
            : isMachine ? 'sub' : out.bass.style,
      rhythmJob: calibration.harmony.bassChordInteraction,
      pitchJob: calibration.harmony.scales.join(', '),
      articulation: calibration.techniques.bass ?? [],
    };
    out.ensemble = Object.fromEntries(Object.entries(calibration.roles).map(([role, data]) => [role, data.preferredInstruments.join(' / ')]));
    out.timbreSpace.palette = [...seed.characteristicInstruments];
    out.timbreSpace.production = `${seed.name}: ${seed.description}`;
    const character = calibration.mix.character;
    if (character) {
      const previous = out.timbreSpace.mixCharacter ?? { dryness: .6, bassForward: .5, width: .5, brightness: .5 };
      out.timbreSpace.mixCharacter = {
        ...previous, dryness: character.dryness ?? previous.dryness,
        bassForward: character.bassForward ?? previous.bassForward,
        width: character.width ?? previous.width,
        brightness: character.brightness ?? previous.brightness,
        compressionRatio: character.compressionRatio ?? previous.compressionRatio,
        saturationType: character.saturationType ?? previous.saturationType,
        subHarmonics: character.subHarmonics ?? previous.subHarmonics,
        transientSnap: character.transientSnap ?? previous.transientSnap,
        sidechainDucking: character.sidechainDucking ?? previous.sidechainDucking,
        delaySend: character.delaySend ?? previous.delaySend,
        delayTimeSeconds: character.delayTimeSeconds ?? previous.delayTimeSeconds,
        delayFeedback: character.delayFeedback ?? previous.delayFeedback,
        delayToneHz: character.delayToneHz ?? previous.delayToneHz,
        reverbType: character.reverbType ?? previous.reverbType,
      };
    }
    out.forbidden = [...(calibration.patterns.forbidden ?? [])];
    for (const layer of [seed.instrumentDialects, style?.instrumentDialects]) {
      for (const [id, dialect] of Object.entries(layer ?? {})) {
        out.instrumentDialects ??= {};
        out.instrumentDialects[id] = mergeDialectMetadata(out.instrumentDialects[id] ?? {}, dialect);
      }
    }
    out.articulationGrammar = Object.fromEntries(Object.entries(calibration.techniques));
    out.groove = { ...out.groove,
      swing: ((style?.rhythm?.swingPercentage ?? seed.grooveMechanics?.swingPercentage) ?? 50) / 100,
      anticipationMs: (seed.grooveMechanics?.anticipationOffsetSteps ?? 0) * 12,
    };
  }

  if (style?.rhythm) {
    const r = style.rhythm;
    const meter = r.meter ?? out.meter;
    const subdivision = /12\/8/.test(meter) ? 12 : /3\/4|6\/8/.test(meter) ? 12 : /2\/4/.test(meter) ? 8 : 16;
    out.meter = meter;
    out.subdivision = subdivision;
    out.groove = {
      ...out.groove,
      swing: (r.swingPercentage ?? out.groove.swing * 100) / 100,
      humanizeMs: r.humanizeJitterMs ?? out.groove.humanizeMs,
    };
    if (r.microtimingFeel === 'laid-back' || r.microtimingFeel === 'atrasado') out.groove.lean = Math.max(out.groove.lean, 4);
    if (r.microtimingFeel === 'pushed') out.groove.lean = Math.min(out.groove.lean, -3);
    if (r.microtimingFeel === 'rubato') out.microtiming.byRole.lead = [Math.max(8, out.groove.roleLean.lead ?? 8)];
    if (r.timelineClave) {
      out.timeline = r.timelineClave;
      out.timelineRequired = true;
    }
  }
  if (style?.harmony) {
    out.harmonyModel = style.harmony.model ?? out.harmonyModel;
    out.tuningSystem = style.harmony.tuningSystem ?? out.tuningSystem;
    if (style.harmony.bassMotion) out.bass.style = style.harmony.bassMotion as BassDialect['style'];
    out.harmonyVocabulary = Array.from(new Set([...out.harmonyVocabulary, ...(style.harmony.chordVocabulary ?? [])]));
  }
  if (style?.arrangement?.soloDefinition) out.soloDefinition = cloneDeep(style.arrangement.soloDefinition);
  return out;
}

/** Partial style dialects preserve unauthored physical and technique fields. */
export function mergeDialectMetadata<T extends object>(base: T, patch: Partial<T>): T {
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    const previous = result[key];
    result[key] = value && typeof value === 'object' && !Array.isArray(value)
      && previous && typeof previous === 'object' && !Array.isArray(previous)
      ? mergeDialectMetadata(previous, value) : value;
  }
  return result as T;
}
