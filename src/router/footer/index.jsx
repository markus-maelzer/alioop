import React from 'react';

import Logo from 'assets/logo.svg';

export const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-quote wow fadeIn">
          {/* LOGO i gueess + qoute (hire me) */}
          <img src={Logo} alt="Logo" />
          <h2>Let´s create creative solutions for your business</h2>
        </div>
        <div className="footer-contact wow fadeIn">
          {/* Contact info + links here */}
        </div>
      </div>
    </footer>
  );
};
