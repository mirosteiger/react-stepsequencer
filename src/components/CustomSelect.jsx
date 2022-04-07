import React from "react";
import { Option, Select } from "../styles/styles";
import { useStore } from "../store/zustand";

export const CustomSelect = ({ data }) => {
  const selectedPreset = useStore((state) => state.selectedPreset);
  const switchPreset = useStore((state) => state.switchPreset);

  return (
    <>
      <Select type="text" defaultValue={selectedPreset}>
        {data.map((preset, key) => {
          return (
            <Option key={key} onClick={() => switchPreset(preset.name)}>
              {preset.name}
            </Option>
          );
        })}
      </Select>
    </>
  );
};
