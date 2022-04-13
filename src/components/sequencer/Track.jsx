import React, { useEffect } from "react";
import { TrackWrapper } from "../../styles/styles";
import { TrackInfo } from "./TrackInfo";
import { TrackSteps } from "./TrackSteps";
import * as Tone from "tone";
import { useStore } from "../../store/zustand";

const Track = (props) => {
  const { name, url, setBuffers, buffer } = props;
  const setLoading = useStore((state) => state.setLoading);

  const loadSample = async () => {
    // await Tone.loaded();

    const toneBuffer = new Tone.Player(url, () => {
      setBuffers((buffers) => ({
        ...buffers,
        [name]: buffer,
      }));
    });
  };
  useEffect(() => {
    loadSample();

    setLoading(false);
  }, [url]);

  return (
    <TrackWrapper>
      <TrackInfo name={name} url={url} />
      <TrackSteps name={name} />
    </TrackWrapper>
  );
};

export default Track;
