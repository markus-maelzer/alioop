import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ParallaxFadeWhite,
  InViewFade,
  InViewOverlayBox,
  InViewOverlayBoxSplitter
} from 'components/animators';
import { Header } from 'components/header';
import { Services } from './services';

import { useFetchCockpit } from 'components/utility';
import { LoaderContext } from 'router/loader';
import { API_URL } from 'config';
import { fetch, FETCH_PROJECTS } from '../../redux';
import { Gallery } from '../ProjectSingle/Gallery';

import Img from 'assets/404.jpg';
import videoBG from 'assets/ThinkOutsideTheBox.mp4';

// #faf8ed
// #ece6f4
// #ebf8f3
//  http://markusmaelzer-at.stackstaging.com/cockpit/c

const objIsEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;
console.log(useDispatch);

const Home = props => {
  const { entries, total } = useSelector(state => state.projects);
  const { loaded, setLoaded } = useContext(LoaderContext);
  const state = useFetchCockpit({ name: 'home', type: 'singleton' });
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: fix THIS <->
    if (!objIsEmpty(entries) && Object.keys(entries).length === total) return;
    if (!state) return;

    dispatch(fetch(FETCH_PROJECTS, API_URL.collection('projects')));

    if (!loaded) setLoaded({ loaded: true });
  }, [entries, state]);
  if (!state || !entries) return null;
  console.log(state);

  return (
    <>
      <ParallaxFadeWhite>
        <Header type="img" src={Img}>
          <div className="tagline">
            <span></span>
            <h4>Hey, my name is</h4>
          </div>
          <h1>
            Nicolas
            <span style={{ display: 'inline', marginLeft: 0, transform: 'none' }}>
              Cetl
            </span>
            {/* <br /> */}
            {/*  */}
          </h1>
          {/* <Button type="slide-btn">Learn More</Button> */}
        </Header>
      </ParallaxFadeWhite>
      <Intro {...state.intro} />
      <ZwischenSection {...state.zwischen} />
      <Services services={entries} />
      <section className="intro">
        <div className="container">
          <div className="row"></div>
          <div className="col-12 wow fadeIn">
            <h6>
              <InViewOverlayBox>More Projects</InViewOverlayBox>
            </h6>
            <h2>
              <div className="bg-text">
                <InViewOverlayBox color="#fff" delay=".3s">
                  More
                </InViewOverlayBox>
              </div>
              <InViewOverlayBoxSplitter>More</InViewOverlayBoxSplitter>
            </h2>
          </div>
        </div>
      </section>
      {state.gallery && <Gallery content={state.gallery} />}
    </>
  );
};
export default Home;

const Intro = ({ title, subtitle, bgText, text, spruch }) => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeIn">
            <h6>
              <InViewOverlayBox>{subtitle}</InViewOverlayBox>
            </h6>
            <h2>
              <div className="bg-text">
                <InViewOverlayBox color="#fff" delay=".3s">
                  {bgText}
                </InViewOverlayBox>
              </div>
              <InViewOverlayBoxSplitter>{title}</InViewOverlayBoxSplitter>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-5 wow fadeIn">
              <InViewFade>
                <h4>{spruch}</h4>
              </InViewFade>
            </div>
            <InViewFade threshold={0.4} className="col-lg-7 wow fadeIn">
              <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
              {/* <InViewFade className="custom-link wow fadeIn">
              <Button>READ TO LEARN</Button>
            </InViewFade> */}
            </InViewFade>
          </div>
        </div>
      </div>
    </section>
  );
};

const ZwischenSection = ({ title, subtitle, text, secondText }) => (
  <section className="services-content-block">
    <div className="video-bg">
      <video src={videoBG} muted loop autoPlay playsInline></video>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h6>{subtitle}</h6>
          <h2>
            <InViewOverlayBoxSplitter splitBy={13}>
              {title}
            </InViewOverlayBoxSplitter>
          </h2>
        </div>
        <div className="row">
          <InViewFade threshold={0.4} className="col-md-6 wow fadeIn">
            <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
          </InViewFade>
          <InViewFade threshold={0.4} delay={100} className="col-md-6 wow fadeIn">
            <p style={{ whiteSpace: 'pre-wrap' }}>{secondText}</p>
          </InViewFade>
        </div>
      </div>
    </div>
  </section>
);
