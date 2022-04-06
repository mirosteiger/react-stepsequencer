import create from "zustand"
import { persist } from "zustand/middleware"

export const useTheme = create(persist(set => ({
    // use the Users OS-Settings as default
    isDarkmode: window.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false,
    switchTheme: () => set(state => ({isDarkmode: !state.isDarkmode})),
})))


export const usePreset = create(persist(set => ({
    selectedPreset: "606",
    switchPreset: (newPreset) => set(state => ({selectedPreset: newPreset})),
})))