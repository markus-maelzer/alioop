import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y, p, divisor) => [
  -(y - window.innerHeight / 2) / divisor,
  (x - window.innerWidth / 2) / divisor,
  p
];

const trans = (x, y) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg)`;

export const TiltCard = ({
  children,
  className = '',
  perspective = 2000,
  divisor = 24
}) => {
  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      className={className}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y, perspective, divisor) })
      }
      onMouseLeave={() => set({ xys: [0, 0, perspective] })}
      style={{ transform: spring.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  );
};
