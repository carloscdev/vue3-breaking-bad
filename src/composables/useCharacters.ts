import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import http from '../api/axios.config'
import type { CharacterInterface } from '../interfaces/character.interface'

const characters = ref<CharacterInterface[]>([])

const getCharacters = async (name: string): Promise<CharacterInterface[]> => {
  // if (characters.value.length > 0 && name === '') return characters.value
  
  const { data: characterList } = await http.get<CharacterInterface[]>(`/characters?name=${name}`)
  return characterList
}


const loadedCharacters = (data: CharacterInterface[]) => characters.value = data

export const useCharacters = (name: string) => {
  const { isLoading } = useQuery(
    ['characters'],
    () => getCharacters(name),
    {
      onSuccess: loadedCharacters
    }
  )

  return {
    characters,
    isLoading,
    getCharacters,
    loadedCharacters
  }
}

export default useCharacters