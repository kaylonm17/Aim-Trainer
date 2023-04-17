import React from 'react';
import Navbar from './Navbar';
import aimtrainerImage from './Images/aimtrainer1.png';
import aimtrainerImage1 from './Images/aimtra.png';

const GameSelectionPage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="game-selection-container">
        <button
          className="game-selection-button game-selection-button-1"
          style={{ backgroundImage: `url(${aimtrainerImage})` }}
        >
          <div className="game-selection-button-text">Ultimate Aim Trainer!</div>
        </button>
        <button
          className="game-selection-button game-selection-button-2"
          style={{ backgroundImage:`url(${aimtrainerImage1})` }}
        >
          <div className="game-selection-button-text">Reaction Time Trainer!</div>
        </button>
      </div>
      <style jsx>{`
        .game-selection-container {
          display: flex;
          height: 100vh;
        }
        .game-selection-button {
          flex: 1;
          background-size: cover;
          background-position: center;
          border: none;
          outline: none;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }
        .game-selection-button:hover {
          transform: scale(0.9);
        }
        .game-selection-button-1 {
          background-color: #f6d854;
        }
        .game-selection-button-2 {
          background-color: #d6eaf8;
        }
        .game-selection-button-text {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default GameSelectionPage;