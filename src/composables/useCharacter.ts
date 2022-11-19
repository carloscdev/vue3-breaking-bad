import { computed, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import http from '../api/axios.config'
import type { CharacterInterface } from '../interfaces/character.interface'

const characters = ref<CharacterInterface[]>([])
const isError = ref<boolean>(false)

const getCharacters = async (id: string): Promise<CharacterInterface[]> => {
  if (characters.value[0]?.char_id === +id) return characters.value

  const { data: characterList } = await http.get<CharacterInterface[]>(`/characters/${id}`)
  
  return characterList
}

const loadedCharacters = (data: CharacterInterface[]) => characters.value = data

const redirectError = () => {
  isError.value = true
}

export const useCharacters = (id: string) => {
  const { isLoading } = useQuery(
    ['characters', id],
    () => getCharacters(id),
    {
      onSuccess: loadedCharacters,
      onError: redirectError
    }
  )

  return {
    character: computed<CharacterInterface | null>(() => characters.value[0]),
    isLoading,
    isError
  }
}

export default useCharacters