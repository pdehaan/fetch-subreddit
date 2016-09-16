const { fetchSubreddit, fetchRandomSubredditName, pretty } = require('./index');

// Fetch 2 random subreddits via /r/random, then grab each subreddits's JSON feed.
fetchRandomSubredditName(2)
  .then((res) => res.map(({name}) => name))
  .then((subreddits) => fetchSubreddit(subreddits))
  .then((res) => pretty(res))
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
