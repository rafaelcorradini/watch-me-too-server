const { spawn } = require('child_process');
const pino = require('pino');
const { getPrettyStream: pinoGetPrettyStream } = require('pino/lib/tools');
const { multistream } = require('pino-multi-stream');
const pinoPretty = require('pino-pretty');

const cwd = process.cwd();
const logPath = `${cwd}/logs`;

const teeStream = spawn(
  process.execPath,
  [require.resolve('pino-tee'), 'info', `${logPath}/info.log`, 'error', `${logPath}/error.log`],
  { cwd, env: process.env },
);

const prettyConsoleStream = pinoGetPrettyStream(
  { translateTime: true },
  pinoPretty,
  process.stdout,
);

const logger = pino(
  {},
  multistream([{ stream: prettyConsoleStream }, { stream: teeStream.stdin }]),
);

module.exports = logger;
