export const PRESETS = [{ name: "80s" }];

export const TrackConfig = {
  tracks: ["Kick", "Snare", "HiHat", "Crash", "Percussion", "Tom1", "Tom2"],
  samples: {
    Kick: "audio/80s/Kick_20.wav",
    Snare: "audio/80s/Snare_9.wav",
    HiHat: "audio/80s/Hihat_3_closed.wav",
    Crash: "audio/80s/Crash_11.wav",
    Percussion: "audio/80s/Perc3.wav",
    Tom1: "audio/80s/SynthTom02.wav",
    Tom2: "audio/80s/SynthTom03.wav",
  },
};

export const initialStepState = {
  Kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  HiHat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Percussion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Tom1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Tom2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
