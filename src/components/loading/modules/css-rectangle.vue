<template>
  <div class="spinner">
    <div class="rect1" :style="{ background: backgroundColor }"></div>
    <div class="rect2" :style="{ background: backgroundColor }"></div>
    <div class="rect3" :style="{ background: backgroundColor }"></div>
    <div class="rect4" :style="{ background: backgroundColor }"></div>
    <div class="rect5" :style="{ background: backgroundColor }"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .spinner {
    width: 60px;
    height: 80px;
    text-align: center;
    font-size: 10px;
  }
  
  .spinner > div {
    background-color: #409eff;
    height: 100%;
    width: 8px;
    margin: 0 1px;
    display: inline-block;
    
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  
  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
    20% { -webkit-transform: scaleY(1.0) }
  }
  
  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
</style>
