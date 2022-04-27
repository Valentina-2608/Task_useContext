import React from 'react';
import './App.css';
import { Buttons} from './components';

function App() {
  return (
    <div className="main">
    <div className="block">
    <div className="caption">
    <h2>Demonstration how to use UseContext</h2>
    </div>
    <Buttons/>
    </div>
    </div>
  );
}

export default App;