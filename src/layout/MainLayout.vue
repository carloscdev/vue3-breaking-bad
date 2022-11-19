<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import { routeLink } from '../router/link.routes';

</script>

<template>
  <div class="bg-neutral-900 min-h-screen text-white">
    <NavBar title="Breaking Bad" :links="routeLink" />
    <main class="content py-32">
      <slot name="children"></slot>
    </main>
  </div>
</template>