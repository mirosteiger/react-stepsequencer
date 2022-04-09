import React, { useContext } from "react";
import { StepButton } from "../../styles/styles";

import StepContext from "../../store/StepContext";

const isOffsetColor = (index) =>
  (index > 3 && index < 8) || (index > 11 && index < 16);

export default React.memo(function Step({ on, index, name, doubled }) {
  const context = useContext(StepContext);



  function toggleStep(e) {
    let shiftEnabled = e.shiftKey === true;
    context.setSteps((state) => {
      let steps = [...state[name]];
      let val =
        steps[index] === 0
          ? shiftEnabled
            ? 2
            : 1
          : shiftEnabled && steps[index] === 1
          ? 2
          : 0;
      steps[index] = val;
      return {
        ...state,
        [name]: steps,
      };
    });
  }

  return (
    <StepButton
      on={on}
      offsetColor={isOffsetColor(index)}
      doubled={doubled}
      onClick={toggleStep}
    />
  );
});
