const { fetchSubreddit, fetchRandomSubredditName, fetchRandomNSFWSubredditName, pretty } = require('./index');

fetchSubreddit(['worldnews', 'sports'])
  .then((urls) => pretty(urls))
  .then((urls) => console.log(urls))
  .catch((err) => console.error(err));

fetchRandomSubredditName(2)
  .then((res) => pretty(res))
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// fetchRandomNSFWSubredditName()
//   .then((res) => pretty(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
