import React, { useState, useEffect, useContext } from "react";

import { AudioContext } from "../../context/audio/audio.context";

import { Volume2 } from "react-feather";

type Props = {
  url: string;
  className?: string;
};

export const AudioPlayer: React.FC<Props> = ({ url, className }) => {
  const { toggle, isPlaying, url: playingUrl } = useContext(AudioContext);

  return (
    <div>
      <Volume2
        className={`cursor-pointer ${
          isPlaying && url === playingUrl
            ? "stroke-primary"
            : "stroke-grey dark:stroke-white"
        } ${className}`}
        // color={isPlaying && url === playingUrl ? "#03a9fc" : "grey"}
        onClick={() => {
          toggle(url);
        }}
      />
    </div>
  );
};
