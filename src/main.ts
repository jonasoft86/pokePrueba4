import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 min
        refetchOnReconnect: 'always', // cada vez que a conexão com o servidor for estabelecida, refaz a consulta.
      }
    }
  }
} as any)

app.use(pinia);
app.use(router)

app.mount('#app')
