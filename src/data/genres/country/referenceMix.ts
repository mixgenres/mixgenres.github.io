import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "country-bluegrass": {
    "recording": "Bill Monroe - Blue Moon of Kentucky",
    "audio": "samples/Bill Monroe - Blue Moon of Kentucky.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      63.31,
      117.58
    ],
    "targets": {
      "rmsDbfs": -24.633,
      "crestDb": 17.1,
      "lowEnergyShare": 0.2152,
      "highEnergyShare": 0.0623,
      "sideMidRmsRatio": 0.002
    }
  },
  "country-western-swing": {
    "recording": "Bob Wills - San Antonio Rose",
    "audio": "samples/Bob Wills - San Antonio Rose.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      46.31,
      86.0
    ],
    "targets": {
      "rmsDbfs": -16.33,
      "crestDb": 15.34,
      "lowEnergyShare": 0.2699,
      "highEnergyShare": 0.0365,
      "sideMidRmsRatio": 0.0023
    }
  },
  "country-bakersfield": {
    "recording": "Buck Owens - Act Naturally",
    "audio": "samples/Buck Owens - Act Naturally.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      49.52,
      91.97
    ],
    "targets": {
      "rmsDbfs": -21.586,
      "crestDb": 18.437,
      "lowEnergyShare": 0.621,
      "highEnergyShare": 0.1036,
      "sideMidRmsRatio": 0.7795
    }
  },
  "country-honky-tonk": {
    "recording": "Hank Williams - Honky Tonkin'",
    "audio": "samples/Hank Williams - Honky Tonkin'.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      57.09,
      106.03
    ],
    "targets": {
      "rmsDbfs": -20.085,
      "crestDb": 18.004,
      "lowEnergyShare": 0.4785,
      "highEnergyShare": 0.0338,
      "sideMidRmsRatio": 0.0626
    }
  },
  "country-americana": {
    "recording": "Jason Isbell - Cover Me Up",
    "audio": "samples/Jason Isbell - Cover Me Up.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      115.0,
      213.57
    ],
    "targets": {
      "rmsDbfs": -35.672,
      "crestDb": 17.167,
      "lowEnergyShare": 0.6388,
      "highEnergyShare": 0.0272,
      "sideMidRmsRatio": 0.2028
    }
  },
  "country-country-pop": {
    "recording": "Shania Twain - Man! I Feel Like a Woman!",
    "audio": "samples/Shania Twain - Man! I Feel Like a Woman!.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      82.23,
      152.72
    ],
    "targets": {
      "rmsDbfs": -17.622,
      "crestDb": 16.346,
      "lowEnergyShare": 0.2272,
      "highEnergyShare": 0.2559,
      "sideMidRmsRatio": 0.4739
    }
  },
  "country-outlaw": {
    "recording": "Willie Nelson - Whiskey River",
    "audio": "samples/Willie Nelson - Whiskey River.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      60.3,
      111.99
    ],
    "targets": {
      "rmsDbfs": -18.475,
      "crestDb": 13.78,
      "lowEnergyShare": 0.5337,
      "highEnergyShare": 0.0685,
      "sideMidRmsRatio": 0.0032
    }
  }
} satisfies ReferenceMixCatalog;
