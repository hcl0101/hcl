<template>
  <div>
    <h3>注</h3>
      <p>因element用户较多，故以下配色采用element</p>
    <h3>用法</h3>
    <div>
      <h4>基础</h4>
      <div class="demo-container">
        <div class="btn-container">
          <hcl-button size="large">默认按钮</hcl-button>
          <hcl-button size="medium">默认按钮</hcl-button>
          <hcl-button size="small">默认按钮</hcl-button>
          <hcl-button size="large" dashed>默认按钮</hcl-button>
          <hcl-button size="medium" dashed>默认按钮</hcl-button>
          <hcl-button size="small" dashed>默认按钮</hcl-button>
        </div>
        <div class="btn-container">
          <hcl-button type="primary" size="large">主要按钮</hcl-button>
          <hcl-button type="primary" size="medium">主要按钮</hcl-button>
          <hcl-button type="primary" size="small">主要按钮</hcl-button>
        </div>
        <div class="btn-container">
          <hcl-button type="success" size="large">成功按钮</hcl-button>
          <hcl-button type="success" size="medium">成功按钮</hcl-button>
          <hcl-button type="success" size="small">成功按钮</hcl-button>
        </div>
        <div class="btn-container">
          <hcl-button type="danger" size="large">危险按钮</hcl-button>
          <hcl-button type="danger" size="medium">危险按钮</hcl-button>
          <hcl-button type="danger" size="small">危险按钮</hcl-button>
        </div>
      </div>
      <h4>禁用</h4>
      <div class="demo-container">
        <hcl-button disabled>默认按钮</hcl-button>
        <hcl-button type="primary" disabled>主要按钮</hcl-button>
        <hcl-button type="success" disabled>成功按钮</hcl-button>
        <hcl-button type="danger" disabled>危险按钮</hcl-button>
      </div>
      <h4>图标</h4>
      <div class="demo-container">
        <hcl-button type="primary" loading>加载中</hcl-button>
        <hcl-button type="primary" icon="iconfont icon-loading">上一页</hcl-button>
        <hcl-button type="primary">
          下一页
          <i class="iconfont icon-loading"></i>
        </hcl-button>
      </div>
      <h4>文字</h4>
      <div class="demo-container">
        <hcl-button type="text">文字按钮</hcl-button>
        <hcl-button type="text" disabled>文字按钮</hcl-button>
      </div>
    </div>
    
    <div>
      <template v-for="(api, index) in apis">
        <Table :key="index" :title="api.title" :data="api.data"></Table>
      </template>
    </div>
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
      apis: API
    };
  }
}
</script>

<style lang="scss" scoped>
  p {
    text-indent: 27px;
  }
  .btn-container {
    margin-bottom: 15px;
  }
</style>
