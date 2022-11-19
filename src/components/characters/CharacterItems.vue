<script setup lang="ts">
import type { CharacterInterface } from '../../interfaces/character.interface';
import CharacterCard from './CharacterCard.vue';

defineProps<{ characters: CharacterInterface[] }>()

</script>

<template>
  <ul class="grid items-center md:grid-cols-2 gap-5">
    <template v-for="(character, index) in characters" :key="index">
      <CharacterCard :character="character" />
    </template>
  </ul>
</template>