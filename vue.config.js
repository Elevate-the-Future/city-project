 // vue.config.js
 module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'City'
        return args
      })
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/city-project/'
    : '/'
  }
