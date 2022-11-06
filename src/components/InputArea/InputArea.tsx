import React from "react";
import { Styled } from "./InputArea.styled";

const InputArea = () => {
  return (
    <Styled>
      <input />
      <button className="clock">1:00</button>
      <button className="refresh">{"\u{21BB}"}</button>
    </Styled>
  );
};

export default InputArea;
