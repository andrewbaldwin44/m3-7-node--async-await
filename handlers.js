const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke } = require('./__workshop/exercise-4.3');

async function handleJoke(req, res, next) {
  const jokeType = req.params.type;

  switch (jokeType) {
    case 'dad':
      res.status(200).json({ status: 200, joke: await getDadJoke() });
      break;
    case 'tronald':
      res.status(200).json({ status: 200, joke: await getTronaldDumpQuote() });
      break;
    case 'geek':
      res.status(200).json({ status: 200, joke: await getGeekJoke() });
      break;
    default:
      next();
      break;
  }
}

module.exports = { handleJoke };
