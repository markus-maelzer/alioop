import React from 'react';
import { CockpitAsset } from 'ui';

export const Gallery = ({ content }) => (
  <div className="gallery">
    {content.map(({ value }, i) => (
      <GalleryItem key={i} {...value} />
    ))}
  </div>
);

const GalleryItem = ({ asset, title, alt }) => {
  if (!asset) return null;
  return (
    <div className="gallery__item">
      <div className="gallery__title">{title || ''}</div>
      <CockpitAsset {...asset} alt={alt} />
    </div>
  );
};
