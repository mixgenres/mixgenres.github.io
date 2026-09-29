import { STYLE_PROFILE_LIBRARY, STYLE_PROFILE_OVERRIDES } from '../../data/styles/styleProfiles';
import type { StyleSongProfile } from '../../data/styles/styleProfiles';
export type { StyleSongProfile } from '../../data/styles/styleProfiles';

export function profileForStyle(genreId: string, styleName: string, index: number): StyleSongProfile | undefined {
  const exact = STYLE_PROFILE_OVERRIDES[`${genreId}:${styleName.toLowerCase()}`];
  if (exact) return exact;
  const list = STYLE_PROFILE_LIBRARY[genreId];
  if (!list?.length) return undefined;
  const n = styleName.toLowerCase();
  const keywordIndex: Record<string, number> = {
    'afro-pop':0,'afrobeat':1,'amapiano':2,
    tradicional:0,urbana:1,sensual:2,'moderna':1,'bolero':2,
    chicago:0,delta:2,texas:1,piedmont:2,jump:1,
    samba:0,'bossa':1,pagode:0,choro:2,'forró':2,
    honky:1,bluegrass:2,'train':1,neotraditional:0,
    'studio disco':0,euro:1,'hi-nrg':1,'disco-funk':2,'nu-disco':0,
    techno:0,ambient:2,downtempo:1,breakbeat:2,electro:0,
    'deep house':0,'classic house':1,'soulful house':0,'tech house':2,'acid house':2,
    bebop:0,'cool jazz':1,'hard bop':2,'free jazz':1,'gypsy jazz':2,
    'roots reggae':0,dub:1,dancehall:2,rocksteady:0,
    perreo:0,playero:1,neoperreo:2,
    'heavy metal':0,thrash:1,'doom metal':2,
  };
  for (const [k, i] of Object.entries(keywordIndex)) if (n.includes(k)) return list[i % list.length];
  return list[index % list.length];
}
