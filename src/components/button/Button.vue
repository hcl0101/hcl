<template>
  <button
    :disabled="disabled"
    :class="[
      'hcl-button',
      { 'is-loading': loading },
      btnType,
      btnSize
    ]">
    <span></span>
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
