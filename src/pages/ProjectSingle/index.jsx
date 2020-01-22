import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { InViewOverlayBox, InViewFade } from 'components/animators';
import { HelmetHead } from 'components/utility';
import { Gallery } from './Gallery';
import { API_URL } from 'config';
import { fetch, FETCH_PROJECTS_SINGLE } from '../../redux';

import { Header } from 'components/header';
import { LoaderContext } from 'router/loader';

const ProjectSingle = props => {
  const { setLoaded } = useContext(LoaderContext);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const services = useSelector(state => state.projects.entries);
  const helmetData = useSelector(state => state.projects.helmetData[slug]);
  const service = services[slug] || null;

  useEffect(() => {
    if (service) return setLoaded({ loaded: true });
    dispatch(fetch(FETCH_PROJECTS_SINGLE, API_URL.collection('projects')));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);
  if (!service) {
    const serviceKeys = Object.keys(services);
    const filterTest = serviceKeys.filter(key => {
      return key === slug;
    });

    if (serviceKeys.length > 0 && filterTest.length === 0) {
      return <Redirect to="/404" />;
    } else {
      return null;
    }
  }
  console.log(API_URL.DOMAIN + service.mainImg.path);

  return (
    <>
      <HelmetHead {...helmetData} />
      <Header type="img" src={API_URL.DOMAIN + service.mainImg.path}>
        <div className="tagline">
          <span></span>
          <h6>TRANSFORM VISION INTO REALITY</h6>
        </div>
        <h1>
          {service.title}
          <br />
          <span>{service.subTitle}</span>
        </h1>
      </Header>
      <Intro {...service} />
      {service.gallery && <Gallery content={service.gallery} />}
    </>
  );
};

const IntroTitle = ({ title }) => {
  if (title.length <= 17) return <InViewOverlayBox>{title}</InViewOverlayBox>;
  const newTitle = title.split('&');
  return newTitle.map((title, i) => {
    const addAndHere = i + 1 === newTitle.length ? '&' : '';
    return <InViewOverlayBox key={i}>{addAndHere + title}</InViewOverlayBox>;
  });
};

const Intro = ({ title, subTitle, preTitle, description, list }) => (
  <section className="intro">
    <div className="container">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h6>
            <InViewOverlayBox>{preTitle}</InViewOverlayBox>
          </h6>
          <h2>
            <div className="bg-text">
              <InViewOverlayBox color="#fff" delay=".3s">
                {title.slice(0, 6)}
              </InViewOverlayBox>
            </div>
            <IntroTitle title={title + subTitle} />
          </h2>
        </div>
        <div className="col-lg-5 wow fadeIn">
          <InViewFade>
            <h4>{preTitle}</h4>
            {list && (
              <ul style={{ paddingLeft: '20px', paddingTop: '20px' }}>
                {list.map(({ value }, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            )}
          </InViewFade>
        </div>
        <InViewFade threshold={0.4} className="col-lg-7 wow fadeIn">
          <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
        </InViewFade>
      </div>
    </div>
  </section>
);

export default ProjectSingle;
