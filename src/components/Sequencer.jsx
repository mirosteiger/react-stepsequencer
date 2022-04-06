import React from "react";
import { SequencerCase, TransportBarWrapper } from "../styles/styles";
import { TransportBar } from "./TransportBar";

export const Sequencer = () => {
  return (
    <SequencerCase>
      <TransportBarWrapper>
        <TransportBar />
      </TransportBarWrapper>
    </SequencerCase>
  );
};
