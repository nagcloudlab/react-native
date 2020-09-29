import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Item from './components/Item';

function App() {

  const [products] = useState(
    [
      {
        id: 1,
        name: 'Laptop',
        price: 149000.00,
        description: 'New mac pro',
        canBuy: true,
        imageUri: 'images/Laptop.png'
      },
      {
        id: 2,
        name: 'Mobile',
        price: 14000.00,
        description: 'New  pro',
        canBuy: true,
        imageUri: 'images/Mobile.png'
      }
    ]
  )

  const renderProducts = () => {
    return products.map(product => {
      return (
        <div key={product.id} className="list-group-item">
          <Item value={product} />
        </div>
      )
    })
  }

  return (
    <div className="container">

      <hr />
      <h1>shop-IT</h1>
      <hr />

      {renderProducts()}

    </div>
  );
}

export default App;
