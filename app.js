import React from "react";
import ReactDOM from "react-dom/client";

const block = <div className="firstContainer">
  <h1>This is JSX</h1>
  <p>This is a paragraph</p>
</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(block);
