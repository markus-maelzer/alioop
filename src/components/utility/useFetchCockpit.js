import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'config';

export const useFetchCockpit = ({
  name,
  type = 'collection',
  onSuccess = () => {},
  onError = () => {}
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL[type](name))
      .then(({ data }) => {
        setState(data);
        onSuccess();
      })
      .catch(() => {
        onError();
      });
    // eslint-disable-next-line
  }, []);

  return state;
};
