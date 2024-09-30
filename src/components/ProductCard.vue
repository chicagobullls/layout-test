<script setup lang="ts">
import { defineProps } from 'vue'

interface ProductCardProps {
  title: string
  price: number
  imgSrc: string
}

defineProps<ProductCardProps>()
</script>

<template>
  <article class="product-card">
    <div class="product-card__content">
      <a class="product-card__link" href="#" />
      <img class="product-card__image" :src="`/src/assets/images/${imgSrc}`" :alt="title" />
      <div class="product-card__info">
        <h3 class="product-card__title">{{ title }}</h3>
        <p class="product-card__price">{{ price }} ₽</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
$product-card-after-size: 36px;

.product-card {
  position: relative;

  width: 40vw;
  min-width: 150px;
  flex: 0 0 auto;
  scroll-snap-align: start;

  @include tablet {
    max-width: 162px;
  }

  &:first-child {
    &:after {
      @include tablet {
        content: '';
        position: absolute;
        top: 47%;
        right: 0;

        display: block;

        width: $product-card-after-size;
        height: $product-card-after-size;

        border-radius: 50%;
        z-index: var(--z-index-2);
        background-color: var(--color-dark);
        margin-right: calc($product-card-after-size / -2);
      }
    }
  }

  &__content {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    flex: 0 0 auto;

    overflow: hidden;
    border-radius: 10px;
    z-index: var(--z-index-3);
    background: var(--color-white);
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.07);
  }

  &__image {
    width: 100%;
    height: 150px;
    min-width: 150px;

    object-fit: cover;
    border-radius: 10px;

    @include tablet {
      height: 160px;
    }
  }

  &__link {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    cursor: pointer;
    z-index: var(--z-index-2);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 10.89px;
    height: 100%;
    padding: 15px 28px 20px 15px;

    @include tablet {
      gap: 16.89px;
      padding: 16px 28px 21px 16px;
    }
  }

  &__title {
    max-width: 117px;

    font-weight: 400;
    font-size: 16px;
    min-height: 45.95px;

    color: var(--color-green-moss);
  }

  &__price {
    margin-top: auto;

    font-weight: 700;
    font-size: 16px;

    color: var(--color-green-moss);
  }
}
</style>
