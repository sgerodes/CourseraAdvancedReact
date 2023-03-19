import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Fruits from './components/Fruits';
import Homepage from './components/Homepage';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div>   
  	  <nav>
        <ul>
          <li><Link to="/" className="nav-item">Homepage</Link></li>
          <li><Link to="/fruits" className="nav-item">Fruits</Link></li>
        </ul>     
	    </nav>
      
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/fruits" element={<Fruits />}></Route>
      </Routes>

    </div>
  );
};

export default App;
