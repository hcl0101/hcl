<template>
<div>
  <div class="view-directory">
    <hcl-directory-group ref="directory" :loading="loading">
      <template v-for="directory in data">
        <hcl-directory
          v-context-menu="contextmenu"
          :key="directory.id"
          :data="directory"
          @click="handleClick">
        </hcl-directory>
      </template>
    </hcl-directory-group>
    <hcl-context-menu
      ref="context"
      :context="contextmenu"
      @show-contextmenu="showContextmenu"
      @click-contextmenu="clickContextmenu">
    </hcl-context-menu>
  </div>
  <template v-for="(api, index) in apis">
    <Table :key="index" :title="api.title" :data="api.data"></Table>
  </template>
</div>
</template>

<script>
import contextMenu from "@/directives/context-menu.js";
import Table from '@/views/Table';
import API from './api';

import ICON_DIRECTORY_ADD from '@/assets/images/directory_add.png';
import ICON_DIRECTORY from '@/assets/images/directory.png';
import ICON_FILE from '@/assets/images/file.png';

export default {
  components: {
    Table
  },

  directives: {
    contextMenu
  },

  data() {
    return {
      apis: API,
      loading: false,
      data: [
        { id: 1, name: '新建文件夹', img: ICON_DIRECTORY_ADD, type: 'create' },
        { id: 2, name: '文件夹1', img: ICON_DIRECTORY, type: 'folder' },
        { id: 3, name: '文件夹2', img: ICON_DIRECTORY, type: 'folder' },
        { id: 4, name: '文件夹3', img: ICON_DIRECTORY, type: 'folder' },
        { id: 5, name: '文件1', img: ICON_FILE, type: 'file' },
        { id: 6, name: '文件2', img: ICON_FILE, type: 'file' },
        { id: 7, name: '文件3', img: ICON_FILE, type: 'file' },
      ],
      contextmenu: []
    };
  },

  methods: {
    handleClick(item, e) {
      console.log(`点击了:${item.name}`);
      if (item.type === 'create') {
        this.createFolder();
      } else if (item.type === 'folder') {
        this.clickFolder();
      } else {
        this.clickFile();
      }
    },

    createFolder() {
      this.data.push({
        id: this.data.length + 1,
        name: '文件夹' + this.data.length,
        img: ICON_DIRECTORY,
        type: 'folder'
      });
      this.$nextTick(() => {
        this.$refs['directory'].rename(this.data.length - 1);
      });
    },

    clickFolder() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    clickFile() {
      alert('点击了文件')
    },

    showContextmenu(vnode) {
      const index = this.data.findIndex(directory => directory.id === vnode.key);

      if (this.data[index].type === 'create') {
        this.contextmenu = [];
      } else {
        this.contextmenu = [
          { label: '编辑', value: 'edit' },
          { label: '删除', value: 'delete' },
          { label: '重命名', value: 'rename' }
        ];
      }
    },

    clickContextmenu(contextmenu, vnode) {
      const index = this.data.findIndex(directory => directory.id === vnode.key);

      alert(`当前操作： ${this.data[index].name}, 点击了${contextmenu.value}`);
      const type = contextmenu.value;
      if (type === 'edit') {
        
      } else if (type === 'delete') {
        this.data.splice(index, 1);
      } else if (type === 'rename') {
        this.$refs['directory'].rename(index);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .view-directory {
    padding: 15px;
    margin: 0 20px 20px 20px;
    border: 1px solid #ebedf0;
    border-radius: 2px;
  }
</style>
