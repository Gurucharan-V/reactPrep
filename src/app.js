import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";



// const swiggyApi = fetch(
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4388159&lng=78.434546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// );
// console.log(swiggyApi);





const Applayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
