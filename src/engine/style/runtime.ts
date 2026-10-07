import type {
  ResolvedStyle,
  DecisionTrace,
  Condition,
  Weighted,
  FormStepTemplate,
  Aspect
} from '../../data/styles/schema';
import { rand01 } from '../sheet/random.ts';

export class StyleRuntime {
  public readonly resolved: ResolvedStyle;
  public readonly trace: DecisionTrace;

  constructor(resolved: ResolvedStyle) {
    this.resolved = resolved;
    this.trace = [...resolved.trace];
  }

  /**
   * @static
   * Creates a new StyleRuntime instance from resolved style data.
   */
  public static create(resolved: ResolvedStyle): StyleRuntime {
    return new StyleRuntime(resolved);
  }

  /**
   * Samples a typed weighted distribution, filtered by optional condition.
   */
  public pick<T>(target: readonly Weighted<T>[], rngOrSeed: (() => number) | number = 0.5, ctx?: Condition): T {
    const roll = typeof rngOrSeed === 'function' ? rngOrSeed() : (rngOrSeed > 1 ? rand01(rngOrSeed) : rngOrSeed);

    if (!Array.isArray(target) || target.length === 0) {
      throw new Error('Cannot sample an empty weighted distribution');
    }

    // Filter by condition if provided
    let candidates = target;
    if (ctx) {
      candidates = target.filter(item => {
        if (!item.when) return true;
        if (ctx.sectionType && item.when.sectionType && item.when.sectionType !== ctx.sectionType) return false;
        if (ctx.energyBand && item.when.energyBand && item.when.energyBand !== ctx.energyBand) return false;
        if (ctx.barPosition && item.when.barPosition && item.when.barPosition !== ctx.barPosition) return false;
        return true;
      });
      if (candidates.length === 0) candidates = target;
    }

    const totalWeight = candidates.reduce((sum, c) => sum + (c.w ?? 1), 0);
    if (totalWeight <= 0) return candidates[0].value;

    let acc = 0;
    const threshold = roll * totalWeight;
    for (const item of candidates) {
      acc += (item.w ?? 1);
      if (acc >= threshold) {
        return item.value;
      }
    }
    return candidates[candidates.length - 1].value;
  }

  /**
   * Samples a numeric parameter or range.
   */
  public num(val: number | readonly [number, number], rngOrSeed?: (() => number) | number, _ctx?: Condition): number {
    if (typeof val === 'number') return val;
    if (Array.isArray(val) && val.length === 2 && typeof val[0] === 'number') {
      const roll = typeof rngOrSeed === 'function' ? rngOrSeed() : (typeof rngOrSeed === 'number' ? (rngOrSeed > 1 ? rand01(rngOrSeed) : rngOrSeed) : 0.5);
      return Math.round(val[0] + (val[1] - val[0]) * roll);
    }
    return 0;
  }

  /**
   * Returns the probability (0..1) of a signature gesture in this context.
   */
  public chance(gestureId: string, ctx?: Condition): number {
    const gesture = this.resolved.gestures?.[gestureId];
    if (!gesture) return 0;
    if (ctx && gesture.when) {
      if (ctx.sectionType && gesture.when.sectionType && gesture.when.sectionType !== ctx.sectionType) return 0;
      if (ctx.energyBand && gesture.when.energyBand && gesture.when.energyBand !== ctx.energyBand) return 0;
    }
    return gesture.probability ?? 0;
  }

  /**
   * Checks whether a rule tag is allowed (not forbidden by style rules).
   */
  public allows(tag: string): boolean {
    const forbidden = this.resolved.rules?.forbid?.some(r => r.tag === tag);
    return !forbidden;
  }

  /**
   * Returns the form step templates for the style.
   */
  public getFormTemplate(seed: number = 42): FormStepTemplate[] {
    if (this.resolved.form?.templates?.length) {
      return this.pick(this.resolved.form.templates, seed);
    }
    return [];
  }

