import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import ToastPlugin from 'vue-toast-notification';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(ToastPlugin);
app.mount('#app')
