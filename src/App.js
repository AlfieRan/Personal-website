import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="background">
      <Router>
          <Navbar />
          <main>
            <h1>Alfie Ranstead</h1>
            <h2>Programmer and Student</h2>
          </main>
      </Router>
    </div>
  );
}

export default App;