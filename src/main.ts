// import PrimeVue from 'primevue/config'
// import Lara from './presets/lara'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(
  // PrimeVue,
  // {
  //   unstyled: true
  // },
  createPinia()
)

app.mount('#app')
