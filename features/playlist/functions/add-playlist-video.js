const { createPlaylistVideo } = require('./../repository');

async function addPlaylistVideo(message, socket, roomId) {
  const video = await createPlaylistVideo(roomId, message.videoId);
  if (video) {
    socket.to(roomId).emit('update_playlist');
  }
  return video;
}

module.exports = addPlaylistVideo;
