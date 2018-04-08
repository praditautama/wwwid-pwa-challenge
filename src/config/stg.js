// Application-only config for PRODUCTION environment.
import baseConfig from './base';

const finalConfig = Object.assign(baseConfig, {
  apis: {
    facebook: {
      appId: '',
    },
    google: {
      appId: '',
    },
    laravel: {
      url: '',
    },
    wordpress: {
      url: '',
      ajax: '',
      nlp: true,
    },
    restapi: {
      url: 'https://api.rss2json.com/v1',
      nlp: true,
    },
    tunasdata: {
      url: '',
    },
    comment: {
      url: '',
    },
    nodejs: {
      url: '',
    },
    search: {
      url: '',
    },
  },
  ga: {
    trackId: '',
  },
  bugsnag: {
    apiKey: '',
    releaseStage: '',
  },
  stream: {
    key: '',
    appId: '',
  },
});

export default finalConfig;
