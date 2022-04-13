import * as Tone from "tone";

export function loadSamples(config) {
  new Tone.Players(config.urls, () => {
    console.log(config);
    console.log("loaded all urls");
  }).toDestination();
}
