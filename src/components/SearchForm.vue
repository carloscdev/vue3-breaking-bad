<script setup lang="ts">
import { ref } from 'vue'
import BasePaper from './BasePaper.vue';

const name = ref<string>('')
</script>

<template>
<BasePaper tag="form" custom-class="mb-5">
<input type="text" placeholder="Search by name ..." v-model="name" @input="$emit('searchByName', name)"
  class="bg-transparent py-3 px-5 w-full focus:outline-none border-2 border-neutral-500 focus:border-primary rounded">
</BasePaper>
</template>