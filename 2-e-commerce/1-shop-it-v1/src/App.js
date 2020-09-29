import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import ItemList from './components/ItemList';
import CartView from './components/CartView';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {


  const [cart, setCart] = useState({})

  const addToCart = (item, qty = 1) => {
    let { id } = item;
    let cartLine = cart[id];
    if (!cartLine) {
      cartLine = { item, qty: 1 }
    } else {
      cartLine = { item, qty: cartLine.qty + qty }
    }
    if (cartLine.qty === 0) {
      delete cart[id]
      setCart({ ...cart })
    } else {
      setCart({ ...cart, [id]: cartLine })
    }
  }


  return (
    <div className="container">
      <hr />
      <h1>shop-IT</h1>
      <hr />
      <Router>
        <div>
          <i className="fa fa-shopping-cart"></i> <span>{Object.keys(cart).length}</span> items in cart
          <hr />
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">cart</Link>
            </li>
          </ul>
          <hr />
          <Route path="/" exact render={() => <ItemList onBuy={item => addToCart(item)} />} />
          <Route path="/cart" render={() => <CartView onBuy={(item, qty) => addToCart(item, qty)} value={cart} />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
