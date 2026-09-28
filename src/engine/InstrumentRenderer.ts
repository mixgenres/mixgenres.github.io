export default class InstrumentRenderer {
  constructor(_instrumentId: string, _ctx: any) {}

  getAcousticProfile(instId: string) {
    return {
      id: instId,
      profile: 'standard',
    };
  }

  scheduleNoteOffNoise(_note: { pitch: number; velocity: number }, _time: number, _profile: any, _ctx: any) {
    // Safely schedules key release/string damp/valve click acoustic noise transient if Web Audio API is active
  }
}
