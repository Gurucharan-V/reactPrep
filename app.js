import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const heading = React.createElement("h1", {}, "Hello from React");
root.render(heading);