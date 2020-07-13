const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request({uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
                                    json: true});
    return response.joke;
  } catch (e) {
    console.log(e);
  }
};

getGeekJoke().then(response => console.log(response));

module.exports = { getGeekJoke };
