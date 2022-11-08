import styled from "styled-components";

export const Styled = styled.div`
  background-color: #a7c8e7;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px;
  input {
    font-size: 24px;
    height: 40px;
    width: 400px;
    border: 1px solid black;
    border-radius: 5px;
  }
  button {
    font-size: 24px;
    color: white;
    border-radius: 5px;
    margin-left: 10px;
  }

  .refresh {
    background-color: #428bca;
    border: 1px solid #3d86c5;
    margin-top: 5px;
    padding: 3px 10px;
  }

  @media (max-width: 540px) {
    input {
      width: 90%;
      font-size: 20px;
    }
  }
`;
