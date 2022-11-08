import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../redux/types";
import { countDown, counter } from "../../redux/words/wordsSlice";
import { Styled } from "./Clock.styled";

const Clock = () => {
  const dispatch = useDispatch();
  const timer = useSelector(counter);
  const isTyping = useSelector((state: StateType) => state.words.isTyping);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    if (isTyping) {
      const interval = window.setInterval(() => {
        dispatch(countDown());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timer, isTyping, dispatch]);

  const handleClick = () => setIsHidden(!isHidden);
  return (
    <Styled
      style={{ color: isHidden ? "#3c4d5c" : "white" }}
      onClick={handleClick}
    >
      {`${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`}
    </Styled>
  );
};

export default Clock;
