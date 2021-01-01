import React, { useEffect, useState } from "react";

import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";

import "./Popup.scss";

const Popup = () => {
  const [selectedText, setSelectedText] = useState<string>("");

  // Get the selected text
  useEffect(() => {
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();",
      },
      function (selection) {
        setSelectedText(selection[0]);
      }
    );
  }, []);

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
