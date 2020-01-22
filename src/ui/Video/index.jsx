import React, { useCallback } from 'react';

export const Video = ({ src, srcSet = null, className = '' }) => {
  const curVid = useCallback(
    srcSet &&
      srcSet.reduce((acc, { src, size }) => {
        if (window.innerWidth > size) {
          if (window.innerWidth > acc.size) {
            return acc;
          } else {
            return { size, src };
          }
        } else {
          return acc;
        }
      }),
    [srcSet]
  );

  return (
    <video
      muted
      playsInline
      autoPlay
      loop
      src={(curVid && curVid.src) || src}
    ></video>
  );
};
