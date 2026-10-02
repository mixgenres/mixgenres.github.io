export type ExportFormat = 'mp3' | 'wav' | 'midi' | 'musicxml' | 'mxl' | 'tablature' | 'gp5' | 'json' | 'logic' | 'garageband' | 'ableton';
export const EXPORT_FORMATS: { id: ExportFormat; label: string; description: string }[] = [
  { id: 'mp3', label: 'MP3 audio', description: 'Compact stereo mix, 192 kbps.' },
  { id: 'wav', label: 'WAV audio', description: 'Uncompressed stereo mix, 44.1 kHz / 16-bit.' },
  { id: 'midi', label: 'MIDI performance', description: 'Multitrack MIDI with tempo, sections, velocities, controllers and pitch bends. Imports into Logic Pro, GarageBand and Ableton.' },
  { id: 'musicxml', label: 'MusicXML sheet music', description: 'Editable notation for score editors: polyphony, ties, tempo changes, bass clefs and percussion. Import into MuseScore, Dorico or Sibelius to print or save PDF.' },
  { id: 'mxl', label: 'MusicXML score archive (.mxl)', description: 'Packaged MusicXML for notation software.' },
  { id: 'tablature', label: 'Guitar / bass tablature (.musicxml)', description: 'Standard-tuning TAB for guitar and bass; other instruments retain standard notation. Suggested fingerings may need adjustment. Unplayable string voicings retain standard notation and are labeled.' },
  { id: 'gp5', label: 'Guitar Pro 5 (.gp5)', description: 'Guitar and bass parts with standard tuning, tied durations, dynamics and technique text. Select string parts only; unplayable voicings are reported.' },
  { id: 'json', label: 'Performance data (.json)', description: 'Exact note timing, tuning, gestures, pitch bends, controllers, tempo map and track metadata for scripts and custom engines.' },
  { id: 'logic', label: 'Logic Pro import bundle', description: 'ZIP with multitrack MIDI, individual MIDI parts, aligned WAV stems, score, performance data and import instructions.' },
  { id: 'garageband', label: 'GarageBand import bundle', description: 'ZIP with multitrack MIDI, individual MIDI parts, aligned WAV stems, score, performance data and import instructions.' },
  { id: 'ableton', label: 'Ableton Live import bundle', description: 'ZIP with multitrack MIDI, individual MIDI parts, aligned WAV stems, score, performance data and import instructions.' },
];
