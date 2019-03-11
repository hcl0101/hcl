<template>
  <div>
    <hcl-context-menu :context="context">
      <div style="background: red; height: 100px; width: 100px"></div>
    </hcl-context-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      context: [
        { icon: 'iconfont icon-loading', label: '编辑' },
        { icon: 'iconfont icon-loading', label: '删除' },
        { icon: 'iconfont icon-loading', label: '重命名' },
      ]
    };
  }
};
</script>
