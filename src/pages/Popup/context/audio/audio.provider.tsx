import React, { useEffect, useState } from "react";

import { AudioContext } from "./audio.context";

export const AudioProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const toggle = (newUrl: string) => {
    if (url === newUrl) {
      setIsPlaying(!isPlaying);
    } else {
      setUrl(newUrl);
    }
  };

  useEffect(() => {
    if (!url) return;
    const newAudio = new Audio(url);
    if (isPlaying) {
      audio?.removeEventListener("ended", () => {
        setIsPlaying(false);
        console.log("STOPED PLAYING AUDIO");
      });
      audio?.pause();
    }
    setAudio(newAudio);
  }, [url]);

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!audio) return;
    console.log("NEW AUDIO: STARTED PLAYING");
    setIsPlaying(true);
    audio?.addEventListener("ended", () => {
      setIsPlaying(false);
      console.log("STOPED PLAYING AUDIO");
    });
  }, [audio]);

  useEffect(() => {
    return () => {
      audio?.removeEventListener("ended", () => {
        setIsPlaying(false);
        console.log("STOPED PLAYING AUDIO");
      });
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying: isPlaying,
        url: url,
        setUrl: setUrl,
        toggle: toggle,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
