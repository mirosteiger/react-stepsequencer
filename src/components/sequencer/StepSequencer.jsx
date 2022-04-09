import React from "react";
import {
  SequenceWrapper,
  // IndicatorWrapper,
  // StepIndicator,
} from "../../styles/styles";
import { bufferResource } from "../utils/bufferResource";
import Track from "./Track";

const StepSequencer = ({ config, playing, currentStep, setBuffers }) => {
  return (
    <SequenceWrapper>
      {/* <IndicatorWrapper>
        {playing && <StepIndicator step={currentStep} />}
      </IndicatorWrapper> */}
      {config.tracks.map((t, i) => {
        return (
          <Track
            key={i}
            name={t}
            url={config.samples[t]}
            buffer={bufferResource(config.samples[t])}
            setBuffers={setBuffers}
          />
        );
      })}
    </SequenceWrapper>
  );
};

export default StepSequencer;
