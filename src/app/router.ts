import { createRouter, createMemoryHistory } from 'vue-router';
import FormPage from '../pages/FormPage/FormPage.vue';
import ResultPage from '../pages/ResultPage/ResultPage.vue';
 
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: FormPage },
    { path: '/result', component: ResultPage },
    
  ],
});

export default router;