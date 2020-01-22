import React from 'react';

export * from './LoaderContext';

export const Loader = () => (
  <>
    <div className="preloader">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="inner" data-tilt data-tilt-perspective="2000">
        <span className="typewriter" id="typewriter"></span>
      </div>
    </div>
    <TransitionOverlay />
  </>
);

export const TransitionOverlay = () => (
  <div className="transition-overlay">
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
  </div>
);
