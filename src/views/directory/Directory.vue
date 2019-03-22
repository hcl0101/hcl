<template>
  <div class="view-directory clearfix">
    <hcl-directory-group
      :contextmenu="contextmenu"
      @click="handleClick"
      @click-contextmenu="handleClickContextmenu">
      <template v-for="directory in directories">
        <hcl-directory
          :key="directory.id"
          :contextmenu="contextmenu"
          :data="directory">
        </hcl-directory>
      </template>
    </hcl-directory-group>
  </div>
</template>

<script>
import ICON_DIRECTORY_ADD from '@/assets/images/directory_add.png';
import ICON_DIRECTORY from '@/assets/images/directory.png';

export default {
  data() {
    return {
      directories: [
        { id: 1, name: '新建文件夹', img: ICON_DIRECTORY_ADD, type: 'create' },
        { id: 2, name: '文件夹', img: ICON_DIRECTORY, type: 'folder' },
        { id: 3, name: '文件', img: ICON_DIRECTORY, type: 'file' },
      ],
      contextmenu: [
        { label: '编辑' },
        { label: '删除' },
        { label: '重命名' }
      ]
    };
  },

  methods: {
    handleClick(item, e) {
      console.log(item)
    },
    handleClickContextmenu(contextmenu, vnode) {
      console.log(contextmenu, vnode)
    }
  }
}
</script>

<style lang="scss" scoped>
  .view-directory {
    padding: 15px;
  }
</style>
