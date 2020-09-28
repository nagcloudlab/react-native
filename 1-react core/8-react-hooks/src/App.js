import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> react : hooks</h1>
      <hr />

      <ClassComponent />
      <hr />
      <HookComponent />


    </div>
  );
}

export default App;
