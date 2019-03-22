<template>
  <div class="hcl-directory" @click="handleClick">
    <img :src="data.img" alt="">
    <p class="ellipsis" :title="data.name">{{ data.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'hclDirectory',

  props: {
    data: {
      type: Object,
      default: () => {
        return {
          img: '',
          name: ''
        }
      }
    },
    hoverColor: {
      type: String,
      default: '#bddaf9'
    }
  },

  methods: {
    handleClick(e) {
      if (this.$parent.$el.getAttribute('class').match('hcl-directory-group')) {
        this.$parent.handleClick(this.data, e);
      } else {
        this.$emit('click', this.data, e);
      }
    }
  }
}
</script>
