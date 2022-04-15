// import { useMemo } from "react";
import { Transport } from "./Transport";
import { useStore } from "../../store/zustand";
// import * as Tone from "tone";

const Mixer = ({ player }) => {
  const volume = useStore((state) => state.volume);

  // const limiter = useMemo(() => {
  //   return new Tone.Limiter(-5).toDestination();
  // }, []);

  // const channel = useMemo(() => {
  //   return new Tone.Channel(volume).connect(limiter);
  // }, []);

  return (
    <>
      <Transport player={player} />;
    </>
  );
};

export default Mixer;
