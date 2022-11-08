import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkWord,
  counter,
  goNextWord,
  refreshWords,
} from "../../redux/words/wordsSlice";
import Clock from "../Clock";
import { Styled } from "./InputArea.styled";

const InputArea = () => {
  const dispatch = useDispatch();
  const timer = useSelector(counter);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.endsWith(" ")) {
      dispatch(goNextWord(e.target.value.slice(0, -1)));
      setValue("");
    } else {
      dispatch(checkWord(e.target.value));
      setValue(e.target.value);
    }
  };
  const handleClickRefresh = () => {
    setValue("");
    dispatch(refreshWords());
  };
  return (
    <Styled>
      <input disabled={timer === 0} onChange={handleChange} value={value} />
      <Clock />
      <button className="refresh" onClick={handleClickRefresh}>
        {"\u{21BB}"}
      </button>
    </Styled>
  );
};

export default InputArea;
