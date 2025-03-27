import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './app/router.ts'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
