<script setup lang="ts"></script>

<template>
  <div class="products-list">
    <h3 class="products-list__title"> Что на прилавке </h3>
    <div class="products-list__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-list {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-left: -10px;
  width: calc(100% + (10px * 2));

  &::after {
    content: '';

    position: absolute;
    bottom: 23px;
    right: 24px;

    display: block;

    width: 45px;
    height: 45px;

    border-radius: 50%;
    pointer-events: none;
    z-index: var(--z-index-4);
    background-color: var(--color-olive);

    @include tablet {
      bottom: 40px;
      right: 12px;
    }
  }

  @include tablet {
    gap: 30px;

    width: 100%;
    margin-left: 0;
    max-width: 905px;
  }

  &__title {
    padding-left: 10px;

    font-weight: 700;
    font-size: 30px;
    line-height: 40px;

    color: var(--color-dark);

    @include tablet {
      font-size: 40px;
      padding-left: 0;
    }
  }

  &__content {
    position: relative;

    display: flex;
    gap: 10px;

    width: 100%;
    padding: 0 10px 37px;

    overflow-x: scroll;
    scroll-padding: 10px;
    scroll-snap-type: x mandatory;

    @include tablet {
      justify-content: space-between;

      margin-left: -10px;
      padding: 0 10px 48px;
      width: calc(100% + (10px * 2));

      overflow: auto;
      scroll-padding: 10px;
    }
  }
}
</style>
