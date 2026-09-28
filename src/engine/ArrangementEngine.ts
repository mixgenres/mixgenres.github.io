export function compileTracks(trackGroups: any[], _worldId?: string): any[] {
  return trackGroups;
}

export function generateTiming(notes: any[], _genre: string = ''): any[] {
  return notes.map(note => ({
    ...note,
    time: note.quantizedTime !== undefined ? note.quantizedTime : (note.time || 0),
    velocity: note.velocity !== undefined ? note.velocity : 1.0,
    articulation: note.articulation,
  }));
}
