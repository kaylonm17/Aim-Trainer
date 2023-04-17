import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <h1 style={{ fontSize: '1.5rem', margin: '0' }}>Ultimate Aim Trainer</h1>
      <ul style={{ display: 'flex', listStyle: 'none', margin: '0' }}>
        <li style={{ marginRight: '20px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', padding: '10px', borderRadius: '5px' }}>Home</a></li>
        <li style={{ marginRight: '20px' }}>
          <Link to="./LoginPage" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', padding: '10px', borderRadius: '5px' }}>Login</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="./LeaderBoard" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', padding: '10px', borderRadius: '5px' }}>LeaderBoard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
