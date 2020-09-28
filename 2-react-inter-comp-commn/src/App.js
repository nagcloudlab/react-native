import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Box from './components/Box';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> react - inter comp commn</h1>
      <hr />
      <Box title="voting box"/>
    </div>
  );
}

export default App;
