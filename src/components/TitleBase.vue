<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <h2 class="flex items-center gap-5 text-[3rem] font-semibold my-10">
    <span class="block w-4 h-12 bg-primary"></span>
    {{ name }}
  </h2>
</template>