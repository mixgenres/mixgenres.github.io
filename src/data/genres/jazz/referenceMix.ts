import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "jazz-hard-bop": {
    "recording": "Art Blakey - Moanin'",
    "audio": "samples/Art Blakey - Moanin'.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      203.72,
      378.33
    ],
    "targets": {
      "rmsDbfs": -16.866,
      "crestDb": 14.943,
      "lowEnergyShare": 0.3269,
      "highEnergyShare": 0.1104,
      "sideMidRmsRatio": 0.5121
    }
  },
  "jazz-bebop": {
    "recording": "Charlie Parker - Ko-Ko",
    "audio": "samples/Charlie Parker - Ko-Ko.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      63.02,
      117.05
    ],
    "targets": {
      "rmsDbfs": -21.503,
      "crestDb": 14.509,
      "lowEnergyShare": 0.1124,
      "highEnergyShare": 0.3587,
      "sideMidRmsRatio": 0.0019
    }
  },
  "jazz-big-band": {
    "recording": "Count Basie - One O'Clock Jump",
    "audio": "samples/Count Basie - One O'Clock Jump.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      62.68,
      116.4
    ],
    "targets": {
      "rmsDbfs": -21.038,
      "crestDb": 17.147,
      "lowEnergyShare": 0.2493,
      "highEnergyShare": 0.0865,
      "sideMidRmsRatio": 0.0367
    }
  },
  "jazz-gypsy-jazz": {
    "recording": "Django Reinhardt - Minor Swing",
    "audio": "samples/Django Reinhardt - Minor Swing.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      68.6,
      127.4
    ],
    "targets": {
      "rmsDbfs": -20.998,
      "crestDb": 15.893,
      "lowEnergyShare": 0.0627,
      "highEnergyShare": 0.0789,
      "sideMidRmsRatio": 0.0662
    }
  },
  "jazz-cool": {
    "recording": "Miles Davis - Boplicity",
    "audio": "samples/Miles Davis - Boplicity.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      63.96,
      118.78
    ],
    "targets": {
      "rmsDbfs": -16.96,
      "crestDb": 14.534,
      "lowEnergyShare": 0.1929,
      "highEnergyShare": 0.0605,
      "sideMidRmsRatio": 0.0028
    }
  },
  "jazz-modal": {
    "recording": "Miles Davis - So What",
    "audio": "samples/Miles Davis - So What.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      197.25,
      366.32
    ],
    "targets": {
      "rmsDbfs": -23.026,
      "crestDb": 19.255,
      "lowEnergyShare": 0.2674,
      "highEnergyShare": 0.265,
      "sideMidRmsRatio": 0.3951
    }
  },
  "jazz-free-jazz": {
    "recording": "Ornette Coleman - Lonely Woman",
    "audio": "samples/Ornette Coleman - Lonely Woman.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      106.0,
      196.85
    ],
    "targets": {
      "rmsDbfs": -29.997,
      "crestDb": 18.772,
      "lowEnergyShare": 0.2529,
      "highEnergyShare": 0.2258,
      "sideMidRmsRatio": 0.6654
    }
  },
  "jazz-post-bop": {
    "recording": "Wayne Shorter - Footprints",
    "audio": "samples/Wayne Shorter - Footprints.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      157.47,
      292.44
    ],
    "targets": {
      "rmsDbfs": -17.245,
      "crestDb": 16.282,
      "lowEnergyShare": 0.3248,
      "highEnergyShare": 0.1649,
      "sideMidRmsRatio": 0.2663
    }
  },
  "jazz-jazz-fusion": {
    "recording": "Weather Report - Birdland",
    "audio": "samples/Weather Report - Birdland.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      156.03,
      289.77
    ],
    "targets": {
      "rmsDbfs": -21.928,
      "crestDb": 13.849,
      "lowEnergyShare": 0.3608,
      "highEnergyShare": 0.0795,
      "sideMidRmsRatio": 0.1165
    }
  }
} satisfies ReferenceMixCatalog;
