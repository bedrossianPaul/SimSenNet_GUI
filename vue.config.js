const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "ssngwtd.loria.fr/dist" : '/',
  transpileDependencies: true
})
