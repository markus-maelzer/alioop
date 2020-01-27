import React from 'react';
import map from 'lodash/map';

import { BgColorContainer } from './BgColorContainer';
import { HoverBox } from './HoverBox';

import { InViewOverlayBox, InViewOverlayBoxSplitter } from 'components/animators';

export const Services = ({ services, projectsTitle }) => (
  <BgColorContainer className="works">
    {(setBgColor, defaultBgColor) => (
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeIn">
            <h6>
              <InViewOverlayBox>{projectsTitle.subtitle}</InViewOverlayBox>
            </h6>
            <h2 style={{ position: 'relative' }}>
              <div className="bg-text">
                <InViewOverlayBox color="#fff" delay=".3s">
                  {projectsTitle.bgTitle}
                </InViewOverlayBox>
              </div>
              <InViewOverlayBoxSplitter>
                {projectsTitle.title}
              </InViewOverlayBoxSplitter>
            </h2>
          </div>
          <div className="col-12">
            {map(services, service => (
              <HoverBox
                setBgColor={setBgColor}
                defaultBgColor={defaultBgColor}
                key={service._id}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    )}
  </BgColorContainer>
);
