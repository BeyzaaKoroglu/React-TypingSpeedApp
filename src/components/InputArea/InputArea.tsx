import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  checkWord,
  goNextWord,
  refreshWords,
} from "../../redux/words/wordsSlice";
import { Styled } from "./InputArea.styled";

const InputArea = () => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState<boolean>(false);
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
  const handleClickClock = () => setIsHidden(!isHidden);
  const handleClickRefresh = () => dispatch(refreshWords());
  return (
    <Styled>
      <input onChange={handleChange} value={value} />
      <button
        style={{ color: isHidden ? "#3c4d5c" : "white" }}
        className="clock"
        onClick={handleClickClock}
      >
        1:00
      </button>
      <button className="refresh" onClick={handleClickRefresh}>
        {"\u{21BB}"}
      </button>
    </Styled>
  );
};

export default InputArea;
