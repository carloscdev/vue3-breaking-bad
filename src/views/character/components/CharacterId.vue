<script setup lang="ts">
import { watchEffect } from "vue"
import { useRoute } from "vue-router"
import BaseLoading from "../../../components/BaseLoading.vue"
import BasePaper from "../../../components/BasePaper.vue"
import TitleBase from "../../../components/TitleBase.vue"
import useCharacter from "../../../composables/useCharacter"
import defaultImage from "../../../mixins/default-image.mixin"
import router from "../../../router"

const route = useRoute()

const { id } = route.params as { id: string }

const { character, isLoading, isError } = useCharacter(id)

watchEffect(() => {
  if ((isError.value && !isLoading.value) || (!isLoading.value && !character.value)) router.replace({ name: 'characters'})
})
</script>

<template>
  <BaseLoading v-if="isLoading" />
  <template v-if="character && !isLoading">
    <TitleBase :name="character.name" />
    <div class="grid md:grid-cols-[0.7fr,_1fr] gap-5">
      <img :src="character.img" :alt="character.name" class="w-full object-cover shadow rounded" @error="defaultImage" />
      <main class="grid gap-5">
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">N° ID :</span>
          {{ character.char_id }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">PORTRAYED :</span>
          {{ character.portrayed }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">NAME :</span>
          {{ character.name }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">NICKNAME :</span>
          {{ character.nickname }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">STATUS :</span>
          {{ character.status }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">BIRTHDAY :</span>
          {{ character.birthday }}
        </BasePaper>
        <BasePaper tag="div" class="flex items-center justify-between">
          <span class="font-bold text-primary">OCCUPATION :</span>
          {{ character.occupation.join(',') }}
        </BasePaper>
      </main>
    </div>
  </template>
</template>
