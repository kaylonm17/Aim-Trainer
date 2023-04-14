import React, { useState, useRef } from 'react';

function App() {
  const [started, setStarted] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const timerRef = useRef(null);

  function handleStartClick() {
    setStarted(true);
    timerRef.current = setTimeout(() => {
      setShowBox(true);
      setStartTime(new Date().getTime());
    }, Math.floor(Math.random() * 3000) + 1000);
  }

  function handleBoxClick() {
    if (showBox) {
      const endTime = new Date().getTime();
      setReactionTime(endTime - startTime);
      setShowBox(false);
      clearTimeout(timerRef.current);
    }
  }

  function handleResetClick() {
    setStarted(false);
    setShowBox(false);
    setStartTime(null);
    setReactionTime(null);
    clearTimeout(timerRef.current);
  }

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
        flexDirection: 'column'
      }}
    >
      {!started && (
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
    textRendering: 'optimizeLegibility'
    
        
         }} onClick={handleStartClick}>
          Start
        </button>
      )}
      {started && !showBox && <p>Get ready...</p>}
      {started && showBox && (
        <div
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px',
            cursor: 'pointer'
          }}
          onClick={handleBoxClick}
        />
      )}
      {reactionTime && (
        <div style={{ marginTop: '20px', color: 'white' }}>
          <p>Your reaction time: {reactionTime}ms</p>
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
    textRendering: 'optimizeLegibility'
    
        
         }}button onClick={handleResetClick}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App1;