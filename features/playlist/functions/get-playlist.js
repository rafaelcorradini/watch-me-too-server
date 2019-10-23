const { getPlaylist: getPlaylistRepo } = require('./../repository');

async function getPlaylist(req, res) {
  const playlist = await getPlaylistRepo(req.params.roomId);
  return res.status(200).json(playlist || []);
}

module.exports = getPlaylist;
