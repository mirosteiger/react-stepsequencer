import React from "react";
import { StepIndicatorWrapper, IndicatorButton } from "../../styles/styles";
import { TrackInfo } from "../sequencer/TrackInfo";

export const StepIndicatorContainer = ({ stepCount, currentStep }) => {
  return (
    <StepIndicatorWrapper>
      <TrackInfo style={{ visibility: "hidden", height: "0px", marginTop: "0", marginBottom: "0" }} />
      {Array.from(Array(stepCount)).map((x, index) => (
        <IndicatorButton key={index} active={currentStep === index ? 1 : 0} />
      ))}
    </StepIndicatorWrapper>
  );
};
