

import React, { useState, useEffect } from 'react';

function Target(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.y,
        left: props.x,
        backgroundColor: 'red',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer'
      }}
      onClick={props.onClick}
    />
  );
}

function App() {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTargets = [...targets];
      const x = Math.floor(Math.random() * (window.innerWidth - 50));
      const y = Math.floor(Math.random() * (window.innerHeight - 50));
      newTargets.push({ x, y });
      setTargets(newTargets);
    }, 1000);

    return () => clearInterval(interval);
  }, [targets]);

  function handleTargetClick(index) {
    const newTargets = [...targets];
    newTargets.splice(index, 1);
    setTargets(newTargets);
  }

  return (
    <div>
      {targets.map((target, index) => (
        <Target
          key={index}
          x={target.x}
          y={target.y}
          onClick={() => handleTargetClick(index)}
        />
      ))}
    </div>
  );
}

export default App;