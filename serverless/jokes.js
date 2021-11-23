const axios = require('axios');

/*
 https://axios-http.com/docs/res_schema
*/

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const jokeStream = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'axios 0.21.1',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(jokeStream.data),
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 422, body: err.stack };
  }
};
