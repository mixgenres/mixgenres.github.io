import fs from 'fs';
import path from 'path';

/**
 * Dead Metadata Linter
 * 
 * Verifies that all authored numeric/structural fields defined across instrument metadata
 * and DSP overrides have at least one active reader inside src/engine/ (excluding scripts & types).
 */

const ENGINE_DIR = path.join(process.cwd(), 'src', 'engine');

// Collect all source files under src/engine/
function getEngineFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getEngineFiles(filePath));
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      // Exclude type definition files
      if (!filePath.endsWith('types.ts') && !filePath.endsWith('.d.ts')) {
        results.push(filePath);
      }
    }
  }
  return results;
}

const engineFiles = getEngineFiles(ENGINE_DIR);
const engineCode = engineFiles.map(f => fs.readFileSync(f, 'utf-8')).join('\n');

// List of structural and numeric metadata fields that MUST have active readers in src/engine/
const REQUIRED_METADATA_FIELDS = [
  // InstrumentDef / PhysicalModel
  'elementaryModel',
  'makeupGain',
  'physicalModel',
  'parameters',
  'signalChain',
  'nonlinearDrive',
  'stiffness',
  'transientSharpness',
  'breathNoise',

  // LuthierPhysicsProfile
  'luthierPhysics',
  'category',
  'materialDensity',
  'tension',
  'bodyResonanceVolume',
  'harmonicRichness',
  'airResonanceHz',
  'soundboardResonanceHz',
  'excitationSaturation',

  // AcousticProfile / FormantProfile / BowedResonance
  'acousticProfile',
  'sustain',
  'role',
  'centre',
  'low',
  'high',
  'pan',
  'trim',
  'space',
  'ring',
  'formantProfile',
  'f1',
  'f2',
  'f3',
  'tongueType',
  'tongueFreq',
  'bowedResonance',
  'bodyFreq',
  'bridgeHillFreq',

  // DSP Profile / Excitation / Resonators / Artifacts
  'dspProfile',
  'excitationDynamics',
  'bisonoricAsymmetry',
  'kneeDropImpact',
  'coupledResonators',
  'bodyModes',
  'soundboard',
  'membrane2D',
  'sympathetic',
  'mechanicalArtifacts',
  'airHiss',
  'pickZing',
  'stringSqueak',
  'keyThud',
  'valveClick',
  'bellowsNoise',
  'genreDialects',

  // Techniques / Articulations
  'techniques',
  'articulations',
  'techniqueMethods',
  'playingStyles',
  'genreTechniques'
];

console.log('=== Checking Dead Metadata Invariants in src/engine/ ===\n');

let missingCount = 0;
for (const field of REQUIRED_METADATA_FIELDS) {
  // Regex to check if field is referenced in engine code (e.g. .field, field:, field?, field)
  const regex = new RegExp(`\\b${field}\\b`);
  const hasReader = regex.test(engineCode);

  if (hasReader) {
    console.log(`  [OK] Field "${field}" has active engine reader(s)`);
  } else {
    console.error(`  [FAIL] Field "${field}" has ZERO readers in src/engine/!`);
    missingCount++;
  }
}

console.log('\n================================================================');
if (missingCount === 0) {
  console.log(` ALL ${REQUIRED_METADATA_FIELDS.length} METADATA FIELDS HAVE ACTIVE ENGINE READERS`);
  console.log('================================================================');
  process.exit(0);
} else {
  console.error(` DEAD METADATA LINT FAILED: ${missingCount} field(s) have zero readers!`);
  console.log('================================================================');
  process.exit(1);
}
