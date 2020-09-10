const path = require('path');

module.exports = {
  configureWebpack: () => ({
    externals: {
      vue: 'vue',
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src', 'modules', 'components'),
        '@core': path.resolve(__dirname, 'src', 'modules', 'core'),
        '@directives': path.resolve(__dirname, 'src', 'modules', 'directives'),
        '^vue$': 'vue',
      },
    },
  }),
};
