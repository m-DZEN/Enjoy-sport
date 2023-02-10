import React, { useState } from 'react';
import Graph from './componentGraph/Graph';
import BiaxialGraph from './componentGraph/BiaxialGraph';
import Diagram from './componentGraph/Diagram';
import './Graphics.css';

export default function Graphics() {
  const [viewComponent, setViewComponent] = useState('Graph');
  return (
    <div className="Graph">
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
