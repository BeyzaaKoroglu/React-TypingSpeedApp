import { useSelector } from "react-redux";
import { StateType } from "../../redux/types";
import { Styled } from "./Result.styled";

const Result = () => {
  const trueWords = useSelector((state: StateType) => state.words.trueWords);
  const falseWords = useSelector((state: StateType) => state.words.falseWords);
  const keystroke = useSelector((state: StateType) => state.words.keystroke);
  const trueKeystroke = useSelector(
    (state: StateType) => state.words.trueKeystroke
  );

  const wpm = () => {
    return (trueKeystroke / 5).toFixed();
  };
  const accuracyRate = () => {
    return ((trueKeystroke / keystroke) * 100).toFixed(2);
  };

  return (
    <Styled>
      <h3>Sonuç</h3>
      <div>
        <p>{wpm()} WPM</p>
      </div>
      <ul>
        <li>
          Tuş Vuruşu<span>{keystroke}</span>
        </li>
        <li>
          Doğruluk
          <span>
            <b>{accuracyRate()}%</b>
          </span>
        </li>
        <li>
          Doğru Kelime<span style={{ color: "green" }}>{trueWords}</span>
        </li>
        <li>
          Yanlış Kelime<span style={{ color: "red" }}>{falseWords}</span>
        </li>
      </ul>
    </Styled>
  );
};

export default Result;
