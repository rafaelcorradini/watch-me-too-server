const { createRoom, getRoom } = require('../repository');
const commandTypes = require('../../../constants/commandTypes');

async function init(socket, roomId, userId, videoId) {
  let room = await getRoom(roomId);
  if (!room) room = await createRoom(roomId, videoId);
  else {
    setTimeout(() => {
      socket.to(userId).emit('command', {
        type: commandTypes.CHANGE_VIDEO_ID,
        videoUrl: room.videoUrl,
      });
      socket.to(userId).emit('command', {
        type: room.last_command || commandTypes.PAUSE,
        time: room.time,
      });
    }, 1000);
  }
}

module.exports = init;
