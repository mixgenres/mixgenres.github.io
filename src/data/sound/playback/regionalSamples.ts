/** Dedicated BISA recordings; programs belong to the regional SF3 bank. */
export const REGIONAL_SAMPLE_PROGRAMS: Readonly<Record<string,number>> = { quena:0, erhu:1, tar:2 };
export const ERHU_PIZZICATO_PROGRAM = 3;
/** Source-level calibration from equal-pitch/velocity lead-note renders.
 * Preserve recorded dynamics; this is fixed makeup, not per-note leveling. */
export const REGIONAL_SAMPLE_GAIN_DB: Readonly<Record<string,number>> = { quena:12, erhu:9, tar:9 };
