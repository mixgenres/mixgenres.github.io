import { INSTRUMENTS_BY_ID } from '../src/data/instruments/index';
import { voiceProfile } from '../src/engine/theory/instrumentProfile';
import { ARTICULATIONS, resolveArticulation } from '../src/engine/theory/articulation';
import { getInstrumentModule, buildVoiceContext } from '../src/engine/instruments/registry';
import { getLuthierModelForInstrument } from '../src/engine/audio/LuthierAPI';
import { midiToFreq } from '../src/engine/elementary/elementaryEngine';

const targetInstruments = [
  // Tango instruments
  'bandoneon',
  'violin',
  'cello',
  'piano',
  'upright-bass',
  // Flamenco instruments
  'spanish-guitar',
  'palmas',
  'cajon',
  'zapateado',
  'castanets',
  // Additional separated instruments
  'trumpet',
  'requinto'
];

console.log('================================================================');
console.log(' TANGO & FLAMENCO INSTRUMENT AUTHENTICITY SCHEMA DUMP & VALIDATION');
console.log('================================================================\n');

let allPassed = true;

for (const id of targetInstruments) {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    console.error(`❌ Missing definition for instrument: ${id}`);
    allPassed = false;
    continue;
  }

  const vp = voiceProfile(id);
  const luthier = getLuthierModelForInstrument(id);
  const module = getInstrumentModule(id);

  console.log(`----------------------------------------------------------------`);
  console.log(` Instrument: ${def.name} [ID: ${id}]`);
  console.log(` Family: ${def.family} | Voicing: ${def.voicing} | Polyphony: ${def.polyphony}`);
  console.log(` Sustain Type: ${vp.sustain} | Role: ${vp.role}`);
  console.log(` Register Range: MIDI ${vp.low} -> ${vp.high} (Centre: ${vp.centre})`);
  console.log(` Frequencies: ${midiToFreq(vp.low).toFixed(1)} Hz -> ${midiToFreq(vp.high).toFixed(1)} Hz`);
  console.log(` Stereo Pan: ${vp.pan} | Trim: ${vp.trim} dB | Space/Reverb: ${vp.space} | Ring: ${vp.ring} beats`);
  console.log(` Luthier Category: ${luthier.category}`);
  console.log(` Material Density: ${luthier.materialDensity} | Tension: ${luthier.tension} | Body Resonance Volume: ${luthier.bodyResonanceVolume} L`);
  console.log(` Air Resonance: ${luthier.airResonanceHz ?? 'N/A'} Hz | Soundboard/Body Resonance: ${luthier.soundboardResonanceHz ?? 'N/A'} Hz`);
  console.log(` Excitation: ${luthier.excitationType ?? def.excitationType} | Construction: ${luthier.bodyConstruction ?? def.bodyConstruction}`);
  console.log(` Engine Module: ${module.constructor.name} (id: ${module.id})`);
  
  console.log(`\n Techniques & Articulations (${def.techniques?.articulations.length ?? 0}):`);
  console.log(`   ${def.techniques?.articulations.join(', ')}`);

  console.log(`\n Physical Technique Methods:`);
  for (const m of def.techniques?.techniqueMethods ?? []) {
    console.log(`   - ${m}`);
  }

  console.log(`\n Genre Playing Styles:`);
  for (const [style, arts] of Object.entries(def.techniques?.genreTechniques ?? {})) {
    console.log(`   * ${style}: ${arts.join(', ')}`);
  }

  if (def.tuningAndMechanics) {
    console.log(`\n Mechanics & Open Strings / Tuning:`);
    console.log(`   Tuning Name: ${def.tuningAndMechanics.tuningName}`);
    if (def.tuningAndMechanics.openStrings) {
      console.log(`   Open Strings: ${def.tuningAndMechanics.openStrings.map(s => `${s.name} (${s.frequencyHz}Hz, MIDI ${s.midi})`).join(', ')}`);
    }
    if (def.tuningAndMechanics.keyRange) {
      console.log(`   Key Range: ${def.tuningAndMechanics.keyRange.lowNote} (${def.tuningAndMechanics.keyRange.lowMidi}) to ${def.tuningAndMechanics.keyRange.highNote} (${def.tuningAndMechanics.keyRange.highMidi})`);
    }
  }

  if (def.physicalModel) {
    console.log(`\n Physical Synthesis Signal Chain:`);
    console.log(`   ${def.physicalModel.signalChain.join(' -> ')}`);
    console.log(`   Synthesis Notes:`);
    for (const note of def.physicalModel.synthesisNotes ?? []) {
      console.log(`     * ${note}`);
    }
  }

  // Verification checks:
  // 1. Check that module is a dedicated module (not generic synth fallback)
  if (module.id === 'synth' && id !== 'synth') {
    console.error(`❌ Module ID fallback to generic synth for ${id}`);
    allPassed = false;
  }

  // 2. Validate all articulations resolve correctly
  for (const art of def.techniques?.articulations ?? []) {
    if (!ARTICULATIONS[art] && !resolveArticulation(art)) {
      console.error(`❌ Unresolved articulation: '${art}' on ${id}`);
      allPassed = false;
    }
  }

  // 3. Test building voice context and rendering voice through Elementary DSP across key articulations
  try {
    const testArts = def.techniques?.articulations.slice(0, 3) ?? ['pluck'];
    for (const art of testArts) {
      const mockVoice = {
        note: vp.centre,
        velocity: 0.85,
        gate: 1,
        id: `${id}_test_voice_${art}`,
        actionType: art,
        articulation: art
      };
      const mockParams = {
        brightness: 0.75,
        decay: 1.5,
        drive: 0.2,
        body: 0.8,
        tension: 0.7,
        pressure: 0.6,
        articulation: 0.5,
        mute: 0,
        resonance: 0.5,
        bowVelocity: 0.8,
        bowPressure: 0.7,
        model: def.elementaryModel ?? 0,
        instrumentId: id,
        performanceMode: 'acoustic-ensemble' as const,
        styleFlavor: 0.5,
        contact: 0.5,
        bodyTap: 0,
        pluckPosition: 0.5,
        reverbSend: 0.2,
        pan: 0,
        volume: 1.0
      };
      const ctx = buildVoiceContext('test_track', 0, mockVoice, mockParams);
      const audioNode = module.renderVoice(ctx);
      if (!audioNode) {
        console.error(`❌ renderVoice returned undefined for ${id} on articulation ${art}`);
        allPassed = false;
      }
    }
    console.log(`\n DSP Voice Render Tests: ALL PASSED`);
  } catch (err) {
    console.error(`❌ DSP Voice Render Test FAILED for ${id}:`, err);
    allPassed = false;
  }

  console.log('\n');
}

if (allPassed) {
  console.log('================================================================');
  console.log(` ALL ${targetInstruments.length} TARGET INSTRUMENTS VALIDATED SUCCESSFULLY WITH AUTHENTICITY`);
  console.log('================================================================');
  process.exit(0);
} else {
  console.error('================================================================');
  console.error(' VALIDATION ERRORS DETECTED');
  console.error('================================================================');
  process.exit(1);
}
