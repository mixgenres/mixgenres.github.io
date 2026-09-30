import { STYLE_PROFILE_OVERRIDES } from '../../data/styles/styleProfiles';
import type { StyleSongProfile } from '../../data/styles/styleProfiles';
export type { StyleSongProfile } from '../../data/styles/styleProfiles';

export function profileForStyle(genreId: string, styleName: string, _index?: number): StyleSongProfile | undefined {
  const exact = STYLE_PROFILE_OVERRIDES[`${genreId}:${styleName.toLowerCase()}`];
  return exact;
}
