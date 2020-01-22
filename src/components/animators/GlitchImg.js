import React, { useState, useEffect } from 'react';
import { isIE } from 'helper';

const drecksBrowser = isIE();
export const GlitchImg = ({ src = '', ...props }) => {
  const [imgLoaded, setImgLoaded] = useState('false');
  const bgImg = { backgroundImage: `url(${src})` };

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.src = src;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div
      {...props}
      className={`${imgLoaded ? (drecksBrowser ? '' : 'imgloaded') : ''} glitch`}
    >
      <div style={bgImg} className="glitch__img"></div>
      <div style={bgImg} className="glitch__img"></div>
      <div style={bgImg} className="glitch__img"></div>
      <div style={bgImg} className="glitch__img"></div>
      <div style={bgImg} className="glitch__img"></div>
    </div>
  );
};
