<script setup lang="ts">
import BreakingBadLogo from '../assets/logo.png'
import { RouterLink } from 'vue-router'
import type { RouteLink } from '../router/link.routes';

interface Props {
  title: string;
  links: RouteLink[];
}
defineProps<Props>()
</script>

<template>
  <header class="">
    <nav class="py-10 content flex items-center justify-between">
      <div class="flex gap-3 items-center">
        <img :src="BreakingBadLogo" alt="Logo Breaking Bad" width="60" height="60" />
        <h2 class="font-bold text-2xl">{{ title }}</h2>
      </div>
      <ul class="flex items-center gap-3 font-semibold">
        <li v-for="(link, index) in links" :key="index">
          <RouterLink :to="link.path">{{ link.title }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>