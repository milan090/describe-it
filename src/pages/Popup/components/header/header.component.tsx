import React from "react";
import { NavTabs } from "../nav-tabs/nav-tabs.component";
import { ThemeSwitch } from "../theme-swtich/theme-switch.component";

import { Sliders } from "react-feather";

import Logo from "../../../../assets/img/logo.svg";

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
              className="cursor-pointer tooltip"
              onClick={() => {
                chrome.tabs.create({
                  url: "chrome://extensions/configureCommands",
                });
              }}
            >
              <Sliders size={14} />
              <span className="tooltiptext tooltipright">Change Shortcut</span>
            </span>
            <span
              id="logo"
              className="text-base font-bold whitespace-nowrap dark:text-light flex justify-center items-center"
            >
              <img src={Logo} width="22px" className="mr-3" />
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
