<template>
  <ul
    v-transfer-dom
    class="hcl-context-menu"
    :style="{
      display: visible ? 'block' : 'none',
      left: left,
      top: top
    }"
    @click="handleClickContextMenu">
    <li
      v-for="(item, index) in context"
      class="hcl-context-menu__item"
      :key="index">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script>
import TransferDom from "@/directives/transfer-dom.js";

export default {
  name: 'hclContextMenu',

  directives: {
    TransferDom
  },

  props: {
    context: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
    };
  },

  mounted() {
    this.handleClickBody();
  },

  watch: {
    visible(newVal, oldVal) {
      if (newVal) {
        this.handleShow();
      } else {
        this.handleHide();
      }
    }
  },

  methods: {
    showContextMenu(e) {
      this.visible = true;
      this.left = e.pageX + 'px';
      this.top = e.pageY + 'px';
    },

    handleClickContextMenu() {
      this.visible = false;
    },

    handleClickBody() {
      document.body.addEventListener('click', () => { this.visible = false });
      document.body.addEventListener('contextmenu', () => { this.visible = false });
    },

    handleShow() {
      this.$emit('show-contextmenu');
    },

    handleHide() {
      this.$emit('hide-contextmenu');
    }
  }
}
</script>
