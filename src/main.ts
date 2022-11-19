import { createApp } from "vue"
import { VueQueryPlugin } from "@tanstack/vue-query"

import App from "./App.vue"
import router from "./router"

import "./style.css"

const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 2000 * 120,
        refetchOnReconnect: 'always',
      }
    }
  }
})

app.use(router)
app.mount("#app")
