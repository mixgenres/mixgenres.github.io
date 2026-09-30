export type { GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
export { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
export { CHORD_PALETTE, CHORD_MOODS, CHORD_MOOD_ORDER, JAZZ_CHORD_LIBRARY } from '../../data/chordPalette';
export type { ChordMood, ChordOption } from '../../data/chordPalette';
import type { GenreTheoryProfile } from '../../data/musicTheory/genreTheory';
import { GENRE_THEORY } from '../../data/musicTheory/genreTheory';
import { CHORD_PALETTE, CHORD_MOOD_ORDER_RAW } from '../../data/chordPalette';
import type { ChordMood, ChordOption } from '../../data/chordPalette';

export function getGenreTheory(genreId: string): GenreTheoryProfile {
  return GENRE_THEORY[genreId] ?? GENRE_THEORY.rock;
}

export function blendGenreTheory(host: GenreTheoryProfile, guest: GenreTheoryProfile, weight: number): GenreTheoryProfile {
  const w = Math.max(0, Math.min(1, weight));
  if (w <= 0.001 || host.genreId === guest.genreId) return host;
  const choose = <T>(a:T,b:T) => w > 0.55 ? b : a;
  return {
    ...host,
    progressions: host.progressions,
    cadences: host.cadences,
    defaultScale: choose(host.defaultScale, guest.defaultScale),
    chordScales: {...host.chordScales, ...(w > .65 ? guest.chordScales : {})},
    bass: {
      ...host.bass,
      style: w > .7 ? guest.bass.style : host.bass.style,
      targetDegrees: Array.from(new Set([...host.bass.targetDegrees, ...(w > .45 ? guest.bass.targetDegrees : [])])),
      chromaticApproach: host.bass.chromaticApproach || (w > .55 && guest.bass.chromaticApproach),
      passingProbability: host.bass.passingProbability * (1-w) + guest.bass.passingProbability*w,
      phraseFillProbability: host.bass.phraseFillProbability * (1-w) + guest.bass.phraseFillProbability*w,
      anticipationBeats: Array.from(new Set([...host.bass.anticipationBeats, ...(w > .45 ? guest.bass.anticipationBeats : [])])),
      silenceProbability: host.bass.silenceProbability * (1-w) + guest.bass.silenceProbability*w,
    },
    harmony: host.harmony,
    melody: {
      ...host.melody,
      scale: Array.from(new Set([...host.melody.scale, ...(w > .4 ? guest.melody.scale : [])])),
      targetDegrees: Array.from(new Set([...host.melody.targetDegrees, ...(w > .4 ? guest.melody.targetDegrees : [])])),
      callResponse: host.melody.callResponse || (w > .6 && guest.melody.callResponse),
    },
    rhythm: host.rhythm,
    techniques: {
      bass:Array.from(new Set([...host.techniques.bass,...(w>.35?guest.techniques.bass:[])])),
      harmony:Array.from(new Set([...host.techniques.harmony,...(w>.35?guest.techniques.harmony:[])])),
      melody:Array.from(new Set([...host.techniques.melody,...(w>.35?guest.techniques.melody:[])])),
      percussion:Array.from(new Set([...host.techniques.percussion,...(w>.35?guest.techniques.percussion:[])])),
      bowed:Array.from(new Set([...host.techniques.bowed,...(w>.35?guest.techniques.bowed:[])])),
      winds:Array.from(new Set([...host.techniques.winds,...(w>.35?guest.techniques.winds:[])])),
      bellows:Array.from(new Set([...host.techniques.bellows,...(w>.35?guest.techniques.bellows:[])])),
      voice:Array.from(new Set([...host.techniques.voice,...(w>.35?guest.techniques.voice:[])])),
    },
    mixFocus:Object.fromEntries(Object.keys(host.mixFocus).map(k=>[k,(host.mixFocus[k]??.5)*(1-w)+(guest.mixFocus[k]??host.mixFocus[k]??.5)*w])),
    forbidden: Array.from(new Set([...host.forbidden])),
  };
}

export function styleTheoryFor(styleId: string | undefined, genreId: string): GenreTheoryProfile {
  const base = getGenreTheory(genreId);
  const slug = (value: string) => value.toLowerCase().normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '').replace(/&/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const fullId = slug(String(styleId ?? ''));
  const genrePrefix = `${slug(genreId)}-`;
  const id = fullId.startsWith(genrePrefix) ? fullId.slice(genrePrefix.length) : fullId;
  if (!id) return base;
  const out: GenreTheoryProfile = JSON.parse(JSON.stringify(base));
  const has = (s:string) => {
    const term = slug(s);
    return id === term || id.startsWith(`${term}-`) || id.endsWith(`-${term}`) || id.includes(`-${term}-`);
  };
  if (has('tango-tradicional') || has('guardia-vieja')) {
    out.rhythm.signature.push('marcato-en-4','marcato-en-2','habanera-bass','arrastre');
    out.bass.style='tango';
    out.bass.passingProbability=.12;
    out.techniques.bass.push('staccato','pizzicato','arrastre');
    out.techniques.bellows.push('marcato','staccato','arrastre');
    out.harmony.voicing='yumba';
  }
  if (has('pugliese')) {
    out.rhythm.accent=[1,.96,.58,.9];
    out.rhythm.signature.push('yumba','marcato-1-and-3','arrastre');
    out.bass.style='tango';
    out.bass.anticipationBeats=[1.5];
    out.bass.phraseFillProbability=.24;
    out.harmony.voicing='yumba';
    out.melody.contour.push('long-crescendo','dramatic-silence');
    out.techniques.bass.push('bow','pizzicato','arrastre');
    out.techniques.bellows.push('marcato','accent','arrastre');
    out.mixFocus.bass=.84;
  }
  if (has('troilo')) {
    out.melody.contour.push('lyric-breath','barline-overlap');
    out.bass.style='tango';
    out.techniques.bass.push('legato','arco','pizzicato');
    out.techniques.bellows.push('arrastre','legato');
    out.mixFocus.melody=.84;
  }
  if (has('piazzolla') || has('nuevo')) { out.harmonicModel='functional'; out.defaultScale='melodic-minor'; out.harmony.upperStructure=true; out.melody.scale.push('melodic-minor'); out.rhythm.signature.push('3+3+2-ostinato'); }
  if (has('milonga')) { out.meter='2/4'; out.rhythm.signature.push('traspie','3+3+2'); out.bass.style='tango'; out.bass.passingProbability=.2; }
  if (has('vals')) { out.meter='3/4'; out.rhythm.subdivision=16; out.rhythm.signature.push('waltz-three'); }
  if (has('chacarera')) { out.meter='6/8'; out.rhythm.subdivision=24; out.rhythm.signature.push('6/8-3/4-cross'); }
  if (has('salsa-dura')) { out.rhythm.signature.push('mambo-break','cascara'); out.mixFocus.percussion=.84; }
  if (has('cha-cha') || has('charanga')) { out.rhythm.signature.push('cha-cha-chá','charanga'); out.bass.style='rootFifth'; out.mixFocus.lead=.86; }
  if (has('pachanga')) { out.rhythm.signature.push('pachanga'); out.bass.passingProbability=.16; }
  if (has('descarga')) { out.melody.callResponse=true; out.melody.contour.push('trading-solos'); out.bass.phraseFillProbability=.28; out.mixFocus.lead=.92; }
  if (has('cimafunk') || has('timba-funk')) { out.bass.style='riff'; out.bass.passingProbability=.38; out.bass.phraseFillProbability=.34; out.rhythm.signature.push('funk-pocket','horn-blocks'); out.techniques.bass.push('slap','ghost'); out.mixFocus.bass=.9; }
  if (has('despelote')) { out.rhythm.signature.push('break-block','gear-drop'); out.mixFocus.percussion=.86; }
  if (has('rumbeada')) out.rhythm.signature.push('rumba-conversation');
  if (has('bebop') || has('hard-bop')) { out.melody.scale.push('melodic-minor'); out.bass.passingProbability=.55; out.melody.ornamentCap=.26; }
  if (has('cool')) { out.bass.passingProbability=.34; out.rhythm.swing=.61; out.mixFocus.lead=.78; }
  if (has('gypsy')) { out.rhythm.signature.push('la-pompe'); out.harmony.voicing='drop-two'; out.bass.style='walking'; }
  if (has('free')) { out.melody.scale=['chromatic','dorian']; out.melody.ornamentCap=.3; out.bass.silenceProbability=.18; }
  if (has('bluegrass')) { out.rhythm.signature.push('boom-chick','banjo-roll','mandolin-chop','fiddle-break'); out.bass.style='rootFifth'; out.mixFocus.lead=.9; }
  if (has('honky-tonk') || has('outlaw')) { out.rhythm.signature.push('boom-chick','shuffle'); out.techniques.bass.push('walk-up','walk-down'); }
  if (has('bossa')) { out.meter='4/4'; out.rhythm.signature.push('bossa-clave','violao-syncopation'); out.bass.style='samba'; out.bass.passingProbability=.3; out.harmony.voicing='drop-two'; }
  if (has('samba')) { out.meter='2/4'; out.rhythm.signature.push('surdo','tamborim','pandeiro'); out.mixFocus.percussion=.86; }
  if (has('pagode')) { out.rhythm.signature.push('pandeiro','tantan','cavaquinho'); }
  if (has('choro')) { out.meter='2/4'; out.rhythm.signature.push('choro-syncopation'); out.bass.style='walking'; out.bass.passingProbability=.38; }
  if (has('forro')) { out.meter='2/4'; out.rhythm.signature.push('baião','zabumba','triangulo'); out.bass.style='rootFifth'; }
  if (has('deep-house')) { out.rhythm.signature.push('offbeat-hats','organ-stab'); out.harmony.voicing='close'; }
  if (has('soulful-house')) { out.harmonicModel='functional'; out.harmony.guideTonePriority=true; out.melody.scale.push('blues'); }
  if (has('tech-house')) { out.bass.style='house'; out.harmony.voicing='close'; out.harmony.maxLowDensity=.12; }
  if (has('garage-house')) { out.rhythm.signature.push('2-step-variant'); out.rhythm.accent=[1,.5,.9,.45]; }
  if (has('acid-house')) { out.rhythm.signature.push('16th-acid-bass'); out.bass.style='sub'; }
  if (has('french-house')) { out.rhythm.signature.push('filtered-disco-loop','four-on-floor'); out.mixFocus.harmony=.58; }
  if (has('neo-soul')) { out.harmony.voicing='drop-two'; out.melody.scale.push('dorian'); out.melody.ornamentCap=.26; }
  if (has('quiet-storm')) { out.bass.silenceProbability=.16; out.rhythm.signature.push('space','slow-pocket'); out.mixFocus.pad=.6; }
  if (has('new-jack')) { out.rhythm.signature.push('swinging-programmed-backbeat'); out.rhythm.swing=.56; }
  if (has('funk-r-and-b')) { out.bass.passingProbability=.36; out.techniques.bass.push('slap','ghost'); }
  if (has('motown')) { out.rhythm.signature.push('motorik-bass','tambourine'); out.bass.style='riff'; }
  if (has('deep-soul') || has('southern')) { out.rhythm.signature.push('three-part-vocal-response'); out.mixFocus.lead=.88; }
  if (has('psychedelic-soul')) out.rhythm.signature.push('extended-vamp','bridge-texture');
  if (has('roots-reggae')) { out.rhythm.signature.push('one-drop','skank'); out.bass.silenceProbability=.12; }
  if (has('dub')) { out.rhythm.signature.push('dropout','echo-space'); out.bass.silenceProbability=.18; out.mixFocus.bass=.9; }
  if (has('dancehall') || has('ragga')) { out.rhythm.signature.push('dancehall-kick','digital-skank'); out.bass.style='sub'; }
  if (has('rocksteady')) { out.rhythm.signature.push('rocksteady-walk'); out.bass.style='riff'; }
  if (has('jungle')) { out.rhythm.subdivision=32; out.rhythm.signature.push('amen-chop','break-roll'); }
  if (has('liquid')) { out.harmonicModel='functional'; out.harmony.guideTonePriority=true; out.melody.scale.push('dorian'); out.mixFocus.harmony=.42; }
  if (has('jump-up')) { out.bass.style='sub'; out.rhythm.signature.push('jump-up-bass-stab'); }
  if (has('neuro')) { out.rhythm.signature.push('micro-edit','resampled-bass'); out.bass.style='sub'; }
  if (has('dancefloor')) { out.melody.contour.push('anthem-hook'); out.mixFocus.lead=.8; }
  if (has('minimal-dnb')) { out.rhythm.signature.push('negative-space'); out.bass.silenceProbability=.16; }
  if (has('punk')) { out.rhythm.signature.push('downpick-8ths'); out.bass.passingProbability=.05; }
  if (has('hardcore')) { out.rhythm.signature.push('D-beat','half-time-breakdown'); out.meter='4/4'; }
  if (has('post-hardcore')) out.rhythm.signature.push('dynamic-stop-start');
  if (has('skate')) out.rhythm.signature.push('fast-8ths','melodic-hook');
  if (has('crust')) out.rhythm.signature.push('d-beat','half-time');
  if (has('melodic')) out.melody.scale.push('major-pentatonic');
  if (has('pop-punk')) out.harmonicModel='functional';
  if (has('uk-garage') || has('2-step')) { out.rhythm.signature.push('2-step','skippy-snare'); out.bass.style='sub'; }
  if (has('grime')) { out.rhythm.signature.push('sparse-snare','square-lead'); out.bass.silenceProbability=.12; }
  if (has('dubstep')) { out.rhythm.signature.push('half-time','bass-drop'); out.bass.style='sub'; }
  if (has('future-garage')) { out.rhythm.signature.push('shuffled-ghost','vocal-chop'); out.rhythm.swing=.56; }
  if (has('bassline')) { out.rhythm.signature.push('bassline-syncopation'); out.bass.passingProbability=.18; }
  if (has('breaks')) { out.rhythm.signature.push('broken-beat'); }
  if (has('ebm')) { out.rhythm.signature.push('four-on-floor','sequenced-bass'); out.mixFocus.drums=.9; }
  if (has('industrial metal') || has('metal')) { out.rhythm.signature.push('double-kick','palm-mute'); }
  if (has('noise')) { out.melody.scale=['chromatic']; out.harmonicModel='power-riff'; }
  if (has('shoegaze')) { out.harmony.voicing='open'; out.mixFocus.pad=.7; out.mixFocus.lead=.72; }
  if (has('grunge')) { out.rhythm.signature.push('dynamic-verse-chorus'); }
  if (has('prog')) { out.meter='7/8'; out.cycleBars=2; out.rhythm.signature.push('odd-meter','metric-displacement'); }
  return out;
}

export function chordsForMood(mood: ChordMood): ChordOption[] { return CHORD_PALETTE.filter(c => c.mood === mood); }
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  const exact = CHORD_PALETTE.filter(c => c.genres.includes(genreId));
  return exact.length ? exact.slice(0, 8) : CHORD_PALETTE.slice(0, 4);
}
export function suggestedPaletteForStyle(styleId?: string, genreId?: string): ChordOption[] {
  const g = genreId ?? 'rock';
  const base = suggestedPaletteForGenre(g);
  if (!styleId) return base;
  const n = styleId.toLowerCase();
  if (/jazz|fusion|bebop|cool|hard-bop|spiritual/.test(n)) {
    return [...CHORD_PALETTE.filter(c => c.tier === 'jazz'), ...base].slice(0, 8);
  }
  return base;
}
export function chordPaletteCategoryCounts(): Record<ChordMood, number> {
  return CHORD_MOOD_ORDER_RAW.reduce((out, mood) => { out[mood] = CHORD_PALETTE.filter(c => c.mood === mood).length; return out; }, {} as Record<ChordMood, number>);
}
