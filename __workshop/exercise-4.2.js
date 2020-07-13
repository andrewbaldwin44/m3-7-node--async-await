const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  const response = await request({uri: 'https://api.tronalddump.io/random/quote',
                                  headers: {"Accept": "application/json"}, json: true});
  return response.value;
};

getTronaldDumpQuote().then(response => console.log(response));
