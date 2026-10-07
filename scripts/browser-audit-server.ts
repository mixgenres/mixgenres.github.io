import { isRecord } from './lib/unknownData';
import { createServer } from 'vite';
import { mkdirSync, writeFileSync } from 'node:fs';
import { reportMetadata } from './lib/auditReport';

const once = process.argv.includes('--once');
const server = await createServer({ server: { host: '127.0.0.1', port: 3001, strictPort: true },
  plugins: [{ name: 'native-audio-audit', configureServer(auditServer) {
    auditServer.middlewares.use('/__audit', async (request, response, next) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');
  response.setHeader('Content-Type', 'application/json');
  try {
    if (request.method === 'GET' && url.pathname === '/meta') { response.end(JSON.stringify(reportMetadata())); return; }
    if (request.method !== 'POST' || url.pathname !== '/report') { next(); return; }
    const chunks: Buffer[] = []; let size = 0;
    for await (const chunk of request) {
      const buffer = Buffer.from(chunk); size += buffer.length;
      if (size > 16 * 1024 * 1024) throw new Error('Audit upload exceeds 16 MB');
      chunks.push(buffer);
    }
    const body = Buffer.concat(chunks);
    const report: unknown = JSON.parse(body.toString());
    if (!isRecord(report) || typeof report.status !== 'string' || !Array.isArray(report.cases) || !Array.isArray(report.findings) || !report.coverage || !['PASS', 'FAIL'].includes(report.status)) throw new Error('Invalid browser report');
    const current = reportMetadata();
    if (report.sourceFingerprint !== current.sourceFingerprint) throw new Error('Sources changed during browser audit; run it again');
    mkdirSync('audit', { recursive: true });
    writeFileSync('audit/browser-mix-audit.json', JSON.stringify({ ...report, ...current }, null, 2));
    response.end(JSON.stringify({ saved: 'audit/browser-mix-audit.json' }));
    if (once) setTimeout(() => { void server.close().then(() => { process.exitCode = report.status === 'PASS' ? 0 : 1; }); }, 1000);
  } catch (e) { response.statusCode = 400; response.end(JSON.stringify({ error: String(e) })); }
});
  } }],
});
await server.listen();
console.log('Native browser audit: http://127.0.0.1:3001/scripts/browser-mix-audit.html');
