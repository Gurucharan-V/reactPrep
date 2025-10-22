import react from "react";
import ReactDOM from "react-dom/client";
import {Body} from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";


const Applayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
