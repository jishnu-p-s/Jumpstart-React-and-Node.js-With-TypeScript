import React from "react";

function Footer({ state }) {
  return <h1>Your score: {state[state.length - 1]} points</h1>;
}

export default Footer;
