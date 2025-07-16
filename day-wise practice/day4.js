import React from 'react';
import ReactDOM from 'react-dom/client';





/**
 * header component
 * 1. Logo
 * 2. Navigation links
 * 3. Search bar
 * 4. Cart icon
 * 
 * Body component
 * 1. Welcome message
 * 2. Description of the app
 * 3. Restaurant details
 * 4   . Restaurant card component
 *    - Restaurant name
 *    - Restaurant image
 *    - Restaurant rating
 *    - Restaurant cuisine
 *    — Restaurant delevery
 * 
 * Footer component
 */

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src= 'https://img.freepik.com/free-vector/burger-mascot-logo-design_779267-1066.jpg' alt="logo"  className='logo'/>
            </div>

            <div className="navigation list">
                <ul className='nav-list'>
                    <li><a className='home' href="/">Home</a></li>
                    <li><a className='about' href="/">About</a></li>
                    <li><a className='contact' href="/">Contact</a></li>
                </ul>
            </div>
            
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>

            <div className="cart">
                <img src= "https://static.vecteezy.com/system/resources/previews/027/381/351/non_2x/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" alt="cart" />
            </div>
        </header>
    );
};

const Resdata = {
    

};

const Body = () => {

    return (
        
        <div className="Body">
            <div className="restaurant-container" >
                <RestaurantCard
                    name = "Meghana Foods"
                    image = "https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
                    rating = "4.5"
                    cuisine = "Indian, pan Indian"
                    delivery="39 Minutes">
                </RestaurantCard>
                
                {/**restaurant card */}
        </div>

        
        </div>
    );
};




 
const RestaurantCard = (props) => {

    console.log(props);

    const {name, image, rating, cuisine, delivery } = props

    return (
        <div className="restaurant-card">
            <h3>{props.name}</h3>
            <img src={props.image} alt={name} />
            <p>Rating: {props.rating}</p>
            <p>Cuisine: {props.cuisine}</p>
            <p>Delivery in {delivery}</p>
        </div>
    );};


const Footer = () => {
    return (
        <footer className="footer">
        </footer>
    ); 

};


const AppLayout = () => {
    return (
        <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('headroot'));
root.render(<AppLayout />);
