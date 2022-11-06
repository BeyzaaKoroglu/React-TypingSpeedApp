import { Styled } from "./Result.styled";

const Result = () => {
  return (
    <Styled>
      <h3>Sonuç</h3>
      <div>
        <p>32 DKS</p>
        <i>(kelime yazabiliyorum)</i>
      </div>
      <ul>
        <li>
          Tuş Vuruşu<span>135</span>
        </li>
        <li>
          Doğruluk
          <span>
            <b>99.26%</b>
          </span>
        </li>
        <li>
          Doğru Kelime<span style={{ color: "green" }}>27</span>
        </li>
        <li>
          Yanlış Kelime<span style={{ color: "red" }}>0</span>
        </li>
      </ul>
    </Styled>
  );
};

export default Result;
