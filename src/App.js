import React, { useState } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import Main from './Components/Main';

const App = () => {
  const [ mainDisplayStep, setMainDisplayStep ] = useState(1);
  return (
    <div className="App"> 
      <NavBar setMainDisplayStep={setMainDisplayStep} />
      <Main mainDisplayStep={mainDisplayStep} />
    </div>
  );
}

export default App;
