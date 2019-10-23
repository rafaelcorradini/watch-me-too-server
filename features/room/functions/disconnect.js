const logger = require('./../../../logger');

function onDisconnect() {
  logger.info('user disconnected');
}

module.exports = onDisconnect;
