import axios from 'axios';

function determine(type, data) {
  return {
    type,
    data
  };
}

function fetch(type, url, callback) {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch(determine(type, response.data));
        if (typeof callback === 'function') callback();
      })
      .catch(e => {
        if (typeof callback === 'function') callback();
        return;
      });
  };
}

function fetchQuery(type, url, options) {
  return dispatch =>
    axios
      .post(url, options)
      .then(response => {
        dispatch(determine(type, response.data));
      })
      .catch(e => {
        return;
      });
}

export { fetch, fetchQuery, determine };
