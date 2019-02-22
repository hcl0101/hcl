<!--
依赖： 
  iconfont中的antD图标
  elementUi中的el-button
-->

<!-- 
props:
  参数            类型              默认值       说明    
  title           String           ''           抽屉的标题  //show-header为true
  width           String|Number    256          抽屉的宽度
  placement       String           'right'      抽屉的方向 right | left
  visible         Boolean          false        是否可见
  duration        String | Number  0.5          动画持续时间
  mask            Boolean          true         是否显示遮罩层
  maskClosable    Boolean          true         点击遮罩层，是否允许关闭
  closable        Boolean          false        是否展示右上角关闭图标
  show-header     Boolean          true         是否在顶部展示header
  show-footer     Boolean          false        是否在底部展示footer
  show-handle     Boolean          false        是否显示关闭器
  handleBottom    Number           26           关闭器距离底部的距离
  loading         Boolean          false        底部的提交按钮的状态， 需要配合show-footer使用
  drawerClass     String           ''           外部传入的class样式， 用于自定义drawer

event：
  方法名          参数              说明
  onClose         event对象         抽屉收起时的回调，
  onSubmit        event对象         设置footer后，点击确认按钮触发的事件
-->


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
      @click="handleClick($event)">
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
    title: { type: String, default: '' },               //标题
    width: { type: [ Number, String ], default: 256 },  //drawer的宽度
    placement: { type: String, default: 'right' },      //抽屉的方向： left|right
    visible: { type: Boolean, default: false },         //drawer是否可见
    duration: { type: [ Number, String ], default: '0.5' }, //动画持续时间
    mask: { type: Boolean, default: true },             //是否有遮罩层
    maskClosable: { type: Boolean, default: true },     //是否点击遮罩层关闭
    closable: { type: Boolean, default: false },        //是否显示右上角关闭按钮
    showHeader: { type: Boolean, default: true },       //是否显示header
    showFooter: { type: Boolean, default: false },      //是否有footer
    showHandle: { type: Boolean, default: false },      //是否显示关闭器
    handleBottom: { type: Number, default: 26 },        //关闭器距离底部的距离
    loading: { type: Boolean, default: false },         //点击确认时button的加载状态， 配合footer使用
    drawerClass: { type: String, default: '' }          //外部的drawer的样式
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
    handleClick(event) {
      if (this.mask && this.maskClosable) {
        this.closeDrawer(event);
      }
    },

    openDrawer() {
      this.$emit('onOpen');
    },

    closeDrawer(event) {
      this.$emit('onClose', event);
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
      this.$emit('onSubmit', event);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/drawer.scss';
</style>