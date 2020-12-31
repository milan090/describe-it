import React from "react";

import { Definition } from "../dictionary/dictionary";

type Props = {
  definitions: Definition[];
};

export const DefitionList: React.FC<Props> = ({ definitions }) => {
  return (
    <ol>
      {definitions.map(({ definition, example, synonyms }) => (
        <li className="ml-4 mb-6" key={definition}>
          <p className="mb-1">{definition}</p>
          <p className="italic text-gray-600 dark:text-gray-300">"{example}"</p>
          {!synonyms ? null : (
            <div className="mt-2 flex flex-wrap">
              {synonyms.map((synonym, i) => (
                <span
                  className="rounded-2xl border-2 border-solid border-gray-400 dark:border-gray-300 px-3 py-0.5 mr-1 mb-2 text-gray-700 dark:text-light"
                  key={i}
                >
                  {synonym}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};
