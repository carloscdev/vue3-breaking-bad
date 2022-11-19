<script setup lang="ts">
import TitleBase from '../../../components/TitleBase.vue';
import BaseLoading from '../../../components/BaseLoading.vue';
import CharacterItems from '../../../components/characters/CharacterItems.vue';
import useCharacters from '../../../composables/useCharacters';
import { CharacterInterface } from '../../../interfaces/character.interface';
import SearchForm from '../../../components/SearchForm.vue';

const { characters, isLoading, getCharacters, loadedCharacters } = useCharacters('')
const searchByName = async (name: string) => {
  const charactersFiltered: CharacterInterface[] =  await getCharacters(name)
  loadedCharacters(charactersFiltered)
}

</script>

<template>
  <TitleBase name="Characters" />
  <SearchForm @searchByName="searchByName" />
  <BaseLoading v-if="isLoading" />
  <Suspense v-else>
    <CharacterItems :characters="characters" />
  </Suspense>
</template>