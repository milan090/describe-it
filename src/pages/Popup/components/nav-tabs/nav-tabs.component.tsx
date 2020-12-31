import React, { useContext } from "react";

import { NavTabsContext } from "../../context/nav-tabs/nav-tabs.context";

import { Tab } from "../tab/tab.component";

export const NavTabs: React.FC = () => {
  const { currentNavTab, setCurrentNavTab } = useContext(NavTabsContext);
  return (
    <div id="nav-tabs" className="absolute bottom-0 left-0 w-full">
      <div className="flex justify-around">
        <Tab
          isActive={currentNavTab === "WIKIPEDIA"}
          label="wikipedia"
          onClick={() => setCurrentNavTab("WIKIPEDIA")}
        />
        <Tab
          isActive={currentNavTab === "DICTIONARY"}
          label="dictionary"
          onClick={() => setCurrentNavTab("DICTIONARY")}
        />
      </div>
    </div>
  );
};
