import Home from 'components/Home';
import Search from 'components/Search/Search';
import About from 'components/About';
import NotFound from 'components/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search/:query',
    component: Search
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
