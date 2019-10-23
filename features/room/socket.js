const logger = require('./../../logger');
const disconnect = require('./functions/disconnect');
const command = require('./functions/command');
const init = require('./functions/init');
const addPlaylistVideo = require('./../playlist/functions/add-playlist-video');
const removePlaylistVideo = require('./../playlist/functions/remove-playlist-video');

function mountSocket(io) {
  io.on('connection', (socket) => {
    const { roomId, userId } = socket.handshake.query;
    logger.info(`a user connected to room ${roomId}`);
    socket.join([roomId, userId]);
    init(socket, roomId, userId);

    socket.on('command', message => command(message, socket, roomId));
    socket.on('add_playlist_video', message => addPlaylistVideo(message, socket, roomId));
    socket.on('remove_playlist_video', message => removePlaylistVideo(message, socket, roomId));
    socket.on('disconnect', disconnect);
  });
}

module.exports = mountSocket;
