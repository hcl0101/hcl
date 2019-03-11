<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <div v-transfer-dom>
      <ul>
        <li v-for="(item, index) in context" :key="index">
          <i></i>
          <span>123</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import TransferDom from "@/directives/transfer-dom.js";

export default {
  name: 'hclContextMenu',

  directives: {
    TransferDom
  },

  props: {
    context: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {

    };
  },
}
</script>
