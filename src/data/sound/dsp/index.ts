import type { InstrumentDSPOverride } from '../schema/dsp-profile';
import { dspOverride as i_12_string_guitar } from './plucked/12-string-guitar';
import { dspOverride as accordion } from './bellows-and-keys/accordion';
import { dspOverride as acid_303 } from './electronic/acid-303';
import { dspOverride as acoustic_bass } from './plucked/acoustic-bass';
import { dspOverride as acoustic_guitar } from './plucked/acoustic-guitar';
import { dspOverride as agogo } from './metal-and-wood/agogo';
import { dspOverride as alto_sax } from './winds/alto-sax';
import { dspOverride as backing_vocals } from './voice/backing-vocals';
import { dspOverride as bagpipes } from './winds/bagpipes';
import { dspOverride as bandoneon } from './bellows-and-keys/bandoneon';
import { dspOverride as banjo } from './plucked/banjo';
import { dspOverride as bari_sax } from './winds/bari-sax';
import { dspOverride as bass } from './plucked/bass';
import { dspOverride as bass_lead } from './electronic/bass-lead';
import { dspOverride as bassoon } from './winds/bassoon';
import { dspOverride as bata } from './hand-drums/bata';
import { dspOverride as berimbau } from './plucked/berimbau';
import { dspOverride as bodhran } from './hand-drums/bodhran';
import { dspOverride as bombo } from './hand-drums/bombo';
import { dspOverride as bombo_andino } from './hand-drums/bombo-andino';
import { dspOverride as bombo_leguero } from './hand-drums/bombo-leguero';
import { dspOverride as bones } from './metal-and-wood/bones';
import { dspOverride as bongos } from './hand-drums/bongos';
import { dspOverride as bouzouki } from './plucked/bouzouki';
import { dspOverride as brass } from './brass/brass';
import { dspOverride as brush_kit } from './kit/brush-kit';
import { dspOverride as cabasa } from './metal-and-wood/cabasa';
import { dspOverride as cajon } from './hand-drums/cajon';
import { dspOverride as castanets } from './metal-and-wood/castanets';
import { dspOverride as cavaquinho } from './plucked/cavaquinho';
import { dspOverride as celeste } from './metal-and-wood/celeste';
import { dspOverride as cello } from './bowed/cello';
import { dspOverride as celtic_harp } from './plucked/celtic-harp';
import { dspOverride as charango } from './plucked/charango';
import { dspOverride as choir } from './voice/choir';
import { dspOverride as clarinet } from './winds/clarinet';
import { dspOverride as claves } from './metal-and-wood/claves';
import { dspOverride as clavinet } from './bellows-and-keys/clavinet';
import { dspOverride as concertina } from './bellows-and-keys/concertina';
import { dspOverride as congas } from './hand-drums/congas';
import { dspOverride as cowbell } from './metal-and-wood/cowbell';
import { dspOverride as crystal } from './electronic/crystal';
import { dspOverride as cuatro } from './plucked/cuatro';
import { dspOverride as cuica } from './hand-drums/cuica';
import { dspOverride as cumbia_drum } from './hand-drums/cumbia-drum';
import { dspOverride as darbuka } from './hand-drums/darbuka';
import { dspOverride as dikanza } from './metal-and-wood/dikanza';
import { dspOverride as distortion_guitar } from './plucked/distortion-guitar';
import { dspOverride as dizi } from './winds/dizi';
import { dspOverride as drone } from './electronic/drone';
import { dspOverride as drums } from './kit/drums';
import { dspOverride as dub_echo } from './electronic/dub-echo';
import { dspOverride as dulcimer } from './plucked/dulcimer';
import { dspOverride as electric_guitar } from './plucked/electric-guitar';
import { dspOverride as english_horn } from './winds/english-horn';
import { dspOverride as erhu } from './bowed/erhu';
import { dspOverride as fiddle } from './bowed/fiddle';
import { dspOverride as flute } from './winds/flute';
import { dspOverride as fm_ep } from './bellows-and-keys/fm-ep';
import { dspOverride as foot_stomp } from './body-percussion/foot-stomp';
import { dspOverride as french_horn } from './brass/french-horn';
import { dspOverride as fretless_bass } from './plucked/fretless-bass';
import { dspOverride as glockenspiel } from './metal-and-wood/glockenspiel';
import { dspOverride as gongs } from './metal-and-wood/gongs';
import { dspOverride as guacharaca } from './metal-and-wood/guacharaca';
import { dspOverride as guiro } from './metal-and-wood/guiro';
import { dspOverride as guitar } from './plucked/guitar';
import { dspOverride as guitar_harmonics } from './plucked/guitar-harmonics';
import { dspOverride as guitarron } from './plucked/guitarron';
import { dspOverride as guqin } from './plucked/guqin';
import { dspOverride as guzheng } from './plucked/guzheng';
import { dspOverride as halo_pad } from './electronic/halo-pad';
import { dspOverride as hand_percussion } from './body-percussion/hand-percussion';
import { dspOverride as harmonica } from './winds/harmonica';
import { dspOverride as harmonium } from './bellows-and-keys/harmonium';
import { dspOverride as harp } from './plucked/harp';
import { dspOverride as harpsichord } from './bellows-and-keys/harpsichord';
import { dspOverride as hats } from './kit/hats';
import { dspOverride as hichiriki } from './winds/hichiriki';
import { dspOverride as horn_section } from './brass/horn-section';
import { dspOverride as jarana } from './plucked/jarana';
import { dspOverride as jazz_guitar } from './plucked/jazz-guitar';
import { dspOverride as jinghu } from './bowed/jinghu';
import { dspOverride as kalimba } from './plucked/kalimba';
import { dspOverride as kane } from './metal-and-wood/kane';
import { dspOverride as kick } from './kit/kick';
import { dspOverride as kora } from './plucked/kora';
import { dspOverride as koto } from './plucked/koto';
import { dspOverride as log_drum } from './hand-drums/log-drum';
import { dspOverride as low_whistle } from './winds/low-whistle';
import { dspOverride as mandolin } from './plucked/mandolin';
import { dspOverride as maracas } from './metal-and-wood/maracas';
import { dspOverride as marimba } from './metal-and-wood/marimba';
import { dspOverride as melodica } from './winds/melodica';
import { dspOverride as music_box } from './metal-and-wood/music-box';
import { dspOverride as muted_guitar } from './plucked/muted-guitar';
import { dspOverride as muted_trumpet } from './brass/muted-trumpet';
import { dspOverride as noise_sweep } from './electronic/noise-sweep';
import { dspOverride as oboe } from './winds/oboe';
import { dspOverride as ocarina } from './winds/ocarina';
import { dspOverride as orchestral_harp } from './plucked/orchestral-harp';
import { dspOverride as organ } from './bellows-and-keys/organ';
import { dspOverride as oud } from './plucked/oud';
import { dspOverride as overdrive_guitar } from './plucked/overdrive-guitar';
import { dspOverride as paigu } from './hand-drums/paigu';
import { dspOverride as palmas } from './body-percussion/palmas';
import { dspOverride as pan_flute } from './winds/pan-flute';
import { dspOverride as pandeiro } from './hand-drums/pandeiro';
import { dspOverride as piano } from './bellows-and-keys/piano';
import { dspOverride as piccolo } from './winds/piccolo';
import { dspOverride as pick_bass } from './plucked/pick-bass';
import { dspOverride as pipa } from './plucked/pipa';
import { dspOverride as pizz_strings } from './plucked-string/pizz-strings';
import { dspOverride as polysynth } from './electronic/polysynth';
import { dspOverride as quena } from './winds/quena';
import { dspOverride as recorder } from './winds/recorder';
import { dspOverride as repinique } from './hand-drums/repinique';
import { dspOverride as requinto } from './plucked/requinto';
import { dspOverride as rhodes } from './bellows-and-keys/rhodes';
import { dspOverride as ride } from './metal-and-wood/ride';
import { dspOverride as rock_organ } from './bellows-and-keys/rock-organ';
import { dspOverride as ryuteki } from './winds/ryuteki';
import { dspOverride as sampler } from './electronic/sampler';
import { dspOverride as saw_lead } from './electronic/saw-lead';
import { dspOverride as sho } from './free-reed/sho';
import { dspOverride as shaker } from './metal-and-wood/shaker';
import { dspOverride as shakuhachi } from './winds/shakuhachi';
import { dspOverride as shamisen } from './plucked/shamisen';
import { dspOverride as sitar } from './plucked/sitar';
import { dspOverride as slap_bass } from './plucked/slap-bass';
import { dspOverride as slide_guitar } from './plucked/slide-guitar';
import { dspOverride as slow_strings } from './bowed/slow-strings';
import { dspOverride as snare } from './kit/snare';
import { dspOverride as soprano_sax } from './winds/soprano-sax';
import { dspOverride as spanish_guitar } from './plucked/spanish-guitar';
import { dspOverride as spring_reverb } from './electronic/spring-reverb';
import { dspOverride as square_lead } from './electronic/square-lead';
import { dspOverride as steel_drums } from './metal-and-wood/steel-drums';
import { dspOverride as steel_guitar } from './plucked/steel-guitar';
import { dspOverride as strings } from './bowed/strings';
import { dspOverride as sub_bass } from './electronic/sub-bass';
import { dspOverride as surdo } from './hand-drums/surdo';
import { dspOverride as sweep_pad } from './electronic/sweep-pad';
import { dspOverride as synth } from './electronic/synth';
import { dspOverride as synth_brass } from './electronic/synth-brass';
import { dspOverride as synth_strings } from './electronic/synth-strings';
import { dspOverride as tabla } from './hand-drums/tabla';
import { dspOverride as taiko } from './metal-and-wood/taiko';
import { dspOverride as tambor_alegre } from './hand-drums/tambor-alegre';
import { dspOverride as tambora } from './hand-drums/tambora';
import { dspOverride as tamborim } from './hand-drums/tamborim';
import { dspOverride as tambourine } from './metal-and-wood/tambourine';
import { dspOverride as tantan } from './hand-drums/tantan';
import { dspOverride as tape_echo } from './electronic/tape-echo';
import { dspOverride as tenor_sax } from './winds/tenor-sax';
import { dspOverride as timbales } from './hand-drums/timbales';
import { dspOverride as tin_whistle } from './winds/tin-whistle';
import { dspOverride as tremolo_strings } from './bowed/tremolo-strings';
import { dspOverride as tres } from './plucked/tres';
import { dspOverride as triangle } from './metal-and-wood/triangle';
import { dspOverride as trombone } from './brass/trombone';
import { dspOverride as trumpet } from './brass/trumpet';
import { dspOverride as tuba } from './brass/tuba';
import { dspOverride as tubular_bells } from './metal-and-wood/tubular-bells';
import { dspOverride as turntable } from './electronic/turntable';
import { dspOverride as uilleann_pipes } from './winds/uilleann-pipes';
import { dspOverride as upright_bass } from './plucked/upright-bass';
import { dspOverride as vibraphone } from './metal-and-wood/vibraphone';
import { dspOverride as vihuela } from './plucked/vihuela';
import { dspOverride as viola } from './bowed/viola';
import { dspOverride as violin } from './bowed/violin';
import { dspOverride as voice } from './voice/voice';
import { dspOverride as warm_pad } from './electronic/warm-pad';
import { dspOverride as washboard } from './metal-and-wood/washboard';
import { dspOverride as woodblock } from './metal-and-wood/woodblock';
import { dspOverride as xiao } from './winds/xiao';
import { dspOverride as xylophone } from './metal-and-wood/xylophone';
import { dspOverride as zabumba } from './hand-drums/zabumba';
import { dspOverride as zapateado } from './body-percussion/zapateado';

