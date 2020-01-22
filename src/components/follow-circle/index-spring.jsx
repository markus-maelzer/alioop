import React, { useContext, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FollowCircleContext } from './follow-circle-store';
export * from './follow-circle-store';

// use context to make a wrapper that can change the stat of the circle
// const lerp = (a, b, n) => {
//   return (1 - n) * a + n * b;
// };

const trans = (x, y) => `translate(${x}px,${y}px)`;

export const FollowCircle = props => {
  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    config: { tension: 0, friction: 50 }
  }));
  // position, sticky, stickyRadius, (add below cuz warning was annyoing)
  const { animationState } = useContext(FollowCircleContext);

  useEffect(() => {
    window.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
      set({ xy: [x, y] });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div
      className={`circle ${animationState || ''}`}
      style={{ transform: spring.xy.interpolate(trans) }}
    >
      <div className="circle__content"></div>
    </animated.div>
  );
};
