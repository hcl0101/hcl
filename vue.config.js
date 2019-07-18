module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  
  pages: {
    index: {
      entry: './src/components/index.js'
    }
  }
};