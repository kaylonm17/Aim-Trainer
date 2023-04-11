import React, { useState, useEffect, useRef } from 'react';

function Target(props) {
  if (!props.target) return null;

  return (
    <div
      className="target"
      style={{
        position: 'absolute',
        top: props.target.y,
        left: props.target.x,
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
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTargets = [...targets];
      const x = Math.floor(Math.random() * (900 - 50)); 
      const y = Math.floor(Math.random() * (500 - 50)); 
      newTargets.push({ x, y });
      setTargets(newTargets);
    }, 1000);

    return () => clearInterval(interval);
  }, [targets]);

  function handleTargetClick(index) {
    const newTargets = [...targets];
    const target = newTargets[index];
    if (target) {
      newTargets.splice(index, 1);
      setTargets(newTargets);
      setScore(score + 5);
    }
  }

  function handleBackgroundClick(event) {
    const clickedOnTarget = event.target.classList.contains('target');
    if (!clickedOnTarget && targets.length > 0) {
      setLives(lives - 1);
      if (lives === 1) {
        setGameOver(true);
      }
    }
  }

  function handleGameOverClick() {
    setTargets([]);
    setLives(3);
    setScore(0);
    setGameOver(false);
  }

  if (gameOver) {
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
        <div style={{ color: 'white' }}>
          <h2>Game Over</h2>
          <p>Your final score is {score}</p>
          <button onClick={handleGameOverClick}>OK</button>
        </div>
      </div>
    );
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
      <div
        ref={containerRef}
        style={{
          width: '900px',
          height: '500px',
          position: 'relative',
          backgroundColor: 'white'
        }}
        onClick={handleBackgroundClick}
      >
        {targets.map((target, index) => (
          <Target
            key={index}
            target={target}
            onClick={() => handleTargetClick(index)}
          />
        ))}
      </div>
      <div style={{ marginLeft: '20px', color: 'white' }}>
        <p>Lives: {lives}</p>
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default App;