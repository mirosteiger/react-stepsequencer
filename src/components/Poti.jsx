import React, { useState, useEffect } from "react";
import { Input } from "../styles/styles";
import { CircleSlider } from "react-circle-slider";
import { useTheme } from "styled-components";

export const Poti = ({ value, setValue, min, max }) => {
  const [currentVal, setCurrentVal] = useState(value);
  const theme = useTheme();

  const handleChange = (e) => {
    console.log(e);
    setCurrentVal(e);
  };

  useEffect(() => {
    setValue(currentVal);
  }, [currentVal]);

  return (
    <>
      <CircleSlider
        value={currentVal}
        onChange={handleChange}
        min={min}
        max={max}
        progressColor={theme.primary}
        knobRadius={4}
        circleWidth={1}
        progressWidth={10}
        stepSize={5}
        size={80}
        showTooltip={true}
        tooltipColor={theme.secondary}
        tooltipSize={26}
      />

      {/* <Input
        value={currentVal}
        // onBlur={(e) => setCurrentVal(e)}
      /> */}
    </>
  );
};
