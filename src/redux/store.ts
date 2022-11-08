import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from "./words/wordsSlice";

export const store = configureStore({
  reducer: {
    words: wordsSlice,
  },
});
