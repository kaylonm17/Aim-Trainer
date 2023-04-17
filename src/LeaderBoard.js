import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Leaderboard = () => {
  // Sample data for the leaderboard
  const [scores, setScores] = useState([
    { name: 'matt23', score: 50 },
    { name: 'Kaylon1', score: 30 },
    { name: 'matt23', score: 5 },
    { name: 'matt23', score: 5 },
  ]);
  const [scores2, setScores2] = useState([
    { name: 'matt23', score: 214 },
    { name: 'matt23', score: 252 },
    { name: 'matt23', score: 261 },
  ]);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    background: 'url(https://static.vecteezy.com/system/resources/previews/005/266/448/original/retro-futuristic-background-free-vector.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const tableStyle = {
    color: 'white',
    background: '#333',
    boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)',
    borderRadius: '1rem',
    padding: '3rem',
    marginRight: '2rem',
    marginTop: '3rem'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid white',
  };

  const headerStyle = {
    ...rowStyle,
    fontWeight: 'bold',
    borderBottom: '2px solid white',
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginTop: '4rem' }}>
        <div style={tableStyle}>
          <h2>Aim trainer Top-5</h2>
          <table>
            <thead>
              <tr style={headerStyle}>
                <th>Rank---</th>
                <th>Name---</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index} style={rowStyle}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={tableStyle}>
          <h2>Reaction Time Top-3</h2>
          <table>
            <thead>
              <tr style={headerStyle}>
                <th>Rank---</th>
                <th>Name---</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores2.map((score, index) => (
                <tr key={index} style={rowStyle}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <Link to="/">
            <button style={{ borderRadius: '5px', padding: '10px', backgroundColor: 'white', color: '#333', marginLeft: '25px' }}>Back to Game Selection</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;