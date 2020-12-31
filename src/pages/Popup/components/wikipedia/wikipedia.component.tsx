import React, { useEffect, useState } from "react";
import Axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

import { SpinnerContainer } from "../spinner-container/spinner-container.component";
import { WikiPediaArticle, WikiPediaArticleData } from "./wikimedia";

const axios = Axios.create({
  baseURL: "https://en.wikipedia.org/w",
});

type Props = {
  selectionText: string;
};

export const WikiPediaSection: React.FC<Props> = ({ selectionText }) => {
  const fetcher = (url: string, config: AxiosRequestConfig) =>
    axios.get(url, config).then((res) => res.data);

  const wikiPediaArticleQueryUrl = `/api.php?format=json&action=query&prop=extracts|info|pageimages&exintro&explaintext&inprop=url&redirects=1&pithumbsize=500&titles=${selectionText}`;
  const { data: wikiPediaArticleData, error } = useSWR<WikiPediaArticleData>(
    wikiPediaArticleQueryUrl,
    fetcher
  );

  const [
    wikiPediaArticle,
    setWikiPediaArticle,
  ] = useState<WikiPediaArticle | null>(null);

  useEffect(() => {
    if (!wikiPediaArticleData || !!wikiPediaArticleData?.query?.pages[-1])
      return;

    const pageId = Object.keys(wikiPediaArticleData.query.pages)[0];
    setWikiPediaArticle({
      ...wikiPediaArticleData.query.pages[pageId],
      extract: wikiPediaArticleData.query.pages[pageId].extract
        .split(" ")
        .slice(0, 50)
        .join(" "),
    });
  }, [wikiPediaArticleData]);

  if (error || wikiPediaArticleData?.query.pages[-1]) {
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
    <SpinnerContainer isLoading={!wikiPediaArticle}>
      {!!wikiPediaArticle?.thumbnail ? (
        <div className="flex justify-center pt-2 shadow-xl">
          <img
            src={wikiPediaArticle.thumbnail.source}
            alt={`Image of ${wikiPediaArticle?.title}`}
            className="rounded-lg max-w-full max-h-56 object-cover"
          />
        </div>
      ) : null}
      {wikiPediaArticle ? (
        <div
          className={`pb-8 px-2 ${
            wikiPediaArticle.thumbnail ? "pt-8" : "pt-2"
          }`}
        >
          <div className="mb-4">
            <h2 className="font-bold text-xl mb-2">{wikiPediaArticle.title}</h2>
            <p className="text-sm font-inter line mb-2">
              {wikiPediaArticle.extract}
            </p>
          </div>
          <button
            className="py-1 px-6 border-2 border-solid border-primary rounded-md cursor-pointer
            bg-primary hover:bg-transparent 
            text-sm font-semibold text-light hover:text-primary no-underline
            transition-colors duration-150 ease-in-out"
            onClick={() => {
              chrome.tabs.create({
                active: true,
                url: wikiPediaArticle.fullurl,
              });
            }}
          >
            Read More
          </button>
        </div>
      ) : null}
    </SpinnerContainer>
  );
};
