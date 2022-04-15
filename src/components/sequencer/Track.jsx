import React, { useEffect } from "react";
import { TrackWrapper } from "../../styles/styles";
import { TrackInfo } from "./TrackInfo";
import { TrackSteps } from "./TrackSteps";

const Track = (props) => {
  return (
    <TrackWrapper>
      <TrackInfo name={props.name} url={props.url} />
      <TrackSteps name={props.name} />
    </TrackWrapper>
  );
};

export default Track;
