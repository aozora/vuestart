import Home from 'components/Home/Home';
import AutoCatalog from 'components/AutoCatalog/AutoCatalog';
import AddToCatalog from 'components/AutoCatalog/AddToCatalog';
import EnableMe from 'components/EnableMe';
import ThankYou from 'components/ThankYou';

import ResultsEpson from 'components/FakePages/ResultsEpson';
import ResultsEan from 'components/FakePages/ResultsEan';
import BandoAutomobile from 'components/FakePages/BandoAutomobile';

import NotFound from 'components/NotFound/NotFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/autocatalog',
    component: AutoCatalog
  },
  {
    path: '/addtocatalog',
    component: AddToCatalog
  },
  {
    path: '/abilitati',
    component: EnableMe
  },
  {
    path: '/thankyou',
    component: ThankYou
  },
  {
    path: '/stampanti',
    component: ResultsEpson
  },
  {
    path: '/ean',
    component: ResultsEan
  },
  {
    path: '/automobile',
    component: BandoAutomobile
  },

  {
    path: '*',
    component: NotFound
  }
];

export default routes;
