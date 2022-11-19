<script setup lang="ts">
import BasePaper from '../BasePaper.vue'
import type { CharacterInterface } from '../../interfaces/character.interface'
import { useRouter } from 'vue-router';
import defaultImage from '../../mixins/default-image.mixin';

const props = defineProps<{ character: CharacterInterface }>()

const router = useRouter()

const goToDetail = () => router.push({ name: 'character-id', params: { id: props.character.char_id }})
</script>

<template>
  <BasePaper tag="li"
    custom-class="flex items-center gap-5 hover:-translate-y-2 ease-in-out duration-100 cursor-pointer group" @click="goToDetail">
    <img :src="character.img" :alt="character.portrayed" width="90" height="90" loading="lazy"
      class="h-[90px] w-[90px] object-cover rounded" @error="defaultImage">
    <div>
      <h3 class="font-semibold text-xl group-hover:text-primary">{{ character.name }}</h3>
      <small>{{ character.portrayed }}</small>
    </div>
  </BasePaper>
</template>