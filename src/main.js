// import css files
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/demos/demo-5.css'
// import './assets/css/main.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";

import store from "@/store";

createApp(App)
    .use(router)
    .use(Vuex)
    .use(store)
    .mount('#app')
