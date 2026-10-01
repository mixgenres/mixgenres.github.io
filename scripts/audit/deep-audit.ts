import { INSTRUMENTS_BY_ID } from '../../src/data/instruments/index.ts';
import { starterSongs } from '../../src/data/songs/starters.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { resolveDialect } from '../../src/engine/band/genreDialect.ts';
import { resolveRenderGesture } from '../../src/engine/playback/renderGesture.ts';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { getInstrumentPerformanceProfile } from '../../src/engine/lookup/performance.ts';
import { describeMix } from '../lib/mixSchema.ts';

interface IssueReport {
  category: 'mismatched-key' | 'dialect' | 'bad-pitch' | 'articulation-collapse' | 'mix-level';
  genreId: string;
  styleId?: string;
  instrumentId?: string;
  trackId?: string;
  detail: string;
}

const issues: IssueReport[] = [];

console.log('--- AUDITING STARTERS AND STYLES ---');

// 1. Audit Starter Songs
for (const starter of starterSongs) {
  const genreId = starter.genreId;
  const styleId = starter.styleId;
  let sheet;
  let perf;
  try {
    sheet = makeSheet({ genreId, styleId });
    perf = compileWholeSong(sheet);
  } catch (err: unknown) {
    issues.push({
      category: 'mismatched-key',
      genreId,
      styleId,
      detail: `Failed to compile song: ${String(err)}`,
    });
    continue;
  }

  // Check mix
  try {
    const mix = describeMix(sheet, perf);
    for (const t of mix.tracks) {
      if (t.performance.noteCount > 0) {
        if (t.gain.effectiveGainDb < -35) {
          issues.push({
            category: 'mix-level',
            genreId,
            styleId,
            instrumentId: t.instrumentId,
            trackId: t.id,
            detail: `Very low effective gain (${t.gain.effectiveGainDb.toFixed(1)} dB) - track may be inaudible`,
          });
        }
        if (t.gain.effectiveGainDb > 18) {
          issues.push({
            category: 'mix-level',
            genreId,
            styleId,
            instrumentId: t.instrumentId,
            trackId: t.id,
            detail: `High effective gain (+${t.gain.effectiveGainDb.toFixed(1)} dB) - risk of clipping`,
          });
        }
      }
    }
  } catch (err) {
    issues.push({
      category: 'mix-level',
      genreId,
      styleId,
      detail: `Mix describe error: ${String(err)}`,
    });
  }

  // Check notes, pitches, articulations, and dialects
  for (const track of sheet.tracks) {
    const instId = track.instrumentId ?? '';
    const def = INSTRUMENTS_BY_ID[instId];
    if (!def) {
      issues.push({
        category: 'mismatched-key',
        genreId,
        styleId,
        instrumentId: instId,
        trackId: track.id,
        detail: `Unknown instrument ID in starter: ${instId}`,
      });
      continue;
    }

    // Dialect check
    const dialect = resolveDialect(instId, genreId, styleId, track.role);
    if (!dialect) {
      issues.push({
        category: 'dialect',
        genreId,
        styleId,
        instrumentId: instId,
        trackId: track.id,
        detail: `Dialect resolved to null`,
      });
    } else {
      // Check if specialized genre instruments fall into generic
      const isSignatureGenre = ['tango', 'flamenco', 'salsa', 'bachata', 'reggae', 'afrobeats', 'bossa-nova', 'jazz', 'cumbia'].includes(genreId);
      if (isSignatureGenre && dialect.id.endsWith(':generic')) {
        const perfProfile = getInstrumentPerformanceProfile(instId);
        if (perfProfile.genreProfiles[genreId]) {
          issues.push({
            category: 'dialect',
            genreId,
            styleId,
            instrumentId: instId,
            trackId: track.id,
            detail: `Has authored genreProfile in performance profile but dialect fell back to :generic`,
          });
        }
      }
    }

    // Check notes for bad pitch and articulation collapses
    const trackNotes = perf.notes.filter(n => n.trackId === track.id);
    const range = def.tuningAndMechanics?.keyRange;
    const isKit = def.family === 'kit' || def.family === 'hand-drums' || def.family === 'metal-and-wood' || def.family === 'body-percussion';

    let outOfRangeCount = 0;
    let nonFiniteFreqCount = 0;
    let zeroVelCount = 0;
    let gestureCollapseCount = 0;

    for (const n of trackNotes) {
      if (!Number.isFinite(n.frequencyHz) || (n.frequencyHz ?? 0) <= 0) {
        nonFiniteFreqCount++;
      }
      if (n.vel <= 0 || n.vel > 127) {
        zeroVelCount++;
      }
      if (!isKit && range) {
        if (n.midi < range.lowMidi - 2 || n.midi > range.highMidi + 2) {
          outOfRangeCount++;
        }
      }

      // Check articulation resolution
      const gestureName = GESTURE_NAMES[n.gestureCode] ?? 'tone';
      const resolved = resolveRenderGesture(instId, n.gestureCode);
      // If authored gesture was a specific articulation (e.g. slap, staccato, tremolo, rasgueado)
      // check if it collapsed into generic tone without action
      if (gestureName !== 'tone' && gestureName !== 'sustain' && resolved.action === 'tone' && !resolved.excitationType) {
        gestureCollapseCount++;
      }
    }

    if (nonFiniteFreqCount > 0) {
      issues.push({
        category: 'bad-pitch',
        genreId,
        styleId,
        instrumentId: instId,
        trackId: track.id,
        detail: `${nonFiniteFreqCount} notes with invalid or non-finite frequencyHz`,
      });
    }
    if (outOfRangeCount > 5) {
      issues.push({
        category: 'bad-pitch',
        genreId,
        styleId,
        instrumentId: instId,
        trackId: track.id,
        detail: `${outOfRangeCount} notes outside playable physical range [${range?.lowMidi}..${range?.highMidi}]`,
      });
    }
    if (gestureCollapseCount > 10) {
      issues.push({
        category: 'articulation-collapse',
        genreId,
        styleId,
        instrumentId: instId,
        trackId: track.id,
        detail: `${gestureCollapseCount} notes with specific gestures collapsed into plain generic tone`,
      });
    }
  }
}

console.log(`\nAudit complete. Found ${issues.length} potential issues.`);
const byCategory: Record<string, number> = {};
for (const iss of issues) {
  byCategory[iss.category] = (byCategory[iss.category] ?? 0) + 1;
}
console.log('Issues by category:', byCategory);
console.log('\nDetailed issues:');
for (const iss of issues) {
  console.log(`[${iss.category}] ${iss.genreId} (${iss.styleId ?? ''}) - ${iss.instrumentId ?? ''}: ${iss.detail}`);
}
