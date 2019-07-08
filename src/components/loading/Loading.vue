<template>
  <div class="loading flex-center">
    <css-circle v-if="type === 'circle'" :backgroundColor="backgroundColor"></css-circle>
    <css-flip v-else-if="type === 'flip'" :backgroundColor="backgroundColor"></css-flip>
    <css-bounce v-else-if="type === 'bounce'" :backgroundColor="backgroundColor"></css-bounce>
    <css-rectangle v-else-if="type === 'rectangle'" :backgroundColor="backgroundColor"></css-rectangle>
    <svg-square v-else-if="type === 'svg-square'"></svg-square>
    <svg-gear v-else-if="type === 'svg-gear'"></svg-gear>
  </div>
</template>

<script>
import CssCircle from './modules/css-circle';
import CssRectangle from './modules/css-rectangle';
import CssFlip from './modules/css-flip';
import CssBounce from './modules/css-bounce';
import SvgSquare from './modules/svg-square';
import SvgGear from './modules/svg-gear';

export default {
  name: "hclLoading",
  
  components: {
    CssCircle,
    CssRectangle,
    CssFlip,
    CssBounce,
    SvgSquare,
    SvgGear
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
