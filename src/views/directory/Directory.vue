<template>
  <div class="view-directory">
    <hcl-directory-group @click="handleClick">
      <template v-for="directory in directories">
        <hcl-directory
          v-context-menu="contextmenu"
          :key="directory.id"
          :data="directory">
        </hcl-directory>
      </template>
      <hcl-context-menu
        ref="context"
        :context="contextmenu"
        @show-contextmenu="handleShowContextmenu"
        @click-contextmenu="handleClickContextmenu">
      </hcl-context-menu>
    </hcl-directory-group>
  </div>
</template>

<script>
import contextMenu from "@/directives/context-menu.js";

import ICON_DIRECTORY_ADD from '@/assets/images/directory_add.png';
import ICON_DIRECTORY from '@/assets/images/directory.png';

export default {
  directives: {
    contextMenu
  },

  data() {
    return {
      directories: [
        { id: 1, name: '新建文件夹', img: ICON_DIRECTORY_ADD, type: 'create' },
        { id: 2, name: '文件夹', img: ICON_DIRECTORY, type: 'folder' },
        { id: 3, name: '文件', img: ICON_DIRECTORY, type: 'file' },
      ],
      contextmenu: []
    };
  },

  methods: {
    handleClick(item, e) {
      console.log(`点击了:${item.name}`);
    },
    handleShowContextmenu(vnode) {
      const index = this.directories.findIndex(directory => directory.id === vnode.key);

      if (this.directories[index].type === 'create') {
        this.contextmenu = [];
      } else {
        this.contextmenu = [
          { label: '编辑' },
          { label: '删除' },
          { label: '重命名' }
        ];
      }
    },
    handleClickContextmenu(contextmenu, vnode) {
      const index = this.directories.findIndex(directory => directory.id === vnode.key);
      console.log(`当前操作： ${this.directories[index].name}, 点击了${contextmenu.label}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .view-directory {
    padding: 15px;
  }
</style>
