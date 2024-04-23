import { atom } from "jotai";

type DasrkModeStateAtom = {
    isDark: boolean;
  };
  
  // Define the initial state of your atom
  const DarkModeState: DasrkModeStateAtom = {
    isDark: false,
  };
  
  // Create the atom
  export const themeToggleAtom = atom(DarkModeState);