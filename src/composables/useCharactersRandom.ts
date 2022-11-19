import { ref } from "vue"
import { useQuery } from "@tanstack/vue-query"
import http from "../api/axios.config"
import type { CharacterInterface } from "../interfaces/character.interface"

const characters = ref<CharacterInterface[]>([])

const getCharacters = async (): Promise<CharacterInterface[]> => {
  if (characters.value.length > 0) return characters.value
  const characterRandom: CharacterInterface[] = []
  for (let i = 1; i < 7; i++) {
    const { data: character } = await http.get<CharacterInterface[]>(
      "/character/random"
    )
    characterRandom.push(character[0])
  }
  return characterRandom
}

const loadedCharacters = (data: CharacterInterface[]) =>
  (characters.value = data)

export const useCharacters = () => {
  const { isLoading } = useQuery(["charactersRandom"], getCharacters, {
    onSuccess: loadedCharacters,
  })

  return {
    characters,
    isLoading,
  }
}

export default useCharacters
