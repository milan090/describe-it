import React from "react";
import { render } from "react-dom";

import "../../assets/styles/styles.css";

// Importing images ignore (for webpack)
import "../../assets/img/icon-34.png";
import "../../assets/img/icon-128.png";

import Popup from "./Popup";
import "./index.scss";

import { NavTabsProvider } from "./context/nav-tabs/nav-tabs.provider";
import { AudioProvider } from "./context/audio/audio.provider";

render(
  <NavTabsProvider>
    <AudioProvider>
      <Popup />
    </AudioProvider>
  </NavTabsProvider>,
  window.document.querySelector("#app-container")
);
