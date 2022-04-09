import React from "react";
import "./toggle.css";
import { TransportItemWrapper } from "../../styles/styles";
import { P1 } from "../../styles/styles.text";

export const ToggleSwitch = ({ style, name, value, onSwitch }) => {
  const handleSwitch = () => {
    if (value === 16) {
      onSwitch(32);
    } else onSwitch(16);
  };
  return (
    <TransportItemWrapper style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "fit-content",
          letterSpacing: "0px",
          marginRight: "1.5em",
        }}
      >
        {value ? <P1>{value}</P1> : ""}
        <div style={{ margin: ".7em 0 .7em 0" }}>
          <label class="switch">
            <input type="checkbox" onChange={handleSwitch} />
            <span class="slider round"></span>
          </label>
        </div>

        {name ? <P1>{name}</P1> : ""}
      </div>
    </TransportItemWrapper>
  );
};
