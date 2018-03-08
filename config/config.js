const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-production'
  }
};

module.exports = config[env];
