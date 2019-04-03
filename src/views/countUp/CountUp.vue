<template>
  <div>
    <hcl-count-up :start="start" :end="end"></hcl-count-up>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: 0,
      end: 2000
    }
  }
}
</script>
