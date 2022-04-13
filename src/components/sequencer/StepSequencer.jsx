import React from "react";
import {
  SequenceWrapper,
  IndicatorWrapper,
  Spacer,
  TrackItemWrapper,
} from "../../styles/styles";
import { bufferResource } from "../utils/bufferResource";
import Track from "./Track";

const StepSequencer = ({ config, playing, currentStep, setBuffers }) => {
  return (
    <SequenceWrapper>
      <IndicatorWrapper>
        <Spacer />
        <div style={{ backgroundColor: "green", flex: "1" }}></div>
        {/* {playing && <StepIndicator step={currentStep} />} */}
      </IndicatorWrapper>
      {config.tracks.map((t, i) => {
        return (
          <Track
            key={i}
            name={t}
            url={config.urls[t]}
            buffer={bufferResource(config.urls[t])}
            setBuffers={setBuffers}
          />
        );
      })}
    </SequenceWrapper>
  );
};

export default StepSequencer;