  /**
   * Returns progression for a section or default progression.
   */
  public getProgression(sectionKind?: string, seed: number = 42): string[] {
    if (sectionKind && this.resolved.harmony?.sectionProgressions?.[sectionKind]) {
      return this.resolved.harmony.sectionProgressions[sectionKind]!;
    }
    if (this.resolved.harmony?.progressionTemplates?.length) {
      return this.pick(this.resolved.harmony.progressionTemplates, seed);
    }
    return ['Am', 'Dm', 'E7', 'Am'];
  }

  /**
   * Returns effective tempo in BPM.
   */
  public getTempo(seed: number = 0.5): number {
    if (this.resolved.rhythm?.defaultBpm) return this.resolved.rhythm.defaultBpm;
    if (this.resolved.rhythm?.tempoRange) return this.num(this.resolved.rhythm.tempoRange, seed);
    return 110;
  }

  /**
   * Returns default meter string.
   */
  public getMeter(): string {
    return this.resolved.rhythm?.meter || '4/4';
  }

  /**
   * Returns humanize jitter in ms.
   */
  public getHumanizeJitter(): number {
    return this.resolved.rhythm?.humanizeJitterMs ?? 8;
  }

  /**
   * Returns microtiming feel.
   */
  public getMicrotimingFeel(): string {
    return this.resolved.rhythm?.microtimingFeel ?? 'straight';
  }

  /**
   * Returns swing percentage.
   */
  public getSwing(): number {
    return this.resolved.rhythm?.swingPercentage ?? 50;
  }

  /**
   * Returns the dominant instrument IDs for the style.
   */
  public getInstrumentPalette(): string[] {
    return (this.resolved.sound?.instrumentPalette ?? []).map(p => p.value);
  }

  /**
   * Generates a coverage report of decisions sourced from style/influences vs fallback.
   */
  public getCoverageReport(): {
    totalDecisions: number;
    styleDecisions: number;
    influenceDecisions: number;
    hardcodedDecisions: number;
    defaultDecisions: number;
    userDecisions: number;
    coveragePct: number;
    byAspect: Record<Aspect, { style: number; influence: number; hardcoded: number }>;
    fallbackPaths: string[];
  } {
    let style = 0;
    let influence = 0;
    let hardcoded = 0;
    let defaults = 0;
    let user = 0;
    const fallbackPaths: string[] = [];
    const byAspect: Record<Aspect, { style: number; influence: number; hardcoded: number }> = {
      form: { style: 0, influence: 0, hardcoded: 0 },
      harmony: { style: 0, influence: 0, hardcoded: 0 },
      rhythm: { style: 0, influence: 0, hardcoded: 0 },
      melody: { style: 0, influence: 0, hardcoded: 0 },
      arrangement: { style: 0, influence: 0, hardcoded: 0 },
      sound: { style: 0, influence: 0, hardcoded: 0 },
      gestures: { style: 0, influence: 0, hardcoded: 0 },
    };

    for (const item of this.trace) {
      const aspect = (item.path.split('.')[0] as Aspect) || 'rhythm';
      if (item.source === 'style' || item.source === 'extends' || item.source === 'genre') {
        style++;
        if (byAspect[aspect]) byAspect[aspect].style++;
      } else if (item.source === 'influence') {
        influence++;
        if (byAspect[aspect]) byAspect[aspect].influence++;
      } else if (item.source === 'default') {
        defaults++;
      } else if (item.source === 'user') {
        user++;
      } else {
        hardcoded++;
        fallbackPaths.push(item.path);
        if (byAspect[aspect]) byAspect[aspect].hardcoded++;
      }
    }

    const total = style + influence + hardcoded + defaults + user;
    const coveragePct = total > 0 ? Math.round(((style + influence + user) / total) * 100) : 100;

    return {
      totalDecisions: total,
      styleDecisions: style,
      influenceDecisions: influence,
      hardcodedDecisions: hardcoded,
      defaultDecisions: defaults,
      userDecisions: user,
      coveragePct,
      byAspect,
      fallbackPaths: Array.from(new Set(fallbackPaths)),
    };
  }
}
