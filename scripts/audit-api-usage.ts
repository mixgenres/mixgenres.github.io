import ts from 'typescript';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// This complements tsc with product-boundary checks.
const violations: string[] = [];
let files = 0;
const sources: string[] = [];
function collect(directory: string) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) collect(file);
    else if (/\.(tsx?|mjs)$/.test(file)) sources.push(file);
  }
}
collect('src'); collect('scripts'); sources.push('vite.config.ts');
const privateMembers = new Set(['_renderer', '_native', '_module', '_delegate', '_sendMessage', '_nextRefId', 'nodeMap', 'postMessageBatch', 'ElementaryAudioProcessor', 'HEAPU8']);
const moduleNames = (node: ts.Node): string[] => {
  if (ts.isStringLiteral(node)) return [node.text];
  if (ts.isLiteralTypeNode(node) && ts.isStringLiteral(node.literal)) return [node.literal.text];
  return [];
};
for (const file of sources) {
  files++;
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  const report = (node: ts.Node, message: string) => {
    const { line } = source.getLineAndCharacterOfPosition(node.getStart(source));
    violations.push(`${file}:${line + 1}: ${message}`);
  };
  const checkElementaryModule = (node: ts.Node, module: string) => {
    if (!module.startsWith('@elemaudio/')) return;
    report(node, 'Retired DSP playback dependency must not be reintroduced');
  };
  const visit = (node: ts.Node) => {
    if (node.kind === ts.SyntaxKind.AnyKeyword) report(node, 'Explicit loose type is forbidden; use a domain type or validate unknown data');
    if (ts.isPropertyAccessExpression(node) && privateMembers.has(node.name.text)) report(node, 'Private member access is forbidden');
    if (ts.isElementAccessExpression(node) && node.argumentExpression && ts.isStringLiteral(node.argumentExpression) && privateMembers.has(node.argumentExpression.text)) {
      report(node, 'Private member access is forbidden');
    }
    if (ts.isBindingElement(node)) {
      const key = node.propertyName ?? node.name;
      if (ts.isIdentifier(key) && privateMembers.has(key.text) || ts.isStringLiteral(key) && privateMembers.has(key.text)) {
        report(node, 'Private member access is forbidden');
      }
    }
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
      if (node.moduleSpecifier) for (const module of moduleNames(node.moduleSpecifier)) checkElementaryModule(node, module);
    } else if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference)) {
      for (const module of moduleNames(node.moduleReference.expression)) checkElementaryModule(node, module);
    } else if (ts.isImportTypeNode(node)) {
      for (const module of moduleNames(node.argument)) checkElementaryModule(node, module);
    } else if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || ts.isIdentifier(node.expression) && node.expression.text === 'require')) {
      for (const argument of node.arguments) for (const module of moduleNames(argument)) checkElementaryModule(node, module);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  // Check inline suppressions too, without treating quoted documentation as code.
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, source.languageVariant, source.text);
  for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; token = scanner.scan()) {
    if ((token === ts.SyntaxKind.SingleLineCommentTrivia || token === ts.SyntaxKind.MultiLineCommentTrivia) && /@ts-(?:ignore|nocheck|expect-error)/.test(scanner.getTokenText())) {
      violations.push(`${file}: Type-check suppression is forbidden`);
    }
  }
}
const configPath = ts.findConfigFile('.', ts.sys.fileExists)!;
const config = ts.readConfigFile(configPath, ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, '.');
if (!parsed.options.strict || !parsed.options.noImplicitOverride) violations.push('tsconfig.json: strict and noImplicitOverride must remain enabled');
if (violations.length) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else console.log(`PASS API boundaries and strict types: ${files} source/script files`);
