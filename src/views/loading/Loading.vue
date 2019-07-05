<template>
  <div>
    <div>
      <hcl-button type="primary" @click="handleChange('bounce')">跳动</hcl-button>
      <hcl-button type="primary" @click="handleChange('flip')">翻转</hcl-button>
      <hcl-button type="primary" @click="handleChange('circle')">圆形</hcl-button>
      <hcl-button type="primary" @click="handleChange('rectangle')">矩形</hcl-button>
    </div>
    <div class="loading-container">
      <hcl-loading :type="type" :backgroundColor="'#409eff'"></hcl-loading>
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
      type: 'bounce'
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
    height: 100px;
  }
</style>
