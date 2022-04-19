import ReactDOM from "react-dom";
import React from "react";
import ImageLoader from "./component/ImageLoader";
import "./App.scss";
const App = () => {
  return (
    <div>
      <h1>react dom</h1>
      <ImageLoader />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
