import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/types";
import { currentWord } from "../../redux/words/wordsSlice";
import { Styled } from "./Text.styled";

const Text = () => {
  const words = useSelector((state: StateType) => state.words.words);
  const current = useSelector(currentWord);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [current]);

  return (
    <Styled>
      {words.map((word, index) => (
        <span key={index}>
          <span
            ref={index === current.index ? ref : null}
            className="word"
            style={{
              backgroundColor:
                index === current.index ? current.backgroundColor : "",
              color: word.color,
              padding: index === current.index ? "0 5px" : "",
            }}
          >
            {word.word}
          </span>
          <span> </span>
        </span>
      ))}
    </Styled>
  );
};

export default Text;
