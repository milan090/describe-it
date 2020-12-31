import React from "react";

import { AudioContextTypes } from "./audio";

export const AudioContext = React.createContext<AudioContextTypes>({
  url: "",
  isPlaying: false,
  setUrl: () => {},
  toggle: () => {},
});
