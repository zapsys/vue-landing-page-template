import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'

AOS.init({
    easing: 'ease-in-out'
})

createApp(App)
    .mount('#app')
