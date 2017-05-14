import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Search from '@/components/Search/Search';
import About from '@/components/About';
import Login from '@/components/Login';
import NotFound from '@/components/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },

  {
    path: '*',
    component: NotFound
  }
];

// export default routes;
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

export default router;
