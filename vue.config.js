const { defineConfig } = require('@vue/cli-service')

const basePath = process.env.NODE_ENV === 'production'
  ? '/echeck-plugin/'
  : '/echeck-plugin/';

module.exports = defineConfig({
  devServer: { 
    host: "localhost", 
    port: "8080" 
  },
  transpileDependencies: true,
  publicPath: basePath,
  outputDir: 'dist',
  assetsDir: 'assets',
})