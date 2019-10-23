const knex = require('../../db');

async function getPlaylist(roomId) {
  try {
    const playlist = await knex('playlist_videos').where('token', roomId).select();
    return playlist && playlist.length > 0 ? playlist : null;
  } catch (err) {
    throw err;
  }
}

async function createPlaylistVideo(roomId, videoId) {
  try {
    const video = await knex('playlist_videos').insert({ token: roomId, video: videoId }).returning('id', 'video', 'token');
    return video && video.length > 0 ? video[0] : null;
  } catch (err) {
    throw err;
  }
}

async function removePlaylistVideo(id) {
  try {
    return await knex('playlist_videos').where('id', id).del();
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createPlaylistVideo,
  getPlaylist,
  removePlaylistVideo,
};
