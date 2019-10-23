const express = require('express');

const router = express.Router();

const mountplaylistRoutes = require('../features/playlist/routes');

mountplaylistRoutes(router);

module.exports = router;
