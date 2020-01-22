import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export const InViewOverlayBox = ({
  children,
  color,
  className,
  threshold,
  triggerOnce,
  delay
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });
  return (
    <div
      ref={ref}
      className={`inView-overlayBox ${inView ? 'inView' : ''} ${className}`}
    >
      {children}
      <div
        className="overlayBox"
        style={{ backgroundColor: color, transitionDelay: delay }}
      ></div>
    </div>
  );
};

InViewOverlayBox.defaultProps = {
  className: '',
  color: 'currentColor',
  threshold: 0.2,
  triggerOnce: true,
  delay: '0s'
};

InViewOverlayBox.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
  delay: PropTypes.string
};

export const InViewOverlayBoxSplitter = ({ children, splitBy = 16 }) => {
  const wordArray = children.split(' ');
  const chunks = [];
  let i = 0;
  wordArray.forEach(string => {
    if (chunks[i] && chunks[i].length < splitBy) {
      chunks[i] += ' ' + string;
    } else if (chunks[i] && chunks[i].length >= splitBy) {
      chunks.push(string);
      i++;
    } else {
      chunks.push(string);
    }
  });

  return chunks.map((chunk, i) => (
    <div key={i}>
      <InViewOverlayBox>{chunk}</InViewOverlayBox>
    </div>
  ));
};
