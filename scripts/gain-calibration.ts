// Compatibility entry point: this script has never applied gain calibration.
if (process.argv.includes('--apply')) throw new Error('Gain calibration does not apply changes. Use npm run audit:mix to inspect gains and npm run test:audio to measure PCM.');
await import('./audit-mix');
