import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const BgColorContainer = ({ children, className }) => {
  const defaultBgColor = 'transparent';
  const [bgColor, setBgColor] = useState(defaultBgColor);
  return (
    <section className={className} style={{ backgroundColor: bgColor }}>
      {children(setBgColor, defaultBgColor)}
    </section>
  );
};

BgColorContainer.propTypes = {
  children: PropTypes.func.isRequired
};
