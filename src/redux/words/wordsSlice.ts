import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data/words.json";
import { StateType } from "../types";
import { WordsSliceType, Wordtype } from "./types";

const getWords = (language: string) => {
  let words: Wordtype[] = [];
  if (language === "turkish" || language === "english")
    words = data.words
      .sort(() => Math.random() - 0.5)
      .slice(0, 60)
      .map((word) => {
        return {
          word: word[language],
          color: "black",
        };
      });
  return words;
};

const initialState: WordsSliceType = {
  language: "turkish",
  words: getWords("turkish"),
  currentWord: { index: 0, backgroundColor: "#dddddd" },
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.words = getWords(action.payload);
      state.currentWord = { index: 0, backgroundColor: "#dddddd" };
    },
    refreshWords: (state) => {
      state.words = getWords(state.language);
      state.currentWord = { index: 0, backgroundColor: "#dddddd" };
    },
    checkWord: (state, action: PayloadAction<string>) => {
      if (!state.words[state.currentWord.index].word.startsWith(action.payload))
        state.currentWord.backgroundColor = "red";
      else if (state.currentWord.backgroundColor === "red")
        state.currentWord.backgroundColor = "#dddddd";
    },
    goNextWord: (state, action: PayloadAction<string>) => {
      if (action.payload === state.words[state.currentWord.index].word)
        state.words[state.currentWord.index].color = "green";
      else state.words[state.currentWord.index].color = "red";

      state.currentWord = {
        index: state.currentWord.index + 1,
        backgroundColor: "#dddddd",
      };
    },
  },
});

export const currentWord = (state: StateType) => state.words.currentWord;
export const { changeLanguage, refreshWords, checkWord, goNextWord } =
  wordsSlice.actions;
export default wordsSlice.reducer;
