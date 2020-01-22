import React from 'react';
import { DelayLinkTransition } from 'router/delayLink';
import { TiltCard, GlitchImg } from 'components/animators';
import { Video } from 'ui';

export const Header = ({
  type = 'img',
  src = '',
  children,
  opacity = 1,
  srcSet = null,
  ...props
}) => {
  const renderHelper = () => {
    if (type === 'video') {
      return <Video src={src} srcSet={srcSet} />;
    } else {
      return <GlitchImg style={{ opacity }} src={src}></GlitchImg>;
    }
  };

  return (
    <header {...props} className="header overflow">
      <aside className="left-side">
        <ul className="rowm flex-align-end">
          <li>
            <DelayLinkTransition to="">FACEBOOK</DelayLinkTransition>
          </li>
          <li>
            <DelayLinkTransition to="">INSTAGRAM</DelayLinkTransition>
          </li>
          <li>
            <DelayLinkTransition to="">KONTAKT</DelayLinkTransition>
          </li>
        </ul>
      </aside>
      <div className="scroll-down">
        <small>SCROLL DOWN</small>
        <span></span>
      </div>
      <TiltCard className="video-bg" divisor={70} perspective={1500}>
        {renderHelper()}
        <div className="hero-content column justify-center flex-align-center">
          <div className="container">{children}</div>
        </div>
      </TiltCard>
    </header>
  );
};
