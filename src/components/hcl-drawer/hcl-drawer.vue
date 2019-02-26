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
        width: horizontalOrvertical === 'vertical' ? width + 'px' : '100%',
        height: horizontalOrvertical === 'horizontal' ? width + 'px' : '100%',
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
            <button class="btn btn-submit" :class="{ 'btn-loading': loading }" @click="submit($event)">
              <i v-if="loading" class="iconfont icon-loading"></i>
              <span>确 认</span>
            </button>
            <button class="btn btn-cancel" @click="cancel($event)">取 消</button>
          </div>
          <slot v-else name="footer"></slot>
        </template>
      </div>
      <div v-if="showTrigger" :class="['hcl-drawer-trigger', drawerTrigger]"
        :style="{
          right: horizontalOrvertical === 'horizontal'
            ? triggerRight + 'px'
            : placement === 'left' ? '-40px' : '',
          bottom: horizontalOrvertical === 'vertical'
            ? triggerBottom + 'px'
            : placement === 'top' ? '-40px' : 0,
          left: horizontalOrvertical === 'vertical' && placement === 'right' ? '-40px' : '',
          top: horizontalOrvertical === 'horizontal' && placement === 'bottom' ? '-40px' : ''
        }"
        @click="clickTrigger($event)">
        <i :class="[ 'iconfont', triggerIcon ]"></i>
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
      default: 100
    },
    triggerRight: {
      type: Number,
      default: 100
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
      return 'hcl-drawer__' + this.placement;
    },

    horizontalOrvertical() {
      const reg = new RegExp(this.placement);
      return 'left,right'.match(reg) ? 'vertical' : 'horizontal';
    },

    transform() {
      if (this.visible) {
        return '';
      } else {
        switch(this.placement) {
          case 'left':
            return 'translateX(-100%)';
          case 'right':
            return 'translateX(100%)';
          case 'top':
            return 'translateY(-100%)';
          case 'bottom':
            return 'translateY(100%)'
        }
      }
    },

    drawerTrigger() {
      return 'hcl-drawer__' + this.placement;
    },

    triggerIcon() {
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

    clickTrigger(event) {
      if (this.visible) {
        this.closeDrawer(event);
      } else {
        this.openDrawer();
      }
    },

    openDrawer() {
      this.$emit('update:visible', true);
      this.$emit('open', event);
    },

    closeDrawer(event) {
      this.$emit('update:visible', false);
      this.$emit('close', event);
      setTimeout(() => {
        this.$emit('closed', event);
      }, this.duration);
    },

    submit(event) {
      this.$emit('sumit', event);
      setTimeout(() => {
        this.$emit('closed', event);
      }, this.duration);
    },

    cancel(event) {
      this.closeDrawer(event);
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/drawer.scss';
</style>