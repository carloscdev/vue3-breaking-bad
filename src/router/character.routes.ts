import type { RouteRecordRaw } from "vue-router"
import CharactersView from "../views/character/CharactersView.vue"
import CharacterId from "../views/character/components/CharacterId.vue"
import CharacterList from "../views/character/components/CharacterList.vue"

const characterRoute: RouteRecordRaw = {
  path: "/characters",
  name: "characters",
  redirect: "/characters/list",
  component: CharactersView,
  children: [
    {
      path: "list",
      name: "/character-list",
      component: CharacterList,
    },
    {
      path: "detail/:id",
      name: "character-id",
      component: CharacterId,
    },
  ],
}

export default characterRoute
