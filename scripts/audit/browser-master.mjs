// T3 placeholder gate. A CI/nightly browser runner can invoke this file after installing Playwright.
// It deliberately fails closed when requested instead of pretending Node executed the Web Audio master chain.
if (process.env.AUDIT_BROWSER_MASTER !== '1') { console.log('SKIP browser master: set AUDIT_BROWSER_MASTER=1 in the nightly browser environment.'); process.exit(0); }
try { await import('playwright'); } catch { console.error('Browser master requested but Playwright is not installed.'); process.exit(1); }
console.log('Browser master runner is environment-dependent; use the Playwright CI job to load the app and OfflineAudioContext render harness.');
