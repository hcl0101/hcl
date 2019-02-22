<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import './reset.css';
  @import './assets/icon/iconfont.css';

  html, body, #app {
    height: 100%;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
