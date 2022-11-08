export type WordsSliceType = {
  language: string;
  words: Array<Wordtype>;
  currentWord: CurrentWord;
};

export type Wordtype = {
  word: string;
  color: string;
};

export type CurrentWord = {
  index: number;
  backgroundColor: string;
};
