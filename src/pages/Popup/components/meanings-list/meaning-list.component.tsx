import React from "react";
import { DefitionList } from "../definitions-list/definition.component";

import { Meaning } from "../dictionary/dictionary";

type Props = {
  meanings: Meaning[];
};

export const MeaningList: React.FC<Props> = ({ meanings }) => {
  return (
    <div>
      {meanings.map(({ definitions, partOfSpeech }, i) => (
        <div className="text-sm" key={i}>
          <p className="italic font-bold mb-2">{partOfSpeech}</p>
          <DefitionList definitions={definitions} />
        </div>
      ))}
    </div>
  );
};
