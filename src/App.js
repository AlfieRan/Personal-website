import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="background">
      <Router>
          <main>
            <h1>MonoPage</h1>
            <h2>An Entertainment Platform for the future</h2>
          </main>
      </Router>
    </div>
  );
}

export default App;