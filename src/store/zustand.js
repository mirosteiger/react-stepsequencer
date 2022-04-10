import create from "zustand";
import { persist } from "zustand/middleware";
import { initialStepState } from "../data/config";

export const useStore = create(
  persist((set) => ({
    // use the Users OS-Settings as default
    isDarkmode:
      window.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false,
    switchTheme: () => set((state) => ({ isDarkmode: !state.isDarkmode })),

    loading: false,
    setLoading: (value) => set(() => ({ loading: value })),

    play: false,
    setPlay: (value) => set(() => ({ play: value })),

    selectedPreset: "606",
    switchPreset: () => set((newPreset) => ({ selectedPreset: newPreset })),
    bpm: 120,
    setBpm: (value) => set(() => ({ bpm: value })),
    steps: 16,
    setSteps: (value) => set(() => ({ steps: value })),
    volume: 100,
    setVolume: (value) => set(() => ({ volume: value })),
    swing: 0,
    setSwing: (value) => set(() => ({ swing: value })),

    stepState: initialStepState,
    setStepState: (value) => set(() => ({ stepState: value })),
  }))
);
