import React, { useState } from "react";

import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";

import "./Popup.scss";

const Popup = () => {
  const [selectedText, setSelectedText] = useState<string>("");

  // Get the selected text
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
        tabs[0].id as number,
        { from: "popup", subject: "getSelectedText" },
        // ...also specifying a callback to be called
        //    from the receiving end (content script).
        (newSelectedText) => {
          setSelectedText(newSelectedText);
        }
      );
    }
  );

  return (
    <div
      id="popup"
      className="text-black dark:text-white max-h-screen h-full overflow-y-hidden"
    >
      <Header selectedText={selectedText} />
      <Content selectedText={selectedText} />
    </div>
  );
};

export default Popup;
