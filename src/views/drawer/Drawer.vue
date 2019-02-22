<template>
  <div>
    <button @click="handleClick">{{ btnText }}</button>
    <Drawer
      title="标题"
      :visible="visible">
      <div>测试</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from '@/components/drawer/Drawer';

export default {
  components: {
    Drawer
  },

  data() {
    return {
      visible: false
    }
  },

  computed: {
    btnText() {
      return this.visible ? '收起' : '展开';
    }
  },

  methods: {
    handleClick() {
      this.visible = !this.visible;
    }
  }
}
</script>
