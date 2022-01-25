module.exports = {
    lintOnSave: false,
    configureWebpack: {
      externals: ["vue", "vue-router", /^@aits\/.+/]
    },
    filenameHashing: false
  };