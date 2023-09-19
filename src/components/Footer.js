import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={logoContainerStyle}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="facebook.png" alt="Facebook" style={logoStyle} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="twitter.png" alt="Twitter" style={logoStyle} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="instagram.png" alt="Instagram" style={logoStyle} />
        </a>
        <a href="mailto:youremail@example.com">
          <img src="gmail.png" alt="Email" style={logoStyle} />
        </a>
      </div>
      <p style={infoStyle}>For school purposes. WEW</p>
      <p style={infoStyle}>&copy; {new Date().getFullYear()} The Gold Panicles. All Rights Reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const logoStyle = {
  width: '30px',
  height: '30px',
  margin: '0 10px',
};

const infoStyle = {
  fontSize: '16px',
  margin: '10px 0',
};

export default Footer;
