<script setup lang="ts">
import MainBlock from './ui/MainBlock.vue'
import AsideBlock from './ui/AsideBlock.vue'
</script>

<template>
  <div class="head-banner">
    <main-block />
    <aside-block />
  </div>
</template>

<style lang="scss" scoped>
.head-banner {
  position: relative;

  display: flex;
  flex-direction: column;

  @include tablet {
    gap: 24px;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 905px;
    width: 100%;
  }

  &:after {
    content: '';

    position: absolute;
    top: 0;
    right: 0;

    margin: -65px -67px 0 0;

    display: block;

    width: 98px;
    height: 99px;

    border-radius: 50%;
    background-color: transparent;
    border: 4px solid var(--color-olive-light);
    z-index: var(--z-index-6);

    @include tablet {
      margin: -51px -42px 0 0;

      width: 92px;
      height: 92px;
    }
  }
}
</style>
