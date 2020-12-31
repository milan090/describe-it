import React from "react";

import { NavTabsContextTypes } from "./nav-tabs";

export const NavTabsContext = React.createContext<NavTabsContextTypes>({
  currentNavTab: "WIKIPEDIA",
  setCurrentNavTab: () => {},
});
