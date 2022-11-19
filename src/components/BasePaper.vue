<script setup lang="ts">
defineProps<{ tag: string, customClass?: string}>()
</script>

<template>
  <component :is="tag" class="bg-neutral-800 p-8 rounded shadow-xl text-lg text-neutral-300" :class="customClass">
    <slot></slot>
  </component>
</template>