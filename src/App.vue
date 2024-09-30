<script setup lang="ts">
import PageIndex from './pages/PageIndex.vue'
</script>

<template>
  <div class="main">
    <page-index />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  overflow: hidden;

  padding: 10px 10px 0;

  @include tablet {
    padding: 60px 10px 0;
  }
}
</style>
