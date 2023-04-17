import React from 'react';
import Navbar from './Navbar';
import aimtrainerImage from './Images/aimtrainer1.png';
import aimtrainerImage1 from './Images/aimtra.png';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
// import GameSelection from './GameSelection';
import AimTrainerPage from './Game1';
import ReactionTimeTrainerPage from './Game2';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

const Home = () => {
  return <h1>Welcome to the home page</h1>;
};

const AimTrainer = () => {
  return <h1>Aim Trainer game</h1>;
};

const ReactionTimeTrainer = () => {
  return <h1>Reaction Time Trainer game</h1>;
};

const GameSelectionPage = () => {
  const history = useHistory();

  const handleAimTrainerClick = () => {
    history.push('/Game1');
  };

  const handleReactionTimeTrainerClick = () => {
    history.push('/Game2');
  };

  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Route exact path="/">
            <div className="game-selection-container">
              <Link to="/Game1" className="game-selection-button game-selection-button-1" style={{ backgroundImage: `url(${aimtrainerImage})` }}>
                <button style={{ backgroundImage: `url(${aimtrainerImage})` }}>
                  <div className="game-selection-button-text">Ultimate Aim Trainer!</div>
                </button>
              </Link>
              <Link to="/Game2" className="game-selection-button game-selection-button-2" style={{ backgroundImage: `url(${aimtrainerImage1})` }}>
                <button  style={{ backgroundImage: `url(${aimtrainerImage1})` }}>
                  <div className="game-selection-button-text" >Reaction Time Trainer!</div>
                </button>
              </Link>
            </div>
          </Route>
          <Route path="/Game1">
            <AimTrainerPage />
          </Route>
          <Route path="/Game2">
            <ReactionTimeTrainerPage />
          </Route>
          <Route exact path="/LoginPage">
          <LoginPage />
          </Route>
        </Switch>
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
    </Router>
  );
};

export default GameSelectionPage;