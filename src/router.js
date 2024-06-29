import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import StudentListView from './views/StudentListView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/students', component: StudentListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
