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
      let x, y, overlap;
      do {
        overlap = false;
        x = Math.floor(Math.random() * (900 - 50));
        y = Math.floor(Math.random() * (500 - 50));
        for (let i = 0; i < newTargets.length; i++) {
          const distance = Math.sqrt(
            (x - newTargets[i].x) ** 2 + (y - newTargets[i].y) ** 2
          );
          if (distance < 100) {
            overlap = true;
            break;
          }
        }
      } while (overlap);
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black'
      }}
    >
      <div style={{ width: '900px', height: '500px', position: 'relative', backgroundColor: 'white' }}>
        {targets.map((target, index) => (
          <Target
            key={index}
            x={target.x}
            y={target.y}
            onClick={() => handleTargetClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;