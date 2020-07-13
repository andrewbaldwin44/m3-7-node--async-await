const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({uri: 'https://api.tronalddump.io/random/quote',
                                    headers: {"Accept": "application/json"}, json: true});
    return response.value;
  } catch (e) {
    console.log(e);
  }
};

getTronaldDumpQuote().then(response => console.log(response));

module.exports = { getTronaldDumpQuote };
