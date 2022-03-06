// import css files
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/demos/demo-5.css'
// import './assets/css/main.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
