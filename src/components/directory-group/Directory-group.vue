<template>
  <div class="hcl-directory-group clearfix">
    <div v-if="isEmpty" class="hcl-directory-group--empty">{{ emptyText }}</div>
    <template v-else>
      <div v-if="loading" style="margin-left: 15px;">
        <i class="iconfont icon-loading"></i>
      </div>
      <slot v-else></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'hclDirectoryGroup',

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '该文件夹为空!'
    }
  },

  data() {
    return {
      isEmpty: false
    };
  },

  created() {
    this.isEmpty = this.$slots.default && this.$slots.default.length ? false : true;
  },

  methods: {
    handleClick(data, e) {
      this.$emit('click', data, e);
    }
  }
}
</script>
