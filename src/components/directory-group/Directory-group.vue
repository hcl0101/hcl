<template>
  <div class="hcl-directory-group clearfix">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hclDirectoryGroup',

  props: {
    data: {
      type: Array,
      default: () => []
    },
    contextmenu: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '暂时没有数据!'
    }
  },

  data() {
    return {

    };
  },

  methods: {
    handleClick(data, e) {
      this.$emit('click', data, e);
    }
  }
}
</script>
