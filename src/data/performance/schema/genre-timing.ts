export interface GenreTimingProfile {
  microTiming?: {
    instrumentRoles?: Record<string, 'laid_back' | 'pushed' | 'rubato' | 'strict'>;
  };
}
