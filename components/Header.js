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


export default Header;