export interface AcousticProfile {
  id: string;
  profile: 'standard';
}

export default class InstrumentRenderer {
  constructor(_instrumentId: string, _ctx: AudioContext | null) {}

  getAcousticProfile(instId: string): AcousticProfile {
    return {
      id: instId,
      profile: 'standard',
    };
  }

  scheduleNoteOffNoise(
    _note: { pitch: number; velocity: number },
    _time: number,
    _profile: AcousticProfile,
    _ctx: AudioContext | null,
  ): void {}
}
