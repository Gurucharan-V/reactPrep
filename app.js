import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src= 'https://img.freepik.com/free-vector/burger-mascot-logo-design_779267-1066.jpg' alt="logo"  className='logo'/>
            </div>

            <div className="navigation list">
                <ul>
                    <li><a className='home' href="/">Home</a></li>
                    <li><a className='about' href="/">About</a></li>
                    <li><a className='contact' href="/">Contact</a></li>
                </ul>
            </div>

            <div className="cart">
                <img src= "/assets/cart.png" alt="cart" />
            </div>
        </header>
    );
};

const AppLayout = () => {
    return (
        <Header />
    );
};

const root = ReactDOM.createRoot(document.getElementById('headroot'));
root.render(<AppLayout />);
