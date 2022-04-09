import React from "react";
import { TransportSection, TransportBarWrapper } from "../../styles/styles";
import { P1 } from "../../styles/styles.text";
import TransportBarSection from "./TransportBarSection";
import { initialStepState, PRESETS } from "../../data/config";
import { CustomSelect } from "../misc/CustomSelect";
import Shuffle from "../../assets/svg/shuffle.svg";
import Play from "../../assets/svg/play.svg";
import Stop from "../../assets/svg/stop.svg";
import { useStore } from "../../store/zustand";
import { Poti } from "../misc/Poti";
import IconButton from "../misc/IconButton";

export const TransportBar = ({ setSteps }) => {
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
      setSteps(initialStepState);
    } else {
      return;
    }
  };
  return (
    <TransportBarWrapper>
      <TransportBarSection>
        {/* <CustomSelect data={EXAMPLES} /> */}

        <CustomSelect
          name={"preset"}
          data={PRESETS}
          style={{ marginRight: "1.5em" }}
        />
        <IconButton
          name={"Shuffle"}
          icon={Shuffle}
          radius={"40em"}
          style={{ marginRight: "1.5em" }}
        />
      </TransportBarSection>

      {/* //////////////////////////////////// */}

      <TransportSection style={{ justifyContent: "center" }}>
        {/* Start/Stop, BPM */}

        <IconButton
          name={"Play"}
          icon={Play}
          radius={"40em"}
          style={{ marginRight: "1.5em" }}
          onClick={() => setPlay(true)}
          active={play}
        />
        <IconButton
          name={"Stop"}
          icon={Stop}
          radius={"40em"}
          style={{ marginRight: "1.5em" }}
          onClick={() => setPlay(false)}
          active={!play}
        />
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
