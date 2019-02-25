<template>
  <div>
    <button @click="handleClick">{{ btnText }}</button>
    <template v-for="(api, index) in apis">
      <Table :key="index" :title="api.title" :data="api.data"></Table>
    </template>
    <hcl-drawer
      title="标题"
      width="300"
      show-header
      show-footer
      :visible.sync="visible">
      <div slot="header">header</div>
      <div slot="body">body</div>
      <div slot="footer">footer</div>
    </hcl-drawer>
  </div>
</template>

<script>
import hclDrawer from '@/components/hcl-drawer/hcl-drawer';
import Table from '@/views/Table';
import API from './api';

export default {
  components: {
    hclDrawer,
    Table
  },

  data() {
    return {
      visible: false,
      apis: API
    }
  },

  computed: {
    btnText() {
      return this.visible ? '收起' : '展开';
    }
  },

  methods: {
    handleClick() {
      this.visible = !this.visible;
    }
  }
}
</script>
