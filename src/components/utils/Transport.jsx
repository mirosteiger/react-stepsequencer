import { useState, useEffect, useCallback, useRef } from "react";
import * as Tone from "tone";

import { useStore } from "../../store/zustand";
import { SequencerWrapper } from "../../styles/styles";
import { Sequencer } from "../Sequencer";

export const Transport = ({ player, channel }) => {
  const bpm = useStore((state) => state.bpm);
  const swing = useStore((state) => state.swing);
  const volume = useStore((state) => state.volume);

  const [currentStep, setCurrentStepState] = useState(0);
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

  const [playing, setPlaying] = useState(false);

  const checkKeyPress = useCallback(
    (e) => {
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        setPlaying(!playing);
      }
    },
    [playing]
  );

  const toggleTransport = () => {
    if (playing) {
      Tone.loaded().then(() => {
        Tone.Transport.start();
      });
    } else {
      Tone.Transport.stop();
      setCurrentStepState(0);
    }
    console.log(Tone.Transport.state);
  };

  useEffect(() => {
    Tone.Transport.bpm.value = bpm;
  }, [bpm]);

  useEffect(() => {
    Tone.getDestination().volume.value = volume;
  }, [volume]);

  useEffect(() => {
    Tone.Transport.swing = swing / 100;
  }, [swing]);

  useEffect(() => {
    toggleTransport();
  }, [playing]);

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress);
    return () => {
      window.removeEventListener("keydown", checkKeyPress);
    };
  }, [checkKeyPress]);

  return (
    <SequencerWrapper>
      <Sequencer
        setPlay={setPlaying}
        play={playing}
        player={player}
        channel={channel}
        currentStepRef={currentStepRef}
        setCurrentStepState={setCurrentStepState}
      />
    </SequencerWrapper>
  );
};
