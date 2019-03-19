<template>
  <div>
    <div class="context-menu--container" v-context-menu="context">
      <p>右键点击此区域</p>
    </div>
    <hcl-context-menu
      ref="context"
      :context="context"
      :show-contextmenu="handleShow"
      :hide-contextmenu="handleHide">
    </hcl-context-menu>
    <template v-for="(api, index) in apis">
      <Table :key="index" :title="api.title" :data="api.data"></Table>
    </template>
  </div>
</template>

<script>
import contextMenu from "@/directives/context-menu.js";
import Table from '@/views/Table';
import API from './api';

export default {
  components: {
    Table
  },

  directives: {
    contextMenu
  },

  data() {
    return {
      apis: API,
      context: [
        { icon: 'iconfont icon-fenxiangfangshi', label: '编辑' },
        { icon: 'iconfont icon-shujukanban', label: '删除' },
        { icon: 'iconfont icon-addteam', label: '重命名' },
      ]
    };
  },

  methods: {
    handleShow() {
      console.log('show')
    },

    handleHide() {
      console.log('hide')
    }
  }
};
</script>

<style lang="scss" scoped>
  .context-menu--container {
    height: 100px;
    border-radius: 4px;
    border: 1px solid #409EFF;
    p {
      line-height: 40px;
      color: #666;
      text-align: center;
    }
  }
</style>
