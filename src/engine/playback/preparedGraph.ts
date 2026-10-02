import { createNode, el, type NodeRepr_t } from '@elemaudio/core';

/** A graph's connections and non-control properties, compiled only on UI edits. */
interface Definition { kind: string; props: Record<string, unknown>; children: number[]; channel: number; semantic?: string; }
export interface PreparedProgram { variant: number; values: number[]; }
export interface PreparedVariant {
  signal: NodeRepr_t;
  controls: Array<{ key: string; hash: number } | undefined>;
  semanticControls: Map<string, number>;
  select: { key: string; hash: number };
}

// Elementary exposes a linked child list. Keep its representation at this boundary.
export function graphChildren(node: NodeRepr_t): NodeRepr_t[] {
  const children: NodeRepr_t[] = [];
  let list = node.children as unknown as 0 | { hd: NodeRepr_t; tl: unknown };
  while (list !== 0) {
    children.push(list.hd);
    list = list.tl as typeof list;
  }
  return children;
}

/**
 * Retains the authored graph exactly, replacing scalar constants with controls.
 * Shapes that differ (kit components, gestures, register branches) get separate
 * prepared variants. Matching shapes share a graph and retain every scalar in a
 * compact program. No instrument renderer runs while performing those programs.
 */
export class PreparedVoiceGraph {
  readonly variants: PreparedVariant[] = [];
  private shapes = new Map<string, number>();
  private templates: Array<{ definitions: Definition[]; rootIndex: number; initial: number[]; varying: Set<number> }> = [];
  private programs = new Map<string, PreparedProgram>();

  readonly trigger: { key: string; hash: number };
  readonly choice: { key: string; hash: number };
  private choiceSignal: NodeRepr_t;
  private triggerSignal: NodeRepr_t;

  constructor(private readonly namespace: string) {
    const key = `${namespace}:trigger`;
    this.triggerSignal = el.const({ key, value: 0 });
    this.trigger = { key, hash: this.triggerSignal.hash };
    const choiceKey = `${namespace}:choice`;
    this.choiceSignal = el.const({ key: choiceKey, value: -1 });
    this.choice = { key: choiceKey, hash: this.choiceSignal.hash };
  }

  prepare(root: NodeRepr_t): PreparedProgram {
    const definitions: Definition[] = [];
    const values: number[] = [];
    const visited = new Map<NodeRepr_t, number>();
    const named = new Map<string, number>();
    const semantics = new Map<string, number>();
    const visit = (node: NodeRepr_t): number => {
      const props = { ...(node.props as unknown as Record<string, unknown>) };
      const originalKey = typeof props.key === 'string' ? props.key : undefined;
      const seen = visited.get(node) ?? (originalKey && node.kind === 'const' ? named.get(originalKey) : undefined);
      if (seen !== undefined) return seen;
      const children = graphChildren(node).map(visit);
      const index = definitions.length;
      if (node.kind === 'const') {
        const value = Number(props.value);
        if (!Number.isFinite(value)) throw new Error(`Non-finite prepared control in ${this.namespace}`);
        const controlIndex = values.length;
        values.push(value);
        // Preserve semantic names for direct gate/frequency/envelope updates.
        if (originalKey) { semantics.set(originalKey, controlIndex); named.set(originalKey, index); }
        delete props.value;
        props.key = `control:${controlIndex}`;
      }
      definitions.push({ kind: node.kind, props, children, channel: node.outputChannel, semantic: node.kind === 'const' ? originalKey : undefined });
      visited.set(node, index);
      return index;
    };
    const rootIndex = visit(root);
    const shape = JSON.stringify(definitions);
    let variant = this.shapes.get(shape);
    if (variant === undefined) {
      variant = this.variants.length;
      this.templates.push({ definitions, rootIndex, initial: values, varying: new Set() });
      this.variants.push({ signal: el.const({ value: 0 }), controls: [], semanticControls: semantics,
        select: { key: '', hash: 0 } });
      this.shapes.set(shape, variant);
    }
    const template = this.templates[variant];
    values.forEach((v, i) => { if (v !== template.initial[i]) template.varying.add(i); });
    const programKey = JSON.stringify([variant, values]);
    const existingProgram = this.programs.get(programKey);
    if (existingProgram) return existingProgram;
    const program = { variant, values };
    this.programs.set(programKey, program);
    return program;
  }

