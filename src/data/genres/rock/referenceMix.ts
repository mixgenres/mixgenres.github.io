import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "rock-hard-rock": {
    "recording": "ACDC - Back in Black",
    "audio": "samples/ACDC - Back in Black.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      88.86,
      165.03
    ],
    "targets": {
      "rmsDbfs": -12.545,
      "crestDb": 12.722,
      "lowEnergyShare": 0.3211,
      "highEnergyShare": 0.3178,
      "sideMidRmsRatio": 0.4808
    }
  },
  "rock-japanese-melodic-rock": {
    "recording": "Asian Kung-Fu Generation - Rewrite",
    "audio": "samples/Asian Kung-Fu Generation - Rewrite.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      79.56,
      147.75
    ],
    "targets": {
      "rmsDbfs": -12.196,
      "crestDb": 11.035,
      "lowEnergyShare": 0.7382,
      "highEnergyShare": 0.1058,
      "sideMidRmsRatio": 0.3684
    }
  },
  "rock-rock-and-roll": {
    "recording": "Chuck Berry - Johnny B. Goode",
    "audio": "samples/Chuck Berry - Johnny B. Goode.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      56.91,
      105.69
    ],
    "targets": {
      "rmsDbfs": -15.545,
      "crestDb": 14.666,
      "lowEnergyShare": 0.3109,
      "highEnergyShare": 0.1419,
      "sideMidRmsRatio": 0.0075
    }
  },
  "rock-psychedelic": {
    "recording": "Jimi Hendrix - Purple Haze",
    "audio": "samples/Jimi Hendrix - Purple Haze.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      60.33,
      112.05
    ],
    "targets": {
      "rmsDbfs": -16.165,
      "crestDb": 15.45,
      "lowEnergyShare": 0.6608,
      "highEnergyShare": 0.1757,
      "sideMidRmsRatio": 0.1076
    }
  },
  "rock-classic-rock": {
    "recording": "Led Zeppelin - Ramble On",
    "audio": "samples/Led Zeppelin - Ramble On.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      95.9,
      178.1
    ],
    "targets": {
      "rmsDbfs": -19.242,
      "crestDb": 13.285,
      "lowEnergyShare": 0.7638,
      "highEnergyShare": 0.0208,
      "sideMidRmsRatio": 0.3835
    }
  },
  "rock-shoegaze": {
    "recording": "My Bloody Valentine - Only Shallow",
    "audio": "samples/My Bloody Valentine - Only Shallow.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      78.25,
      145.33
    ],
    "targets": {
      "rmsDbfs": -18.649,
      "crestDb": 14.395,
      "lowEnergyShare": 0.3258,
      "highEnergyShare": 0.4394,
      "sideMidRmsRatio": 0.5187
    }
  },
  "rock-alternative": {
    "recording": "Radiohead - Just",
    "audio": "samples/Radiohead - Just.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      85.63,
      159.03
    ],
    "targets": {
      "rmsDbfs": -21.946,
      "crestDb": 13.587,
      "lowEnergyShare": 0.5925,
      "highEnergyShare": 0.1775,
      "sideMidRmsRatio": 0.4716
    }
  },
  "rock-indie": {
    "recording": "The Strokes - Last Nite",
    "audio": "samples/The Strokes - Last Nite.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      70.53,
      130.98
    ],
    "targets": {
      "rmsDbfs": -11.484,
      "crestDb": 11.128,
      "lowEnergyShare": 0.2762,
      "highEnergyShare": 0.3274,
      "sideMidRmsRatio": 0.2532
    }
  },
  "rock-progressive": {
    "recording": "Yes - Roundabout",
    "audio": "samples/Yes - Roundabout.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      181.27,
      336.65
    ],
    "targets": {
      "rmsDbfs": -17.652,
      "crestDb": 12.885,
      "lowEnergyShare": 0.4229,
      "highEnergyShare": 0.0913,
      "sideMidRmsRatio": 0.0667
    }
  }
} satisfies ReferenceMixCatalog;
