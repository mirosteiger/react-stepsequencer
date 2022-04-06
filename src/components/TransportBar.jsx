import React from "react";
import { FlexContainer, TransportItem, Select, Button } from "../styles/styles";
import { PRESETS } from "../data/data";
import { usePreset } from "../store/zustand";
import Shuffle from "../assets/shuffle.svg";

export const TransportBar = () => {
  const selectedPreset = usePreset((state) => state.selectedPreset);
  const switchPreset = usePreset((state) => state.switchPreset);

  return (
    <>
      <FlexContainer>
        <TransportItem id="left" style={{ backgroundColor: "red" }}>
          <Select
            defaultValue={selectedPreset}
            onChange={(e) => switchPreset(e.currentTarget.value)}
          >
            {PRESETS.map((preset, key) => {
              return (
                <option value={preset.name} key={key}>
                  {preset.name}
                </option>
              );
            })}
          </Select>
          <Button>
            <img src={Shuffle} width={"30px"} height={"30px"} alt="Shuffle" />
          </Button>
          {/* Preset, Shuffle, Example etc.  */}
        </TransportItem>

        <TransportItem id="middle" style={{ backgroundColor: "yellow" }}>
          Start/Stop, BPM
        </TransportItem>

        <TransportItem id="right" style={{ backgroundColor: "green" }}>
          #Steps, Volume, Swing, Reset
        </TransportItem>
      </FlexContainer>
    </>
  );
};
