<template>
  <div v-transfer-dom
    :class="[
      'hcl-drawer',
      drawerPlacement,
      drawerVisible,
      drawerClass
    ]">
    <div
      class="hcl-drawer__mask"
      :style="{ background: mask ? '' : 'inherit' }"
      @click="clickMask($event)">
    </div>
    <div
      class="hcl-drawer__wrapper"
      :style="{
        width: mode === 'vertical' ? width + 'px' : '100%',
        height: mode === 'horizontal' ? width + 'px' : '100%',
        transform: transform,
        transition: 'transform ' + duration / 1000 + 's'
      }">
      <div v-if="!hasDestroyed" class="hcl-drawer__content">
        <template>
          <div v-if="showHeader" class="hcl-drawer__header">
            <div class="header__title">{{ title }}</div>
          </div>
          <slot v-else name="header"></slot>
        </template>
        <template v-if="closable">
          <button class="hcl-drawer__icon--close" @click="closeDrawer($event)">
            <span class="iconfont icon-close"></span>
          </button>
        </template>
        <div class="hcl-drawer__body">
          <slot name="body"></slot>
        </div>
        <template>
          <div v-if="showFooter" class="hcl-drawer__footer">
            <hcl-button type="primary" :loading="loading" @click.native="submit($event)">确认</hcl-button>
            <hcl-button type="default" @click.native="cancel($event)">取 消</hcl-button>
          </div>
          <slot v-else name="footer"></slot>
        </template>
      </div>
      <div v-if="showTrigger" :class="['hcl-drawer__trigger', drawerTrigger]"
        :style="{
          right: mode === 'horizontal'
            ? triggerRight + 'px'
            : placement === 'left' ? '-40px' : '',
          bottom: mode === 'vertical'
            ? triggerBottom + 'px'
            : placement === 'top' ? '-40px' : 0,
          left: mode === 'vertical' && placement === 'right' ? '-40px' : '',
          top: mode === 'horizontal' && placement === 'bottom' ? '-40px' : ''
        }"
        @click="clickTrigger($event)">
        <i :class="[ 'iconfont', triggerIcon ]"></i>
      </div>
    </div>
  </div>
</template>

<script>
import TransferDom from "@/directives/transfer-dom.js";
import hclButton from "../button/Button";

export default {
  name: "hclDrawer",

  directives: {
    TransferDom
  },

  components: {
    hclButton
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    },
    width: {
      type: [Number, String],
      default: 256
    },
    placement: {
      type: String,
      default: "right"
    },
    duration: {
      type: [Number, String],
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
      default: ""
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      hasDestroyed: false
    };
  },

  computed: {
    drawerVisible() {
      return this.visible ? "hcl-drawer--open" : "";
    },

    drawerPlacement() {
      return "hcl-drawer__" + this.placement;
    },

    mode() {
      const reg = new RegExp(this.placement);
      return "left,right".match(reg) ? "vertical" : "horizontal";
    },

    transform() {
      if (this.visible) {
        return "";
      } else {
        switch (this.placement) {
          case "left":
            return "translateX(-100%)";
          case "right":
            return "translateX(100%)";
          case "top":
            return "translateY(-100%)";
          case "bottom":
            return "translateY(100%)";
        }
      }
    },

    drawerTrigger() {
      return "hcl-drawer__" + this.placement;
    },

    triggerIcon() {
      if (this.placement === "right") {
        return this.visible ? "icon-indent" : "icon-outdent";
      } else {
        return this.visible ? "icon-outdent" : "icon-indent";
      }
    }
  },

  watch: {
    visible(newVal) {
      if (!newVal) {
        setTimeout(() => {
          // document.getElementsByClassName('hcl-drawer-body')[0].scrollTop = 0;  //滚动条回到顶部
          this.hasDestroyed = this.destroyOnClose;
        }, this.duration);
      } else {
        this.hasDestroyed = false;
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
      this.$emit("update:visible", true);
      this.$emit("open", event);
    },

    closeDrawer(event) {
      this.$emit("update:visible", false);
      this.$emit("close", event);
      setTimeout(() => {
        this.$emit("closed", event);
        if (this.loading) {
          this.$emit("update:loading", false);
        }
      }, this.duration);
    },

    submit(event) {
      this.$emit("sumit", event);
      setTimeout(() => {
        this.$emit("closed", event);
      }, this.duration);
    },

    cancel(event) {
      this.closeDrawer(event);
    }
  }
};
</script>