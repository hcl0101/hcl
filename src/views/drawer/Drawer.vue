<template>
  <div>
    <hcl-button type="primary" @click="handleClick('right')">right</hcl-button>
    <hcl-button type="primary" @click="handleClick('left')">left</hcl-button>
    <hcl-button type="primary" @click="handleClick('top')">top</hcl-button>
    <hcl-button type="primary" @click="handleClick('bottom')">bottom</hcl-button>

    <template v-for="(api, index) in apis">
      <Table :key="index" :title="api.title" :data="api.data"></Table>
    </template>
    <hcl-drawer
      title="标题"
      width="300"
      closable
      show-header
      show-footer
      show-trigger
      destroyOnClose
      :placement="placement"
      :trigger-bottom="100"
      :visible.sync="visible"
      :loading.sync="loading"
      @open="open"
      @close="close"
      @closed="closed"
      @sumit="submit">
      <div slot="header">header</div>
      <div slot="body">body</div>
      <div slot="footer">footer</div>
    </hcl-drawer>
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
      visible: false,
      loading: false,
      placement: 'right',
      btnText: '',
    }
  },

  methods: {
    handleClick(placement) {
      this.visible = !this.visible;
      this.placement = placement;
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
    closed() {
      console.log('closed');
    },
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.visible = false;
      }, 1500);
      
      console.log('submit');
    }
  }
}
</script>
