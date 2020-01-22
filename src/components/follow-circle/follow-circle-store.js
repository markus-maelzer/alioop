import React, { createContext, useReducer, useCallback } from 'react';
import { FollowCircle } from './';

const initialState = {
  stuck: false,
  position: null,
  sticky: false,
  stickyRadius: 50
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'stuck':
      const { position } = action;
      return { ...state, stuck: true, position };
    case 'css-anim':
      const { animState } = action;
      return { ...state, animState };
    default:
      return state;
  }
};

export const FollowCircleContext = createContext();

export const FollowCircleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useCallback({ dispatchFC: dispatch }, [dispatch]);

  return (
    <>
      <FollowCircle {...state} />
      <FollowCircleContext.Provider value={value}>
        {children}
      </FollowCircleContext.Provider>
    </>
  );
};
