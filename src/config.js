// Config object. Import this and not the files in the config folder!

/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config/prd');
} else {
  module.exports = require('./config/dev');
}

