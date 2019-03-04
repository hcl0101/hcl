<template>
  <button
    :disabled="disabled"
    :class="[
      'hcl-button',
      btnType,
      btnSize,
      { 'hcl-button--dashed': dashed },
      { 'is-loading': loading },
      { 'is-disabled': disabled }
    ]">
    <i v-if="loading" class="iconfont icon-loading"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'hclButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    dashed: {
      type: Boolean,
      default: false
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
