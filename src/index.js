import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById('app');

ReactDOM.render(
  React.createElement(
    "button",
    {},
    "i am a button, hello world "
  ),
  root
);
