import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';

import 'aos/dist/aos.css';
import Notifications from '@kyvg/vue3-notification'

// Initialize AOS globally
AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    offset: 100,
   
  });

const app = createApp(App)
app.use(Notifications)
app.use(router)
app.use(AOS)
app.use(store)
app.mount('#app')
