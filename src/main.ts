import './assets/main.css'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, createPinia())

app.mount('#app')
