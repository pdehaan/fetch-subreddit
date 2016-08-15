const fetch = require('node-fetch');
const sortjson = require('sort-json');

module.exports = {
  fetchSubreddit,
  pretty
};

function _fetchSubreddit(subreddit) {
  const reducer = (prev, {data: {url}}) => prev.push(url) && prev;
  const jsonUri = `https://www.reddit.com/r/${subreddit}/.json`;
  return fetch(jsonUri)
    .then((res) => res.json())
    .then((res) => res.data.children)
    .then((urls) => urls.reduce(reducer, []))
    .then((urls) => ({[subreddit]: urls}));
}

function fetchSubreddit(subreddits) {
  if (!Array.isArray(subreddits)) {
    subreddits = [subreddits];
  }

  subreddits = subreddits.map(_fetchSubreddit);
  return Promise.all(subreddits)
    .then(flatten);
}

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}

function flatten(data) {
  return data.reduce((prev, curr) => {
    for (let key in curr) {
      prev[key] = curr[key];
    }
    return prev;
  }, {});
}
