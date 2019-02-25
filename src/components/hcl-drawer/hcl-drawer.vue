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
      class="hcl-drawer-wrapper"
      :style="{
        width: width + 'px',
        transform: transform,
        transition: 'transform ' + duration / 1000 + 's'
      }">
      <div class="hcl-drawer-content">
        <template>
          <div v-if="showHeader" class="hcl-drawer-header">
            <div class="header-title">{{ title }}</div>
            <button v-if="closable" class="header-icon__close" @click="closeDrawer($event)">
              <span class="iconfont icon-close"></span>
            </button>
          </div>
          <slot v-else name="header"></slot>
        </template>
        <div class="hcl-drawer-body">
          <slot name="body"></slot>
        </div>
        <template>
          <div v-if="showFooter" class="hcl-drawer-footer">
            <button class="btn btn-submit" :loading="loading" @click="submit($event)">确 认</button>
            <button class="btn btn-cancel" @click="closeDrawer($event)">取 消</button>
          </div>
          <slot v-else name="footer"></slot>
        </template>
      </div>
      <div v-if="showTrigger"
        :class="['hcl-drawer-trigger', drawerTrigger]"
        :style="{
          bottom: triggerBottom + 'px',
          left: placement === 'right' ? '-40px' : '',
          right: placement === 'left' ? '-40px' : ''
        }"
        @click="onHandleClick($event)">
        <i :class="[ 'iconfont', iconTrigger ]"></i>
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
      default: 500
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
    showTrigger: {
      type: Boolean,
      default: false
    },
    triggerBottom: {
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
      return this.placement === 'left' ? 'hcl-drawer__left' : 'hcl-drawer__right';
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

    drawerTrigger() {
      return this.placement === 'right' ? 'hcl-drawer-trigger__right' : 'hcl-drawer-trigger__left';
    },

    iconTrigger() {
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
        }, this.duration);
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
      }, this.duration);
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