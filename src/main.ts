import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import filters from './helpers/filters'

const app = createApp(App)
    .use(VueAxios, axios)    
    .use(store)
    .use(router)

app.config.globalProperties.$filters = filters

app.mount('#app')