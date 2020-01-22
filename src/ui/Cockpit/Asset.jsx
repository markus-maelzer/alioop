import React from 'react';
import PropTypes from 'prop-types';
import { API_URL } from 'config';
import { Video } from '../';

import { CockpitImg } from './Img';

const assetPath = API_URL.ROOT_URL + '/storage/uploads';

export const CockpitAsset = ({ image, video, path, className, alt }) => {
  if (image)
    return <CockpitImg className={className} alt={alt} src={assetPath + path} />;
  if (video)
    return (
      <Video
        className={className}
        src={API_URL.DOMAIN + assetPath + path}
        autoPlay
        muted
        loop
        playsInline
      ></Video>
    );
};

// {API_URL.DOMAIN + src}

CockpitAsset.defaultProps = {
  path: '',
  className: '',
  style: {},
  alt: ''
};

CockpitAsset.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};
