<template>
  <div
    ref="directory"
    class="hcl-directory"
    :style="{ backgroundColor: isHover ? hoverColor : 'inherit' }"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">
    <div class="img-container">
      <img :src="data.img" alt="">
    </div>
    <input v-if="data.editing"
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
    <div
      class="checkbox-container"
      v-if="showCheckbox"
      :style="{
        display: (isHover || isChecked) ? 'block' : 'none',
      }"
      @click.stop>
      <el-checkbox
        v-model="isChecked"
        :label="data.name"
        @change="value => isChecked = value">
      </el-checkbox>
    </div>
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
          name: '',
          editing: false
        }
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
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
      isHover: false,
      isChecked: false
    }
  },

  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        this.cacheName = newVal.name;
        this.name = newVal.name;
        if (newVal.editing) {
          this.$nextTick(() => {
            this.focus();
          });
        }
      }
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
    handleClick(e) {
      this.$emit('click', this.data, e);
    },
    handleRename() {
      if (!this.$parent.renameable) return
      if (!this.renameable) return
      this.data.editing = true;
    },
    handleKeyupEsc() {
      this.data.editing = false;
      this.name = this.cacheName;
      this.$emit('rename', this.name);
    },
    handleKeyupEnter() {
      this.data.editing = false;
      this.$emit('rename', this.name);
    }
  }
}
</script>
