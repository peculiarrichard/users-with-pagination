import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index></Index>, document.getElementById("root"));
