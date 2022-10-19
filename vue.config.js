const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  devServer: {
    proxy: {
      '/api': {
        target: 'http://52.45.86.178:6001/', // 请求接口地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  }
})

