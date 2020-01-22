import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import { withGA } from 'components/utility';
import { Footer } from './footer';
import { Nav } from './nav';
import { Loader, LoaderContextProvider } from './loader';

import { FollowCircleProvider } from '../components/follow-circle';
const Home = React.lazy(() => import('../pages/Home'));
const ProjectSingle = React.lazy(() => import('../pages/ProjectSingle'));
const Error404 = React.lazy(() => import('../pages/404'));

export default class MainRouter extends Component {
  componentDidMount() {
    this.handleScrollbarWiggle();
  }

  handleScrollbarWiggle = () => {
    var isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari =
      /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (!isChrome && !isSafari) {
      document.body.classList.add('no-webkit');
    }
  };

  render() {
    return (
      <LoaderContextProvider>
        <FollowCircleProvider>
          <Loader />
          <Helmet>
            <html lang="de" />
            <title>Nikolas Cetls | Portfolio</title>
            <meta charset="utf-8" />
            <meta name="author" content="Markus Mälzer" />
            <meta name="description" content="" />
          </Helmet>

          <Nav />
          <Suspense fallback={null}>
            <div className="main-content">
              <Switch>
                <Route exact path="/project/:slug" component={ProjectSingle} />
                {/* <Route exact path="/legal/:slug" component={withGA(Legal)} /> */}
                <Route exact path="/" component={Home} />
                <Route component={Error404} />
              </Switch>
            </div>
          </Suspense>
          <Footer />
        </FollowCircleProvider>
      </LoaderContextProvider>
    );
  }
}
