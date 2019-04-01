<template>
  <div
    ref="directory"
    class="hcl-directory"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
    <div class="img-container">
      <img :src="data.img" alt="">
    </div>
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
      @click.stop.prevent="handleRename">
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
      name: '',
      cacheName: '',
      editing: false
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

  methods: {
    focus() {
      this.$refs.input.focus();
    },
    onMouseEnter() {
      this.$refs.directory.style.backgroundColor = this.$parent.hoverColor || this.hoverColor
    },
    onMouseLeave() {
      this.$refs.directory.style.backgroundColor = 'inherit';
    },
    handleClick(e) {
      this.$emit('click', this.data, e);
    },
    handleRename() {
      if (!this.$parent.renameable) return
      if (!this.renameable) return
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
