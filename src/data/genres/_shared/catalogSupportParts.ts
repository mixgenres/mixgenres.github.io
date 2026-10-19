import type { GenreWorld, MusicalPattern, PatternEvent, Role } from '../../schema';
import { INSTRUMENTS_BY_ID } from '../../instruments';

/** Optional ensemble lessons adapted from a named player in the SAME style.
 * These are teaching orchestrations, not claims about recording personnel.
 * Each row explicitly chooses its source; there is no cross-style fallback. */
type Study = readonly [targets: string, role: string, source: string, sourceRole?: string];
const STUDIES: Readonly<Record<string, readonly Study[]>> = {
  'amapiano-gqom-crossover': [['piano rhodes organ','harmony','synth','lead']],
  'amapiano-kwaito-crossover': [['voice','lead','synth','lead']],
  'ambient-drone': [['piano rhodes harp','harmony','synth','texture']],
  'ambient-dark-ambient': [['piano rhodes harp','harmony','synth','texture']],
  'ambient-organic-ambient': [['piano rhodes harp','harmony','string-ensemble','texture']],
  'ambient-neo-classical-ambient': [['rhodes harp','harmony','piano','lead']],
  'ambient-glitch-ambient': [['rhodes harp','harmony','piano','lead']],
  'ambient-generative-ambient': [['piano rhodes harp','harmony','synth','texture']],
  'ambient-cinematic-ambient': [['rhodes harp','harmony','string-ensemble','texture']],
  'andean-huayno': [['bass','bass','guitar','harmony']],
  'andean-sanjuanito': [['bass','bass','guitar','harmony']],
  'andean-saya': [['bass','bass','guitar','harmony']],
  'andean-tinku': [['bass','bass','guitar','harmony']],
  'andean-carnavalito': [['bass','bass','charango','harmony']],
  'andean-nueva-cancion': [['bass','bass','guitar','harmony']],
  'arabic-instrumental-maqam': [['qanun harp','harmony','oud','lead'],['riq darbuka bendir','percussion','oud','lead']],
  'blues-delta': [['guitar piano organ','harmony','resonator-guitar','lead'],['bass','bass','resonator-guitar','lead']],
  'blues-piedmont': [['bass','bass','guitar','harmony']],
  'chinese-jiangnan-sizhu': [['paigu gongs','percussion','pipa','harmony']],
  'chinese-guqin': [['pipa guzheng','harmony','guqin','lead'],['paigu gongs','percussion','guqin','lead']],
  'chinese-guzheng': [['pipa','harmony','guzheng','lead'],['paigu gongs','percussion','guzheng','lead']],
  'chinese-pipa': [['guzheng','harmony','pipa','lead'],['paigu gongs','percussion','pipa','lead']],
  'chinese-jingju': [['pipa guzheng','harmony','jinghu','lead']],
  'chinese-cantonese-ensemble': [['paigu','percussion','pipa','harmony']],
  'chinese-chaozhou': [['paigu','percussion','pipa','harmony']],
  'chinese-suona-chuida': [['pipa guzheng','harmony','suona','lead']],
  'classical-baroque': [['timpani','percussion','cello','bass']],
  'classical-chamber': [['timpani','percussion','cello','bass']],
  'desert-blues-acoustic-tuareg': [['kora oud','harmony','guitar','lead']],
  'flamenco-rumba': [['piano','harmony','guitar','lead']],
  'flamenco-nuevo-flamenco': [['piano','harmony','guitar','lead'],['upright-bass bass','bass','guitar','lead']],
  'flamenco-flamenco-rock': [['piano','harmony','guitar','lead']],
  'folk-contemporary-folk': [['bodhran','percussion','guitar','harmony']],
  'folk-old-time': [['bodhran','percussion','banjo','harmony']],
  'folk-appalachian': [['upright-bass','bass','guitar','harmony'],['bodhran','percussion','banjo','harmony']],
  'folk-singer-songwriter': [['upright-bass','bass','guitar','harmony'],['bodhran','percussion','guitar','harmony']],
  'folk-folk-revival': [['bodhran','percussion','guitar','harmony']],
  'house-acid-house': [['rhodes organ','harmony','synth','lead']],
  'industrial-ebm': [['voice','lead','synth','lead']],
  'industrial-industrial-dance': [['voice','lead','synth','lead']],
  'japanese-shakuhachi': [['sho shamisen','harmony','shakuhachi','lead'],['taiko kane','percussion','shakuhachi','lead']],
  'japanese-shamisen-minyo': [['sho','harmony','shamisen','lead']],
  'japanese-koto-sankyoku': [['taiko kane','percussion','shamisen','harmony']],
  'japanese-taiko': [['sho shamisen','harmony','taiko','percussion']],
  'korean-pansori': [['gayageum','harmony','voice','lead']],
  'korean-sanjo': [['cello','harmony','gayageum','lead']],
  'korean-samulnori': [['gayageum cello','harmony','janggu','percussion']],
  'latin-vallenato': [['guitar','harmony','accordion','lead']],
  'mexican-son-huasteco': [['guitarron','bass','guitar','harmony']],
  'persian-radif': [['santur cello','harmony','setar','lead'],['tombak','percussion','setar','lead']],
  'persian-avaz': [['santur string-ensemble cello','harmony','tar','lead'],['tombak','percussion','tar','lead']],
  'steppe-morin-khuur': [['bass','bass','morin-khuur','lead'],['frame-drum','percussion','tovshuur','lead'],['yatga','harmony','tovshuur','lead']],
  'steppe-khoomei': [['frame-drum','percussion','tovshuur','lead'],['yatga','harmony','tovshuur','lead']],
  'steppe-sygyt': [['frame-drum','percussion','tovshuur','lead'],['yatga','harmony','tovshuur','lead']],
  'steppe-kargyraa': [['frame-drum','percussion','tovshuur','lead'],['yatga','harmony','tovshuur','lead']],
  'steppe-dombra': [['morin-khuur','texture','dombra','lead'],['bass','bass','dombra','lead'],['frame-drum','percussion','tovshuur','lead'],['yatga','harmony','tovshuur','lead']],
  'taarab-kidumbak': [['oud qanun','harmony','violin','lead']],
  'weird-deconstructed': [['bass','bass','piano','lead']],
  'weird-musique-concrete': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','sampler','lead']],
  'weird-piano': [['sampler turntable','percussion','piano','lead'],['synth','texture','piano','lead'],['guitar rhodes','harmony','piano','lead'],['bass','bass','piano','lead']],
  'weird-glitch': [['piano guitar rhodes','harmony','synth','lead'],['bass','bass','synth','lead']],
  'weird-microsound': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
  'weird-process-generative': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
  'weird-phase': [['bass','bass','synth','texture']],
  'weird-microtonal': [['piano guitar rhodes','harmony','synth','lead'],['bass','bass','synth','lead']],
  'weird-free-improvisation': [['bass','bass','piano','lead']],
  'weird-noise': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
  'weird-drone': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
  'weird-spectral': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
  'weird-polymetric': [['bass','bass','synth','texture']],
  'weird-circuit-bent-broken-electronics': [['piano guitar rhodes','harmony','sampler','texture'],['bass','bass','synth','lead']],
};

