import React from "react";
import { QuestionContainer, Question, Option } from "./Question.styled";

const QuestionWithOption = ({ question, options, index, select }) => {
  const [state, setstate] = select;
  const onClick = (option) => {
    state[index] = { mark: option.isAnswer ? 5 : 0, selected: option.text };
    const total = state
      .map((item) => (item.mark ? item.mark : 0))
      .reduce((partialSum, a) => partialSum + a, 0);
    state[state.length - 1] = total;
    setstate([...state]);
  };
  console.log(state);
  return (
    <QuestionContainer>
      <Question>{question}</Question>
      {options.map((option, i) => (
        <Option
          onClick={() => onClick(option)}
          key={i}
          selected={state[index].selected === option.text}
        >
          {option.text}
        </Option>
      ))}
    </QuestionContainer>
  );
};

export default QuestionWithOption;
