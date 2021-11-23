const getRandomDadJoke = async () => {
  // const url = 'https://icanhazdadjoke.com/';
  // const jokeStream = await fetch(url, {
  //   headers: {
  //     Accept: 'application/json',
  //   },
  // });
  try {
    const url = '/.netlify/functions/jokes';
    const jokeStream = await fetch(url);
    const jsonJoke = await jokeStream.json();
    // eslint-disable-next-line prefer-destructuring
    const joke = jsonJoke.joke;
    return joke;
  } catch (err) {
    console.log(err);
    return 'Sorry, not in a joking mood. Someone touched my thermostat.';
  }
};

const displayJoke = (joke) => {
  const h1 = document.querySelector('h1');
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

// load 1st joke
refreshJoke();

setInterval(refreshJoke, 10000);
