<script setup lang="ts">
import ProductList from '@/components/ProductsList/ProductsList.vue'
import HeadBanner from '@/components/HeadBanner/HeadBanner.vue'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

import { productListConfig } from '@/assets/mocks/productList.config'
import { computed } from 'vue'

const productListData = computed(() => productListConfig.products)
</script>

<template>
  <div class="container">
    <head-banner />
    <product-list>
      <product-card
        v-for="product in productListData"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :imgSrc="product.imgSrc"
      />
    </product-list>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @include tablet {
    gap: 44px;
    align-items: center;
  }
}
</style>
