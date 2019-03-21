<template>
  <button
    :disabled="disabled"
    :class="[
      'hcl-button',
      btnType,
      btnSize,
      { 'hcl-button--dashed': dashed },
      { 'is-loading': loading }
    ]"
    @click="handleClick">
    <i class="iconfont icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
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
    icon: {
      type: String,
      default: ''
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
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>
