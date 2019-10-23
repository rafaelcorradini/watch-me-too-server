const { createRoom, getRoom } = require('../repository');
const commandTypes = require('../../../constants/commandTypes');

async function init(socket, roomId, userId) {
  let room = await getRoom(roomId);
  if (!room) room = await createRoom(roomId);
  else {
    socket.to(userId).emit('command', {
      type: commandTypes.CHANGE_VIDEO_ID,
      videoUrl: room.videoUrl,
    });
    socket.to(userId).emit('command', {
      type: room.last_command,
      time: room.time,
    });
  }
}

module.exports = init;
