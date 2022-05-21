import React, { useState } from "react";
import { Container } from "./components/Container";
import Helmet from "react-helmet";
import questionsData from "./data";
import Header from "./components/Header";
import QuestionWithOption from "./components/QuestionContainer";
import Footer from "./components/Footer";

const App = () => {
  const initArray = new Array(questionsData.length).fill({
    selected: "",
    mark: 0,
  });
  const [state, setstate] = useState([...initArray, 0]);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Header />
        {questionsData.map((question, index) => (
          <QuestionWithOption
            key={index}
            select={[state, setstate]}
            {...question}
            index={index}
          />
        ))}
        <Footer state={state} />
      </Container>
    </>
  );
};

export default App;
