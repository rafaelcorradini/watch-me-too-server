const { removePlaylistVideo: removePlaylistVideoRepo } = require('./../repository');

async function removePlaylistVideo(message, socket, roomId) {
  const video = await removePlaylistVideoRepo(message.id);
  if (video) {
    socket.to(roomId).emit('update_playlist');
  }
  return video;
}

module.exports = removePlaylistVideo;
