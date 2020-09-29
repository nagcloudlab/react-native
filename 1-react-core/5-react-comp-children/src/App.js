import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Box from './components/Box'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>react : container components</h1>
      <hr />
      <Box title="veg">
        <Veg />
        <Veg />
      </Box>
      <hr />
      <Box title="non-veg">
        <NonVeg />
        <NonVeg />
        <NonVeg />
      </Box>
      <Box title="veg & non-veg">
        <Veg />
        <NonVeg />
      </Box>
    </div>
  );
}

export default App;
