import React, { useEffect, useRef, useState } from "react";
import { SequencerCase, Main } from "../styles/styles";
import { TransportBar } from "./transport/TransportBar";
import StepSequencer from "./sequencer/StepSequencer";
// import { Colorpalette } from "./utils/Colorpalette";
import { TrackConfig, initialStepState } from "../data/config";
import * as Tone from "tone";
import StepContext from "../store/StepContext";

export const Sequencer = ({ setPlay, play, player }) => {
  const [stepState, setSteps] = useState(initialStepState);
  const [currentStep, setCurrentStepState] = useState(0);

  const stepsRef = useRef(stepState);
  stepsRef.current = stepState;
  const currentStepRef = useRef(currentStep);
  currentStepRef.current = currentStep;

  useEffect(() => {
    Tone.Transport.scheduleRepeat((time) => {
      Object.entries(TrackConfig.urls).forEach((n) => {
        let sampleName = n[0];

        let targetStep = stepsRef.current[sampleName][currentStepRef.current];
        let targetBuffer = player.get(sampleName);

        console.log(targetBuffer.name);

        if (targetStep === 1) {
          targetBuffer.start(time + 0.05);
        }
        if (targetStep === 2) {
          targetBuffer.start(time);
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
              playing={play}
            />
          </Main>
        </SequencerCase>
        {/* <Colorpalette /> */}
      </StepContext.Provider>
    </>
  );
};
