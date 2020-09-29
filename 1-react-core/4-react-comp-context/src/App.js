import React from 'react';
import './App.css';

import A from './A'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <hr />
      <h1>react - component context</h1>
      <hr />
      <A color="red" />
      <A color="green" />
      <A color="blue" />
    </div>
  );
}

export default App;
