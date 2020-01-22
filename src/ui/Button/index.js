import React from 'react';
import { DelayLinkTransition } from 'router/delayLink';
import { useCSSAnim } from 'components/follow-circle';

export const Button = ({
  type = 'custom-link',
  to = '/',
  children,
  text = null,
  noLink = false
}) => {
  const { handleMouseEnter, handleMouseLeave } = useCSSAnim();
  return (
    <div className={type}>
      <CheckLink
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        noLink={noLink}
        to={to}
      >
        <div className="lines">
          <span></span> <span></span>
        </div>
        {type === 'slide-btn' ? <Circle /> : ''}

        <b>{text || children}</b>
      </CheckLink>
    </div>
  );
};

const CheckLink = ({ children, noLink, to, ...props }) =>
  noLink ? (
    <div {...props} className="no-link-btn">
      {children}
    </div>
  ) : (
    <DelayLinkTransition {...props} to={to}>
      {children}
    </DelayLinkTransition>
  );

export const Circle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
    <circle
      className="video-play-circle"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="1"
      cx="52"
      cy="52"
      r="50"
    />
  </svg>
);
