import React from 'react';
import Grid from './Grid';
import { GridProvider } from './GridContext';

function App() {
  return (
    <div className="App">
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
  );
}

export default App;
