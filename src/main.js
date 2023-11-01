import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import ToastPlugin from 'vue-toast-notification';

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(ToastPlugin);
app.mount('#app')
