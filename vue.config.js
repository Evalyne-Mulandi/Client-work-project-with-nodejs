const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    proxy:{
      '/api/v1/register':{
        target:'http://localhost:7000'
      },
      '/api/v1/login':{
       target:'http://localhost:7000'
     }
    }

  }



})
