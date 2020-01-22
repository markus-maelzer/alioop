import React from 'react';
// import { RootPortal } from 'components/utility/Portal';
import Logo from 'assets/logo.svg';

export const Nav = props => {
  return (
    <div className={`navigation-menu`}>
      <img src={Logo} alt="Nicolasc Cetls Logo" />
    </div>
  );
};
