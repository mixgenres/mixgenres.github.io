/** Public catalog categories can contain more than one musical grammar.
 * Afrobeat and contemporary Afrobeats share a single picker entry. Their
 * existing world/style IDs remain stable for saved scores and pattern ownership.
 */
export function genreCategoryId(genreId: string): string {
  return genreId === 'afrobeats' ? 'afrobeat' : genreId;
}

export function genreIdsForCategory(genreId: string): string[] {
  return genreCategoryId(genreId) === 'afrobeat' ? ['afrobeat', 'afrobeats'] : [genreId];
}
