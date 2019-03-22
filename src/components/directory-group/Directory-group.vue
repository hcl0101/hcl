<template>
  <div class="hcl-directory-group">
    <div v-context-menu="contextmenu">
      <slot></slot>
    </div>
    <hcl-context-menu
      ref="context"
      :context="contextmenu"
      @click-contextmenu="handleClickContextmenu">
    </hcl-context-menu>
  </div>
</template>

<script>
import HclContextMenu from '../context-menu/Context-menu.vue';
import contextMenu from "@/directives/context-menu.js";

export default {
  name: 'hclDirectoryGroup',

  components: {
    HclContextMenu
  },

  directives: {
    contextMenu
  },

  props: {
    data: {
      type: Array,
      default: () => []
    },
    contextmenu: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '暂时没有数据!'
    }
  },

  data() {
    return {

    };
  },

  methods: {
    handleClick(data, e) {
      this.$emit('click', data, e);
    },
    handleClickContextmenu(menu, vnode) {
      console.log(this)
      this.$emit('click-contextmenu', menu, vnode);
    }
  }
}
</script>
