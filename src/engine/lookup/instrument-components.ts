import { INSTRUMENTS_BY_ID } from '../../data/instruments/index';
import type { InstrumentKitComponent } from '../../data/instruments/schema/instrument-def';

export function resolveInstrumentKitComponent(
  instrumentId: string,
  midi: number,
  action = '',
): InstrumentKitComponent | undefined {
  const components = INSTRUMENTS_BY_ID[instrumentId]?.kitComponents;
  if (!components?.length) return undefined;
  const matches = components.filter(component => component.midi === Math.round(midi));
  if (!matches.length) return undefined;

  const actionText = action.toLowerCase();
  const selector: Array<[RegExp, RegExp]> = [
    [/ghost/, /ghost/],
    [/rimshot/, /rimshot/],
    [/cross.?stick|side.?stick/, /cross.?stick|side.?stick/],
    [/pedal|foot.?chick/, /pedal/],
    [/open/, /open/],
    [/slap/, /slap/],
    [/tap|thumb/, /tap|thumb/],
    [/bell/, /bell/],
  ];
  const match = selector.find(([actionPattern]) => actionPattern.test(actionText));
  if (!match) return matches[0];
  return matches.find(component => match[1].test(component.id.toLowerCase())) ?? matches[0];
}
