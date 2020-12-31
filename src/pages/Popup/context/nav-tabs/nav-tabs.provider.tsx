import React, { useState } from "react";

import { NavTabsContext } from "./nav-tabs.context";

import { NavTabsOptions } from "./nav-tabs";

export const NavTabsProvider: React.FC = ({ children }) => {
  const [curentNavTab, setCurrentNavTab] = useState<NavTabsOptions>(
    "WIKIPEDIA"
  );

  return (
    <NavTabsContext.Provider
      value={{
        currentNavTab: curentNavTab,
        setCurrentNavTab: setCurrentNavTab,
      }}
    >
      {children}
    </NavTabsContext.Provider>
  );
};
