import React, { useContext, useMemo } from "react";
import StepContext from "../../store/StepContext";
import Step from "./Step";

export const TrackSteps = (props) => {
  const context = useContext(StepContext);
  const steps = useMemo(
    () => context.state[props.name],
    [context.state, props.name]
  );

  return (
    <>
      <div style={{ display: "flex", width: "100%", padding: "10px 0 10px 0" }}>
        {steps.map((s, i) => {
          return (
            <Step
              on={s !== 0 ? 1 : 0}
              doubled={s === 2}
              index={i}
              key={i}
              name={props.name}
            />
          );
        })}
      </div>
    </>
  );
};
