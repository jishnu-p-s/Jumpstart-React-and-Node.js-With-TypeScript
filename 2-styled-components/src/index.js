import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  return (
    <>
      <Hero>I am a Hero</Hero>
      <Header>Hello React!</Header>
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
