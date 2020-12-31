import React, { useContext } from "react";

import { Dictionary } from "../dictionary/dictionary.component";
import { WikiPediaSection } from "../wikipedia/wikipedia.component";

import { NavTabsContext } from "../../context/nav-tabs/nav-tabs.context";

type Props = {
  selectedText: string;
};

export const Content: React.FC<Props> = ({ selectedText }) => {
  1;
  const { currentNavTab } = useContext(NavTabsContext);

  return (
    <div className="overflow-y-auto bg-light-secondary dark:bg-dark-secondary h-4/5">
      <div className="mx-3 mt-5 py-2 px-2 bg-light dark:bg-dark rounded-md shadow-2xl break-words">
        {!selectedText ? (
          <div className="text-center text-2xl my-auto">Select Some Text</div>
        ) : (
          <div>
            {currentNavTab === "WIKIPEDIA" ? (
              <WikiPediaSection selectionText={selectedText} />
            ) : (
              ""
            )}
            {currentNavTab === "DICTIONARY" ? (
              <Dictionary selectionText={selectedText} />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};
