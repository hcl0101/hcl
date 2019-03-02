<template>
  <div>
    <div>
      <hcl-button>默认</hcl-button>
      <hcl-button type="primary">主要</hcl-button>
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
