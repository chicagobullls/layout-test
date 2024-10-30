<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <router-view />
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
