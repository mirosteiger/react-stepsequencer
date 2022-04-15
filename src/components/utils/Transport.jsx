import * as Tone from "tone";
import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../store/zustand";
import { SequencerWrapper } from "../../styles/styles";
import { Sequencer } from "../Sequencer";

export const Transport = ({ player }) => {
  const bpm = useStore((state) => state.bpm);
  const swing = useStore((state) => state.swing);
  const volume = useStore((state) => state.volume);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    Tone.Transport.bpm.value = bpm;
    // console.log("bpm: ",  Tone.Transport.bpm.value)
  }, [bpm]);

  useEffect(() => {
    Tone.getDestination().volume.value = volume;
    // console.log("vol: ",  Tone.getDestination().volume.value)
  }, [volume]);

  useEffect(() => {
    Tone.Transport.swing = swing / 100;
    // console.log("swing: ",  Tone.Transport.swing)
  }, [swing]);

  const toggleTransport = () => {
    if (playing) {
      Tone.loaded().then(() => {
        Tone.Transport.start();
      });
    } else {
      Tone.Transport.stop();
      // setCurrentStepState(0);
    }
    console.log(Tone.Transport.state);
  };

  const checkKeyPress = useCallback(
    (e) => {
      if (e.key === " " /*&& e.target === document.body */) {
        e.preventDefault();
        toggleTransport();
      }
    },
    [playing]
  );

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress);
    return () => {
      window.removeEventListener("keydown", checkKeyPress);
    };
  }, [checkKeyPress]);

  return (
    <SequencerWrapper>
      <Sequencer setPlay={setPlaying} play={playing} player={player} />
    </SequencerWrapper>
  );
};
