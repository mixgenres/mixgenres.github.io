import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "cinematic-golden-age": {
    "recording": "Erich Wolfgang Korngold - The Sea Hawk",
    "audio": "voiced/Erich Wolfgang Korngold - The Sea Hawk.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 21269058,
    "audioModifiedNs": 1791137150451094873,
    "windowsSeconds": [
      186.08,
      345.59
    ],
    "targets": {
      "rmsDbfs": -26.795,
      "crestDb": 14.593,
      "lowEnergyShare": 0.0614,
      "highEnergyShare": 0.0365,
      "sideMidRmsRatio": 0.6221
    }
  },
  "cinematic-modern-score": {
    "recording": "Hans Zimmer - Time",
    "audio": "voiced/Hans Zimmer - Time.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10996638,
    "audioModifiedNs": 1791082629788372290,
    "windowsSeconds": [
      96.2,
      178.65
    ],
    "targets": {
      "rmsDbfs": -13.918,
      "crestDb": 12.584,
      "lowEnergyShare": 0.6231,
      "highEnergyShare": 0.0303,
      "sideMidRmsRatio": 0.6718
    }
  },
  "cinematic-epic": {
    "recording": "Howard Shore - The Bridge of Khazad-dûm",
    "audio": "voiced/Howard Shore - The Bridge of Khazad-dûm.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8082422,
    "audioModifiedNs": 1791159248172010104,
    "windowsSeconds": [
      70.7,
      131.3
    ],
    "targets": {
      "rmsDbfs": -22.086,
      "crestDb": 13.438,
      "lowEnergyShare": 0.4578,
      "highEnergyShare": 0.0254,
      "sideMidRmsRatio": 1.0005
    }
  },
  "cinematic-minimal-tension": {
    "recording": "Jóhann Jóhannsson - The Beast",
    "audio": "samples/Jóhann Jóhannsson - The Beast.mp3",
    "source": "original-with-vocals",
    "audioBytes": 3773381,
    "audioModifiedNs": 1791077066429741331,
    "windowsSeconds": [
      52.96,
      98.36
    ],
    "targets": {
      "rmsDbfs": -17.209,
      "crestDb": 14.65,
      "lowEnergyShare": 0.8949,
      "highEnergyShare": 0.0114,
      "sideMidRmsRatio": 0.7712
    }
  },
  "cinematic-hybrid": {
    "recording": "Trent Reznor & Atticus Ross - Hand Covers Bruise",
    "audio": "voiced/Trent Reznor & Atticus Ross - Hand Covers Bruise.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10558958,
    "audioModifiedNs": 1791136895521931241,
    "windowsSeconds": [
      92.36,
      171.53
    ],
    "targets": {
      "rmsDbfs": -23.121,
      "crestDb": 13.912,
      "lowEnergyShare": 0.2736,
      "highEnergyShare": 0.0173,
      "sideMidRmsRatio": 0.7049
    }
  },
  "cinematic-ambient-score": {
    "recording": "Vangelis - Blade Runner Blues",
    "audio": "voiced/Vangelis - Blade Runner Blues.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 24754822,
    "audioModifiedNs": 1791144894599166825,
    "windowsSeconds": [
      216.58,
      402.21
    ],
    "targets": {
      "rmsDbfs": -23.935,
      "crestDb": 15.578,
      "lowEnergyShare": 0.5565,
      "highEnergyShare": 0.0186,
      "sideMidRmsRatio": 0.3431
    }
  }
} satisfies ReferenceMixCatalog;
