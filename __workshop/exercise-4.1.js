const request = require('request-promise');

async function getDadJoke() {
  const response = await request({uri: 'https://icanhazdadjoke.com',
                                  headers: {"Accept" : "application/json"},
                                  json: true});

  return response.joke;
}

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
