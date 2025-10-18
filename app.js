import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", null, "Hello, React!");

const headingbody = React.createElement("div", { id: "headingbody" }, [
  React.createElement(
    "h1",
    { id: "heading" },
    "This is a heading inside the heading body."
  ),
  React.createElement(
    "p",
    { style: { color: "blue" } },
    "This is a paragraph inside the heading body."
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(React.Fragment, null, heading, headingbody));
