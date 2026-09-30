import type { SectionType } from './schema';
import { GENRE_FORMS } from './genreForms';

export const SECTION_KINDS: SectionType[] = Array.from(new Set(Object.values(GENRE_FORMS).flatMap(f => f.steps.map(s => s.kind)))) as SectionType[];
