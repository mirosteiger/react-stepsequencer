import React, { Suspense } from "react";
import {
  SequenceWrapper,
  IndicatorContainer,
  Spacer,
} from "../../styles/styles";
import { LoadingScreen } from "../misc/LoadingScreen";
import Track from "./Track";
import bufferResource from "../utils/bufferResource";
import { StepIndicatorContainer } from "../misc/StepIndicatorContainer";

const StepSequencer = ({ config, setBuffers, currentStep, stepCount }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SequenceWrapper>
        <IndicatorContainer>
          <StepIndicatorContainer
            stepCount={stepCount}
            currentStep={currentStep}
          />
        </IndicatorContainer>
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
    </Suspense>
  );
};

export default StepSequencer;
