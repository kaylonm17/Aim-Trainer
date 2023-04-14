import React, { useState, useEffect, useRef } from 'react';
import NavBar from './Navbar';
function Target(props) {
  if (!props.target) return null;

  return (      
    <div
      className="target"
      style={{
        position: 'absolute',
        top: props.target.y,
        left: props.target.x,
        backgroundColor: '#eb347a',
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
          backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/005/266/448/original/retro-futuristic-background-free-vector.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ color: 'white' }}>
          <h2>Game Over</h2>
          <p>Your final score is {score}</p>
          <button style={{
            background: 'linear-gradient(180deg, #ff2a2a 0%, #e54d4d 100%)',
    border: '1px solid #ff2a2a',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    letterSpacing: '0.05rem',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
    outline: 'none',
    marginRight: '1rem',
    marginTop: '1rem',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    textRendering: 'optimizeLegibility'}}button onClick={handleGameOverClick}>OK</button>
        </div>
      </div>
  );
  }

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage:
            'url(https://static.vecteezy.com/system/resources/previews/005/266/448/original/retro-futuristic-background-free-vector.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {gameOver ? (
          <div style={{ color: 'white' }}>
            <h2>Game Over</h2>
            <p>Your final score is {score}</p>
            <button
              style={{
                background:
                  'linear-gradient(180deg, #ff2a2a 0%, #e54d4d 100%)',
                border: '1px solid #ff2a2a',
                borderRadius: '5px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: '0.5rem 1rem',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out',
                letterSpacing: '0.05rem',
                boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
                outline: 'none',
                marginRight: '1rem',
                marginTop: '1rem',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                textRendering: 'optimizeLegibility'
              }}
              onClick={handleGameOverClick}
            >
              OK
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <h1
              style={{
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                textRendering: 'optimizeLegibility',
                marginBottom: '1rem',
                fontWeight: 'bold',
                fontSize: '4rem'
              }}
            >
              Ultimate Aim Trainer
            </h1>
            <div
              ref={containerRef}
              style={{
                width: '900px',
                height: '500px',
                position: 'relative',
                backgroundColor: '#130321'
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
            <div style={{ marginTop: '1rem' }}>
              <p style={{ color: 'white', fontWeight: 'bold' }}>Lives: {lives}</p>
              <p style={{ color: 'white', fontWeight: 'bold' }}>Score: {score}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );  }

export default App;