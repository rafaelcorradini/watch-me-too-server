module.exports = {
  apps: [
    {
      name: 'watch-me-too-api',
      script: './bin/www',

      node_args: ['--inspect=0.0.0.0:9229'],
      watch: true,
    },
  ],
};
