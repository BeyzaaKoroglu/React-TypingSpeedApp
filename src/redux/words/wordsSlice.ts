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
  trueWords: 0,
  falseWords: 0,
  keystroke: 0,
  trueKeystroke: 0,
  counter: 60,
  isTyping: false,
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
      if (state.isTyping) {
        state.trueWords = 0;
        state.falseWords = 0;
        state.keystroke = 0;
        state.trueKeystroke = 0;
        state.counter = 60;
        state.isTyping = false;
      }
    },
    checkWord: (state, action: PayloadAction<string>) => {
      state.keystroke += 1;
      if (!state.isTyping) state.isTyping = true;
      if (!state.words[state.currentWord.index].word.startsWith(action.payload))
        state.currentWord.backgroundColor = "red";
      else {
        state.trueKeystroke += 1;
        if (state.currentWord.backgroundColor === "red")
          state.currentWord.backgroundColor = "#dddddd";
      }
    },
    goNextWord: (state, action: PayloadAction<string>) => {
      state.keystroke += 1;
      if (action.payload === state.words[state.currentWord.index].word) {
        state.words[state.currentWord.index].color = "green";
        state.trueWords += 1;
        state.trueKeystroke += 1;
      } else {
        state.words[state.currentWord.index].color = "red";
        state.falseWords += 1;
      }

      state.currentWord = {
        index: state.currentWord.index + 1,
        backgroundColor: "#dddddd",
      };
    },

    countDown: (state) => {
      if (state.counter !== 0) state.counter -= 1;
    },
  },
});

export const currentWord = (state: StateType) => state.words.currentWord;
export const counter = (state: StateType) => state.words.counter;
export const {
  changeLanguage,
  refreshWords,
  checkWord,
  goNextWord,
  countDown,
} = wordsSlice.actions;
export default wordsSlice.reducer;
