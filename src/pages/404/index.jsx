import React, { useEffect, useContext } from 'react';

import { LoaderContext } from 'router/loader';

import { Header } from 'components/header';
// import { Button } from 'ui';
import { Goo } from 'components/animators';

import mainImg from 'assets/404.jpg';

const Error404 = () => {
  const { loaded, setLoaded } = useContext(LoaderContext);
  useEffect(() => {
    if (!loaded) setLoaded({ loaded: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <div>
      <Header type="img" src={mainImg} opacity={0.8}>
        <div>
          <div className="tagline">
            <span></span>
            <h5>Diese Seite wurde nicht gefunden</h5>
          </div>
          <h1>
            Error
            <span style={{ display: 'inline', marginLeft: 0 }}>404</span>
          </h1>
          {/* <Button type="slide-btn">Zur Startseite</Button> */}
        </div>
      </Header>
      {<Goo />}
    </div>
  );
};

export default Error404;