export function authorCatalogSupportParts(world: GenreWorld): GenreWorld {
  const additions: MusicalPattern[] = [];
  for (const style of world.styleDefinitions) for (const [targets, role, sourceInstrument, sourceRole] of STUDIES[style.id] ?? []) {
    const sources = world.patterns.filter(pattern => pattern.styleIds?.includes(style.id)
      && pattern.instruments?.includes(sourceInstrument) && (!sourceRole || pattern.roles.includes(sourceRole as Role)));
    if (!sources.length) throw new Error(`Missing local study source: ${style.id}/${sourceInstrument}/${sourceRole}`);
    for (const instrument of targets.split(' ')) {
      const def = INSTRUMENTS_BY_ID[instrument];
      if (!def) throw new Error(`Unknown study instrument: ${instrument}`);
      const unpitched = instrument !== 'timpani' && (!!def.kit || !!def.drum || def.voicing === 'unpitched');
      const adapt = (event: PatternEvent): PatternEvent => ({ ...event,
        // Transfer rhythm, rests, accents, lengths and melodic contour. The
        // target player supplies its physical technique and written register.
        articulation: /^(accent|staccato|legato|tenuto|ghost|open)$/.test(event.articulation ?? '') ? event.articulation : undefined,
        notation: event.notation ? { grace: event.notation.grace, ornament: event.notation.ornament,
          tuplet: event.notation.tuplet, tieToNext: unpitched ? undefined : event.notation.tieToNext } : undefined,
        hitType: unpitched ? event.hitType ?? 'open' : undefined,
        pitch: unpitched ? undefined : event.pitch
          ? { ...event.pitch, ...(role === 'bass' ? { register: 40, voicing: 'single' as const } : {}) }
          : instrument === 'timpani' ? { degree: 1, register: 48, voicing: 'single' }
            : style.calibration?.harmony.requiresChords === false && sourceRole === 'percussion' ? { degree: 1, voicing: 'single' } : undefined,
      });
      for (const source of sources) {
        const id = `${source.id}-for-${instrument}-${role}`;
        const player = instrument.replaceAll('-', ' ').replace(/^./,letter=>letter.toUpperCase());
        const cue = source.category === 'cadence' || source.category === 'fill' ? 'close'
          : source.arrangementVariation ? 'answer' : role === 'bass' ? 'anchor' : role === 'percussion' ? 'accents' : 'phrase';
        const label = `${player} ${cue}`;
        additions.push({ ...source, id, name: `${style.name}: ${label}`, shortName: label,
          instruments: [instrument], roles: [role as Role], compatibleInstruments: undefined, compatibleRoles: undefined,
          category: role === 'bass' ? 'bass' : role === 'percussion' ? 'percussion' : role === 'harmony' ? 'accompaniment' : source.category,
          events: source.events?.map(adapt), hitGrid: unpitched ? source.events?.map(event => event.hitType ?? 'open') : undefined,
          variants: source.variants.map(variant => ({ ...variant, id: `${variant.id}-study-${instrument}-${role}`, parentPatternId: id,
            events: variant.events?.map(adapt), hitGrid: undefined })),
          description: `${def.name} part adapted from this style's ${source.shortName ?? source.name}. Keep the written rhythm, rests and accents; use ${def.name} articulation. A learning orchestration, not a recording transcription.`,
          provenance: `Style-local ensemble adaptation of ${source.id}.`,
        });
      }
    }
  }
  return { ...world, patterns: [...world.patterns, ...additions] };
}
