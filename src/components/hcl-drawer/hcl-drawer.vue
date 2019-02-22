<template>
  <div
    :class="[
      'hcl-drawer',
      drawerPlacement,
      drawerVisible,
      drawerClass
    ]">
    <div
      class="hcl-drawer-mask"
      :style="{ background: mask ? '' : 'inherit' }"
      @click="clickMask($event)">
    </div>
    <div
      class="hcl-drawer-content-wrapper"
      :style="{
        width: width + 'px',
        transform: transform,
        transition: 'transform ' + duration + 's'
      }">
      <div class="hcl-drawer-content">
        <div v-if="showHeader" class="hcl-drawer-header">
          <div class="hcl-drawer-title">{{ title }}</div>
        </div>
        <button v-if="showHeader" aria-label="Close" class="ant-drawer-close" @click="closeDrawer($event)">
          <span class="iconfont icon-close"></span>
        </button>
        <div
          class="hcl-drawer-body"
          :style="{
            height: showFooter ? 'calc(100% - 55px)' : '',
            overflow: showFooter ? 'auto' : '',
            paddingBottom: showFooter ? '53px' : ''
          }">
          <slot></slot>
          <div v-if="showFooter" class="hcl-drawer-footer">
            <el-button
              size="small"
              type="primary"
              :loading="loading"
              @click="submit($event)">确 认</el-button>
            <el-button size="small" @click="closeDrawer($event)">取 消</el-button>
          </div>
        </div>
      </div>
      <div v-if="showHandle"
        :class="['hcl-drawer-handle', drawerHandle]"
        :style="{
          bottom: handleBottom + 'px',
          left: placement === 'right' ? '-40px' : '',
          right: placement === 'left' ? '-40px' : ''
        }"
        @click="onHandleClick($event)">
        <i :class="[ 'iconfont', iconHandle ]"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',

  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: [ Number, String ],
      default: 256
    },
    placement: {
      type: String,
      default: 'right'
    },
    visible: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [ Number, String ],
      default: '0.5'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: false
    },
    showHandle: {
      type: Boolean,
      default: false
    },
    handleBottom: {
      type: Number,
      default: 26
    },
    loading: {
      type: Boolean,
      default: false
    },
    drawerClass: {
      type: String,
      default: ''
    }
  },

  computed: {
    drawerVisible() {
      return this.visible ? 'hcl-drawer-open' : '';
    },

    drawerPlacement() {
      return this.placement === 'left' ? 'hcl-drawer-left' : 'hcl-drawer-right';
    },

    transform() {
      if (this.visible) {
        return '';
      } else {
        if (this.loading) {
          return '';
        } else {
          return this.placement === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
        }
      }
    },

    drawerHandle() {
      return this.placement === 'right' ? 'hcl-drawer-handle-right' : 'hcl-drawer-handle-left';
    },

    iconHandle() {
      if (this.placement === 'right') {
        return this.visible ? 'icon-indent' : 'icon-outdent';
      } else {
        return this.visible ? 'icon-outdent' : 'icon-indent';
      }
    }
  },

  watch: {
    visible(newVal) {
      if (!newVal) {
        setTimeout(() => {
          document.getElementsByClassName('hcl-drawer-body')[0].scrollTop = 0;
        }, this.duration * 1000);
      }
    }
  },

  methods: {    
    clickMask(event) {
      if (this.mask && this.maskClosable) {
        this.closeDrawer(event);
      }
    },

    openDrawer() {
      this.$emit('open');
    },

    closeDrawer(event) {
      this.$emit('update:visible', false);
      this.$emit('close', event);
      setTimeout(() => {
        this.$emit('closed', event);
      }, this.duration * 1000);
    },

    onHandleClick(event) {
      if (this.visible) {
        this.closeDrawer(event);
      } else {
        this.openDrawer();
      }
    },

    submit(event) {
      this.$emit('sumit', event);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/drawer.scss';
</style>