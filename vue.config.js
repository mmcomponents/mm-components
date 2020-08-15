const path = require('path');

module.exports = {
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src', 'modules', 'components'),
        '@core': path.resolve(__dirname, 'src', 'modules', 'core'),
        '@directives': path.resolve(__dirname, 'src', 'modules', 'directives'),
      },
    },
  }),
};
