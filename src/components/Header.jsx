import { LOGO_URL } from "../utils/common";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src= {LOGO_URL} />
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


export default Header;