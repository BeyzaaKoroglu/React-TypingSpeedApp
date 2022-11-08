import styled from "styled-components";

export const Styled = styled.div`
  width: 300px;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: left;
  h3 {
    background-color: #487a9a;
    border-radius: 5px 5px 0 0;
    padding: 10px 20px;
    color: white;
  }
  div {
    text-align: center;
    p {
      color: #527a1e;
      font-size: 40px;
      font-weight: bold;
      margin: 0;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    font-size: large;
    li {
      border-color: #eeeeee;
      border-width: 1px 0 0 0;
      border-style: solid;
      padding: 10px 20px;
      span {
        float: right;
      }
    }
    li:nth-child(2n + 1) {
      background-color: white;
    }
  }
`;
