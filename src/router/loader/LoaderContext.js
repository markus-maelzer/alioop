import React, { useEffect, useState, createContext } from 'react';

export const LoaderContext = createContext();

export const LoaderContextProvider = ({ children }) => {
  const [{ loaded }, setLoaded] = useState({ loaded: false });

  useEffect(() => {
    if (loaded) {
      document.body.classList.add('page-loaded');
    } else {
      document.body.classList.remove('page-loaded');
    }
  }, [loaded]);

  return (
    <LoaderContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
};
