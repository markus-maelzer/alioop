import { useContext } from 'react';
import { FollowCircleContext } from '../';

export const useCSSAnim = (className = 'scale') => {
  const { dispatchFC } = useContext(FollowCircleContext);
  const handleMouseEnter = () =>
    dispatchFC({ type: 'css-anim', animState: className });
  const handleMouseLeave = () => dispatchFC({ type: 'css-anim', animState: '' });

  return {
    handleMouseEnter,
    handleMouseLeave
  };
};
