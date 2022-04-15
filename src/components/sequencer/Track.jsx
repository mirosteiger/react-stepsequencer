import React, { useEffect } from "react";
import { TrackWrapper } from "../../styles/styles";
import { TrackInfo } from "./TrackInfo";
import { TrackSteps } from "./TrackSteps";

const Track = ({ name, url, buffer, setBuffers }) => {
  useEffect(() => {
    setBuffers((buffers) => ({
      ...buffers,
      [name]: buffer,
    }));
  }, [buffer]);

  return (
    <TrackWrapper>
      <TrackInfo name={name} url={url} />
      <TrackSteps name={name} />
    </TrackWrapper>
  );
};

export default Track;
