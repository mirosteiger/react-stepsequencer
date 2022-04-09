import * as Tone from "tone";

import { unstable_createResource } from 'react-cache';

export const bufferResource = (url) => {
  new Promise((resolve) => {
    const buffer = new Tone.Player(url, () => {
      resolve(buffer);
    }).toDestination();
  });
};
