import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import type { Finding } from './auditReport';
export interface CheckResult { id: string; status: 'PASS' | 'FAIL' | 'NOT_RUN'; seconds: number; command: string; output: string; report?: string; sourceFingerprint?: string; }
export function buildSystemView(metadata: { sourceFingerprint: string; generatedAt: string }, checks: CheckResult[]) {
  const read = (name: string) => {
    const path = `audit/${name}.json`;
    if (!existsSync(path)) return { state: 'missing', data: null };
    try {
      const data = JSON.parse(readFileSync(path, 'utf8'));
      return { state: data.sourceFingerprint === metadata.sourceFingerprint ? 'current' : 'stale', data };
    } catch { return { state: 'invalid', data: null }; }
  };
  checks = checks.map(c => c.sourceFingerprint !== metadata.sourceFingerprint ? { ...c, status: 'NOT_RUN' as const, output: 'Sources changed since this check. Run npm run check to refresh.' } : c);
  const mix = read('mix-audit'), audio = read('audio-regression'), browser = read('browser-mix-audit'), instruments = read('instrument-render-audit');
  const failed = checks.filter(c => c.status === 'FAIL');
  const status = failed.length ? 'FAIL' : checks.some(c => c.status === 'NOT_RUN') || browser.state !== 'current' || audio.state !== 'current' || !browser.data?.coverage.fullCatalog || !audio.data?.coverage.fullCatalog ? 'PARTIAL' : 'PASS';
  const reports = { mix, audio, browser, instruments, provenance: read('all-styles-audit'), performance: read('style-performance-audit'), paths: read('instrument-path-audit'), integrity: read('engine-integrity-audit') };
  const findings: Finding[] = Object.entries(reports).flatMap(([name, report]) => report.state === 'current' ? (report.data?.findings ?? []).map((f: Finding) => ({ ...f, source: name })) : []);
  const gaps = [
    ...Object.entries(reports).filter(([, r]) => r.state !== 'current').map(([name, r]) => `${name}: ${r.state} report; excluded from current conclusions`),
    ...(audio.state === 'current' && !audio.data?.coverage.fullCatalog ? ['Node audio coverage is a selected subset of the style catalog.'] : []),
    ...(browser.state === 'current' && !browser.data?.coverage.fullCatalog ? ['Native browser master coverage is a selected subset of the style catalog.'] : []),
    'Excerpts cannot establish whole-song LUFS or perceptual authenticity.',
  ];
  const finalStatus = findings.some(f => f.severity === 'error') ? 'FAIL' : status;
  const payload = { ...metadata, schemaVersion: 3, status: finalStatus, checks, reports, findings, gaps };
  writeFileSync('audit/system-report.json', JSON.stringify(payload, null, 2));
  const markdown = [`# System checks — ${status}`, '', `Generated ${metadata.generatedAt}; source ${metadata.sourceFingerprint.slice(0, 12)}.`, '',
    '| Check | Status | Seconds |', '| --- | --- | ---: |', ...checks.map(c => `| ${c.id} | ${c.status} | ${c.seconds.toFixed(1)} |`), '',
    '## Coverage gaps', '', ...gaps.map(g => `- ${g}`), '', '## Findings', '', ...(findings.length ? findings.slice(0, 100).map(f => `- ${f.severity}: ${f.scope} — ${f.message}`) : ['No findings in the current reports.']), '',
    ...failed.flatMap(c => [`## ${c.id} failure`, '', '```text', c.output.replace(/```/g, "'''"), '```', '']),
    'Open system-report.html for searchable style gains, measured levels, findings and detailed JSON links.'];
  writeFileSync('audit/system-report.md', markdown.join('\n') + '\n');
  const json = JSON.stringify(payload).replace(/</g, '\\u003c');
  writeFileSync('audit/system-report.html', `<!doctype html><html lang="en"><meta charset="utf-8"><title>Mix Genres system checks</title>
<style>body{font:15px system-ui;margin:32px;color:#182231;background:#f7f9fc}h1{font-size:26px}table{border-collapse:collapse;width:100%;background:white;margin:16px 0}td,th{padding:9px;text-align:left;border-bottom:1px solid #dde3eb}input{padding:10px;width:90%;font:inherit}.FAIL,.error{color:#b91c1c}.warning,.PARTIAL{color:#975b00}.PASS{color:#146b36}details{margin:12px 0}pre{white-space:pre-wrap;overflow:auto}small{color:#526074}a{color:#1465ad}</style>
<h1 id="title"></h1><p id="meta"></p><p>This view separates structural gain settings, measured unmastered PCM, native browser mastering, and decoded export loudness. Missing or stale results are excluded.</p>
<h2>Check results</h2><table id="checks"><thead><tr><th>Check</th><th>Result</th><th>Seconds</th><th>Details</th></tr></thead><tbody></tbody></table>
<h2>Coverage and gaps</h2><ul id="gaps"></ul><div id="coverage"></div><h2>Explore styles and measured levels</h2><input id="filter" placeholder="Filter style, genre, instrument or finding"><div id="styles"></div><h2>Findings</h2><div id="findings"></div>
<script type="application/json" id="data">${json}</script><script>
const data=JSON.parse(document.getElementById('data').textContent);const el=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n};
document.getElementById('title').textContent='System checks — '+data.status;document.getElementById('title').className=data.status;document.getElementById('meta').textContent=data.generatedAt+' · source '+data.sourceFingerprint.slice(0,12);
for(const c of data.checks){const tr=el('tr');tr.append(el('td',c.id));const status=el('td',c.status);status.className=c.status;tr.append(status,el('td',c.seconds.toFixed(1)));const td=el('td');if(c.report){const a=el('a','JSON');a.href=c.report;td.append(a)}const d=el('details');d.append(el('summary','Command and output'),el('pre',c.command+'\n'+c.output));td.append(d);tr.append(td);document.querySelector('#checks tbody').append(tr)}
for(const gap of data.gaps)document.getElementById('gaps').append(el('li',gap));for(const [name,r]of Object.entries(data.reports)){const d=el('details');d.append(el('summary',name+' — '+r.state));if(r.state==='current')d.append(el('pre',JSON.stringify({coverage:r.data.coverage,gaps:r.data.gaps,counts:r.data.counts,catalogDefaults:r.data.defaultDecisions,hardcodedDecisions:r.data.hardcodedDecisions,sharedMidiWarnings:r.data.sharedMidiWarnings},null,2)));document.getElementById('coverage').append(d)}
const number=(v)=>v===null||v===undefined?'unmeasured':Number(v).toFixed(2);
function show(){const q=document.getElementById('filter').value.toLowerCase();const styles=document.getElementById('styles');styles.replaceChildren();const rows=data.reports.mix.state==='current'?data.reports.mix.data.rows:[];for(const row of rows){if(q&&!JSON.stringify(row).toLowerCase().includes(q))continue;const d=el('details');d.append(el('summary',row.genre+' / '+row.name+' ('+row.styleId+')'));d.append(el('small','Ensemble trim '+number(row.ensembleHeadroom)+' · bass emphasis '+number(row.mixCharacter?.bassForward)+' · room '+number(row.masterSettings.roomDepth)+' · duck '+number(row.masterSettings.duckDepth)));const table=el('table');const h=el('tr');['Instrument','Role / bus','User level','Makeup × role','Resolved gain / CC range','Notes'].forEach(x=>h.append(el('th',x)));table.append(h);for(const t of row.tracks){const tr=el('tr');[t.instrumentId,t.role+' / '+t.bus,number(t.trackLevel),number(t.makeupGain)+' × '+number(t.roleGain),number(t.initialGain)+' / '+t.controllerGainRange.map(number).join('–'),t.noteCount].forEach(x=>tr.append(el('td',x)));table.append(tr)}d.append(table);
for(const source of ['audio','browser']){const report=data.reports[source];if(report.state!=='current')continue;const rendered=report.data.cases?.find(c=>c.styleId===row.styleId);if(!rendered)continue;for(const w of rendered.windows??[]){const output=w.diagnostics?.find(e=>e.stage==='output');d.append(el('p',source+' / '+w.name+': PCM peak '+number(output?.metrics.samplePeakDbfs)+' dBFS · active RMS '+number(output?.metrics.activeRmsDbfs)+' dBFS · encoder trim '+number(output?.encodingPeakTrim)+' · decoded '+number(w.encoded?.integratedLufs)+' LUFS / true peak '+number(w.encoded?.decodedTruePeakDbfs)+' dBFS'));const levels=el('pre');levels.textContent=(w.diagnostics??[]).filter(e=>e.stage==='stem').map(e=>e.instrumentId+': peak '+number(e.metrics.samplePeakDbfs)+' dBFS; active RMS '+number(e.metrics.activeRmsDbfs)+' dBFS; DC '+number(e.metrics.dcOffset)).join('\n');d.append(levels)}}styles.append(d)}const f=document.getElementById('findings');f.replaceChildren();for(const finding of data.findings){if(q&&!JSON.stringify(finding).toLowerCase().includes(q))continue;const p=el('p',finding.severity+' · '+finding.scope+' · '+finding.message);p.className=finding.severity;f.append(p)}}document.getElementById('filter').addEventListener('input',show);show();
</script></html>`);
  return payload;
}
