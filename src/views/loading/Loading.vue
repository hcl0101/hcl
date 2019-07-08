<template>
  <div>
    <div>
      <hcl-button type="primary" @click="handleChange('bounce')">跳动</hcl-button>
      <hcl-button type="primary" @click="handleChange('flip')">翻转</hcl-button>
      <hcl-button type="primary" @click="handleChange('circle')">圆形</hcl-button>
      <hcl-button type="primary" @click="handleChange('rectangle')">矩形</hcl-button>
      <hcl-button type="primary" @click="handleChange('svg-square')">正方形svg</hcl-button>
      <hcl-button type="primary" @click="handleChange('svg-gear')">齿轮svg</hcl-button>
    </div>
    <div class="loading-container clearfix">
      <div class="loading-item" v-for="type in types" :key="type">
        <hcl-loading :type="type" :backgroundColor="'#409eff'"></hcl-loading>
        <div class="loading-item--label">{{ type }}</div>
      </div>
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
  },

  methods: {
    handleChange(type) {
      this.type = type;
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
