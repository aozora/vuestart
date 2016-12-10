import Home from 'components/Home';
import About from 'components/About';
import NotFound from 'components/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },

  {
    path: '*',
    component: NotFound
  }
];

export default routes;
