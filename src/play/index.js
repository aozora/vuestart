import {play} from 'vue-play'
import SearchBox from '../components/Search/SearchBox.vue'

// import any global css for your application
import '../assets/css/app.css';

// dynamic load
// const load = requireContext => requireContext.keys().map(requireContext);
// const scenarios = load(require.context('./scenarios', true, /.js$/));
// configure(scenarios, module);

play(SearchBox, module)
// .add('default', h => h(SearchBox));
  .add('default', {
    template: '<SearchBox></SearchBox>'
  });
