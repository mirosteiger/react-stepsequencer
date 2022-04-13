import * as Tone from "tone";

export const bufferResource = (url) => {
  new Promise(resolve => {
    const buffer = new Tone.Player(url, () => {
      resolve(buffer);
      buffer.start()
    }).toDestination()
  })
};
