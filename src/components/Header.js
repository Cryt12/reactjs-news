import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Get the current date and time
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateStr = currentDate.toDateString();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
        <img src="logo.png" alt="Logo" style={{ width: '80px', height: '80px', marginRight: '10px' }} />
        <h1>The Gold Panicles</h1>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '16px', color: 'white', margin: '0' }}>
          {currentTime}
        </p>
        <span style={{ fontSize: '16px', color: 'white', margin: '0', marginLeft: '5px' }}>|</span>
        <p style={{ fontSize: '16px', color: 'white', margin: '0', marginRight: '15px' }}>
          {currentDateStr}
        </p>
      </div>
    </header>
  );
}

export default Header;
