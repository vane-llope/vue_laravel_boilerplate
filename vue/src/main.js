import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import router from './router'  

createApp(App).use(router).use(store).mount('#app')
