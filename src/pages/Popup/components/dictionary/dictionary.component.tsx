import React, { useEffect, useState } from "react";
import Axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

import { DictionaryRes } from "./dictionary";
import { MeaningList } from "../meanings-list/meaning-list.component";
import { SpinnerContainer } from "../spinner-container/spinner-container.component";

import { AudioPlayer } from "../play-audio/play-audio.component";

const axios = Axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries",
});

type Props = {
  selectionText: string;
};

export const Dictionary: React.FC<Props> = ({ selectionText }) => {
  const fetcher = (url: string, config: AxiosRequestConfig) =>
    axios.get(url, config).then((res) => res.data);

  const lang = "en";
  const {
    data: dictionaryRes,
    error: dictionaryResError,
  } = useSWR<DictionaryRes>(`/${lang}/${selectionText}`, fetcher);

  if (dictionaryResError) {
    return (
      <div className="my-10">
        <p className="text-center text-lg">
          Oops Something went wrong! We couldn't find what you were searching
          for :(
        </p>
      </div>
    );
  }
  return (
    <SpinnerContainer isLoading={!dictionaryRes}>
      {!dictionaryRes ? (
        <div className="text-center text-lg">
          Couldn't find any thing similar in the Dictionary
        </div>
      ) : (
        <div className="px-2">
          {dictionaryRes.map((e, i) => (
            <div key={i}>
              <h3 className="text-base font-montserrat font-bold capitalize mb-2">
                {e.word}
              </h3>
              <div className="mb-2">
                {e.phonetics.map((e, i) => (
                  <div key={i}>
                    <span aria-label="Listen To pronounciation">
                      <AudioPlayer url={e.audio} />
                    </span>{" "}
                    <span>{e.text}</span>
                  </div>
                ))}
              </div>
              <MeaningList meanings={e.meanings} />
            </div>
          ))}
        </div>
      )}
    </SpinnerContainer>
  );
};
