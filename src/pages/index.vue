<script setup lang="ts">
</script>

<template>
  <div class="container">
    <nav class="home-nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/layout">Верстка</router-link>
      <router-link to="/docs">Swagger</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.home-nav {
  display: flex;
  gap: 10px;
}
</style>
