import React from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'config';

export const CockpitImg = ({ src, className, style, alt }) => (
  <img src={API_URL.DOMAIN + src} style={style} className={className} alt={alt} />
);

CockpitImg.defaultProps = {
  path: '',
  className: '',
  style: {},
  alt: ''
};
CockpitImg.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  alt: PropTypes.string
};
