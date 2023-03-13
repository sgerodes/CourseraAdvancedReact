import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useState } from 'react';
import IncrementButton from './components/IncrementButton';
import GuessANumber from './components/GuessANumber';
import InputComponent from './components/InputComponent';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';


function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fruits fruits={fruits}/>
        <FruitsCounter fruits={fruits}/>
      </header>
    </div>
  );
}

export default App;
