const getPlaylist = require('./functions/get-playlist');

module.exports = (router) => {
  router.route('/playlist/:roomId').get(getPlaylist);
};
