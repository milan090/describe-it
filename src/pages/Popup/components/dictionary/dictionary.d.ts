export type Phonetcs = {
  text: string;
  audio: string;
};

export type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Array<Definition>;
};

export type DictionaryItem = {
  word: string;
  phonetics: Array<Phonetcs>;
  meanings: Array<Meaning>;
};

export type DictionaryRes = Array<DictionaryItem>;
