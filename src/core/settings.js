const debug = require('debug');
const Config = require('./classes/config');
const log = debug('Settings');
log.log = require('../dashboard/log');

const Settings = (function () {
  log('Creating Settings');

  const config = new Config();
  config.load();

  return config;
}());

module.exports = Settings;
