require('dotenv').config({
  path: `../env-files/${process.env.NODE_ENV || 'development'}.env`,
});
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  origin: process.env.APP_URL,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
  cookie: false,
});

const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

const mountSocket = require('./features/room/socket');

mountSocket(io);

module.exports = { app, server };
