<template>
  <button
    :disabled="disabled"
    :class="[
      'hcl-button',
      btnType,
      btnSize,
      { 'is-loading': loading },
    ]">
    <i v-if="loading" class="iconfont icon-loading"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    btnType() {
      return 'hcl-button--' + this.type;
    },
    btnSize() {
      return 'hcl-button--' + this.size;
    }
  }
}
</script>

<style lang="scss">
  @import '../../styles/components/button.scss';
</style>
