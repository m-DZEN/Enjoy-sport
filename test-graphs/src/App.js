import React, { useState } from 'react';
import Graph from './components/Graph';
import BiaxialGraph from './components/BiaxialGraph';
import Diagram from './components/Diagram';
import './App.css';

function App() {
  const [viewComponent, setViewComponent] = useState('Graph');

  return (
    <div className="App">
      <div className="buttonBlock">
        <button type="button" onClick={() => setViewComponent('Graph')}>Graph</button>
        <button type="button" onClick={() => setViewComponent('BiaxialGraph')}>BiaxialGraph</button>
        <button type="button" onClick={() => setViewComponent('Diagram')}>Diagram</button>
      </div>
      <div className="graphBlock">
        {viewComponent === 'Graph' && <Graph />}
        {viewComponent === 'BiaxialGraph' && <BiaxialGraph />}
        {viewComponent === 'Diagram' && <Diagram />}
      </div>
    </div>
  );
}

export default App;
