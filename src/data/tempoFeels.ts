export interface TempoFeel { id: string; name: string; mult: number; description: string; }

export const FEELS: TempoFeel[] = [
  { id: 'held-back', name: 'Held back', mult: 0.82, description: 'Laid back' },
  { id: 'walking', name: 'Walking', mult: 0.93, description: 'Relaxed stride' },
  { id: 'as-written', name: 'As written', mult: 1.0, description: 'Default tempo' },
  { id: 'pushed', name: 'Pushed', mult: 1.08, description: 'Leaning forward' },
  { id: 'lit', name: 'Lit', mult: 1.15, description: 'High energy' },
];
