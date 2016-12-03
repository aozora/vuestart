import jsonTraslochi from 'json-loader!../assets/data/search-results-traslochi.json';
import jsonAutomobile from 'json-loader!../assets/data/search-results-automobile.json';
import jsonIphone7 from 'json-loader!../assets/data/search-results-iphone7.json';

export function fetchResults(query) {

  const json = {
    'traslochi': jsonTraslochi,
    'automobile': jsonAutomobile,
    'iphone7': jsonIphone7,

    'default': ''
  };

  return json[query] || json['default'];




  // /**
  //  * Simulate a delay
  //  * @param milliseconds
  //  */
  // function sleep(milliseconds) {
  //   const start = new Date().getTime();
  //   for (let i = 0; i < 1e7; i += 1) {
  //     if ((new Date().getTime() - start) > milliseconds) {
  //       break;
  //     }
  //   }
  // }
  //
  // sleep(2000); // DEBUG ONLY 2s DELAY!!!!!!!!

  // return json;

  // return _.debounce(function () {
  // debounce the search
  // return fetch('./assets/data/search-results.json')
  //   .then(function (response) {
  //     sleep(2000); // DEBUG ONLY 2s DELAY!!!!!!!!
  //     return response.json();
  //   });
  // .then(function (json) {
  //   // success
  //   console.log('Fetch OK!');
  //   return json;
  // })
  // .catch(function (ex) {
  //   console.error('Fetch Error: ' + ex);
  //   return null;
  // });
  // }, 750);

}
