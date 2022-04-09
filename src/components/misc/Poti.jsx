import React, { useState, useEffect } from "react";
import { CircleSlider } from "react-circle-slider";
import { useTheme } from "styled-components";
import { P1 } from "../../styles/styles.text";
import { TransportItemWrapper } from "../../styles/styles";

export const Poti = ({ name, value, setValue, min, max, stepSize, size, style }) => {
  const [currentVal, setCurrentVal] = useState(value);
  const theme = useTheme();

  const handleChange = (e) => {
    setCurrentVal(e);
  };

  useEffect(() => {
    setValue(currentVal);
  }, [currentVal]);

  return (
    <TransportItemWrapper style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "fit-content",
          letterSpacing: "0px",
        }}
      >
        <CircleSlider
          value={currentVal}
          onChange={handleChange}
          min={min}
          max={max}
          progressColor={theme.primary}
          knobRadius={6}
          circleWidth={1}
          progressWidth={2}
          stepSize={stepSize}
          size={size}
          showTooltip={true}
          tooltipColor={theme.secondary}
          tooltipSize={24}
        />
        {name ? <P1>{name}</P1> : ""}
      </div>
    </TransportItemWrapper>
  );
};
