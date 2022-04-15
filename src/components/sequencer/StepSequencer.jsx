import React, { Suspense } from "react";
import { SequenceWrapper } from "../../styles/styles";
import { LoadingScreen } from "../misc/LoadingScreen";
import Track from "./Track";

const StepSequencer = ({
  config,
  // playing,
  // currentStep,
}) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SequenceWrapper>
        {config.tracks.map((t, i) => {
          return (
            <Track
              key={i}
              name={t}
              url={config.urls[t]}
            />
          );
        })}
      </SequenceWrapper>
    </Suspense>
  );
};

export default StepSequencer;
