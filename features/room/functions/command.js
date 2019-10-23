const commandSchema = require('./../../../schemas/command');
const logger = require('./../../../logger');
const { roomUpdate } = require('./../repository');

function command(message, socket, roomId) {
  if (commandSchema.validate(message)) {
    logger.info('command', message);
    socket.broadcast.to(roomId).emit('command', message);
    roomUpdate({
      roomId,
      command,
    });
  } else {
    logger.error('invalid command', message);
  }
}

module.exports = command;
