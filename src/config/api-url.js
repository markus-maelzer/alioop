const GenerateApiUrls = function() {
  const DOMAIN =
    process.env.NODE_ENV === 'development'
      ? 'https://shopware.synelution.com/'
      : 'https://shopware.synelution.com/';
  const ROOT_URL = '/cockpit-master';
  const API_TOKEN = '?token=d0efd548627e3ae31fb77ef89cfc6d';
  // const DOMAIN =
  //   process.env.NODE_ENV === 'development'
  //     ? 'https://synelution.com'
  //     : window.location.origin;
  // const ROOT_URL = '/cockpit-cms';
  // const API_TOKEN = '?token=0fba75412e48dd2c817dfe7ce4e6df';

  // if domain is needed elsewhere
  this.DOMAIN = DOMAIN;
  this.ROOT_URL = ROOT_URL;
  this.collection = name =>
    `${DOMAIN}${ROOT_URL}/api/collections/get/${name}${API_TOKEN}`;
  this.singleton = name =>
    `${DOMAIN}${ROOT_URL}/api/singletons/get/${name}${API_TOKEN}`;
};

export const API_URL = new GenerateApiUrls();
