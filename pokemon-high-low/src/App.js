import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HP from './HP.js';
import ATT from './ATT.js';
import DEF from './DEF.js';
import SPATT from './SPATT.js';
import SPDEF from './SPDEF.js';
import SPEED from './SPEED.js';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Pokemon High Low Game</h1>
          <nav>
            <ul>
              <li>
                <Link to="/HP">HP</Link>
              </li>
              <li>
                <Link to="/ATT">ATTACK</Link>
              </li>
              <li>
                <Link to="/DEF">DEFENSE</Link>
              </li>
              <li>
                <Link to="/SPATT">SPECIAL ATTACK</Link>
              </li>
              <li>
                <Link to="/SPDEF">SPECIAL DEFENSE</Link>
              </li>
              <li>
                <Link to="/SPEED">SPEED</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/HP" element={<HP />} />
          <Route path="/ATT" element={<ATT />} />
          <Route path="/DEF" element={<DEF />} />
          <Route path="/SPATT" element={<SPATT />} />
          <Route path="/SPDEF" element={<SPDEF />} />
          <Route path="/SPEED" element={<SPEED />} />
        </Routes>
      </div>
  );
}

export default App;
