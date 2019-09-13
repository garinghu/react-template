const proxy = require('./proxy');

const development = {
  assetsPublicPath: '//10.96.96.202/tools-store/',
  // assetsPublicPath: '//10.96.89.65/tools-store/',
  URL: '',
};

const production = {
  assetsPublicPath: '//static.udache.com/public-biz/tools-store/',
  URL: '',
};

const test = {
  assetsPublicPath: '//10.96.89.65/tools-store/',
  URL: '',
};

const common = {
  port: 8001,
  proxy,
};
const env = process.env.NODE_ENV || 'development';

const collections = {
  development: Object.assign({}, development, common),
  test: Object.assign({}, test, common),
  production: Object.assign({}, production, common),
};


module.exports = collections[env];
