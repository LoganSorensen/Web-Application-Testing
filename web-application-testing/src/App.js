import React from 'react';
import './App.css';
import Display from './components/display';

function App() {
  return (
    <div className="App">
      <div className='scoreCards'>
        <div className='score'>
          <h2>Home</h2>
          <div>21</div>
        </div>
        <div className='score'>
          <div>7</div>
          <h2>Inning</h2>
        </div>
        <div className='score'>
          <h2>Away</h2>
          <div>8</div>
        </div>
      </div>
      <Display />
    </div>
  );
}

export default App;
