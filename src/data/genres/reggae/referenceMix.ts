import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "reggae-rocksteady": {
    "recording": "Alton Ellis - Girl I've Got a Date",
    "audio": "samples/Alton Ellis - Girl I've Got a Date.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      50.67,
      94.1
    ],
    "targets": {
      "rmsDbfs": -17.683,
      "crestDb": 15.97,
      "lowEnergyShare": 0.6138,
      "highEnergyShare": 0.0795,
      "sideMidRmsRatio": 0.004
    }
  },
  "reggae-dub": {
    "recording": "Augustus Pablo  King Tubby - King Tubby Meets Rockers Uptown",
    "audio": "samples/Augustus Pablo  King Tubby - King Tubby Meets Rockers Uptown.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      53.85,
      100.01
    ],
    "targets": {
      "rmsDbfs": -15.317,
      "crestDb": 16.504,
      "lowEnergyShare": 0.7345,
      "highEnergyShare": 0.176,
      "sideMidRmsRatio": 0.4127
    }
  },
  "reggae-roots": {
    "recording": "Bob Marley & The Wailers - Three Little Birds",
    "audio": "samples/Bob Marley & The Wailers - Three Little Birds.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      67.26,
      124.9
    ],
    "targets": {
      "rmsDbfs": -21.288,
      "crestDb": 17.989,
      "lowEnergyShare": 0.7929,
      "highEnergyShare": 0.0818,
      "sideMidRmsRatio": 0.1796
    }
  },
  "reggae-one-drop": {
    "recording": "Bob Marley - Natural Mystic",
    "audio": "samples/Bob Marley - Natural Mystic.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      73.46,
      136.42
    ],
    "targets": {
      "rmsDbfs": -17.3,
      "crestDb": 15.67,
      "lowEnergyShare": 0.7716,
      "highEnergyShare": 0.0565,
      "sideMidRmsRatio": 0.2574
    }
  },
  "reggae-rockers": {
    "recording": "Burning Spear - Marcus Garvey",
    "audio": "samples/Burning Spear - Marcus Garvey.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      72.27,
      134.21
    ],
    "targets": {
      "rmsDbfs": -19.724,
      "crestDb": 17.053,
      "lowEnergyShare": 0.7672,
      "highEnergyShare": 0.1018,
      "sideMidRmsRatio": 0.2633
    }
  },
  "reggae-dancehall": {
    "recording": "Sister Nancy - Bam Bam",
    "audio": "samples/Sister Nancy - Bam Bam.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      70.11,
      130.21
    ],
    "targets": {
      "rmsDbfs": -19.955,
      "crestDb": 17.801,
      "lowEnergyShare": 0.8697,
      "highEnergyShare": 0.0431,
      "sideMidRmsRatio": 0.1648
    }
  },
  "reggae-ska": {
    "recording": "The Skatalites - Guns of Navarone",
    "audio": "samples/The Skatalites - Guns of Navarone.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      133.41,
      247.77
    ],
    "targets": {
      "rmsDbfs": -16.038,
      "crestDb": 15.37,
      "lowEnergyShare": 0.2792,
      "highEnergyShare": 0.1692,
      "sideMidRmsRatio": 0.5229
    }
  }
} satisfies ReferenceMixCatalog;
