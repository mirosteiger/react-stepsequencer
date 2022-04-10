import React from "react";
import { TransportSection, TransportBarWrapper } from "../../styles/styles";
import { P1 } from "../../styles/styles.text";
import TransportBarSection from "./TransportBarSection";
import { emptyStepState, PRESETS } from "../../data/config";
import { CustomSelect } from "../misc/CustomSelect";
import { IconPlay, IconStop } from "../icons/Icons";
import { useStore } from "../../store/zustand";
import { Poti } from "../misc/Poti";
import IconButton from "../misc/IconButton";
import { useTheme } from "styled-components";

export const TransportBar = ({ setSteps }) => {
  const theme = useTheme();
  const bpm = useStore((state) => state.bpm);
  const volume = useStore((state) => state.volume);
  const swing = useStore((state) => state.swing);
  const play = useStore((state) => state.play);

  const setBpm = useStore((state) => state.setBpm);
  const setVolume = useStore((state) => state.setVolume);
  const setSwing = useStore((state) => state.setSwing);
  const setPlay = useStore((state) => state.setPlay);

  const handleReset = () => {
    if (window.confirm("Wanna reset your Tracks?") === true) {
      setSteps(emptyStepState);
    } else {
      return;
    }
  };

  const handleCompleteShuffle = () => {
    alert("ShuffleShuffleShuffleShuffle");
  };

  return (
    <TransportBarWrapper>
      <TransportBarSection>
        <CustomSelect
          name={"preset"}
          data={PRESETS}
          style={{ marginRight: "1.5em" }}
        />
        <P1
          fontWeight={"bolder"}
          type={"button"}
          onClick={handleCompleteShuffle}
        >
          Randomize <br />
          Pattern
        </P1>
      </TransportBarSection>

      {/* //////////////////////////////////// */}

      <TransportSection style={{ justifyContent: "center" }}>
        {/* Start/Stop, BPM */}

        <IconButton
          name={"Play"}
          radius={"40em"}
          style={{ marginRight: "1.5em", paddingLeft: "30px" }}
          onClick={() => setPlay(true)}
          active={play}
        >
          <IconPlay color={theme.textInverse} width={"50px"} height={"50px"} />
        </IconButton>
        <IconButton
          name={"Stop"}
          radius={"40em"}
          style={{ marginRight: "1.5em" }}
          onClick={() => setPlay(false)}
          active={!play}
        >
          <IconStop color={theme.textInverse} width={"50px"} height={"50px"} />
        </IconButton>
        <Poti
          name={"BPM"}
          value={bpm}
          setValue={setBpm}
          min={60}
          max={180}
          size={70}
          style={{ marginRight: "1.5em" }}
        />
      </TransportSection>

      {/* //////////////////////////////////// */}

      <TransportSection style={{ justifyContent: "flex-end" }}>
        {/* #Steps, Volume, Swing, Reset */}

        <Poti
          name={"Volume"}
          value={volume}
          setValue={setVolume}
          min={0}
          max={100}
          stepSize={1}
          size={70}
          style={{ marginRight: "1.5em" }}
        />
        <Poti
          name={"Swing"}
          value={swing}
          setValue={setSwing}
          min={0}
          max={100}
          stepSize={1}
          size={70}
          style={{ marginRight: "1.5em" }}
        />

        <P1 fontWeight={"bolder"} type={"button"} onClick={handleReset}>
          Reset
        </P1>
      </TransportSection>
    </TransportBarWrapper>
  );
};
