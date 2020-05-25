const { createRoom, getRoom } = require('../repository');
const commandTypes = require('../../../constants/commandTypes');

async function init(io, socket, roomId, userId, videoId) {
  const room = await getRoom(roomId);
  if (!room) await createRoom(roomId, videoId);
  else {
    io.to(userId).emit('command', {
      type: commandTypes.CHANGE_VIDEO_ID,
      videoId: room.videoUrl,
    });
    io.to(userId).emit('command', {
      type: room.last_command || commandTypes.PAUSE,
      time: room.time,
    });
  }
}

module.exports = init;
