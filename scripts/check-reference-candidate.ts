import { checkReferenceDurationCandidate } from './reference-duration-gate';

const args = new Map(process.argv.slice(2).map((arg) => {
  const separator = arg.indexOf('=');
  return separator < 0 ? [arg.replace(/^--/, ''), ''] : [arg.slice(2, separator), arg.slice(separator + 1)];
}));
const result = checkReferenceDurationCandidate({
  title: args.get('title'),
  durationSeconds: args.has('duration-seconds') ? Number(args.get('duration-seconds')) : undefined,
  longformReason: args.get('longform-reason'),
});

if (result.allowed) {
  console.log(`PASS — ${result.note} (${result.durationSeconds}s)`);
} else {
  console.error(`BLOCK — ${result.reason}${result.durationSeconds ? ` (${result.durationSeconds}s)` : ''}`);
  process.exitCode = 1;
}
