import react from "react";
import ReactDOM from "react-dom/client";
import ResList from "./resList.js";

const Rescards = (props) => {
    const {name, avgRating, cuisines, sla, cloudinaryImageId} = props.info;
  return (
    <div className="res-cards">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>Rating: {avgRating}</p>
      <p>cuisines: {cuisines.join(",")}</p>
      <h4>ETA - {sla.deliveryTime} mins</h4>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://t4.ftcdn.net/jpg/03/53/88/25/360_F_353882575_oBtyGiY9LSJemVfmjnOS0Yd8KQcUJ1sy.jpg" />
      </div>
      <div className="searchbar">
        <input type="text" placeholder=""></input>
        <button>Search</button>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

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

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Boohwa Restaurant. All rights reserved.</p>
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
