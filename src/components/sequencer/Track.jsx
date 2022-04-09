import React, { useEffect } from "react";
import { TrackWrapper } from "../../styles/styles";
import { TrackInfo } from "./TrackInfo";
import { TrackSteps } from "./TrackSteps";
import * as Tone from "tone";
import { useStore } from "../../store/zustand";

const Track = ({ name, url, setBuffers }) => {
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    const player = new Tone.Player(url).toDestination();
    Tone.loaded()
      .then(() => {
        // console.log(name + " loaded");
        setBuffers((buffers) => ({
          ...buffers,
          [name]: player,
        }));
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  return (
    <TrackWrapper>
      <TrackInfo name={name} url={url} />
      <TrackSteps name={name} />
    </TrackWrapper>
  );
};

export default Track;
