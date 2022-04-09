import React from "react";
import { Option, Select, TransportItemWrapper } from "../../styles/styles";
import { useStore } from "../../store/zustand";
import { P1 } from "../../styles/styles.text";

export const CustomSelect = ({ name, data, style }) => {
  const selectedPreset = useStore((state) => state.selectedPreset);
  const switchPreset = useStore((state) => state.switchPreset);

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
        <Select type="text" defaultValue={selectedPreset} height={"100%"}>
          {data.map((preset, key) => {
            return (
              <Option key={key} onClick={() => switchPreset(preset.name)}>
                {preset.name}
              </Option>
            );
          })}
        </Select>
        <P1>{name}</P1>
      </div>
    </TransportItemWrapper>
  );
};
