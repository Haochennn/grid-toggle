import React, { useState } from 'react';
import { useGridContext } from './GridContext';

const Cell = () => {
  const { handleToggle } = useGridContext();
  const [isActive, setIsActive] = useState(false);

  const toggleCell = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    handleToggle(newStatus);
  };

  return (
    <div
      onClick={toggleCell}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isActive ? 'black' : 'white',
      }}
    ></div>
  );
};

export default Cell;
