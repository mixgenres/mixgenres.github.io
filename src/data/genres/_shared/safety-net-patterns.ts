import type { MusicalPattern } from '../../schema';

function P(
  id: string,
  worldId: string,
  name: string,
  description: string,
  onsetGrid: number[],
  roles: MusicalPattern['roles'],
  tags: string[],
  articulations: string[] = [],
  instruments?: MusicalPattern['instruments'],
  styleIds?: string[],
): MusicalPattern {
  return {
    id, worldId, name, shortName: name, family: worldId, category: 'groove', description,
    tags, approaches: tags, scopes: ['song','region','measure'],
    roles, meter: '4/4', cycleLength: 1, subdivisions: 16,
    onsetGrid, accentProfile: onsetGrid.map((_, i) => i % 4 === 0 ? 1 : i % 2 ? .5 : .78),
    instruments, styleIds,
    durationGrid: onsetGrid.map(() => 1), articulations, variants: [],
    sourceLevel: 'native-genre', canCrossRole: true, authenticityTags: tags,
  };
}

export const CANONICAL_GENRE_PATTERNS: MusicalPattern[] = [
  // Instrument-specific safety-net cells for genres whose authored catalog was
  // previously missing a dedicated part pattern. These are deliberately
  // explicit so the selector cannot transfer a drum/guitar cell onto a pitched
  // voice simply because it has the right genre/style tag.
  P('jazz-horn-swing-phrase', 'jazz', 'Jazz Horn Swing Phrase', 'Breathy swing horn phrase with space between attacks and a phrase-end pickup.', [0,3,6,8,11,14], ['melody','lead'], ['jazz','horn','swing','phrase'], ['accented'], ['tenor-sax','alto-sax','soprano-sax','trumpet','trombone'], ['jazz-bebop','jazz-fusion']),
  P('country-fiddle-answer', 'country', 'Country Fiddle Answer', 'Two-bar-friendly fiddle answer cell with pickup, held space, and a descending turn rather than a fixed chicken-pick contour.', [0,2,5,7,8,10,12,15], ['melody','lead'], ['country','fiddle','shuffle','answer'], ['accented'], ['fiddle','violin'], ['country-honky-tonk','country-americana']),
  P('country-banjo-roll', 'country', 'Country Banjo Roll', 'Forward-moving Scruggs-style roll cell with alternating thumb/inner-string space.', [0,2,4,5,7,9,11,13,15], ['melody','harmony','comp'], ['country','banjo','roll','bluegrass'], ['accented'], ['banjo'], ['country-bluegrass','country-americana','country-honky-tonk']),
  P('country-steel-answer', 'country', 'Country Steel Answer', 'Pedal-steel answer cell with sustained gaps and phrase-ending approach.', [0,3,7,8,11,14], ['melody','lead','harmony'], ['country','steel','answer','slide'], ['legato'], ['steel-guitar'], ['country-honky-tonk','country-americana']),

  P('afro-interlocking-16ths', 'afrobeats', 'Afrobeats Interlocking 16ths', 'Interlocking guitar, percussion and bass cells organized around a repeating 3+3+2-derived contour.', [0,2,5,8,10,13,15], ['bass','harmony','percussion'], ['interlocking-16ths','3+3+2-cell','afrobeats']),
  P('afro-logdrum-call', 'afrobeats', 'Afrobeats Log-Drum Call', 'Pitched low-register call answered by guitar/percussion in the gaps.', [0,3,6,8,11,14], ['bass','percussion'], ['log-drum','call-response','3+3+2-cell']),
  P('elec-sidechain-space', 'electronic', 'Electronic Sidechain Space', 'Four-on-floor or break pulse with deliberately sparse sustained material around the kick envelope.', [0,4,8,12], ['drums','pulse','harmony'], ['four-on-floor','sidechain-space','electronic']),
  P('elec-breakbeat-response', 'electronic', 'Electronic Breakbeat Response', 'Breakbeat response cell alternating dense drums with a short synth answer.', [0,3,5,7,8,11,13,15], ['drums','percussion','lead'], ['breakbeat','response','electronic']),
  P('industrial-ebm-pulse-native', 'industrial', 'Industrial EBM 16th Pulse', 'Rigid electronic 16th-note motor with heavy downbeat emphasis and hard stop at the bar turn.', [0,2,4,6,8,10,12,14], ['bass','rhythm','drums'], ['EBM-pulse','mechanical-stop','industrial']),
  P('industrial-four-native', 'industrial', 'Industrial Four Pulse', 'Relentless quarter-note pulse with metallic punctuation at the phrase end.', [0,4,8,12,15], ['drums','rhythm','percussion'], ['industrial-four','mechanical-stop','industrial']),
  // Brazilian: distinguish samba/bossa/choro vocabulary instead of borrowing a generic source rhythm.
  P('brz-samba-batucada', 'brazilian', 'Samba Batucada', 'Syncopated 2/4-derived samba grid with surdo foundation and interlocking caixa/tamborim space.', [0,2,4,6,8,10,12,14], ['rhythm','percussion'], ['samba','batucada','surdo','caixa']),
  P('brz-bossa-violao', 'brazilian', 'Bossa Violão Syncopation', 'Even-eighth Brazilian guitar comping with anticipations and bass/chord independence.', [0,3,6,8,10,13], ['harmony','comp'], ['bossa','violao','syncopation']),
  P('brz-choro-maxixe', 'brazilian', 'Choro Maxixe Pulse', 'Lightly displaced 2/4 accompaniment that leaves room for countermelody and phrase fills.', [0,2,4,7,8,10,12,15], ['harmony','rhythm'], ['choro','maxixe','two-four']),
  P('brz-baiao-zabumba', 'brazilian', 'Baião Zabumba', 'Baião-style pulse with alternating low and high percussion roles.', [0,3,5,8,10,13], ['rhythm','percussion','bass'], ['baiao','zabumba','forro']),

  // Disco: rhythm-section identity is four-on-floor + offbeat hats + octave/funk bass, not generic funk.
  P('disco-four-floor', 'disco', 'Disco Four-on-the-Floor', 'Four steady kick anchors with a repeating bar pulse for strings, claps and bass.', [0,4,8,12], ['rhythm','pulse','drums'], ['four-on-floor','disco','kick']),
  P('disco-offbeat-hat', 'disco', 'Disco Open-Hat Lift', 'Offbeat 8th-note hats that lift every backbeat without turning into a rock hi-hat pattern.', [2,6,10,14], ['rhythm','percussion'], ['offbeat-hat','disco','lift']),
  P('disco-octave-bass', 'disco', 'Disco Octave Bass', 'Driving octave/fifth bass movement designed to converse with the kick and string stabs.', [0,3,4,7,8,11,12,15], ['bass','pulse'], ['octave-bass','disco','drive']),
  P('disco-string-hits', 'disco', 'Disco String Hits', 'Short high-register ensemble punctuation placed around the vocal/hook rather than every subdivision.', [0,4,7,8,12,15], ['harmony','lead'], ['string-hit','disco','punctuation']),

  // House: club grid, syncopated bass, chord-stab architecture.
  P('house-four-floor', 'house', 'House Four-on-the-Floor', 'Steady quarter-note kick with minimal variation so syncopation can live above the pulse.', [0,4,8,12], ['drums','rhythm','pulse'], ['four-on-floor','house','kick']),
  P('house-offbeat-hat', 'house', 'House Offbeat Hat', 'Open-hat lift on the offbeats with occasional phrase-end omission.', [2,6,10,14], ['rhythm','percussion'], ['offbeat-hat','house']),
  P('house-piano-stab', 'house', 'House Piano Stab', 'Short triad/seventh stabs on the upbeat, coordinated with the vocal/hook gaps.', [2,6,10,14], ['harmony','comp'], ['piano-stab','house','upbeat']),
  P('house-bass-lock', 'house', 'House Bass Lock', 'Short bass figures that lock with the kick while anticipating harmonic changes.', [0,3,6,8,11,14], ['bass','pulse'], ['house-bass','syncopation','lock']),

  // R&B: pocket, chromatic bass, 2/4 backbeat, answer phrasing.
  P('rnb-pocket-backbeat', 'r-and-b', 'R&B Pocket Backbeat', 'Deep backbeat with selective ghosting and enough negative space for vocal syncopation.', [0,4,8,12], ['drums','rhythm'], ['pocket','backbeat','space']),
  P('rnb-chromatic-bass', 'r-and-b', 'R&B Chromatic Bass', 'Chord-tone bass with chromatic approaches into thirds and roots at phrase turns.', [0,3,5,7,8,11,13,15], ['bass'], ['chromatic','bass','guide-tone']),
  P('rnb-neo-soul-comp', 'r-and-b', 'R&B Syncopated Comp', 'Extended-chord stabs voiced around guide tones and delayed attacks.', [1,4,6,9,12,14], ['harmony','comp'], ['neo-soul','guide-tone','syncopation']),
  P('rnb-vocal-answer', 'r-and-b', 'R&B Vocal Answer', 'Short melodic response cells occupying intentional gaps after the lead phrase.', [6,7,14,15], ['melody','lead','voice'], ['call-response','answer','space']),


  // Reggae: one-drop, skank, melodic bass, steppers.
  P('reggae-one-drop', 'reggae', 'Reggae One-Drop', 'The classic one-drop pulse with the downbeat de-emphasized and backbeat centered.', [4,12], ['drums','rhythm','pulse'], ['one-drop','reggae','backbeat']),
  P('reggae-skank', 'reggae', 'Reggae Skank', 'Tight offbeat guitar/keyboard chops that answer the bass rather than doubling it.', [2,6,10,14], ['harmony','comp'], ['skank','offbeat','reggae']),
  P('reggae-melodic-bass', 'reggae', 'Melodic Reggae Bass', 'Root/5th/6th movement with anticipations that carry the harmony through sparse drums.', [0,3,6,8,11,14], ['bass'], ['reggae-bass','melodic','anticipation']),
  P('reggae-steppers', 'reggae', 'Reggae Steppers', 'Four-kick foundation used as a deliberate alternate dialect rather than default rock backbeat.', [0,4,8,12], ['drums','pulse'], ['steppers','reggae','four-kick']),

  // Reggaeton: dembow should be an explicit rhythm family, not an inherited label.
  P('reggaeton-dembow-kick', 'reggaeton', 'Reggaeton Dembow Kick', 'Characteristic kick/snare displacement over a fixed 4/4 bar, leaving pockets for vocal cadence.', [0,3,6,8,11,14], ['drums','rhythm'], ['dembow','kick','reggaeton']),
  P('reggaeton-clap-snare', 'reggaeton', 'Reggaeton Clap Grid', 'Dry clap/snare answers that reinforce the dembow backbeat without becoming straight rock.', [4,12,14], ['percussion','rhythm'], ['dembow','clap','backbeat']),
  P('reggaeton-bass-anticipation', 'reggaeton', 'Reggaeton Bass Anticipation', 'Sub/root figures anticipate the next chord around the dembow gap.', [0,3,7,8,11,15], ['bass'], ['dembow','bass','anticipation']),
  P('reggaeton-break-fill', 'reggaeton', 'Reggaeton Break Fill', 'Short percussion interruption used at section boundaries and pre-chorus lifts.', [6,7,8,13,14,15], ['percussion','drums'], ['fill','break','reggaeton']),

  // Soul: pocket + horn responses + organ, not generic R&B.
  P('soul-motown-bass', 'soul', 'Soul Motown Bass', 'Melodic quarter/eighth bass that propels the harmony and carries transitions into the next bar.', [0,3,4,7,8,11,12,15], ['bass','pulse'], ['motown','bass','drive']),
  P('soul-backbeat-tambourine', 'soul', 'Soul Backbeat Tambourine', 'Steady backbeat plus selective phrase lifts from tambourine.', [4,12,14], ['percussion','rhythm'], ['tambourine','backbeat','soul']),
  P('soul-horn-response', 'soul', 'Soul Horn Response', 'Short horn answers that frame the vocal line and avoid constant filling.', [6,7,14,15], ['lead','harmony'], ['horn-response','soul','call-response']),
  P('soul-organ-swell', 'soul', 'Soul Organ Swell', 'Held chord support that grows into phrase cadences rather than static pad wash.', [0,8,12], ['harmony','pad'], ['organ','swell','cadence']),

  // Ska: offbeat guitar, walking bass, horn punctuations, 2/4 urgency.
  P('ska-offbeat-guitar', 'ska', 'Ska Offbeat Guitar', 'Fast short upstroke chops on the offbeats with space for walking bass.', [2,6,10,14], ['harmony','comp'], ['ska','skank','offbeat']),
  P('ska-walking-bass', 'ska', 'Ska Walking Bass', 'Propulsive diatonic bass motion between roots and fifths with phrase-ending approaches.', [0,2,4,6,8,10,12,14], ['bass','pulse'], ['ska','walking-bass','propulsive']),
  P('ska-horn-stabs', 'ska', 'Ska Horn Stabs', 'Short horn punches arranged as phrase punctuation rather than constant eighth-note doubling.', [0,4,7,8,12,15], ['lead','harmony'], ['ska','horn','punctuation']),
  P('ska-drums-rocker', 'ska', 'Ska Drummer Drive', 'Driving kick/snare pattern with up-tempo energy and phrase-end fills.', [0,4,6,8,12,14], ['drums','rhythm'], ['ska','drive','fill']),

  // Drum & Bass: breakbeat topology + sub + 2-step/hybrid accents.
  P('dnb-break-core', 'drum-and-bass', 'DnB Break Core', 'Fast chopped break accents over a stable 2-bar pulse, leaving the sub to define downbeat weight.', [0,3,4,6,8,10,12,13,15], ['drums','rhythm'], ['breakbeat','dnb','chop']),
  P('dnb-sub-phrase', 'drum-and-bass', 'DnB Sub Phrase', 'Sparse sub notes that target root/5th and re-enter after break drops.', [0,7,8,14], ['bass','pulse'], ['sub','dnb','negative-space']),
  P('dnb-two-step', 'drum-and-bass', 'DnB Two-Step Variant', 'Kick/snare displacement derived from UK garage rather than four-on-floor.', [0,6,8,14], ['drums','rhythm'], ['two-step','dnb','swing']),
  P('dnb-drop-fill', 'drum-and-bass', 'DnB Drop Fill', 'Dense 16th/32nd pickup that opens a transition into a new bass phrase.', [10,11,12,13,14,15], ['drums','percussion'], ['fill','drop','dnb']),

  // Industrial: EBM pulse + mechanical stops/noise.
  P('industrial-ebm-pulse', 'industrial', 'Industrial EBM Pulse', 'Rigid four-on-floor pulse coupled to 16th-note bass attacks and controlled stops.', [0,2,4,6,8,10,12,14], ['rhythm','bass','pulse'], ['ebm','mechanical','16th']),
  P('industrial-four-kick', 'industrial', 'Industrial Four Kick', 'Heavy quarter-note kick grid with bar-end interruption for impact.', [0,4,8,12,15], ['drums','pulse'], ['industrial','four-kick','impact']),
  P('industrial-metal-hit', 'industrial', 'Industrial Metal Hit', 'Short metallic impact accents placed around the groove rather than on every beat.', [0,7,8,15], ['percussion','rhythm'], ['metal-hit','noise','punctuation']),
  P('industrial-stop-start', 'industrial', 'Industrial Stop Start', 'Synchronized cutoff/re-entry cell for section transitions and breakdowns.', [0,4,8,12], ['rhythm','harmony','drums'], ['stop-start','breakdown','industrial']),


  P('hiphop-pocket-percussion', 'hip-hop', 'Hip-Hop Pocket Percussion', 'Sparse auxiliary percussion with ghosted subdivision and strong sample-pocket accents.', [3,7,11,15], ['percussion','rhythm'], ['hip-hop','sample-pocket','ghost']),
  P('tango-yumba', 'tango', 'Yumba / Heavy Tango Accent', 'Heavy first/strong-beat tango punctuation with space around the impact so bass, piano and bandoneon can articulate the same large pulse as a phrase-level event.', [0,8], ['bass','harmony','lead','pulse'], ['tango','yumba','marcato','heavy-accent']),
  P('tango-percussion-candombe', 'tango', 'Tango Percussive Accent', 'Discrete percussive punctuation used to support marcato/sincopa without becoming a drum-kit backbeat.', [0,5,8,13], ['percussion'], ['tango','marcato','sincopa','percussion']),
  // Punk / hardcore: downpicked 8ths, D-beat, halftime breakdown, power-chord unity.
  P('punk-downpick-eighths', 'punk-hardcore', 'Punk Downpick Eighths', 'Continuous downpicked eighth-note guitar/bass drive with accents at phrase boundaries.', [0,2,4,6,8,10,12,14], ['harmony','bass','rhythm'], ['punk','downpick','eighths']),
  P('punk-d-beat', 'punk-hardcore', 'D-Beat', 'Fast kick/snare displacement supporting relentless eighth-note guitars.', [0,3,4,6,8,11,12,14], ['drums','rhythm'], ['d-beat','punk','hardcore']),
  P('punk-half-time-breakdown', 'punk-hardcore', 'Hardcore Half-Time Breakdown', 'Half-time kick/snare weight for contrast, leaving guitar to articulate syncopated power chords.', [0,8,12], ['drums','rhythm','harmony'], ['breakdown','half-time','hardcore']),
  P('punk-bass-unison', 'punk-hardcore', 'Punk Bass Unison', 'Bass reinforces guitar roots while adding selective fifths at cadential turns.', [0,2,4,6,8,10,12,14], ['bass','harmony'], ['unison','power-chord','punk']),


  P('industrial-bass-lock', 'industrial', 'Industrial Bass Lock', 'Low-register power/riff attacks synchronized to the mechanical pulse.', [0,2,4,8,10,12,14], ['bass'], ['industrial','EBM-pulse','mechanical-stop']),
  P('industrial-metal-percussion', 'industrial', 'Industrial Metal Percussion', 'Metallic strike accents on transitions and offbeat mechanical cells.', [4,7,12,15], ['percussion'], ['industrial','mechanical-stop','metal-hit']),
  // UK Bass: UK garage 2-step + sub + half-step movement.
  P('ukbass-two-step', 'uk-bass', 'UK Bass Two-Step', 'Kick/snare displacement that makes room for a sub-led groove and swung microtiming.', [0,6,8,14], ['drums','rhythm'], ['two-step','ukg','uk-bass']),
  P('ukbass-sub-anticipation', 'uk-bass', 'UK Bass Sub Anticipation', 'Short sub notes around the backbeat with chord-change anticipations.', [0,3,6,8,11,14], ['bass','pulse'], ['sub','anticipation','uk-bass']),
  P('ukbass-grime-stab', 'uk-bass', 'UK Bass Grime Stab', 'Short dark chord stabs that leave the bass line exposed.', [2,6,10,14], ['harmony','comp'], ['grime','stab','uk-bass']),
  P('ukbass-halfstep-drop', 'uk-bass', 'UK Bass Half-Step Drop', 'Half-step bass movement into a drop or phrase restart.', [7,8,15], ['bass','transition'], ['half-step','drop','uk-bass']),
];
