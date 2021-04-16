const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixin.scss";
        @import "@/assets/scss/reset.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
};
