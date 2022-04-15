import * as Tone from "tone";
import memoize from "lodash.memoize";

const bufferResource = (url) => {
  let buffer;
  new Promise((resolve) => {
    buffer = new Tone.Player(url, () => {
      console.log("sample - " + url + " - loaded");
      resolve(buffer);
    })
      .toDestination();
  });
  return buffer;
};

export default memoize(bufferResource);
