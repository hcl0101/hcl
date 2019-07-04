<template>
  <div>
    <hcl-loading :type="type" :backgroundColor="'#409eff'"></hcl-loading>
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
}
</script>
