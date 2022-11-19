<script setup lang="ts">
import TitleBase from '../components/TitleBase.vue';
import useCharactersRandom from '../composables/useCharactersRandom';
import BasePaper from '../components/BasePaper.vue';
import CharacterItems from '../components/characters/CharacterItems.vue';
import BaseLoading from '../components/BaseLoading.vue'

const { characters, isLoading } = useCharactersRandom()
</script>

<template>
  <TitleBase name="About" />
  <BasePaper tag="p">
    Breaking Bad follows protagonist Walter White (Bryan Cranston), a chemistry teacher who lives in New Mexico with his
    wife (Anna Gunn) and teenage son (RJ Mitte) who has cerebral palsy. White is diagnosed with Stage III cancer and
    given a
    prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire
    to
    secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to
    power
    in the world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily
    concerns
    and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug
    trade.
  </BasePaper>
  <TitleBase name="Random" />
  <BaseLoading v-if="isLoading" />
  <Suspense v-else>
    <CharacterItems :characters="characters" />
  </Suspense>
</template>