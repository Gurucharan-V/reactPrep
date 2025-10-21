import react from "react";
import ReactDOM from "react-dom/client";
import ResList from "../resList.js";
import Rescards from "/components/Rescards.js";
import Header from "/components/Header.js";
import Footer from "/components/Footer.js";



const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {
            ResList.map((i) => {
                return <Rescards key={i.info.id} info={i.info} />
            })

        
        }
      </div>
    </div>
  );
};



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
