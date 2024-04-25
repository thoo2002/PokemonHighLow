import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
//import HP from './HP.js';
import ATT from './ATT.js';
import DEF from './DEF.js';
import SPATT from './SPATT.js';
import SPDEF from './SPDEF.js';
import SPEED from './SPEED.js';

function App() {

  const navigate = useNavigate();

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Pokemon High Low Game</h1>
        <nav>
          <ul>
            {/* <li>
              <button onClick={() => window.location.href='/HP'}>HP</button>
            </li> */}
            <li>
              <button onClick={() => window.location.href='/ATT'}>ATTACK</button>
            </li>
            <li>
              <button onClick={() => window.location.href='/DEF'}>DEFENSE</button>
            </li>
            <li>
              <button onClick={() => window.location.href='/SPATT'}>SPECIAL ATTACK</button>
            </li>
            <li>
              <button onClick={() => window.location.href='/SPDEF'}>SPECIAL DEFENSE</button>
            </li>
            <li>
              <button onClick={() => window.location.href='/SPEED'}>SPEED</button>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        {/* <Route path="/HP" element={<HP />} /> */}
        <Route path="/ATT" element={<ATT />} />
        <Route path="/DEF" element={<DEF />} />
        <Route path="/SPATT" element={<SPATT />} />
        <Route path="/SPDEF" element={<SPDEF />} />
        <Route path="/SPEED" element={<SPEED />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
