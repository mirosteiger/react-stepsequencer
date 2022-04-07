import React from "react";
import { TransportSection, TransportItemWrapper } from "../styles/styles";

const TransportBarSection = ({ children }) => {
  return (
    <TransportSection>
      {/* Preset, Shuffle, Example etc.  */}
      <TransportItemWrapper>{children}</TransportItemWrapper>
    </TransportSection>
  );
};

export default TransportBarSection;
