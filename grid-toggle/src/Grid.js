import React from 'react';
import Cell from './Cell';
import { useGridContext } from './GridContext';

const Grid = () => {
  const { onCount } = useGridContext();

  return (
    <div>
      <h2>On Cells: {onCount}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)' }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Grid;
