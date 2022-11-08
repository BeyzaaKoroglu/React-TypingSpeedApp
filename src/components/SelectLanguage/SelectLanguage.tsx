import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../redux/types";
import { changeLanguage } from "../../redux/words/wordsSlice";
import { Styled } from "./SelectLanguage.styled";

const SelectLanguage = () => {
  const language = useSelector((state: StateType) => state.words.language);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <Styled>
      <select value={language} onChange={handleChange}>
        <option value="turkish">Türkçe</option>
        <option value="english">English</option>
      </select>
    </Styled>
  );
};

export default SelectLanguage;
