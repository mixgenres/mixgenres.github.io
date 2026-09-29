import type { GenreForm } from '../../data/genreForms';
export const formSummary = (form: GenreForm): string => form.steps.map(s => s.label).join(' · ');
