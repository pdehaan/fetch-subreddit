const {fetchSubreddit, pretty} = require('./index');

fetchSubreddit(['worldnews', 'sports'])
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));
