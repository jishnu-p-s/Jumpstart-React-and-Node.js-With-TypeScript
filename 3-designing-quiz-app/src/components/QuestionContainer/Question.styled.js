import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin-bottom: 60px;
`;

export const Question = styled.div`
  margin-bottom: 20px;
`;

export const Option = styled.div`
  background: ${(props) => (props.selected ? "lightblue" : "#eee")};
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 14px;
  cursor: pointer;
`;
