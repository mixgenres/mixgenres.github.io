import type { GenreWorld } from '../../schema';
import { COUNTRY_WORLD_WORLD } from './world';
import { COUNTRY_WORLD_CULTURE } from './culture';
import { COUNTRY_WORLD_ROLES } from './roles';
import { COUNTRY_WORLD_FEEL } from './feel';
import { COUNTRY_WORLD_STYLES } from './styles/index';
import { COUNTRY_WORLD_PATTERNS } from './patterns/index';

export const COUNTRY_WORLD: GenreWorld = {
  ...COUNTRY_WORLD_WORLD,
  ...COUNTRY_WORLD_CULTURE,
  ...COUNTRY_WORLD_ROLES,
  ...COUNTRY_WORLD_FEEL,
  ...COUNTRY_WORLD_STYLES,
  ...COUNTRY_WORLD_PATTERNS,
} as GenreWorld;

export const CountryGenre = COUNTRY_WORLD;
