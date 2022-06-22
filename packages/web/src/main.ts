import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { worker } from './mocks/browser'
if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: ({ url }) => {
      if (!url.pathname.startsWith('/api'))
        return false
    },
  })
}

const routes = setupLayouts(generatedRoutes)

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
