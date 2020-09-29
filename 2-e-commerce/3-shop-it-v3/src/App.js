import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import ItemList from './components/ItemList';
import CartView from './components/CartView';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function App() {

  const cart = useSelector(state => state.cart) // subscribtion
  const nwStatus = useSelector(state => state.nwStatus) // subscribtion

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
          {nwStatus.message ? <div className="alert alert-waring">{nwStatus.message}</div> : null}
          <hr />
          <Route path="/" exact render={() => <ItemList />} />
          <Route path="/cart" render={() => <CartView />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
