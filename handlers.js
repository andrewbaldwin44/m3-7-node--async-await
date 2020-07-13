const request = require('request-promise');

const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

async function sendDadJoke() {
  return { status: 200, joke: await getDadJoke() };
}

async function sendTronaldDumpQuote() {
  return { status: 200, joke: await getTronaldDumpQuote() };
}

async function sendGeekJoke() {
  return { status: 200, joke: await getGeekJoke() };
}

async function handleJoke(req, res, next) {
  const jokeType = req.params.type;

  switch (jokeType) {
    case 'dad':
      res.status(200).json(await sendDadJoke());
      break;
    case 'tronald':
      res.status(200).json(await sendTronaldDumpQuote());
      break;
    case 'geek':
      res.status(200).json(await sendGeekJoke());
      break;
    default:
      next();
      break;
  }
}

async function randomJoke(req, res) {
  const randomJoke = Math.floor(Math.random() * 2);
  let joke;

  switch (randomJoke) {
    case 0:
      joke = await sendDadJoke();
      break;
    case 1:
      joke = await sendTronaldDumpQuote();
      break;
    default:
      joke = await sendGeekJoke();
      break;
  }

  joke.title = 'Random Jokes'
  res.render('./pages/jokes', joke);
}

function selectJoke(req, res) {
  res.render('./pages/jokeSelection', {title: 'Jokes'});
}

module.exports = { handleJoke, randomJoke, selectJoke };
