import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';
import Page4 from '../views/Page4.vue';
import Page5 from '../views/Page5.vue';
import Page6 from '../views/Page6.vue';
// Import other pages as needed

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
  },
  {
    path: '/page4',
    name: 'Page4',
    component: Page4,
  },
  {
    path: '/page5',
    name: 'Page5',
    component: Page5,
  },
  {
    path: '/page6',
    name: 'Page6',
    component: Page6,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
