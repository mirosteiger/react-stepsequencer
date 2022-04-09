import React, { useEffect, useRef, useState } from "react";
import { SequencerCase, Main } from "../styles/styles";
import { P1 } from "../styles/styles.text";
import { TransportBar } from "./transport/TransportBar";
import StepSequencer from "./sequencer/StepSequencer";
import { Colorpalette } from "./utils/Colorpalette";
import { useStore } from "../store/zustand";
import { TrackConfig, initialStepState } from "../data/config";
import * as Tone from "tone";
import StepContext from "../store/StepContext";

export const Sequencer = () => {
  const bpm = useStore((state) => state.bpm);
  const swing = useStore((state) => state.swing);
  const play = useStore((state) => state.play);

  const setLoading = useStore((state) => state.setLoading);

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
    Tone.Transport.bpm.value = bpm;
  }, [bpm]);

  useEffect(() => {
    Tone.Transport.swing = swing / 100;
  }, [swing]);

  useEffect(() => {
    Tone.Transport.scheduleRepeat((time) => {
      console.log(time)
      Object.keys(buffersRef.current).forEach((b) => {
        let targetStep = stepsRef.current[b][currentStepRef.current];
        let targetBuffer = buffersRef.current[b];

        // if(b ==="Snare") console.log(stepsRef.current[b])
        if (targetStep === 1) {
          targetBuffer.start(time + 0.05).stop(time+0.25);
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
  }, []);

  useEffect(() => {
    if (play) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
      setCurrentStepState(0);
    }
  }, [play]);

  return (
    <>
      <React.Suspense fallback={<P1>loading...</P1>}>
        <StepContext.Provider value={{ state: stepState, setSteps }}>
          <SequencerCase>
            <TransportBar setSteps={setSteps} />
            <Main>
              {/* <Tracks config={TrackConfig} /> */}
              <StepSequencer
                config={TrackConfig}
                currentStep={currentStepRef.current}
                setBuffers={setBuffers}
                playing={play}
              />
            </Main>
          </SequencerCase>
          <Colorpalette />
        </StepContext.Provider>
      </React.Suspense>
    </>
  );
};
