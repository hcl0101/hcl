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
    },
    renameable: {
      type: Boolean,
      default: true
    },
    hoverColor: {
      type: String,
      default: '#bddaf9'
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
    rename(index) {
      // if (!this.renameable) return
      // if (!this.$children[index].renameable) return
      // this.$children[index].editing = true;

      this.$children[index].handleRename(inde)
    }
  }
}
</script>
