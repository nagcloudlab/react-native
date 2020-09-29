import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import DemoComp from './hooks/reducer/TodoApp'

function App() {
  return (
    <div className="container">
      <hr />
      <h1> react : hooks</h1>
      <hr />

      <DemoComp/>

    </div>
  );
}

export default App;
