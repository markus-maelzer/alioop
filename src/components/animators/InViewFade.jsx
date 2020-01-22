import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export const InViewFade = ({
  children,
  className,
  threshold,
  triggerOnce,
  delay
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)'
    },
    config: { duration: 300 },
    delay
  });

  return (
    <animated.div className={className} style={props} ref={ref}>
      {children}
    </animated.div>
  );
};

InViewFade.defaultProps = {
  className: '',
  threshold: 0.5,
  triggerOnce: true,
  delay: 0
};

InViewFade.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
  delay: PropTypes.number
};
