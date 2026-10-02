import type { GenreWorld } from '../../schema';
import { COUNTRY_WORLD_WORLD, COUNTRY_WORLD_CULTURE, COUNTRY_WORLD_ROLES, COUNTRY_WORLD_FEEL } from './identity';
import { COUNTRY_WORLD_STYLES } from './styles';
import { COUNTRY_WORLD_PATTERNS } from './patterns';

export const COUNTRY_WORLD: GenreWorld = {
  ...COUNTRY_WORLD_WORLD,
  ...COUNTRY_WORLD_CULTURE,
  ...COUNTRY_WORLD_ROLES,
  ...COUNTRY_WORLD_FEEL,
  ...COUNTRY_WORLD_STYLES,
  ...COUNTRY_WORLD_PATTERNS,
} as GenreWorld;

export const CountryGenre = COUNTRY_WORLD;
