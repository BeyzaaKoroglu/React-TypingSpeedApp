export type WordsSliceType = {
  language: string;
  words: Array<Wordtype>;
  currentWord: CurrentWord;
  trueWords: number;
  falseWords: number;
  keystroke: number;
  trueKeystroke: number;
};

export type Wordtype = {
  word: string;
  color: string;
};

export type CurrentWord = {
  index: number;
  backgroundColor: string;
};
