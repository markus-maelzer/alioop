import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export const HelmetHead = ({ title, meta }) => (
  <Helmet>
    <title>{title}</title>
    {meta &&
      meta.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
  </Helmet>
);

HelmetHead.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.array
};

HelmetHead.defaultProps = {
  title: 'Synelution',
  meta: []
};
