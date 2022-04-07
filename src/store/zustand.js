import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist((set) => ({
    // use the Users OS-Settings as default
    isDarkmode:
      window.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false,
    switchTheme: () => set((state) => ({ isDarkmode: !state.isDarkmode })),
    selectedPreset: "606",
    switchPreset: () => set((newPreset) => ({ selectedPreset: newPreset })),
    bpm: 120,
    setBpm: (value) => set(() => ({ bpm: value })),
  }))
);
