import React, { useState } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import UpperNav from './Components/UpperNav';

const App = () => {
  const [ mainDisplayStep, setMainDisplayStep ] = useState(1);
  return (
    <div className="App"> 
      <NavBar setMainDisplayStep={setMainDisplayStep} />
      <div className='main'>
        <UpperNav />
        <Main mainDisplayStep={mainDisplayStep} />
      </div>
    </div>
  );
}

export default App;
