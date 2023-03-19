import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Fruits from './components/Fruits';
import Homepage from './components/Homepage';
import { Routes, Route, Link } from "react-router-dom";
import Birds from './components/Birds';



function App() {
  return (
    <div>   
  	  <nav>
        <ul>
          <li><Link to="/" className="nav-item">Homepage</Link></li>
          <li><Link to="/fruits" className="nav-item">Fruits</Link></li>
          <li><Link to="/birds" className="nav-item">Birds</Link></li>
        </ul>     
	    </nav>
      
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/fruits" element={<Fruits />}></Route>
        <Route path="/birds" element={<Birds />}></Route>
      </Routes>

    </div>
  );
};

export default App;
