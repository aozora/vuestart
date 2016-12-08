import Home from 'components/Home';
import NotFound from 'components/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '*',
    component: NotFound
  }
];

export default routes;