export const instrumentDSPOverrides: Record<string, InstrumentDSPOverride> = {
  "12-string-guitar": i_12_string_guitar,
  "accordion": accordion,
  "acid-303": acid_303,
  "acoustic-bass": acoustic_bass,
  "acoustic-guitar": acoustic_guitar,
  "agogo": agogo,
  "alto-sax": alto_sax,
  "backing-vocals": backing_vocals,
  "bagpipes": bagpipes,
  "bandoneon": bandoneon,
  "banjo": banjo,
  "bari-sax": bari_sax,
  "bass": bass,
  "bass-lead": bass_lead,
  "bassoon": bassoon,
  "bata": bata,
  "berimbau": berimbau,
  "bodhran": bodhran,
  "bombo": bombo,
  "bombo-andino": bombo_andino,
  "bombo-leguero": bombo_leguero,
  "bones": bones,
  "bongos": bongos,
  "bouzouki": bouzouki,
  "brass": brass,
  "brush-kit": brush_kit,
  "cabasa": cabasa,
  "cajon": cajon,
  "castanets": castanets,
  "cavaquinho": cavaquinho,
  "celeste": celeste,
  "cello": cello,
  "celtic-harp": celtic_harp,
  "charango": charango,
  "choir": choir,
  "clarinet": clarinet,
  "claves": claves,
  "clavinet": clavinet,
  "concertina": concertina,
  "congas": congas,
  "cowbell": cowbell,
  "crystal": crystal,
  "cuatro": cuatro,
  "cuica": cuica,
  "cumbia-drum": cumbia_drum,
  "darbuka": darbuka,
  "dikanza": dikanza,
  "distortion-guitar": distortion_guitar,
  "dizi": dizi,
  "drone": drone,
  "drums": drums,
  "dub-echo": dub_echo,
  "dulcimer": dulcimer,
  "electric-guitar": electric_guitar,
  "english-horn": english_horn,
  "erhu": erhu,
  "fiddle": fiddle,
  "flute": flute,
  "fm-ep": fm_ep,
  "foot-stomp": foot_stomp,
  "french-horn": french_horn,
  "fretless-bass": fretless_bass,
  "glockenspiel": glockenspiel,
  "gongs": gongs,
  "guacharaca": guacharaca,
  "guiro": guiro,
  "guitar": guitar,
  "guitar-harmonics": guitar_harmonics,
  "guitarron": guitarron,
  "guqin": guqin,
  "guzheng": guzheng,
  "halo-pad": halo_pad,
  "hand-percussion": hand_percussion,
  "harmonica": harmonica,
  "harmonium": harmonium,
  "harp": harp,
  "harpsichord": harpsichord,
  "hats": hats,
  "hichiriki": hichiriki,
  "horn-section": horn_section,
  "jarana": jarana,
  "jazz-guitar": jazz_guitar,
  "jinghu": jinghu,
  "kalimba": kalimba,
  "kane": kane,
  "kick": kick,
  "kora": kora,
  "koto": koto,
  "log-drum": log_drum,
  "low-whistle": low_whistle,
  "mandolin": mandolin,
  "maracas": maracas,
  "marimba": marimba,
  "melodica": melodica,
  "music-box": music_box,
  "muted-guitar": muted_guitar,
  "muted-trumpet": muted_trumpet,
  "noise-sweep": noise_sweep,
  "oboe": oboe,
  "ocarina": ocarina,
  "orchestral-harp": orchestral_harp,
  "organ": organ,
  "oud": oud,
  "overdrive-guitar": overdrive_guitar,
  "paigu": paigu,
  "palmas": palmas,
  "pan-flute": pan_flute,
  "pandeiro": pandeiro,
  "piano": piano,
  "piccolo": piccolo,
  "pick-bass": pick_bass,
  "pipa": pipa,
  "pizz-strings": pizz_strings,
  "polysynth": polysynth,
  "quena": quena,
  "recorder": recorder,
  "repinique": repinique,
  "requinto": requinto,
  "rhodes": rhodes,
  "ride": ride,
  "rock-organ": rock_organ,
  "ryuteki": ryuteki,
  "sampler": sampler,
  "saw-lead": saw_lead,
  "sho": sho,
  "shaker": shaker,
  "shakuhachi": shakuhachi,
  "shamisen": shamisen,
  "sitar": sitar,
  "slap-bass": slap_bass,
  "slide-guitar": slide_guitar,
  "slow-strings": slow_strings,
  "snare": snare,
  "soprano-sax": soprano_sax,
  "spanish-guitar": spanish_guitar,
  "spring-reverb": spring_reverb,
  "square-lead": square_lead,
  "steel-drums": steel_drums,
  "steel-guitar": steel_guitar,
  "strings": strings,
  "sub-bass": sub_bass,
  "surdo": surdo,
  "sweep-pad": sweep_pad,
  "synth": synth,
  "synth-brass": synth_brass,
  "synth-strings": synth_strings,
  "tabla": tabla,
  "taiko": taiko,
  "tambor-alegre": tambor_alegre,
  "tambora": tambora,
  "tamborim": tamborim,
  "tambourine": tambourine,
  "tantan": tantan,
  "tape-echo": tape_echo,
  "tenor-sax": tenor_sax,
  "timbales": timbales,
  "tin-whistle": tin_whistle,
  "tremolo-strings": tremolo_strings,
  "tres": tres,
  "triangle": triangle,
  "trombone": trombone,
  "trumpet": trumpet,
  "tuba": tuba,
  "tubular-bells": tubular_bells,
  "turntable": turntable,
  "uilleann-pipes": uilleann_pipes,
  "upright-bass": upright_bass,
  "vibraphone": vibraphone,
  "vihuela": vihuela,
  "viola": viola,
  "violin": violin,
  "voice": voice,
  "warm-pad": warm_pad,
  "washboard": washboard,
  "woodblock": woodblock,
  "xiao": xiao,
  "xylophone": xylophone,
  "zabumba": zabumba,
  "zapateado": zapateado,
};
