import React from "react";
import { NavTabsContext } from "../../context/nav-tabs/nav-tabs.context";
import { NavTabs } from "../nav-tabs/nav-tabs.component";
import { ThemeSwitch } from "../theme-swtich/theme-switch.component";

type Props = {
  selectedText: string;
};

export const Header: React.FC<Props> = ({ selectedText }) => {
  return (
    <div className="sticky font-montserrat bg-light dark:bg-dark dark:text-white shadow-lg z-10 h-1/5 box-border">
      <div className="h-full">
        <div id="top" className="px-4 pt-3 mb-4">
          <div className="flex justify-between flex-row items-center">
            <span
              id="logo"
              className="text-base font-bold whitespace-nowrap dark:text-light"
            >
              Describe-It
            </span>
            <span id="theme-switch">
              <ThemeSwitch />
            </span>
          </div>
        </div>
        <div className="px-3 text-center">
          <span className="capitalize dark:text-light">
            Selected:{" "}
            {selectedText.length < 25
              ? selectedText || "Nothing selected"
              : "Too long"}
          </span>
        </div>
        <hr className="bg-line-light w-full h-0.5 border-none mb-4 mt-2 dark:bg-gray-700" />
        <NavTabs />
      </div>
    </div>
  );
};
