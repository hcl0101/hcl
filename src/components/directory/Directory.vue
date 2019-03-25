<template>
  <div class="hcl-directory" @click="handleClick">
    <img :src="data.img" alt="">
    <input v-if="editing"
      ref="input"
      class="hcl-input"
      type="text"
      v-model="name"
      @click.stop.prevent
      @keyup.esc="handleKeyupEsc"
      @keyup.enter="handleKeyupEnter"/>
    <p v-else
      class="ellipsis"
      :title="name"
      @click.stop.prevent="handleClickName">
      {{ name }}
    </p>
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

  data() {
    return {
      name: '',
      cacheName: '',
      editing: false,
      isGroup: false
    }
  },

  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        this.cacheName = newVal.name;
        this.name = newVal.name;
      }
    },
    editing(newVal, oldVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.focus();
        })
      }
    }
  },

  mounted() {
    this.isGroup = this.$parent.$el.getAttribute('class').match('hcl-directory-group');
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
    handleClick(e) {
      if (this.isGroup) {
        this.$parent.handleClick(this.data, e);
      } else {
        this.$emit('click', this.data, e);
      }
    },
    handleClickName() {
      this.editing = true;
    },
    handleKeyupEsc() {
      this.editing = false;
      this.name = this.cacheName;
    },
    handleKeyupEnter() {
      this.editing = false;
    }
  }
}
</script>
