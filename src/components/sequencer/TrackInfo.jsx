import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  TrackItemWrapper,
  RoundButton,
  TrackButtonWrapper,
  SampleWrapper,
  SampleLabel,
} from "../../styles/styles";
import IconButton from "../misc/IconButton";
import { Poti } from "../misc/Poti";
import * as Tone from "tone";
import { IconRandom } from "../icons/Icons";

export const TrackInfo = ({ name, url }) => {
  const theme = useTheme();
  const [isSolo, setSolo] = useState(false);
  const [isMute, setMute] = useState(false);
  const [trackVolume, setTrackVolume] = useState(100);

  return (
    <TrackItemWrapper>
      <TrackButtonWrapper>
        <RoundButton
          isActive={isSolo}
          activeColor={theme.primary}
          onClick={() => setSolo(!isSolo)}
        >
          S
        </RoundButton>
        <RoundButton
          isActive={isMute}
          activeColor={theme.error}
          onClick={() => setMute(!isMute)}
        >
          M
        </RoundButton>
      </TrackButtonWrapper>

      <SampleWrapper>
        <SampleLabel disabled defaultValue={name}>
          {name}
        </SampleLabel>
      </SampleWrapper>
      <div style={{ display: "flex" }}>
        <IconButton >
          <IconRandom color={theme.textInverse} width={"30px"} height={"100%"}/>
        </IconButton>
        <Poti
          value={trackVolume}
          setValue={setTrackVolume}
          min={0}
          max={100}
          stepSize={1}
          size={50}
        />
      </div>
    </TrackItemWrapper>
  );
};
