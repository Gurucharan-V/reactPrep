export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://marketplace.canva.com/EAGHzuEFphw/2/0/1600w/canva-black-and-white-minimalist-circle-restaurant-food-logo-VJaaNSmdIkc.jpg"
          alt="logo"
        />
      </div>
      <div className="nav">
        <div className="navbar">
          <ul>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="cart">
          <img
            src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
};
