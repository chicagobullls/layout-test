<script setup lang="ts">
import { bannerConfig } from '@/assets/mocks/banner.config'

import pumpkinMobile from '@/assets/images/pumpkin-mobile.png'
import pumpkinTablet from '@/assets/images/pumpkin-tablet.png'
</script>

<template>
  <div class="aside-block">
    <div class="aside-block__content">
      <div class="aside-block__title-container">
        <span class="aside-block__title-container-subtitle">А также:</span>
        <span class="aside-block__title-container-title">{{ bannerConfig.asideBlock.title }}</span>
      </div>
      <p class="aside-block__description">{{ bannerConfig.asideBlock.description }}</p>
      <a class="aside-block__link" :href="bannerConfig.asideBlock.url">еще о выставке</a>
    </div>
    <picture>
      <source media="(max-width: 768px)" :srcset="pumpkinMobile" />
      <source media="(min-width: 769px)" :srcset="pumpkinTablet" />
      <img :src="pumpkinTablet" alt="banner-image" class="aside-block__image" />
    </picture>
  </div>
</template>

<style lang="scss" scoped>
.aside-block {
  position: relative;

  width: 100%;

  border-radius: 0 0 10px 10px;
  padding: 13px 25px 21px 20px;

  @include tablet {
    padding: 36px 20px 30px 25px;

    max-width: 260px;
    border-radius: 10px;
  }

  &:after {
    content: '';
    position: absolute;

    bottom: 0;
    left: 0;

    width: 35px;
    height: 35px;
    transform: translate(128%, 43%);
    border-radius: 50%;
    background: var(--color-dark);

    @include tablet {
      display: none;
    }
  }

  &__content {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 27px;
    height: 100%;
    z-index: var(--z-index-3);

    @include tablet {
      gap: 9px;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    overflow: hidden;
    z-index: var(--z-index-2);
    border-radius: 0 0 10px 10px;
  }

  &__title-container {
    display: flex;
    flex-direction: column;
    gap: 6px;

    @include tablet {
      gap: 9px;
    }
  }

  &__title-container-title,
  &__title-container-subtitle {
    font-size: 20px;

    color: var(--color-white);

    @include tablet {
      font-size: 30px;
    }
  }

  &__title-container-subtitle {
    font-weight: 400;
  }

  &__title-container-title {
    font-weight: 700;
  }

  &__description {
    display: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: var(--color-white);

    @include tablet {
      display: inline;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 19px 0 15px;

    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;

    border-radius: 10px;
    color: var(--color-white);
    border: 2px solid var(--color-white);

    @include tablet {
      margin-top: auto;
      padding: 17px 0 15px;

      font-size: 16px;
    }
  }
}
</style>
