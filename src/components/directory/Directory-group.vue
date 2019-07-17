<template>
  <div class="hcl-directory-group clearfix">
    <div class="hcl-directory-group__header">
      <el-checkbox
        class="check-all"
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange">全选
      </el-checkbox>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
          <a :title="item.name" @click="clickBreadcrumb(item, index)">{{ item.name }}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <slot name="header"></slot>
    </div>
    <div class="hcl-directory-group__body">
      <div v-if="isEmpty" class="hcl-directory-group--empty">{{ emptyText }}</div>
      <template v-else>
        <div v-if="loading" style="margin-left: 15px;">
          <i class="iconfont icon-loading"></i>
        </div>
        <el-checkbox-group
          v-else
          v-model="checkedItems"
          @change="handleItemChecked">
          <slot></slot>
        </el-checkbox-group>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hclDirectoryGroup',

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '该文件夹为空!'
    },
    renameable: {
      type: Boolean,
      default: true
    },
    hoverColor: {
      type: String,
      default: '#bddaf9'
    }
  },

  data() {
    return {
      isEmpty: false,
      breadcrumbList: [{ name: '根目录', id: '/' }],
      checkedItems: [],
      checkAll: false,
      isIndeterminate: true,
    };
  },

  created() {
    this.isEmpty = this.$slots.default && this.$slots.default.length ? false : true;
  },

  methods: {
    handleItemChecked(value) {
      this.$emit('change-checked', value);
    },

    handleCheckAllChange(value) {
      // this.$emit('change-checked', value);
      console.log(this.$children)
    },

    clickBreadcrumb() {

    }
  }
}
</script>
