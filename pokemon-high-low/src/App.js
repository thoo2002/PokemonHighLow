import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom';
import HP from './HP.js';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Pokemon High Low Game</h1>
        <button onClick={() => window.location.href = '/HP'}>
          HP
        </button>
        <button>
          ATTACK
        </button>
        <button>
          DEFENSE
        </button>
        <button>
          SP ATTACK
        </button>
        <button>
          SP DEFENSE
        </button>
        <button>
          SPEED
        </button>
      </header>

      <Switch>
        <Route path="/HP">
          <HP/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
