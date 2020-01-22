import React, { useEffect, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { LoaderContext } from 'router/loader';
import { useCSSAnim } from 'components/follow-circle';
// import { FollowCircleContext } from '../components/follow-circle/follow-circle-store';

export const DelayLink = props => {
  const history = useHistory();
  let timeout = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = e => {
    const { replace, to, delay, onDelayStart, onDelayEnd } = props;

    clearTimeout(timeout);
    if (timeout) return;
    onDelayStart(e, to);
    if (e.defaultPrevented) return;
    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }

      onDelayEnd(e, to);
    }, delay);
  };

  const { onDelayEnd, onDelayStart, ...newProps } = props;

  return <Link {...newProps} onClick={handleClick} />;
};

DelayLink.propTypes = {
  delay: PropTypes.number,
  onDelayStart: PropTypes.func,
  onDelayEnd: PropTypes.func
};

DelayLink.defaultProps = {
  delay: 0,
  onDelayStart: () => {},
  onDelayEnd: () => {}
};

export const DelayLinkTransition = memo(props => {
  const { setLoaded } = useContext(LoaderContext);
  const { handleMouseEnter, handleMouseLeave } = useCSSAnim();
  const match = useRouteMatch(props.to);

  // if route matches link render dummy instead of actual Link
  if (match && match.isExact)
    return <div className="link active">{props.children}</div>;

  return (
    <DelayLink
      className="link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      delay={props.delay || 900}
      onDelayStart={(e, to) => {
        setLoaded({ loaded: false });
        props.onDelayStart(e, to);
      }}
    />
  );
});

DelayLinkTransition.defaultProps = {
  onDelayStart: () => {},
  onDelayEnd: () => {}
};
