import React from "react";
import {
  FlexContainer,
  TransportSection,
  CustomButton,
} from "../styles/styles";
import TransportBarSection from "./TransportBarSection";
import { PRESETS } from "../data/data";
import { CustomSelect } from "./CustomSelect";
import Shuffle from "../assets/svg/shuffle.svg";
import PlayPause from "../assets/svg/PlayPause.svg";
import { useStore } from "../store/zustand";
import { Poti } from "./Poti";

export const TransportBar = () => {
  const bpm = useStore((state) => state.bpm);
  const setBpm = useStore((state) => state.setBpm);

  console.log(bpm);
  return (
    <>
      <FlexContainer>
        <TransportBarSection>
          <CustomSelect data={PRESETS} />
          <CustomButton>
            <img src={Shuffle} alt="Shuffle" width={50} />
          </CustomButton>
          {/* <CustomSelect data={EXAMPLES} /> */}
        </TransportBarSection>

        <TransportSection>
          {/* Start/Stop, BPM */}
          <CustomButton>
            <img src={PlayPause} alt="Play" />
          </CustomButton>
          <Poti value={bpm} setValue={setBpm} min={60} max={180} />
        </TransportSection>

        <TransportSection>
          {/* #Steps, Volume, Swing, Reset */}
        </TransportSection>
      </FlexContainer>
    </>
  );
};
