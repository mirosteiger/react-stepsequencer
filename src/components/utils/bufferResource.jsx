import * as Tone from "tone";
import memoize from "lodash.memoize";

const bufferResource = (url) => {
  let buffer;
  new Promise((resolve) => {
    buffer = new Tone.ToneAudioBuffer({ url: url }, () => {
      console.log("sample loaded");
      resolve(buffer);
    });
  });
  return buffer;
};

export default memoize(bufferResource);