  signal(): NodeRepr_t {
    const signals = this.variants.map(v => v.signal);
    return signals.length ? el.add(...signals) : el.const({ value: 0 });
  }

  /** Shape indexing is no longer needed after UI preparation. */
  seal() {
    // Persistent resonators keep their authored identity across techniques.
    // Only their scalar/input controls are selected. Preparing several gestures
    // must not allocate another 44,100-sample waveguide for every gesture.
    const stateGroups = new Map<string, Array<{ variant: number; index: number }>>();
    const groupKey = (def: Definition) => JSON.stringify([def.kind, def.props]);
    this.templates.forEach((template, variant) => template.definitions.forEach((def, index) => {
      if (def.kind !== 'const' && typeof def.props.key === 'string') {
        const key = groupKey(def);
        const entries = stateGroups.get(key) ?? [];
        entries.push({ variant, index }); stateGroups.set(key, entries);
      }
    }));
    const caches = this.templates.map(() => new Map<number, NodeRepr_t>());
    const shared = new Map<string, NodeRepr_t>();
    const building = new Set<string>();
    const choose = (entries: Array<{ variant: number; signal: NodeRepr_t }>): NodeRepr_t => {
      if (entries.every(e => e.signal.hash === entries[0].signal.hash)) return entries[0].signal;
      let signal = entries[entries.length - 1].signal;
      for (let i = entries.length - 2; i >= 0; i--) {
        signal = el.select(el.eq(this.choiceSignal, entries[i].variant), entries[i].signal, signal);
      }
      return signal;
    };
    const build = (variantIndex: number, index: number): NodeRepr_t => {
      const cached = caches[variantIndex].get(index);
      if (cached) return cached;
      const template = this.templates[variantIndex], def = template.definitions[index];
      const variant = this.variants[variantIndex];
      const prefix = `${this.namespace}:variant:${variantIndex}`;
      const props = { ...def.props };
      let signal: NodeRepr_t;
      if (def.kind === 'const') {
        const controlIndex = Number(String(props.key).slice('control:'.length));
        const live = template.varying.has(controlIndex) || def.semantic?.endsWith('_gate') || def.semantic?.endsWith('_freq');
        if (live) props.key = `${prefix}:control:${controlIndex}`;
        else delete props.key;
        props.value = template.initial[controlIndex];
        const node = createNode('const', props, []);
        if (live) variant.controls[controlIndex] = { key: String(props.key), hash: node.hash };
        signal = def.semantic?.endsWith('_gate')
          ? el.mul(node, el.eq(this.triggerSignal, el.z(this.triggerSignal))) : node;
      } else if (typeof props.key === 'string') {
        const key = groupKey(def), previous = shared.get(key);
        if (previous) signal = previous;
        else {
          if (building.has(key)) throw new Error(`Cyclic prepared state dependency: ${props.key}`);
          building.add(key);
          const entries = stateGroups.get(key)!;
          const children = def.children.map((_, childIndex) => choose(entries.map(entry => ({
            variant: entry.variant,
            signal: build(entry.variant, this.templates[entry.variant].definitions[entry.index].children[childIndex]),
          }))));
          signal = createNode(def.kind, { ...props, key: `${this.namespace}:state:${props.key}` }, children);
          shared.set(key, signal); building.delete(key);
        }
      } else {
        if (def.channel !== 0) throw new Error('Multichannel voice graphs require an explicit prepared adapter');
        signal = createNode(def.kind, props, def.children.map(i => build(variantIndex, i)));
      }
      caches[variantIndex].set(index, signal);
      return signal;
    };
    this.templates.forEach((template, variantIndex) => {
      const variant = this.variants[variantIndex];
      const root = build(variantIndex, template.rootIndex);
      const key = `${this.namespace}:variant:${variantIndex}:selected`;
      const selection = el.const({ key, value: 0 });
      variant.select = { key, hash: selection.hash };
      variant.signal = el.mul(selection, el.eq(this.choiceSignal, variantIndex), root);
    });
    this.shapes.clear(); this.programs.clear(); this.templates = [];
  }
}
