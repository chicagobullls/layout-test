<template>
  <div class="swagger-container">
    <div id="swagger-ui"></div>
  </div>
</template>

<script setup lang="ts">
import 'swagger-ui-dist/swagger-ui.css'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-bundle.js'
import { onMounted } from 'vue'
import { swaggerConfig } from '@/assets/mocks/swagger.config'

onMounted(() => {
  SwaggerUI({
    dom_id: '#swagger-ui',
    spec: swaggerConfig,
    deepLinking: true,
  })
})
</script>

<style lang="scss" scoped>
.swagger-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  
  :deep(.swagger-ui) {
    .wrapper {
      padding: 0;
    }
  }
}
</style>