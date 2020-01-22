import React, { useEffect, useRef } from 'react';
import { isIE } from 'helper';

export * from './follow-circle-store';
export * from './custom-hooks';

// use context to make a wrapper that can change the stat of the circle
// const lerp = (a, b, n) => {
//   return (1 - n) * a + n * b;
// };

const trans = (x, y) => `translate(${x}px,${y}px)`;
let clientX = -100;
let clientY = -100;

export const FollowCircle = ({ stuck, animState }) => {
  const circleRef = useRef(null);

  const render = () => {
    if (stuck) {
      requestAnimationFrame(render);
      return;
    }
    requestAnimationFrame(render);
    // if (!circleRef || !circleRef.current) return;
    if (isIE()) return;

    circleRef.current.style.transform = trans(clientX, clientY);
  };

  useEffect(() => {
    requestAnimationFrame(render);

    window.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
      clientX = x;
      clientY = y;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`circle ${animState || ''}`} ref={circleRef}>
      <div className="circle__content"></div>
    </div>
  );
};
