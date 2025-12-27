import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import router from './router'

AOS.init({
    easing: 'ease-in-out'
})

createApp(App)
    .use(router)
    .mount('#app')
