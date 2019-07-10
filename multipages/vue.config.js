module.exports = {
  pages: {
    pc: {
      entry: 'src/pages/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    m: {
      entry: 'src/pages/m/main.js',
      template: 'public/index-m.html',
      filename: 'index-m.html'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/global/global.scss"`
      }
    }
  }
}
