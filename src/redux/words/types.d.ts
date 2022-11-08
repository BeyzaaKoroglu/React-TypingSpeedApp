export type WordsSliceType = {
  language: string;
  words: Array<Wordtype>;
  currentWord: CurrentWord;
  trueWords: number;
  falseWords: number;
  keystroke: number;
  trueKeystroke: number;
  counter: number;
  isTyping: boolean;
};

export type Wordtype = {
  word: string;
  color: string;
};

export type CurrentWord = {
  index: number;
  backgroundColor: string;
};
