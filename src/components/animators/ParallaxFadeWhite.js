import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export const ParallaxFadeWhite = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 1,
    config: { tension: 0, friction: 0 }
  }));
  useEffect(() => {
    const handleScroll = () => {
      const math = 1 - window.window.pageYOffset / (window.innerHeight - 100);
      if (math < 0) return;
      set({ opacity: math });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div className="parallax-fade" style={spring}>
      {props.children}
    </animated.div>
  );
};
