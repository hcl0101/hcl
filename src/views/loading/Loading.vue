<template>
  <div>
    <div class="loading-container clearfix">
      <div class="loading-item" v-for="type in types" :key="type">
        <hcl-loading :type="type" :backgroundColor="'#409eff'"></hcl-loading>
        <div class="loading-item--label">{{ type }}</div>
      </div>
    </div>
    <div>
      <h3>备注</h3>
      <p>
        其中svg-xxx来源于
        <a href="https://loading.io/" target="_blank">https://loading.io/</a>
        这里随便取了两个
      </p>
    </div>
    <template v-for="(api, index) in apis">
      <Table :key="index" :title="api.title" :data="api.data"></Table>
    </template>
  </div>
</template>

<script>
import Table from '@/views/Table';
import API from './api';

export default {
  components: {
    Table
  },

  data() {
    return {
      apis: API,
      types: ['bounce', 'flip', 'circle', 'rectangle', 'svg-square', 'svg-gear']
    }
  }
}
</script>

<style scoped>
  .loading-container {
    margin: 20px 0;
  }
  .loading-container .loading-item {
    float: left;
    width: 120px;
    height: 100px;
    padding: 0 15px;
  }
  .loading-item .loading-item--label {
    color: #606266;
    text-align: center;
  }
</style>
