<template>
  <div class="loading flex-center">
    <LoadingCircle v-if="type === 'circle'" :backgroundColor="backgroundColor"></LoadingCircle>
    <LoadingFlip v-else-if="type === 'flip'" :backgroundColor="backgroundColor"></LoadingFlip>
    <LoadingBounce v-else-if="type === 'bounce'" :backgroundColor="backgroundColor"></LoadingBounce>
    <LoadingRectangle v-else-if="type === 'rectangle'" :backgroundColor="backgroundColor"></LoadingRectangle>
  </div>
</template>

<script>
import LoadingCircle from './modules/LoadingCircle';
import LoadingRectangle from './modules/LoadingRectangle';
import LoadingFlip from './modules/LoadingFlip';
import LoadingBounce from './modules/LoadingBounce';

export default {
  name: "hclLoading",
  
  components: {
    LoadingCircle,
    LoadingRectangle,
    LoadingFlip,
    LoadingBounce
  },

  props: {
    type: {
      type: String,
      default: 'circle'
    },
    backgroundColor: {
      type: String,
      default: '#409eff'
    }
  }
}
</script>

<style scoped>
  .loading {
    width: 100%;
    height: 100%;
  }
</style>
