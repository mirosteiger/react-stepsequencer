import React from "react";
import { useTheme } from "styled-components";
import { ColorPanel } from "../../styles/styles";

export const Colorpalette = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-evenly",
        color: "white",
        border: "solid 1px grey",
        margin: "auto",
      }}
    >
      {Object.entries(theme).map((color, i) => {
        return (
          <div key={i} style={{ border: `6px solid ${color[1]}` }}>
            {color[0]}
            <ColorPanel colorCode={color[1]} />
          </div>
        );
      })}
    </div>
  );
};
