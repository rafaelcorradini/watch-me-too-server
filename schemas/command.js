const Joi = require('@hapi/joi');
const {
  JUMP_TO,
  PLAY,
  PAUSE,
  CHANGE_VIDEO_ID,
} = require('../constants/commandTypes');

module.exports = Joi.object({
  type: Joi.string()
    .valid(JUMP_TO, PLAY, PAUSE, CHANGE_VIDEO_ID)
    .required(),

  time: Joi.number(),

  videoId: Joi.string(),
});
