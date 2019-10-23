const knex = require('../../db');
const commandTypes = require('../../constants/commandTypes');

async function getRoom(roomId) {
  try {
    const room = await knex('rooms').where('token', roomId).select();
    return room && room.length > 0 ? room[0] : null;
  } catch (err) {
    throw err;
  }
}

async function createRoom(roomId) {
  try {
    return await knex('rooms').insert({ token: roomId }).returning('id');
  } catch (err) {
    throw err;
  }
}

async function roomUpdate({ roomId, command }) {
  try {
    const room = {};
    if (command.videoId) {
      room.videoUrl = command.videoId;
    }
    if (command.time) {
      room.time = command.time;
    }
    if (command.type && command.type !== commandTypes.CHANGE_VIDEO_ID) {
      room.lastCommand = command.type;
    }
    const result = await knex('rooms')
      .where('token', roomId)
      .update(room);
    if (!result) throw new Error('Alert not found');
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createRoom,
  roomUpdate,
  getRoom,
};
