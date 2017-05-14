/* eslint-disable func-names, no-unused-vars */

import loginJson from './post-login-mock.json';

export default {
  'POST /api/Login': function (pathMatch, query, request) {
    return {
      body: loginJson,
      status: 200,
      statusText: 'OK',
      delay: 500 // millisecond
    };
  }
};
