import React, { useEffect, useRef, useState } from "react";
import { SequencerCase, Main } from "../styles/styles";
import { TransportBar } from "./transport/TransportBar";
import StepSequencer from "./sequencer/StepSequencer";
// import { Colorpalette } from "./utils/Colorpalette";
import { TrackConfig, initialStepState } from "../data/config";
import * as Tone from "tone";
import StepContext from "../store/StepContext";

export const Sequencer = ({ setPlay, play }) => {
  const [stepState, setSteps] = useState(initialStepState);
  const [buffers, setBuffers] = useState({});
  const [currentStep, setCurrentStepState] = useState(0);

  const buffersRef = useRef(buffers);
  buffersRef.current = buffers;
  const stepsRef = useRef(stepState);
  stepsRef.current = stepState;
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

  useEffect(() => {
    Tone.Transport.scheduleRepeat(function (time) {
      Object.keys(buffersRef.current).forEach((b) => {
        let targetStep = stepsRef.current[b][currentStepRef.current];
        let targetBuffer = buffersRef.current[b];

        if (targetStep === 1) {
          targetBuffer.start(time);
        } else if (targetStep === 2) {
          targetBuffer.start();
          targetBuffer.start("+64n");
          targetBuffer.start("+32n");
        }
      });

      setCurrentStepState((step) => {
        return step > 14 ? 0 : step + 1;
      });
    }, "16n");
  }, [TrackConfig]);

  return (
    <>
      <StepContext.Provider value={{ state: stepState, setSteps }}>
        <SequencerCase>
          <TransportBar setSteps={setSteps} play={play} setPlay={setPlay} />
          <Main>
            <StepSequencer
              config={TrackConfig}
              currentStep={currentStepRef.current}
              stepCount={stepState.Kick.length}
              playing={play}
              setBuffers={setBuffers}
            />
          </Main>
        </SequencerCase>
        {/* <Colorpalette /> */}
      </StepContext.Provider>
    </>
  );
};
