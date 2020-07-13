const request = require('request-promise');

async function getDadJoke() {
  try {
    const response = await request({uri: 'https://icanhazdadjoke.com',
                                    headers: {"Accept" : "application/json"},
                                    json: true});
    return response.joke;
  } catch (e) {
    console.log(e);
  }
}

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
