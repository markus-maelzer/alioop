import React, { useCallback } from 'react';
import { CockpitImg, Button } from 'ui';
import { DelayLinkTransition } from 'router/delayLink';
import { InViewOverlayBox, InViewFade } from 'components/animators';

export const HoverBox = ({
  slug,
  mainImgThumb,
  title,
  preTitle,
  subTitle,
  setBgColor,
  defaultBgColor,
  hoverBg
}) => {
  return useCallback(
    <DelayLinkTransition
      to={`/project/${slug}`}
      onMouseEnter={() => {
        setBgColor(hoverBg || 'rgb(250, 248, 237)');
      }}
      onMouseLeave={() => {
        setBgColor(defaultBgColor);
      }}
      className="project-box wow fadeIn"
    >
      <figure>
        <InViewOverlayBox>
          <CockpitImg src={mainImgThumb.path} alt="Bild Leistungen: " />
        </InViewOverlayBox>
      </figure>
      <div className="content-box">
        <InViewFade className="inner" threshold={0.2}>
          <small className="uppercase">{preTitle}</small>
          <h3>
            <span>{title}</span>
            {subTitle}
          </h3>
          <Button noLink={true}>weiter zu {title + ' ' + subTitle}</Button>
        </InViewFade>
      </div>
    </DelayLinkTransition>,
    [slug]
  );
};
