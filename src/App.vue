<script setup lang="ts">
import MainLayout from './layout/MainLayout.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <MainLayout>
    <template #children>
      <RouterView />
    </template>
  </MainLayout>
</template>

<style scoped>
</style>
