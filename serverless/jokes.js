const fetch = require('node-fetch');

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const jokeStream = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    const jsonJoke = await jokeStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke),
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
