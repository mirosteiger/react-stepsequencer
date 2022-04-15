import { useState, useEffect } from "react";
import * as Tone from "tone";
import { TrackConfig } from "../../data/config";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const player = new Tone.Players(TrackConfig.urls, () => {
      console.log("buffers loaded");
      console.log("player: ", player.get())
      console.log("context: ", player.context)
      console.log("state: ", player.state)
      setPlayer(player);
    }).toDestination();
  }, []);

  return children({ player });
};

export default PlayerProvider;
