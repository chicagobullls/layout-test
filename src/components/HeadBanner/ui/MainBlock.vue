<script setup lang="ts">
import { bannerConfig } from '@/assets/mocks/banner.config'
import { computed } from 'vue'

import patisonsMobile from '@/assets/images/patisons-mobile.png'
import patisonsTablet from '@/assets/images/patisons-tablet.png'

const backgroundGradient = computed(() => bannerConfig.mainBlock.backgroundGradient)
</script>

<template>
  <div class="main-block">
    <div class="main-block__overlay-wrapper">
      <div class="main-block__overlay" :style="{ background: backgroundGradient }" />
    </div>
    <picture>
      <source media="(max-width: 768px)" :srcset="patisonsMobile" />
      <source media="(min-width: 769px)" :srcset="patisonsTablet" />
      <img :src="patisonsTablet" alt="banner-image" class="main-block__image" />
    </picture>
    <div class="main-block__content">
      <div class="main-block__info">
        <span class="main-block__info-subtitle">{{ bannerConfig.mainBlock.subtitle }} </span>
        <span class="main-block__info-title">{{ bannerConfig.mainBlock.title }}</span>
      </div>
      <a :href="bannerConfig.mainBlock.url" class="main-block__link">
        <svg width="62" height="30" viewBox="0 0 62 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-block {
  position: relative;

  width: 100%;
  min-height: 400px;
  padding: 20px;
  border-radius: 10px 10px 0 0;

  @include tablet {
    padding: 36px 30px 37px;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;

    left: 0;
    bottom: 0;

    width: 76px;
    height: 76px;

    border-radius: 50%;
    z-index: var(--z-index-5);
    transform: translate(-50%, -109%);
    background-color: var(--color-green-muted);

    @include tablet {
      transform: translate(-50%, -175%);
    }
  }

  &:after {
    content: '';
    position: absolute;
    display: block;

    right: 0;
    bottom: 0;

    width: 36px;
    height: 36px;

    transform: translate(-50%, 50%);
    border-radius: 50%;
    z-index: var(--z-index-4);
    background-color: var(--color-green-pastel);

    @include tablet {
      transform: translate(-96px, 36%);
      z-index: var(--z-index-2);
    }
  }

  &__overlay-wrapper {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: var(--z-index-3);
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }

  &__overlay,
  &__image,
  &__content {
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    @include tablet {
      border-radius: 10px;
    }
  }

  &__overlay {



    width: 100%;
    height: 100%;


    transform: rotate(180deg);

    @include tablet {
      display: flex;
      transform: rotate(0);
    }
  }

  &__content {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;

    z-index: var(--z-index-4);

    @include tablet {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include tablet {
      height: 100%;
      justify-content: space-between;
    }
  }

  &__info-subtitle {
    font-weight: 400;
    font-size: 20px;
    color: var(--color-white);

    @include tablet {
      font-size: 30px;
    }
  }

  &__info-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;

    color: var(--color-white);

    @include tablet {
      font-size: 40px;
      max-width: 430px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
    height: fit-content;
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    z-index: var(--z-index-2);
    object-fit: cover;
  }
}
</style>
