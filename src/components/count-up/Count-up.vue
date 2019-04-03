<template>
  <div class="hcl-count-to">
    <slot name="left"></slot>
    <span class="hcl-count-to__text">{{ count }}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'hclCountUp',

  props: {
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    //保留几位小数
    decimals: {
      type: Number,
      default: 0
    },
    //整数与小数的分割符
    Separator: {
      type: String,
      default: '.'
    }
  },

  computed: {
    count() {
      
    }
  }
}
</script>
